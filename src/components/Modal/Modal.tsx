import { Button, Modal } from "react-bootstrap";
import "./Modal.css";

function ModalComponent(props: any) {
  const { modalIsOpen, closeModal } = props;
  const metamaskAction = () => {};
  const walletConnectAction = () => {};
  return (
    <Modal show={modalIsOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title className="title">MINT YOUR WALDOS</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="img-container">
          <a
            className="relative mx-2 my-4 md:my-0 w-full md:w-1/3 text-center"
            onClick={metamaskAction}
          >
            <img
              src="assets/images/metamask.svg"
              alt="metamask"
              className="modal-img"
            />
          </a>
          <a
            className="relative mx-2 my-4 md:my-0 w-full md:w-1/3 text-center"
            onClick={walletConnectAction}
          >
            <img
              src="assets/images/walletconnect.svg"
              alt="walletconnect"
              className="modal-img"
            />
          </a>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
