import "../styles/globals.css";
import { getLibrary } from "../config/web3/index.js";
import { Web3ReactProvider } from "@web3-react/core";

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default MyApp;
