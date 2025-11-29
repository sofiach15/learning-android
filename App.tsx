import React, { useState } from 'react';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Splash from './src/screens/SplashScreen';

export default function App() {

  const [showSplash, setShowSplash] = useState(true);

  if (showSplash){
    return <Splash onFinish={() => setShowSplash(false)} />;
  }

  return <Register />
}