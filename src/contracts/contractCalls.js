import {nftContractAbi, nftContractAddress} from "./nftContractInfo";
import { saleContractAbi, saleContractAddress } from "./saleContracInfo";

const web3 = new Web3(Web3.givenProvider);
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const address = await web3.eth.getAccounts();

// function to get user NFT balance
export const getUserBalance = async () => {
    const nftContract = new ethers.Contract(nftContractAddress, nftContractAbi, signer);
    const nftAmount = await nftContract.balanceOf(address[0]);
    return nftAmount;
};

// function to buy new NFT
export const buyNFTs = async (tokenAmount) => {

    const saleContract = new ethers.Contract(saleContractAddress, saleContractAbi, signer);
    const nftPrice = await saleContract.getPrice();

    const buyTx = await saleContract.bulkbuy(tokenAmount, {value: nftPrice.toNumber()* tokenAmount})
    .then()
    .catch();
};

