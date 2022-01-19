import React from "react";
import { FlatList, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

import { Header, Empty, CartBet, Footer } from "@components";
import { newBet } from "@shared/services/bets";
import { showError } from "@shared/functions";
import { getFormattedPrice } from "@shared/functions";
import { clearCart } from "@store/features/cart/cartSlice";
import { AppDispatch, RootState } from "@store/index";

import {
  Container,
  Content,
  Title,
  BetsContainer,
  CartTotalContainer,
  LightTitle,
  SubmitButton,
  SubmitButtonText,
  SubmitButtonIcon,
} from "./styles";
import { setSavedBets } from "@store/features/savedBets/savedBetsSlice";

export const CartScreen = ({
  navigation,
}: NativeStackScreenProps<ParamListBase>) => {
  const { min_cart_value } = useSelector((state: RootState) => state.listGames);
  const bets = useSelector((state: RootState) => state.cart.bets);
  const dispatch = useDispatch<AppDispatch>();

  const getTotalPrice = () => bets.reduce((acc, { price }) => acc + price, 0);

  const handleSaveBets = async () => {
    const totalPrice = getTotalPrice();

    if (totalPrice >= min_cart_value) {
      try {
        const transformedBets = bets.map(({ game_id: id, numbers }) => ({
          id,
          numbers,
        }));

        await newBet(transformedBets);
        Toast.show({
          type: "success",
          text1: "Apostas salvas sucesso!",
        });
        dispatch(clearCart());
        dispatch(setSavedBets(transformedBets));
        navigation.navigate("Home");
        return;
      } catch (error) {
        showError(error);
        return;
      }
    }

    Alert.alert(
      "Não foi possível salvar as apostas!",
      `Você só possui ${getFormattedPrice(
        totalPrice
      )} em apostas, sendo que o valor mínimo é ${getFormattedPrice(
        min_cart_value
      )}.`
    );
  };

  return (
    <>
      <Header />

      <Container>
        <Content>
          <Title>Cart</Title>
          <BetsContainer>
            {bets.length === 0 ? (
              <Empty message="Não há jogos no carrinho" />
            ) : (
              <FlatList
                data={bets}
                renderItem={({ item }) => (
                  <CartBet
                    bet={{
                      id: item.id,
                      color: item.color,
                      numbers: item.numbers.join(", "),
                      date: item.date,
                      price: getFormattedPrice(item.price),
                      type: item.type,
                    }}
                  />
                )}
              />
            )}
          </BetsContainer>
          <CartTotalContainer>
            <Title>
              Cart{" "}
              <LightTitle>
                total: ${getFormattedPrice(getTotalPrice())}
              </LightTitle>
            </Title>
          </CartTotalContainer>
        </Content>
        <SubmitButton onPress={handleSaveBets}>
          <SubmitButtonText>Save</SubmitButtonText>
          <SubmitButtonIcon name="arrowright" />
        </SubmitButton>
      </Container>

      <Footer />
    </>
  );
};
