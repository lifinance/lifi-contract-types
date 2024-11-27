"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAcrossSpokePool__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "deposit",
        inputs: [
            {
                name: "recipient",
                type: "address",
                internalType: "address",
            },
            {
                name: "originToken",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "relayerFeePct",
                type: "int64",
                internalType: "int64",
            },
            {
                name: "quoteTimestamp",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "message",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "maxCount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "depositV3",
        inputs: [
            {
                name: "depositor",
                type: "address",
                internalType: "address",
            },
            {
                name: "recipient",
                type: "address",
                internalType: "address",
            },
            {
                name: "inputToken",
                type: "address",
                internalType: "address",
            },
            {
                name: "outputToken",
                type: "address",
                internalType: "address",
            },
            {
                name: "inputAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "outputAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "destinationChainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "exclusiveRelayer",
                type: "address",
                internalType: "address",
            },
            {
                name: "quoteTimestamp",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "fillDeadline",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "exclusivityDeadline",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "message",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
class IAcrossSpokePool__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IAcrossSpokePool__factory = IAcrossSpokePool__factory;
Object.defineProperty(IAcrossSpokePool__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IAcrossSpokePool__factory.js.map