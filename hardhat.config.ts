import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    goerli: {
      url: `${process.env.INFURA_GOERLI_URL}`,
      accounts: [`0x${process.env.GOERLI_PRIVATE_KEY}`],
    } 
  },
};

export default config;
