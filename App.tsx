import React, { useEffect, useState } from 'react'
import AppContainer from './src/navigation/AppContainer'
import * as Font from 'expo-font'

const App = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  
  const fontLoading = async () => {
    await Font.loadAsync({
      'sf-pro': require('./assets/fonts/SF-Pro-Display-Light.otf'),
    });
    setIsFontLoaded(true);
  }

  useEffect(() => {
    fontLoading();
  }, [])
  
  return isFontLoaded ? <AppContainer /> : null;
}

export default App