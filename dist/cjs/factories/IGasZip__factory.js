"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IGasZip__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "deposit",
        inputs: [
            {
                name: "destinationChains",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "to",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
class IGasZip__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IGasZip__factory = IGasZip__factory;
Object.defineProperty(IGasZip__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IGasZip__factory.js.map