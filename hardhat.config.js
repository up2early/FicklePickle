require("secrets");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    polygon: {
      url: "https://polygon-rpc.com/",
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: { mnemonic: process.env.DEVMNEMONIC },
    },
    hardhat: {
      accounts: { mnemonic: process.env.DEVMNEMONIC },
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCANAPIKEY,
  },
};
