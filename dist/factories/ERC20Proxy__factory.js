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
exports.ERC20Proxy__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_owner",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "authorizedCallers",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
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
        name: "renounceOwnership",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "setAuthorizedCaller",
        inputs: [
            {
                name: "caller",
                type: "address",
                internalType: "address",
            },
            {
                name: "authorized",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "transferFrom",
        inputs: [
            {
                name: "tokenAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "from",
                type: "address",
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
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
        name: "transferOwnership",
        inputs: [
            {
                name: "newOwner",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "AuthorizationChanged",
        inputs: [
            {
                name: "caller",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "authorized",
                type: "bool",
                indexed: false,
                internalType: "bool",
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
        type: "error",
        name: "InvalidAmount",
        inputs: [],
    },
    {
        type: "error",
        name: "NoTransferToNullAddress",
        inputs: [],
    },
    {
        type: "error",
        name: "NullAddrIsNotAnERC20Token",
        inputs: [],
    },
    {
        type: "error",
        name: "UnAuthorized",
        inputs: [],
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50604051610d43380380610d4383398101604081905261002f91610171565b61003833610047565b61004181610097565b506101a1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61009f610115565b6001600160a01b0381166101095760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61011281610047565b50565b6000546001600160a01b0316331461016f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610100565b565b60006020828403121561018357600080fd5b81516001600160a01b038116811461019a57600080fd5b9392505050565b610b93806101b06000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063715018a611610050578063715018a6146100d75780638da5cb5b146100df578063f2fde38b1461010757600080fd5b806315dacbea14610077578063454bbd291461008c578063536fff6c1461009f575b600080fd5b61008a6100853660046109a4565b61011a565b005b61008a61009a3660046109fd565b610175565b6100c26100ad366004610a34565b60016020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b61008a610207565b60005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ce565b61008a610115366004610a34565b61021b565b3360009081526001602052604090205460ff16610163576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61016f848484846102d7565b50505050565b61017d6104f1565b73ffffffffffffffffffffffffffffffffffffffff821660008181526001602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527f5fe3a0cb9aeae856eac34445ace9544f3e15c21fa6f9bffeca60d662a690ca1b910160405180910390a25050565b61020f6104f1565b6102196000610572565b565b6102236104f1565b73ffffffffffffffffffffffffffffffffffffffff81166102cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102d481610572565b50565b73ffffffffffffffffffffffffffffffffffffffff8416610324576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610371576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156103e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104069190610a56565b9050610414828686866105e7565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610484573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a89190610a56565b6104b29190610a6f565b146104e9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610219576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102c2565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040805173ffffffffffffffffffffffffffffffffffffffff8581166024830152848116604483015260648083018590528351808403909101815260849092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65649084015261016f928792916000916106ba91851690849061076c565b90508051600014806106db5750808060200190518101906106db9190610aaf565b610767576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016102c2565b505050565b606061077b8484600085610783565b949350505050565b606082471015610815576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016102c2565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161083e9190610af0565b60006040518083038185875af1925050503d806000811461087b576040519150601f19603f3d011682016040523d82523d6000602084013e610880565b606091505b50915091506108918783838761089c565b979650505050505050565b6060831561093257825160000361092b5773ffffffffffffffffffffffffffffffffffffffff85163b61092b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102c2565b508161077b565b61077b83838151156109475781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c29190610b0c565b803573ffffffffffffffffffffffffffffffffffffffff8116811461099f57600080fd5b919050565b600080600080608085870312156109ba57600080fd5b6109c38561097b565b93506109d16020860161097b565b92506109df6040860161097b565b9396929550929360600135925050565b80151581146102d457600080fd5b60008060408385031215610a1057600080fd5b610a198361097b565b91506020830135610a29816109ef565b809150509250929050565b600060208284031215610a4657600080fd5b610a4f8261097b565b9392505050565b600060208284031215610a6857600080fd5b5051919050565b81810381811115610aa9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b600060208284031215610ac157600080fd5b8151610a4f816109ef565b60005b83811015610ae7578181015183820152602001610acf565b50506000910152565b60008251610b02818460208701610acc565b9190910192915050565b6020815260008251806020840152610b2b816040850160208701610acc565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220c46e91b1065a85f40812b3a2395797f9adff971614b5aba1585800ef4abe9ad564736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ERC20Proxy__factory = /** @class */ (function (_super) {
    __extends(ERC20Proxy__factory, _super);
    function ERC20Proxy__factory() {
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
    ERC20Proxy__factory.prototype.deploy = function (_owner, overrides) {
        return _super.prototype.deploy.call(this, _owner, overrides || {});
    };
    ERC20Proxy__factory.prototype.getDeployTransaction = function (_owner, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _owner, overrides || {});
    };
    ERC20Proxy__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ERC20Proxy__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ERC20Proxy__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ERC20Proxy__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ERC20Proxy__factory.bytecode = _bytecode;
    ERC20Proxy__factory.abi = _abi;
    return ERC20Proxy__factory;
}(ethers_1.ContractFactory));
exports.ERC20Proxy__factory = ERC20Proxy__factory;
