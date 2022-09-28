"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICBridge__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_receiver",
                type: "address",
            },
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint64",
                name: "_dstChainId",
                type: "uint64",
            },
            {
                internalType: "uint64",
                name: "_nonce",
                type: "uint64",
            },
            {
                internalType: "uint32",
                name: "_maxSlippage",
                type: "uint32",
            },
        ],
        name: "send",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_receiver",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint64",
                name: "_dstChainId",
                type: "uint64",
            },
            {
                internalType: "uint64",
                name: "_nonce",
                type: "uint64",
            },
            {
                internalType: "uint32",
                name: "_maxSlippage",
                type: "uint32",
            },
        ],
        name: "sendNative",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var ICBridge__factory = /** @class */ (function () {
    function ICBridge__factory() {
    }
    ICBridge__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ICBridge__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ICBridge__factory.abi = _abi;
    return ICBridge__factory;
}());
exports.ICBridge__factory = ICBridge__factory;
