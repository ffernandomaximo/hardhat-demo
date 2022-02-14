require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require('./tasks/MyContractTasks.js');

// require('dotenv').config({ debug: true })
const KOVAN_RPC_URL = process.env.KOVAN_RPC_URL
const MNEMONIC = process.env.MNEMONIC

module.exports = {
  defaultNetwork: "kovan", //'hardhat'
  networks: {
    hardhat: {
    },
    kovan: {
      url: KOVAN_RPC_URL,
      accounts: {
        mnemonic: MNEMONIC
      }
    }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}