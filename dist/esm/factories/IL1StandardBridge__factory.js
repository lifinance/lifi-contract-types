/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        type: "function",
        name: "depositERC20To",
        inputs: [
            {
                name: "_l1Token",
                type: "address",
                internalType: "address",
            },
            {
                name: "_l2Token",
                type: "address",
                internalType: "address",
            },
            {
                name: "_to",
                type: "address",
                internalType: "address",
            },
            {
                name: "_amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_l2Gas",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "_data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "depositETHTo",
        inputs: [
            {
                name: "_to",
                type: "address",
                internalType: "address",
            },
            {
                name: "_l2Gas",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "_data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "depositTo",
        inputs: [
            {
                name: "_to",
                type: "address",
                internalType: "address",
            },
            {
                name: "_amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
];
export class IL1StandardBridge__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
Object.defineProperty(IL1StandardBridge__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IL1StandardBridge__factory.js.map