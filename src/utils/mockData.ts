const mockData = {
  accountImage:
    'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  countOfPosts: Math.floor(Math.random() * 100),
  weeklyLikes: Math.floor(Math.random() * 500),
  weeklyComments: Math.floor(Math.random() * 150),
  weeklyFollowing: 50,
  weeklyFollower: Math.floor(Math.random() * 400),
  recentPosts: [
    {
      postId: 1,
      content:
        'Check out our new features! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      likes: 500,
      comments: 50,
    },
    {
      postId: 2,
      content:
        'Join our community event! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      likes: 600,
      comments: 60,
    },
  ],
  lastComments: [
    {
      comment: 'Great update!',
      author: 'John Doe',
      authorPhoto:
        'https://images.freeimages.com/variants/CNtsSoFF5JRuJ781QTWmFXXr/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d',
    },
    {
      comment: 'Loving the new features.',
      author: 'Jane Smith',
      authorPhoto:
        'https://images.freeimages.com/variants/CNtsSoFF5JRuJ781QTWmFXXr/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d',
    },
    {
      comment: "Can't wait to try it out.",
      author: 'Alice Johnson',
      authorPhoto:
        'https://images.freeimages.com/variants/CNtsSoFF5JRuJ781QTWmFXXr/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d',
    },
  ],
};

export default mockData;
