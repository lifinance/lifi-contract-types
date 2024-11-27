"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IGatewayRouter__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "calculateL2TokenAddress",
        inputs: [
            {
                name: "_token",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getGateway",
        inputs: [
            {
                name: "_token",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "outboundTransfer",
        inputs: [
            {
                name: "_token",
                type: "address",
                internalType: "address",
            },
            {
                name: "_to",
                type: "address",
                internalType: "address",
            },
            {
                name: "_amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_maxGas",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_gasPriceBid",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "unsafeCreateRetryableTicket",
        inputs: [
            {
                name: "_destAddr",
                type: "address",
                internalType: "address",
            },
            {
                name: "_l2CallValue",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_maxSubmissionCost",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_excessFeeRefundAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "_callValueRefundAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "_maxGas",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_gasPriceBid",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "payable",
    },
];
class IGatewayRouter__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IGatewayRouter__factory = IGatewayRouter__factory;
Object.defineProperty(IGatewayRouter__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IGatewayRouter__factory.js.map