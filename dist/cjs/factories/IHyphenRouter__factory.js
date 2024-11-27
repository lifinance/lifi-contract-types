"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IHyphenRouter__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "depositErc20",
        inputs: [
            {
                name: "toChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "tokenAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "tag",
                type: "string",
                internalType: "string",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "depositNative",
        inputs: [
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "toChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "tag",
                type: "string",
                internalType: "string",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
class IHyphenRouter__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IHyphenRouter__factory = IHyphenRouter__factory;
Object.defineProperty(IHyphenRouter__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IHyphenRouter__factory.js.map