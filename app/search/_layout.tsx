import { MasonryFlashList } from "@shopify/flash-list"
import Space from "components/common/Space"
import { FC, useCallback, useMemo, useRef, useState } from "react"
import { StyleSheet, View } from "react-native"
import { TextInput, useTheme } from "react-native-paper"
import { useSearchGifsQuery } from "redux/services/main"
import SearchItem from "./SearchItem"

type Params = {}

const SearchScreen: FC = () => {
  const s = useStyles()
  const [query, setQuery] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const {
    data: searchResponse,
    isSuccess,
    isFetching,
    isError,
  } = useSearchGifsQuery({ q: query }, { skip: query == "" })

  const timeoutIdRef = useRef<NodeJS.Timeout>()
  const changeTextHandler = useCallback((text: string) => {
    setIsTyping(true)
    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current)
    timeoutIdRef.current = setTimeout(() => {
      setIsTyping(false)
      setQuery(text)
    }, 500)
  }, [])
  const data = useMemo(() => {
    if (isTyping) return []
    if (isFetching) return []
    if (isError) return []
    if (isSuccess) return searchResponse?.data
    return []
  }, [isSuccess, isTyping, searchResponse?.data])

  return (
    <View style={s.container}>
      <TextInput mode="outlined" placeholder="Start typing..." onChangeText={changeTextHandler} />
      <Space />
      <View style={s.list}>
        <MasonryFlashList
          contentContainerStyle={s.listContent}
          data={data}
          renderItem={({ item }) => <SearchItem item={item} />}
          numColumns={2}
          estimatedItemSize={178}
        />
      </View>
    </View>
  )
}
export default SearchScreen
const useStyles = () => {
  const theme = useTheme()
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: theme.colors?.background,
          paddingVertical: theme.spacing.screenVerticalSpacing,
          paddingHorizontal: theme.spacing.screenHorizontalSpacing,
        },
        list: {
          // margin: -theme.spacing.xs / 2,
          flex: 1,
          // to make the list take full width and account for the items margin
          marginBottom: -theme.spacing.screenVerticalSpacing - theme.spacing.xs / 2,
          marginHorizontal: -theme.spacing.screenHorizontalSpacing - theme.spacing.xs / 2,
        },
        listContent: {
          paddingBottom: theme.spacing.screenVerticalSpacing,
          paddingHorizontal: theme.spacing.screenHorizontalSpacing,
        },
      }),
    [theme]
  )
  return styles
}
