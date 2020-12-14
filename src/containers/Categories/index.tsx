import React from "react";
import { CategoryProvider } from "../../context/Categories";
import CategoryScreen from "./CategoryScreen";

const Categories = () => {
  return (
    <CategoryProvider>
      <CategoryScreen />
    </CategoryProvider>
  );
};

export default Categories;
