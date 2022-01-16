import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { TokenContext } from "../shared/context/Token";

export const Routes = () => {
  const { token } = useContext(TokenContext);

  return (
    <NavigationContainer>
      {token ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
