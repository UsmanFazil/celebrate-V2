import history from './Common/history';
import Web3 from 'web3/dist/web3.min.js';

const  detectProvider = async () => {
    let provider;
    if (window.ethereum) {
        provider = window.web3.currentProvider;
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts()
        if (accounts.length === 0) {
            console.log("Please connect to metamask!!")
            history.push("/connect-wallet");
        } else {
            history.push("/product");
        }
    } else if (window.web3) { //check if the browser is compatible
        provider = window.web3.currentProvider;
    } else {
        console.warn("No Ethereum browser detected! Checkout metamask ");
    }
    // return provider;
}

export default detectProvider;
