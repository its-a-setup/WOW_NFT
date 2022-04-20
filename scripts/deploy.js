async function main() {
  const WowNFT = await ethers.getContractFactory("wow_nft")

  const NFT = await WowNFT.deploy()
  await NFT.deployed()
  console.log("Contract deployed to address:", NFT.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
