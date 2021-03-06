import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Ouro from './ouro';
import Prata from './prata';
import Bronze from './bronze';
import Home from './home';

const Stack = createStackNavigator();

export default function Rotas(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Ouro' component={Ouro}/>
        <Stack.Screen name='Prata' component={Prata}/>
        <Stack.Screen name='Bronze' component={Bronze}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}