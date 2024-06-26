"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV2Router02__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "getAmountsIn",
        inputs: [
            {
                name: "amountOut",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "path",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        outputs: [
            {
                name: "amounts",
                type: "uint256[]",
                internalType: "uint256[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getAmountsOut",
        inputs: [
            {
                name: "amountIn",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "path",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        outputs: [
            {
                name: "amounts",
                type: "uint256[]",
                internalType: "uint256[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "swapETHForExactTokens",
        inputs: [
            {
                name: "amountOut",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "path",
                type: "address[]",
                internalType: "address[]",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "deadline",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "swapExactETHForTokens",
        inputs: [
            {
                name: "amountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "path",
                type: "address[]",
                internalType: "address[]",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "deadline",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "amounts",
                type: "uint256[]",
                internalType: "uint256[]",
            },
        ],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapExactTokensForETH",
        inputs: [
            {
                name: "amountIn",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "path",
                type: "address[]",
                internalType: "address[]",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "deadline",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "amounts",
                type: "uint256[]",
                internalType: "uint256[]",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "swapExactTokensForTokens",
        inputs: [
            {
                name: "amountIn",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "path",
                type: "address[]",
                internalType: "address[]",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "deadline",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "swapTokensForExactETH",
        inputs: [
            {
                name: "amountOut",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountInMax",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "path",
                type: "address[]",
                internalType: "address[]",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "deadline",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "amounts",
                type: "uint256[]",
                internalType: "uint256[]",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "swapTokensForExactTokens",
        inputs: [
            {
                name: "amountOut",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountInMax",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "path",
                type: "address[]",
                internalType: "address[]",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "deadline",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
];
var UniswapV2Router02__factory = /** @class */ (function () {
    function UniswapV2Router02__factory() {
    }
    UniswapV2Router02__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    UniswapV2Router02__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    UniswapV2Router02__factory.abi = _abi;
    return UniswapV2Router02__factory;
}());
exports.UniswapV2Router02__factory = UniswapV2Router02__factory;
