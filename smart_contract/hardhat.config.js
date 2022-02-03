//https://eth-ropsten.alchemyapi.io/v2/E3MAFUMiyOC8HxvXmLi4zQm9eXRZbnF7
//0x7751Ca502dC4F10dC0c078f9854dC11d400aE7F6
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/E3MAFUMiyOC8HxvXmLi4zQm9eXRZbnF7",
      accounts: [
        "7f081dedc42e9535684932d4ff4fa90db180bd8ebb446f953749874bdedbb2d0",
      ],
    },
  },
};
