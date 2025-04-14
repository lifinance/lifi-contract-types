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
        name: "InvalidConfig",
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
var _bytecode = "0x60c060405234801562000010575f80fd5b50604051620012f9380380620012f98339810160408190526200003391620000cb565b5f80546001600160a01b0319166001600160a01b03851690811790915515806200006457506001600160a01b038216155b806200007757506001600160a01b038116155b1562000096576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b039182166080521660a0525062000112565b80516001600160a01b0381168114620000c6575f80fd5b919050565b5f805f60608486031215620000de575f80fd5b620000e984620000af565b9250620000f960208501620000af565b91506200010960408501620000af565b90509250925092565b60805160a0516111a2620001575f395f818161010e015261046801525f8181610195015281816107eb0152818161084d0152818161095d01526109c401526111a25ff3fe608060405260043610610096575f3560e01c80637766d1ed11610066578063c34c08e51161004c578063c34c08e514610184578063e30c3978146101b7578063f2fde38b146101e3575f80fd5b80637766d1ed146100fd5780638da5cb5b14610159575f80fd5b806301e33667146100a157806323452b9c146100c25780634904ac5f146100d65780637200b829146100e9575f80fd5b3661009d57005b5f80fd5b3480156100ac575f80fd5b506100c06100bb366004610bc8565b610202565b005b3480156100cd575f80fd5b506100c0610387565b6100c06100e4366004610c4b565b610450565b3480156100f4575f80fd5b506100c06104ed565b348015610108575f80fd5b506101307f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b348015610164575f80fd5b505f546101309073ffffffffffffffffffffffffffffffffffffffff1681565b34801561018f575f80fd5b506101307f000000000000000000000000000000000000000000000000000000000000000081565b3480156101c2575f80fd5b506001546101309073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101ee575f80fd5b506100c06101fd366004610cec565b6105d1565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610252576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316610309575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146102c3576040519150601f19603f3d011682016040523d82523d5f602084013e6102c8565b606091505b5050905080610303576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061032a565b61032a73ffffffffffffffffffffffffffffffffffffffff8416838361072d565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146103d7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610426576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146104bf576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f80806104ce86880188610e4c565b9250925092506104e18383878488610776565b50505050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461053f576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610621576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661066e576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036106bd576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661076d576390b8ec185f526004601cfd5b5f603452505050565b5f73ffffffffffffffffffffffffffffffffffffffff841673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee146107ae57836107b0565b5f5b905073ffffffffffffffffffffffffffffffffffffffff811615806109875761081073ffffffffffffffffffffffffffffffffffffffff83167f000000000000000000000000000000000000000000000000000000000000000085610ab9565b6040517f4f91bc2b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690634f91bc2b90610888908a908a9087908a90600401611030565b5f604051808303815f87803b15801561089f575f80fd5b505af19250505080156108b0575060015b61093a576108d573ffffffffffffffffffffffffffffffffffffffff8316858561072d565b6040805173ffffffffffffffffffffffffffffffffffffffff80851682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2610941565b5050610ab2565b61098273ffffffffffffffffffffffffffffffffffffffff83167f00000000000000000000000000000000000000000000000000000000000000005f610b37565b610aaf565b6040517f4f91bc2b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690634f91bc2b908590610a01908b908b9088908b90600401611030565b5f604051808303818588803b158015610a18575f80fd5b505af193505050508015610a2a575060015b61093a57610a4e73ffffffffffffffffffffffffffffffffffffffff851684610b77565b6040805173ffffffffffffffffffffffffffffffffffffffff80851682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b50505b5050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661076d575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661076d57633e3f8f735f526004601cfd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661076d57633e3f8f735f526004601cfd5b5f385f3884865af1610b905763b12d13eb5f526004601cfd5b5050565b73ffffffffffffffffffffffffffffffffffffffff81168114610bb5575f80fd5b50565b8035610bc381610b94565b919050565b5f805f60608486031215610bda575f80fd5b8335610be581610b94565b92506020840135610bf581610b94565b929592945050506040919091013590565b5f8083601f840112610c16575f80fd5b50813567ffffffffffffffff811115610c2d575f80fd5b602083019150836020828501011115610c44575f80fd5b9250929050565b5f805f805f805f60a0888a031215610c61575f80fd5b873563ffffffff81168114610c74575f80fd5b9650602088013567ffffffffffffffff80821115610c90575f80fd5b610c9c8b838c01610c06565b909850965060408a0135915080821115610cb4575f80fd5b50610cc18a828b01610c06565b9095509350506060880135610cd581610b94565b809250506080880135905092959891949750929550565b5f60208284031215610cfc575f80fd5b8135610d0781610b94565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b60405160e0810167ffffffffffffffff81118282101715610d5e57610d5e610d0e565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610dab57610dab610d0e565b604052919050565b5f82601f830112610dc2575f80fd5b813567ffffffffffffffff811115610ddc57610ddc610d0e565b610e0d60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610d64565b818152846020838601011115610e21575f80fd5b816020850160208301375f918101602001919091529392505050565b80358015158114610bc3575f80fd5b5f805f60608486031215610e5e575f80fd5b8335925060208085013567ffffffffffffffff80821115610e7d575f80fd5b818701915087601f830112610e90575f80fd5b813581811115610ea257610ea2610d0e565b8060051b610eb1858201610d64565b918252838101850191858101908b841115610eca575f80fd5b86860192505b83831015610fb057823585811115610ee6575f80fd5b860160e0818e037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0011215610f19575f80fd5b610f21610d3b565b610f2c898301610bb8565b8152610f3a60408301610bb8565b89820152610f4a60608301610bb8565b6040820152610f5b60808301610bb8565b606082015260a0820135608082015260c082013587811115610f7b575f80fd5b610f898f8b83860101610db3565b60a083015250610f9b60e08301610e3d565b60c08201528352509186019190860190610ed0565b80985050505050505050610fc660408501610bb8565b90509250925092565b5f81518084525f5b81811015610ff357602081850181015186830182015201610fd7565b505f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b5f6080808301878452602060808186015281885180845260a0935060a08701915060a08160051b880101838b015f5b8381101561111c577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e0898601819052906110f082870182610fcf565b91505060c08083015192506111088187018415159052565b50958701959350509085019060010161105f565b505073ffffffffffffffffffffffffffffffffffffffff8a1660408901529550611147945050505050565b73ffffffffffffffffffffffffffffffffffffffff831660608301529594505050505056fea26469706673582212200d06e63b14a38319c5b4f50808b1f8e1b35606636be862f584fc8d97983b3d6964736f6c63430008160033";
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
