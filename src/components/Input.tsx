import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/responsive';
import {colors} from '../utils/colors';
import {InputProps} from '../types/propTypes';

export default function Input({label, placeholder}: InputProps) {
  return (
    <View>
      <Text style={styles.title}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(17),
    fontWeight: '600',
    color: colors.text,
  },
  input: {
    borderWidth: 2,
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(5),
    borderColor: colors.grey,
    fontSize: moderateScale(12),
    fontWeight: '500',
    marginTop: verticalScale(10),
    color: colors.text,
    paddingLeft: horizontalScale(10),
  },
});
