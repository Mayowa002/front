// const {
//   time,
//   loadFixture,
// } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
// const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
// const { expect, assert } = require("chai");
// const { hre, ethers } = require("hardhat");

// // ether js nd mocha js....describe, beforeEach .. mocha js...

// describe("Bank", function () {
//   // when we want to test the first thong we would do is to deploy \
//   //  then we interact wih the contract...

//   it("should deposit", async function () {
//     let fakeSigner = await ethers.getSigners();
//     let user1 = fakeSigner[1];
//     console.log(fakeSigner[1].address);

//     let contract = await ethers.getContractFactory("Bank");
//     let deploy = await contract.deploy();
//     let depositAmount = 10000000000000 // 1 ether...
//     // await contract.waitForDeployment(1);

//     // interact with our function....on solidity...

//     await deploy.connect(user1).deposit({value: depositAmount});
//     assert(await deploy.getCurrentUSerBalance(fakeSigner[1].address) == depositAmount, "incorrect deposit");

//     await deploy.connect(user1).deposit({value: depositAmount});
//     assert(await deploy.getCurrentUSerBalance(fakeSigner[1].address) == depositAmount * 2, "incorrect deposit");


//   });


//   it("should withdraw successfully ", async function () {
//     let fakeSigner = await ethers.getSigners();
//     let user1 = fakeSigner[1];
//     let contract = await ethers.getContractFactory("Bank");
//     let deploy = await contract.deploy();
//     let depositAmount = 10000000000000 // 1 ether...

//     await deploy.connect(user1).deposit({value: depositAmount});

//     await deploy.connect(user1).withdraw(10000);
// // assignment figure this out.....
//     assert(await deploy.getCurrentUSerBalance(fakeSigner[1].address) == 99900, " what are you thinking about ser??");
// // npx hardhat coverage again...
// // 
//   })
// });
