"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERC721Receiver__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "onERC721Received",
        inputs: [
            {
                name: "operator",
                type: "address",
                internalType: "address",
            },
            {
                name: "from",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bytes4",
                internalType: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
    },
];
class IERC721Receiver__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IERC721Receiver__factory = IERC721Receiver__factory;
Object.defineProperty(IERC721Receiver__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IERC721Receiver__factory.js.map