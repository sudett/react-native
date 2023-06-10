import {userActionTypes} from './UerActionTypes';

export const userInitialState = {
  userCredentials: {
    userId: 0,
    accountId: 0,
    branchId: 0,
    branchName: '',
    daysToExpirePassword: 0,
    email: '',
    lastLoginDate: 0,
    lastLoginTime: '',
    lastPasswordChangeDate: 0,
    numOfLogins: 0,
    passwordChangeIsRequired: true,
    token: '',
    userName: '',
  },
};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case userActionTypes.SET_USER_CREDENTIALS:
      return {
        ...state,
        userCredentials: {
          userId: action.payload.userId,
          accountId: action.payload.accountId,
          branchId: action.payload.branchId,
          branchName: action.payload.branchName,
          daysToExpirePassword: action.payload.daysToExpirePassword,
          email: action.payload.email,
          lastLoginDate: action.payload.lastLoginDate,
          lastLoginTime: action.payload.lastLoginTime,
          lastPasswordChangeDate: action.payload.lastPasswordChangeDate,
          numOfLogins: action.payload.numOfLogins,
          passwordChangeIsRequired: action.payload.passwordChangeIsRequired,
          token: action.payload.token,
          userName: action.payload.userName,
        },
      };

    default:
      return state;
  }
};
