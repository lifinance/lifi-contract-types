"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmergencyPause__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "unpauseDiamond",
        inputs: [
            {
                name: "_blacklist",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
];
class EmergencyPause__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.EmergencyPause__factory = EmergencyPause__factory;
Object.defineProperty(EmergencyPause__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=EmergencyPause__factory.js.map