"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICurveLegacy__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "exchange",
        inputs: [
            {
                name: "i",
                type: "int128",
                internalType: "int128",
            },
            {
                name: "j",
                type: "int128",
                internalType: "int128",
            },
            {
                name: "dx",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "min_dy",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
var ICurveLegacy__factory = /** @class */ (function () {
    function ICurveLegacy__factory() {
    }
    ICurveLegacy__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ICurveLegacy__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ICurveLegacy__factory.abi = _abi;
    return ICurveLegacy__factory;
}());
exports.ICurveLegacy__factory = ICurveLegacy__factory;
