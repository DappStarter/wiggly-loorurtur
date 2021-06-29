require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name renew sad unusual install neck bubble tomorrow'; 
let testAccounts = [
"0x91c941d97387366ed800f481cf1e8d1c10d0dcc28284d546442035831927d78f",
"0xfe7ed3c106719347e83b732175e385717a2393e54af4a8daa51639b310474fef",
"0x05ecdd9485fd8c8730bc0b97682573b5def7d7b2e33f06b4c51e4d0bb4c30c49",
"0xba183ef7175fd317156769a9522fdea1d98428e844051af41ef6ca19a4c523cd",
"0xdc9b1e0dac8ab7789dd0d4a25fd03486416a68f33ae180845bafcb6790b594d4",
"0x9906dbb259238ebf96fc23c2523904570642c5e96880f9f21b5cad044e3cdc80",
"0x0d8f2f3a5351d2f3c01b2b7fdaca96d6cd523b0b3f7ac1e2e3d923972306888b",
"0xdd6abac24a2a7fd7493e0e0d0d4658a0c3fb0448c950e5b592f031ea15d053c1",
"0x6a5486ac7febdd9447b31962b07b4a32c42f619b48c1c047a36aa35a3f04eb05",
"0x7c6663ee8eef77cb4c44d086b1e8e4ed8fef1a052053df39665de7ae075fae16"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

