"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITransactionManager__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "prepare",
        inputs: [
            {
                name: "args",
                type: "tuple",
                internalType: "struct ITransactionManager.PrepareArgs",
                components: [
                    {
                        name: "invariantData",
                        type: "tuple",
                        internalType: "struct ITransactionManager.InvariantTransactionData",
                        components: [
                            {
                                name: "receivingChainTxManagerAddress",
                                type: "address",
                                internalType: "address",
                            },
                            {
                                name: "user",
                                type: "address",
                                internalType: "address",
                            },
                            {
                                name: "router",
                                type: "address",
                                internalType: "address",
                            },
                            {
                                name: "initiator",
                                type: "address",
                                internalType: "address",
                            },
                            {
                                name: "sendingAssetId",
                                type: "address",
                                internalType: "address",
                            },
                            {
                                name: "receivingAssetId",
                                type: "address",
                                internalType: "address",
                            },
                            {
                                name: "sendingChainFallback",
                                type: "address",
                                internalType: "address",
                            },
                            {
                                name: "receivingAddress",
                                type: "address",
                                internalType: "address",
                            },
                            {
                                name: "callTo",
                                type: "address",
                                internalType: "address",
                            },
                            {
                                name: "sendingChainId",
                                type: "uint256",
                                internalType: "uint256",
                            },
                            {
                                name: "receivingChainId",
                                type: "uint256",
                                internalType: "uint256",
                            },
                            {
                                name: "callDataHash",
                                type: "bytes32",
                                internalType: "bytes32",
                            },
                            {
                                name: "transactionId",
                                type: "bytes32",
                                internalType: "bytes32",
                            },
                        ],
                    },
                    {
                        name: "amount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "expiry",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "encryptedCallData",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "encodedBid",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "bidSignature",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "encodedMeta",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        outputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct ITransactionManager.TransactionData",
                components: [
                    {
                        name: "receivingChainTxManagerAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "user",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "router",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "initiator",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "sendingAssetId",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "receivingAssetId",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "sendingChainFallback",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "receivingAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "callTo",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "callDataHash",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "transactionId",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "sendingChainId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "receivingChainId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "amount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "expiry",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "preparedBlockNumber",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        stateMutability: "payable",
    },
];
class ITransactionManager__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ITransactionManager__factory = ITransactionManager__factory;
Object.defineProperty(ITransactionManager__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=ITransactionManager__factory.js.map