import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { GIFObject, MultiResponse, SearchOptions } from "giphy-api"

export const mainApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.giphy.com/v1/gifs/" }),
  endpoints: (builder) => ({
    searchGifs: builder.query<MultiResponse, Partial<SearchOptions>>({
      query: ({ limit = 25, offset = 0, q }) => ({
        method: "GET",
        url: 'search',
        params: {
          api_key: process.env.EXPO_PUBLIC_GIPHY_API_KEY,
          limit,
          offset,
          q,
          rating: 'g',
          lang: 'en',
          bundle: 'message_non_clips'
        }
      })
    }),
  }),
})

export const { useSearchGifsQuery } = mainApi
