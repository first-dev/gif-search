import { Stack } from "expo-router"
import { Provider } from "react-redux"
import { store } from "redux/store"
import { paperTheme } from "utils/theme"
import { useFonts } from "expo-font"
import { PaperProvider } from "react-native-paper"
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { useColorScheme } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Layout = () => {
  const colorScheme = useColorScheme()

  return (
    <PaperProvider theme={paperTheme}>
      <Provider store={store}>
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="search" options={{ title: "Search" }} />
            <Stack.Screen name="credits" options={{ title: "Credits" }} />
          </Stack>
        </ThemeProvider>
      </Provider>
    </PaperProvider>
  )
}
export default Layout
