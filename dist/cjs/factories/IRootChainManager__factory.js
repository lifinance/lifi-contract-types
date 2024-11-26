"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRootChainManager__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "depositEtherFor",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "depositFor",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address",
            },
            {
                name: "rootToken",
                type: "address",
                internalType: "address",
            },
            {
                name: "depositData",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "rootToChildToken",
        inputs: [
            {
                name: "rootToken",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "childToken",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
];
class IRootChainManager__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IRootChainManager__factory = IRootChainManager__factory;
Object.defineProperty(IRootChainManager__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IRootChainManager__factory.js.map