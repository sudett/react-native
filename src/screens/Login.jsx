import React, {useState, useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  TextInput,
  HelperText,
  Button,
  TouchableRipple,
} from 'react-native-paper';
import axios from 'axios';
import {UserContext} from '../contexts/user/UserContext';
import {usePostData} from '../api/apiCalls';
import {API_URLS} from '../api/apiUrls';
import {userActionTypes} from '../contexts/user/UerActionTypes';

const Login = ({navigation}) => {
  const {dispatch: userDispatch} = useContext(UserContext);
  // const {isLoading, errorMessage, data} = usePostData(``);
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: '',
  });
  const [usernameError, setUsernameError] = useState({
    isError: false,
    errorMessage: '',
  });
  const [passwordError, setPasswordError] = useState({
    isError: false,
    errorMessage: '',
  });
  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(false);

  // functions
  const onChange = (text, credential) => {
    setUserCredentials({...userCredentials, [credential]: text});

    if (credential === 'username' && userCredentials.username.length > 0)
      setUsernameError({isError: false, errorMessage: ''});

    if (credential === 'password' && userCredentials.password.length > 0)
      setPasswordError({isError: false, errorMessage: ''});
  };

  const onSubmit = async () => {
    if (!userCredentials.username && !userCredentials.password) {
      setUsernameError({
        isError: true,
        errorMessage: 'لطفا نام کاربری خود را وارد کنید',
      });
      setPasswordError({
        isError: true,
        errorMessage: 'لطفا کلمه عبور خود را وارد کنید',
      });
      return;
    }

    if (!userCredentials.username) {
      return setUsernameError({
        isError: true,
        errorMessage: 'لطفا نام کاربری خود را وارد کنید',
      });
    }

    if (!userCredentials.password) {
      return setPasswordError({
        isError: true,
        errorMessage: 'لطفا کلمه عبور خود را وارد کنید',
      });
    }

    if (userCredentials.password.length < 8) {
      return setPasswordError({
        isError: true,
        errorMessage: 'طول کلمه عبور باید بیشتر از ۸ کاراکتر باشد',
      });
    }

    try {
      const data = await axios.post(
        `http://91.92.209.63/meddistback/api/Auth/UserLogin`,
        {
          userName: userCredentials.username,
          password: userCredentials.password,
        },
      );

      console.log(data);

      const userData = data?.data?.data;
      if (!userData) return;

      userDispatch({
        type: userActionTypes.SET_USER_CREDENTIALS,
        payload: {
          userId: userData.userId,
          accountId: userData.accountId,
          branchId: userData.branchId,
          branchName: userData.branchName,
          daysToExpirePassword: userData.daysToExpirePassword,
          email: userData.email,
          lastLoginDate: userData.lastLoginDate,
          lastLoginTime: userData.lastLoginTime,
          lastPasswordChangeDate: userData.lastPasswordChangeDate,
          numOfLogins: userData.numOfLogins,
          passwordChangeIsRequired: userData.passwordChangeIsRequired,
          token: userData.token,
          userName: userData.userName,
        },
      });

      navigation.navigate('Home');
    } catch (err) {
      console.info(err);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.inputGroup}>
          <TextInput
            label="نام کاربری"
            left={<TextInput.Icon icon="camera" />}
            value={userCredentials.username}
            onChangeText={text => onChange(text, 'username')}
            style={styles.input}
          />
          <HelperText type="error" visible={usernameError.isError}>
            {usernameError.errorMessage}
          </HelperText>
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            label="کلمه عبور"
            secureTextEntry
            left={<TextInput.Icon icon="eye" />}
            value={userCredentials.password}
            onChangeText={text => onChange(text, 'password')}
            style={styles.input}
          />
          <HelperText type="error" visible={passwordError.isError}>
            {passwordError.errorMessage}
          </HelperText>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <Button mode="contained" onPress={onSubmit}>
          ورود
        </Button>
        <Button mode="contained" onPress={() => console.log('Forgot Password')}>
          فراموشی کلمه عبور
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  inputGroup: {
    marginBottom: 16,
  },
  input: {
    // backgroundColor: 'tomato',
  },
  buttonsContainer: {
    gap: 8,
  },
});

export default Login;
