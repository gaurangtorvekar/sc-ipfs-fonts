require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");

module.exports = {
	defaultNetwork: "matic_mumbai",
	networks: {
		hardhat: {},
		matic_mumbai: {
			url: "https://rpc-mumbai.maticvigil.com",
			accounts: [process.env.PRIVATE_KEY],
		},
	},
	etherscan: {
		apiKey: process.env.POLYGONSCAN_API_KEY,
	},
	solidity: {
		version: "0.8.9",
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
};
