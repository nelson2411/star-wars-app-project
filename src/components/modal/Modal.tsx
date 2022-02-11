import React from "react";
import { Modal, Button, Table } from "react-bootstrap";
import { Character } from "../../models";
import { useCharacter } from "../../Hooks/character";
import { ModalHeader, ModalFooter } from "./modal.styles";

interface Props {
  name: string | undefined;
  show: boolean;
  onHide: () => void;
}

const ModalCharacter = (props: Props) => {
  const { character } = useCharacter(props.name!);
  console.log(props.name!);
  console.log({ character });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {character?.map((character) => (
        <>
          <ModalHeader className="d-flex justify-content-center">
            <Modal.Title id="contained-modal-title-vcenter">
              {character.name}
            </Modal.Title>
          </ModalHeader>
          <Modal.Body>
            <Table>
              <tbody>
                <tr>
                  <td>Mass</td>
                  <td>{character.mass}</td>
                </tr>
                <tr>
                  <td>Homeworld</td>
                  <td>{character.homeworld}</td>
                </tr>
                <tr>
                  <td>films</td>
                  <td>
                    {character.films.map((film) => (
                      <ul>
                        <li>{film}</li>
                      </ul>
                    ))}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
        </>
      ))}
      <ModalFooter className="d-flex justify-content-center">
        <Button onClick={props.onHide} variant="dark">
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalCharacter;
