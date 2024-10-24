"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAcrossSpokePool__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "deposit",
        inputs: [
            {
                name: "recipient",
                type: "address",
                internalType: "address",
            },
            {
                name: "originToken",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "relayerFeePct",
                type: "int64",
                internalType: "int64",
            },
            {
                name: "quoteTimestamp",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "message",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "maxCount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "depositV3",
        inputs: [
            {
                name: "depositor",
                type: "address",
                internalType: "address",
            },
            {
                name: "recipient",
                type: "address",
                internalType: "address",
            },
            {
                name: "inputToken",
                type: "address",
                internalType: "address",
            },
            {
                name: "outputToken",
                type: "address",
                internalType: "address",
            },
            {
                name: "inputAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "outputAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "exclusiveRelayer",
                type: "address",
                internalType: "address",
            },
            {
                name: "quoteTimestamp",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "fillDeadline",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "exclusivityDeadline",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "message",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
var IAcrossSpokePool__factory = /** @class */ (function () {
    function IAcrossSpokePool__factory() {
    }
    IAcrossSpokePool__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IAcrossSpokePool__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IAcrossSpokePool__factory.abi = _abi;
    return IAcrossSpokePool__factory;
}());
exports.IAcrossSpokePool__factory = IAcrossSpokePool__factory;
