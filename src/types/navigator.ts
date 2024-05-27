import {AUTH_SCREENS, ROOT_SCREENS} from '@const/routs';

export type AuthStackParamList = {
  [AUTH_SCREENS.LOGIN]: undefined;
};

export type RootStackParamList = {
  [ROOT_SCREENS.AUTH]: undefined;
};
