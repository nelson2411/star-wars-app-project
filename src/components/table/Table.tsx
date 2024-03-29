import React from "react"
import { Character } from "../../models"
import { Link } from "react-router-dom"
import ModalCharacter from "../modal/Modal"
import { ButtonLink, LoadingContainer } from "./table.styles"
import {
  useFetchCharactersQuery,
  useFetchAllPlanetsQuery,
  useFetchFilmsQuery,
} from "../../redux/features/apis/starWarsApiSlice"
import { Table, Container, Pagination } from "react-bootstrap"
import SearchBar from "../search-bar/SearchBar"
import PaginationComponent from "../pagination/PaginationComponent"

const TableContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [modalShow, setModalShow] = React.useState<boolean>(false)
  const [pageNumber, setPageNumber] = React.useState(1)
  const { data, isFetching } = useFetchCharactersQuery(pageNumber)
  const { data: planets } = useFetchAllPlanetsQuery()
  const { data: allFilms } = useFetchFilmsQuery()
  const [name, setName] = React.useState<string | undefined>()
  const [mass, setMass] = React.useState<string | undefined>()
  const [homeworld, setHomeWorld] = React.useState<string | undefined>()
  const [films, setFilms] = React.useState<string[] | undefined>([])

  const handleId = (
    name: string,
    mass: string,
    homeworld: string,
    films: string[]
  ) => {
    setName(name)
    setModalShow(true)
    setMass(mass)
    setHomeWorld(
      planets?.results.find((planet) => planet.url === homeworld)?.name
    )
    setFilms(
      films?.map(
        (url) => allFilms?.results.find((film) => film.url === url)?.title || ""
      )
    )
  }
  const handleSetInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }
  return (
    <Container>
      <SearchBar onSearch={searchQuery} handleSearchQuery={handleSetInput} />
      <div className="d-flex justify-content-center my-4">
        <PaginationComponent
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
        />
      </div>

      <Table
        striped
        bordered
        hover
        variant="dark"
        responsive
        className="shadow"
      >
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
            data?.results
              .filter((character) =>
                character.name.toLowerCase().includes(searchQuery)
              )
              .map((character: Character, i) => (
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
      <ModalCharacter
        name={name}
        mass={mass}
        homeworld={homeworld}
        films={films}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  )
}

export default TableContent
