"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERC20Proxy__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "transferFrom",
        inputs: [
            {
                name: "tokenAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "from",
                type: "address",
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
];
var IERC20Proxy__factory = /** @class */ (function () {
    function IERC20Proxy__factory() {
    }
    IERC20Proxy__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IERC20Proxy__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IERC20Proxy__factory.abi = _abi;
    return IERC20Proxy__factory;
}());
exports.IERC20Proxy__factory = IERC20Proxy__factory;
