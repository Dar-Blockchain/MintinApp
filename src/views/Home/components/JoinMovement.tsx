import ModalComponent from "../../../components/Modal/Modal";
import { useState ,useEffect} from "react";
import { contractABI } from "../../../contracts/abi";
import {connectWallet, mintNFT} from "../../../services/interact";
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'
import { usePrepareContractWrite,useContractWrite,useWaitForTransaction } from 'wagmi'
import { parseEther } from 'viem'
import {isMobile} from 'react-device-detect';

import env from "../../../env"



const JoinMovement = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [wallet,setWallet] = useState("");
  const [Connector,setConnector] = useState({});
  const [account,setAccount]:any = useState("");
  const [signClient, setSignClient ] = useState();
  const add:any = env.contractAddress;

  const metamaskAction = async() => {
    await mintNFT(1);
  };
  const { config } = usePrepareContractWrite({
    address: add,
    abi: contractABI,
    functionName: 'WaldosMint',
    args: [1,account],
    value: parseEther("0.1"),
    chainId: 1,
    account: account
    })

  const { data, write } = useContractWrite(config)
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })
  const walletC = async() => {
    const connector = new WalletConnectConnector({
      options: {
        projectId: '107ba837c39e224b69b46bdf2abfa411',
      },
    })
    const res = await connector.connect();

    console.log(res);
    setConnector(res);
    setAccount(res.account)
  }
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
          {/*<p className="font-text text-sm">(Floor price: 0.1049 ETH)</p>*/}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8">
          <a
            className="relative mx-2 my-4 md:my-0 w-full md:w-1/3 text-center"
            onClick={isMobile ?walletC : connectWallet}
          >
            <img
              src="assets/images/ConnectWallet.png"
              alt="Mint"
              className="mobile-full-width"
            />
          </a>
          <a
            className="relative mx-2 my-4 md:my-0 w-full md:w-1/3 text-center"
            onClick={() => {isMobile ? write?.() : metamaskAction() } }

          >
            <img
              src="assets/images/Mint%20Soon.png"
              alt="Mint"
              className="mobile-full-width"
            />
          </a>
          {/* <a
            href="https://opensea.io/collection/the-waldos-legend"
            className="relative mx-2 my-4 md:my-0 w-full md:w-1/3 text-center"
          >
            <img
              src="assets/images/Bouton%20Open%20Sea.png"
              alt="Open Sea page"
              className="mobile-full-width"
            />
          </a> */}
        </div>
        <div className="text-center mt-8 mx-auto font-text">
          <p className="pb-4">
            Each Waldos is unique and programmatically generated from over
            <br />
            multiple traits. Common, rares, mythic.
          </p>
          <p>
            The Waldos are stored as ERC-721 tokens on the Ethereum
            <br /> blockchain and hosted on IPFS. (
            <a
              className="text-white"
              href="https://opensea.io/collection/the-waldos-legend"
              target="_blank"
            >
              View on OpenSea
            </a>
            )
          </p>
        </div>
      </main>
    </>
  );
};

export default JoinMovement;
