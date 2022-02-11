type Properties = {
  name: string;
  height: string;
  birth_year: string;
  gender: string;
};

export type Character = {
  name: string;
  height: string;
  birth_year: string;
  gender: string;
  uid: number;
  mass: string;
  hair_color: string;
  homeworld: string;
  films: string[];
  properties: Properties;
};
