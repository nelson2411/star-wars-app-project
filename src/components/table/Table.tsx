import React from "react";
import { usePeople } from "../../Hooks/people";
import { Character } from "../../models";
import { Link } from "react-router-dom";
import ModalCharacter from "../modal/Modal";
import { ButtonLink } from "./table.styles";
import { Table, Container, Pagination, Button } from "react-bootstrap";

const TableContent: React.FC = () => {
  const [modalShow, setModalShow] = React.useState<boolean>(false);
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const { people } = usePeople(pageNumber);
  const [name, setName] = React.useState<string | undefined>();
  const handleId = (name: string) => {
    setName(name);
    setModalShow(true);
  };
  console.log(people);
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
          {people.map((character: Character, i) => (
            <tr key={i}>
              <td>
                <ButtonLink
                  variant="link"
                  onClick={() => handleId(character.name)}
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
          ))}
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
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default TableContent;
