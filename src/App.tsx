import Home from "./views/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'

import {polygonMumbai} from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
 
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: 'https://eth-mainnet.g.alchemy.com/v2/1Ot9sqVO7s3JSmdWAUAHe8JGlGdVEGWF' }), publicProvider()],
)
 
// const { chains,publicClient } = configureChains(
//   [polygonMumbai],
//   [
//   jsonRpcProvider({
//   rpc: (chain) => ({
//   http: "https://polygon-mumbai-bor.publicnode.com",
//   }),
//   }),
//   ]
//   );
// Set up wagmi config
const config = createConfig({
  autoConnect: true,
  connectors: [
   
    new WalletConnectConnector({
      chains,
      options: {
        projectId: '107ba837c39e224b69b46bdf2abfa411',
      },
    }),
  
  ],
  publicClient,
  webSocketPublicClient,
})
function App() {
  return (

    <div className="App">
    <WagmiConfig config={config}>

      <Router>

        <Routes>

          <Route path="/" element={<Home />} />

        </Routes>

      </Router>
      </WagmiConfig>

    </div>

  );
}

export default App;
