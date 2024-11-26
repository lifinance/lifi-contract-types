"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPool__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "token",
        inputs: [],
        outputs: [
            {
                name: "tokenAddress",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
];
class IPool__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IPool__factory = IPool__factory;
Object.defineProperty(IPool__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IPool__factory.js.map