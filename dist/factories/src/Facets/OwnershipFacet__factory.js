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
exports.OwnershipFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "NewOwnerMustNotBeSelf",
        type: "error",
    },
    {
        inputs: [],
        name: "NoNullOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "NoPendingOwnershipTransfer",
        type: "error",
    },
    {
        inputs: [],
        name: "NotPendingOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "OnlyContractOwner",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address",
            },
        ],
        name: "OwnershipTransferRequested",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [],
        name: "cancelOwnershipTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "confirmOwnershipTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "owner_",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506105e9806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806323452b9c146100515780637200b8291461005b5780638da5cb5b14610063578063f2fde38b14610094575b600080fd5b6100596100a7565b005b610059610146565b61006b610281565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100596100a2366004610576565b6102c6565b6100af610447565b7fcf2fba1a5c9c61959b11f2f1f88658271468c6fcc649cb2a6868473d3cd07f8b805473ffffffffffffffffffffffffffffffffffffffff1661011e576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fcf2fba1a5c9c61959b11f2f1f88658271468c6fcc649cb2a6868473d3cd07f8b805473ffffffffffffffffffffffffffffffffffffffff163381146101b8576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661020d7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3610258816104bc565b5080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60006102c17fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b6102ce610447565b7fcf2fba1a5c9c61959b11f2f1f88658271468c6fcc649cb2a6868473d3cd07f8b73ffffffffffffffffffffffffffffffffffffffff821661033c576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036103d8576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117825560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a35050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146104ba576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132080547fffffffffffffffffffffffff0000000000000000000000000000000000000000811673ffffffffffffffffffffffffffffffffffffffff8481169182179093556040517fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b60006020828403121561058857600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146105ac57600080fd5b939250505056fea264697066735822122070e88c4ca9c4f4b769ff47240d0709bbf1234843f4012eeefeafe770257e687e64736f6c63430008100033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var OwnershipFacet__factory = /** @class */ (function (_super) {
    __extends(OwnershipFacet__factory, _super);
    function OwnershipFacet__factory() {
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
    OwnershipFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    OwnershipFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    OwnershipFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    OwnershipFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    OwnershipFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    OwnershipFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    OwnershipFacet__factory.bytecode = _bytecode;
    OwnershipFacet__factory.abi = _abi;
    return OwnershipFacet__factory;
}(ethers_1.ContractFactory));
exports.OwnershipFacet__factory = OwnershipFacet__factory;
