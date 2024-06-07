export type SignupRequestBody = {
  name: string;
  email: string;
  password: string;
};

export type LoginRequestBody = {
  email: string;
  password: string;
};

export type LogoutRequestBody = {
  userId: number;
  email: string;
};

export type ResetPassRequestBody = {
  email: string;
  oldPassword: string;
  newPassword: string;
};
