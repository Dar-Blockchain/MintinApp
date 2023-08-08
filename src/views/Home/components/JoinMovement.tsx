import ModalComponent from "../../../components/Modal/Modal";
import { useState } from "react";

const JoinMovement = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <main className="font-text text-lg p-8">
        <div className="text-center mt-8">
          <h2 className="font-title text-3xl mb-4">JOIN THE MOVEMENT</h2>
          <p className="font-text text-lg">
            Only 420 Waldos ever, only one price: <br /> 0.1ETH
          </p>
          <p className="font-text text-sm">(Floor price: 0.1049 ETH)</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8">
          <a
            className="relative mx-2 my-4 md:my-0 w-full md:w-1/3 text-center"
            onClick={openModal}
          >
            <img
              src="assets/images/Mint%20Soon.png"
              alt="Mint"
              className="mobile-full-width"
            />
          </a>
          <a
            href="https://opensea.io/collection/the-waldos-legend"
            className="relative mx-2 my-4 md:my-0 w-full md:w-1/3 text-center"
          >
            <img
              src="assets/images/Bouton%20Open%20Sea.png"
              alt="Open Sea page"
              className="mobile-full-width"
            />
          </a>
        </div>
        <div className="text-center mt-8 mx-auto font-text">
          <p className="mb-2">
            Each Waldos is unique and programmatically generated from over
            multiple traits. Common, rares, mythic.
          </p>
          <p>
            The Waldos are stored as ERC-721 tokens on the Ethereum blockchain
            and hosted on IPFS. (See Record and Proof.)
          </p>
          <p className="mb-4">
            Even if the Website is owned by Waldo's Joint, the Waldos are fully
            controlled by the owner.
          </p>
        </div>
      </main>
      <img
        src="assets/images/main%20page%20site.jpg"
        alt="Main Page Site"
        className="mx-auto my-8 rounded-lg mobile-full-width"
      />
      <div className="text-center mt-8">
        <a href="https://cbdwaldoslegend.com/">
          <img
            src="assets/images/Bouton%20Shop.png"
            alt="Bouton Shop"
            className="mx-auto w-3/4 md:w-1/3 lg:w-1/8 object-contain"
          />
        </a>
      </div>
    </>
  );
};

export default JoinMovement;
