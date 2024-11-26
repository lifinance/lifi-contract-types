"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITeleportGateway__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "initiateTeleport",
        inputs: [
            {
                name: "targetDomain",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint128",
                internalType: "uint128",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
];
class ITeleportGateway__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ITeleportGateway__factory = ITeleportGateway__factory;
Object.defineProperty(ITeleportGateway__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=ITeleportGateway__factory.js.map