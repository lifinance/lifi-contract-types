"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBridge__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "relay",
        inputs: [
            {
                name: "_relayRequest",
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
    {
        type: "function",
        name: "transfers",
        inputs: [
            {
                name: "transferId",
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
        name: "verifySigs",
        inputs: [
            {
                name: "_msg",
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
        stateMutability: "view",
    },
    {
        type: "function",
        name: "withdraw",
        inputs: [
            {
                name: "_wdmsg",
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
    {
        type: "function",
        name: "withdraws",
        inputs: [
            {
                name: "withdrawId",
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
class IBridge__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IBridge__factory = IBridge__factory;
Object.defineProperty(IBridge__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IBridge__factory.js.map