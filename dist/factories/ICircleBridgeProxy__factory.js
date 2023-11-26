"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICircleBridgeProxy__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "depositForBurn",
        inputs: [
            {
                name: "_amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_dstChid",
                type: "uint64",
                internalType: "uint64",
            },
            {
                name: "_mintRecipient",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "_burnToken",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "nonce",
                type: "uint64",
                internalType: "uint64",
            },
        ],
        stateMutability: "nonpayable",
    },
];
var ICircleBridgeProxy__factory = /** @class */ (function () {
    function ICircleBridgeProxy__factory() {
    }
    ICircleBridgeProxy__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ICircleBridgeProxy__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ICircleBridgeProxy__factory.abi = _abi;
    return ICircleBridgeProxy__factory;
}());
exports.ICircleBridgeProxy__factory = ICircleBridgeProxy__factory;
