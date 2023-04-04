"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISynapseRouter__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
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
                components: [
                    {
                        internalType: "address",
                        name: "swapAdapter",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "tokenOut",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "minAmountOut",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "rawParams",
                        type: "bytes",
                    },
                ],
                internalType: "struct ISynapseRouter.SwapQuery",
                name: "originQuery",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "swapAdapter",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "tokenOut",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "minAmountOut",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "rawParams",
                        type: "bytes",
                    },
                ],
                internalType: "struct ISynapseRouter.SwapQuery",
                name: "destQuery",
                type: "tuple",
            },
        ],
        name: "bridge",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "symbol",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256",
                    },
                ],
                internalType: "struct ISynapseRouter.DestRequest[]",
                name: "requests",
                type: "tuple[]",
            },
            {
                internalType: "address",
                name: "tokenOut",
                type: "address",
            },
        ],
        name: "getDestinationAmountOut",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "swapAdapter",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "tokenOut",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "minAmountOut",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "rawParams",
                        type: "bytes",
                    },
                ],
                internalType: "struct ISynapseRouter.SwapQuery[]",
                name: "destQueries",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenIn",
                type: "address",
            },
            {
                internalType: "string[]",
                name: "tokenSymbols",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
        ],
        name: "getOriginAmountOut",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "swapAdapter",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "tokenOut",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "minAmountOut",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "rawParams",
                        type: "bytes",
                    },
                ],
                internalType: "struct ISynapseRouter.SwapQuery[]",
                name: "originQueries",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var ISynapseRouter__factory = /** @class */ (function () {
    function ISynapseRouter__factory() {
    }
    ISynapseRouter__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ISynapseRouter__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ISynapseRouter__factory.abi = _abi;
    return ISynapseRouter__factory;
}());
exports.ISynapseRouter__factory = ISynapseRouter__factory;
