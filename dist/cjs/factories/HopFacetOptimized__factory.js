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
const _bytecode = "0x608060405234801561001057600080fd5b506130a3806100206000396000f3fe6080604052600436106100965760003560e01c806342afe79a116100695780638d03f4561161004e5780638d03f45614610129578063ca360ae01461013c578063d40e64cc1461014f57600080fd5b806342afe79a1461010357806355c99cd81461011657600080fd5b806303add8c31461009b5780630680ded4146100b0578063082bc047146100d05780630b4cb5d8146100e3575b600080fd5b6100ae6100a93660046126ca565b610162565b005b3480156100bc57600080fd5b506100ae6100cb36600461276d565b6102bf565b6100ae6100de3660046126ca565b610362565b3480156100ef57600080fd5b506100ae6100fe3660046126ca565b6103c7565b6100ae61011136600461292b565b610508565b6100ae6101243660046126ca565b610672565b6100ae61013736600461292b565b610749565b6100ae61014a36600461292b565b6107d8565b6100ae61015d36600461292b565b6108a9565b61017260c0820160a08301612a70565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f56101a061010084013560c0860135612ac3565b60e08501356101b560c0870160a08801612a70565b8660c00135866060013587608001358860c00160208101906101d79190612a70565b60405160e089811b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482019790975273ffffffffffffffffffffffffffffffffffffffff958616602482015260448101949094526064840192909252608483015290911660a48201529085013560c482015260e4015b6000604051808303818588803b15801561026b57600080fd5b505af115801561027f573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516102b39190612b83565b60405180910390a15050565b6102c76109d6565b60005b8381101561035b576103498383838181106102e7576102e7612cd6565b90506020020160208101906102fc9190612a70565b86868481811061030e5761030e612cd6565b90506020020160208101906103239190612a70565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610a4b565b8061035381612d05565b9150506102ca565b5050505050565b61038161037560a0840160808501612a70565b33308560c00135610b87565b61039160c0820160a08301612a70565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f561010083013560e08501356101b560c0870160a08801612a70565b6103da61037560a0840160808501612a70565b6103ea60c0820160a08301612a70565b73ffffffffffffffffffffffffffffffffffffffff1663eea0d7b260e084013561041a60c0860160a08701612a70565b604080517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152600481019390935273ffffffffffffffffffffffffffffffffffffffff909116602483015260c08601356044830152843560648301526020850135608483015284013560a4820152606084013560c4820152608084013560e482015261010401600060405180830381600087803b1580156104c157600080fd5b505af11580156104d5573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516102b39190612b83565b61052384600001518560c00151858533866101000135610da1565b60c08086019190915261053b90820160a08301612a70565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f58261010001358660e001518760a001518860c00151866060013587608001358860c00160208101906105889190612a70565b60405160e089811b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482019790975273ffffffffffffffffffffffffffffffffffffffff958616602482015260448101949094526064840192909252608483015290911660a48201529085013560c482015260e4015b6000604051808303818588803b15801561061c57600080fd5b505af1158015610630573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516106649190612dab565b60405180910390a150505050565b61068260c0820160a08301612a70565b73ffffffffffffffffffffffffffffffffffffffff1663eea0d7b260c0840180359060e0860135906106b79060a08801612a70565b604080517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b168152600481019390935273ffffffffffffffffffffffffffffffffffffffff909116602483015260c08701356044830152853560648301526020860135608483015285013560a4820152606085013560c4820152608085013560e482015261010401610252565b61076484600001518560c00151858533866101000135610da1565b60c08086019190915261077c90820160a08301612a70565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f58261010001358660c001516107ac9190612ac3565b8660e001518760a001518860c00151866060013587608001358860c00160208101906105889190612a70565b6107ed84600001518560c00151858533610f41565b60c08086019190915261080590820160a08301612a70565b60c085015160e086015160a0870151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019390935273ffffffffffffffffffffffffffffffffffffffff918216602484015260448301849052853560648401526020860135608484015285013560a4830152606085013560c4830152608085013560e4830152929092169163eea0d7b2919061010401610603565b6108be84600001518560c00151858533610f41565b60c0808601919091526108d690820160a08301612a70565b60e085015160a086015160c0870151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501526044840191909152843560648401526020850135608484015284013560a4830152606084013560c4830152608084013560e4830152919091169063eea0d7b29061010401600060405180830381600087803b15801561098f57600080fd5b505af11580156109a3573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516106649190612dab565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610a49576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b73ffffffffffffffffffffffffffffffffffffffff8316610a6b57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610ab8576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610b2d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b519190612ebd565b1015610b8257610b8283837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611084565b505050565b73ffffffffffffffffffffffffffffffffffffffff8416610bd4576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c21576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610c92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb69190612ebd565b9050610cc4828686866111f8565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610d34573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d589190612ebd565b610d629190612ed6565b14610d99576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b600083808203610ddd576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610dec600185612ed6565b818110610dfb57610dfb612cd6565b9050602002810190610e0d9190612ee9565b610e1e906080810190606001612a70565b90506000610e2b82611256565b905073ffffffffffffffffffffffffffffffffffffffff8216610e5557610e523482612ed6565b90505b6000610e61898961130f565b9050610e6d898961141b565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610ea8818b8b85611488565b600083610eb486611256565b610ebe9190612ed6565b905073ffffffffffffffffffffffffffffffffffffffff8516610ee857610ee58882612ed6565b90505b8b811015610f31576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b600082808203610f7d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610f8c600185612ed6565b818110610f9b57610f9b612cd6565b9050602002810190610fad9190612ee9565b610fbe906080810190606001612a70565b90506000610fcb82611256565b905073ffffffffffffffffffffffffffffffffffffffff8216610ff557610ff23482612ed6565b90505b6000611001888861130f565b905061100d888861141b565b61101a8a8989898561187e565b60008261102685611256565b6110309190612ed6565b905089811015611076576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610f28565b9a9950505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526111108482611b47565b6111f25760405173ffffffffffffffffffffffffffffffffffffffff84166024820152600060448201526111e89085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c08565b6111f28482611c08565b50505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526111f29085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611166565b600073ffffffffffffffffffffffffffffffffffffffff821615611307576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156112de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113029190612ebd565b611309565b475b92915050565b60608160008167ffffffffffffffff81111561132d5761132d6127d9565b604051908082528060200260200182016040528015611356578160200160208202803683370190505b5090506000805b838110156114105786868281811061137757611377612cd6565b90506020028101906113899190612ee9565b61139a906080810190606001612a70565b91506113a582611256565b8382815181106113b7576113b7612cd6565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661140857348382815181106113f0576113f0612cd6565b602002602001018181516114049190612ed6565b9052505b60010161135d565b509095945050505050565b60005b81811015610b82573683838381811061143957611439612cd6565b905060200281019061144b9190612ee9565b905061145d60e0820160c08301612f27565b1561147f5761147f6114756060830160408401612a70565b8260800135611d17565b5060010161141e565b60208401516040850151849184918490836001811461179757600086866114b0600185612ed6565b8181106114bf576114bf612cd6565b90506020028101906114d19190612ee9565b6114e2906080810190606001612a70565b9050600089815b8181101561168f57368d8d8381811061150457611504612cd6565b90506020028101906115169190612ee9565b905061154561152b6060830160408401612a70565b73ffffffffffffffffffffffffffffffffffffffff161590565b806115a857506115a861155e6040830160208401612a70565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156115bf57506115bf61155e6020830183612a70565b801561164457506116446115d660a0830183612f44565b6115e591600491600091612fa9565b6115ee91612fd3565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61167a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516116869082611e8d565b506001016114e9565b505060005b61169f600185612ed6565b81101561178f5760008989838181106116ba576116ba612cd6565b90506020028101906116cc9190612ee9565b6116dd906080810190606001612a70565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146117865786828151811061172457611724612cd6565b602002602001015161173582611256565b61173f9190612ed6565b9250600073ffffffffffffffffffffffffffffffffffffffff821615611766576000611768565b865b9050831561178457611784828a61177f8488612ed6565b61216b565b505b50600101611694565b505050611872565b8760005b8181101561186f57368b8b838181106117b6576117b6612cd6565b90506020028101906117c89190612ee9565b90506117dd61152b6060830160408401612a70565b806117f657506117f661155e6040830160208401612a70565b801561180d575061180d61155e6020830183612a70565b801561182457506118246115d660a0830183612f44565b61185a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516118669082611e8d565b5060010161179b565b50505b50505050505050505050565b838383838260018114611a71576000858561189a600185612ed6565b8181106118a9576118a9612cd6565b90506020028101906118bb9190612ee9565b6118cc906080810190606001612a70565b9050600089815b818110156119a557368d8d838181106118ee576118ee612cd6565b90506020028101906119009190612ee9565b905061191561152b6060830160408401612a70565b8061192e575061192e61155e6040830160208401612a70565b8015611945575061194561155e6020830183612a70565b801561195c575061195c6115d660a0830183612f44565b611992576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61199c8f82611e8d565b506001016118d3565b505060005b6119b5600185612ed6565b81101561178f5760008888838181106119d0576119d0612cd6565b90506020028101906119e29190612ee9565b6119f3906080810190606001612a70565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611a6857858281518110611a3a57611a3a612cd6565b6020026020010151611a4b82611256565b611a559190612ed6565b92508215611a6857611a6881888561216b565b506001016119aa565b8760005b8181101561186f57368b8b83818110611a9057611a90612cd6565b9050602002810190611aa29190612ee9565b9050611ab761152b6060830160408401612a70565b80611ad05750611ad061155e6040830160208401612a70565b8015611ae75750611ae761155e6020830183612a70565b8015611afe5750611afe6115d660a0830183612f44565b611b34576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611b3e8d82611e8d565b50600101611a75565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611b71919061301b565b6000604051808303816000865af19150503d8060008114611bae576040519150601f19603f3d011682016040523d82523d6000602084013e611bb3565b606091505b5091509150818015611bdd575080511580611bdd575080806020019051810190611bdd919061302d565b8015611bff575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b6000611c6a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661219c9092919063ffffffff16565b9050805160001480611c8b575080806020019051810190611c8b919061302d565b610b82576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610f28565b80600003611d51576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611daa5780341015611da6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611e17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e3b9190612ebd565b905081811015611e81576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610f28565b610b8283333085610b87565b611ea3611e9d6020830183612a70565b3b151590565b611ed9576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611f19576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611f2e61152b6060850160408601612a70565b611f39576000611f3f565b82608001355b90506000611f5b611f566060860160408701612a70565b611256565b90506000611f72611f566080870160608801612a70565b905082600003611fa957611fa9611f8f6060870160408801612a70565b611f9f6040880160208901612a70565b8760800135610a4b565b8460800135821015611ff4576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610f28565b6000806120046020880188612a70565b73ffffffffffffffffffffffffffffffffffffffff168561202860a08a018a612f44565b60405161203692919061304a565b60006040518083038185875af1925050503d8060008114612073576040519150601f19603f3d011682016040523d82523d6000602084013e612078565b606091505b50915091508161208b5761208b816121b3565b60006120a0611f5660808a0160608b01612a70565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896120d160208b018b612a70565b6120e160608c0160408d01612a70565b6120f160808d0160608e01612a70565b8c60800135898711612103578661210d565b61210d8a88612ed6565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83161561219257610b828383836121bd565b610b828282612339565b60606121ab8484600085612463565b949350505050565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff831661220a576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216612257576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156122c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122e89190612ebd565b90508082111561232e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610f28565b6111f284848461257c565b73ffffffffffffffffffffffffffffffffffffffff8216612386576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156123c9576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610f28565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114612423576040519150601f19603f3d011682016040523d82523d6000602084013e612428565b606091505b5050905080610b82576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060824710156124f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610f28565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161251e919061301b565b60006040518083038185875af1925050503d806000811461255b576040519150601f19603f3d011682016040523d82523d6000602084013e612560565b606091505b5091509150612571878383876125d2565b979650505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b829084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611166565b606083156126685782516000036126615773ffffffffffffffffffffffffffffffffffffffff85163b612661576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610f28565b50816121ab565b6121ab838381511561267d5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f28919061305a565b600061012082840312156126c457600080fd5b50919050565b6000806101408084860312156126df57600080fd5b833567ffffffffffffffff8111156126f657600080fd5b840180860382131561270757600080fd5b9250612718905084602085016126b1565b90509250929050565b60008083601f84011261273357600080fd5b50813567ffffffffffffffff81111561274b57600080fd5b6020830191508360208260051b850101111561276657600080fd5b9250929050565b6000806000806040858703121561278357600080fd5b843567ffffffffffffffff8082111561279b57600080fd5b6127a788838901612721565b909650945060208701359150808211156127c057600080fd5b506127cd87828801612721565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561282c5761282c6127d9565b60405290565b600082601f83011261284357600080fd5b813567ffffffffffffffff8082111561285e5761285e6127d9565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156128a4576128a46127d9565b816040528381528660208588010111156128bd57600080fd5b836020870160208301376000602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff811681146128ff57600080fd5b50565b803561290d816128dd565b919050565b80151581146128ff57600080fd5b803561290d81612912565b600080600080610160858703121561294257600080fd5b843567ffffffffffffffff8082111561295a57600080fd5b90860190610140828903121561296f57600080fd5b612977612808565b8235815260208301358281111561298d57600080fd5b6129998a828601612832565b6020830152506040830135828111156129b157600080fd5b6129bd8a828601612832565b6040830152506129cf60608401612902565b60608201526129e060808401612902565b60808201526129f160a08401612902565b60a082015260c083013560c082015260e083013560e0820152610100612a18818501612920565b90820152610120612a2a848201612920565b9082015295506020870135915080821115612a4457600080fd5b50612a5187828801612721565b9094509250612a65905086604087016126b1565b905092959194509250565b600060208284031215612a8257600080fd5b8135612a8d816128dd565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082018082111561130957611309612a94565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612b0b57600080fd5b830160208101925035905067ffffffffffffffff811115612b2b57600080fd5b80360382131561276657600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60208152813560208201526000612b9d6020840184612ad6565b610140806040860152612bb561016086018385612b3a565b9250612bc46040870187612ad6565b92507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0868503016060870152612bfb848483612b3a565b935050612c0a60608701612902565b73ffffffffffffffffffffffffffffffffffffffff811660808701529150612c3460808701612902565b73ffffffffffffffffffffffffffffffffffffffff811660a08701529150612c5e60a08701612902565b73ffffffffffffffffffffffffffffffffffffffff811660c0870152915060c086013560e0860152610100915060e086013582860152612c9f828701612920565b9150610120612cb18187018415159052565b612cbc818801612920565b925050612ccc8186018315159052565b5090949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612d3657612d36612a94565b5060010190565b60005b83811015612d58578181015183820152602001612d40565b50506000910152565b60008151808452612d79816020860160208601612d3d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612dd4610160850183612d61565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612e0f8382612d61565b9250506060850151612e39608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612eac8187018315159052565b860151801515838701529050612ccc565b600060208284031215612ecf57600080fd5b5051919050565b8181038181111561130957611309612a94565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612f1d57600080fd5b9190910192915050565b600060208284031215612f3957600080fd5b8135612a8d81612912565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612f7957600080fd5b83018035915067ffffffffffffffff821115612f9457600080fd5b60200191503681900382131561276657600080fd5b60008085851115612fb957600080fd5b83861115612fc657600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156130135780818660040360031b1b83161692505b505092915050565b60008251612f1d818460208701612d3d565b60006020828403121561303f57600080fd5b8151612a8d81612912565b8183823760009101908152919050565b602081526000612a8d6020830184612d6156fea2646970667358221220e9c93e975533997df6a51cab7b77d1049bb885ce00253a04282ffb3ee9169ed364736f6c63430008110033";
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