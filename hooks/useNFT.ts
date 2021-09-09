import { ethers } from "ethers";
import Web3Modal from "web3modal";
import NFT from "../artifacts/contracts/NFT.sol/NFTBank.json";

const useNFT = async () => {
  const web3Modal = new Web3Modal({
    network: "mumbai",
  });

  const connection = await web3Modal.connect();

  const provider = new ethers.providers.Web3Provider(connection);

  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    // Actual contract address
    "0x000000000000000000",
    NFT.abi,
    signer
  );
  const address = await signer.getAddress();

  return { address, contract };
};

export default useNFT;