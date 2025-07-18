/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        type: "function",
        name: "balanceOf",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "deposit",
        inputs: [
            {
                name: "token",
                type: "address",
                internalType: "address",
            },
            {
                name: "from",
                type: "address",
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "share",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "amountOut",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "shareOut",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "harvest",
        inputs: [
            {
                name: "token",
                type: "address",
                internalType: "address",
            },
            {
                name: "balance",
                type: "bool",
                internalType: "bool",
            },
            {
                name: "maxChangeAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "registerProtocol",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "setMasterContractApproval",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address",
            },
            {
                name: "masterContract",
                type: "address",
                internalType: "address",
            },
            {
                name: "approved",
                type: "bool",
                internalType: "bool",
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
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "strategyData",
        inputs: [
            {
                name: "token",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "total",
                type: "tuple",
                internalType: "struct StrategyData",
                components: [
                    {
                        name: "strategyStartDate",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "targetPercentage",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "balance",
                        type: "uint128",
                        internalType: "uint128",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "toAmount",
        inputs: [
            {
                name: "token",
                type: "address",
                internalType: "address",
            },
            {
                name: "share",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "roundUp",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "toShare",
        inputs: [
            {
                name: "token",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "roundUp",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [
            {
                name: "share",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "totals",
        inputs: [
            {
                name: "token",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "total",
                type: "tuple",
                internalType: "struct Rebase",
                components: [
                    {
                        name: "elastic",
                        type: "uint128",
                        internalType: "uint128",
                    },
                    {
                        name: "base",
                        type: "uint128",
                        internalType: "uint128",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "transfer",
        inputs: [
            {
                name: "token",
                type: "address",
                internalType: "address",
            },
            {
                name: "from",
                type: "address",
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "share",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "withdraw",
        inputs: [
            {
                name: "token_",
                type: "address",
                internalType: "address",
            },
            {
                name: "from",
                type: "address",
                internalType: "address",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "share",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "amountOut",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "shareOut",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
];
export class IBentoBoxMinimal__factory {
    static abi = _abi;
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
