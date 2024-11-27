"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITokenMessenger__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "depositForBurn",
        inputs: [
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "destinationDomain",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "mintRecipient",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "burnToken",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "nonce",
                type: "uint64",
                internalType: "uint64",
            },
        ],
        stateMutability: "nonpayable",
    },
];
class ITokenMessenger__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ITokenMessenger__factory = ITokenMessenger__factory;
Object.defineProperty(ITokenMessenger__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=ITokenMessenger__factory.js.map