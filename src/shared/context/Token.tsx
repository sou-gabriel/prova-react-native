import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ITokenProviderProps {
  children: ReactNode | ReactNode[];
}

interface IContext {
  token: string;
  setToken: Dispatch<SetStateAction<string | null>>;
}

export const TokenContext = createContext<IContext>(null);

export const TokenProvider = ({ children }: ITokenProviderProps) => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
