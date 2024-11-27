/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        type: "function",
        name: "swap",
        inputs: [
            {
                name: "recipient",
                type: "address",
                internalType: "address",
            },
            {
                name: "zeroForOne",
                type: "bool",
                internalType: "bool",
            },
            {
                name: "amountSpecified",
                type: "int256",
                internalType: "int256",
            },
            {
                name: "sqrtPriceLimitX96",
                type: "uint160",
                internalType: "uint160",
            },
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "amount0",
                type: "int256",
                internalType: "int256",
            },
            {
                name: "amount1",
                type: "int256",
                internalType: "int256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "token0",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "token1",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
];
export class IUniswapV3Pool__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
Object.defineProperty(IUniswapV3Pool__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IUniswapV3Pool__factory.js.map