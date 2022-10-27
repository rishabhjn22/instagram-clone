/* eslint-disable react-hooks/exhaustive-deps */
import {View, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {SplashPageProps} from '../../types/propTypes';
import {horizontalScale, verticalScale} from '../../utils/responsive';

function Splash({navigation}: SplashPageProps) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Instagram_Logo.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: verticalScale(100),
    width: horizontalScale(100),
  },
});

export default Splash;
