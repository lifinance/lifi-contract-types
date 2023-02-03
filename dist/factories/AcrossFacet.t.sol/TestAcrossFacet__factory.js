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
exports.TestAcrossFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IAcrossSpokePool",
                name: "_spokePool",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "CannotBridgeToSameNetwork",
        type: "error",
    },
    {
        inputs: [],
        name: "ContractCallNotAllowed",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "minAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "receivedAmount",
                type: "uint256",
            },
        ],
        name: "CumulativeSlippageTooHigh",
        type: "error",
    },
    {
        inputs: [],
        name: "InformationMismatch",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "required",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
            },
        ],
        name: "InsufficientBalance",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidAmount",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidContract",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidReceiver",
        type: "error",
    },
    {
        inputs: [],
        name: "NativeAssetTransferFailed",
        type: "error",
    },
    {
        inputs: [],
        name: "NoSwapDataProvided",
        type: "error",
    },
    {
        inputs: [],
        name: "NoSwapFromZeroBalance",
        type: "error",
    },
    {
        inputs: [],
        name: "NoTransferToNullAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "NullAddrIsNotAValidSpender",
        type: "error",
    },
    {
        inputs: [],
        name: "NullAddrIsNotAnERC20Token",
        type: "error",
    },
    {
        inputs: [],
        name: "QuoteTimeout",
        type: "error",
    },
    {
        inputs: [],
        name: "ReentrancyError",
        type: "error",
    },
    {
        inputs: [],
        name: "SliceOutOfBounds",
        type: "error",
    },
    {
        inputs: [],
        name: "SliceOverflow",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "transactionId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receivingAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "LiFiTransferCompleted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "transactionId",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receivingAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "LiFiTransferRecovered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "transactionId",
                        type: "bytes32",
                    },
                    {
                        internalType: "string",
                        name: "bridge",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "integrator",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "referrer",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "sendingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receiver",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "minAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "destinationChainId",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "hasSourceSwaps",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "hasDestinationCall",
                        type: "bool",
                    },
                ],
                indexed: false,
                internalType: "struct ILiFi.BridgeData",
                name: "bridgeData",
                type: "tuple",
            },
        ],
        name: "LiFiTransferStarted",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_dex",
                type: "address",
            },
        ],
        name: "addDex",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_signature",
                type: "bytes4",
            },
        ],
        name: "setFunctionApprovalBySignature",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "transactionId",
                        type: "bytes32",
                    },
                    {
                        internalType: "string",
                        name: "bridge",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "integrator",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "referrer",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "sendingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receiver",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "minAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "destinationChainId",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "hasSourceSwaps",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "hasDestinationCall",
                        type: "bool",
                    },
                ],
                internalType: "struct ILiFi.BridgeData",
                name: "_bridgeData",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint64",
                        name: "relayerFeePct",
                        type: "uint64",
                    },
                    {
                        internalType: "uint32",
                        name: "quoteTimestamp",
                        type: "uint32",
                    },
                ],
                internalType: "struct AcrossFacet.AcrossData",
                name: "_acrossData",
                type: "tuple",
            },
        ],
        name: "startBridgeTokensViaAcross",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "transactionId",
                        type: "bytes32",
                    },
                    {
                        internalType: "string",
                        name: "bridge",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "integrator",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "referrer",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "sendingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receiver",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "minAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "destinationChainId",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "hasSourceSwaps",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "hasDestinationCall",
                        type: "bool",
                    },
                ],
                internalType: "struct ILiFi.BridgeData",
                name: "_bridgeData",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "callTo",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "approveTo",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "sendingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "receivingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "fromAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                    {
                        internalType: "bool",
                        name: "requiresDeposit",
                        type: "bool",
                    },
                ],
                internalType: "struct LibSwap.SwapData[]",
                name: "_swapData",
                type: "tuple[]",
            },
            {
                components: [
                    {
                        internalType: "uint64",
                        name: "relayerFeePct",
                        type: "uint64",
                    },
                    {
                        internalType: "uint32",
                        name: "quoteTimestamp",
                        type: "uint32",
                    },
                ],
                internalType: "struct AcrossFacet.AcrossData",
                name: "_acrossData",
                type: "tuple",
            },
        ],
        name: "swapAndStartBridgeTokensViaAcross",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x60c06040523480156200001157600080fd5b5060405162002bd038038062002bd083398101604081905262000034916200005e565b6001600160a01b031660805273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc260a05262000090565b6000602082840312156200007157600080fd5b81516001600160a01b03811681146200008957600080fd5b9392505050565b60805160a051612b13620000bd6000396000610734015260008181610762015261078d0152612b136000f3fe60806040526004361061003f5760003560e01c80634eefe3a514610044578063536db26614610059578063ba66bd9a14610079578063c561c1481461008c575b600080fd5b610057610052366004612498565b6100ac565b005b34801561006557600080fd5b50610057610074366004612544565b6102f1565b61005761008736600461255f565b6102fd565b34801561009857600080fd5b506100576100a73660046125d7565b610547565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610127576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101383447612648565b905086806101000151610177576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101b5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101d88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561020f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361024d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361028a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61029f8a600001518b60c001518b8b336105c5565b60c08b01526102ae8a8861070d565b50479150600090508282116102c45760006102ce565b6102ce8383612648565b905080156102e2576102e2600085836108dd565b50506000909255505050505050565b6102fa81610913565b50565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610378576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103893447612648565b9050846103ae8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610423576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610460576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561049e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156104dc576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104ee88608001518960c00151610a00565b61050688610501368a90038a018a61265b565b61070d565b504791506000905082821161051c576000610526565b6105268383612648565b9050801561053a5761053a600085836108dd565b5050600090925550505050565b6102fa817fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b600082808203610601576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610610600185612648565b81811061061f5761061f612677565b905060200281019061063191906126a6565b610642906080810190606001612544565b9050600061064f82610b76565b905073ffffffffffffffffffffffffffffffffffffffff8216610679576106763482612648565b90505b60006106858888610c2f565b90506106918888610d3b565b61069e8a89898985610d9c565b6000826106aa85610b76565b6106b49190612648565b9050898110156106ff576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff81161590811561075857507f000000000000000000000000000000000000000000000000000000000000000061078b565b61078b84608001517f00000000000000000000000000000000000000000000000000000000000000008660c0015161114e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166349228978836107d35760006107d9565b8560c001515b60a087015160c088015160e0808a0151895160208b01516040519388901b7fffffffff0000000000000000000000000000000000000000000000000000000016845273ffffffffffffffffffffffffffffffffffffffff958616600485015294891660248401526044830193909352606482015267ffffffffffffffff909116608482015263ffffffff90911660a482015260c4016000604051808303818588803b15801561088757600080fd5b505af115801561089b573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516108cf9190612752565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff83161561090957610904838383611299565b505050565b61090482826113c8565b61091c816114f2565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1615610970575050565b73ffffffffffffffffffffffffffffffffffffffff909116600081815260208381526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556002909401805494850181558252902090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b73ffffffffffffffffffffffffffffffffffffffff8216610a595780341015610a55576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610a93576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610b00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b249190612865565b905081811015610b6a576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106f6565b61090483333085611590565b600073ffffffffffffffffffffffffffffffffffffffff821615610c27576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610bfe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c229190612865565b610c29565b475b92915050565b60608160008167ffffffffffffffff811115610c4d57610c4d612194565b604051908082528060200260200182016040528015610c76578160200160208202803683370190505b5090506000805b83811015610d3057868682818110610c9757610c97612677565b9050602002810190610ca991906126a6565b610cba906080810190606001612544565b9150610cc582610b76565b838281518110610cd757610cd7612677565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d285734838281518110610d1057610d10612677565b60200260200101818151610d249190612648565b9052505b600101610c7d565b509095945050505050565b60005b81811015610904576000838383818110610d5a57610d5a612677565b9050602002810190610d6c91906126a6565b610d759061287e565b90508060c0015115610d9357610d9381604001518260800151610a00565b50600101610d3e565b8383838382600181146110695760008585610db8600185612648565b818110610dc757610dc7612677565b9050602002810190610dd991906126a6565b610dea906080810190606001612544565b9050600089815b81811015610f9557368d8d83818110610e0c57610e0c612677565b9050602002810190610e1e91906126a6565b9050610e4d610e336060830160408401612544565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610eb05750610eb0610e666040830160208401612544565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610ec75750610ec7610e666020830183612544565b8015610f4c5750610f4c610ede60a0830183612923565b610eed9160049160009161298f565b610ef6916129b9565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f82576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f8c8f826117aa565b50600101610df1565b505060005b610fa5600185612648565b811015611061576000888883818110610fc057610fc0612677565b9050602002810190610fd291906126a6565b610fe3906080810190606001612544565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110585785828151811061102a5761102a612677565b602002602001015161103b82610b76565b6110459190612648565b92508215611058576110588188856108dd565b50600101610f9a565b505050611142565b8760005b8181101561113f57368b8b8381811061108857611088612677565b905060200281019061109a91906126a6565b90506110af610e336060830160408401612544565b806110c857506110c8610e666040830160208401612544565b80156110df57506110df610e666020830183612544565b80156110f657506110f6610ede60a0830183612923565b61112c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111368d826117aa565b5060010161106d565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661116e57505050565b73ffffffffffffffffffffffffffffffffffffffff82166111bb576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611231573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112559190612865565b90508181101561129357611293848461128e847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612648565b611ac0565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166112e6576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611353573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113779190612865565b9050808211156113bd576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106f6565b611293848484611c3c565b73ffffffffffffffffffffffffffffffffffffffff8216611415576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611458576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016106f6565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146114b2576040519150601f19603f3d011682016040523d82523d6000602084013e6114b7565b606091505b5050905080610904576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661153f576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b6000036102fa576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166115dd576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661162a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561169b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116bf9190612865565b90506116cd82868686611c92565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561173d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117619190612865565b61176b9190612648565b146117a2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6117c06117ba6020830183612544565b3b151590565b6117f6576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611836576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061184b610e336060850160408601612544565b61185657600061185c565b82608001355b905060006118786118736060860160408701612544565b610b76565b9050600061188f6118736080870160608801612544565b9050826000036118c6576118c66118ac6060870160408801612544565b6118bc6040880160208901612544565b876080013561114e565b8460800135821015611911576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016106f6565b6000806119216020880188612544565b73ffffffffffffffffffffffffffffffffffffffff168561194560a08a018a612923565b604051611953929190612a01565b60006040518083038185875af1925050503d8060008114611990576040519150601f19603f3d011682016040523d82523d6000602084013e611995565b606091505b5091509150816119e05760006119aa82611cf0565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f69190612a11565b60006119f561187360808a0160608b01612544565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a2660208b018b612544565b611a3660608c0160408d01612544565b611a4660808d0160608e01612544565b8c60800135898711611a585786611a62565b611a628a88612648565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611b37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b5b9190612865565b611b659190612a24565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506112939085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d6e565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109049084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611bba565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112939085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611bba565b6060604482511015611d3557505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611d516004808551611d499190612648565b859190611e7a565b905080806020019051810190611d679190612a37565b9392505050565b6000611dd0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611f949092919063ffffffff16565b8051909150156109045780806020019051810190611dee9190612aae565b610904576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106f6565b606081611e8881601f612a24565b1015611ec0576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611eca8284612a24565b84511015611f04576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611f235760405191506000825260208201604052611f8b565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611f5c578051835260209283019201611f44565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611fa38484600085611fab565b949350505050565b60608247101561203d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106f6565b73ffffffffffffffffffffffffffffffffffffffff85163b6120bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106f6565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516120e49190612acb565b60006040518083038185875af1925050503d8060008114612121576040519150601f19603f3d011682016040523d82523d6000602084013e612126565b606091505b5091509150612136828286612141565b979650505050505050565b60608315612150575081611d67565b8251156121605782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f69190612a11565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156121e7576121e7612194565b60405290565b60405160e0810167ffffffffffffffff811182821017156121e7576121e7612194565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561225757612257612194565b604052919050565b600067ffffffffffffffff82111561227957612279612194565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126122b657600080fd5b81356122c96122c48261225f565b612210565b8181528460208386010111156122de57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461231f57600080fd5b919050565b80151581146102fa57600080fd5b803561231f81612324565b6000610140828403121561235057600080fd5b6123586121c3565b905081358152602082013567ffffffffffffffff8082111561237957600080fd5b612385858386016122a5565b6020840152604084013591508082111561239e57600080fd5b506123ab848285016122a5565b6040830152506123bd606083016122fb565b60608201526123ce608083016122fb565b60808201526123df60a083016122fb565b60a082015260c082013560c082015260e082013560e0820152610100612406818401612332565b90820152610120612418838201612332565b9082015292915050565b60006040828403121561243457600080fd5b6040516040810167ffffffffffffffff828210818311171561245857612458612194565b8160405282935084359150808216821461247157600080fd5b508152602083013563ffffffff8116811461248b57600080fd5b6020919091015292915050565b600080600080608085870312156124ae57600080fd5b843567ffffffffffffffff808211156124c657600080fd5b6124d28883890161233d565b955060208701359150808211156124e857600080fd5b818701915087601f8301126124fc57600080fd5b81358181111561250b57600080fd5b8860208260051b850101111561252057600080fd5b6020830195508094505050506125398660408701612422565b905092959194509250565b60006020828403121561255657600080fd5b611d67826122fb565b600080828403606081121561257357600080fd5b833567ffffffffffffffff81111561258a57600080fd5b6125968682870161233d565b93505060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0820112156125c957600080fd5b506020830190509250929050565b6000602082840312156125e957600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611d6757600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610c2957610c29612619565b60006040828403121561266d57600080fd5b611d678383612422565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126126da57600080fd5b9190910192915050565b60005b838110156126ff5781810151838201526020016126e7565b50506000910152565b600081518084526127208160208601602086016126e4565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261277b610160850183612708565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526127b68382612708565b92505060608501516127e0608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206128538187018315159052565b90950151151593019290925250919050565b60006020828403121561287757600080fd5b5051919050565b600060e0823603121561289057600080fd5b6128986121ed565b6128a1836122fb565b81526128af602084016122fb565b60208201526128c0604084016122fb565b60408201526128d1606084016122fb565b60608201526080830135608082015260a083013567ffffffffffffffff8111156128fa57600080fd5b612906368286016122a5565b60a08301525061291860c08401612332565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261295857600080fd5b83018035915067ffffffffffffffff82111561297357600080fd5b60200191503681900382131561298857600080fd5b9250929050565b6000808585111561299f57600080fd5b838611156129ac57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156129f95780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611d676020830184612708565b80820180821115610c2957610c29612619565b600060208284031215612a4957600080fd5b815167ffffffffffffffff811115612a6057600080fd5b8201601f81018413612a7157600080fd5b8051612a7f6122c48261225f565b818152856020838501011115612a9457600080fd5b612aa58260208301602086016126e4565b95945050505050565b600060208284031215612ac057600080fd5b8151611d6781612324565b600082516126da8184602087016126e456fea26469706673582212205631b85e57d0899f7d3c14f530e7101505bfc964030ddfec69b151360b97cf1264736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var TestAcrossFacet__factory = /** @class */ (function (_super) {
    __extends(TestAcrossFacet__factory, _super);
    function TestAcrossFacet__factory() {
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
    TestAcrossFacet__factory.prototype.deploy = function (_spokePool, overrides) {
        return _super.prototype.deploy.call(this, _spokePool, overrides || {});
    };
    TestAcrossFacet__factory.prototype.getDeployTransaction = function (_spokePool, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _spokePool, overrides || {});
    };
    TestAcrossFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TestAcrossFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TestAcrossFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    TestAcrossFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    TestAcrossFacet__factory.bytecode = _bytecode;
    TestAcrossFacet__factory.abi = _abi;
    return TestAcrossFacet__factory;
}(ethers_1.ContractFactory));
exports.TestAcrossFacet__factory = TestAcrossFacet__factory;
