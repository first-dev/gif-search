import { FC, memo } from "react"
import { View } from "react-native"
import { useTheme } from "react-native-paper"

type Props = {
  height?: number
  width?: number
  size?: number
  animated?: boolean
}

const Space: FC<Props> = ({ size, height, width, animated }) => {
  const theme = useTheme()
  if (size) {
    height = size
    width = size
  }
  return (
    <View
      style={{
        alignSelf: width !== undefined ? "stretch" : "auto",
        height,
        width,
        ...(!height && !width ? { height: theme.spacing.m, width: theme.spacing.m } : {}),
      }}
    />
  )
}
export default memo(Space)
