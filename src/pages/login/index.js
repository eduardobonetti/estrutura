import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {UserService} from '_services';
import {CommonActions} from '@react-navigation/native';

const Login = ({navigation}) => {
  const login = () => {
    UserService.login({email: 'teste', token: 'teste'});
    //usa o reset abaixo pra ele não conseguir voltar pra tela de login após logar
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'BottomTabNavigator'}],
      }),
    );
  };
  return (
    <>
      <Text>Tela de Login</Text>
      <TouchableOpacity onPress={login}>
        <Text>Clique para entrar</Text>
      </TouchableOpacity>
    </>
  );
};

export default Login;
