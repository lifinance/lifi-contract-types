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
exports.GasZipPeriphery__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_gasZipRouter",
                type: "address",
                internalType: "address",
            },
            {
                name: "_liFiDEXAggregator",
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
        name: "depositToGasZipERC20",
        inputs: [
            {
                name: "_swapData",
                type: "tuple",
                internalType: "struct LibSwap.SwapData",
                components: [
                    {
                        name: "callTo",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "approveTo",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "sendingAssetId",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "receivingAssetId",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "fromAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "callData",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "requiresDeposit",
                        type: "bool",
                        internalType: "bool",
                    },
                ],
            },
            {
                name: "_gasZipData",
                type: "tuple",
                internalType: "struct IGasZip.GasZipData",
                components: [
                    {
                        name: "receiverAddress",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "destinationChains",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "depositToGasZipNative",
        inputs: [
            {
                name: "_gasZipData",
                type: "tuple",
                internalType: "struct IGasZip.GasZipData",
                components: [
                    {
                        name: "receiverAddress",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "destinationChains",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
            {
                name: "_amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "gasZipRouter",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IGasZip",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getDestinationChainsValue",
        inputs: [
            {
                name: "_chainIds",
                type: "uint8[]",
                internalType: "uint8[]",
            },
        ],
        outputs: [
            {
                name: "destinationChains",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "liFiDEXAggregator",
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
    {
        type: "error",
        name: "InvalidAmount",
        inputs: [],
    },
    {
        type: "error",
        name: "InvalidCallData",
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
        name: "NullAddrIsNotAValidSpender",
        inputs: [],
    },
    {
        type: "error",
        name: "NullAddrIsNotAnERC20Token",
        inputs: [],
    },
    {
        type: "error",
        name: "TooManyChainIds",
        inputs: [],
    },
    {
        type: "error",
        name: "UnAuthorized",
        inputs: [],
    },
];
var _bytecode = "0x60c06040523480156200001157600080fd5b50604051620019b2380380620019b283398101604081905262000034916200007d565b600080546001600160a01b0319166001600160a01b039283161790559182166080521660a052620000c7565b80516001600160a01b03811681146200007857600080fd5b919050565b6000806000606084860312156200009357600080fd5b6200009e8462000060565b9250620000ae6020850162000060565b9150620000be6040850162000060565b90509250925092565b60805160a0516118b0620001026000396000818161015d0152818161068501526106c801526000818161020301526107f201526118b06000f3fe6080604052600436106100c05760003560e01c80638b71ae6c11610074578063c4af5a741161004e578063c4af5a7414610225578063e30c397814610238578063f2fde38b1461026557600080fd5b80638b71ae6c146101a45780638da5cb5b146101c4578063ba956b9a146101f157600080fd5b806346fd98e2116100a557806346fd98e2146101035780637200b829146101365780638672976d1461014b57600080fd5b806301e33667146100cc57806323452b9c146100ee57600080fd5b366100c757005b600080fd5b3480156100d857600080fd5b506100ec6100e73660046114f5565b610285565b005b3480156100fa57600080fd5b506100ec61040f565b34801561010f57600080fd5b5061012361011e366004611536565b6104d9565b6040519081526020015b60405180910390f35b34801561014257600080fd5b506100ec61056d565b34801561015757600080fd5b5061017f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161012d565b3480156101b057600080fd5b506100ec6101bf3660046115c3565b610653565b3480156101d057600080fd5b5060005461017f9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101fd57600080fd5b5061017f7f000000000000000000000000000000000000000000000000000000000000000081565b6100ec610233366004611617565b610781565b34801561024457600080fd5b5060015461017f9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561027157600080fd5b506100ec610280366004611642565b61087e565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102d6576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166103915760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461034b576040519150601f19603f3d011682016040523d82523d6000602084013e610350565b606091505b505090508061038b576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506103b2565b6103b273ffffffffffffffffffffffffffffffffffffffff841683836109dc565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610460576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166104af576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6000816020811115610517576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156105655784848281811061053457610534611666565b90506020020160208101906105499190611695565b60ff16600884901b1792508061055e906116e7565b905061051a565b505092915050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146105bf576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6106706106666060840160408501611642565b8360800135610a2b565b6106ae6106836060840160408501611642565b7f00000000000000000000000000000000000000000000000000000000000000008460800135610ba6565b60008073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166106f560a086018661171f565b60405161070392919061178b565b6000604051808303816000865af19150503d8060008114610740576040519150601f19603f3d011682016040523d82523d6000602084013e610745565b606091505b5091509150816107585761075881610cdd565b60008180602001905181019061076e919061179b565b905061077a8482610781565b5050505050565b81356107b9576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fc9630cb000000000000000000000000000000000000000000000000000000000815260208301356004820152823560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063c9630cb09083906044016000604051808303818588803b15801561084c57600080fd5b505af1158015610860573d6000803e3d6000fd5b5047935050821591506108799050576108793382610ce7565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108cf576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661091c576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361096b576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610a21576390b8ec186000526004601cfd5b6000603452505050565b80600003610a65576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610abe5780341015610aba576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610b2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4f919061179b565b905081811015610b9a576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61087983333085610d03565b73ffffffffffffffffffffffffffffffffffffffff8316610bc657505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c13576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cac919061179b565b10156108795761087983837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610f1d565b8051602082018181fd5b60003860003884865af1610aba5763b12d13eb6000526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff8416610d50576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d9d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610e0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e32919061179b565b9050610e4082868686611091565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610eb0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed4919061179b565b610ede91906117b4565b14610f15576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052610fa984826110ef565b61108b5760405173ffffffffffffffffffffffffffffffffffffffff84166024820152600060448201526110819085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526111b2565b61108b84826111b2565b50505050565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261108b9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610fff565b60008060008473ffffffffffffffffffffffffffffffffffffffff168460405161111991906117eb565b6000604051808303816000865af19150503d8060008114611156576040519150601f19603f3d011682016040523d82523d6000602084013e61115b565b606091505b50915091508180156111855750805115806111855750808060200190518101906111859190611807565b80156111a7575073ffffffffffffffffffffffffffffffffffffffff85163b15155b925050505b92915050565b6000611214826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166112c19092919063ffffffff16565b90508051600014806112355750808060200190518101906112359190611807565b610879576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610b91565b60606112d084846000856112d8565b949350505050565b60608247101561136a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b91565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161139391906117eb565b60006040518083038185875af1925050503d80600081146113d0576040519150601f19603f3d011682016040523d82523d6000602084013e6113d5565b606091505b50915091506113e6878383876113f1565b979650505050505050565b606083156114875782516000036114805773ffffffffffffffffffffffffffffffffffffffff85163b611480576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b91565b50816112d0565b6112d0838381511561149c5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b919190611829565b73ffffffffffffffffffffffffffffffffffffffff811681146114f257600080fd5b50565b60008060006060848603121561150a57600080fd5b8335611515816114d0565b92506020840135611525816114d0565b929592945050506040919091013590565b6000806020838503121561154957600080fd5b823567ffffffffffffffff8082111561156157600080fd5b818501915085601f83011261157557600080fd5b81358181111561158457600080fd5b8660208260051b850101111561159957600080fd5b60209290920196919550909350505050565b6000604082840312156115bd57600080fd5b50919050565b600080606083850312156115d657600080fd5b823567ffffffffffffffff8111156115ed57600080fd5b830160e081860312156115ff57600080fd5b915061160e84602085016115ab565b90509250929050565b6000806060838503121561162a57600080fd5b61163484846115ab565b946040939093013593505050565b60006020828403121561165457600080fd5b813561165f816114d0565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156116a757600080fd5b813560ff8116811461165f57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611718576117186116b8565b5060010190565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261175457600080fd5b83018035915067ffffffffffffffff82111561176f57600080fd5b60200191503681900382131561178457600080fd5b9250929050565b8183823760009101908152919050565b6000602082840312156117ad57600080fd5b5051919050565b818103818111156111ac576111ac6116b8565b60005b838110156117e25781810151838201526020016117ca565b50506000910152565b600082516117fd8184602087016117c7565b9190910192915050565b60006020828403121561181957600080fd5b8151801515811461165f57600080fd5b60208152600082518060208401526118488160408501602087016117c7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220b0303d5c7d89492208dedd78f08965c0880180ab1ffdc78c41b380fcc655437464736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var GasZipPeriphery__factory = /** @class */ (function (_super) {
    __extends(GasZipPeriphery__factory, _super);
    function GasZipPeriphery__factory() {
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
    GasZipPeriphery__factory.prototype.deploy = function (_gasZipRouter, _liFiDEXAggregator, _owner, overrides) {
        return _super.prototype.deploy.call(this, _gasZipRouter, _liFiDEXAggregator, _owner, overrides || {});
    };
    GasZipPeriphery__factory.prototype.getDeployTransaction = function (_gasZipRouter, _liFiDEXAggregator, _owner, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _gasZipRouter, _liFiDEXAggregator, _owner, overrides || {});
    };
    GasZipPeriphery__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    GasZipPeriphery__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    GasZipPeriphery__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    GasZipPeriphery__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    GasZipPeriphery__factory.bytecode = _bytecode;
    GasZipPeriphery__factory.abi = _abi;
    return GasZipPeriphery__factory;
}(ethers_1.ContractFactory));
exports.GasZipPeriphery__factory = GasZipPeriphery__factory;
