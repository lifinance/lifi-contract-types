"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HopFacetPacked__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_owner",
                type: "address",
                internalType: "address",
            },
            {
                name: "_wrapper",
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
        name: "decode_startBridgeTokensViaHopL1ERC20Packed",
        inputs: [
            {
                name: "_data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "",
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
                name: "",
                type: "tuple",
                internalType: "struct HopFacetOptimized.HopData",
                components: [
                    {
                        name: "bonderFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "amountOutMin",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "deadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "destinationAmountOutMin",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "destinationDeadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "hopBridge",
                        type: "address",
                        internalType: "contract IHopBridge",
                    },
                    {
                        name: "relayer",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "relayerFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "nativeFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "decode_startBridgeTokensViaHopL1NativePacked",
        inputs: [
            {
                name: "_data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "",
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
                name: "",
                type: "tuple",
                internalType: "struct HopFacetOptimized.HopData",
                components: [
                    {
                        name: "bonderFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "amountOutMin",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "deadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "destinationAmountOutMin",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "destinationDeadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "hopBridge",
                        type: "address",
                        internalType: "contract IHopBridge",
                    },
                    {
                        name: "relayer",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "relayerFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "nativeFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "decode_startBridgeTokensViaHopL2ERC20Packed",
        inputs: [
            {
                name: "_data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "",
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
                name: "",
                type: "tuple",
                internalType: "struct HopFacetOptimized.HopData",
                components: [
                    {
                        name: "bonderFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "amountOutMin",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "deadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "destinationAmountOutMin",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "destinationDeadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "hopBridge",
                        type: "address",
                        internalType: "contract IHopBridge",
                    },
                    {
                        name: "relayer",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "relayerFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "nativeFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "decode_startBridgeTokensViaHopL2NativePacked",
        inputs: [
            {
                name: "_data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "",
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
                name: "",
                type: "tuple",
                internalType: "struct HopFacetOptimized.HopData",
                components: [
                    {
                        name: "bonderFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "amountOutMin",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "deadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "destinationAmountOutMin",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "destinationDeadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "hopBridge",
                        type: "address",
                        internalType: "contract IHopBridge",
                    },
                    {
                        name: "relayer",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "relayerFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "nativeFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "encode_startBridgeTokensViaHopL1ERC20Packed",
        inputs: [
            {
                name: "transactionId",
                type: "bytes8",
                internalType: "bytes8",
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "sendingAssetId",
                type: "address",
                internalType: "address",
            },
            {
                name: "minAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "destinationAmountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "relayer",
                type: "address",
                internalType: "address",
            },
            {
                name: "relayerFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "hopBridge",
                type: "address",
                internalType: "address",
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
        name: "encode_startBridgeTokensViaHopL1NativePacked",
        inputs: [
            {
                name: "transactionId",
                type: "bytes8",
                internalType: "bytes8",
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "destinationAmountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "relayer",
                type: "address",
                internalType: "address",
            },
            {
                name: "relayerFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "hopBridge",
                type: "address",
                internalType: "address",
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
        name: "encode_startBridgeTokensViaHopL2ERC20Packed",
        inputs: [
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
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "sendingAssetId",
                type: "address",
                internalType: "address",
            },
            {
                name: "minAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "bonderFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "destinationAmountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "destinationDeadline",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "wrapper",
                type: "address",
                internalType: "address",
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
        name: "encode_startBridgeTokensViaHopL2NativePacked",
        inputs: [
            {
                name: "transactionId",
                type: "bytes8",
                internalType: "bytes8",
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "bonderFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountOutMin",
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
        name: "nativeBridge",
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
        name: "nativeExchangeAddress",
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
        name: "nativeHToken",
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
        name: "nativeL2CanonicalToken",
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
        name: "setApprovalForHopBridges",
        inputs: [
            {
                name: "bridges",
                type: "address[]",
                internalType: "address[]",
            },
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
        name: "startBridgeTokensViaHopL1ERC20Min",
        inputs: [
            {
                name: "transactionId",
                type: "bytes8",
                internalType: "bytes8",
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "sendingAssetId",
                type: "address",
                internalType: "address",
            },
            {
                name: "minAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "destinationAmountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "relayer",
                type: "address",
                internalType: "address",
            },
            {
                name: "relayerFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "hopBridge",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaHopL1ERC20Packed",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaHopL1NativeMin",
        inputs: [
            {
                name: "transactionId",
                type: "bytes8",
                internalType: "bytes8",
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "destinationAmountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "relayer",
                type: "address",
                internalType: "address",
            },
            {
                name: "relayerFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "hopBridge",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaHopL1NativePacked",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaHopL2ERC20Min",
        inputs: [
            {
                name: "transactionId",
                type: "bytes8",
                internalType: "bytes8",
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "sendingAssetId",
                type: "address",
                internalType: "address",
            },
            {
                name: "minAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "bonderFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "destinationAmountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "destinationDeadline",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "hopBridge",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaHopL2ERC20Packed",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaHopL2NativeMin",
        inputs: [
            {
                name: "transactionId",
                type: "bytes8",
                internalType: "bytes8",
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "bonderFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "destinationAmountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "destinationDeadline",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "hopBridge",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaHopL2NativePacked",
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
        name: "LiFiHopTransfer",
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
        name: "Invalid",
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
        name: "NullAddrIsNotAValidSpender",
        inputs: [],
    },
    {
        type: "error",
        name: "UnAuthorized",
        inputs: [],
    },
];
const _bytecode = "0x6101006040523480156200001257600080fd5b5060405162004654380380620046548339810160408190526200003591620002a9565b600080546001600160a01b0319166001600160a01b038481169190911790915581161515466001148015620000675750805b156200008657604051636dac6a0960e01b815260040160405180910390fd5b8062000094576000620000f9565b816001600160a01b0316631ee1bf676040518163ffffffff1660e01b8152600401602060405180830381865afa158015620000d3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000f99190620002e1565b6001600160a01b031660a052806200011357600062000178565b816001600160a01b031663fc6e3b3b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000152573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001789190620002e1565b6001600160a01b031660c0528062000192576000620001f7565b816001600160a01b0316639cd016056040518163ffffffff1660e01b8152600401602060405180830381865afa158015620001d1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001f79190620002e1565b6001600160a01b031660e052806200021157600062000276565b816001600160a01b031663e78cea926040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000250573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002769190620002e1565b6001600160a01b03166080525062000306915050565b80516001600160a01b0381168114620002a457600080fd5b919050565b60008060408385031215620002bd57600080fd5b620002c8836200028c565b9150620002d8602084016200028c565b90509250929050565b600060208284031215620002f457600080fd5b620002ff826200028c565b9392505050565b60805160a05160c05160e0516142ff62000355600039600081816103900152610921015260006102c501526000818161032701526108580152600081816101dd01526109be01526142ff6000f3fe6080604052600436106101a15760003560e01c806376e04bbc116100e1578063c5ae0fe61161008a578063e30c397811610064578063e30c397814610487578063e8bd0564146104b4578063f2fde38b146104d4578063fc1ebe3e146104f457600080fd5b8063c5ae0fe61461043f578063c5e04e3014610454578063cda5f3241461046757600080fd5b8063ad6607ff116100bb578063ad6607ff146103df578063bd6d15ca146103ff578063c18fa2451461041f57600080fd5b806376e04bbc1461035e5780637cccba6d1461037e5780638da5cb5b146103b257600080fd5b806333619a2d1161014e5780634bd751a8116101285780634bd751a8146102b357806354de26d9146102e75780636c225efe146103155780637200b8291461034957600080fd5b806333619a2d1461026b5780633c580fed146102735780634b06e05f1461029357600080fd5b80631a0b79bf1161017f5780631a0b79bf146101cb57806323452b9c1461022957806326a931351461023e57600080fd5b806304c5aa34146101a65780631223354c146101bb578063161be542146101c3575b600080fd5b6101b96101b4366004613aa9565b610514565b005b6101b961062f565b6101b9610800565b3480156101d757600080fd5b506101ff7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561023557600080fd5b506101b9610b56565b34801561024a57600080fd5b5061025e610259366004613b23565b610c20565b6040516102209190613c0a565b6101b9610f0a565b34801561027f57600080fd5b506101b961028e366004613c62565b611121565b34801561029f57600080fd5b506101b96102ae366004613cce565b61120f565b3480156102bf57600080fd5b506101ff7f000000000000000000000000000000000000000000000000000000000000000081565b3480156102f357600080fd5b50610307610302366004613d64565b611365565b604051610220929190613dd6565b34801561032157600080fd5b506101ff7f000000000000000000000000000000000000000000000000000000000000000081565b34801561035557600080fd5b506101b9611655565b34801561036a57600080fd5b506101b9610379366004613f2c565b61173b565b34801561038a57600080fd5b506101ff7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103be57600080fd5b506000546101ff9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156103eb57600080fd5b5061025e6103fa366004613fc4565b611871565b34801561040b57600080fd5b5061030761041a366004613d64565b611d49565b34801561042b57600080fd5b5061030761043a366004613d64565b6120b3565b34801561044b57600080fd5b506101b96123c3565b6101b9610462366004613b23565b61279c565b34801561047357600080fd5b5061025e610482366004613ff6565b6128d5565b34801561049357600080fd5b506001546101ff9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156104c057600080fd5b5061025e6104cf366004613cce565b612baa565b3480156104e057600080fd5b506101b96104ef366004614045565b612f41565b34801561050057600080fd5b5061030761050f366004613d64565b61309f565b6040517feea0d7b20000000000000000000000000000000000000000000000000000000081526004810187905273ffffffffffffffffffffffffffffffffffffffff8881166024830152346044830181905260648301889052608483018790524260a484015260c4830186905260e483018590529083169163eea0d7b29190610104016000604051808303818588803b1580156105b057600080fd5b505af11580156105c4573d6000803e3d6000fd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008c1681527fad635460888489be07731050101b47548c6a3831f2dc51f2b3545696d0b8afd79350602001915061061d9050565b60405180910390a15050505050505050565b61063e606c6058366000614062565b6106479161408c565b60601c63deace8f53461065f60246020366000614062565b610668916140d4565b60e01c61067a6020600c366000614062565b6106839161408c565b60601c3461069660346024366000614062565b61069f9161411a565b60801c6106af4262093a8061418f565b6106be60486034366000614062565b6106c79161408c565b60601c6106d960586048366000614062565b6106e29161411a565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08b901b168152600481019790975273ffffffffffffffffffffffffffffffffffffffff958616602488015260448701949094526064860192909252608485015290911660a483015260801c60c482015260e4016000604051808303818588803b15801561077457600080fd5b505af1158015610788573d6000803e3d6000fd5b507fad635460888489be07731050101b47548c6a3831f2dc51f2b3545696d0b8afd793506107c19250600c915060049050366000614062565b6107ca916141a8565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1565b6000610810602460203684614062565b610819916140d4565b60e01c9050600061082e604460343684614062565b6108379161411a565b60801c6fffffffffffffffffffffffffffffffff16905060008260011490507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b1580156108be57600080fd5b505af11580156108d2573d6000803e3d6000fd5b50506040517f91695586000000000000000000000000000000000000000000000000000000008152600060048201819052600160248301523460448301526064820187905242608483015293507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1692506391695586915060a4016020604051808303816000875af1158015610981573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a591906141ee565b905073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663a6bd1b33856109f36020600c366000614062565b6109fc9161408c565b60601c84610a0f60346024366000614062565b610a189161411a565b60801c87610a265788610a29565b60005b88610a4057610a3b4262093a8061418f565b610a43565b60005b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b168152600481019690965273ffffffffffffffffffffffffffffffffffffffff909416602486015260448501929092526064840152608483015260a482015260c401600060405180830381600087803b158015610ac857600080fd5b505af1158015610adc573d6000803e3d6000fd5b507fad635460888489be07731050101b47548c6a3831f2dc51f2b3545696d0b8afd79250610b139150600c90506004366000614062565b610b1c916141a8565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a150505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610ba7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610bf6576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b606063ffffffff861115610cbb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084015b60405180910390fd5b6fffffffffffffffffffffffffffffffff851115610d5b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f64657374696e6174696f6e416d6f756e744f75744d696e2076616c756520706160448201527f7373656420746f6f2062696720746f2066697420696e2075696e7431323800006064820152608401610cb2565b6fffffffffffffffffffffffffffffffff831115610dfb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f72656c617965724665652076616c75652070617373656420746f6f206269672060448201527f746f2066697420696e2075696e743132380000000000000000000000000000006064820152608401610cb2565b50604080517f1223354c0000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff000000000000000000000000000000000000000000000000989098166024890152606096871b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116602c8a015260e09690961b7fffffffff000000000000000000000000000000000000000000000000000000001688820152608094851b7fffffffffffffffffffffffffffffffff0000000000000000000000000000000090811660448a015293871b861660548901529190931b9091166068860152921b1660788301528051606c818403018152608c909201905290565b6000610f1a604860383684614062565b610f239161411a565b60801c9050610f51333083610f3d60386024366000614062565b610f469161408c565b60601c92919061338a565b610f606090607c366000614062565b610f699161408c565b60601c63deace8f5610f8060246020366000614062565b610f89916140d4565b60e01c610f9b6020600c366000614062565b610fa49161408c565b60601c84610fb760586048366000614062565b610fc09161411a565b60801c610fd04262093a8061418f565b610fdf606c6058366000614062565b610fe89161408c565b60601c610ffa607c606c366000614062565b6110039161411a565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019790975273ffffffffffffffffffffffffffffffffffffffff958616602488015260448701949094526064860192909252608485015290911660a483015260801c60c482015260e401600060405180830381600087803b15801561109657600080fd5b505af11580156110aa573d6000803e3d6000fd5b507fad635460888489be07731050101b47548c6a3831f2dc51f2b3545696d0b8afd792506110e19150600c90506004366000614062565b6110ea916141a8565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff163314611172576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8260005b81811015611207576111f584848381811061119357611193614207565b90506020020160208101906111a89190614045565b8787848181106111ba576111ba614207565b90506020020160208101906111cf9190614045565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff613450565b806111ff81614236565b915050611176565b505050505050565b61123173ffffffffffffffffffffffffffffffffffffffff871633308861338a565b73ffffffffffffffffffffffffffffffffffffffff811663deace8f5888a888861125e4262093a8061418f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b168152600481019590955273ffffffffffffffffffffffffffffffffffffffff9384166024860152604485019290925260648401526084830152861660a482015260c4810185905260e401600060405180830381600087803b1580156112ec57600080fd5b505af1158015611300573d6000803e3d6000fd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008c1681527fad635460888489be07731050101b47548c6a3831f2dc51f2b3545696d0b8afd79250602001905060405180910390a1505050505050505050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526114326040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b606c8310156114c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e6774680000000000000000000000000000000000000000000000006064820152608401610cb2565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526115906040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b61159e600c60048789614062565b6115a7916141a8565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526115d96020600c8789614062565b6115e29161408c565b60601c60a08301526115f8602460208789614062565b611601916140d4565b60e090811c90830152611618603460248789614062565b6116219161411a565b60801c6060820152611637606c60588789614062565b6116409161408c565b60601c60a082015290925090505b9250929050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146116a7576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b61175d73ffffffffffffffffffffffffffffffffffffffff881633308961338a565b6040517feea0d7b20000000000000000000000000000000000000000000000000000000081526004810189905273ffffffffffffffffffffffffffffffffffffffff8a811660248301526044820188905260648201879052608482018690524260a483015260c4820185905260e4820184905282169063eea0d7b29061010401600060405180830381600087803b1580156117f757600080fd5b505af115801561180b573d6000803e3d6000fd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008d1681527fad635460888489be07731050101b47548c6a3831f2dc51f2b3545696d0b8afd79250602001905060405180910390a150505050505050505050565b606063ffffffff891115611907576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e74333200000000000000006064820152608401610cb2565b6fffffffffffffffffffffffffffffffff8711156119a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f616d6f756e742076616c75652070617373656420746f6f2062696720746f206660448201527f697420696e2075696e74313238000000000000000000000000000000000000006064820152608401610cb2565b6fffffffffffffffffffffffffffffffff861115611a47576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f626f6e6465724665652076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e74313238000000000000000000000000000000006064820152608401610cb2565b6fffffffffffffffffffffffffffffffff851115611ae7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f616d6f756e744f75744d696e2076616c75652070617373656420746f6f20626960448201527f6720746f2066697420696e2075696e74313238000000000000000000000000006064820152608401610cb2565b6fffffffffffffffffffffffffffffffff841115611b87576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f64657374696e6174696f6e416d6f756e744f75744d696e2076616c756520706160448201527f7373656420746f6f2062696720746f2066697420696e2075696e7431323800006064820152608401610cb2565b63ffffffff831115611c1b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f64657374696e6174696f6e446561646c696e652076616c75652070617373656460448201527f20746f6f2062696720746f2066697420696e2075696e743332000000000000006064820152608401610cb2565b50604080517fc5ae0fe60000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff0000000000000000000000000000000000000000000000009b909b1660248c01527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060609a8b1b8116602c8d01527fffffffff0000000000000000000000000000000000000000000000000000000060e09a8b1b81168d840152988b1b811660448d01527fffffffffffffffffffffffffffffffff00000000000000000000000000000000608098891b811660588e015296881b871660688d015294871b861660788c01529290951b90931660888901529190941b909216609886015290921b16609c8301528051808303609001815260b0909201905290565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810191909152611e166040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b6090831015611ea7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e6774680000000000000000000000000000000000000000000000006064820152608401610cb2565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810191909152611f746040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b611f82600c60048789614062565b611f8b916141a8565b7fffffffffffffffff000000000000000000000000000000000000000000000000168252611fbd6020600c8789614062565b611fc69161408c565b60601c60a0830152611fdc602460208789614062565b611fe5916140d4565b60e090811c90830152611ffc603860248789614062565b6120059161408c565b60601c608083015261201b604860388789614062565b6120249161411a565b60801c60c083015261203a605860488789614062565b6120439161411a565b60801c8152612056606860588789614062565b61205f9161411a565b60801c6020820152612075607860688789614062565b61207e9161411a565b60801c6060820152612094607c60788789614062565b61209d916140d4565b60e01c60808201526116376090607c8789614062565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526121806040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b6090831015612211576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e6774680000000000000000000000000000000000000000000000006064820152608401610cb2565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526122de6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b6122ec600c60048789614062565b6122f5916141a8565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526123276020600c8789614062565b6123309161408c565b60601c60a0830152612346602460208789614062565b61234f916140d4565b60e090811c90830152612366603860248789614062565b61236f9161408c565b60601c6080830152612385604860388789614062565b61238e9161411a565b60801c60c08301526123a4605860488789614062565b6123ad9161411a565b60801c60608201526116376090607c8789614062565b60006123d3602460203684614062565b6123dc916140d4565b60e01c905060006123f1604860383684614062565b6123fa9161411a565b60801c9050600061240f606860583684614062565b6124189161411a565b60801c90506001831460006124316090607c3684614062565b61243a9161408c565b60601c9050612454333086610f3d60386024366000614062565b60008173ffffffffffffffffffffffffffffffffffffffff16639cd016056040518163ffffffff1660e01b8152600401602060405180830381865afa1580156124a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124c5919061426e565b6040517f916955860000000000000000000000000000000000000000000000000000000081526000600482015260016024820152604481018790526064810186905242608482015273ffffffffffffffffffffffffffffffffffffffff919091169063916955869060a4016020604051808303816000875af115801561254f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061257391906141ee565b90508173ffffffffffffffffffffffffffffffffffffffff1663e78cea926040518163ffffffff1660e01b8152600401602060405180830381865afa1580156125c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125e4919061426e565b73ffffffffffffffffffffffffffffffffffffffff1663a6bd1b338761260f6020600c366000614062565b6126189161408c565b60601c8461262b60586048366000614062565b6126349161411a565b60801c8861265c5761264b60786068366000614062565b6126549161411a565b60801c61265f565b60005b8961268457612673607c6078366000614062565b61267c916140d4565b60e01c612687565b60005b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b168152600481019690965273ffffffffffffffffffffffffffffffffffffffff909416602486015260448501929092526064840152608483015260a482015260c401600060405180830381600087803b15801561270c57600080fd5b505af1158015612720573d6000803e3d6000fd5b507fad635460888489be07731050101b47548c6a3831f2dc51f2b3545696d0b8afd792506127579150600c90506004366000614062565b612760916141a8565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff811663deace8f534878982896127ca4262093a8061418f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b168152600481019590955273ffffffffffffffffffffffffffffffffffffffff9384166024860152604485019290925260648401526084830152871660a482015260c4810186905260e4016000604051808303818588803b15801561285757600080fd5b505af115801561286b573d6000803e3d6000fd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008b1681527fad635460888489be07731050101b47548c6a3831f2dc51f2b3545696d0b8afd7935060200191506128c49050565b60405180910390a150505050505050565b606063ffffffff84111561296b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e74333200000000000000006064820152608401610cb2565b6fffffffffffffffffffffffffffffffff831115612a0b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f626f6e6465724665652076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e74313238000000000000000000000000000000006064820152608401610cb2565b6fffffffffffffffffffffffffffffffff821115612aab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f616d6f756e744f75744d696e2076616c75652070617373656420746f6f20626960448201527f6720746f2066697420696e2075696e74313238000000000000000000000000006064820152608401610cb2565b604080517f161be5420000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff000000000000000000000000000000000000000000000000881660248201527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606088901b16602c8201527fffffffff0000000000000000000000000000000000000000000000000000000060e087901b16918101919091527fffffffffffffffffffffffffffffffff00000000000000000000000000000000608085811b8216604484015284901b166054820152606401604051602081830303815290604052905095945050505050565b606063ffffffff881115612c40576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e74333200000000000000006064820152608401610cb2565b6fffffffffffffffffffffffffffffffff861115612ce0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f616d6f756e742076616c75652070617373656420746f6f2062696720746f206660448201527f697420696e2075696e74313238000000000000000000000000000000000000006064820152608401610cb2565b6fffffffffffffffffffffffffffffffff851115612d80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f64657374696e6174696f6e416d6f756e744f75744d696e2076616c756520706160448201527f7373656420746f6f2062696720746f2066697420696e2075696e7431323800006064820152608401610cb2565b6fffffffffffffffffffffffffffffffff831115612e20576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f72656c617965724665652076616c75652070617373656420746f6f206269672060448201527f746f2066697420696e2075696e743132380000000000000000000000000000006064820152608401610cb2565b50604080517f33619a2d0000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff0000000000000000000000000000000000000000000000009a909a1660248b0152606098891b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116602c8c015260e09890981b7fffffffff00000000000000000000000000000000000000000000000000000000168a82015295881b871660448a0152608094851b7fffffffffffffffffffffffffffffffff0000000000000000000000000000000090811660588b015293851b841660688a015291871b8616607889015290921b16608c86015290921b16609c8301528051609081840301815260b0909201905290565b60005473ffffffffffffffffffffffffffffffffffffffff163314612f92576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116612fdf576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361302e576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915261316c6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b60448310156131fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e6774680000000000000000000000000000000000000000000000006064820152608401610cb2565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526132ca6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b6132d8600c60048789614062565b6132e1916141a8565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526133136020600c8789614062565b61331c9161408c565b60601c60a0830152613332602460208789614062565b61333b916140d4565b60e090811c90830152613352603460248789614062565b61335b9161411a565b60801c815261336e604460348789614062565b6133779161411a565b60801c6020820152909590945092505050565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080613449576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152606401610cb2565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff831661347057505050565b73ffffffffffffffffffffffffffffffffffffffff82166134bd576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015613532573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061355691906141ee565b10156135935761356883836000613598565b61359383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff613598565b505050565b80158061363857506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015613612573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061363691906141ee565b155b6136c4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610cb2565b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564908401526135939286929160009161378f91851690849061383c565b90508051600014806137b05750808060200190518101906137b0919061428b565b613593576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610cb2565b606061384b8484600085613855565b90505b9392505050565b6060824710156138e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610cb2565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161391091906142ad565b60006040518083038185875af1925050503d806000811461394d576040519150601f19603f3d011682016040523d82523d6000602084013e613952565b606091505b509150915061396387838387613970565b925050505b949350505050565b60608315613a065782516000036139ff5773ffffffffffffffffffffffffffffffffffffffff85163b6139ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610cb2565b5081613968565b6139688383815115613a1b5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb29190613c0a565b80357fffffffffffffffff00000000000000000000000000000000000000000000000081168114613a7f57600080fd5b919050565b73ffffffffffffffffffffffffffffffffffffffff81168114613aa657600080fd5b50565b600080600080600080600080610100898b031215613ac657600080fd5b613acf89613a4f565b97506020890135613adf81613a84565b965060408901359550606089013594506080890135935060a0890135925060c0890135915060e0890135613b1281613a84565b809150509295985092959890939650565b600080600080600080600060e0888a031215613b3e57600080fd5b613b4788613a4f565b96506020880135613b5781613a84565b955060408801359450606088013593506080880135613b7581613a84565b925060a0880135915060c0880135613b8c81613a84565b8091505092959891949750929550565b60005b83811015613bb7578181015183820152602001613b9f565b50506000910152565b60008151808452613bd8816020860160208601613b9c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061384e6020830184613bc0565b60008083601f840112613c2f57600080fd5b50813567ffffffffffffffff811115613c4757600080fd5b6020830191508360208260051b850101111561164e57600080fd5b60008060008060408587031215613c7857600080fd5b843567ffffffffffffffff80821115613c9057600080fd5b613c9c88838901613c1d565b90965094506020870135915080821115613cb557600080fd5b50613cc287828801613c1d565b95989497509550505050565b60008060008060008060008060006101208a8c031215613ced57600080fd5b613cf68a613a4f565b985060208a0135613d0681613a84565b975060408a0135965060608a0135613d1d81613a84565b955060808a0135945060a08a0135935060c08a0135613d3b81613a84565b925060e08a013591506101008a0135613d5381613a84565b809150509295985092959850929598565b60008060208385031215613d7757600080fd5b823567ffffffffffffffff80821115613d8f57600080fd5b818501915085601f830112613da357600080fd5b813581811115613db257600080fd5b866020828501011115613dc457600080fd5b60209290920196919550909350505050565b6000610140808352845181840152602085015181610160850152613dfe610280850182613bc0565b91505060408501517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec084830301610180850152613e3b8282613bc0565b9150506060850151613e666101a085018273ffffffffffffffffffffffffffffffffffffffff169052565b5060808581015173ffffffffffffffffffffffffffffffffffffffff9081166101c086015260a08088015182166101e087015260c08089015161020088015260e0808a0151610220890152610100808b015115156102408a0152610120808c015115156102608b01528a516020808c01919091528b01516040808c01919091528b01516060808c01919091528b01518a880152958a0151848a0152928901518416828901529088015190921682870152908601518186015285015190840152905061384e565b6000806000806000806000806000806101408b8d031215613f4c57600080fd5b613f558b613a4f565b995060208b0135613f6581613a84565b985060408b0135975060608b0135613f7c81613a84565b965060808b0135955060a08b0135945060c08b0135935060e08b013592506101008b013591506101208b0135613fb181613a84565b809150509295989b9194979a5092959850565b6000806000806000806000806000806101408b8d031215613fe457600080fd5b8a35995060208b0135613f6581613a84565b600080600080600060a0868803121561400e57600080fd5b61401786613a4f565b9450602086013561402781613a84565b94979496505050506040830135926060810135926080909101359150565b60006020828403121561405757600080fd5b813561384e81613a84565b6000808585111561407257600080fd5b8386111561407f57600080fd5b5050820193919092039150565b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000081358181169160148510156140cc5780818660140360031b1b83161692505b505092915050565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156140cc5760049490940360031b84901b1690921692915050565b7fffffffffffffffffffffffffffffffff0000000000000000000000000000000081358181169160108510156140cc5760109490940360031b84901b1690921692915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156141a2576141a2614160565b92915050565b7fffffffffffffffff00000000000000000000000000000000000000000000000081358181169160088510156140cc5760089490940360031b84901b1690921692915050565b60006020828403121561420057600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361426757614267614160565b5060010190565b60006020828403121561428057600080fd5b815161384e81613a84565b60006020828403121561429d57600080fd5b8151801515811461384e57600080fd5b600082516142bf818460208701613b9c565b919091019291505056fea2646970667358221220c044b4f3e1e35319d838772b80dbde1ea39589a97244455f4dc3603166e6848064736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class HopFacetPacked__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_owner, _wrapper, overrides) {
        return super.deploy(_owner, _wrapper, overrides || {});
    }
    getDeployTransaction(_owner, _wrapper, overrides) {
        return super.getDeployTransaction(_owner, _wrapper, overrides || {});
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
exports.HopFacetPacked__factory = HopFacetPacked__factory;
Object.defineProperty(HopFacetPacked__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(HopFacetPacked__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=HopFacetPacked__factory.js.map