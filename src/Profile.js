import { useNavigation } from '@react-navigation/native';
import { Button, ImageBackground, View } from 'react-native';
import BlurredExamplesTags from './BlurredExamplesTags';

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <ImageBackground source={require('../assets/car.jpg')} style={{flex: 1}} >
        <BlurredExamplesTags />
      </ImageBackground>
      <Button title={"Go to Home"} onPress={() => navigation.navigate('Home')} />
    </View>
  )
}
