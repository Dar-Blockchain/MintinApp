import Home from "./views/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
 
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: 'https://eth-mainnet.alchemyapi.io/v2/9YkULSmxC2HB8TD7N01E0NMceYtP9KUh' }), publicProvider()],
)
 

// Set up wagmi config
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
  
    new WalletConnectConnector({
      chains,
      options: {
        projectId: '107ba837c39e224b69b46bdf2abfa411',
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
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
