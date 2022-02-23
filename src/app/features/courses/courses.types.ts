export type Course = {
    id?: string; // TODO: make obligatory
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors: any; // TODO: update type
  };