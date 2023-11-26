export interface Contents {
  id: string;
  author: string;
  coverImgUrl: string;
  creationDate: string;
  likeCounts: number;
  title: string;
  body: string;
}

export interface Comments {
  id: string;
  contentId: string;
  author: string;
  text: string;
  creationDate: string;
  likeCounts: number;
}
