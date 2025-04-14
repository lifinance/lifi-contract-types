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
exports.ECDSA__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "error",
        name: "InvalidSignature",
        inputs: [],
    },
];
var _bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f80fdfea2646970667358221220d75e9383feceb73711729a1fa1d623856ce35501d8c2a8e0028ec72ff8591c9864736f6c63430008160033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ECDSA__factory = /** @class */ (function (_super) {
    __extends(ECDSA__factory, _super);
    function ECDSA__factory() {
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
    ECDSA__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ECDSA__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ECDSA__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ECDSA__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ECDSA__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ECDSA__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ECDSA__factory.bytecode = _bytecode;
    ECDSA__factory.abi = _abi;
    return ECDSA__factory;
}(ethers_1.ContractFactory));
exports.ECDSA__factory = ECDSA__factory;
