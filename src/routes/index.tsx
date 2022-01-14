import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { IRootState } from "../store/modules/rootReducer";

export const Routes = () => {
  const isAnAuthenticatedUser = useSelector(
    ({ user }: IRootState) => user.token
  );

  return (
    <NavigationContainer>
      {isAnAuthenticatedUser ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
