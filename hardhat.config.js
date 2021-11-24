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
      url:
        "https://polygon-mainnet.infura.io/v3/" + process.env.INFURAPROJECTID,
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/" + process.env.INFURAPROJECTID,
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
