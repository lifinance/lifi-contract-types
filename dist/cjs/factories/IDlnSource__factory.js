"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDlnSource__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "createOrder",
        inputs: [
            {
                name: "_orderCreation",
                type: "tuple",
                internalType: "struct IDlnSource.OrderCreation",
                components: [
                    {
                        name: "giveTokenAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "giveAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "takeTokenAddress",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "takeAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "takeChainId",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "receiverDst",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "givePatchAuthoritySrc",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "orderAuthorityAddressDst",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "allowedTakerDst",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "externalCall",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "allowedCancelBeneficiarySrc",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
            {
                name: "_affiliateFee",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_referralCode",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "_permitEnvelope",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "orderId",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "globalFixedNativeFee",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
];
class IDlnSource__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IDlnSource__factory = IDlnSource__factory;
Object.defineProperty(IDlnSource__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IDlnSource__factory.js.map