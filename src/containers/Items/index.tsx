import React from "react";
import { ItemProvider } from "../../context/Items";
import ItemScreen from "./ItemScreen";

const Items = () => {
  return (
    <ItemProvider>
      <ItemScreen />
    </ItemProvider>
  );
};

export default Items;
