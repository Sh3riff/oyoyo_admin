import React, { createContext, FC, useEffect, useState } from "react";
import { useErrorDispatch } from "../Error";
import axios, { AxiosInstance } from "axios";
import Auth from "./auth";
import Items from "./items";
import Category from "./category";
import Markets from "./markets";
import Addons from "./addons";

interface ApiProps {
  auth: Auth;
  items: Items;
  addons: Addons;
  category: Category;
  markets: Markets;
  HttpClient: AxiosInstance;
}

interface ContextProps extends ApiProps {
  setApiHeaders: (token: string) => void;
}

const ApiContext = createContext<ContextProps | undefined>(undefined);

//Staging endpoint
const axiosInstance = axios.create({
  baseURL: "https://oyoyo.pythonanywhere.com/api/v1",
});

const ApiProvider: FC = ({ children }) => {
  const [api] = useState<ApiProps>({
    auth: new Auth(axiosInstance),
    items: new Items(axiosInstance),
    addons: new Addons(axiosInstance),
    category: new Category(axiosInstance),
    markets: new Markets(axiosInstance),
    HttpClient: axiosInstance,
  });

  const dispatch = useErrorDispatch();

  useEffect(() => {
    //Intercept For Error reset
    axiosInstance.interceptors.request.use(
      function (config: any) {
        // Reset error state before make a fresh API call
        dispatch({
          type: "RESET_ERROR",
        });

        return config;
      },
      function (error: any) {
        return Promise.reject(error);
      }
    );

    //Intercept For Errors
    axiosInstance.interceptors.response.use(
      function (response) {
        // Do something with response data
        return response;
      },
      function (error) {
        console.log(error.response);
        // Do something with response error
        const errorResponse = error.response;
        // const errorRequest = error.request;

        errorResponse &&
          dispatch({
            type: "GET_ERRORS",
            payload: {
              message:
                typeof errorResponse.data.error === "string"
                  ? errorResponse.data.error
                  : typeof errorResponse.data.error === "object"
                  ? Object.entries(errorResponse.data.error)[0][1]
                  : errorResponse.data.message,
              detail: errorResponse && errorResponse.data.detail,
              statusText: errorResponse && errorResponse.statusText,
            },
          });

        return Promise.reject(error);
      }
    );
  }, [dispatch]);

  const setApiHeaders = (token: string) => {
    api.HttpClient.defaults.headers.common["authorization"] = `Bearer ${token}`;

    api.HttpClient.defaults.headers.common["Content-Type"] = "application/json";
  };

  return (
    <ApiContext.Provider
      value={{
        ...api,
        setApiHeaders,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

function useApiContext() {
  const context = React.useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useApiContext must be used within a ApiProvider");
  }

  return context;
}

export { ApiProvider, useApiContext };
