import { Image } from "expo-image"
import { GIFObject } from "giphy-api"
import { FC, memo, useMemo } from "react"
import { StyleSheet, View } from "react-native"
import { useTheme } from "react-native-paper"

type Props = {
  item: GIFObject
}

const SearchItem: FC<Props> = ({ item }) => {
  const s = useStyles()
  let image = item.images.preview_gif
  if (!image.url) image = item.images.original
  if (!image) return null
  return (
    <View style={s.container}>
      <Image
        source={{
          uri: image.url,
        }}
        style={[
          s.image,
          {
            aspectRatio: Number(image.width) / Number(image.height),
          },
        ]}
        contentFit="contain"
      />
    </View>
  )
}
export default memo(SearchItem)
const useStyles = () => {
  const theme = useTheme()
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          margin: theme.spacing.xs / 2,
          backgroundColor: theme.colors.outline,
          borderRadius: theme.roundness,
          overflow: "hidden",
        },
        image: {
          aspectRatio: 1,
        },
      }),
    []
  )
  return styles
}
