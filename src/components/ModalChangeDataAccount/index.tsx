import React, { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

import { setUserData } from "@store/features/userData/userDataSlice";
import { updateUser } from "@shared/services/user";

import { 
  Container, 
  InnerContainer,
  Form, 
  InputGroup, 
  Input, 
  ErrorMessage,
  Label,
  PrimaryButton,
  PrimaryButtonText,
  SecondaryButton,
  SecondaryButtonText,
} from "./styles";

interface IModalChangeDataAccountProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

interface INewUserData {
  name: string
  email: string
}

const shape = Yup.object().shape({
  name: Yup.string().min(3, "O mínimo é 3 caracteres").required("O nome de usuário é obrigatório"),
  email: Yup.string().email("Campo de e-mail inválido").required("O campo de e-mail é obrigatório")
})

export const ModalChangeDataAccount = ({
  modalVisible,
  setModalVisible,
}: IModalChangeDataAccountProps) => {
  const dispatch = useDispatch()
  const { control, reset, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: ''
    },
    resolver: yupResolver(shape)
  })

  const onConfirm = (data: { name: string, email: string }) => {
    updateUser(data)
    dispatch(setUserData(data))
    setModalVisible(false)
    reset()
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <Container visible={modalVisible} transparent>
      <InnerContainer>
        <Form>
          <InputGroup>
            <Label>Novo nome de usuário</Label>
            <Controller 
              name="name"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input 
                  value={value} 
                  onChangeText={onChange} 
                  placeholder="Name" 
                />
              )}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Label>Novo endereço de e-mail</Label>
            <Controller 
              name="email"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input 
                  value={value}
                  onChangeText={onChange}
                  placeholder="Email"
                />
              )}
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </InputGroup>

          <PrimaryButton onPress={handleSubmit(onConfirm)}>
            <PrimaryButtonText>Confirmar</PrimaryButtonText>
          </PrimaryButton>

          <SecondaryButton onPress={handleCancel}>
            <SecondaryButtonText>Cancelar</SecondaryButtonText>
          </SecondaryButton>
        </Form>
      </InnerContainer>
    </Container>
  );
};
