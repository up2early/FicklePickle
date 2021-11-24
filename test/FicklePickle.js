const { expect } = require("chai");

describe("Token contract", function () {
  let Token;
  let ficklePickle;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    Token = await ethers.getContractFactory("FicklePickle");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // Deploy the contract and wait for it to be mined
    ficklePickle = await Token.deploy();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await ficklePickle.owner()).to.equal(owner.address);
    });
  });

  describe("Minting", function () {
    it("Should allow minting to an address", async function () {
      await ficklePickle.safeMint(owner.address);
      expect(await ficklePickle.balanceOf(owner.address)).to.equal(1);
    });
  });

  describe("Transactions", function () {
    it("Should allow stealing", async function () {
      await ficklePickle.safeMint(addr1.address);
      expect(await ficklePickle.balanceOf(addr1.address)).to.equal(1);
      expect(await ficklePickle.balanceOf(owner.address)).to.equal(0);

      await ficklePickle.steal(0);
      expect(await ficklePickle.balanceOf(owner.address)).to.equal(1);
    });
  });
});
