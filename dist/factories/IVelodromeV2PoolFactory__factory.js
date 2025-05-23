"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IVelodromeV2PoolFactory__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "getFee",
        inputs: [
            {
                name: "_pool",
                type: "address",
                internalType: "address",
            },
            {
                name: "_stable",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
];
var IVelodromeV2PoolFactory__factory = /** @class */ (function () {
    function IVelodromeV2PoolFactory__factory() {
    }
    IVelodromeV2PoolFactory__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IVelodromeV2PoolFactory__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IVelodromeV2PoolFactory__factory.abi = _abi;
    return IVelodromeV2PoolFactory__factory;
}());
exports.IVelodromeV2PoolFactory__factory = IVelodromeV2PoolFactory__factory;
