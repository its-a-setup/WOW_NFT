# WOW_NFT
Implementation of WOW NFT (ERC-721 token) and NFT minting

# Dependencies
Navigate to your project directory and run the following commands 1 by 1:
```bash
 npm init --yes
```
```bash
 npm install --save-dev hardhat
```
```bash
 npx hardhat
```
>Create a new empty hardhat.config.js
```bash
 npm install dotenv --save
```
```bash
 npm install --save-dev @nomiclabs/hardhat-ethers ethers@^5.0.0
```
```bash
 npm install @alch/alchemy-web3
```

# QuickStart
1) Deploy the contract wow_nft.sol to one of the networks (e.g. rinkeby) using Hardhat. To do that run in project directory: 
```bash
 npx hardhat --network rinkeby run scripts/deploy.js
```
3) Go to Etherscan and check contract's address
4) Change contractAddress in scripts/mint_nft.js to your contract's address (which you copied from Etherscan)
5) Mint your NFT by interacting with the contract by running:
```bash
 npx hardhat --network rinkeby run scripts/mint_nft.js
```

# Congratulations!
