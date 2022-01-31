const { Observable, forkJoin, of } = require('rxjs');
const {
  distinctUntilKeyChanged,
  filter,
  mergeMap,
  catchError,
  map
} = require('rxjs/operators');

const userActionEmulation$ = new Observable(observer => {
  setTimeout(() => observer.next({ value: 'A' }), 1000);
  setTimeout(() => observer.next({ value: 'B' }), 1000);
  setTimeout(() => observer.next({ value: 'B' }), 1000);
  setTimeout(() => observer.next({ value: 'C' }), 1000);
  setTimeout(() => observer.next({ value: 'D' }), 1000);
  setTimeout(() => observer.next({ value: 'E' }), 1000);
  setTimeout(() => observer.next({ value: 'E' }), 1000);
  setTimeout(() => observer.complete(), 5001);
});

const sucessRequestEmulation$ = new Observable(observer => {
  setTimeout(() => {
    observer.next({ value: `It's a response value` });
    observer.complete();
  }, 0);
});

const errorRequestEmulation$ = new Observable(observer => {
  setTimeout(() => {
    observer.error({ error: `It's error from the server` });
    observer.complete();
  }, 0);
});

userActionEmulation$.pipe(
// YOUR CODE STARTS HERE
  distinctUntilKeyChanged('value'),
  filter(result => result.value === 'C' || result.value === 'E'),
  mergeMap(result => forkJoin({
    value: result.value, 
    response: sucessRequestEmulation$, 
    error: errorRequestEmulation$.pipe(catchError(err => of(err.error)))
  })),
  map(result => `Value - ${result.value}; Response - ${result.response.value}; Error - ${result.error}`),
// YOUR CODE ENDS HERE
).subscribe(
  (result) => console.log(result),
  (err) => { throw err },
  () => console.log('Execution ended'),
);

console.log('Execution started');

// Expected output !console.log!:

// Execution started
// Value - C; Response - It's a response value; Error - It's error from the server
// Value - E; Response - It's a response value; Error - It's error from the server
// Execution ended