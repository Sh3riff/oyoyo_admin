import { AxiosInstance } from "axios";

export default class Category {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  getAllCategories() {
    return this.client.get("/category/");
  }

  addCategory(formData: FormData) {
    return this.client.post("/category/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  deleteCategory(categoryId?: number) {
    return this.client.delete(`/category/${categoryId}`);
  }
}
