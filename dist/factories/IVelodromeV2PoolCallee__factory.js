"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IVelodromeV2PoolCallee__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "hook",
        inputs: [
            {
                name: "sender",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount0",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amount1",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
];
var IVelodromeV2PoolCallee__factory = /** @class */ (function () {
    function IVelodromeV2PoolCallee__factory() {
    }
    IVelodromeV2PoolCallee__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IVelodromeV2PoolCallee__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IVelodromeV2PoolCallee__factory.abi = _abi;
    return IVelodromeV2PoolCallee__factory;
}());
exports.IVelodromeV2PoolCallee__factory = IVelodromeV2PoolCallee__factory;
