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
exports.PolygonBridgeFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_rootChainManager",
                type: "address",
                internalType: "contract IRootChainManager",
            },
            {
                name: "_erc20Predicate",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaPolygonBridge",
        inputs: [
            {
                name: "_bridgeData",
                type: "tuple",
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
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapAndStartBridgeTokensViaPolygonBridge",
        inputs: [
            {
                name: "_bridgeData",
                type: "tuple",
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
            {
                name: "_swapData",
                type: "tuple[]",
                internalType: "struct LibSwap.SwapData[]",
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
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "event",
        name: "AssetSwapped",
        inputs: [
            {
                name: "transactionId",
                type: "bytes32",
                indexed: false,
                internalType: "bytes32",
            },
            {
                name: "dex",
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
        type: "error",
        name: "CannotBridgeToSameNetwork",
        inputs: [],
    },
    {
        type: "error",
        name: "ContractCallNotAllowed",
        inputs: [],
    },
    {
        type: "error",
        name: "CumulativeSlippageTooHigh",
        inputs: [
            {
                name: "minAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "receivedAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "InformationMismatch",
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
        name: "InvalidContract",
        inputs: [],
    },
    {
        type: "error",
        name: "InvalidReceiver",
        inputs: [],
    },
    {
        type: "error",
        name: "NativeAssetTransferFailed",
        inputs: [],
    },
    {
        type: "error",
        name: "NoSwapDataProvided",
        inputs: [],
    },
    {
        type: "error",
        name: "NoSwapFromZeroBalance",
        inputs: [],
    },
    {
        type: "error",
        name: "NoTransferToNullAddress",
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
        name: "ReentrancyError",
        inputs: [],
    },
];
var _bytecode = "0x60c060405234801562000010575f80fd5b50604051620026e8380380620026e8833981016040819052620000339162000063565b6001600160a01b039182166080521660a052620000a0565b6001600160a01b038116811462000060575f80fd5b50565b5f806040838503121562000075575f80fd5b825162000082816200004b565b602084015190925062000095816200004b565b809150509250929050565b60805160a051612618620000d05f395f6107b001525f818161069001528181610739015261086701526126185ff3fe608060405260043610610028575f3560e01c8063af62c7d61461002c578063b4f3758114610041575b5f80fd5b61003f61003a366004612135565b610054565b005b61003f61004f366004612167565b610277565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df34476121f9565b9050838061010001511561011f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b848061012001511561015d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101808160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610231576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024387608001518860c0015161049d565b61024c87610619565b50479150508181111561026d5761026d5f8461026885856121f9565b610907565b50505f9091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61030234476121f9565b905085806101000151610341576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561037f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103a28160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103d9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610416576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610453576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610467895f01518a60c001518a8a33610938565b60c08a015261047589610619565b504791505081811115610491576104915f8461026885856121f9565b50505f90915550505050565b805f036104d6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661052f578034101561052b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610599573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105bd9190612231565b905081811015610608576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61061483333085610a76565b505050565b5f61063c826080015173ffffffffffffffffffffffffffffffffffffffff161590565b156106ef5760c082015160a08301516040517f4faa8a2600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f000000000000000000000000000000000000000000000000000000000000000090911691634faa8a26916024015f604051808303818588803b1580156106d3575f80fd5b505af11580156106e5573d5f803e3d5ffd5b50505050506108cc565b60808201516040517fea60c7c400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f00000000000000000000000000000000000000000000000000000000000000009091169063ea60c7c490602401602060405180830381865afa158015610780573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107a49190612248565b90506107d982608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610c8b565b5f8260c001516040516020016107f191815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905260a085015160808601517fe3dec8fb00000000000000000000000000000000000000000000000000000000845291935073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169263e3dec8fb9261089d929186906004016122d5565b5f604051808303815f87803b1580156108b4575f80fd5b505af11580156108c6573d5f803e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108fb919061230d565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561092e57610614838383610dc0565b6106148282610f3f565b5f82808203610973576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856109816001856121f9565b8181106109905761099061241f565b90506020028101906109a2919061244c565b6109b3906080810190606001612488565b90505f6109bf82611065565b905073ffffffffffffffffffffffffffffffffffffffff82166109e9576109e634826121f9565b90505b5f6109f4888861111b565b9050610a008888611225565b610a0d8a89898985611291565b5f82610a1885611065565b610a2291906121f9565b905089811015610a68576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044016105ff565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610ac3576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b10576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa158015610b7e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ba29190612231565b9050610bb08286868661163b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610c1e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c429190612231565b610c4c91906121f9565b14610c83576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610cab57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610cf8576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d6b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d8f9190612231565b10156106145761061483837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611717565b73ffffffffffffffffffffffffffffffffffffffff8316610e0d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e5a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610ec4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ee89190612231565b905080821115610f2e576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105ff565b610f39848484611806565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f8c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610fcf576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105ff565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114611025576040519150601f19603f3d011682016040523d82523d5f602084013e61102a565b606091505b5050905080610614576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff821615611113576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156110ea573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061110e9190612231565b611115565b475b92915050565b6060815f8167ffffffffffffffff81111561113857611138611f0a565b604051908082528060200260200182016040528015611161578160200160208202803683370190505b5090505f805b8381101561121a578686828181106111815761118161241f565b9050602002810190611193919061244c565b6111a4906080810190606001612488565b91506111af82611065565b8382815181106111c1576111c161241f565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661121257348382815181106111fa576111fa61241f565b6020026020010181815161120e91906121f9565b9052505b600101611167565b509095945050505050565b5f5b8181101561061457368383838181106112425761124261241f565b9050602002810190611254919061244c565b905061126660e0820160c083016124a3565b156112885761128861127e6060830160408401612488565b826080013561049d565b50600101611227565b838383838260018114611557575f85856112ac6001856121f9565b8181106112bb576112bb61241f565b90506020028101906112cd919061244c565b6112de906080810190606001612488565b90505f89815b8181101561148557368d8d838181106112ff576112ff61241f565b9050602002810190611311919061244c565b90506113406113266060830160408401612488565b73ffffffffffffffffffffffffffffffffffffffff161590565b806113a257506113a26113596040830160208401612488565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156113b957506113b96113596020830183612488565b801561143c575061143c6113d060a08301836124be565b6113de916004915f91612526565b6113e79161254d565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611472576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61147c8f8261185c565b506001016112e4565b50505f5b6114946001856121f9565b81101561154f575f8888838181106114ae576114ae61241f565b90506020028101906114c0919061244c565b6114d1906080810190606001612488565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611546578582815181106115185761151861241f565b602002602001015161152982611065565b61153391906121f9565b9250821561154657611546818885610907565b50600101611489565b50505061162f565b875f5b8181101561162c57368b8b838181106115755761157561241f565b9050602002810190611587919061244c565b905061159c6113266060830160408401612488565b806115b557506115b56113596040830160208401612488565b80156115cc57506115cc6113596020830183612488565b80156115e357506115e36113d060a08301836124be565b611619576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116238d8261185c565b5060010161155a565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610f399085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b2f565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526117a38482611c3c565b610f395760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f60448201526117fc9085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611695565b610f398482611b2f565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106149084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611695565b61187261186c6020830183612488565b3b151590565b6118a8576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036118e7576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6118fb6113266060850160408601612488565b611905575f61190b565b82608001355b90505f6119266119216060860160408701612488565b611065565b90505f61193c6119216080870160608801612488565b9050825f03611972576119726119586060870160408801612488565b6119686040880160208901612488565b8760800135610c8b565b84608001358210156119bd576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105ff565b5f806119cc6020880188612488565b73ffffffffffffffffffffffffffffffffffffffff16856119f060a08a018a6124be565b6040516119fe929190612595565b5f6040518083038185875af1925050503d805f8114611a38576040519150601f19603f3d011682016040523d82523d5f602084013e611a3d565b606091505b509150915081611a5057611a5081611cf7565b5f611a6461192160808a0160608b01612488565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a9560208b018b612488565b611aa560608c0160408d01612488565b611ab560808d0160608e01612488565b8c60800135898711611ac75786611ad1565b611ad18a886121f9565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b5f611b90826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d019092919063ffffffff16565b905080515f1480611bb0575080806020019051810190611bb091906125a4565b610614576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105ff565b5f805f8473ffffffffffffffffffffffffffffffffffffffff1684604051611c6491906125bf565b5f604051808303815f865af19150503d805f8114611c9d576040519150601f19603f3d011682016040523d82523d5f602084013e611ca2565b606091505b5091509150818015611ccc575080511580611ccc575080806020019051810190611ccc91906125a4565b8015611cee575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611d0f84845f85611d17565b949350505050565b606082471015611da9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105ff565b5f808673ffffffffffffffffffffffffffffffffffffffff168587604051611dd191906125bf565b5f6040518083038185875af1925050503d805f8114611e0b576040519150601f19603f3d011682016040523d82523d5f602084013e611e10565b606091505b5091509150611e2187838387611e2c565b979650505050505050565b60608315611ec15782515f03611eba5773ffffffffffffffffffffffffffffffffffffffff85163b611eba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105ff565b5081611d0f565b611d0f8383815115611ed65781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ff91906125d0565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611f5b57611f5b611f0a565b60405290565b5f82601f830112611f70575f80fd5b813567ffffffffffffffff80821115611f8b57611f8b611f0a565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611fd157611fd1611f0a565b81604052838152866020858801011115611fe9575f80fd5b836020870160208301375f602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff81168114612029575f80fd5b50565b803561203781612008565b919050565b8015158114612029575f80fd5b80356120378161203c565b5f6101408284031215612065575f80fd5b61206d611f37565b905081358152602082013567ffffffffffffffff8082111561208d575f80fd5b61209985838601611f61565b602084015260408401359150808211156120b1575f80fd5b506120be84828501611f61565b6040830152506120d06060830161202c565b60608201526120e16080830161202c565b60808201526120f260a0830161202c565b60a082015260c082013560c082015260e082013560e0820152610100612119818401612049565b9082015261012061212b838201612049565b9082015292915050565b5f60208284031215612145575f80fd5b813567ffffffffffffffff81111561215b575f80fd5b611d0f84828501612054565b5f805f60408486031215612179575f80fd5b833567ffffffffffffffff80821115612190575f80fd5b61219c87838801612054565b945060208601359150808211156121b1575f80fd5b818601915086601f8301126121c4575f80fd5b8135818111156121d2575f80fd5b8760208260051b85010111156121e6575f80fd5b6020830194508093505050509250925092565b81810381811115611115577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215612241575f80fd5b5051919050565b5f60208284031215612258575f80fd5b815161226381612008565b9392505050565b5f5b8381101561228457818101518382015260200161226c565b50505f910152565b5f81518084526122a381602086016020860161226a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b5f73ffffffffffffffffffffffffffffffffffffffff808616835280851660208401525060606040830152611cee606083018461228c565b60208152815160208201525f602083015161014080604085015261233561016085018361228c565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612370838261228c565b925050606085015161239a608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061240d8187018315159052565b90950151151593019290925250919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261247e575f80fd5b9190910192915050565b5f60208284031215612498575f80fd5b813561226381612008565b5f602082840312156124b3575f80fd5b81356122638161203c565b5f8083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126124f1575f80fd5b83018035915067ffffffffffffffff82111561250b575f80fd5b60200191503681900382131561251f575f80fd5b9250929050565b5f8085851115612534575f80fd5b83861115612540575f80fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561258d5780818660040360031b1b83161692505b505092915050565b818382375f9101908152919050565b5f602082840312156125b4575f80fd5b81516122638161203c565b5f825161247e81846020870161226a565b602081525f612263602083018461228c56fea26469706673582212201f7db3d0f390602010a36cb9b398b2ed2d4008d42bb5ab0ac9607bf96617aea164736f6c63430008160033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var PolygonBridgeFacet__factory = /** @class */ (function (_super) {
    __extends(PolygonBridgeFacet__factory, _super);
    function PolygonBridgeFacet__factory() {
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
    PolygonBridgeFacet__factory.prototype.deploy = function (_rootChainManager, _erc20Predicate, overrides) {
        return _super.prototype.deploy.call(this, _rootChainManager, _erc20Predicate, overrides || {});
    };
    PolygonBridgeFacet__factory.prototype.getDeployTransaction = function (_rootChainManager, _erc20Predicate, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _rootChainManager, _erc20Predicate, overrides || {});
    };
    PolygonBridgeFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    PolygonBridgeFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    PolygonBridgeFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    PolygonBridgeFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    PolygonBridgeFacet__factory.bytecode = _bytecode;
    PolygonBridgeFacet__factory.abi = _abi;
    return PolygonBridgeFacet__factory;
}(ethers_1.ContractFactory));
exports.PolygonBridgeFacet__factory = PolygonBridgeFacet__factory;
