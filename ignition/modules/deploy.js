const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LockModule", (m) => {
  const bank = m.contract("Bank");
  const token = m.contract("Token");
  const standardErc20 = m.contract("StandardToken", [
    "0xa96ebe266c4527a0e5f7e97fbb0923a9455516c5",
    "DavidToken",
    "DVT",
  ]);

  // console.log(typeof lock);
  console.log("bank", bank);
  console.log("token", token);
  console.log("standard", standardErc20);

  return { bank, token, standardErc20 };
});

// npx hardhat ignition deploy ./ignition/modules/Lock.js --network localhost // localhost

// what if we want to deploy to sepolia...pending....
