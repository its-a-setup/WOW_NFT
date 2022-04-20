require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

ALCHEMY_API_KEY=process.env.ALCHEMY_API_KEY;
RINKEBY_PRIVATE_KEY=process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.13",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`]
    }
  }
};
