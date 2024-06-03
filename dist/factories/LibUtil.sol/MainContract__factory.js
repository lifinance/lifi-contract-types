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
exports.MainContract__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "topLevelFunction1",
        inputs: [
            {
                name: "callTo",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "topLevelFunction2",
        inputs: [
            {
                name: "callTo",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610265806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633af5bfff1461003b578063f24a1c9214610050575b600080fd5b61004e6100493660046101c3565b610063565b005b61004e61005e3660046101c3565b61013b565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fb0bea725000000000000000000000000000000000000000000000000000000001790529051600091829173ffffffffffffffffffffffffffffffffffffffff8516916100e191610200565b6000604051808303816000865af19150503d806000811461011e576040519150601f19603f3d011682016040523d82523d6000602084013e610123565b606091505b50915091508161013657610136816101b9565b505050565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f591a2a69000000000000000000000000000000000000000000000000000000001790529051600091829173ffffffffffffffffffffffffffffffffffffffff8516916100e191610200565b8051602082018181fd5b6000602082840312156101d557600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146101f957600080fd5b9392505050565b6000825160005b818110156102215760208186018101518583015201610207565b50600092019182525091905056fea2646970667358221220041b2b240ce23cf9c03340c187d567a1f69e6f97418514fe030a46dbee7cca2f64736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var MainContract__factory = /** @class */ (function (_super) {
    __extends(MainContract__factory, _super);
    function MainContract__factory() {
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
    MainContract__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    MainContract__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    MainContract__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MainContract__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MainContract__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    MainContract__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    MainContract__factory.bytecode = _bytecode;
    MainContract__factory.abi = _abi;
    return MainContract__factory;
}(ethers_1.ContractFactory));
exports.MainContract__factory = MainContract__factory;