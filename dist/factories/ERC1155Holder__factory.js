"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC1155Holder__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC1155BatchReceived",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC1155Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506104eb806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a714610046578063bc197c811461006e578063f23a6e61146100d7575b600080fd5b6100596100543660046101a8565b61010f565b60405190151581526020015b60405180910390f35b6100a661007c3660046103a6565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610065565b6100a66100e5366004610450565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e00000000000000000000000000000000000000000000000000000000014806101a257507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6000602082840312156101ba57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146101ea57600080fd5b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461021557600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156102905761029061021a565b604052919050565b600082601f8301126102a957600080fd5b8135602067ffffffffffffffff8211156102c5576102c561021a565b8160051b6102d4828201610249565b92835284810182019282810190878511156102ee57600080fd5b83870192505b8483101561030d578235825291830191908301906102f4565b979650505050505050565b600082601f83011261032957600080fd5b813567ffffffffffffffff8111156103435761034361021a565b61037460207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610249565b81815284602083860101111561038957600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a086880312156103be57600080fd5b6103c7866101f1565b94506103d5602087016101f1565b9350604086013567ffffffffffffffff808211156103f257600080fd5b6103fe89838a01610298565b9450606088013591508082111561041457600080fd5b61042089838a01610298565b9350608088013591508082111561043657600080fd5b5061044388828901610318565b9150509295509295909350565b600080600080600060a0868803121561046857600080fd5b610471866101f1565b945061047f602087016101f1565b93506040860135925060608601359150608086013567ffffffffffffffff8111156104a957600080fd5b6104438882890161031856fea2646970667358221220cc005fa92ad50e96225fc9fec441dcea2049344d08947312540d0889a57aa8b464736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ERC1155Holder__factory = /** @class */ (function (_super) {
    __extends(ERC1155Holder__factory, _super);
    function ERC1155Holder__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    ERC1155Holder__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ERC1155Holder__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ERC1155Holder__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ERC1155Holder__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ERC1155Holder__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ERC1155Holder__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ERC1155Holder__factory.bytecode = _bytecode;
    ERC1155Holder__factory.abi = _abi;
    return ERC1155Holder__factory;
}(ethers_1.ContractFactory));
exports.ERC1155Holder__factory = ERC1155Holder__factory;
