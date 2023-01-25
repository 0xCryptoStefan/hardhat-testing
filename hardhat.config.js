require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    //
    // Fantom
    //
    fantomTestnet: {
      url: "https://rpc.testnet.fantom.network/",
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2],
      chainId: 4002,
      live: false,
      saveDeployments: true,
      gasMultiplier: 2,
      // from,
      // gas: "auto",
      // gasPrice: "auto",
      // httpHeaders: undefined,
      // timeout: 20000,
    },
    fantomMainnet: {
      url: "https://rpcapi.fantom.network",
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2],
      chainId: 250,
      live: false,
      saveDeployments: true,
      gasMultiplier: 2,
      // from,
      // gas: "auto",
      // gasPrice: "auto",
      // httpHeaders: undefined,
      // timeout: 20000,
    },
    //
    // Polygon
    //
    polygonMumbaiTestnet: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2],
      chainId: 80001,
      live: false,
      saveDeployments: true,
      gasMultiplier: 2,
      // from,
      // gas: "auto",
      // gasPrice: "auto",
      // httpHeaders: undefined,
      // timeout: 20000,
    },
    polygonMainnet: {
      url: "https://polygon.llamarpc.com",
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2],
      chainId: 137,
      live: false,
      saveDeployments: true,
      gasMultiplier: 2,
      // from,
      // gas: "auto",
      // gasPrice: "auto",
      // httpHeaders: undefined,
      // timeout: 20000,
    },
    // Cronos
    // Avalanche
    // Optimism
    // Arbitrum
    // Ethereum
    // Harmony
    harmonyMainnet: {
      // Shard Zero
      url: "https://harmony-mainnet.chainstacklabs.com",
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2],
      chainId: 1666600000,
      live: false,
      saveDeployments: true,
      gasMultiplier: 2,
      // from,
      // gas: "auto",
      // gasPrice: "auto",
      // httpHeaders: undefined,
      // timeout: 20000,
    },
    harmonyTestnet: {
      // Shard Zero
      url: "https://api.s0.b.hmny.io",
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2],
      chainId: 1666700000,
      live: false,
      saveDeployments: true,
      gasMultiplier: 2,
      // from,
      // gas: "auto",
      // gasPrice: "auto",
      // httpHeaders: undefined,
      // timeout: 20000,
    },
    // Binance Smart Chain
    // Gnosis
    // Celo
    // Moonbeam
    // HECO
    //
  },
};
