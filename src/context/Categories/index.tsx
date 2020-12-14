import React, { useState, useEffect, createContext, FC } from "react";
import { useApiContext } from "../Api";
import { CategoryStateProps } from "./types";

const CategoryContext = createContext<CategoryStateProps | undefined>(
  undefined
);

const CategoryProvider: FC = ({ children }) => {
  const [categories, setCategories] = useState<CategoryStateProps>({
    isLoading: false,
    data: [],
  });

  const { category } = useApiContext();

  useEffect(() => {
    const getAllCategories = async () => {
      setCategories((prevCategories) => ({
        ...prevCategories,
        isLoading: true,
      }));

      try {
        const res = await category.getAllCategories();

        const { data } = res.data;

        setCategories((prevCategories) => ({
          ...prevCategories,
          isLoading: false,
          data,
        }));
      } catch (error) {
        setCategories((prevCategories) => ({
          ...prevCategories,
          isLoading: false,
        }));

        console.log(error);
      }
    };

    getAllCategories();
  }, [category]);

  return (
    <CategoryContext.Provider value={categories}>
      {children}
    </CategoryContext.Provider>
  );
};

function useCategoryContext() {
  const context = React.useContext(CategoryContext);

  if (context === undefined) {
    throw new Error(
      "useCategoryContext must be used within a CategoryProvider"
    );
  }
  return context;
}

export { CategoryProvider, useCategoryContext };
