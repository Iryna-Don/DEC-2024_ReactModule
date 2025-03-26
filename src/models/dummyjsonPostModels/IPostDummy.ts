import {IReactionsDummy} from "./IReactionsDummy.ts";

export interface IPostDummy {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: IReactionsDummy;
  views: number;
  userId: number;
}