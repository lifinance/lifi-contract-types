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
exports.LibDiamond__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "event",
        name: "DiamondCut",
        inputs: [
            {
                name: "_diamondCut",
                type: "tuple[]",
                indexed: false,
                internalType: "struct LibDiamond.FacetCut[]",
                components: [
                    {
                        name: "facetAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "action",
                        type: "uint8",
                        internalType: "enum LibDiamond.FacetCutAction",
                    },
                    {
                        name: "functionSelectors",
                        type: "bytes4[]",
                        internalType: "bytes4[]",
                    },
                ],
            },
            {
                name: "_init",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "_calldata",
                type: "bytes",
                indexed: false,
                internalType: "bytes",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                name: "previousOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "newOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "CalldataEmptyButInitNotZero",
        inputs: [],
    },
    {
        type: "error",
        name: "FacetAddressIsNotZero",
        inputs: [],
    },
    {
        type: "error",
        name: "FacetAddressIsZero",
        inputs: [],
    },
    {
        type: "error",
        name: "FacetContainsNoCode",
        inputs: [],
    },
    {
        type: "error",
        name: "FunctionAlreadyExists",
        inputs: [],
    },
    {
        type: "error",
        name: "FunctionDoesNotExist",
        inputs: [],
    },
    {
        type: "error",
        name: "FunctionIsImmutable",
        inputs: [],
    },
    {
        type: "error",
        name: "IncorrectFacetCutAction",
        inputs: [],
    },
    {
        type: "error",
        name: "InitReverted",
        inputs: [],
    },
    {
        type: "error",
        name: "InitZeroButCalldataNotEmpty",
        inputs: [],
    },
    {
        type: "error",
        name: "NoSelectorsInFace",
        inputs: [],
    },
];
var _bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea264697066735822122084e895fccc4ee9cf709e7c21a698995461662ef99671b49e0cdaf2a6734b9ce464736f6c634300081d0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var LibDiamond__factory = /** @class */ (function (_super) {
    __extends(LibDiamond__factory, _super);
    function LibDiamond__factory() {
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
    LibDiamond__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    LibDiamond__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    LibDiamond__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    LibDiamond__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    LibDiamond__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    LibDiamond__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    LibDiamond__factory.bytecode = _bytecode;
    LibDiamond__factory.abi = _abi;
    return LibDiamond__factory;
}(ethers_1.ContractFactory));
exports.LibDiamond__factory = LibDiamond__factory;
