import Space from "components/common/Space"
import { Image } from "expo-image"
import { Stack, useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useMemo } from "react"
import { StyleSheet, View } from "react-native"
import { Button, Text, TextInput, useTheme } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"

export default function App() {
  const s = useStyles()
  const router = useRouter()
  return (
    <SafeAreaView style={s.container}>
      <StatusBar style="auto" />
      <Text style={s.title} variant="displayLarge">
        Gif Search
      </Text>
      <Image source={require(".gif/rainbow-cat.gif")} style={s.image} contentFit="contain" />
      <View style={s.buttonsContainer}>
        <Button mode="contained" onPress={() => router.push("search")}>
          Search Gifs
        </Button>
        <Space />
        <Button mode="outlined" onPress={() => router.push("credits")}>
          View Credits
        </Button>
      </View>
    </SafeAreaView>
  )
}

const useStyles = () => {
  const theme = useTheme()
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          paddingVertical: theme.spacing.screenVerticalSpacing,
          paddingHorizontal: theme.spacing.screenHorizontalSpacing,
          backgroundColor: theme.colors?.background,
          justifyContent: "space-between",
        },
        buttonsContainer: {},
        title: {
          marginTop: theme.spacing.xl,
          alignSelf: "center",
          textAlign: "center",
          fontWeight: "bold",
        },
        image: {
          height: 240,
        },
      }),
    [theme]
  )
  return styles
}
