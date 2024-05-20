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
exports.MockUniswapDEX__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "inputAmount",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "outputAmount",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "outputToken",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract ERC20",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "setSwapOutput",
        inputs: [
            {
                name: "_inputAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_outputToken",
                type: "address",
                internalType: "contract ERC20",
            },
            {
                name: "_outputAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "swapExactTokensForTokens",
        inputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountInMax",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "path",
                type: "address[]",
                internalType: "address[]",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "swapTokensForExactTokens",
        inputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountInMax",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "path",
                type: "address[]",
                internalType: "address[]",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "error",
        name: "InsufficientBalance",
        inputs: [
            {
                name: "required",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "balance",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506106e3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c80638803dbee116100505780638803dbee1461009357806394d5567a146100bb578063c1d8d1d9146100c457600080fd5b8063162b4d0c1461007757806338ed1739146100935780634b942e35146100a8575b600080fd5b61008060015481565b6040519081526020015b60405180910390f35b6100a66100a1366004610567565b610109565b005b6100a66100b6366004610609565b610285565b61008060025481565b6000546100e49073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161008a565b60008484600081811061011e5761011e610641565b90506020020160208101906101339190610670565b905061016d333060015460001461014c5760015461014e565b885b73ffffffffffffffffffffffffffffffffffffffff85169291906103ad565b600080546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa1580156101dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102009190610694565b9050600254811015610251576002546040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810191909152602481018290526044015b60405180910390fd5b60025460005461027b9173ffffffffffffffffffffffffffffffffffffffff909116908690610473565b5050505050505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156102f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103169190610694565b90508181101561035c576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610248565b50600192909255600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055600255565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d116001600051141617169150508061046c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152606401610248565b5050505050565b60006040517fa9059cbb000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d116001600051141617169150508061052c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c454400000000000000000000000000000000006044820152606401610248565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461055457600080fd5b50565b803561056281610532565b919050565b60008060008060008060a0878903121561058057600080fd5b8635955060208701359450604087013567ffffffffffffffff808211156105a657600080fd5b818901915089601f8301126105ba57600080fd5b8135818111156105c957600080fd5b8a60208260051b85010111156105de57600080fd5b6020830196508095505050506105f660608801610557565b9150608087013590509295509295509295565b60008060006060848603121561061e57600080fd5b83359250602084013561063081610532565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561068257600080fd5b813561068d81610532565b9392505050565b6000602082840312156106a657600080fd5b505191905056fea264697066735822122079d79b50a29694e784b3d02e5f0150794e26617bf6328adb8f9c2625eb6a992864736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var MockUniswapDEX__factory = /** @class */ (function (_super) {
    __extends(MockUniswapDEX__factory, _super);
    function MockUniswapDEX__factory() {
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
    MockUniswapDEX__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    MockUniswapDEX__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    MockUniswapDEX__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MockUniswapDEX__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MockUniswapDEX__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    MockUniswapDEX__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    MockUniswapDEX__factory.bytecode = _bytecode;
    MockUniswapDEX__factory.abi = _abi;
    return MockUniswapDEX__factory;
}(ethers_1.ContractFactory));
exports.MockUniswapDEX__factory = MockUniswapDEX__factory;
