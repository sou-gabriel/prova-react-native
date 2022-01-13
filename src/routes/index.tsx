/*
  Se o usuário estiver autenticado renderizar as rotas "AppRoutes",
  mas se o usuário não estiver autenticado renderizar as rotas "AuthRoutes".
*/

import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};
