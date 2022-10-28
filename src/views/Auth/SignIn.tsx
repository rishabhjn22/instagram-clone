import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import Input from '../../components/Input';
import {colors} from '../../utils/colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/responsive';
import CustomButton from '../../components/CustomButton';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input label="Email" placeholder="Enter Email" />
      </View>
      <View style={styles.inputContainer}>
        <Input label="Password" placeholder="Enter Password" />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Login"
          onPress={() => console.log('SUbmit')}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  headerTextContainer: {
    alignItems: 'center',
  },
  headerText: {
    color: colors.text,
    fontSize: moderateScale(30),
    fontWeight: '700',
  },
  inputContainer: {
    alignSelf: 'center',
    width: horizontalScale(350),
    marginTop: verticalScale(20),
  },
  button: {
    backgroundColor: colors.secondary,
  },
  buttonContainer: {
    width: horizontalScale(250),
    marginTop: verticalScale(50),
    alignSelf: 'center',
  },
});
