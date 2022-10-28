import {StackNavigationProp} from '@react-navigation/stack';
import {ViewStyle} from 'react-native';

type SplashPageProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
};
type CustomButtonProps = {
  title: string;
  style: ViewStyle;
  name: string;
  color: string;
};
