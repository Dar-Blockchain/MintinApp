import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Modal.css";
import { mintNFT } from "../../services/interact";
function ModalComponent(props: any) {
  const [amount,setAmount] = useState("1");
  const { modalIsOpen, closeModal } = props;
  const metamaskAction = async() => {
    await mintNFT(amount);
  };
  const walletConnectAction = () => {};
  return (
    <Modal show={modalIsOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title className="title">CHOOSE YOUR WALDOS AMOUNT
        <input type="text" value={amount} onChange={(val) =>  setAmount(val.target.value)}  style={{borderColor : "black"}}/><br />
        {(amount == "0" || amount == "") &&
          <p style={{color:"red"}}>please choose an NFT amount</p>}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div className="img-container">
          <a
            className="relative mx-2 my-4 md:my-0 w-full md:w-1/3 text-center"
            onClick={metamaskAction}
          >
            <img
              src="assets/images/mintAction.png"
              alt="metamask"
              className="modal-img"
            />
          </a>
          {/* <a
            className="relative mx-2 my-4 md:my-0 w-full md:w-1/3 text-center"
            onClick={walletConnectAction}
          >
            <img
              src="assets/images/walletconnect.svg"
              alt="walletconnect"
              className="modal-img"
            />
          </a> */}
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
