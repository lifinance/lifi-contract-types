"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAllBridge__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "getBridgingCostInTokens",
        inputs: [
            {
                name: "destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "messenger",
                type: "uint8",
                internalType: "enum IAllBridge.MessengerProtocol",
            },
            {
                name: "tokenAddress",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getMessageCost",
        inputs: [
            {
                name: "chainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "protocol",
                type: "uint8",
                internalType: "enum IAllBridge.MessengerProtocol",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getTransactionCost",
        inputs: [
            {
                name: "chainId",
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
        stateMutability: "view",
    },
    {
        type: "function",
        name: "pools",
        inputs: [
            {
                name: "addr",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
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
        name: "swapAndBridge",
        inputs: [
            {
                name: "token",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "recipient",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "receiveToken",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "nonce",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "messenger",
                type: "uint8",
                internalType: "enum IAllBridge.MessengerProtocol",
            },
            {
                name: "feeTokenAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
class IAllBridge__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IAllBridge__factory = IAllBridge__factory;
Object.defineProperty(IAllBridge__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IAllBridge__factory.js.map