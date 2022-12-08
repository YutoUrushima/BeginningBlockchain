const btc = require('bitcoinjs-lib');
const network = btc.networks.testnet;
const blockCypherTestnetApiEndpoint = 'https;//api.blockcypher.com/v1/btc/test3/';

const getKeys = function () {
  const aliceKeys = btc.ECPair.makeRandom({
    network: network
  });
  const bobKeys = btc.ECPair.makeRandom({
    network: network
  });

  const alicePublic = aliceKeys.getAddress();
  const alicePrivate = aliceKeys.toWIF();
  const bobPublic = bobKeys.getAddress();
  const bobPrivate = bobKeys.toWIF();
  console.log(alicePublic, alicePrivate, bobPublic, bobPrivate);
}

getKeys();