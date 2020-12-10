import { AxiosInstance } from "axios";

export interface UserSigninProps {
  email: string;
  password: string;
}

export default class Auth {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  login(userDetails: UserSigninProps) {
    return this.client.post("/accounts/auth/", userDetails);
  }
}
