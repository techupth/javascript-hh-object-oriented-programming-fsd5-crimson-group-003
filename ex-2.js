class Notification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver, emailAddress) {
    super(notificationId, createdTime, content, receiver);
    this.emailAddress = emailAddress;
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver,phoneNumber) {
    super(notificationId, createdTime, content, receiver);
    this.phoneNumber=phoneNumber;
  }
 
}

const emailNotification = new EmailNotification(
  "1001",
  "2023-12-14 10:30:00",
  "Email notification content.",
  "devrleang@email.com"
);

const smsNotification = new SMSNotification(
  "1002",
  "2023-12-14 12:00:00",
  "SMS notification content.",
  "089-888877888"
);
emailNotification.send();
smsNotification.send();



