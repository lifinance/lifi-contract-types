"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IGasZip__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "deposit",
        inputs: [
            {
                name: "destinationChains",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "to",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
var IGasZip__factory = /** @class */ (function () {
    function IGasZip__factory() {
    }
    IGasZip__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IGasZip__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IGasZip__factory.abi = _abi;
    return IGasZip__factory;
}());
exports.IGasZip__factory = IGasZip__factory;
