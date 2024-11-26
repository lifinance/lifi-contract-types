"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICBridge__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "send",
        inputs: [
            {
                name: "_receiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "_token",
                type: "address",
                internalType: "address",
            },
            {
                name: "_amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_dstChainId",
                type: "uint64",
                internalType: "uint64",
            },
            {
                name: "_nonce",
                type: "uint64",
                internalType: "uint64",
            },
            {
                name: "_maxSlippage",
                type: "uint32",
                internalType: "uint32",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "sendNative",
        inputs: [
            {
                name: "_receiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "_amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_dstChainId",
                type: "uint64",
                internalType: "uint64",
            },
            {
                name: "_nonce",
                type: "uint64",
                internalType: "uint64",
            },
            {
                name: "_maxSlippage",
                type: "uint32",
                internalType: "uint32",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
class ICBridge__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ICBridge__factory = ICBridge__factory;
Object.defineProperty(ICBridge__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=ICBridge__factory.js.map