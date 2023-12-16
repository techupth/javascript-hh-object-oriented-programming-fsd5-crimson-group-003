class EmailNotification {
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

class SMSNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }
  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}

const emailNotification = new EmailNotification(
  "089",
  "15-12-2023 08:30:00",
  "Notification content.",
  "devrleang@email.com"
);
emailNotification.send();

const smsNotification = new SMSNotification(
  "088",
  "15-12-2023 08:30:00",
  "SMS content.",
  "089-7896468"
);
smsNotification.send();
