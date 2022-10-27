/* eslint-disable react-hooks/exhaustive-deps */
import {View, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {SplashPageProps} from '../../types/propTypes';

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
    height: 100,
    width: 100,
  },
});

export default Splash;
