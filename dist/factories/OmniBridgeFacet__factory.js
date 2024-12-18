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
exports.OmniBridgeFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_foreignOmniBridge",
                type: "address",
                internalType: "contract IOmniBridge",
            },
            {
                name: "_wethOmniBridge",
                type: "address",
                internalType: "contract IOmniBridge",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaOmniBridge",
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
        name: "swapAndStartBridgeTokensViaOmniBridge",
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
var _bytecode = "0x60c06040523480156200001157600080fd5b50604051620025f2380380620025f2833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a051612524620000ce6000396000610696015260008181610703015261078d01526125246000f3fe6080604052600436106100295760003560e01c8063782621d81461002e5780639572678214610043575b600080fd5b61004161003c36600461206f565b610056565b005b6100416100513660046120a4565b61027d565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761213e565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024787608001518860c001516104a8565b61025087610628565b5047915050818111156102725761027260008461026d858561213e565b610826565b505060009091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610309344761213e565b905085806101000151610348576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610386576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103a98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361041e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047089600001518a60c001518a8a33610857565b60c08a015261047e89610628565b50479150508181111561049b5761049b60008461026d858561213e565b5050600090915550505050565b806000036104e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053b5780341015610537576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cc9190612178565b905081811015610617576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6106238333308561099a565b505050565b608081015173ffffffffffffffffffffffffffffffffffffffff166106f95760c081015160a08201516040517ff52cbf0e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f00000000000000000000000000000000000000000000000000000000000000009091169163f52cbf0e916024016000604051808303818588803b1580156106db57600080fd5b505af11580156106ef573d6000803e3d6000fd5b50505050506107ec565b61072c81608001517f00000000000000000000000000000000000000000000000000000000000000008360c00151610bb4565b608081015160a082015160c08301516040517fad58bdd100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9384166004820152918316602483015260448201527f00000000000000000000000000000000000000000000000000000000000000009091169063ad58bdd190606401600060405180830381600087803b1580156107d357600080fd5b505af11580156107e7573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161081b91906121ff565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff83161561084d57610623838383610cf7565b6106238282610e79565b600082808203610893576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856108a260018561213e565b8181106108b1576108b1612312565b90506020028101906108c39190612341565b6108d490608081019060600161237f565b905060006108e182610fa3565b905073ffffffffffffffffffffffffffffffffffffffff821661090b57610908348261213e565b90505b6000610917888861105c565b90506109238888611168565b6109308a898989856111d5565b60008261093c85610fa3565b610946919061213e565b90508981101561098c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161060e565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166109e7576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a34576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610aa5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac99190612178565b9050610ad782868686611587565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6b9190612178565b610b75919061213e565b14610bac576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610bd457505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c21576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c96573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cba9190612178565b101561062357610ccc83836000611663565b61062383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611663565b73ffffffffffffffffffffffffffffffffffffffff8316610d44576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d91576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610dfe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e229190612178565b905080821115610e68576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161060e565b610e738484846117e5565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610ec6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610f09576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161060e565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f63576040519150601f19603f3d011682016040523d82523d6000602084013e610f68565b606091505b5050905080610623576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611054576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561102b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061104f9190612178565b611056565b475b92915050565b60608160008167ffffffffffffffff81111561107a5761107a611e41565b6040519080825280602002602001820160405280156110a3578160200160208202803683370190505b5090506000805b8381101561115d578686828181106110c4576110c4612312565b90506020028101906110d69190612341565b6110e790608081019060600161237f565b91506110f282610fa3565b83828151811061110457611104612312565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611155573483828151811061113d5761113d612312565b60200260200101818151611151919061213e565b9052505b6001016110aa565b509095945050505050565b60005b81811015610623573683838381811061118657611186612312565b90506020028101906111989190612341565b90506111aa60e0820160c083016123a1565b156111cc576111cc6111c2606083016040840161237f565b82608001356104a8565b5060010161116b565b8383838382600181146114a257600085856111f160018561213e565b81811061120057611200612312565b90506020028101906112129190612341565b61122390608081019060600161237f565b9050600089815b818110156113ce57368d8d8381811061124557611245612312565b90506020028101906112579190612341565b905061128661126c606083016040840161237f565b73ffffffffffffffffffffffffffffffffffffffff161590565b806112e957506112e961129f604083016020840161237f565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015611300575061130061129f602083018361237f565b8015611385575061138561131760a08301836123be565b6113269160049160009161242a565b61132f91612454565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6113bb576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113c58f8261183b565b5060010161122a565b505060005b6113de60018561213e565b81101561149a5760008888838181106113f9576113f9612312565b905060200281019061140b9190612341565b61141c90608081019060600161237f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114915785828151811061146357611463612312565b602002602001015161147482610fa3565b61147e919061213e565b9250821561149157611491818885610826565b506001016113d3565b50505061157b565b8760005b8181101561157857368b8b838181106114c1576114c1612312565b90506020028101906114d39190612341565b90506114e861126c606083016040840161237f565b80611501575061150161129f604083016020840161237f565b8015611518575061151861129f602083018361237f565b801561152f575061152f61131760a08301836123be565b611565576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61156f8d8261183b565b506001016114a6565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610e739085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b19565b80158061170357506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156116dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117019190612178565b155b61178f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161060e565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106239084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115e1565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106239084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115e1565b61185161184b602083018361237f565b3b151590565b611887576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036118c7576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118dc61126c606085016040860161237f565b6118e75760006118ed565b82608001355b90506000611909611904606086016040870161237f565b610fa3565b90506000611920611904608087016060880161237f565b9050826000036119575761195761193d606087016040880161237f565b61194d604088016020890161237f565b8760800135610bb4565b84608001358210156119a2576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161060e565b6000806119b2602088018861237f565b73ffffffffffffffffffffffffffffffffffffffff16856119d660a08a018a6123be565b6040516119e492919061249c565b60006040518083038185875af1925050503d8060008114611a21576040519150601f19603f3d011682016040523d82523d6000602084013e611a26565b606091505b509150915081611a3957611a3981611c28565b6000611a4e61190460808a0160608b0161237f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a7f60208b018b61237f565b611a8f60608c0160408d0161237f565b611a9f60808d0160608e0161237f565b8c60800135898711611ab15786611abb565b611abb8a8861213e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611b7b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c329092919063ffffffff16565b9050805160001480611b9c575080806020019051810190611b9c91906124ac565b610623576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161060e565b8051602082018181fd5b6060611c418484600085611c49565b949350505050565b606082471015611cdb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161060e565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d0491906124c9565b60006040518083038185875af1925050503d8060008114611d41576040519150601f19603f3d011682016040523d82523d6000602084013e611d46565b606091505b5091509150611d5787838387611d62565b979650505050505050565b60608315611df8578251600003611df15773ffffffffffffffffffffffffffffffffffffffff85163b611df1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161060e565b5081611c41565b611c418383815115611e0d5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060e91906124db565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611e9457611e94611e41565b60405290565b600082601f830112611eab57600080fd5b813567ffffffffffffffff80821115611ec657611ec6611e41565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611f0c57611f0c611e41565b81604052838152866020858801011115611f2557600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f6957600080fd5b919050565b8015158114611f7c57600080fd5b50565b8035611f6981611f6e565b60006101408284031215611f9d57600080fd5b611fa5611e70565b905081358152602082013567ffffffffffffffff80821115611fc657600080fd5b611fd285838601611e9a565b60208401526040840135915080821115611feb57600080fd5b50611ff884828501611e9a565b60408301525061200a60608301611f45565b606082015261201b60808301611f45565b608082015261202c60a08301611f45565b60a082015260c082013560c082015260e082013560e0820152610100612053818401611f7f565b90820152610120612065838201611f7f565b9082015292915050565b60006020828403121561208157600080fd5b813567ffffffffffffffff81111561209857600080fd5b611c4184828501611f8a565b6000806000604084860312156120b957600080fd5b833567ffffffffffffffff808211156120d157600080fd5b6120dd87838801611f8a565b945060208601359150808211156120f357600080fd5b818601915086601f83011261210757600080fd5b81358181111561211657600080fd5b8760208260051b850101111561212b57600080fd5b6020830194508093505050509250925092565b81810381811115611056577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561218a57600080fd5b5051919050565b60005b838110156121ac578181015183820152602001612194565b50506000910152565b600081518084526121cd816020860160208601612191565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526122286101608501836121b5565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261226383826121b5565b925050606085015161228d608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206123008187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261237557600080fd5b9190910192915050565b60006020828403121561239157600080fd5b61239a82611f45565b9392505050565b6000602082840312156123b357600080fd5b813561239a81611f6e565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126123f357600080fd5b83018035915067ffffffffffffffff82111561240e57600080fd5b60200191503681900382131561242357600080fd5b9250929050565b6000808585111561243a57600080fd5b8386111561244757600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156124945780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156124be57600080fd5b815161239a81611f6e565b60008251612375818460208701612191565b60208152600061239a60208301846121b556fea26469706673582212204e332bb8b360dd5c06182a6be8d3356da14d144d89f73058354d303a87a0874964736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var OmniBridgeFacet__factory = /** @class */ (function (_super) {
    __extends(OmniBridgeFacet__factory, _super);
    function OmniBridgeFacet__factory() {
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
    OmniBridgeFacet__factory.prototype.deploy = function (_foreignOmniBridge, _wethOmniBridge, overrides) {
        return _super.prototype.deploy.call(this, _foreignOmniBridge, _wethOmniBridge, overrides || {});
    };
    OmniBridgeFacet__factory.prototype.getDeployTransaction = function (_foreignOmniBridge, _wethOmniBridge, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _foreignOmniBridge, _wethOmniBridge, overrides || {});
    };
    OmniBridgeFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    OmniBridgeFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    OmniBridgeFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    OmniBridgeFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    OmniBridgeFacet__factory.bytecode = _bytecode;
    OmniBridgeFacet__factory.abi = _abi;
    return OmniBridgeFacet__factory;
}(ethers_1.ContractFactory));
exports.OmniBridgeFacet__factory = OmniBridgeFacet__factory;
