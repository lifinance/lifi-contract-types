"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITridentCLPool__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "swap",
        inputs: [
            {
                name: "recipient",
                type: "address",
                internalType: "address",
            },
            {
                name: "zeroForOne",
                type: "bool",
                internalType: "bool",
            },
            {
                name: "amountSpecified",
                type: "int256",
                internalType: "int256",
            },
            {
                name: "sqrtPriceLimitX96",
                type: "uint160",
                internalType: "uint160",
            },
            {
                name: "unwrapBento",
                type: "bool",
                internalType: "bool",
            },
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "amount0",
                type: "int256",
                internalType: "int256",
            },
            {
                name: "amount1",
                type: "int256",
                internalType: "int256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "token0",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "token1",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
];
class ITridentCLPool__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ITridentCLPool__factory = ITridentCLPool__factory;
Object.defineProperty(ITridentCLPool__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=ITridentCLPool__factory.js.map