"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMessageReceiverApp__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "executeMessage",
        inputs: [
            {
                name: "_sender",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_srcChainId",
                type: "uint64",
                internalType: "uint64",
            },
            {
                name: "_message",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_executor",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint8",
                internalType: "enum IMessageReceiverApp.ExecutionStatus",
            },
        ],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "executeMessage",
        inputs: [
            {
                name: "_sender",
                type: "address",
                internalType: "address",
            },
            {
                name: "_srcChainId",
                type: "uint64",
                internalType: "uint64",
            },
            {
                name: "_message",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_executor",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint8",
                internalType: "enum IMessageReceiverApp.ExecutionStatus",
            },
        ],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "executeMessageWithTransfer",
        inputs: [
            {
                name: "_sender",
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
                name: "_srcChainId",
                type: "uint64",
                internalType: "uint64",
            },
            {
                name: "_message",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_executor",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint8",
                internalType: "enum IMessageReceiverApp.ExecutionStatus",
            },
        ],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "executeMessageWithTransferFallback",
        inputs: [
            {
                name: "_sender",
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
                name: "_srcChainId",
                type: "uint64",
                internalType: "uint64",
            },
            {
                name: "_message",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_executor",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint8",
                internalType: "enum IMessageReceiverApp.ExecutionStatus",
            },
        ],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "executeMessageWithTransferRefund",
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
                name: "_message",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_executor",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint8",
                internalType: "enum IMessageReceiverApp.ExecutionStatus",
            },
        ],
        stateMutability: "payable",
    },
];
class IMessageReceiverApp__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IMessageReceiverApp__factory = IMessageReceiverApp__factory;
Object.defineProperty(IMessageReceiverApp__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IMessageReceiverApp__factory.js.map