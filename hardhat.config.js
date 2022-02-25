require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

require("./tasks/faucet");

const { ALCHEMY_API_URL, PK } = process.env;

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.

// If you are using MetaMask, be sure to change the chainId to 1337
module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: ALCHEMY_API_URL,
      accounts: [`0x${PK}`],
    },
  },
};
