export interface LoginForm {
  username: string;
  password: string;
}

export interface RegisterForm {
  username: string;
  password: string;
  email: string;
}
export interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  tagList: Array<string>;
  createdAt: string;
  updatedAt: string;
  favoritesCount: number;
  author: Author;
}

export interface ArticlesQuery {
  limit: number;
  offset: number;
}

export interface FeedArticlesQuery {
  limit: number;
  offset: number;
}
