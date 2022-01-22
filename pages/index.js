import { useCallback, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useWeb3React } from "@web3-react/core";
import { connector } from "../config/web3/index.js";
export default function Home() {
  const { activate, active, deactivate, account, error, chainId } =
    useWeb3React();

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem("previouslyConnected", true);
  }, [activate]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem("previoslyConnected");
  };
  useEffect(() => {
    if (localStorage.getItem("previouslyConnected") === "true") {
      connect();
    }
  }, [connect]);

  if (error) {
    return <p> Se rompio algo XD</p>;
  }

  return (
    <div className={styles.container}>
      <h1> web3 demo app</h1>
      {active ? (
        <>
          <button onClick={disconnect}> disconnect Wallet</button>
          <p>
            You are connected to {chainId} network <br />
            Your account is: {account}
          </p>
        </>
      ) : (
        <button onClick={connect}> connect wallet</button>
      )}
    </div>
  );
}
