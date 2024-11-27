"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOriginalTokenVault__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "deposit",
        inputs: [
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
                name: "_mintChainId",
                type: "uint64",
                internalType: "uint64",
            },
            {
                name: "_mintAccount",
                type: "address",
                internalType: "address",
            },
            {
                name: "_nonce",
                type: "uint64",
                internalType: "uint64",
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
                name: "_amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_mintChainId",
                type: "uint64",
                internalType: "uint64",
            },
            {
                name: "_mintAccount",
                type: "address",
                internalType: "address",
            },
            {
                name: "_nonce",
                type: "uint64",
                internalType: "uint64",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "records",
        inputs: [
            {
                name: "recordId",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "withdraw",
        inputs: [
            {
                name: "_request",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_sigs",
                type: "bytes[]",
                internalType: "bytes[]",
            },
            {
                name: "_signers",
                type: "address[]",
                internalType: "address[]",
            },
            {
                name: "_powers",
                type: "uint256[]",
                internalType: "uint256[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
];
class IOriginalTokenVault__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IOriginalTokenVault__factory = IOriginalTokenVault__factory;
Object.defineProperty(IOriginalTokenVault__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IOriginalTokenVault__factory.js.map