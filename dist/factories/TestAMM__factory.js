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
exports.TestAMM__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract TestToken",
                name: "_fromToken",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amountIn",
                type: "uint256",
            },
            {
                internalType: "contract TestToken",
                name: "_toToken",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amountOut",
                type: "uint256",
            },
        ],
        name: "swap",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610305806100206000396000f3fe60806040526004361061001e5760003560e01c80638a0ccd5614610023575b600080fd5b610036610031366004610262565b610038565b005b73ffffffffffffffffffffffffffffffffffffffff84161561017d576040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810184905273ffffffffffffffffffffffffffffffffffffffff8516906323b872dd906064016020604051808303816000875af11580156100cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100f191906102a6565b506040517f9dc29fac0000000000000000000000000000000000000000000000000000000081523060048201526024810184905273ffffffffffffffffffffffffffffffffffffffff851690639dc29fac90604401600060405180830381600087803b15801561016057600080fd5b505af1158015610174573d6000803e3d6000fd5b505050506101ad565b60405161d34d903480156108fc02916000818181858888f193505050501580156101ab573d6000803e3d6000fd5b505b6040517f40c10f190000000000000000000000000000000000000000000000000000000081523360048201526024810182905273ffffffffffffffffffffffffffffffffffffffff8316906340c10f1990604401600060405180830381600087803b15801561021b57600080fd5b505af115801561022f573d6000803e3d6000fd5b5050505050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461025d57600080fd5b919050565b6000806000806080858703121561027857600080fd5b61028185610239565b93506020850135925061029660408601610239565b9396929550929360600135925050565b6000602082840312156102b857600080fd5b815180151581146102c857600080fd5b939250505056fea264697066735822122053c6f3df0c03992ddb460c382052d970fa9815c14ed2011b9b6e3d97992d8e1d64736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var TestAMM__factory = /** @class */ (function (_super) {
    __extends(TestAMM__factory, _super);
    function TestAMM__factory() {
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
    TestAMM__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TestAMM__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TestAMM__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TestAMM__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TestAMM__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    TestAMM__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    TestAMM__factory.bytecode = _bytecode;
    TestAMM__factory.abi = _abi;
    return TestAMM__factory;
}(ethers_1.ContractFactory));
exports.TestAMM__factory = TestAMM__factory;
