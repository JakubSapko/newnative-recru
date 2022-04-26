import { createContext, ReactNode, useContext, useState } from "react";

interface IApiContext {
  apiKey: string | null;
  handleSubmit: (apiKey: string) => void;
}


const ApiContext = createContext<IApiContext>({
  apiKey: null,
  handleSubmit: (apiKey: string) => {
  },
});

export const useApiContext = () => {
  const context = useContext(ApiContext);

  return context;
};

type ApiContextProviderProps = {
  children: ReactNode;
};

export const ApiContextProvider = ({ children }: ApiContextProviderProps) => {
  const [apiKey, setApiKey] = useState<string | null>(null);


  const handleSubmit = (apiKey: string) => {
    console.log("Received key", apiKey);
    setApiKey(apiKey);
  };

  const contextValue: IApiContext = {
    apiKey,
    handleSubmit,
  };

  return (
    <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>
  );
};
