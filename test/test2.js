const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const { hre, ethers } = require("hardhat");

describe("StandardToken contract", function () {
  console.log("hi");
  async function deployTokenFixture() {
    const StandardToken = await ethers.getContractFactory("standardToken");
    const [owner, address1, address2] = await ethers.getSigners();
    const contract = await StandardToken.deploy(owner.address, "MyToken", "MTK");
    await contract.waitForDeployment();
    return { contract, owner, address1, address2 };
  }

  it("should set the admin address", async function () {
    const { contract, owner } = await loadFixture(deployTokenFixture);
    expect(await contract.admin()).to.equal(owner.address);
  });

  it("should allow admin to add users to whitelist", async function () {
    const { contract, owner, address1 } = await loadFixture(deployTokenFixture);
    await contract.addToWhiteList(address1.address);
    expect(await contract.whiteList(address1.address)).to.be.true;
  });
  
  it("should not allow non-admin to add users to whitelist", async function () {
    const { contract, address1, address2 } = await loadFixture(deployTokenFixture);
    await expect(contract.connect(address2).addToWhiteList(address1.address)).to.be.revertedWith("Only the admin can add users to whitelist");
  });

  it("should allow whitelisted users to claim tokens", async function () {
    const { contract, address1 } = await loadFixture(deployTokenFixture);
    await contract.addToWhiteList(address1.address);
    await contract.connect(address1).claim();
    expect(await contract.balanceOf(address1.address)).to.equal(ethers.parseEther("1.0"));
  });

  it("should not allow non-whitelisted users to claim tokens", async function () {
    const { contract, address1 } = await loadFixture(deployTokenFixture);
    await expect(contract.connect(address1).claim()).to.be.revertedWith("Only whitelisted users can claim tokens");
  });
});