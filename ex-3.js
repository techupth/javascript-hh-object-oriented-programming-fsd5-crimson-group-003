// Ex. 3
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
//Mynote สร้าง Object จากคลาส User
const user1 = new User("101", "Leang N", "devrleange@gmail.com");
console.log(user1);

class Post {
  constructor(title) {
    this.title = title;
  }
}

class PostList {
  constructor() {
    this.posts = [];
  }

  addPost(post) {
    this.posts.push(post);
  }

  sharePost() {
    this.posts.forEach((post) => {
      console.log(`You've shared post "${post.title}" to your friend.`);
    });
  }
}

// สร้าง Object จาก Class PostList
const postList = new PostList();
// เพิ่ม Post เข้าไปใน postList
postList.addPost(new Post("First Post"));
postList.addPost(new Post("Second Post"));

// แสดงผล title ของ Post ทั้งหมดใน postList
postList.sharePost();

class Comment {
  constructor(id, content, createdBy, likes) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.likes = 0;
  }
  addLike() {
    this.likes += 1;
  }
}
const addlike1 = new Comment("1", "content test", "leang");
addlike1.addLike(1);
console.log(addlike1.likes); //***Leang Check again

class Facebook {
  constructor() {
    this.groupList = [];
    this.pageList = [];
  }

  addGroup(group) {
    this.groupList.push(group);
  }

  addPage(page) {
    this.pageList.push(page);
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
      `Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}"`
    );
  }
}
