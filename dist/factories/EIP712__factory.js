"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EIP712__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "eip712Domain",
        inputs: [],
        outputs: [
            {
                name: "fields",
                type: "bytes1",
                internalType: "bytes1",
            },
            {
                name: "name",
                type: "string",
                internalType: "string",
            },
            {
                name: "version",
                type: "string",
                internalType: "string",
            },
            {
                name: "chainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "verifyingContract",
                type: "address",
                internalType: "address",
            },
            {
                name: "salt",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "extensions",
                type: "uint256[]",
                internalType: "uint256[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "event",
        name: "EIP712DomainChanged",
        inputs: [],
        anonymous: false,
    },
    {
        type: "error",
        name: "InvalidShortString",
        inputs: [],
    },
    {
        type: "error",
        name: "StringTooLong",
        inputs: [
            {
                name: "str",
                type: "string",
                internalType: "string",
            },
        ],
    },
];
var EIP712__factory = /** @class */ (function () {
    function EIP712__factory() {
    }
    EIP712__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    EIP712__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    EIP712__factory.abi = _abi;
    return EIP712__factory;
}());
exports.EIP712__factory = EIP712__factory;