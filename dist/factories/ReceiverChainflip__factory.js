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
exports.ReceiverChainflip__factory = void 0;
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
            {
                name: "_executor",
                type: "address",
                internalType: "address",
            },
            {
                name: "_chainflipVault",
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
        name: "cfReceive",
        inputs: [
            {
                name: "",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "message",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "token",
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
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "chainflipVault",
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
        name: "confirmOwnershipTransfer",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "executor",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IExecutor",
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
        name: "LiFiGenericSwapCompleted",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "integrator",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "referrer",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "receiver",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "fromAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "toAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "fromAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "toAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiSwappedGeneric",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "integrator",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "referrer",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "fromAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "toAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "fromAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "toAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiTransferCompleted",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "receivingAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "receiver",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "timestamp",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiTransferRecovered",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "receivingAssetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "receiver",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "timestamp",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiTransferStarted",
        inputs: [
            {
                name: "bridgeData",
                type: "tuple",
                indexed: false,
                internalType: "struct ILiFi.BridgeData",
                components: [
                    {
                        name: "transactionId",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "bridge",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "integrator",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "referrer",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "sendingAssetId",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "receiver",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "minAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "destinationChainId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "hasSourceSwaps",
                        type: "bool",
                        internalType: "bool",
                    },
                    {
                        name: "hasDestinationCall",
                        type: "bool",
                        internalType: "bool",
                    },
                ],
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
];
var _bytecode = "0x60c060405234801561001057600080fd5b5060405161121538038061121583398101604081905261002f91610076565b600080546001600160a01b0319166001600160a01b039485161790559082166080521660a0526100b9565b80516001600160a01b038116811461007157600080fd5b919050565b60008060006060848603121561008b57600080fd5b6100948461005a565b92506100a26020850161005a565b91506100b06040850161005a565b90509250925092565b60805160a05161111b6100fa60003960008181610117015261047c0152600081816101a10152818161080b0152818161084701526109cb015261111b6000f3fe60806040526004361061009a5760003560e01c80637766d1ed11610069578063c34c08e51161004e578063c34c08e51461018f578063e30c3978146101c3578063f2fde38b146101f057600080fd5b80637766d1ed146101055780638da5cb5b1461016257600080fd5b806301e33667146100a657806323452b9c146100c85780634904ac5f146100dd5780637200b829146100f057600080fd5b366100a157005b600080fd5b3480156100b257600080fd5b506100c66100c1366004610b1d565b610210565b005b3480156100d457600080fd5b506100c661039a565b6100c66100eb366004610ba7565b610464565b3480156100fc57600080fd5b506100c6610502565b34801561011157600080fd5b506101397f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561016e57600080fd5b506000546101399073ffffffffffffffffffffffffffffffffffffffff1681565b34801561019b57600080fd5b506101397f000000000000000000000000000000000000000000000000000000000000000081565b3480156101cf57600080fd5b506001546101399073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101fc57600080fd5b506100c661020b366004610c50565b6105e8565b60005473ffffffffffffffffffffffffffffffffffffffff163314610261576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831661031c5760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146102d6576040519150601f19603f3d011682016040523d82523d6000602084013e6102db565b606091505b5050905080610316576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061033d565b61033d73ffffffffffffffffffffffffffffffffffffffff84168383610746565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103eb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661043a576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146104d3576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080806104e386880188610db9565b9250925092506104f68383878488610795565b50505050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610554576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610639576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610686576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036106d5576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d15600160005114171661078b576390b8ec186000526004601cfd5b6000603452505050565b600073ffffffffffffffffffffffffffffffffffffffff841673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee146107ce57836107d1565b60005b905073ffffffffffffffffffffffffffffffffffffffff8116156108305761083073ffffffffffffffffffffffffffffffffffffffff82167f0000000000000000000000000000000000000000000000000000000000000000846109f9565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811690634f91bc2b9083161561087d57600061087f565b835b888885886040518663ffffffff1660e01b81526004016108a29493929190610faa565b6000604051808303818588803b1580156108bb57600080fd5b505af1935050505080156108cd575060015b6109935773ffffffffffffffffffffffffffffffffffffffff81166109115761090c73ffffffffffffffffffffffffffffffffffffffff841683610a83565b610932565b61093273ffffffffffffffffffffffffffffffffffffffff82168484610746565b6040805173ffffffffffffffffffffffffffffffffffffffff80841682528516602082015290810183905242606082015286907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b73ffffffffffffffffffffffffffffffffffffffff8116156109f1576109f173ffffffffffffffffffffffffffffffffffffffff82167f00000000000000000000000000000000000000000000000000000000000000006000610aa3565b505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d15600160005114171661078b5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661078b57633e3f8f736000526004601cfd5b60003860003884865af1610a9f5763b12d13eb6000526004601cfd5b5050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d15600160005114171661078b57633e3f8f736000526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff81168114610b0a57600080fd5b50565b8035610b1881610ae8565b919050565b600080600060608486031215610b3257600080fd5b8335610b3d81610ae8565b92506020840135610b4d81610ae8565b929592945050506040919091013590565b60008083601f840112610b7057600080fd5b50813567ffffffffffffffff811115610b8857600080fd5b602083019150836020828501011115610ba057600080fd5b9250929050565b600080600080600080600060a0888a031215610bc257600080fd5b873563ffffffff81168114610bd657600080fd5b9650602088013567ffffffffffffffff80821115610bf357600080fd5b610bff8b838c01610b5e565b909850965060408a0135915080821115610c1857600080fd5b50610c258a828b01610b5e565b9095509350506060880135610c3981610ae8565b809250506080880135905092959891949750929550565b600060208284031215610c6257600080fd5b8135610c6d81610ae8565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715610cc657610cc6610c74565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610d1357610d13610c74565b604052919050565b600082601f830112610d2c57600080fd5b813567ffffffffffffffff811115610d4657610d46610c74565b610d7760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610ccc565b818152846020838601011115610d8c57600080fd5b816020850160208301376000918101602001919091529392505050565b80358015158114610b1857600080fd5b600080600060608486031215610dce57600080fd5b8335925060208085013567ffffffffffffffff80821115610dee57600080fd5b818701915087601f830112610e0257600080fd5b813581811115610e1457610e14610c74565b8060051b610e23858201610ccc565b918252838101850191858101908b841115610e3d57600080fd5b86860192505b83831015610f2757823585811115610e5a57600080fd5b860160e0818e037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0011215610e8e57600080fd5b610e96610ca3565b610ea1898301610b0d565b8152610eaf60408301610b0d565b89820152610ebf60608301610b0d565b6040820152610ed060808301610b0d565b606082015260a0820135608082015260c082013587811115610ef25760008081fd5b610f008f8b83860101610d1b565b60a083015250610f1260e08301610da9565b60c08201528352509186019190860190610e43565b80985050505050505050610f3d60408501610b0d565b90509250925092565b6000815180845260005b81811015610f6c57602081850181015186830182015201610f50565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b83811015611095577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e08986018190529061106982870182610f46565b91505060c08083015192506110818187018415159052565b509587019593505090850190600101610fd8565b505073ffffffffffffffffffffffffffffffffffffffff8a16604089015295506110c0945050505050565b73ffffffffffffffffffffffffffffffffffffffff831660608301529594505050505056fea2646970667358221220f901f9682ac9abf9bb4e0b7e050c6ec8e799421e63876f378c83c9def2eaa20864736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ReceiverChainflip__factory = /** @class */ (function (_super) {
    __extends(ReceiverChainflip__factory, _super);
    function ReceiverChainflip__factory() {
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
    ReceiverChainflip__factory.prototype.deploy = function (_owner, _executor, _chainflipVault, overrides) {
        return _super.prototype.deploy.call(this, _owner, _executor, _chainflipVault, overrides || {});
    };
    ReceiverChainflip__factory.prototype.getDeployTransaction = function (_owner, _executor, _chainflipVault, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _owner, _executor, _chainflipVault, overrides || {});
    };
    ReceiverChainflip__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ReceiverChainflip__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ReceiverChainflip__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ReceiverChainflip__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ReceiverChainflip__factory.bytecode = _bytecode;
    ReceiverChainflip__factory.abi = _abi;
    return ReceiverChainflip__factory;
}(ethers_1.ContractFactory));
exports.ReceiverChainflip__factory = ReceiverChainflip__factory;
