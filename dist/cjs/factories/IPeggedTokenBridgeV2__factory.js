"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPeggedTokenBridgeV2__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "burn",
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
                name: "_toChainId",
                type: "uint64",
                internalType: "uint64",
            },
            {
                name: "_toAccount",
                type: "address",
                internalType: "address",
            },
            {
                name: "_nonce",
                type: "uint64",
                internalType: "uint64",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "burnFrom",
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
                name: "_toChainId",
                type: "uint64",
                internalType: "uint64",
            },
            {
                name: "_toAccount",
                type: "address",
                internalType: "address",
            },
            {
                name: "_nonce",
                type: "uint64",
                internalType: "uint64",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "mint",
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
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
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
];
class IPeggedTokenBridgeV2__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IPeggedTokenBridgeV2__factory = IPeggedTokenBridgeV2__factory;
Object.defineProperty(IPeggedTokenBridgeV2__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IPeggedTokenBridgeV2__factory.js.map