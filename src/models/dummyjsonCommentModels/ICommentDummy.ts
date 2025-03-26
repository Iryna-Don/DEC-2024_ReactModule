import {IUserShortInfoDummy} from "./IUserShortInfoDummy.ts";

export interface ICommentDummy {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: IUserShortInfoDummy;
}