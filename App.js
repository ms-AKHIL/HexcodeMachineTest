import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Firstpage from './screens/Firstpage';
import Profilepage from './screens/Profilepage';

const Stack =createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
      >
        <Stack.Screen name='Firstpage' component={Firstpage}/>
        <Stack.Screen name='Profilepage' component={Profilepage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

});

export default App;
