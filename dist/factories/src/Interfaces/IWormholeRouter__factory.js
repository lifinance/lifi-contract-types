"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IWormholeRouter__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint16",
                name: "recipientChain",
                type: "uint16",
            },
            {
                internalType: "bytes32",
                name: "recipient",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "arbiterFee",
                type: "uint256",
            },
            {
                internalType: "uint32",
                name: "nonce",
                type: "uint32",
            },
        ],
        name: "transferTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var IWormholeRouter__factory = /** @class */ (function () {
    function IWormholeRouter__factory() {
    }
    IWormholeRouter__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IWormholeRouter__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IWormholeRouter__factory.abi = _abi;
    return IWormholeRouter__factory;
}());
exports.IWormholeRouter__factory = IWormholeRouter__factory;
