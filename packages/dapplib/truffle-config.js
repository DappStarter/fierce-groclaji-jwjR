require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan recipe situate unaware hockey area olympic genius'; 
let testAccounts = [
"0x55e2707ad0140d29770f256692d60938336e2ec314528ed29105811ed94ba359",
"0x23fe689da78957f6d7911d2784a411d760902e9fc8506c2d7fbcf3e4d135e4ce",
"0xa3df1ce1365cdd29c7ac14f11713edcd34a4998246f9b23410ba10dd721cf919",
"0x818dbac17000c0e5ad294a59578efcbcec73a6770dcb0d6a882ff9a69967ba9a",
"0x8a8d2d6a7497c0e18d6a0b0410c40d1a17c440c8692ce57ba891a672c84620a5",
"0xdd29c578bd88c5764f233e6983e663f73d40d1f9549f6f21c1e45449ed51bed3",
"0xc9804464e5e67628ec03500f1fe744876a7c4364d267f7d8d54858c1c3016b76",
"0x489d237910ee09823e177326c4f227dc656aefbff7735ef5182a718a0823d8f4",
"0x2e9360991b72bdc1c565809b9f7bad044809543465c8e45bb8bbd80aaafc1853",
"0xb2a6c87693e7b4a631d4e4dc9234e103afe15af4267b2a7bca062f8554803338"
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

