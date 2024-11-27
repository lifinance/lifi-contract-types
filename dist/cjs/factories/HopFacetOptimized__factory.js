"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HopFacetOptimized__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "setApprovalForBridges",
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
        name: "startBridgeTokensViaHopL1ERC20",
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
                name: "_hopData",
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
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaHopL1Native",
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
                name: "_hopData",
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
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaHopL2ERC20",
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
                name: "_hopData",
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
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaHopL2Native",
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
                name: "_hopData",
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
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapAndStartBridgeTokensViaHopL1ERC20",
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
            {
                name: "_hopData",
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
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapAndStartBridgeTokensViaHopL1Native",
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
            {
                name: "_hopData",
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
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapAndStartBridgeTokensViaHopL2ERC20",
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
            {
                name: "_hopData",
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
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapAndStartBridgeTokensViaHopL2Native",
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
            {
                name: "_hopData",
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
        name: "OnlyContractOwner",
        inputs: [],
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50613080806100206000396000f3fe6080604052600436106100965760003560e01c806342afe79a116100695780638d03f4561161004e5780638d03f45614610129578063ca360ae01461013c578063d40e64cc1461014f57600080fd5b806342afe79a1461010357806355c99cd81461011657600080fd5b806303add8c31461009b5780630680ded4146100b0578063082bc047146100d05780630b4cb5d8146100e3575b600080fd5b6100ae6100a93660046126a7565b610162565b005b3480156100bc57600080fd5b506100ae6100cb36600461274a565b6102bf565b6100ae6100de3660046126a7565b610362565b3480156100ef57600080fd5b506100ae6100fe3660046126a7565b6103c7565b6100ae610111366004612908565b610508565b6100ae6101243660046126a7565b610672565b6100ae610137366004612908565b610749565b6100ae61014a366004612908565b6107d8565b6100ae61015d366004612908565b6108a9565b61017260c0820160a08301612a4d565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f56101a061010084013560c0860135612aa0565b60e08501356101b560c0870160a08801612a4d565b8660c00135866060013587608001358860c00160208101906101d79190612a4d565b60405160e089811b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482019790975273ffffffffffffffffffffffffffffffffffffffff958616602482015260448101949094526064840192909252608483015290911660a48201529085013560c482015260e4015b6000604051808303818588803b15801561026b57600080fd5b505af115801561027f573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516102b39190612b60565b60405180910390a15050565b6102c76109d6565b60005b8381101561035b576103498383838181106102e7576102e7612cb3565b90506020020160208101906102fc9190612a4d565b86868481811061030e5761030e612cb3565b90506020020160208101906103239190612a4d565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610a4b565b8061035381612ce2565b9150506102ca565b5050505050565b61038161037560a0840160808501612a4d565b33308560c00135610b93565b61039160c0820160a08301612a4d565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f561010083013560e08501356101b560c0870160a08801612a4d565b6103da61037560a0840160808501612a4d565b6103ea60c0820160a08301612a4d565b73ffffffffffffffffffffffffffffffffffffffff1663eea0d7b260e084013561041a60c0860160a08701612a4d565b604080517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152600481019390935273ffffffffffffffffffffffffffffffffffffffff909116602483015260c08601356044830152843560648301526020850135608483015284013560a4820152606084013560c4820152608084013560e482015261010401600060405180830381600087803b1580156104c157600080fd5b505af11580156104d5573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516102b39190612b60565b61052384600001518560c00151858533866101000135610dad565b60c08086019190915261053b90820160a08301612a4d565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f58261010001358660e001518760a001518860c00151866060013587608001358860c00160208101906105889190612a4d565b60405160e089811b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482019790975273ffffffffffffffffffffffffffffffffffffffff958616602482015260448101949094526064840192909252608483015290911660a48201529085013560c482015260e4015b6000604051808303818588803b15801561061c57600080fd5b505af1158015610630573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516106649190612d88565b60405180910390a150505050565b61068260c0820160a08301612a4d565b73ffffffffffffffffffffffffffffffffffffffff1663eea0d7b260c0840180359060e0860135906106b79060a08801612a4d565b604080517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b168152600481019390935273ffffffffffffffffffffffffffffffffffffffff909116602483015260c08701356044830152853560648301526020860135608483015285013560a4820152606085013560c4820152608085013560e482015261010401610252565b61076484600001518560c00151858533866101000135610dad565b60c08086019190915261077c90820160a08301612a4d565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f58261010001358660c001516107ac9190612aa0565b8660e001518760a001518860c00151866060013587608001358860c00160208101906105889190612a4d565b6107ed84600001518560c00151858533610f4d565b60c08086019190915261080590820160a08301612a4d565b60c085015160e086015160a0870151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019390935273ffffffffffffffffffffffffffffffffffffffff918216602484015260448301849052853560648401526020860135608484015285013560a4830152606085013560c4830152608085013560e4830152929092169163eea0d7b2919061010401610603565b6108be84600001518560c00151858533610f4d565b60c0808601919091526108d690820160a08301612a4d565b60e085015160a086015160c0870151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501526044840191909152843560648401526020850135608484015284013560a4830152606084013560c4830152608084013560e4830152919091169063eea0d7b29061010401600060405180830381600087803b15801561098f57600080fd5b505af11580156109a3573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516106649190612d88565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610a49576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b73ffffffffffffffffffffffffffffffffffffffff8316610a6b57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610ab8576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610b2d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b519190612e9a565b1015610b8e57610b6383836000611090565b610b8e83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611090565b505050565b73ffffffffffffffffffffffffffffffffffffffff8416610be0576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c2d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610c9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc29190612e9a565b9050610cd082868686611290565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610d40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d649190612e9a565b610d6e9190612eb3565b14610da5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b600083808203610de9576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610df8600185612eb3565b818110610e0757610e07612cb3565b9050602002810190610e199190612ec6565b610e2a906080810190606001612a4d565b90506000610e37826112f4565b905073ffffffffffffffffffffffffffffffffffffffff8216610e6157610e5e3482612eb3565b90505b6000610e6d89896113ad565b9050610e7989896114b9565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610eb4818b8b85611526565b600083610ec0866112f4565b610eca9190612eb3565b905073ffffffffffffffffffffffffffffffffffffffff8516610ef457610ef18882612eb3565b90505b8b811015610f3d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b600082808203610f89576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610f98600185612eb3565b818110610fa757610fa7612cb3565b9050602002810190610fb99190612ec6565b610fca906080810190606001612a4d565b90506000610fd7826112f4565b905073ffffffffffffffffffffffffffffffffffffffff821661100157610ffe3482612eb3565b90505b600061100d88886113ad565b905061101988886114b9565b6110268a8989898561191c565b600082611032856112f4565b61103c9190612eb3565b905089811015611082576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610f34565b9a9950505050505050505050565b80158061113057506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561110a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061112e9190612e9a565b155b6111bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610f34565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b8e9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611be5565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112ee9085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161120e565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff8216156113a5576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561137c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a09190612e9a565b6113a7565b475b92915050565b60608160008167ffffffffffffffff8111156113cb576113cb6127b6565b6040519080825280602002602001820160405280156113f4578160200160208202803683370190505b5090506000805b838110156114ae5786868281811061141557611415612cb3565b90506020028101906114279190612ec6565b611438906080810190606001612a4d565b9150611443826112f4565b83828151811061145557611455612cb3565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166114a6573483828151811061148e5761148e612cb3565b602002602001018181516114a29190612eb3565b9052505b6001016113fb565b509095945050505050565b60005b81811015610b8e57368383838181106114d7576114d7612cb3565b90506020028101906114e99190612ec6565b90506114fb60e0820160c08301612f04565b1561151d5761151d6115136060830160408401612a4d565b8260800135611cf4565b506001016114bc565b602084015160408501518491849184908360018114611835576000868661154e600185612eb3565b81811061155d5761155d612cb3565b905060200281019061156f9190612ec6565b611580906080810190606001612a4d565b9050600089815b8181101561172d57368d8d838181106115a2576115a2612cb3565b90506020028101906115b49190612ec6565b90506115e36115c96060830160408401612a4d565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061164657506116466115fc6040830160208401612a4d565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561165d575061165d6115fc6020830183612a4d565b80156116e257506116e261167460a0830183612f21565b61168391600491600091612f86565b61168c91612fb0565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611718576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516117249082611e6a565b50600101611587565b505060005b61173d600185612eb3565b81101561182d57600089898381811061175857611758612cb3565b905060200281019061176a9190612ec6565b61177b906080810190606001612a4d565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611824578682815181106117c2576117c2612cb3565b60200260200101516117d3826112f4565b6117dd9190612eb3565b9250600073ffffffffffffffffffffffffffffffffffffffff821615611804576000611806565b865b9050831561182257611822828a61181d8488612eb3565b612148565b505b50600101611732565b505050611910565b8760005b8181101561190d57368b8b8381811061185457611854612cb3565b90506020028101906118669190612ec6565b905061187b6115c96060830160408401612a4d565b8061189457506118946115fc6040830160208401612a4d565b80156118ab57506118ab6115fc6020830183612a4d565b80156118c257506118c261167460a0830183612f21565b6118f8576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516119049082611e6a565b50600101611839565b50505b50505050505050505050565b838383838260018114611b0f5760008585611938600185612eb3565b81811061194757611947612cb3565b90506020028101906119599190612ec6565b61196a906080810190606001612a4d565b9050600089815b81811015611a4357368d8d8381811061198c5761198c612cb3565b905060200281019061199e9190612ec6565b90506119b36115c96060830160408401612a4d565b806119cc57506119cc6115fc6040830160208401612a4d565b80156119e357506119e36115fc6020830183612a4d565b80156119fa57506119fa61167460a0830183612f21565b611a30576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611a3a8f82611e6a565b50600101611971565b505060005b611a53600185612eb3565b81101561182d576000888883818110611a6e57611a6e612cb3565b9050602002810190611a809190612ec6565b611a91906080810190606001612a4d565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611b0657858281518110611ad857611ad8612cb3565b6020026020010151611ae9826112f4565b611af39190612eb3565b92508215611b0657611b06818885612148565b50600101611a48565b8760005b8181101561190d57368b8b83818110611b2e57611b2e612cb3565b9050602002810190611b409190612ec6565b9050611b556115c96060830160408401612a4d565b80611b6e5750611b6e6115fc6040830160208401612a4d565b8015611b855750611b856115fc6020830183612a4d565b8015611b9c5750611b9c61167460a0830183612f21565b611bd2576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611bdc8d82611e6a565b50600101611b13565b6000611c47826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166121799092919063ffffffff16565b9050805160001480611c68575080806020019051810190611c689190612ff8565b610b8e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610f34565b80600003611d2e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611d875780341015611d83576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611df4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e189190612e9a565b905081811015611e5e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610f34565b610b8e83333085610b93565b611e80611e7a6020830183612a4d565b3b151590565b611eb6576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611ef6576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611f0b6115c96060850160408601612a4d565b611f16576000611f1c565b82608001355b90506000611f38611f336060860160408701612a4d565b6112f4565b90506000611f4f611f336080870160608801612a4d565b905082600003611f8657611f86611f6c6060870160408801612a4d565b611f7c6040880160208901612a4d565b8760800135610a4b565b8460800135821015611fd1576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610f34565b600080611fe16020880188612a4d565b73ffffffffffffffffffffffffffffffffffffffff168561200560a08a018a612f21565b604051612013929190613015565b60006040518083038185875af1925050503d8060008114612050576040519150601f19603f3d011682016040523d82523d6000602084013e612055565b606091505b5091509150816120685761206881612190565b600061207d611f3360808a0160608b01612a4d565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896120ae60208b018b612a4d565b6120be60608c0160408d01612a4d565b6120ce60808d0160608e01612a4d565b8c608001358987116120e057866120ea565b6120ea8a88612eb3565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83161561216f57610b8e83838361219a565b610b8e8282612316565b60606121888484600085612440565b949350505050565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff83166121e7576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216612234576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156122a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122c59190612e9a565b90508082111561230b576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610f34565b6112ee848484612559565b73ffffffffffffffffffffffffffffffffffffffff8216612363576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156123a6576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610f34565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114612400576040519150601f19603f3d011682016040523d82523d6000602084013e612405565b606091505b5050905080610b8e576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060824710156124d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610f34565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516124fb9190613025565b60006040518083038185875af1925050503d8060008114612538576040519150601f19603f3d011682016040523d82523d6000602084013e61253d565b606091505b509150915061254e878383876125af565b979650505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b8e9084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161120e565b6060831561264557825160000361263e5773ffffffffffffffffffffffffffffffffffffffff85163b61263e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610f34565b5081612188565b612188838381511561265a5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f349190613037565b600061012082840312156126a157600080fd5b50919050565b6000806101408084860312156126bc57600080fd5b833567ffffffffffffffff8111156126d357600080fd5b84018086038213156126e457600080fd5b92506126f59050846020850161268e565b90509250929050565b60008083601f84011261271057600080fd5b50813567ffffffffffffffff81111561272857600080fd5b6020830191508360208260051b850101111561274357600080fd5b9250929050565b6000806000806040858703121561276057600080fd5b843567ffffffffffffffff8082111561277857600080fd5b612784888389016126fe565b9096509450602087013591508082111561279d57600080fd5b506127aa878288016126fe565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715612809576128096127b6565b60405290565b600082601f83011261282057600080fd5b813567ffffffffffffffff8082111561283b5761283b6127b6565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715612881576128816127b6565b8160405283815286602085880101111561289a57600080fd5b836020870160208301376000602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff811681146128dc57600080fd5b50565b80356128ea816128ba565b919050565b80151581146128dc57600080fd5b80356128ea816128ef565b600080600080610160858703121561291f57600080fd5b843567ffffffffffffffff8082111561293757600080fd5b90860190610140828903121561294c57600080fd5b6129546127e5565b8235815260208301358281111561296a57600080fd5b6129768a82860161280f565b60208301525060408301358281111561298e57600080fd5b61299a8a82860161280f565b6040830152506129ac606084016128df565b60608201526129bd608084016128df565b60808201526129ce60a084016128df565b60a082015260c083013560c082015260e083013560e08201526101006129f58185016128fd565b90820152610120612a078482016128fd565b9082015295506020870135915080821115612a2157600080fd5b50612a2e878288016126fe565b9094509250612a429050866040870161268e565b905092959194509250565b600060208284031215612a5f57600080fd5b8135612a6a816128ba565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156113a7576113a7612a71565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612ae857600080fd5b830160208101925035905067ffffffffffffffff811115612b0857600080fd5b80360382131561274357600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60208152813560208201526000612b7a6020840184612ab3565b610140806040860152612b9261016086018385612b17565b9250612ba16040870187612ab3565b92507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0868503016060870152612bd8848483612b17565b935050612be7606087016128df565b73ffffffffffffffffffffffffffffffffffffffff811660808701529150612c11608087016128df565b73ffffffffffffffffffffffffffffffffffffffff811660a08701529150612c3b60a087016128df565b73ffffffffffffffffffffffffffffffffffffffff811660c0870152915060c086013560e0860152610100915060e086013582860152612c7c8287016128fd565b9150610120612c8e8187018415159052565b612c998188016128fd565b925050612ca98186018315159052565b5090949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612d1357612d13612a71565b5060010190565b60005b83811015612d35578181015183820152602001612d1d565b50506000910152565b60008151808452612d56816020860160208601612d1a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612db1610160850183612d3e565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612dec8382612d3e565b9250506060850151612e16608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612e898187018315159052565b860151801515838701529050612ca9565b600060208284031215612eac57600080fd5b5051919050565b818103818111156113a7576113a7612a71565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612efa57600080fd5b9190910192915050565b600060208284031215612f1657600080fd5b8135612a6a816128ef565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612f5657600080fd5b83018035915067ffffffffffffffff821115612f7157600080fd5b60200191503681900382131561274357600080fd5b60008085851115612f9657600080fd5b83861115612fa357600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612ff05780818660040360031b1b83161692505b505092915050565b60006020828403121561300a57600080fd5b8151612a6a816128ef565b8183823760009101908152919050565b60008251612efa818460208701612d1a565b602081526000612a6a6020830184612d3e56fea26469706673582212203378cd04b163ca65a2fcb4d061995f397b0cdf87902f6fd74cb40eebc72075ed64736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class HopFacetOptimized__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
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
exports.HopFacetOptimized__factory = HopFacetOptimized__factory;
Object.defineProperty(HopFacetOptimized__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(HopFacetOptimized__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=HopFacetOptimized__factory.js.map