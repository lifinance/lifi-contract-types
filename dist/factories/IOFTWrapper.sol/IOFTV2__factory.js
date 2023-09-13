"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOFTV2__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16",
            },
            {
                internalType: "bytes32",
                name: "_toAddress",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "_useZro",
                type: "bool",
            },
            {
                internalType: "bytes",
                name: "_adapterParams",
                type: "bytes",
            },
        ],
        name: "estimateSendFee",
        outputs: [
            {
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "zroFee",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var IOFTV2__factory = /** @class */ (function () {
    function IOFTV2__factory() {
    }
    IOFTV2__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IOFTV2__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IOFTV2__factory.abi = _abi;
    return IOFTV2__factory;
}());
exports.IOFTV2__factory = IOFTV2__factory;