import React, { useState, useEffect, createContext, FC } from "react";
import { useApiContext } from "../Api";
import { ItemStateProps } from "./types";

const ItemContext = createContext<ItemStateProps | undefined>(undefined);

const ItemProvider: FC = ({ children }) => {
  const [items, setItems] = useState({
    isLoading: false,
    data: [],
  });

  const { items: api } = useApiContext();

  useEffect(() => {
    const getAllItems = async () => {
      setItems((prevItems) => ({
        ...prevItems,
        isLoading: true,
      }));

      try {
        const res = await api.getAllItems();

        const { data } = res.data;

        setItems((prevItems) => ({
          ...prevItems,
          isLoading: false,
          data,
        }));
      } catch (error) {
        setItems((prevItems) => ({
          ...prevItems,
          isLoading: false,
        }));

        console.log(error);
      }
    };

    getAllItems();
  }, [api]);

  const refetchItems = async () => {
    setItems((prevItems) => ({
      ...prevItems,
      isLoading: true,
    }));

    try {
      const res = await api.getAllItems();

      const { data } = res.data;

      setItems((prevItems) => ({
        ...prevItems,
        isLoading: false,
        data,
      }));
    } catch (error) {
      setItems((prevItems) => ({
        ...prevItems,
        isLoading: false,
      }));

      console.log(error);
    }
  };

  return (
    <ItemContext.Provider value={{ ...items, refetchItems }}>
      {children}
    </ItemContext.Provider>
  );
};

function useItemContext() {
  const context = React.useContext(ItemContext);

  if (context === undefined) {
    throw new Error("useItemContext must be used within a ItemProvider");
  }
  return context;
}

export { ItemProvider, useItemContext };
