import { PostComment } from './PostComment';
import { User } from './User';


//  https://marketplace.visualstudio.com/items?itemName=GregorBiswanger.json2ts
// http://www.jsontots.com/
// https://jsonplaceholder.typicode.com/posts/1?_expand=user&_embed=comments

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface FullPost extends Post {
  /**
   * List of comments
   * API: ?_embed=comments
   */
  comments: PostComment[];
  /**
   * User
   * API: ?_expand=user
   */
  userId: number;
  user: User;
}
