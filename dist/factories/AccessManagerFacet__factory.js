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
        inputs: [],
        name: "CannotAuthoriseSelf",
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
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "bytes4",
                name: "method",
                type: "bytes4",
            },
        ],
        name: "ExecutionAllowed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "bytes4",
                name: "method",
                type: "bytes4",
            },
        ],
        name: "ExecutionDenied",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_selector",
                type: "bytes4",
            },
            {
                internalType: "address",
                name: "_executor",
                type: "address",
            },
        ],
        name: "addressCanExecuteMethod",
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
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_selector",
                type: "bytes4",
            },
            {
                internalType: "address",
                name: "_executor",
                type: "address",
            },
            {
                internalType: "bool",
                name: "_canExecute",
                type: "bool",
            },
        ],
        name: "setCanExecute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506105a0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063612ad9cb1461003b578063a4c3366e146100d7575b600080fd5b6100c36100493660046104eb565b7fffffffff000000000000000000000000000000000000000000000000000000009190911660009081527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020908152604080832073ffffffffffffffffffffffffffffffffffffffff9094168352929052205460ff1690565b604051901515815260200160405180910390f35b6100ea6100e536600461051e565b6100ec565b005b3073ffffffffffffffffffffffffffffffffffffffff83160361013b576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61014361023b565b806101575761015283836102b0565b610161565b6101618383610377565b80156101d1576040517fffffffff0000000000000000000000000000000000000000000000000000000084169073ffffffffffffffffffffffffffffffffffffffff8416907fd97cb52d6a919c35d1a9848f69806a32611c1381fa1078e5ea866186ee4c46c790600090a3505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000084169073ffffffffffffffffffffffffffffffffffffffff8416907f2fb75e73eca07a04ac148df401d1f013ddb4c8177a453af29c97c88037bac84890600090a3505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146102ae576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b7fffffffff00000000000000000000000000000000000000000000000000000000821660008181527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842073ffffffffffffffffffffffffffffffffffffffff8716808652925280842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555191939290917f4e2965fe48abf86ff779f17f9368d20e8eb4eebd1473e650a0aae103adc4b68b9190a3505050565b3073ffffffffffffffffffffffffffffffffffffffff8216036103c6576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60007fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e7fffffffff00000000000000000000000000000000000000000000000000000000841660008181526020838152604080832073ffffffffffffffffffffffffffffffffffffffff8816808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555193945091927fcdd2f8ab598ea828ea63b4a6cfc86ccf7d40784556f0783753603ba712c83b009190a3505050565b80357fffffffff00000000000000000000000000000000000000000000000000000000811681146104c257600080fd5b919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146104c257600080fd5b600080604083850312156104fe57600080fd5b61050783610492565b9150610515602084016104c7565b90509250929050565b60008060006060848603121561053357600080fd5b61053c84610492565b925061054a602085016104c7565b91506040840135801515811461055f57600080fd5b80915050925092509256fea2646970667358221220a511553e3c7c32e24bc5053b7616dead97b422f78b97e829d7ab21c49ff781c364736f6c63430008110033";
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
