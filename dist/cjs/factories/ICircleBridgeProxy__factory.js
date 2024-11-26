"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICircleBridgeProxy__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "depositForBurn",
        inputs: [
            {
                name: "_amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_dstChid",
                type: "uint64",
                internalType: "uint64",
            },
            {
                name: "_mintRecipient",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "_burnToken",
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
class ICircleBridgeProxy__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ICircleBridgeProxy__factory = ICircleBridgeProxy__factory;
Object.defineProperty(ICircleBridgeProxy__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=ICircleBridgeProxy__factory.js.map