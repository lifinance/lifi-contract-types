"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPermit2__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "DOMAIN_SEPARATOR",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "view",
    },
];
var IPermit2__factory = /** @class */ (function () {
    function IPermit2__factory() {
    }
    IPermit2__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IPermit2__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IPermit2__factory.abi = _abi;
    return IPermit2__factory;
}());
exports.IPermit2__factory = IPermit2__factory;
