import { useNavigation } from '@react-navigation/native';
import { Button, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import BlurredExamplesTags from './BlurredExamplesTags';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: 'white',}}>
      <ImageBackground source={require('../assets/car.jpg')} style={{flex: 1}} >
        <BlurredExamplesTags />
      </ImageBackground>
      <Button title={"Go to Profile"} onPress={() => navigation.navigate('Profile')} />
    </View>
  )
}


