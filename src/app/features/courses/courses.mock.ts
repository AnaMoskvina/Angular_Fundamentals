import { Course } from './courses.types';

export const coursesMock: Course[] = [
    {
      title: 'React',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      creationDate: 'Mon Feb 03 2020 00:00:00 GMT+0300 (Moscow Standard Time)',
      duration: 100,
      authors: ['Kim Wiseley', 'Jim Pollok']
    },
    {
      title: 'NodeJS',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      creationDate: 'Wed Dec 25 2019 00:00:00 GMT+0300 (Moscow Standard Time)',
      duration: 220,
      authors: ['Leon Breger']
    },
    {
      title:'Angular',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      creationDate: 'Sun Jan 02 2022 00:00:00 GMT+0300 (Moscow Standard Time)',
      duration:  121,
      authors: ['Dave Davidson', 'Ivan Ivanov']
    }
];