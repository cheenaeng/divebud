import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import FontTitle from '../components/FontTitle'
import * as ImagePicker from 'expo-image-picker'
import { uploadPhotoToFirebase } from '../utils/uploadFile'

export default function Page() {
  const [image, setImage] = useState<string | null>(null)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const handleUpload = () => {
    pickImage()

    if (image) {
      uploadPhotoToFirebase(image)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <FontTitle>Bloop Bloop...</FontTitle>
        <PrimaryButton
          variant="darkRounded"
          colorScheme="primary"
          onPress={handleUpload}
        >
          Upload photo
        </PrimaryButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundImage:
      'linear-gradient(114.9deg, rgb(34, 34, 34) 8.3%, rgb(0, 40, 60) 41.6%, rgb(0, 143, 213) 93.4%)',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
})
