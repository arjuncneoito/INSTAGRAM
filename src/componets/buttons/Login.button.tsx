import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {t} from 'react-native-tailwindcss';
import {C} from '../../constants';

export default function LoginButton() {
  return (
    <TouchableOpacity
      style={[
        t.wFull,
        t.h12,
        t.roundedE,
        t.roundedS,
        t.itemsCenter,
        t.justifyCenter,
        t.mB3,
        {backgroundColor: C.colors.primaryblue},
      ]}>
      <Text style={[t.textWhite]}>Login</Text>
    </TouchableOpacity>
  );
}
