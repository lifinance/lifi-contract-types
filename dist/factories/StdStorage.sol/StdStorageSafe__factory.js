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
exports.StdStorageSafe__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "event",
        name: "SlotFound",
        inputs: [
            {
                name: "who",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "fsig",
                type: "bytes4",
                indexed: false,
                internalType: "bytes4",
            },
            {
                name: "keysHash",
                type: "bytes32",
                indexed: false,
                internalType: "bytes32",
            },
            {
                name: "slot",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "WARNING_UninitedSlot",
        inputs: [
            {
                name: "who",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "slot",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
];
var _bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122075c33550fa0e6e72b3058043b26c1292a6b73aa6c9594c46dd051431bd5d25b864736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var StdStorageSafe__factory = /** @class */ (function (_super) {
    __extends(StdStorageSafe__factory, _super);
    function StdStorageSafe__factory() {
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
    StdStorageSafe__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    StdStorageSafe__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    StdStorageSafe__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    StdStorageSafe__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    StdStorageSafe__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    StdStorageSafe__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    StdStorageSafe__factory.bytecode = _bytecode;
    StdStorageSafe__factory.abi = _abi;
    return StdStorageSafe__factory;
}(ethers_1.ContractFactory));
exports.StdStorageSafe__factory = StdStorageSafe__factory;
