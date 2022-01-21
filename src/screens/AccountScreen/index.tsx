import React, { useState } from "react";
import { Button, KeyboardAvoidingView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Header, Footer, ModalChangeDataAccount } from "@components";
import { getFormattedDate } from "@shared/functions";
import { RootState } from "@store/index";
import { removerUser } from "@store/features/userData/userDataSlice";

import {
  Container,
  Content,
  Avatar,
  Heading,
  VerticalLine,
  AccountInfo,
  Username,
  Email,
  CreationDate,
  ActionsContainer,
  LogoutButton,
  EditButton,
  LogoutIcon,
  EditIcon,
} from "./styles";

export const AccountScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const user = useSelector((state: RootState) => state.userData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    AsyncStorage.removeItem("user");
    dispatch(removerUser());
  };

  const handleEdit = () => setModalVisible(true);

  return (
    <Container>
      <ModalChangeDataAccount
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Header />
      <Content>
        <Heading>
          <Avatar
            source={{
              uri: `https://ui-avatars.com/api/?name=${encodeURI(user.name)}&background=b5c40&color=fff`,
            }}
          />
          <VerticalLine />
          <AccountInfo>
            <Username>{user.name}</Username>
            <Email>{user.email}</Email>
            <CreationDate>
              Conta criada dia: {getFormattedDate(new Date(user.created_at))}
            </CreationDate>
          </AccountInfo>
        </Heading>

        <ActionsContainer>
          <LogoutButton onPress={handleLogout}>
            <LogoutIcon name="logout" />
          </LogoutButton>

          <EditButton onPress={handleEdit}>
            <EditIcon name="edit" />
          </EditButton>
        </ActionsContainer>
      </Content>
      <Footer />
    </Container>
  );
};
