"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IXDaiBridgeL2__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "relayTokens",
        inputs: [
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
class IXDaiBridgeL2__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IXDaiBridgeL2__factory = IXDaiBridgeL2__factory;
Object.defineProperty(IXDaiBridgeL2__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IXDaiBridgeL2__factory.js.map