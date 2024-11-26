"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMayan__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "forwardERC20",
        inputs: [
            {
                name: "tokenIn",
                type: "address",
                internalType: "address",
            },
            {
                name: "amountIn",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "permitParams",
                type: "tuple",
                internalType: "struct IMayan.PermitParams",
                components: [
                    {
                        name: "value",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "deadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "v",
                        type: "uint8",
                        internalType: "uint8",
                    },
                    {
                        name: "r",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "s",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                ],
            },
            {
                name: "mayanProtocol",
                type: "address",
                internalType: "address",
            },
            {
                name: "protocolData",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "forwardEth",
        inputs: [
            {
                name: "mayanProtocol",
                type: "address",
                internalType: "address",
            },
            {
                name: "protocolData",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
class IMayan__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IMayan__factory = IMayan__factory;
Object.defineProperty(IMayan__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IMayan__factory.js.map