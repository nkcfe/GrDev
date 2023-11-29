import { DocumentData } from "firebase/firestore";

export interface Contents {
  id: string;
  author: string;
  coverImgUrl: string;
  creationDate: string;
  likeCounts: number;
  title: string;
  body: string;
}

export type ContentsDocumentData = DocumentData & Contents;

export interface Comments {
  id: string;
  contentId: string;
  author: string;
  text: string;
  creationDate: string;
  likeCounts: number;
}

export interface Projects {
  id: string;
  author: string;
  type: string;
  title: string;
  summary: string;
  purpose: string;
  weekly_time: string;
  recruitment_role: string;
  detail_body: string;
  creation_date: string;
  likes_counts: number;
}

export interface Questions {}

export interface ContactProps {
  contactTypeValue: string;
  setContactTypeValue: React.Dispatch<React.SetStateAction<string>>;
  contactTitleValue: string;
  setContactTitleValue: React.Dispatch<React.SetStateAction<string>>;
  contactDesValue: string;
  contactSetDesValue: React.Dispatch<React.SetStateAction<string>>;
  contactPurposeValue: string;
  setContactPurposeValue: React.Dispatch<React.SetStateAction<string>>;
  contactTimeValue: string;
  setContactTimeValue: React.Dispatch<React.SetStateAction<string>>;
  contactSelectedOption: string;
  setContactSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  projects?: Projects[];
  setProjects: React.Dispatch<React.SetStateAction<Projects[]>>;
  projectBodyValue: string;
  setProjectBodyValue: React.Dispatch<React.SetStateAction<string>>;
}
