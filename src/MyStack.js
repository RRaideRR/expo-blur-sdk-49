import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Profile from './Profile';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >

    </Stack.Navigator>
  );
}
