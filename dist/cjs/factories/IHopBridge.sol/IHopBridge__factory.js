"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IHopBridge__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "send",
        inputs: [
            {
                name: "chainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "recipient",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "bonderFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "deadline",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "sendToL2",
        inputs: [
            {
                name: "chainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "recipient",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "deadline",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "relayer",
                type: "address",
                internalType: "address",
            },
            {
                name: "relayerFee",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapAndSend",
        inputs: [
            {
                name: "chainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "recipient",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "bonderFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "deadline",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "destinationAmountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "destinationDeadline",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
class IHopBridge__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IHopBridge__factory = IHopBridge__factory;
Object.defineProperty(IHopBridge__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IHopBridge__factory.js.map