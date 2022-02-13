import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { GiStarSattelites } from "react-icons/gi";

type SearchProps = {
  onSearch: string;
  handleSearchQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ onSearch, handleSearchQuery }: SearchProps) => {
  return (
    <div className="d-flex justify-content-center">
      <InputGroup className="mb-5 w-50 ">
        <InputGroup.Text id="basic-addon1">
          <GiStarSattelites />
        </InputGroup.Text>
        <FormControl
          onChange={handleSearchQuery}
          value={onSearch}
          placeholder="Search for character name"
          aria-label="Search for character name"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  );
};

export default SearchBar;
