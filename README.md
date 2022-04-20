# WOW_NFT
Implementation of WOW NFT (ERC-721 token) and NFT minting

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
