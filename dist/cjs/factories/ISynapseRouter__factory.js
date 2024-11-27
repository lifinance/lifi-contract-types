"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISynapseRouter__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "bridge",
        inputs: [
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "chainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "token",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "originQuery",
                type: "tuple",
                internalType: "struct ISynapseRouter.SwapQuery",
                components: [
                    {
                        name: "swapAdapter",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "tokenOut",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "minAmountOut",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "deadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "rawParams",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
            {
                name: "destQuery",
                type: "tuple",
                internalType: "struct ISynapseRouter.SwapQuery",
                components: [
                    {
                        name: "swapAdapter",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "tokenOut",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "minAmountOut",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "deadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "rawParams",
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
        name: "getConnectedBridgeTokens",
        inputs: [
            {
                name: "tokenOut",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "tokens",
                type: "tuple[]",
                internalType: "struct ISynapseRouter.BridgeToken[]",
                components: [
                    {
                        name: "symbol",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "token",
                        type: "address",
                        internalType: "address",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getDestinationAmountOut",
        inputs: [
            {
                name: "requests",
                type: "tuple[]",
                internalType: "struct ISynapseRouter.DestRequest[]",
                components: [
                    {
                        name: "symbol",
                        type: "string",
                        internalType: "string",
                    },
                    {
                        name: "amountIn",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
            {
                name: "tokenOut",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "destQueries",
                type: "tuple[]",
                internalType: "struct ISynapseRouter.SwapQuery[]",
                components: [
                    {
                        name: "swapAdapter",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "tokenOut",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "minAmountOut",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "deadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "rawParams",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getOriginAmountOut",
        inputs: [
            {
                name: "tokenIn",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenSymbols",
                type: "string[]",
                internalType: "string[]",
            },
            {
                name: "amountIn",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "originQueries",
                type: "tuple[]",
                internalType: "struct ISynapseRouter.SwapQuery[]",
                components: [
                    {
                        name: "swapAdapter",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "tokenOut",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "minAmountOut",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "deadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "rawParams",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
];
class ISynapseRouter__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISynapseRouter__factory = ISynapseRouter__factory;
Object.defineProperty(ISynapseRouter__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=ISynapseRouter__factory.js.map