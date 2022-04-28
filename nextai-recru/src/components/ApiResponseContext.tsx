import { createContext, ReactNode, useContext, useState } from "react";

interface IApiData {
  quote: string;
  philosopher: string;
  photo: string;
}

interface IApiResponseContext {
  data: IApiData | null;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  setStatesAfterResponse: (text: string, philo: string, phot: string) => void;
}

const ApiResponseContext = createContext<IApiResponseContext>({
  data: null,
  isLoading: false,
  setIsLoading: () => {},
  setStatesAfterResponse: (text: string, philo: string, phot: string) => {},
});

export const useApiResponseContext = () => {
  const context = useContext(ApiResponseContext);

  return context;
};

type ApiContextProviderProps = {
  children: ReactNode;
};

export const ApiResponseContextProvider = ({
  children,
}: ApiContextProviderProps) => {
  const [data, setData] = useState<IApiData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const setStatesAfterResponse = (
    quote: string,
    philosopher: string,
    photo: string
  ) => {
    setData({quote, philosopher, photo});
  };

  const responseContextValue: IApiResponseContext = {
    data,
    isLoading,
    setIsLoading,
    setStatesAfterResponse,
  };

  return (
    <ApiResponseContext.Provider value={responseContextValue}>
      {children}
    </ApiResponseContext.Provider>
  );
};
