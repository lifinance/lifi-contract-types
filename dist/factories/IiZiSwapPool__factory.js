"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IiZiSwapPool__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "swapX2Y",
        inputs: [
            {
                name: "recipient",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint128",
                internalType: "uint128",
            },
            {
                name: "lowPt",
                type: "int24",
                internalType: "int24",
            },
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "amountX",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountY",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "swapY2X",
        inputs: [
            {
                name: "recipient",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint128",
                internalType: "uint128",
            },
            {
                name: "highPt",
                type: "int24",
                internalType: "int24",
            },
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "amountX",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountY",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "tokenX",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
];
var IiZiSwapPool__factory = /** @class */ (function () {
    function IiZiSwapPool__factory() {
    }
    IiZiSwapPool__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IiZiSwapPool__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IiZiSwapPool__factory.abi = _abi;
    return IiZiSwapPool__factory;
}());
exports.IiZiSwapPool__factory = IiZiSwapPool__factory;
