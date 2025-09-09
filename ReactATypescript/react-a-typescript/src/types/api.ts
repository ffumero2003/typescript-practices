export interface ApiRes<T>  {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
};

export interface Sec  {
  name: string;
  url: string;
}

export interface Character  {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Sec;
  location: Sec;
  image: string;
  episode: string[];
  url: string;
  created: string;
}