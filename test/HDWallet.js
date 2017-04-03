let chai = require('chai');
let expect = chai.expect;
let HDWallet = require('../index').HDWallet;
let testMnemonic = "noise sun announce usage lift task rocket flavor cube impact sample budget";
let testPassword = "test password";
let randHD = new HDWallet(HDWallet.paths.ETH);
let pwHD = new HDWallet(HDWallet.paths.BTC, testMnemonic, testPassword);
let detHD = new HDWallet(HDWallet.paths.XMR, testMnemonic);
describe('Wallet Tests', function() {
    it('should work', function() {
        expect(randHD.getPath()).to.equal(HDWallet.paths.ETH);
        expect(HDWallet.isValidMnemonic(testMnemonic)).to.equal(true);
        expect(HDWallet.isValidMnemonic("abcdef")).to.equal(false);
    });
    it('should work', function() {
        let expectedSeed = "1b16b453dd60a636880afa9f6b2ba73b74999cb81279f274020b780953ef2a69db84c02b371f9e073947eb9b5684653ed847a414014c9b25dbed084823ed6cde";
        expect(pwHD.getSeedString()).to.equal(expectedSeed);
        expect(pwHD.getSeed().toString('hex')).to.equal(expectedSeed);
        expect(pwHD.getChildPrivKeyString(0)).to.equal("ae156c44a3be723b9a1628bd4ebcb41eaa6dbee61d30343e09cfefaecd576515");
        expect(pwHD.getChildPrivKey(0).toString('hex')).to.equal("ae156c44a3be723b9a1628bd4ebcb41eaa6dbee61d30343e09cfefaecd576515");
        expect(pwHD.getChildPrivKeyString(10)).to.equal("09cca392d9bfe711989824f82e61f4e536fff299d21761552dcd3c300ab26b92");
    });
    it('should work', function() {
        let expectedSeed = "bff96bb19a11fce60f4d60ebf932c6b9f0cacad5f7100ec07be1b4b8616d08adaae1b8ac09ab8b4a261b902304d7ed3860c18fa7010ab5d657a2ff674eb59b2d";
        expect(detHD.getSeedString()).to.equal(expectedSeed);
        expect(detHD.getSeed().toString('hex')).to.equal(expectedSeed);
        expect(detHD.getChildPrivKeyString(0)).to.equal("763471a73a0f77e84800e07d27baef546cef33d0c02850093409a30ee1b4a162");
        expect(detHD.getChildPrivKey(0).toString('hex')).to.equal("763471a73a0f77e84800e07d27baef546cef33d0c02850093409a30ee1b4a162");
        expect(detHD.getChildPrivKeyString(10)).to.equal("3fdb4a0974af815f99e7f308eb9d04f773335f48cd5624be63fa284417bc2c3e");
    });
    it('getMnemonic() should return correct value', function() {
        const phrase = 'mnemonic phrase';
        const wallet = new HDWallet(HDWallet.paths.ETH, phrase);
        expect(wallet.getMnemonic()).to.equal(phrase);
    });
});
