import {
  type ComponentType,
  type LazyExoticComponent,
  type ReactNode,
} from 'react';

export interface RouteConfig {
  path: string;
  page: LazyExoticComponent<ComponentType<object>>;
  layout: React.ComponentType<{ children: ReactNode }>;
}

export interface SocialAccount {
  id: string;
  accountName: string;
  accountImage: string;
  engagementRate: number;
  followers: number;
  following: number;
  countOfPosts: number;
  socialMediaName: string;
  weeklyLikes: number;
  weeklyComments: number;
  weeklyFollowing: number;
  weeklyFollower: number;
  recentPosts: {
    postId: number;
    content: string;
    likes: number;
    comments: number;
  }[];
  lastComments: {
    comment: string;
    author: string;
    authorPhoto: string;
  }[];
}

export interface RejectedActionPayload {
  error: {
    message: string;
  };
}

export interface SocialAccountFormValues {
  socialMediaName: string;
  accountName: string;
  followers: number;
  following: number;
  engagementRate: number;
}
