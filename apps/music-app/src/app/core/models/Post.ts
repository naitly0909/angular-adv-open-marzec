//  https://marketplace.visualstudio.com/items?itemName=GregorBiswanger.json2ts
// http://www.jsontots.com/
// https://jsonplaceholder.typicode.com/posts/1?_expand=user&_embed=comments

export interface Post {
  id: number;
  title: string;
  body: string;
  /**
   * List of comments
   */
  comments?: PostComment[];
  // User
  userId: number;
  user?: User;
}

export interface PostComment {
  id: number;
  name: string;
  postId: number;
  email: string;
  body: string;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

// interface Point{x:number; y:number}
// interface Vector{x:number; y:number}

// const x:Point = {x:1, y:2}
// const y:Vector = x

type PostMedia = PostImage | PostVideo;

enum PostMediaType {
  Image = 'Image',
  Video = 'Video'
}

interface PostImage {
  id: number;
  type: PostMediaType.Image;
  size: [number, number];
}
interface PostVideo {
  id: number;
  type: PostMediaType.Video;
  duration: [number, number];
}

const x: PostMedia = {};

switch (x.type) {
  case PostMediaType.Image:
    x.size;
    break;
  case PostMediaType.Video:
    x.duration;
    break;
}
