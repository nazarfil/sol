// Include web3 library so we can query accounts.
const Web3 = require('web3');
// Instantiate new web3 object pointing toward an Ethereum node.
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
// Include AuthorDonation contract
let AuthorDonation = artifacts.require("contract");

contract('contract', function(accounts) {
  // Setup a variable to hold the contract object.
  var authorDonation;
  // A convenience to view account balances in the console before making changes.
  printBalances(accounts);
  it("should assert true", function(done) {
    var contract = contract.deployed();
    assert.isTrue(true);
    done();
  });
});

it("Should run", function(instance){

  assert(3,3);
})