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
exports.RestrictedContract__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "UnAuthorized",
        type: "error",
    },
    {
        inputs: [],
        name: "restrictedMethod",
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
var _bytecode = "0x608060405234801561001057600080fd5b5061012a806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806324188c4714602d575b600080fd5b60336047565b604051901515815260200160405180910390f35b6000604f6055565b50600190565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff90911615151460f1576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5056fea26469706673582212205ed59d3ecc0f7daad1d78a8b241cb71d7e89b0e3aca70e45bb8d5fc20fc641e064736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var RestrictedContract__factory = /** @class */ (function (_super) {
    __extends(RestrictedContract__factory, _super);
    function RestrictedContract__factory() {
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
    RestrictedContract__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    RestrictedContract__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    RestrictedContract__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    RestrictedContract__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    RestrictedContract__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    RestrictedContract__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    RestrictedContract__factory.bytecode = _bytecode;
    RestrictedContract__factory.abi = _abi;
    return RestrictedContract__factory;
}(ethers_1.ContractFactory));
exports.RestrictedContract__factory = RestrictedContract__factory;
