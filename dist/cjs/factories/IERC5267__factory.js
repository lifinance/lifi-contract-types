"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERC5267__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "eip712Domain",
        inputs: [],
        outputs: [
            {
                name: "fields",
                type: "bytes1",
                internalType: "bytes1",
            },
            {
                name: "name",
                type: "string",
                internalType: "string",
            },
            {
                name: "version",
                type: "string",
                internalType: "string",
            },
            {
                name: "chainId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "verifyingContract",
                type: "address",
                internalType: "address",
            },
            {
                name: "salt",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "extensions",
                type: "uint256[]",
                internalType: "uint256[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "event",
        name: "EIP712DomainChanged",
        inputs: [],
        anonymous: false,
    },
];
class IERC5267__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IERC5267__factory = IERC5267__factory;
Object.defineProperty(IERC5267__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IERC5267__factory.js.map