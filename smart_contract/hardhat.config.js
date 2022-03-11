require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/UI8gDUSSBgwosBTN7-7bZK5_55MtqxXo",
      accounts: ['fa0f2b3ca5df84b698c49c6216e1792ee9c3f06b3f0451b075dd536d027f2b7c']
    }
  }
};
