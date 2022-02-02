import { Course } from './courses.types';

export const coursesMock: Course[] = [
    {
      title: 'React',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      creationDate: new Date('02.03.2020'),
      duration: 100,
      authors: ['Kim Wiseley', 'Jim Pollok']
    },
    {
      title: 'NodeJS',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      creationDate: new Date('12.25.2019'),
      duration: 220,
      authors: ['Leon Breger']
    },
    {
      title:'Angular',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      creationDate: new Date('01.02.2022'),
      duration:  121,
      authors: ['Dave Davidson', 'Ivan Ivanov']
    }
];