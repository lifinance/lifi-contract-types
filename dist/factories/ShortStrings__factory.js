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
exports.ShortStrings__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "error",
        name: "InvalidShortString",
        inputs: [],
    },
    {
        type: "error",
        name: "StringTooLong",
        inputs: [
            {
                name: "str",
                type: "string",
                internalType: "string",
            },
        ],
    },
];
var _bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea2646970667358221220616813bcc4102051375814bc64ee3c7ef621130ad593e45c1801078d61ff602c64736f6c634300081d0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ShortStrings__factory = /** @class */ (function (_super) {
    __extends(ShortStrings__factory, _super);
    function ShortStrings__factory() {
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
    ShortStrings__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ShortStrings__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ShortStrings__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ShortStrings__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ShortStrings__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ShortStrings__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ShortStrings__factory.bytecode = _bytecode;
    ShortStrings__factory.abi = _abi;
    return ShortStrings__factory;
}(ethers_1.ContractFactory));
exports.ShortStrings__factory = ShortStrings__factory;
