import { Text, View } from 'react-native'
import { NativeBaseProvider, extendTheme } from 'native-base'
import {
  // Import `SplashScreen` from `expo-router` instead of `expo-splash-screen`
  SplashScreen,
  // This example uses a basic Layout component, but you can use any Layout.
  Slot,
} from 'expo-router'
import newColorTheme from '../ui/colorTheme'
import { styledComponents } from '../ui/components'

import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto'

const theme = extendTheme({
  colors: newColorTheme,
  config: {
    initialColorMode: 'dark',
  },
  components: styledComponents,
})

export default function Layout() {
  // Load the font `Inter_500Medium`
  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  })

  if (!fontsLoaded) {
    // The native splash screen will stay visible for as long as there
    // are `<SplashScreen />` components mounted. This component can be nested.

    return <SplashScreen />
  }

  // Render the children routes now that all the assets are loaded.
  return (
    <NativeBaseProvider theme={theme}>
      <Slot />
    </NativeBaseProvider>
  )
}
