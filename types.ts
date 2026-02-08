
export interface AppDetails {
  name: string;
  version: string;
  size: string;
  updatedOn: string;
  icon: string;
}

export interface Screenshot {
  url: string;
  alt: string;
}

export interface SearchResult {
  title: string;
  content: string;
  type: 'cheat' | 'guide' | 'info' | 'error';
}
