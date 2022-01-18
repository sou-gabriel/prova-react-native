import { Alert } from "react-native";

export const showError = (error) => {
  console.log(error);
  Alert.alert(error.name, error.message);
};

export const getFormattedPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};
