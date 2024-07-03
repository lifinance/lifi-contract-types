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
exports.StandardizedCallFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "standardizedBridgeCall",
        inputs: [
            {
                name: "callData",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "standardizedCall",
        inputs: [
            {
                name: "callData",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "standardizedSwapAndBridgeCall",
        inputs: [
            {
                name: "callData",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "standardizedSwapCall",
        inputs: [
            {
                name: "callData",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "error",
        name: "FunctionDoesNotExist",
        inputs: [],
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506102bb806100206000396000f3fe60806040526004361061003f5760003560e01c80630510f6bf14610044578063a548ec5f14610044578063d6a4bc5014610044578063d903b91714610044575b600080fd5b610057610052366004610166565b610059565b005b61006281610065565b50565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6000818161009385610235565b7fffffffff0000000000000000000000000000000000000000000000000000000016815260208101919091526040016000205473ffffffffffffffffffffffffffffffffffffffff16905080610115576040517fa9ad62f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080845160208601845af43d6000803e808015610132573d6000f35b3d6000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561017857600080fd5b813567ffffffffffffffff8082111561019057600080fd5b818401915084601f8301126101a457600080fd5b8135818111156101b6576101b6610137565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156101fc576101fc610137565b8160405282815287602084870101111561021557600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000815160208301517fffffffff000000000000000000000000000000000000000000000000000000008082169350600483101561027d5780818460040360031b1b83161693505b50505091905056fea26469706673582212204a6be57c64f9f494feffb9589a484df29ebe2c36dfd19cbdd2f51425b8573a4264736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var StandardizedCallFacet__factory = /** @class */ (function (_super) {
    __extends(StandardizedCallFacet__factory, _super);
    function StandardizedCallFacet__factory() {
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
    StandardizedCallFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    StandardizedCallFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    StandardizedCallFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    StandardizedCallFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    StandardizedCallFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    StandardizedCallFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    StandardizedCallFacet__factory.bytecode = _bytecode;
    StandardizedCallFacet__factory.abi = _abi;
    return StandardizedCallFacet__factory;
}(ethers_1.ContractFactory));
exports.StandardizedCallFacet__factory = StandardizedCallFacet__factory;
