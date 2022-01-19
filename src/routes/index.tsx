import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { RootState } from "@store/index";

interface IUser {
  name: string;
  email: string;
  created_at: string;
  token: string;
}

export const Routes = () => {
  const user = useSelector(
    (state: RootState) => state.userData as IUser | null
  );

  return (
    <NavigationContainer>
      {user?.token ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
