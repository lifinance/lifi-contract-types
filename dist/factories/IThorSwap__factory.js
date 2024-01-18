"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IThorSwap__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "depositWithExpiry",
        inputs: [
            {
                name: "vault",
                type: "address",
                internalType: "address",
            },
            {
                name: "asset",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "memo",
                type: "string",
                internalType: "string",
            },
            {
                name: "expiration",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
var IThorSwap__factory = /** @class */ (function () {
    function IThorSwap__factory() {
    }
    IThorSwap__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IThorSwap__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IThorSwap__factory.abi = _abi;
    return IThorSwap__factory;
}());
exports.IThorSwap__factory = IThorSwap__factory;
