import {
  NavigationContainer
} from "@react-navigation/native";

import { 
  createNativeStackNavigator 
} from '@react-navigation/native-stack';

import { 
  createBottomTabNavigator 
} from '@react-navigation/bottom-tabs';

import Icon from "react-native-vector-icons/Ionicons";

import Profiller from "./src/pages/profiles";

import Detay from './src/pages/Detay';

import Home from './src/pages/Home';

const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

const TabNav = () => {
  return <Tabs.Navigator initialRouteName='Home'>
  <Tabs.Screen
    name='Home'
    component={Home}
    options={{
      tabBarIcon: (props) =>
        <Icon
          name='home'
          {...props}
        />
    }}
  />
  <Tabs.Screen
    name='ProfillerStack'
    component={Profiller}
    options={{
      title: "Profiller",
      headerShown: true,
      tabBarIcon: (props) =>
        <Icon
          name='list-circle-outline'
          {...props}
        />
    }}
  />
</Tabs.Navigator>;
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={TabNav}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='Detay' component={Detay}/>
      </Stack.Navigator>
      
    </NavigationContainer>

  );
};

export default App;