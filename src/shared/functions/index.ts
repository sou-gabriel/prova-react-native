import { Alert } from "react-native";

export const showError = (error) => {
  console.log(error);
  Alert.alert(error.name, error.message);
};
