import React from "react";
import { Modal, Button, Table } from "react-bootstrap";
import { ModalHeader, ModalFooter } from "./modal.styles";
import List from "../film-list/List";
import { useFetchOneCharacterQuery } from "../../redux/features/apis/starWarsApiSlice";
import axios from "axios";

interface Props {
  name?: string;
  show: boolean;
  onHide: () => void;
  mass?: string;
  homeworld?: string;
  films?: string[];
}

const ModalCharacter = (props: Props) => {
  const { data, isFetching } = useFetchOneCharacterQuery(props.name!);
  console.log("data one character", data?.results);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader className="d-flex justify-content-center">
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </ModalHeader>
      <Modal.Body>
        <Table>
          <tbody>
            <tr>
              <td>Mass</td>
              <td>{props.mass}</td>
            </tr>
            <tr>
              <td>Homeworld</td>
              <td>{props.homeworld}</td>
            </tr>
            <tr>
              <td>films</td>
              <td>
                {props.films?.map((film) => (
                  <li>{film}</li>
                ))}
              </td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <ModalFooter className="d-flex justify-content-center">
        <Button onClick={props.onHide} variant="dark">
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalCharacter;
