/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, Image, Text} from 'react-native';
import React from 'react';
// import {useTheme} from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';
// import {LoginManager, AccessToken, Profile} from 'react-native-fbsdk-next';
import CustomButton from '../../components/CustomButton';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/responsive';

export default function Welcome() {
  // const {colors} = useTheme();

  // async function onFacebookButtonPress() {
  //   // Attempt login with permissions
  //   const result = await LoginManager.logInWithPermissions([
  //     'public_profile',
  //     'email',
  //   ]);

  //   if (result.isCancelled) {
  //     throw 'User cancelled the login process';
  //   }

  //   const currentProfile = Profile.getCurrentProfile().then(item =>
  //     console.log('ProfileItem', item),
  //   );

  //   console.log(currentProfile);

  //   // Once signed in, get the users AccesToken
  //   const data = await AccessToken.getCurrentAccessToken();
  //   console.log(data, '++++++++++');

  //   if (!data) {
  //     throw 'Something went wrong obtaining access token';
  //   }

  //   // Create a Firebase credential with the AccessToken
  //   const facebookCredential = auth.FacebookAuthProvider.credential(
  //     data.accessToken,
  //   );
  //   console.log(facebookCredential, '+++++');

  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(facebookCredential);
  // }

  return (
    <View style={styles.container}>
      {/* <Text style={{color: colors.text}}>Welcome</Text>
      <Button
        title="Facebook Sign-In"
        onPress={() =>
          onFacebookButtonPress().then(() =>
            console.log('Signed in with Facebook!'),
          )
        }
      /> */}
      {/* <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </LinearGradient> */}
      <Image
        source={require('../../assets/people.png')}
        style={styles.headerImage}
      />
      <View>
        <Text style={styles.headerText}>Welcome to Social Auth</Text>
      </View>
      <View style={styles.buttonCont}>
        <CustomButton
          title="Continue With Email"
          style={{backgroundColor: '#DB3F3A'}}
          name="gmail"
          color="#fff"
        />
      </View>
      <View style={styles.buttonCont}>
        <CustomButton
          title="Continue With Phone"
          style={{backgroundColor: 'grey'}}
          name="phone-outline"
          color="#fff"
        />
      </View>
      <View style={styles.buttonCont}>
        <CustomButton
          title="Continue With Facebook"
          style={{backgroundColor: '#4c669f'}}
          name="facebook"
          color="#FFF"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  buttonCont: {
    marginTop: verticalScale(30),
    width: horizontalScale(350),
  },
  headerImage: {
    width: horizontalScale(150),
    height: verticalScale(150),
    marginBottom: verticalScale(10),
  },
  headerText: {
    fontSize: moderateScale(25),
    color: '#000',
    fontWeight: '600',
  },
});
