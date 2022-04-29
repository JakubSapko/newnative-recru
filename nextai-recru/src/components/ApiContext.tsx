import { createContext, ReactNode, useContext, useMemo, useState } from "react";

import { Configuration, OpenAIApi } from "openai";

interface IApiContext {
  apiKey: string | null;
  handleSubmit: (apiKey: string) => void;
  openAiMemo: OpenAIApi | null,
  clearApiKey: () => void
}


const ApiContext = createContext<IApiContext>({
  apiKey: null,
  handleSubmit: (apiKey: string) => {
  },
  openAiMemo: null,
  clearApiKey: () => {
    
  }
});

export const useApiContext = () => {
  const context = useContext(ApiContext);

  return context;
};

type ApiContextProviderProps = {
  children: ReactNode;
};


const getOpenAI = (apiKey: string) => {
  const config = new Configuration({
    apiKey: apiKey
  });

  return new OpenAIApi(config);
}

export const ApiContextProvider = ({ children }: ApiContextProviderProps) => {
  const [apiKey, setApiKey] = useState<string | null>(null);



  const openAiMemo = useMemo(() => {
      const openAI = apiKey ? getOpenAI(apiKey) : null;
      
      return openAI;

  }, [apiKey])

  const clearApiKey = () => {
    setApiKey(null);
  }

  const handleSubmit = (apiKey: string) => {
    console.log("Received key", apiKey);
    setApiKey(apiKey);
  };

  const contextValue: IApiContext = {
    apiKey,
    handleSubmit,
    openAiMemo, 
    clearApiKey
  };

  return (
    <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>
  );
};
