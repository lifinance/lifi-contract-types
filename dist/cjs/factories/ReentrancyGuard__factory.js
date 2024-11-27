"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReentrancyGuard__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "error",
        name: "ReentrancyError",
        inputs: [],
    },
];
class ReentrancyGuard__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ReentrancyGuard__factory = ReentrancyGuard__factory;
Object.defineProperty(ReentrancyGuard__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=ReentrancyGuard__factory.js.map