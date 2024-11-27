"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcrossFacetPackedV3__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_spokePool",
                type: "address",
                internalType: "contract IAcrossSpokePool",
            },
            {
                name: "_wrappedNative",
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
        name: "decode_startBridgeTokensViaAcrossV3ERC20Packed",
        inputs: [
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "bridgeData",
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
                name: "acrossData",
                type: "tuple",
                internalType: "struct AcrossFacetV3.AcrossV3Data",
                components: [
                    {
                        name: "receiverAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "refundAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "receivingAssetId",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "outputAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "exclusiveRelayer",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "quoteTimestamp",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "fillDeadline",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "exclusivityDeadline",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "message",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "decode_startBridgeTokensViaAcrossV3NativePacked",
        inputs: [
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "bridgeData",
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
                name: "acrossData",
                type: "tuple",
                internalType: "struct AcrossFacetV3.AcrossV3Data",
                components: [
                    {
                        name: "receiverAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "refundAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "receivingAssetId",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "outputAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "exclusiveRelayer",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "quoteTimestamp",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "fillDeadline",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "exclusivityDeadline",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "message",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "encode_startBridgeTokensViaAcrossV3ERC20Packed",
        inputs: [
            {
                name: "_parameters",
                type: "tuple",
                internalType: "struct AcrossFacetPackedV3.PackedParameters",
                components: [
                    {
                        name: "transactionId",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "receiver",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "destinationChainId",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "receivingAssetId",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "outputAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "exclusiveRelayer",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "quoteTimestamp",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "fillDeadline",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "exclusivityDeadline",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "message",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
            {
                name: "sendingAssetId",
                type: "address",
                internalType: "address",
            },
            {
                name: "inputAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "encode_startBridgeTokensViaAcrossV3NativePacked",
        inputs: [
            {
                name: "_parameters",
                type: "tuple",
                internalType: "struct AcrossFacetPackedV3.PackedParameters",
                components: [
                    {
                        name: "transactionId",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "receiver",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "destinationChainId",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "receivingAssetId",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "outputAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "exclusiveRelayer",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "quoteTimestamp",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "fillDeadline",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "exclusivityDeadline",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "message",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        outputs: [
            {
                name: "",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "executeCallAndWithdraw",
        inputs: [
            {
                name: "_callTo",
                type: "address",
                internalType: "address",
            },
            {
                name: "_callData",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_assetAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "_to",
                type: "address",
                internalType: "address",
            },
            {
                name: "_amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
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
        name: "setApprovalForBridge",
        inputs: [
            {
                name: "tokensToApprove",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "spokePool",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IAcrossSpokePool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "startBridgeTokensViaAcrossV3ERC20Min",
        inputs: [
            {
                name: "_parameters",
                type: "tuple",
                internalType: "struct AcrossFacetPackedV3.PackedParameters",
                components: [
                    {
                        name: "transactionId",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "receiver",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "destinationChainId",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "receivingAssetId",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "outputAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "exclusiveRelayer",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "quoteTimestamp",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "fillDeadline",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "exclusivityDeadline",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "message",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
            {
                name: "sendingAssetId",
                type: "address",
                internalType: "address",
            },
            {
                name: "inputAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaAcrossV3ERC20Packed",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaAcrossV3NativeMin",
        inputs: [
            {
                name: "_parameters",
                type: "tuple",
                internalType: "struct AcrossFacetPackedV3.PackedParameters",
                components: [
                    {
                        name: "transactionId",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "receiver",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "destinationChainId",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "receivingAssetId",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "outputAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "exclusiveRelayer",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "quoteTimestamp",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "fillDeadline",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "exclusivityDeadline",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "message",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaAcrossV3NativePacked",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
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
        name: "wrappedNative",
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
        name: "CallExecutedAndFundsWithdrawn",
        inputs: [],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiAcrossTransfer",
        inputs: [
            {
                name: "_transactionId",
                type: "bytes8",
                indexed: false,
                internalType: "bytes8",
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
        name: "NativeAssetTransferFailed",
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
        name: "UnAuthorized",
        inputs: [],
    },
    {
        type: "error",
        name: "WithdrawFailed",
        inputs: [],
    },
];
const _bytecode = "0x60c06040523480156200001157600080fd5b506040516200317338038062003173833981016040819052620000349162000079565b600080546001600160a01b0319166001600160a01b039283161790559182166080521660a052620000cd565b6001600160a01b03811681146200007657600080fd5b50565b6000806000606084860312156200008f57600080fd5b83516200009c8162000060565b6020850151909350620000af8162000060565b6040850151909250620000c28162000060565b809150509250925092565b60805160a05161304f6200012460003960008181610338015281816114de015261168e015260008181610287015281816107ad01528181610b2f015281816112b5015281816114a5015261164a015261304f6000f3fe60806040526004361061010e5760003560e01c80638da5cb5b116100a5578063defdfdac11610074578063e30c397811610059578063e30c3978146102f9578063eb6d3a1114610326578063f2fde38b1461035a57600080fd5b8063defdfdac146102de578063df834e15146102f157600080fd5b80638da5cb5b14610223578063afdac3d614610275578063cc41fe54146102a9578063cd48728d146102c957600080fd5b806354e97ec9116100e157806354e97ec9146101a05780636df23fa2146101ce5780637200b829146101ee5780637a5c7bab1461020357600080fd5b80631458d7ad1461011357806323452b9c146101355780633dc6aa4a1461014a5780634c47864214610180575b600080fd5b34801561011f57600080fd5b5061013361012e366004612466565b61037a565b005b34801561014157600080fd5b506101336104b4565b34801561015657600080fd5b5061016a6101653660046124fd565b61057e565b60405161017791906125a0565b60405180910390f35b34801561018c57600080fd5b5061013361019b3660046125ba565b610725565b3480156101ac57600080fd5b506101c06101bb36600461262f565b610809565b60405161017792919061277c565b3480156101da57600080fd5b506101336101e93660046128b0565b610af6565b3480156101fa57600080fd5b50610133610c9a565b34801561020f57600080fd5b5061016a61021e3660046128b0565b610d80565b34801561022f57600080fd5b506000546102509073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610177565b34801561028157600080fd5b506102507f000000000000000000000000000000000000000000000000000000000000000081565b3480156102b557600080fd5b506101c06102c436600461262f565b610fd3565b3480156102d557600080fd5b50610133611240565b6101336102ec3660046124fd565b61148e565b610133611633565b34801561030557600080fd5b506001546102509073ffffffffffffffffffffffffffffffffffffffff1681565b34801561033257600080fd5b506102507f000000000000000000000000000000000000000000000000000000000000000081565b34801561036657600080fd5b50610133610375366004612907565b611843565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103cb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008673ffffffffffffffffffffffffffffffffffffffff1686866040516103f4929190612931565b6000604051808303816000865af19150503d8060008114610431576040519150601f19603f3d011682016040523d82523d6000602084013e610436565b606091505b5050905080156104795761044b8484846119a1565b6040517fdfbe65d77c5440a078a2a1d95803d06b4a5f85b26ba3ec87bc9b421781e8dec190600090a16104ab565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610505576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610554576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b606063ffffffff61059483830160408501612941565b67ffffffffffffffff161115610631576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084015b60405180910390fd5b7fdf834e150000000000000000000000000000000000000000000000000000000082356106646040850160208601612907565b60601b84604001602081019061067a9190612941565b60e01b61068d6080870160608801612907565b60601b60808701356106a560c0890160a08a01612907565b60601b6106b860e08a0160c08b0161296b565b60e01b8960e00160208101906106ce919061296b565b60e01b6106e36101208c016101008d0161296b565b60e01b6106f46101208d018d612991565b60405160200161070f9c9b9a999897969594939291906129f6565b6040516020818303038152906040529050919050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610776576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b81811015610804576107f283838381811061079657610796612ac5565b90506020020160208101906107ab9190612907565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119d2565b806107fc81612af4565b915050610779565b505050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810191909152604080516101208101825260008082526020820181905291810182905260608082018390526080820183905260a0820183905260c0820183905260e0820192909252610100810191909152609c831015610937576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e203135362900000000000000000000000000000000000000000000006064820152608401610628565b610945600c60048587612b53565b61094e91612b7d565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526109806020600c8587612b53565b61098991612bc5565b60601c60a083015261099f603460208587612b53565b6109a891612bc5565b60601c60808301526109be604460348587612b53565b6109c791612c0b565b60801c60c08301526109dd604860448587612b53565b6109e691612c51565b60e090811c908301526109fd605c60488587612b53565b610a0691612bc5565b60601c6040820152610a1c607c605c8587612b53565b610a2591612c97565b6060820152610a386090607c8587612b53565b610a4191612bc5565b60601c6080820152610a57609460908587612b53565b610a6091612c51565b60e01c60a0820152610a76609860948587612b53565b610a7f91612c51565b60e01c60c0820152610a95609c60988587612b53565b610a9e91612c51565b60e090811c90820152610ab483609c8187612b53565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050506101008201525b9250929050565b610b1873ffffffffffffffffffffffffffffffffffffffff8316333084611b15565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b93923233610b656040870160208801612907565b85610b766080890160608a01612907565b8660808a0135610b8c60608c0160408d01612941565b610b9c60c08d0160a08e01612907565b610bac60e08e0160c08f0161296b565b8d60e0016020810190610bbf919061296b565b8e610100016020810190610bd3919061296b565b8f806101200190610be49190612991565b6040518e63ffffffff1660e01b8152600401610c0c9d9c9b9a99989796959493929190612d1d565b600060405180830381600087803b158015610c2657600080fd5b505af1158015610c3a573d6000803e3d6000fd5b50506040517fffffffffffffffff00000000000000000000000000000000000000000000000086351681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339250602001905060405180910390a1505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610cec576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b606063ffffffff610d9685830160408701612941565b67ffffffffffffffff161115610e2e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e74333200000000000000006064820152608401610628565b6fffffffffffffffffffffffffffffffff821115610ece576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f696e707574416d6f756e742076616c75652070617373656420746f6f2062696760448201527f20746f2066697420696e2075696e7431323800000000000000000000000000006064820152608401610628565b7fcd48728d000000000000000000000000000000000000000000000000000000008435610f016040870160208801612907565b60601b8560601b8560801b886040016020810190610f1f9190612941565b60e01b610f3260808b0160608c01612907565b60601b60808b0135610f4a60c08d0160a08e01612907565b60601b610f5d60e08e0160c08f0161296b565b60e01b8d60e0016020810190610f73919061296b565b60e01b8e610100016020810190610f8a919061296b565b60e01b8f806101200190610f9e9190612991565b604051602001610fbb9e9d9c9b9a99989796959493929190612e1c565b60405160208183030381529060405290509392505050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810191909152604080516101208101825260008082526020820181905291810182905260608082018390526080820183905260a0820183905260c0820183905260e08201929092526101008101919091526078831015611101576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e3d2031323029000000000000000000000000000000000000000000006064820152608401610628565b61110f600c60048587612b53565b61111891612b7d565b7fffffffffffffffff00000000000000000000000000000000000000000000000016825261114a6020600c8587612b53565b61115391612bc5565b60601c60a0830152611169602460208587612b53565b61117291612c51565b60e090811c90830152611189603860248587612b53565b61119291612bc5565b60601c60408201526111a8605860388587612b53565b6111b191612c97565b60608201526111c4606c60588587612b53565b6111cd91612bc5565b60601c60808201526111e36070606c8587612b53565b6111ec91612c51565b60e01c60a0820152611202607460708587612b53565b61120b91612c51565b60e01c60c0820152611221607860748587612b53565b61122a91612c51565b60e090811c90820152610ab48360788187612b53565b6000611250603460203684612b53565b61125991612bc5565b60601c9050600061126e604460343684612b53565b61127791612c0b565b60801c905061129e73ffffffffffffffffffffffffffffffffffffffff8316333084611b15565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b939232336112ea6020600c366000612b53565b6112f391612bc5565b60601c85611306605c6048366000612b53565b61130f91612bc5565b60601c86611322607c605c366000612b53565b61132b91612c97565b61133a60486044366000612b53565b61134391612c51565b60e01c6113556090607c366000612b53565b61135e91612bc5565b60601c61137060946090366000612b53565b61137991612c51565b60e01c61138b60986094366000612b53565b61139491612c51565b60e01c6113a6609c6098366000612b53565b6113af91612c51565b60e01c6113c036609c816000612b53565b6040518e63ffffffff1660e01b81526004016113e89d9c9b9a99989796959493929190612d1d565b600060405180830381600087803b15801561140257600080fd5b505af1158015611416573d6000803e3d6000fd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c133925061144d9150600c90506004366000612b53565b61145691612b7d565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b93923234336114dc6040860160208701612907565b7f000000000000000000000000000000000000000000000000000000000000000061150d6080880160608901612907565b34608089013561152360608b0160408c01612941565b61153360c08c0160a08d01612907565b61154360e08d0160c08e0161296b565b6115546101008e0160e08f0161296b565b8d610100016020810190611568919061296b565b8e8061012001906115799190612991565b6040518f63ffffffff1660e01b81526004016115a19d9c9b9a99989796959493929190612d1d565b6000604051808303818588803b1580156115ba57600080fd5b505af11580156115ce573d6000803e3d6000fd5b50506040517fffffffffffffffff00000000000000000000000000000000000000000000000085351681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c133935060200191506116289050565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b93923234336116806020600c366000612b53565b61168991612bc5565b60601c7f00000000000000000000000000000000000000000000000000000000000000006116bc60386024366000612b53565b6116c591612bc5565b60601c346116d860586038366000612b53565b6116e191612c97565b6116f060246020366000612b53565b6116f991612c51565b60e01c61170b606c6058366000612b53565b61171491612bc5565b60601c6117266070606c366000612b53565b61172f91612c51565b60e01c61174160746070366000612b53565b61174a91612c51565b60e01c61175c60786074366000612b53565b61176591612c51565b60e01c611776366078816000612b53565b6040518f63ffffffff1660e01b815260040161179e9d9c9b9a99989796959493929190612d1d565b6000604051808303818588803b1580156117b757600080fd5b505af11580156117cb573d6000803e3d6000fd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13393506118049250600c915060049050366000612b53565b61180d91612b7d565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff163314611894576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166118e1576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603611930576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff8316156119c857610804838383611bdb565b6108048282611d5d565b73ffffffffffffffffffffffffffffffffffffffff83166119f257505050565b73ffffffffffffffffffffffffffffffffffffffff8216611a3f576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611ab4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ad89190612fc2565b101561080457611aea83836000611e87565b61080483837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611e87565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611bd4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152606401610628565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611c28576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611c75576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611ce2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d069190612fc2565b905080821115611d4c576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610628565b611d57848484612087565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611daa576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611ded576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610628565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611e47576040519150601f19603f3d011682016040523d82523d6000602084013e611e4c565b606091505b5050905080610804576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b801580611f2757506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611f01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f259190612fc2565b155b611fb3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610628565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108049084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526120dd565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108049084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401612005565b600061213f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166121ec9092919063ffffffff16565b90508051600014806121605750808060200190518101906121609190612fdb565b610804576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610628565b60606121fb8484600085612203565b949350505050565b606082471015612295576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610628565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516122be9190612ffd565b60006040518083038185875af1925050503d80600081146122fb576040519150601f19603f3d011682016040523d82523d6000602084013e612300565b606091505b50915091506123118783838761231c565b979650505050505050565b606083156123b25782516000036123ab5773ffffffffffffffffffffffffffffffffffffffff85163b6123ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610628565b50816121fb565b6121fb83838151156123c75781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062891906125a0565b803573ffffffffffffffffffffffffffffffffffffffff8116811461241f57600080fd5b919050565b60008083601f84011261243657600080fd5b50813567ffffffffffffffff81111561244e57600080fd5b602083019150836020828501011115610aef57600080fd5b60008060008060008060a0878903121561247f57600080fd5b612488876123fb565b9550602087013567ffffffffffffffff8111156124a457600080fd5b6124b089828a01612424565b90965094506124c39050604088016123fb565b92506124d1606088016123fb565b9150608087013590509295509295509295565b600061014082840312156124f757600080fd5b50919050565b60006020828403121561250f57600080fd5b813567ffffffffffffffff81111561252657600080fd5b6121fb848285016124e4565b60005b8381101561254d578181015183820152602001612535565b50506000910152565b6000815180845261256e816020860160208601612532565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006125b36020830184612556565b9392505050565b600080602083850312156125cd57600080fd5b823567ffffffffffffffff808211156125e557600080fd5b818501915085601f8301126125f957600080fd5b81358181111561260857600080fd5b8660208260051b850101111561261d57600080fd5b60209290920196919550909350505050565b6000806020838503121561264257600080fd5b823567ffffffffffffffff81111561265957600080fd5b61266585828601612424565b90969095509350505050565b600061012073ffffffffffffffffffffffffffffffffffffffff835116845260208301516126b7602086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060408301516126df604086018273ffffffffffffffffffffffffffffffffffffffff169052565b50606083015160608501526080830151612711608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a083015161272960a086018263ffffffff169052565b5060c083015161274160c086018263ffffffff169052565b5060e083015161275960e086018263ffffffff169052565b5061010080840151828287015261277283870182612556565b9695505050505050565b6040815282516040820152600060208401516101408060608501526127a5610180850183612556565b915060408601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08584030160808601526127e08382612556565b925050606086015161280a60a086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608086015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060a086015173ffffffffffffffffffffffffffffffffffffffff811660e08601525060c0860151610100818187015260e08801519150610120828188015281890151925061287e8488018415159052565b8801518015156101608801529250612894915050565b5082810360208401526128a78185612671565b95945050505050565b6000806000606084860312156128c557600080fd5b833567ffffffffffffffff8111156128dc57600080fd5b6128e8868287016124e4565b9350506128f7602085016123fb565b9150604084013590509250925092565b60006020828403121561291957600080fd5b6125b3826123fb565b81818437506000910190815290565b8183823760009101908152919050565b60006020828403121561295357600080fd5b813567ffffffffffffffff811681146125b357600080fd5b60006020828403121561297d57600080fd5b813563ffffffff811681146125b357600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126129c657600080fd5b83018035915067ffffffffffffffff8211156129e157600080fd5b602001915036819003821315610aef57600080fd5b7fffffffff000000000000000000000000000000000000000000000000000000008d811682527fffffffffffffffff0000000000000000000000000000000000000000000000008d1660048301527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008c8116600c8401528b821660208401528a81166024840152603883018a905288166058830152868116606c83015285811660708301528416607482015260008284607884013750600091016078019081529b9a5050505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612b4c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b60008085851115612b6357600080fd5b83861115612b7057600080fd5b5050820193919092039150565b7fffffffffffffffff0000000000000000000000000000000000000000000000008135818116916008851015612bbd5780818660080360031b1b83161692505b505092915050565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008135818116916014851015612bbd5760149490940360031b84901b1690921692915050565b7fffffffffffffffffffffffffffffffff000000000000000000000000000000008135818116916010851015612bbd5760109490940360031b84901b1690921692915050565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612bbd5760049490940360031b84901b1690921692915050565b80356020831015612cce577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b165b92915050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8e16815273ffffffffffffffffffffffffffffffffffffffff8d16602082015273ffffffffffffffffffffffffffffffffffffffff8c16604082015273ffffffffffffffffffffffffffffffffffffffff8b1660608201528960808201528860a082015267ffffffffffffffff881660c082015273ffffffffffffffffffffffffffffffffffffffff871660e082015263ffffffff8616610100820152612de261012082018663ffffffff169052565b63ffffffff84166101408201526101806101608201526000612e0961018083018486612cd4565b9f9e505050505050505050505050505050565b7fffffffff000000000000000000000000000000000000000000000000000000008f811682527fffffffffffffffff0000000000000000000000000000000000000000000000008f1660048301527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008e8116600c8401528d1660208301527fffffffffffffffffffffffffffffffff000000000000000000000000000000008c1660348301528a16604482015260007fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008a16604883015288605c830152612f27607c8301897fffffffffffffffffffffffffffffffffffffffff000000000000000000000000169052565b7fffffffff00000000000000000000000000000000000000000000000000000000871660908301527fffffffff00000000000000000000000000000000000000000000000000000000861660948301527fffffffff0000000000000000000000000000000000000000000000000000000085166098830152612fad609c83018486612922565b90509f9e505050505050505050505050505050565b600060208284031215612fd457600080fd5b5051919050565b600060208284031215612fed57600080fd5b815180151581146125b357600080fd5b6000825161300f818460208701612532565b919091019291505056fea2646970667358221220fba7b7c703f51aaa42637d5b62ba6d6c1c1bccd7e9f77ebb1331a31384a7474f64736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class AcrossFacetPackedV3__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_spokePool, _wrappedNative, _owner, overrides) {
        return super.deploy(_spokePool, _wrappedNative, _owner, overrides || {});
    }
    getDeployTransaction(_spokePool, _wrappedNative, _owner, overrides) {
        return super.getDeployTransaction(_spokePool, _wrappedNative, _owner, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.AcrossFacetPackedV3__factory = AcrossFacetPackedV3__factory;
Object.defineProperty(AcrossFacetPackedV3__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(AcrossFacetPackedV3__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=AcrossFacetPackedV3__factory.js.map