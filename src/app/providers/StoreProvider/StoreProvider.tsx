import { store } from "@shared/model";
import { ReactNode } from "react";
import { Provider } from "react-redux";

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
