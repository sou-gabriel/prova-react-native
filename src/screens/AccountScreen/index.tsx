import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Header, Footer } from "@components";
import { getFormattedDate } from "@shared/functions";
import { RootState } from "@store/index";
import { removerUser } from "@store/features/userData/userDataSlice";

import {
  Container,
  Content,
  Avatar,
  Heading,
  AccountInfo,
  Username,
  Email,
  CreationDate,
  LogoutButton,
} from "./styles";

export const AccountScreen = () => {
  const user = useSelector((state: RootState) => state.userData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    AsyncStorage.removeItem("user");
    dispatch(removerUser());
  };

  return (
    <Container>
      <Header />
      <Content>
        <Heading>
          <Avatar
            style={{ width: 60, height: 60 }}
            source={{
              uri: `https://ui-avatars.com/api/?name=${encodeURI(user.name)}`,
            }}
          />
          <AccountInfo>
            <Username>{user.name}</Username>
            <Email>{user.email}</Email>
            <CreationDate>
              Conta criada dia: {getFormattedDate(new Date(user.created_at))}
            </CreationDate>
          </AccountInfo>
        </Heading>

        <LogoutButton title="Logout" onPress={handleLogout} />
      </Content>
      <Footer />
    </Container>
  );
};
