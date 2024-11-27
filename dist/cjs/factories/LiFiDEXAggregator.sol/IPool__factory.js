"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPool__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "burn",
        inputs: [
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "withdrawnAmounts",
                type: "tuple[]",
                internalType: "struct IPool.TokenAmount[]",
                components: [
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
                ],
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "burnSingle",
        inputs: [
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "amountOut",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "flashSwap",
        inputs: [
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "finalAmountOut",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "getAmountIn",
        inputs: [
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "finalAmountIn",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getAmountOut",
        inputs: [
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "finalAmountOut",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getAssets",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "mint",
        inputs: [
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "liquidity",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "poolIdentifier",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "swap",
        inputs: [
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "finalAmountOut",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "Swap",
        inputs: [
            {
                name: "recipient",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "tokenIn",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "tokenOut",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "amountIn",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "amountOut",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
];
class IPool__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IPool__factory = IPool__factory;
Object.defineProperty(IPool__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IPool__factory.js.map