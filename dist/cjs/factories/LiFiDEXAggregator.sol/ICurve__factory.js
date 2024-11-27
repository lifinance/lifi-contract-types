"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICurve__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "exchange",
        inputs: [
            {
                name: "i",
                type: "int128",
                internalType: "int128",
            },
            {
                name: "j",
                type: "int128",
                internalType: "int128",
            },
            {
                name: "dx",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "min_dy",
                type: "uint256",
                internalType: "uint256",
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
class ICurve__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ICurve__factory = ICurve__factory;
Object.defineProperty(ICurve__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=ICurve__factory.js.map