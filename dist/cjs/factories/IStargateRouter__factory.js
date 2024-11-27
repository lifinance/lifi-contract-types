"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IStargateRouter__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "factory",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "quoteLayerZeroFee",
        inputs: [
            {
                name: "dstChainId",
                type: "uint16",
                internalType: "uint16",
            },
            {
                name: "functionType",
                type: "uint8",
                internalType: "uint8",
            },
            {
                name: "toAddress",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "transferAndCallPayload",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "lzTxParams",
                type: "tuple",
                internalType: "struct IStargateRouter.lzTxObj",
                components: [
                    {
                        name: "dstGasForCall",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "dstNativeAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "dstNativeAddr",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        outputs: [
            {
                name: "nativeFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "zroFee",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "swap",
        inputs: [
            {
                name: "dstChainId",
                type: "uint16",
                internalType: "uint16",
            },
            {
                name: "srcPoolId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "dstPoolId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "refundAddress",
                type: "address",
                internalType: "address payable",
            },
            {
                name: "amountLD",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "minAmountLD",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "lzTxParams",
                type: "tuple",
                internalType: "struct IStargateRouter.lzTxObj",
                components: [
                    {
                        name: "dstGasForCall",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "dstNativeAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "dstNativeAddr",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
            {
                name: "to",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "payload",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapETHAndCall",
        inputs: [
            {
                name: "_dstChainId",
                type: "uint16",
                internalType: "uint16",
            },
            {
                name: "_refundAddress",
                type: "address",
                internalType: "address payable",
            },
            {
                name: "_toAddress",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_swapAmount",
                type: "tuple",
                internalType: "struct IStargateRouter.SwapAmount",
                components: [
                    {
                        name: "amountLD",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "minAmountLD",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
            {
                name: "_lzTxParams",
                type: "tuple",
                internalType: "struct IStargateRouter.lzTxObj",
                components: [
                    {
                        name: "dstGasForCall",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "dstNativeAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "dstNativeAddr",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
            {
                name: "_payload",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
];
class IStargateRouter__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IStargateRouter__factory = IStargateRouter__factory;
Object.defineProperty(IStargateRouter__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IStargateRouter__factory.js.map