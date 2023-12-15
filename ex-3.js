//  Start coding here

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class postList {
  constructor(posts) {
    this.posts = posts;
  }
  addPost(post) {
    this.posts.push(post);
  }
  sharePost(postTitle) {
    console.log(`You've shared post ${postTitle} to your friend.`);
  }
}

class Post {
  constructor(id, title, content, comments) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comments = comments;
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment {
  constructor(id, content, createdBy) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }
}

class Facebook {
  constructor(groupList, pageList) {
    this.groupList = groupList;
    this.pageList = pageList;
  }

  addGroup(faceGroup) {
    this.groupList.push(faceGroup);
  }

  addPage(facePage) {
    this.pageList.push(facePage);
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }
  send(commentCreatedBy, postTitle) {
    console.log(
      `Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}`
    );
  }
}
