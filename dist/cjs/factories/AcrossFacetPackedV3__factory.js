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
                        name: "outputAmountPercent",
                        type: "uint64",
                        internalType: "uint64",
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
                        name: "outputAmountPercent",
                        type: "uint64",
                        internalType: "uint64",
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
                        name: "depositor",
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
                        name: "depositor",
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
                        name: "depositor",
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
                        name: "depositor",
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
const _bytecode = "0x60c06040523480156200001157600080fd5b506040516200330f3803806200330f833981016040819052620000349162000079565b600080546001600160a01b0319166001600160a01b039283161790559182166080521660a052620000cd565b6001600160a01b03811681146200007657600080fd5b50565b6000806000606084860312156200008f57600080fd5b83516200009c8162000060565b6020850151909350620000af8162000060565b6040850151909250620000c28162000060565b809150509250925092565b60805160a0516131eb620001246000396000818161033801528181610513015261195101526000818161025a015281816104cb015281816107bc0152818161137b015281816115a701526118f301526131eb6000f3fe60806040526004361061010e5760003560e01c8063afdac3d6116100a5578063dd08173411610074578063e30c397811610059578063e30c3978146102f9578063eb6d3a1114610326578063f2fde38b1461035a57600080fd5b8063dd081734146102d1578063df834e15146102f157600080fd5b8063afdac3d614610248578063cc41fe541461027c578063cd48728d1461029c578063d24c2325146102b157600080fd5b806354e97ec9116100e157806354e97ec91461017d5780637200b829146101b4578063808d859c146101c95780638da5cb5b146101f657600080fd5b80631458d7ad146101135780631dc3017e1461013557806323452b9c146101485780634c4786421461015d575b600080fd5b34801561011f57600080fd5b5061013361012e36600461274e565b61037a565b005b6101336101433660046127e5565b6104b4565b34801561015457600080fd5b5061013361066a565b34801561016957600080fd5b5061013361017836600461281a565b610734565b34801561018957600080fd5b5061019d61019836600461288f565b610818565b6040516101ab929190612a60565b60405180910390f35b3480156101c057600080fd5b50610133610b32565b3480156101d557600080fd5b506101e96101e4366004612b94565b610c18565b6040516101ab9190612beb565b34801561020257600080fd5b506000546102239073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101ab565b34801561025457600080fd5b506102237f000000000000000000000000000000000000000000000000000000000000000081565b34801561028857600080fd5b5061019d61029736600461288f565b611071565b3480156102a857600080fd5b50610133611306565b3480156102bd57600080fd5b506101336102cc366004612b94565b61156e565b3480156102dd57600080fd5b506101e96102ec3660046127e5565b611723565b6101336118dc565b34801561030557600080fd5b506001546102239073ffffffffffffffffffffffffffffffffffffffff1681565b34801561033257600080fd5b506102237f000000000000000000000000000000000000000000000000000000000000000081565b34801561036657600080fd5b50610133610375366004612c05565b611b06565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103cb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008673ffffffffffffffffffffffffffffffffffffffff1686866040516103f4929190612c2f565b6000604051808303816000865af19150503d8060008114610431576040519150601f19603f3d011682016040523d82523d6000602084013e610436565b606091505b5050905080156104795761044b848484611c64565b6040517fdfbe65d77c5440a078a2a1d95803d06b4a5f85b26ba3ec87bc9b421781e8dec190600090a16104ab565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b939232346105016060850160408601612c05565b6105116040860160208701612c05565b7f000000000000000000000000000000000000000000000000000000000000000061054260a0880160808901612c05565b3460a089013561055860808b0160608c01612c3f565b61056860e08c0160c08d01612c05565b6105796101008d0160e08e01612c69565b61058b6101208e016101008f01612c69565b8d61012001602081019061059f9190612c69565b8e8061014001906105b09190612c8f565b6040518f63ffffffff1660e01b81526004016105d89d9c9b9a99989796959493929190612d3d565b6000604051808303818588803b1580156105f157600080fd5b505af1158015610605573d6000803e3d6000fd5b50506040517fffffffffffffffff00000000000000000000000000000000000000000000000085351681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339350602001915061065f9050565b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106bb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661070a576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610785576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b81811015610813576108018383838181106107a5576107a5612e3c565b90506020020160208101906107ba9190612c05565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611c95565b8061080b81612e6b565b915050610788565b505050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810191909152604080516101408101825260008082526020820181905291810182905260608082018390526080820183905260a0820183905260c0820183905260e0820183905261010082019290925261012081019190915260b0831015610953576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e3d20313736290000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b610961600c60048587612eca565b61096a91612ef4565b7fffffffffffffffff00000000000000000000000000000000000000000000000016825261099c6020600c8587612eca565b6109a591612f3c565b60601c60a08301526109bb603460208587612eca565b6109c491612f3c565b60601c60208201526109da604860348587612eca565b6109e391612f3c565b60601c60808301526109f9605860488587612eca565b610a0291612f82565b60801c60c0830152610a18605c60588587612eca565b610a2191612fc8565b60e090811c90830152610a386070605c8587612eca565b610a4191612f3c565b60601c6040820152610a57609060708587612eca565b610a609161300e565b6060820152610a7360a460908587612eca565b610a7c91612f3c565b60601c60a0820152610a9260a860a48587612eca565b610a9b91612fc8565b60e01c60c0820152610ab160ac60a88587612eca565b610aba91612fc8565b60e090811c90820152610ad160b060ac8587612eca565b610ada91612fc8565b60e01c610100820152610af08360b08187612eca565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050506101208201525b9250929050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610b84576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b606063ffffffff610c2e60808601868401612c3f565b67ffffffffffffffff161115610cc6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e7433320000000000000000606482015260840161094a565b6fffffffffffffffffffffffffffffffff821115610d66576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f696e707574416d6f756e742076616c75652070617373656420746f6f2062696760448201527f20746f2066697420696e2075696e743132380000000000000000000000000000606482015260840161094a565b60007fcd48728d000000000000000000000000000000000000000000000000000000008535610d9b6040880160208901612c05565b60601b876040016020810190610db19190612c05565b604080517fffffffff0000000000000000000000000000000000000000000000000000000090951660208601527fffffffffffffffff00000000000000000000000000000000000000000000000090931660248501527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000918216602c850152606090811b8216928401929092529086901b166054820152606801604051602081830303815290604052905060008360801b866060016020810190610e759190612c3f565b60e01b610e8860a0890160808a01612c05565b6040517fffffffffffffffffffffffffffffffff000000000000000000000000000000009390931660208401527fffffffff0000000000000000000000000000000000000000000000000000000091909116603083015260601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016603482015260a08701356048820152606801604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290506000610f5860e0880160c08901612c05565b60601b610f6c610100890160e08a01612c69565b60e01b610f816101208a016101008b01612c69565b60e01b610f966101408b016101208c01612c69565b604080517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000090951660208601527fffffffff000000000000000000000000000000000000000000000000000000009384166034860152918316603885015260e01b91909116603c83015201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290508282826110426101408b018b612c8f565b60405160200161105695949392919061304a565b60405160208183030381529060405293505050509392505050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810191909152604080516101408101825260008082526020820181905291810182905260608082018390526080820183905260a0820183905260c0820183905260e08201839052610100820192909252610120810191909152608c8310156111a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e3d203134302900000000000000000000000000000000000000000000606482015260840161094a565b6111b5600c60048587612eca565b6111be91612ef4565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526111f06020600c8587612eca565b6111f991612f3c565b60601c60a083015261120f603860348587612eca565b61121891612fc8565b60e090811c9083015261122f603460208587612eca565b61123891612f3c565b60601c602082015261124e604c60388587612eca565b61125791612f3c565b60601c604082015261126d606c604c8587612eca565b6112769161300e565b60608201526112896080606c8587612eca565b61129291612f3c565b60601c60a08201526112a8608460808587612eca565b6112b191612fc8565b60e01c60c08201526112c7608860848587612eca565b6112d091612fc8565b60e090811c908201526112e7608c60888587612eca565b6112f091612fc8565b60e01c610100820152610af083608c8187612eca565b6000611316604860343684612eca565b61131f91612f3c565b60601c90506000611334605860483684612eca565b61133d91612f82565b60801c905061136473ffffffffffffffffffffffffffffffffffffffff8316333084611dcc565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b9392326113af60346020366000612eca565b6113b891612f3c565b60601c6113ca6020600c366000612eca565b6113d391612f3c565b60601c856113e66070605c366000612eca565b6113ef91612f3c565b60601c8661140260906070366000612eca565b61140b9161300e565b61141a605c6058366000612eca565b61142391612fc8565b60e01c61143560a46090366000612eca565b61143e91612f3c565b60601c61145060a860a4366000612eca565b61145991612fc8565b60e01c61146b60ac60a8366000612eca565b61147491612fc8565b60e01c61148660b060ac366000612eca565b61148f91612fc8565b60e01c6114a03660b0816000612eca565b6040518e63ffffffff1660e01b81526004016114c89d9c9b9a99989796959493929190612d3d565b600060405180830381600087803b1580156114e257600080fd5b505af11580156114f6573d6000803e3d6000fd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c133925061152d9150600c90506004366000612eca565b61153691612ef4565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a15050565b61159073ffffffffffffffffffffffffffffffffffffffff8316333084611dcc565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b9392326115dc6060860160408701612c05565b6115ec6040870160208801612c05565b856115fd60a0890160808a01612c05565b8660a08a013561161360808c0160608d01612c3f565b61162360e08d0160c08e01612c05565b6116346101008e0160e08f01612c69565b8d6101000160208101906116489190612c69565b8e61012001602081019061165c9190612c69565b8f80610140019061166d9190612c8f565b6040518e63ffffffff1660e01b81526004016116959d9c9b9a99989796959493929190612d3d565b600060405180830381600087803b1580156116af57600080fd5b505af11580156116c3573d6000803e3d6000fd5b50506040517fffffffffffffffff00000000000000000000000000000000000000000000000086351681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339250602001905060405180910390a1505050565b606063ffffffff61173960808401848401612c3f565b67ffffffffffffffff1611156117d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e7433320000000000000000606482015260840161094a565b7fdf834e150000000000000000000000000000000000000000000000000000000082356118046040850160208601612c05565b60601b84604001602081019061181a9190612c05565b60601b8560600160208101906118309190612c3f565b60e01b61184360a0880160808901612c05565b60601b60a088013561185b60e08a0160c08b01612c05565b60601b61186f6101008b0160e08c01612c69565b60e01b6118846101208c016101008d01612c69565b60e01b6118996101408d016101208e01612c69565b60e01b6118aa6101408e018e612c8f565b6040516020016118c69d9c9b9a9998979695949392919061309a565b6040516020818303038152906040529050919050565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b9392323461192860346020366000612eca565b61193191612f3c565b60601c6119436020600c366000612eca565b61194c91612f3c565b60601c7f000000000000000000000000000000000000000000000000000000000000000061197f604c6038366000612eca565b61198891612f3c565b60601c3461199b606c604c366000612eca565b6119a49161300e565b6119b360386034366000612eca565b6119bc91612fc8565b60e01c6119ce6080606c366000612eca565b6119d791612f3c565b60601c6119e960846080366000612eca565b6119f291612fc8565b60e01c611a0460886084366000612eca565b611a0d91612fc8565b60e01c611a1f608c6088366000612eca565b611a2891612fc8565b60e01c611a3936608c816000612eca565b6040518f63ffffffff1660e01b8152600401611a619d9c9b9a99989796959493929190612d3d565b6000604051808303818588803b158015611a7a57600080fd5b505af1158015611a8e573d6000803e3d6000fd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339350611ac79250600c915060049050366000612eca565b611ad091612ef4565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff163314611b57576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611ba4576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603611bf3576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff831615611c8b57610813838383611e92565b6108138282612014565b73ffffffffffffffffffffffffffffffffffffffff8316611cb557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611d02576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611d77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d9b919061315e565b10156108135761081383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61213e565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611e8b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c4544000000000000000000000000604482015260640161094a565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611edf576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611f2c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611f99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fbd919061315e565b905080821115612003576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161094a565b61200e8484846122ac565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216612061576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156120a4576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161094a565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146120fe576040519150601f19603f3d011682016040523d82523d6000602084013e612103565b606091505b5050905080610813576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526121ca8482612302565b61200e5760405173ffffffffffffffffffffffffffffffffffffffff84166024820152600060448201526122a29085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526123c5565b61200e84826123c5565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108139084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401612220565b60008060008473ffffffffffffffffffffffffffffffffffffffff168460405161232c9190613177565b6000604051808303816000865af19150503d8060008114612369576040519150601f19603f3d011682016040523d82523d6000602084013e61236e565b606091505b50915091508180156123985750805115806123985750808060200190518101906123989190613193565b80156123ba575073ffffffffffffffffffffffffffffffffffffffff85163b15155b925050505b92915050565b6000612427826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166124d49092919063ffffffff16565b90508051600014806124485750808060200190518101906124489190613193565b610813576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161094a565b60606124e384846000856124eb565b949350505050565b60608247101561257d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161094a565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516125a69190613177565b60006040518083038185875af1925050503d80600081146125e3576040519150601f19603f3d011682016040523d82523d6000602084013e6125e8565b606091505b50915091506125f987838387612604565b979650505050505050565b6060831561269a5782516000036126935773ffffffffffffffffffffffffffffffffffffffff85163b612693576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161094a565b50816124e3565b6124e383838151156126af5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094a9190612beb565b803573ffffffffffffffffffffffffffffffffffffffff8116811461270757600080fd5b919050565b60008083601f84011261271e57600080fd5b50813567ffffffffffffffff81111561273657600080fd5b602083019150836020828501011115610b2b57600080fd5b60008060008060008060a0878903121561276757600080fd5b612770876126e3565b9550602087013567ffffffffffffffff81111561278c57600080fd5b61279889828a0161270c565b90965094506127ab9050604088016126e3565b92506127b9606088016126e3565b9150608087013590509295509295509295565b600061016082840312156127df57600080fd5b50919050565b6000602082840312156127f757600080fd5b813567ffffffffffffffff81111561280e57600080fd5b6124e3848285016127cc565b6000806020838503121561282d57600080fd5b823567ffffffffffffffff8082111561284557600080fd5b818501915085601f83011261285957600080fd5b81358181111561286857600080fd5b8660208260051b850101111561287d57600080fd5b60209290920196919550909350505050565b600080602083850312156128a257600080fd5b823567ffffffffffffffff8111156128b957600080fd5b6128c58582860161270c565b90969095509350505050565b60005b838110156128ec5781810151838201526020016128d4565b50506000910152565b6000815180845261290d8160208601602086016128d1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b805173ffffffffffffffffffffffffffffffffffffffff16825260006101406020830151612985602086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060408301516129ad604086018273ffffffffffffffffffffffffffffffffffffffff169052565b506060830151606085015260808301516129d3608086018267ffffffffffffffff169052565b5060a08301516129fb60a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c0830151612a1360c086018263ffffffff169052565b5060e0830151612a2b60e086018263ffffffff169052565b506101008381015163ffffffff169085015261012080840151818601839052612a56838701826128f5565b9695505050505050565b604081528251604082015260006020840151610140806060850152612a896101808501836128f5565b915060408601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0858403016080860152612ac483826128f5565b9250506060860151612aee60a086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608086015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060a086015173ffffffffffffffffffffffffffffffffffffffff811660e08601525060c0860151610100818187015260e088015191506101208281880152818901519250612b628488018415159052565b8801518015156101608801529250612b78915050565b508281036020840152612b8b818561293f565b95945050505050565b600080600060608486031215612ba957600080fd5b833567ffffffffffffffff811115612bc057600080fd5b612bcc868287016127cc565b935050612bdb602085016126e3565b9150604084013590509250925092565b602081526000612bfe60208301846128f5565b9392505050565b600060208284031215612c1757600080fd5b612bfe826126e3565b81818437506000910190815290565b8183823760009101908152919050565b600060208284031215612c5157600080fd5b813567ffffffffffffffff81168114612bfe57600080fd5b600060208284031215612c7b57600080fd5b813563ffffffff81168114612bfe57600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612cc457600080fd5b83018035915067ffffffffffffffff821115612cdf57600080fd5b602001915036819003821315610b2b57600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8e16815273ffffffffffffffffffffffffffffffffffffffff8d16602082015273ffffffffffffffffffffffffffffffffffffffff8c16604082015273ffffffffffffffffffffffffffffffffffffffff8b1660608201528960808201528860a082015267ffffffffffffffff881660c082015273ffffffffffffffffffffffffffffffffffffffff871660e082015263ffffffff8616610100820152612e0261012082018663ffffffff169052565b63ffffffff84166101408201526101806101608201526000612e2961018083018486612cf4565b9f9e505050505050505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612ec3577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b60008085851115612eda57600080fd5b83861115612ee757600080fd5b5050820193919092039150565b7fffffffffffffffff0000000000000000000000000000000000000000000000008135818116916008851015612f345780818660080360031b1b83161692505b505092915050565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008135818116916014851015612f345760149490940360031b84901b1690921692915050565b7fffffffffffffffffffffffffffffffff000000000000000000000000000000008135818116916010851015612f345760109490940360031b84901b1690921692915050565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612f345760049490940360031b84901b1690921692915050565b803560208310156123bf577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b6000865161305c818460208b016128d1565b865190830190613070818360208b016128d1565b8651910190613083818360208a016128d1565b018385823760009301928352509095945050505050565b7fffffffff000000000000000000000000000000000000000000000000000000008e811682527fffffffffffffffff0000000000000000000000000000000000000000000000008e1660048301527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008d8116600c8401528c811660208401528b821660348401528a81166038840152604c83018a90528816606c83015286811660808301528581166084830152841660888201526000612e29608c83018486612c20565b60006020828403121561317057600080fd5b5051919050565b600082516131898184602087016128d1565b9190910192915050565b6000602082840312156131a557600080fd5b81518015158114612bfe57600080fdfea264697066735822122071ad5d110a74e4e15523c4219dd241482e0f4d6cd36d7ac39582d5499773eafb64736f6c63430008110033";
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