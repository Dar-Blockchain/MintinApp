import ModalComponent from "../../../components/Modal/Modal";
import { useState ,useEffect} from "react";
import { contractABI } from "../../../contracts/abi";
import {connectWallet, mintNFT} from "../../../services/interact";
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'
import { usePrepareContractWrite,useContractWrite,useWaitForTransaction,configureChains,useAccount,mainnet,useConnect } from 'wagmi'
import { parseEther } from 'viem'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import {isMobile} from 'react-device-detect';

import env from "../../../env"
  
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: 'https://eth-mainnet.g.alchemy.com/v2/1Ot9sqVO7s3JSmdWAUAHe8JGlGdVEGWF' }), publicProvider()],
)

const JoinMovement = () => {
  const { connect, connectors, error, pendingConnector } =
useConnect() 
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { address, connector, isConnected } = useAccount()

  const [wallet,setWallet] = useState("");
  const [Connector,setConnector] = useState({});
  const [signClient, setSignClient ] = useState();
  const [Error, setError ] = useState("");
  const add:any = env.contractAddress;
  useEffect(() => {
    if(isMobile)
    {
      const connected = localStorage.getItem("connected");
    
    }
  }, []);
  const metamaskAction = async() => {
    await mintNFT(1);
  };
 
  const { config,error: prepareError,
    isError: isPrepareError } = usePrepareContractWrite({
    address: "0x1c20acf90f08643b922cd7db7946663ee8fcc173",
    abi: contractABI,
    functionName: 'WaldosMint',
    args: [1,address],
    value: parseEther("0.1"),
    chainId: 1,
    account: address,
    onError(error) {
      console.log('Error', error)
      if(error.toString().includes("The total cost (gas * gas fee +"))
      {
      setError(`⚠️ Insufficient funds to 
      mint your Waldos ⚠️`)}
    
     else if(!error.toString().includes("InvalidAddressError"))
      {
      setError(error.toString().substring(0, 150))}
    },
    })

  const { data, write } = useContractWrite(config)
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  const actions = async() => {
    walletC();
    write?.()
  }
  const walletC = async() => {
    
    // const connector = new WalletConnectConnector({
    //   chains,
    //   options: {
    //     projectId: '107ba837c39e224b69b46bdf2abfa411',
    //   },
    // })
    // const res = await connector.connect();
    // const connected = localStorage.getItem("connected");
    
    // if(res.account && connected!=="true")
    // {
    //   window.location.reload();
    //   localStorage.setItem("connected","true");
    // }
    
    
    // setConnector(res);
    // setAccount(res.account)
    console.log(address);
    connectors.map((connector) => {
      console.log(connector);
      if(!address)
      {
      connect({ connector });
      }
      
    })
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
            Only 420 Waldos ever, only one price: <br /> 0.1ETH <br /><br />
            {address &&
            <div style={{backgroundColor:"white", width:"50%",height:"auto",marginLeft:"25%"}}>

            <p className="font-text text-lg" style={{color:"black"}} >{"connected "+address.substring(0, 6) +
          "..." +address.substring(38) }</p>
            </div>
            }
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
            onClick={() => {isMobile ? actions()  : metamaskAction() } }

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
        <div style={{backgroundColor:"white", width:"80%",height:"auto",marginLeft:"10%"}}>
        <p style={{color:"red"}}>{Error}</p>
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
