import { AxiosInstance } from "axios";

export default class Addons {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  getAllAddons() {
    return this.client.get("/addons/");
  }

  getAddonCategory() {
    return this.client.get("/addon_category/");
  }
}
