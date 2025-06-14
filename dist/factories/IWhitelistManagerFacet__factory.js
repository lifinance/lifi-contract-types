"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IWhitelistManagerFacet__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "addToWhitelist",
        inputs: [
            {
                name: "_contractAddress",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "batchAddToWhitelist",
        inputs: [
            {
                name: "_addresses",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "batchRemoveFromWhitelist",
        inputs: [
            {
                name: "_addresses",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "batchSetFunctionApprovalBySelector",
        inputs: [
            {
                name: "_selectors",
                type: "bytes4[]",
                internalType: "bytes4[]",
            },
            {
                name: "_approval",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "getApprovedFunctionSelectors",
        inputs: [],
        outputs: [
            {
                name: "selectors",
                type: "bytes4[]",
                internalType: "bytes4[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getWhitelistedAddresses",
        inputs: [],
        outputs: [
            {
                name: "addresses",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "isAddressWhitelisted",
        inputs: [
            {
                name: "_address",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "approved",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "isFunctionApproved",
        inputs: [
            {
                name: "_selector",
                type: "bytes4",
                internalType: "bytes4",
            },
        ],
        outputs: [
            {
                name: "approved",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "removeFromWhitelist",
        inputs: [
            {
                name: "_address",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "setFunctionApprovalBySelector",
        inputs: [
            {
                name: "_selector",
                type: "bytes4",
                internalType: "bytes4",
            },
            {
                name: "_approval",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "AddressRemoved",
        inputs: [
            {
                name: "removedAddress",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "AddressWhitelisted",
        inputs: [
            {
                name: "whitelistedAddress",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "FunctionSelectorApprovalChanged",
        inputs: [
            {
                name: "functionSelector",
                type: "bytes4",
                indexed: true,
                internalType: "bytes4",
            },
            {
                name: "approved",
                type: "bool",
                indexed: true,
                internalType: "bool",
            },
        ],
        anonymous: false,
    },
];
var IWhitelistManagerFacet__factory = /** @class */ (function () {
    function IWhitelistManagerFacet__factory() {
    }
    IWhitelistManagerFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IWhitelistManagerFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IWhitelistManagerFacet__factory.abi = _abi;
    return IWhitelistManagerFacet__factory;
}());
exports.IWhitelistManagerFacet__factory = IWhitelistManagerFacet__factory;
