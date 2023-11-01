import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import RelaxScreen from '../screens/RelaxScreen';
import TimerScreen from '../screens/TimerScreen';
import CompleteScreen from '../screens/CompleteScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Relax: RelaxScreen,
    Timer: TimerScreen,
    Complete: CompleteScreen,
  },
  {},
);
export default createAppContainer(RootStack);
