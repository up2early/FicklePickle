# FicklePickle
A NFT collection that doesn't really feel like being owned by anyone in particular.

## Getting Started

### Dependencies

* npm

### Installing

* ```git clone https://github.com/up2early/FicklePickle```
* ```cd FicklePickle```
* ```npm install```

### Configuration
* Create a .env file in the root of FicklePickle with the following template, be sure to change the POLYGONSCANAPIKEY if you want to verify the contract
```
POLYGONSCANAPIKEY={polygonscan API KEY}
DEVMNEMONIC="test test test test test test test test test test test junk"
```

### Executing tests/deploying

* To get a list of hardhat commands run
```
npx hardhat
```
* To run tests
```
npx hardhat test
```
* To deploy on mumbai testnet (you may have to change the DEVMNEMONIC and get MATIC from a faucet)
```
npx hardhat run scripts/deploy.js --network mumbai
```
* To verify deployed contract on mumbai testnet
```
npx hardhat verify --network mumbai CONTRACT_ADDRESS
```

## Authors

Logan Bonney [@up2early](https://twitter.com/loganinak)

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [DomPizzie/README-Template.md](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)
* [Openzeppelin](openzeppelin.com)
