import React from "react";
import { Character } from "../../models";
import { Link } from "react-router-dom";
import ModalCharacter from "../modal/Modal";
import { ButtonLink, LoadingContainer } from "./table.styles";
import {
  useFetchCharactersQuery,
  useFetchAllPlanetsQuery,
  useFetchFilmsQuery,
} from "../../redux/features/apis/starWarsApiSlice";
import { Table, Container, Pagination } from "react-bootstrap";

const TableContent: React.FC = () => {
  const [modalShow, setModalShow] = React.useState<boolean>(false);
  const [pageNumber, setPageNumber] = React.useState(1);
  const { data, isFetching } = useFetchCharactersQuery(pageNumber);
  const { data: planets } = useFetchAllPlanetsQuery();
  const { data: allFilms } = useFetchFilmsQuery();
  const [name, setName] = React.useState<string | undefined>();
  const [mass, setMass] = React.useState<string | undefined>();
  const [homeworld, setHomeWorld] = React.useState<string | undefined>();
  const [films, setFilms] = React.useState<string[] | undefined>([]);

  const handleId = (
    name: string,
    mass: string,
    homeworld: string,
    films: string[]
  ) => {
    setName(name);
    setModalShow(true);
    setMass(mass);
    setHomeWorld(
      planets?.results.find((planet) => planet.url === homeworld)?.name
    );
    setFilms(
      films?.map(
        (url) => allFilms?.results.find((film) => film.url === url)?.title || ""
      )
    );
  };

  return (
    <Container>
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Height</th>
            <th>YOB</th>
          </tr>
        </thead>
        <tbody>
          {isFetching ? (
            <LoadingContainer>Is loading....</LoadingContainer>
          ) : (
            data?.results.map((character: Character, i) => (
              <tr key={i}>
                <td>
                  <ButtonLink
                    variant="link"
                    onClick={() =>
                      handleId(
                        character.name,
                        character.mass,
                        character.homeworld,
                        character.films
                      )
                    }
                  >
                    {character.name}
                  </ButtonLink>
                </td>
                <td>
                  {character.gender === "n/a"
                    ? "Not assignable"
                    : character.gender}
                </td>
                <td>{character.height}</td>
                <td>{character.birth_year}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      <Pagination className="d-flex justify-content-center my-3">
        <Pagination.First onClick={(e) => setPageNumber(Number(1))} />
        <Pagination.Prev
          onClick={(e) => setPageNumber(Number(pageNumber - 1))}
        />
        <Pagination.Next
          onClick={(e) => setPageNumber(Number(pageNumber + 1))}
        />
        <Pagination.Last onClick={(e) => setPageNumber(Number(9))} />
      </Pagination>
      <ModalCharacter
        name={name}
        mass={mass}
        homeworld={homeworld}
        films={films}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default TableContent;
