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
exports.AccessManagerFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "addressCanExecuteMethod",
        inputs: [
            {
                name: "_selector",
                type: "bytes4",
                internalType: "bytes4",
            },
            {
                name: "_executor",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "setCanExecute",
        inputs: [
            {
                name: "_selector",
                type: "bytes4",
                internalType: "bytes4",
            },
            {
                name: "_executor",
                type: "address",
                internalType: "address",
            },
            {
                name: "_canExecute",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "AccessGranted",
        inputs: [
            {
                name: "account",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "method",
                type: "bytes4",
                indexed: true,
                internalType: "bytes4",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "AccessRevoked",
        inputs: [
            {
                name: "account",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "method",
                type: "bytes4",
                indexed: true,
                internalType: "bytes4",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "ExecutionAllowed",
        inputs: [
            {
                name: "account",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "method",
                type: "bytes4",
                indexed: true,
                internalType: "bytes4",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "ExecutionDenied",
        inputs: [
            {
                name: "account",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "method",
                type: "bytes4",
                indexed: true,
                internalType: "bytes4",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "CannotAuthoriseSelf",
        inputs: [],
    },
    {
        type: "error",
        name: "OnlyContractOwner",
        inputs: [],
    },
];
var _bytecode = "0x6080604052348015600e575f5ffd5b5061058f8061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610034575f3560e01c8063612ad9cb14610038578063a4c3366e146100d3575b5f5ffd5b6100bf6100463660046104e0565b7fffffffff00000000000000000000000000000000000000000000000000000000919091165f9081527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020908152604080832073ffffffffffffffffffffffffffffffffffffffff9094168352929052205460ff1690565b604051901515815260200160405180910390f35b6100e66100e1366004610511565b6100e8565b005b3073ffffffffffffffffffffffffffffffffffffffff831603610137576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61013f610235565b806101535761014e83836102aa565b61015d565b61015d8383610370565b80156101cc576040517fffffffff0000000000000000000000000000000000000000000000000000000084169073ffffffffffffffffffffffffffffffffffffffff8416907fd97cb52d6a919c35d1a9848f69806a32611c1381fa1078e5ea866186ee4c46c7905f90a3505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000084169073ffffffffffffffffffffffffffffffffffffffff8416907f2fb75e73eca07a04ac148df401d1f013ddb4c8177a453af29c97c88037bac848905f90a3505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146102a8576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b7fffffffff0000000000000000000000000000000000000000000000000000000082165f8181527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842073ffffffffffffffffffffffffffffffffffffffff8716808652925280842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555191939290917f4e2965fe48abf86ff779f17f9368d20e8eb4eebd1473e650a0aae103adc4b68b9190a3505050565b3073ffffffffffffffffffffffffffffffffffffffff8216036103bf576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f7fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e7fffffffff0000000000000000000000000000000000000000000000000000000084165f8181526020838152604080832073ffffffffffffffffffffffffffffffffffffffff8816808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555193945091927fcdd2f8ab598ea828ea63b4a6cfc86ccf7d40784556f0783753603ba712c83b009190a3505050565b80357fffffffff00000000000000000000000000000000000000000000000000000000811681146104b8575f5ffd5b919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146104b8575f5ffd5b5f5f604083850312156104f1575f5ffd5b6104fa83610489565b9150610508602084016104bd565b90509250929050565b5f5f5f60608486031215610523575f5ffd5b61052c84610489565b925061053a602085016104bd565b91506040840135801515811461054e575f5ffd5b80915050925092509256fea2646970667358221220b47a35be3f411fd6d425bc9a7bc061b90db237e0e003d2fa679b8d29d143d86364736f6c634300081d0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var AccessManagerFacet__factory = /** @class */ (function (_super) {
    __extends(AccessManagerFacet__factory, _super);
    function AccessManagerFacet__factory() {
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
    AccessManagerFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    AccessManagerFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    AccessManagerFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    AccessManagerFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    AccessManagerFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    AccessManagerFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    AccessManagerFacet__factory.bytecode = _bytecode;
    AccessManagerFacet__factory.abi = _abi;
    return AccessManagerFacet__factory;
}(ethers_1.ContractFactory));
exports.AccessManagerFacet__factory = AccessManagerFacet__factory;
