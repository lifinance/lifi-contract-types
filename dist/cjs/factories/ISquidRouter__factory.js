"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISquidRouter__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "bridgeCall",
        inputs: [
            {
                name: "bridgedTokenSymbol",
                type: "string",
                internalType: "string",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "destinationChain",
                type: "string",
                internalType: "string",
            },
            {
                name: "destinationAddress",
                type: "string",
                internalType: "string",
            },
            {
                name: "payload",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "gasRefundRecipient",
                type: "address",
                internalType: "address",
            },
            {
                name: "enableExpress",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "callBridge",
        inputs: [
            {
                name: "token",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "calls",
                type: "tuple[]",
                internalType: "struct ISquidMulticall.Call[]",
                components: [
                    {
                        name: "callType",
                        type: "uint8",
                        internalType: "enum ISquidMulticall.CallType",
                    },
                    {
                        name: "target",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "value",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "callData",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "payload",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
            {
                name: "bridgedTokenSymbol",
                type: "string",
                internalType: "string",
            },
            {
                name: "destinationChain",
                type: "string",
                internalType: "string",
            },
            {
                name: "destinationAddress",
                type: "string",
                internalType: "string",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "callBridgeCall",
        inputs: [
            {
                name: "token",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "calls",
                type: "tuple[]",
                internalType: "struct ISquidMulticall.Call[]",
                components: [
                    {
                        name: "callType",
                        type: "uint8",
                        internalType: "enum ISquidMulticall.CallType",
                    },
                    {
                        name: "target",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "value",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "callData",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "payload",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
            {
                name: "bridgedTokenSymbol",
                type: "string",
                internalType: "string",
            },
            {
                name: "destinationChain",
                type: "string",
                internalType: "string",
            },
            {
                name: "destinationAddress",
                type: "string",
                internalType: "string",
            },
            {
                name: "payload",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "gasRefundRecipient",
                type: "address",
                internalType: "address",
            },
            {
                name: "enableExpress",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
class ISquidRouter__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISquidRouter__factory = ISquidRouter__factory;
Object.defineProperty(ISquidRouter__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=ISquidRouter__factory.js.map