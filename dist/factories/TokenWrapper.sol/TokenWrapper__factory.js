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
exports.TokenWrapper__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_wrappedToken",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "receive",
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "deposit",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "withdraw",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "wrappedToken",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "error",
        name: "WithdrawFailure",
        inputs: [],
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506040516105ac3803806105ac83398101604081905261002f916100bb565b600080546001600160a01b0319166001600160a01b03831690811790915560405163095ea7b360e01b8152306004820152600019602482015263095ea7b3906044016020604051808303816000875af1158015610090573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b491906100eb565b505061010d565b6000602082840312156100cd57600080fd5b81516001600160a01b03811681146100e457600080fd5b9392505050565b6000602082840312156100fd57600080fd5b815180151581146100e457600080fd5b6104908061011c6000396000f3fe6080604052600436106100385760003560e01c80633ccfd60b14610044578063996c6cc31461005b578063d0e30db0146100b157600080fd5b3661003f57005b600080fd5b34801561005057600080fd5b506100596100b9565b005b34801561006757600080fd5b506000546100889073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100596102f9565b600080546040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015610128573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014c9190610418565b6000546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810183905291925073ffffffffffffffffffffffffffffffffffffffff16906323b872dd906064016020604051808303816000875af11580156101ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ee9190610431565b506000546040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690632e1a7d4d90602401600060405180830381600087803b15801561025b57600080fd5b505af115801561026f573d6000803e3d6000fd5b50506040516000925033915083908381818185875af1925050503d80600081146102b5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ba565b606091505b50509050806102f5576040517f1a0263ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561036157600080fd5b505af1158015610375573d6000803e3d6000fd5b50506000546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015234602482015273ffffffffffffffffffffffffffffffffffffffff909116935063a9059cbb925060440190506020604051808303816000875af11580156103f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104159190610431565b50565b60006020828403121561042a57600080fd5b5051919050565b60006020828403121561044357600080fd5b8151801515811461045357600080fd5b939250505056fea2646970667358221220cc930baac6243495681e9ce29410c7ed2f8929990d3d0e5d48c3bf9c051f936a64736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var TokenWrapper__factory = /** @class */ (function (_super) {
    __extends(TokenWrapper__factory, _super);
    function TokenWrapper__factory() {
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
    TokenWrapper__factory.prototype.deploy = function (_wrappedToken, overrides) {
        return _super.prototype.deploy.call(this, _wrappedToken, overrides || {});
    };
    TokenWrapper__factory.prototype.getDeployTransaction = function (_wrappedToken, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _wrappedToken, overrides || {});
    };
    TokenWrapper__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TokenWrapper__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TokenWrapper__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    TokenWrapper__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    TokenWrapper__factory.bytecode = _bytecode;
    TokenWrapper__factory.abi = _abi;
    return TokenWrapper__factory;
}(ethers_1.ContractFactory));
exports.TokenWrapper__factory = TokenWrapper__factory;
