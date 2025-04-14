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
            {
                name: "_owner",
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
        name: "cancelOwnershipTransfer",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "confirmOwnershipTransfer",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "owner",
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
        type: "function",
        name: "pendingOwner",
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
        type: "function",
        name: "transferOwnership",
        inputs: [
            {
                name: "_newOwner",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "withdrawToken",
        inputs: [
            {
                name: "assetId",
                type: "address",
                internalType: "address",
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address payable",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
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
        type: "event",
        name: "OwnershipTransferRequested",
        inputs: [
            {
                name: "_from",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "_to",
                type: "address",
                indexed: true,
                internalType: "address",
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
        type: "event",
        name: "TokensWithdrawn",
        inputs: [
            {
                name: "assetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "receiver",
                type: "address",
                indexed: false,
                internalType: "address payable",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "ExternalCallFailed",
        inputs: [],
    },
    {
        type: "error",
        name: "NewOwnerMustNotBeSelf",
        inputs: [],
    },
    {
        type: "error",
        name: "NoNullOwner",
        inputs: [],
    },
    {
        type: "error",
        name: "NoPendingOwnershipTransfer",
        inputs: [],
    },
    {
        type: "error",
        name: "NotPendingOwner",
        inputs: [],
    },
    {
        type: "error",
        name: "UnAuthorized",
        inputs: [],
    },
    {
        type: "error",
        name: "WithdrawFailure",
        inputs: [],
    },
];
var _bytecode = "0x608060405234801561000f575f5ffd5b50604051610bc9380380610bc983398101604081905261002e916100e1565b5f80546001600160a01b038381166001600160a01b03199283161790925560028054928516929091168217905560405163095ea7b360e01b81523060048201525f19602482015263095ea7b3906044016020604051808303815f875af115801561009a573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906100be9190610112565b505050610138565b80516001600160a01b03811681146100dc575f5ffd5b919050565b5f5f604083850312156100f2575f5ffd5b6100fb836100c6565b9150610109602084016100c6565b90509250929050565b5f60208284031215610122575f5ffd5b81518015158114610131575f5ffd5b9392505050565b610a84806101455f395ff3fe608060405260043610610096575f3560e01c80638da5cb5b11610066578063d0e30db01161004c578063d0e30db01461017e578063e30c397814610186578063f2fde38b146101b2575f5ffd5b80638da5cb5b146100fe578063996c6cc314610152575f5ffd5b806301e33667146100a157806323452b9c146100c25780633ccfd60b146100d65780637200b829146100ea575f5ffd5b3661009d57005b5f5ffd5b3480156100ac575f5ffd5b506100c06100bb3660046109b8565b6101d1565b005b3480156100cd575f5ffd5b506100c0610356565b3480156100e1575f5ffd5b506100c061041f565b3480156100f5575f5ffd5b506100c06105db565b348015610109575f5ffd5b505f546101299073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561015d575f5ffd5b506002546101299073ffffffffffffffffffffffffffffffffffffffff1681565b6100c06106bf565b348015610191575f5ffd5b506001546101299073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101bd575f5ffd5b506100c06101cc3660046109f6565b6107d5565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610221576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166102d8575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610292576040519150601f19603f3d011682016040523d82523d5f602084013e610297565b606091505b50509050806102d2576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506102f9565b6102f973ffffffffffffffffffffffffffffffffffffffff84168383610931565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146103a6576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166103f5576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6002546040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa15801561048b573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104af9190610a18565b6002546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810183905291925073ffffffffffffffffffffffffffffffffffffffff16906323b872dd906064016020604051808303815f875af115801561052a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061054e9190610a2f565b506002546040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690632e1a7d4d906024015f604051808303815f87803b1580156105b8575f5ffd5b505af11580156105ca573d5f5f3e3d5ffd5b505050506105d8338261097a565b50565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461062d576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004015f604051808303818588803b158015610726575f5ffd5b505af1158015610738573d5f5f3e3d5ffd5b50506002546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015234602482015273ffffffffffffffffffffffffffffffffffffffff909116935063a9059cbb925060440190506020604051808303815f875af11580156107b1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105d89190610a2f565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610825576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610872576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036108c1576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610971576390b8ec185f526004601cfd5b5f603452505050565b5f385f3884865af16109935763b12d13eb5f526004601cfd5b5050565b73ffffffffffffffffffffffffffffffffffffffff811681146105d8575f5ffd5b5f5f5f606084860312156109ca575f5ffd5b83356109d581610997565b925060208401356109e581610997565b929592945050506040919091013590565b5f60208284031215610a06575f5ffd5b8135610a1181610997565b9392505050565b5f60208284031215610a28575f5ffd5b5051919050565b5f60208284031215610a3f575f5ffd5b81518015158114610a11575f5ffdfea26469706673582212200938922fcab5e38317d8737363d17bb2007361690631789ca8a91d2242e2151364736f6c634300081d0033";
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
    TokenWrapper__factory.prototype.deploy = function (_wrappedToken, _owner, overrides) {
        return _super.prototype.deploy.call(this, _wrappedToken, _owner, overrides || {});
    };
    TokenWrapper__factory.prototype.getDeployTransaction = function (_wrappedToken, _owner, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _wrappedToken, _owner, overrides || {});
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
