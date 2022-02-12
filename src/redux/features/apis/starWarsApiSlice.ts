import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Character, Films, Planets } from "../../../models";

interface CharactersResult {
  results: Character[];
}
interface FilmsResult {
  results: Films;
}
interface OneCharacterResult {
  results: Character[];
}
interface PlanetsResult {
  results: Planets[];
}

export const starWarsApiSlice = createApi({
  reducerPath: "starWarsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://swapi.dev/api",
  }),
  endpoints(builder) {
    return {
      fetchCharacters: builder.query<CharactersResult, number | void>({
        query(number) {
          return `/people/?page=${number}`;
        },
      }),
      fetchFilms: builder.query<FilmsResult, void>({
        query() {
          return "/films";
        },
      }),
      fetchOneCharacter: builder.query<OneCharacterResult, string | void>({
        query(name) {
          return `/people/?search=${name}`;
        },
      }),
      fetchAllPlanets: builder.query<PlanetsResult, void>({
        query() {
          return "/planets";
        },
      }),
    };
  },
});
export const {
  useFetchCharactersQuery,
  useFetchFilmsQuery,
  useFetchOneCharacterQuery,
  useFetchAllPlanetsQuery,
} = starWarsApiSlice;
