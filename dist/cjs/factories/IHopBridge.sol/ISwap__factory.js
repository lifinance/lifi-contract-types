"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISwap__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "swap",
        inputs: [
            {
                name: "tokenIndexFrom",
                type: "uint8",
                internalType: "uint8",
            },
            {
                name: "tokenIndexTo",
                type: "uint8",
                internalType: "uint8",
            },
            {
                name: "dx",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "minDy",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "deadline",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
];
class ISwap__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISwap__factory = ISwap__factory;
Object.defineProperty(ISwap__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=ISwap__factory.js.map