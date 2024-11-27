"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IConnextHandler__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "xcall",
        inputs: [
            {
                name: "destination",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "recipient",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "delegate",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "slippage",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "callData",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "xcall",
        inputs: [
            {
                name: "destination",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "recipient",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "delegate",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "slippage",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "callData",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_relayerFee",
                type: "uint256",
                internalType: "uint256",
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
];
class IConnextHandler__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IConnextHandler__factory = IConnextHandler__factory;
Object.defineProperty(IConnextHandler__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IConnextHandler__factory.js.map