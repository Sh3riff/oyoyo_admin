import { AxiosInstance } from "axios";

export default class Markets {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  getAllMarkets() {
    return this.client.get("/markets/");
  }

  getLocations() {
    return this.client.get("/locations");
  }

  getGeolocations() {
    return this.client.get("/geolocations");
  }

  getBudgets() {
    return this.client.get("/budgets");
  }
}
