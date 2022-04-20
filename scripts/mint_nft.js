require("dotenv").config()
const ALCHEMY_API_KEY=process.env.ALCHEMY_API_KEY;
const PRIVATE_KEY=process.env.RINKEBY_PRIVATE_KEY;

const API_URL = `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`;
const PUBLIC_KEY = "0x8BF293313471236a86b08AA0F49E0c037ABD40Af";

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

//First deploy wow_nft.sol contract, contract's artifacts will be saved to this folder
const contract = require("../artifacts/contracts/wow_nft.sol/wow_nft.json");
//Replace contractAddress with your own
const contractAddress = "0xa40A64EaE1d92e32b52319b2bfae195b5aF98EbA";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function mintNFT(tokenURI) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest');

    const tx = {
        'from' : PUBLIC_KEY,
        'to' : contractAddress,
        'nonce' : nonce,
        'gas' : 500000,
        'data' : nftContract.methods.mint(PUBLIC_KEY, tokenURI).encodeABI(),
    }

    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)

    signPromise.then((signedTx) => {
            web3.eth.sendSignedTransaction(signedTx.rawTransaction,
                function (err, hash) {
                    if (!err) {
                        console.log("The hash of your transactions is: ",
                        hash,
                        "\nCheck Alchemy's Mempool to view the status of your transaction!")
                    }
                    else {
                        console.log("Something went wrong when submitting your transaction:",
                        err)
                    }
                }
            )
        })
        .catch((err) => {console.log("Promise failed: ", err)})
}

mintNFT("ipfs://QmV31oVDYaBYx9UATtzgSWJMBgm2AJsWdwf2WW7Zxwsmsq")