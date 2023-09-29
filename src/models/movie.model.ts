export interface Movie {
    id: string;
    name: string;
    description: string;
    thumbnail: string;
    rating: number;
    duration: number;
    genres: Genre[];
    releasedAt: string; 
  }

  export interface MovieState {
    suggestions: Movie[];
    results: Movie[];
    status: Status;
    error: string | null;
}
  
  type Genre = 
    | 'action'
    | 'adventure'
    | 'animation'
    | 'biography'
    | 'comedy'
    | 'crime'
    | 'drama'
    | 'fantasy'
    | 'history'
    | 'horror'
    | 'mystery'
    | 'romance'
    | 'sci-fi'
    | 'thriller'
    | 'war'
    | 'western';
  
export type Status = 'idle' | 'loading' | 'failed' | 'succeeded';