export interface User {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface Voucher {
  code: string;
  title: string;
  discountValue: number;
  backgroundImage: string;
}
