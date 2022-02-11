import React from "react";
import { Character } from "../models";

export function useCharacter(name: string) {
  const [character, setCharacter] = React.useState<Character[]>();
  const [error, setError] = React.useState<unknown>();
  const url = `https://swapi.dev/api/people/?search=${name}`;
  React.useEffect(() => {
    const getCharacterInfo = async () => {
      try {
        const response = await fetch(url);
        const responseJson = await response.json();
        setCharacter(responseJson.results);
      } catch (error) {
        setError(error);
      }
    };
    getCharacterInfo();
  }, [url]);
  return { character, error };
}
