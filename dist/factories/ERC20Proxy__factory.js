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
        name: "InvalidAmount",
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
        name: "NoTransferToNullAddress",
        inputs: [],
    },
    {
        type: "error",
        name: "NotPendingOwner",
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
var _bytecode = "0x608060405234801561001057600080fd5b5060405161106538038061106583398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610fd2806100936000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063536fff6c116100765780638da5cb5b1161005b5780638da5cb5b1461012b578063e30c397814610170578063f2fde38b1461019057600080fd5b8063536fff6c146100eb5780637200b8291461012357600080fd5b806301e33667146100a857806315dacbea146100bd57806323452b9c146100d0578063454bbd29146100d8575b600080fd5b6100bb6100b6366004610d98565b6101a3565b005b6100bb6100cb366004610dd9565b61032d565b6100bb610388565b6100bb6100e6366004610e38565b610452565b61010e6100f9366004610e71565b60026020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6100bb61052d565b60005461014b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161011a565b60015461014b9073ffffffffffffffffffffffffffffffffffffffff1681565b6100bb61019e366004610e71565b610613565b60005473ffffffffffffffffffffffffffffffffffffffff1633146101f4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166102af5760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610269576040519150601f19603f3d011682016040523d82523d6000602084013e61026e565b606091505b50509050806102a9576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506102d0565b6102d073ffffffffffffffffffffffffffffffffffffffff84168383610771565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b3360009081526002602052604090205460ff16610376576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610382848484846107c0565b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103d9576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610428576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104a3576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527f5fe3a0cb9aeae856eac34445ace9544f3e15c21fa6f9bffeca60d662a690ca1b910160405180910390a25050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461057f576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610664576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166106b1576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610700576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166107b6576390b8ec186000526004601cfd5b6000603452505050565b73ffffffffffffffffffffffffffffffffffffffff841661080d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661085a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156108cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ef9190610e95565b90506108fd828686866109da565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561096d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109919190610e95565b61099b9190610eae565b146109d2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8581166024830152848116604483015260648083018590528351808403909101815260849092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65649084015261038292879291600091610aad918516908490610b64565b9050805160001480610ace575080806020019051810190610ace9190610eee565b610b5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b505050565b6060610b738484600085610b7b565b949350505050565b606082471015610c0d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b56565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610c369190610f2f565b60006040518083038185875af1925050503d8060008114610c73576040519150601f19603f3d011682016040523d82523d6000602084013e610c78565b606091505b5091509150610c8987838387610c94565b979650505050505050565b60608315610d2a578251600003610d235773ffffffffffffffffffffffffffffffffffffffff85163b610d23576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b56565b5081610b73565b610b738383815115610d3f5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b569190610f4b565b73ffffffffffffffffffffffffffffffffffffffff81168114610d9557600080fd5b50565b600080600060608486031215610dad57600080fd5b8335610db881610d73565b92506020840135610dc881610d73565b929592945050506040919091013590565b60008060008060808587031215610def57600080fd5b8435610dfa81610d73565b93506020850135610e0a81610d73565b92506040850135610e1a81610d73565b9396929550929360600135925050565b8015158114610d9557600080fd5b60008060408385031215610e4b57600080fd5b8235610e5681610d73565b91506020830135610e6681610e2a565b809150509250929050565b600060208284031215610e8357600080fd5b8135610e8e81610d73565b9392505050565b600060208284031215610ea757600080fd5b5051919050565b81810381811115610ee8577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b600060208284031215610f0057600080fd5b8151610e8e81610e2a565b60005b83811015610f26578181015183820152602001610f0e565b50506000910152565b60008251610f41818460208701610f0b565b9190910192915050565b6020815260008251806020840152610f6a816040850160208701610f0b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea26469706673582212209b11bcab9970bde7e27fd6e2cad6f63d35ef497381220eef6edb66a1b493a45d64736f6c63430008110033";
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
