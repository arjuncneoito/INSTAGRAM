import {
  StatusBar,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import InstaLogo from '../assets/Svg/Logo/insta.Logo/instaLogo.svg';
import {t} from 'react-native-tailwindcss';
import LeftArrow from '../assets/Svg/Icons/leftarrow.svg';
import LoginButton from '../componets/buttons/Login.button';
import {C} from '../constants';
import FacebookLogo from '../assets/Svg/Logo/facebook.Logo/FaceBook.svg';

export default function Login() {
  return (
    <View style={t.flex1}>
      <View style={[t.flex1, t.pX4]}>
        <StatusBar
          translucent={false}
          backgroundColor={'white'}
          barStyle="dark-content"
        />
        <TouchableOpacity>
          <LeftArrow />
        </TouchableOpacity>
        <View style={[t.flex1, t.itemsCenter, t.justifyCenter]}>
          <InstaLogo />
          <TextInput
            style={[
              t.wFull,
              t.borderGray400,
              {
                height: C.measures.FortyFour,
                borderWidth: C.measures.PointFive,
                paddingVertical: C.measures.ThirteenPointFive,
                paddingLeft: C.measures.Fourteen,
              },
            ]}
            placeholder="User Name"
          />
          <TextInput
            style={[
              t.wFull,
              t.borderGray400,
              {
                height: C.measures.FortyFour,
                borderWidth: C.measures.PointFive,
                paddingVertical: C.measures.ThirteenPointFive,
                paddingLeft: C.measures.Fourteen,
              },
            ]}
            placeholder="Password"
          />
          <TouchableHighlight style={[t.textRight, t.wFull]}>
            <Text style={[t.textRight, {color: C.colors.primaryblue}]}>
              Forgot password?
            </Text>
          </TouchableHighlight>
          <LoginButton />
          <View style={[t.flexRow, t.justifyCenter, t.wFull, t.itemsCenter]}>
            <FacebookLogo />
            <TouchableHighlight style={[t.textRight]}>
              <Text style={[{color: C.colors.primaryblue}]}>
                Log in with Facebook
              </Text>
            </TouchableHighlight>
          </View>
          <Text style={t.textGray500}>OR</Text>
          <View style={[t.flexRow, t.justifyCenter, t.wFull]}>
            <Text style={[t.textGray500]}>Don’t have an account?</Text>
            <TouchableOpacity>
              <Text style={[t.textBlack]}>Sign up.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={[
          t.justifyCenter,
          t.itemsCenter,
          t.borderT,
          {height: C.measures.EightFour},
          t.flexRow,
          t.borderGray400,
        ]}>
        <Text style={[t.textGray500]}>Instagram от Facebook</Text>
      </View>
    </View>
  );
}
