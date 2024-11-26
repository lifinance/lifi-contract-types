"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IThorSwap__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "depositWithExpiry",
        inputs: [
            {
                name: "vault",
                type: "address",
                internalType: "address",
            },
            {
                name: "asset",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "memo",
                type: "string",
                internalType: "string",
            },
            {
                name: "expiration",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
class IThorSwap__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IThorSwap__factory = IThorSwap__factory;
Object.defineProperty(IThorSwap__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IThorSwap__factory.js.map