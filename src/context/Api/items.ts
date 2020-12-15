import { AxiosInstance } from "axios";

export default class Items {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  getAllItems() {
    return this.client.get("/items/");
  }

  addItem(data: any) {
    return this.client.post("/items/", data);
  }
}
