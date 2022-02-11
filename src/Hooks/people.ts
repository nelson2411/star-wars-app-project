import React from "react";
import { Character } from "../models";
import axios from "axios";

export function usePeople(number: number) {
  const [people, setPeople] = React.useState<Character[]>([]);
  const [error, setError] = React.useState<unknown>();
  const url = `https://swapi.dev/api/people/?page=${number}`;

  React.useEffect(() => {
    const getAllPeople = async () => {
      try {
        const response = await fetch(url);
        const responseJson = await response.json();
        setPeople(responseJson.results);
      } catch (error) {
        setError(error);
      }
    };
    getAllPeople();
  }, [url]);
  return { people, error };
}
