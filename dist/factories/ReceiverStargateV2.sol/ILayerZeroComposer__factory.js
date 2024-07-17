"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILayerZeroComposer__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "lzCompose",
        inputs: [
            {
                name: "_from",
                type: "address",
                internalType: "address",
            },
            {
                name: "_guid",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "_message",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_executor",
                type: "address",
                internalType: "address",
            },
            {
                name: "_extraData",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
var ILayerZeroComposer__factory = /** @class */ (function () {
    function ILayerZeroComposer__factory() {
    }
    ILayerZeroComposer__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ILayerZeroComposer__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ILayerZeroComposer__factory.abi = _abi;
    return ILayerZeroComposer__factory;
}());
exports.ILayerZeroComposer__factory = ILayerZeroComposer__factory;