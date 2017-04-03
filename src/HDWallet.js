'use strict'
const bip39 = require('bip39')
const hdkey = require('hdkey')
/**
 * Initialize HD wallet
 * @param {string} _path derivation path
 * @param {string} [_mneumonic=_mnemonic] mneumonic phrase
 * @param {string} [_password=''] for the mneumonic
 * @returns {object} new ethereumwallet object
 * @example
 * var hd = new HDWallet("m/44'/60'/0'/0",,"test");
 * //returns EthereumWallet {} for ETH
 */
var HDWallet = function (_path, _mnemonic = bip39.generateMnemonic(), _password = '') {
  this.path = _path
  this.password = _password
  this.mnemonic = _mnemonic
  this.hdkey = hdkey.fromMasterSeed(this.getSeed())
}
    /**
     * @namespace
     * @property {string} ETH derivation path for Ether.
     * @property {string} BTC derivation path for Bitcoin.
     * @property {string} ETC derivation path for Ether Classic.
     * @property {string} XMR derivation path for Monero.
     */
HDWallet.paths = {
  ETH: "m/44'/60'/0'/0",
  ETC: "m/44'/61'/0'/0",
  BTC: "m/44'/0'/0'/0",
  XMR: "m/44'/128'/0'/0"
}
    /**
     * Get derivation path
     * @returns {string} derivation path
     */
HDWallet.prototype.getPath = function () {
  return this.path
}
    /**
     * Get mnemonic phrase
     * @returns {string} mneumonic phrase
     */
HDWallet.prototype.getMnemonic = function () {
  return this.mnemonic
}
    /**
     * Get seed string
     * @returns {string} returns seed as a hex string
     */
HDWallet.prototype.getSeedString = function () {
  return bip39.mnemonicToSeedHex(this.mnemonic, this.password)
}
    /**
     * Get seed
     * @returns {buffer} returns seed as a buffer
     */
HDWallet.prototype.getSeed = function () {
  return bip39.mnemonicToSeed(this.mnemonic, this.password)
}
    /**
     * Validate mnemonic phrase
     * @param {string} _mnemonic mnemonic phrase
     * @returns {boolean} true/false
     * @example
     * var hd = new HDWallet("m/44'/60'/0'/0",,"test");
     * //returns HDWallet {} for ETH
     */
HDWallet.isValidMnemonic = (_mnemonic) => {
  return bip39.validateMnemonic(_mnemonic)
}
    /**
     * Private key for specified child
     * @param {number} _index index of child
     * @returns {buffer} private key
     */
HDWallet.prototype.getChildPrivKey = function (_index) {
  return this.hdkey.derive(this.path + '/' + _index)._privateKey
}
    /**
     * Private key for specified child
     * @param {number} _index index of child
     * @returns {string} private key
     */
HDWallet.prototype.getChildPrivKeyString = function (_index) {
  return this.hdkey.derive(this.path + '/' + _index)._privateKey.toString('hex')
}
module.exports = HDWallet
