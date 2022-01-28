import {
  Image,
  StatusBar,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {t} from 'react-native-tailwindcss';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
import InstaLogo from '../assets/Svg/Logo/insta.Logo/instaLogo.svg';
import {C} from '../constants';
import LoginButton from '../componets/buttons/Login.button';

export default function Home() {
  return (
    <View style={[t.flex1]}>
      <StatusBar
        translucent={false}
        backgroundColor={'white'}
        barStyle="dark-content"
      />

      <View style={[t.flex1, t.itemsCenter, t.justifyCenter]}>
        <InstaLogo style={[t.mB1]} />
        <Image source={require('../assets/png/Oval.png')} style={[t.mT16]} />
        <Text style={t.m3}>jacob_w</Text>
        <View style={t.w10_12}>
          <LoginButton />
        </View>
        <TouchableHighlight>
          <Text style={[t.m6, {color: C.colors.primaryblue}]}>
            Switch accounts
          </Text>
        </TouchableHighlight>
      </View>
      <View
        style={[
          t.justifyCenter,
          t.borderT,
          {height: C.measures.EightFour},
          t.flexRow,
          t.borderGray400,
        ]}>
        <Text style={[t.textGray500, t.mT5]}>Don’t have an account?</Text>
        <TouchableOpacity>
          <Text style={[t.textBlack, t.mT5]}>Sign up.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
