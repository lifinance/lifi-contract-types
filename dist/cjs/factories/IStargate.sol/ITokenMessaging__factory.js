"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITokenMessaging__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "assetIds",
        inputs: [
            {
                name: "tokenAddress",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint16",
                internalType: "uint16",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "stargateImpls",
        inputs: [
            {
                name: "assetId",
                type: "uint16",
                internalType: "uint16",
            },
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
];
class ITokenMessaging__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ITokenMessaging__factory = ITokenMessaging__factory;
Object.defineProperty(ITokenMessaging__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=ITokenMessaging__factory.js.map