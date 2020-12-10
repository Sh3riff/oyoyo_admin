import React, { createContext, FC, useEffect, useState } from "react";
import { useErrorDispatch } from "../Error";
import axios, { AxiosResponse } from "axios";
import Auth, { UserSigninProps } from "./auth";

interface ApiProps {
  auth: {
    login: (userDetails: UserSigninProps) => Promise<AxiosResponse<any>>;
  };
}

const ApiContext = createContext<ApiProps | undefined>(undefined);

//Staging endpoint
const axiosInstance = axios.create({
  baseURL: "https://oyoyo.pythonanywhere.com/api/v1",
});

const ApiProvider: FC = ({ children }) => {
  const [api] = useState({
    auth: new Auth(axiosInstance),
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

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};

function useApiContext() {
  const context = React.useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useApiContext must be used within a ApiProvider");
  }

  return context;
}

export { ApiProvider, useApiContext };
