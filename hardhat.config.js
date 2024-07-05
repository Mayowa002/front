require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    // mainnet: { ... },
    sepolia: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_Key],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.API_KEY,
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true,
  },
};

// LockModule#Bank - 0xea35E39954abF44cf40DBaD0bBFA47f7825F12b0
// LockModule#StandardToken - 0xF674d721BDE561bd7133A960683832143C292327
// LockModule#Token - 0xa2960CB8b6e76D0D32C4701dFEc4CB50ff59bbD1 -- you will verify this one.....


// npm install