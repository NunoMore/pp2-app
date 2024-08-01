export class User {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  constructor(
    username: string,
    email: string,
    password: string,
    phoneNumber: string
  ) {
    this.email = email;
    this.username = username;
    this.password = password;
    this.phoneNumber = phoneNumber;
  }
}
