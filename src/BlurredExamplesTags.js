import { StyleSheet, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';

export default function BlurredExamplesTags() {
  return (
    <View>
      <View style={styles.row}>
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
      </View>
      <View style={styles.row}>
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
      </View>
      <View style={styles.row}>
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
      </View>
      <View style={styles.row}>
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
      </View>
      <View style={styles.row}>
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
      </View>
      <View style={styles.row}>
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
      </View>
      <View style={styles.row}>
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
      </View>
      <View style={styles.row}>
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
      </View>
      <View style={styles.row}>
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
      </View>
      <View style={styles.row}>
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
      </View>
      <View style={styles.row}>
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
      </View>
      <View style={styles.row}>
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
      </View>
      <View style={styles.row}>
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
      </View>
      <View style={styles.row}>
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
        <ExampleBlurView  />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  row: {
    marginVertical: 10,
    flexDirection: 'row'
  },
});

function ExampleBlurView() {
  return (
    <View
      style={{
        overflow: 'hidden',
        borderBottomRightRadius: 8,
        alignSelf: 'flex-start',
        marginHorizontal: 10
      }}>
      <BlurView
        tint="dark"
        intensity={40}
        style={[
          {
            backgroundColor: 'rgba(255,255,255,0.2)',
            paddingHorizontal: 8,
            paddingVertical: 2,
          },
        ]}>
        <Text>Example</Text>
      </BlurView>
    </View>
  )
}
