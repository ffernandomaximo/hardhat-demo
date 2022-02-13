require('dotenv').config()
require("@nomiclabs/hardhat-ethers");

require('dotenv').config({ debug: true })

ethers = require('ethers')
const KOVAN_RPC_URL = process.env.KOVAN_RPC_URL
const MNEMONIC = process.env.MNEMONIC
const PRIVATE_KEY = ethers.Wallet.fromMnemonic(MNEMONIC);

module.exports = {
  defaultNetwork: "kovan",
  networks: {
    hardhat: {
    },
    kovan: {
      url: KOVAN_RPC_URL,
      accounts: [] //[PRIVATE_KEY.address]
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