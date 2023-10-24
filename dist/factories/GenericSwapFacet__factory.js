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
exports.GenericSwapFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
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
                internalType: "string",
                name: "integrator",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "referrer",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "fromAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "toAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fromAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "toAmount",
                type: "uint256",
            },
        ],
        name: "LiFiGenericSwapCompleted",
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
                internalType: "string",
                name: "integrator",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "referrer",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "fromAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "toAssetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "fromAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "toAmount",
                type: "uint256",
            },
        ],
        name: "LiFiSwappedGeneric",
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
                internalType: "bytes32",
                name: "_transactionId",
                type: "bytes32",
            },
            {
                internalType: "string",
                name: "_integrator",
                type: "string",
            },
            {
                internalType: "string",
                name: "_referrer",
                type: "string",
            },
            {
                internalType: "address payable",
                name: "_receiver",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_minAmount",
                type: "uint256",
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
        ],
        name: "swapTokensGeneric",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50612192806100206000396000f3fe60806040526004361061001e5760003560e01c80634630a0d814610023575b600080fd5b610036610031366004611c1a565b610038565b005b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100b3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181558460006100c43447611d3a565b905073ffffffffffffffffffffffffffffffffffffffff8716610113576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006101228d8888888c61024b565b905060008686610133600182611d3a565b81811061014257610142611d4d565b90506020028101906101549190611d7c565b610165906080810190606001611dba565b9050610172818a84610393565b8d7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378e8e8e8e8e8d8d60008181106101ac576101ac611d4d565b90506020028101906101be9190611d7c565b6101cf906060810190604001611dba565b888f8f60008181106101e3576101e3611d4d565b90506020028101906101f59190611d7c565b608001358b60405161020f99989796959493929190611e20565b60405180910390a25047905081811115610238576102386000846102338585611d3a565b610393565b5050600090915550505050505050505050565b600082808203610287576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610296600185611d3a565b8181106102a5576102a5611d4d565b90506020028101906102b79190611d7c565b6102c8906080810190606001611dba565b905060006102d5826103c9565b905073ffffffffffffffffffffffffffffffffffffffff82166102ff576102fc3482611d3a565b90505b600061030b8888610482565b9050610317888861058e565b6103248a898989856105fb565b600082610330856103c9565b61033a9190611d3a565b905089811015610385576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316156103bf576103ba8383836109ad565b505050565b6103ba8282610b2f565b600073ffffffffffffffffffffffffffffffffffffffff82161561047a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610451573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104759190611e8b565b61047c565b475b92915050565b60608160008167ffffffffffffffff8111156104a0576104a0611ea4565b6040519080825280602002602001820160405280156104c9578160200160208202803683370190505b5090506000805b83811015610583578686828181106104ea576104ea611d4d565b90506020028101906104fc9190611d7c565b61050d906080810190606001611dba565b9150610518826103c9565b83828151811061052a5761052a611d4d565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661057b573483828151811061056357610563611d4d565b602002602001018181516105779190611d3a565b9052505b6001016104d0565b509095945050505050565b60005b818110156103ba57368383838181106105ac576105ac611d4d565b90506020028101906105be9190611d7c565b90506105d060e0820160c08301611ee1565b156105f2576105f26105e86060830160408401611dba565b8260800135610c59565b50600101610591565b8383838382600181146108c85760008585610617600185611d3a565b81811061062657610626611d4d565b90506020028101906106389190611d7c565b610649906080810190606001611dba565b9050600089815b818110156107f457368d8d8381811061066b5761066b611d4d565b905060200281019061067d9190611d7c565b90506106ac6106926060830160408401611dba565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061070f575061070f6106c56040830160208401611dba565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561072657506107266106c56020830183611dba565b80156107ab57506107ab61073d60a0830183611efe565b61074c91600491600091611f63565b61075591611f8d565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6107e1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107eb8f82610dcf565b50600101610650565b505060005b610804600185611d3a565b8110156108c057600088888381811061081f5761081f611d4d565b90506020028101906108319190611d7c565b610842906080810190606001611dba565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146108b75785828151811061088957610889611d4d565b602002602001015161089a826103c9565b6108a49190611d3a565b925082156108b7576108b7818885610393565b506001016107f9565b5050506109a1565b8760005b8181101561099e57368b8b838181106108e7576108e7611d4d565b90506020028101906108f99190611d7c565b905061090e6106926060830160408401611dba565b8061092757506109276106c56040830160208401611dba565b801561093e575061093e6106c56020830183611dba565b8015610955575061095561073d60a0830183611efe565b61098b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109958d82610dcf565b506001016108cc565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166109fa576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a47576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610ab4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad89190611e8b565b905080821115610b1e576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161037c565b610b298484846110e5565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610b7c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610bbf576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161037c565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610c19576040519150601f19603f3d011682016040523d82523d6000602084013e610c1e565b606091505b50509050806103ba576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600003610c93576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610cec5780341015610ce8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610d59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7d9190611e8b565b905081811015610dc3576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161037c565b6103ba833330856111b9565b610de5610ddf6020830183611dba565b3b151590565b610e1b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003610e5b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610e706106926060850160408601611dba565b610e7b576000610e81565b82608001355b90506000610e9d610e986060860160408701611dba565b6103c9565b90506000610eb4610e986080870160608801611dba565b905082600003610eeb57610eeb610ed16060870160408801611dba565b610ee16040880160208901611dba565b87608001356113d3565b8460800135821015610f36576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161037c565b600080610f466020880188611dba565b73ffffffffffffffffffffffffffffffffffffffff1685610f6a60a08a018a611efe565b604051610f78929190611fd5565b60006040518083038185875af1925050503d8060008114610fb5576040519150601f19603f3d011682016040523d82523d6000602084013e610fba565b606091505b509150915081611005576000610fcf82611516565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037c9190612009565b600061101a610e9860808a0160608b01611dba565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961104b60208b018b611dba565b61105b60608c0160408d01611dba565b61106b60808d0160608e01611dba565b8c6080013589871161107d5786611087565b6110878a88611d3a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526103ba9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611594565b73ffffffffffffffffffffffffffffffffffffffff8416611206576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611253576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156112c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112e89190611e8b565b90506112f6828686866116a3565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611366573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138a9190611e8b565b6113949190611d3a565b146113cb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166113f357505050565b73ffffffffffffffffffffffffffffffffffffffff8216611440576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156114b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d99190611e8b565b10156103ba576114eb83836000611701565b6103ba83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611701565b606060448251101561155b57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611577600480855161156f9190611d3a565b859190611883565b90508080602001905181019061158d919061205a565b9392505050565b60006115f6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661199d9092919063ffffffff16565b9050805160001480611617575080806020019051810190611617919061211a565b6103ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161037c565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610b299085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611137565b8015806117a157506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561177b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061179f9190611e8b565b155b61182d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161037c565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526103ba9084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611137565b60608161189181601f612137565b10156118c9576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6118d38284612137565b8451101561190d576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561192c5760405191506000825260208201604052611994565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561196557805183526020928301920161194d565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60606119ac84846000856119b4565b949350505050565b606082471015611a46576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161037c565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611a6f919061214a565b60006040518083038185875af1925050503d8060008114611aac576040519150601f19603f3d011682016040523d82523d6000602084013e611ab1565b606091505b5091509150611ac287838387611acd565b979650505050505050565b60608315611b63578251600003611b5c5773ffffffffffffffffffffffffffffffffffffffff85163b611b5c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161037c565b50816119ac565b6119ac8383815115611b785781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037c9190612009565b60008083601f840112611bbe57600080fd5b50813567ffffffffffffffff811115611bd657600080fd5b602083019150836020828501011115611bee57600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114611c1757600080fd5b50565b600080600080600080600080600060c08a8c031215611c3857600080fd5b8935985060208a013567ffffffffffffffff80821115611c5757600080fd5b611c638d838e01611bac565b909a50985060408c0135915080821115611c7c57600080fd5b611c888d838e01611bac565b909850965060608c01359150611c9d82611bf5565b90945060808b0135935060a08b01359080821115611cba57600080fd5b818c0191508c601f830112611cce57600080fd5b813581811115611cdd57600080fd5b8d60208260051b8501011115611cf257600080fd5b6020830194508093505050509295985092959850929598565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561047c5761047c611d0b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611db057600080fd5b9190910192915050565b600060208284031215611dcc57600080fd5b813561158d81611bf5565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081526000611e3460e083018b8d611dd7565b8281036020840152611e47818a8c611dd7565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b600060208284031215611e9d57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b8015158114611c1757600080fd5b600060208284031215611ef357600080fd5b813561158d81611ed3565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611f3357600080fd5b83018035915067ffffffffffffffff821115611f4e57600080fd5b602001915036819003821315611bee57600080fd5b60008085851115611f7357600080fd5b83861115611f8057600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611fcd5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60005b83811015612000578181015183820152602001611fe8565b50506000910152565b6020815260008251806020840152612028816040850160208701611fe5565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60006020828403121561206c57600080fd5b815167ffffffffffffffff8082111561208457600080fd5b818401915084601f83011261209857600080fd5b8151818111156120aa576120aa611ea4565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156120f0576120f0611ea4565b8160405282815287602084870101111561210957600080fd5b611ac2836020830160208801611fe5565b60006020828403121561212c57600080fd5b815161158d81611ed3565b8082018082111561047c5761047c611d0b565b60008251611db0818460208701611fe556fea26469706673582212207350382fbd2bf2adc6c43553701befe52e0b9cf8287956370b709df838a95c8b64736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var GenericSwapFacet__factory = /** @class */ (function (_super) {
    __extends(GenericSwapFacet__factory, _super);
    function GenericSwapFacet__factory() {
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
    GenericSwapFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    GenericSwapFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    GenericSwapFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    GenericSwapFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    GenericSwapFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    GenericSwapFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    GenericSwapFacet__factory.bytecode = _bytecode;
    GenericSwapFacet__factory.abi = _abi;
    return GenericSwapFacet__factory;
}(ethers_1.ContractFactory));
exports.GenericSwapFacet__factory = GenericSwapFacet__factory;
