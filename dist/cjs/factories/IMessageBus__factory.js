"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMessageBus__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "calcFee",
        inputs: [
            {
                name: "_message",
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
        stateMutability: "view",
    },
    {
        type: "function",
        name: "executeMessage",
        inputs: [
            {
                name: "_message",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_route",
                type: "tuple",
                internalType: "struct MsgDataTypes.RouteInfo",
                components: [
                    {
                        name: "sender",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "receiver",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "srcChainId",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "srcTxHash",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                ],
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
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "executeMessageWithTransfer",
        inputs: [
            {
                name: "_message",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_transfer",
                type: "tuple",
                internalType: "struct MsgDataTypes.TransferInfo",
                components: [
                    {
                        name: "t",
                        type: "uint8",
                        internalType: "enum MsgDataTypes.TransferType",
                    },
                    {
                        name: "sender",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "receiver",
                        type: "address",
                        internalType: "address",
                    },
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
                        name: "wdseq",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "srcChainId",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "refId",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "srcTxHash",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                ],
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
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "executeMessageWithTransferRefund",
        inputs: [
            {
                name: "_message",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_transfer",
                type: "tuple",
                internalType: "struct MsgDataTypes.TransferInfo",
                components: [
                    {
                        name: "t",
                        type: "uint8",
                        internalType: "enum MsgDataTypes.TransferType",
                    },
                    {
                        name: "sender",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "receiver",
                        type: "address",
                        internalType: "address",
                    },
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
                        name: "wdseq",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "srcChainId",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "refId",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "srcTxHash",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                ],
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
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "liquidityBridge",
        inputs: [],
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
        name: "pegBridge",
        inputs: [],
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
        name: "pegBridgeV2",
        inputs: [],
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
        name: "pegVault",
        inputs: [],
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
        name: "pegVaultV2",
        inputs: [],
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
        name: "sendMessage",
        inputs: [
            {
                name: "_receiver",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_dstChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_message",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "sendMessage",
        inputs: [
            {
                name: "_receiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "_dstChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_message",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "sendMessageWithTransfer",
        inputs: [
            {
                name: "_receiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "_dstChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_srcBridge",
                type: "address",
                internalType: "address",
            },
            {
                name: "_srcTransferId",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "_message",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "withdrawFee",
        inputs: [
            {
                name: "_account",
                type: "address",
                internalType: "address",
            },
            {
                name: "_cumulativeFee",
                type: "uint256",
                internalType: "uint256",
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
class IMessageBus__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IMessageBus__factory = IMessageBus__factory;
Object.defineProperty(IMessageBus__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IMessageBus__factory.js.map