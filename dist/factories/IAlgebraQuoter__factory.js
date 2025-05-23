"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAlgebraQuoter__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "quoteExactInput",
        inputs: [
            {
                name: "path",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "amountIn",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "amountOut",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "fees",
                type: "uint16[]",
                internalType: "uint16[]",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "quoteExactInputSingle",
        inputs: [
            {
                name: "tokenIn",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenOut",
                type: "address",
                internalType: "address",
            },
            {
                name: "amountIn",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "limitSqrtPrice",
                type: "uint160",
                internalType: "uint160",
            },
        ],
        outputs: [
            {
                name: "amountOut",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "fee",
                type: "uint16",
                internalType: "uint16",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "quoteExactOutput",
        inputs: [
            {
                name: "path",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "amountOut",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "amountIn",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "fees",
                type: "uint16[]",
                internalType: "uint16[]",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "quoteExactOutputSingle",
        inputs: [
            {
                name: "tokenIn",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenOut",
                type: "address",
                internalType: "address",
            },
            {
                name: "amountOut",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "limitSqrtPrice",
                type: "uint160",
                internalType: "uint160",
            },
        ],
        outputs: [
            {
                name: "amountIn",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "fee",
                type: "uint16",
                internalType: "uint16",
            },
        ],
        stateMutability: "nonpayable",
    },
];
var IAlgebraQuoter__factory = /** @class */ (function () {
    function IAlgebraQuoter__factory() {
    }
    IAlgebraQuoter__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IAlgebraQuoter__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IAlgebraQuoter__factory.abi = _abi;
    return IAlgebraQuoter__factory;
}());
exports.IAlgebraQuoter__factory = IAlgebraQuoter__factory;
