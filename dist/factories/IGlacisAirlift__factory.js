"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IGlacisAirlift__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "addSelectorsToToken",
        inputs: [
            {
                name: "diamondSelectors",
                type: "bytes4[]",
                internalType: "bytes4[]",
            },
            {
                name: "facetSelectors",
                type: "bytes4[]",
                internalType: "bytes4[]",
            },
            {
                name: "token",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "quoteSend",
        inputs: [
            {
                name: "token",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "receiver",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "refundAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "msgValue",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct QuoteSendInfo",
                components: [
                    {
                        name: "gmpFee",
                        type: "tuple",
                        internalType: "struct Fee",
                        components: [
                            {
                                name: "nativeFee",
                                type: "uint256",
                                internalType: "uint256",
                            },
                            {
                                name: "tokenFee",
                                type: "uint256",
                                internalType: "uint256",
                            },
                        ],
                    },
                    {
                        name: "amountSent",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "valueSent",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "airliftFeeInfo",
                        type: "tuple",
                        internalType: "struct AirliftFeeInfo",
                        components: [
                            {
                                name: "airliftFee",
                                type: "tuple",
                                internalType: "struct Fee",
                                components: [
                                    {
                                        name: "nativeFee",
                                        type: "uint256",
                                        internalType: "uint256",
                                    },
                                    {
                                        name: "tokenFee",
                                        type: "uint256",
                                        internalType: "uint256",
                                    },
                                ],
                            },
                            {
                                name: "correctedAmount",
                                type: "uint256",
                                internalType: "uint256",
                            },
                            {
                                name: "correctedValue",
                                type: "uint256",
                                internalType: "uint256",
                            },
                        ],
                    },
                ],
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "send",
        inputs: [
            {
                name: "token",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "receiver",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "refundAddress",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "sendAfterApproval",
        inputs: [
            {
                name: "token",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "receiver",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "refundAddress",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
var IGlacisAirlift__factory = /** @class */ (function () {
    function IGlacisAirlift__factory() {
    }
    IGlacisAirlift__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IGlacisAirlift__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IGlacisAirlift__factory.abi = _abi;
    return IGlacisAirlift__factory;
}());
exports.IGlacisAirlift__factory = IGlacisAirlift__factory;
