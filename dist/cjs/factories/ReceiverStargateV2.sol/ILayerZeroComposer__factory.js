"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILayerZeroComposer__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "lzCompose",
        inputs: [
            {
                name: "_from",
                type: "address",
                internalType: "address",
            },
            {
                name: "_guid",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "_message",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_executor",
                type: "address",
                internalType: "address",
            },
            {
                name: "_extraData",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
class ILayerZeroComposer__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ILayerZeroComposer__factory = ILayerZeroComposer__factory;
Object.defineProperty(ILayerZeroComposer__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=ILayerZeroComposer__factory.js.map