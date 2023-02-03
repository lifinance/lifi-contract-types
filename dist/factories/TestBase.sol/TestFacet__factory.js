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
exports.TestFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "InvalidContract",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_dex",
                type: "address",
            },
        ],
        name: "addDex",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_signature",
                type: "bytes4",
            },
        ],
        name: "setFunctionApprovalBySignature",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5061032d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063536db2661461003b578063c561c14814610050575b600080fd5b61004e610049366004610278565b610063565b005b61004e61005e3660046102b5565b61006f565b61006c816100ed565b50565b61006c817fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b6100f6816101da565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff161561014a575050565b73ffffffffffffffffffffffffffffffffffffffff909116600081815260208381526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556002909401805494850181558252902090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b73ffffffffffffffffffffffffffffffffffffffff8116610227576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b60000361006c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006020828403121561028a57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146102ae57600080fd5b9392505050565b6000602082840312156102c757600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146102ae57600080fdfea2646970667358221220ddb742003b6db3d04ba7cace4802b5f2486f4d35151ccffd3af25648eca87f9364736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var TestFacet__factory = /** @class */ (function (_super) {
    __extends(TestFacet__factory, _super);
    function TestFacet__factory() {
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
    TestFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TestFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TestFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TestFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TestFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    TestFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    TestFacet__factory.bytecode = _bytecode;
    TestFacet__factory.abi = _abi;
    return TestFacet__factory;
}(ethers_1.ContractFactory));
exports.TestFacet__factory = TestFacet__factory;
