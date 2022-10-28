import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/responsive';
import {CustomButtonProps} from '../types/propTypes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomButton({
  title,
  style,
  name,
  color,
}: CustomButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, style]} activeOpacity={0.8}>
      <MaterialCommunityIcons name={name} size={20} color={color} />
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    paddingVertical: verticalScale(15),
    alignItems: 'center',
    borderRadius: moderateScale(10),
    elevation: moderateScale(1),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: moderateScale(17),
    fontWeight: '600',
    color: '#FAFAFA',
    paddingHorizontal: horizontalScale(10),
  },
});
