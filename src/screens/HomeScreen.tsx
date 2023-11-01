import React from 'react';
import { View } from 'react-native';
import styles from '../../styles';
import FadeIn from '../components/FadeIn';
import { NavigationInjectedProps } from 'react-navigation';
import EntryDuration from '../components/EntryDuration';

const HomeScreen = ({ navigation }: NavigationInjectedProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <FadeIn />
      <EntryDuration navigation={navigation} />
    </View>
  );
};
export default HomeScreen;
