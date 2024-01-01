import Space from "components/common/Space"
import { Stack, useLocalSearchParams, useRouter } from "expo-router"
import { FC, useMemo } from "react"
import { StyleSheet, View } from "react-native"
import { Card, useTheme, Text, Button } from "react-native-paper"

import * as WebBrowser from "expo-web-browser"

type Params = {}

const CreditsScreen: FC = () => {
  const params = useLocalSearchParams<Params>()
  const router = useRouter()
  const theme = useTheme()
  const s = useStyles()
  return (
    <View style={s.container}>
      <Stack.Screen />
      <Card theme={{ isV3: false }} style={s.card}>
        <Text variant="titleMedium">Overview</Text>
        <Space size={theme.spacing.s} />
        <Text variant="bodyMedium">
          This app allows you to search GIFs through GIPHY APIs
          (https://developers.giphy.com/docs/api/endpoint/#search)
        </Text>
      </Card>
      <Card theme={{ isV3: false }} style={s.card}>
        <Text variant="titleMedium">Author</Text>
        <Space size={theme.spacing.s} />
        <Text variant="bodyMedium">Mohammed Handa</Text>
        <Space size={theme.spacing.s} />
        <Text variant="bodyMedium">
          A highly organized and driven individual, with over 3 years of practical experience in
          designing, building and deploying enterprise-level quality cross-platform mobile
          applications, and 5 years of studying software engineering.
        </Text>
      </Card>
      <View style={{ flex: 1 }} />
      <View style={s.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => WebBrowser.openBrowserAsync("https://mohammedhanda.com")}
        >
          Portfolio
        </Button>
        <Button
          mode="outlined"
          onPress={() => WebBrowser.openBrowserAsync("https://drive.google.com/file/d/186IL2PPCfBxvJW4jPxqWgQXuE9-L6u3H/view?usp=drive_link")}
        >
          Resume
        </Button>
        <Button
          mode="outlined"
          onPress={() => WebBrowser.openBrowserAsync("https://www.upwork.com/freelancers/~01335b4b8fd43e1d31")}
        >
          Upwork
        </Button>
      </View>
    </View>
  )
}
export default CreditsScreen
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
          gap: theme.spacing.l,
        },
        card: {
          padding: theme.spacing.m,
        },
        buttonContainer: {
          gap: theme.spacing.s,
        },
      }),
    [theme]
  )
  return styles
}
