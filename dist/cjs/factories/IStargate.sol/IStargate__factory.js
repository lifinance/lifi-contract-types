"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IStargate__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "quoteOFT",
        inputs: [
            {
                name: "_sendParam",
                type: "tuple",
                internalType: "struct IStargate.SendParam",
                components: [
                    {
                        name: "dstEid",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "to",
                        type: "bytes32",
                        internalType: "bytes32",
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
                        name: "extraOptions",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "composeMsg",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "oftCmd",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        outputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct IStargate.OFTLimit",
                components: [
                    {
                        name: "minAmountLD",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "maxAmountLD",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
            {
                name: "oftFeeDetails",
                type: "tuple[]",
                internalType: "struct IStargate.OFTFeeDetail[]",
                components: [
                    {
                        name: "feeAmountLD",
                        type: "int256",
                        internalType: "int256",
                    },
                    {
                        name: "description",
                        type: "string",
                        internalType: "string",
                    },
                ],
            },
            {
                name: "",
                type: "tuple",
                internalType: "struct IStargate.OFTReceipt",
                components: [
                    {
                        name: "amountSentLD",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "amountReceivedLD",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "quoteSend",
        inputs: [
            {
                name: "_sendParam",
                type: "tuple",
                internalType: "struct IStargate.SendParam",
                components: [
                    {
                        name: "dstEid",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "to",
                        type: "bytes32",
                        internalType: "bytes32",
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
                        name: "extraOptions",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "composeMsg",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "oftCmd",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
            {
                name: "_payInLzToken",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct IStargate.MessagingFee",
                components: [
                    {
                        name: "nativeFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "lzTokenFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "sendToken",
        inputs: [
            {
                name: "_sendParam",
                type: "tuple",
                internalType: "struct IStargate.SendParam",
                components: [
                    {
                        name: "dstEid",
                        type: "uint32",
                        internalType: "uint32",
                    },
                    {
                        name: "to",
                        type: "bytes32",
                        internalType: "bytes32",
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
                        name: "extraOptions",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "composeMsg",
                        type: "bytes",
                        internalType: "bytes",
                    },
                    {
                        name: "oftCmd",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
            {
                name: "_fee",
                type: "tuple",
                internalType: "struct IStargate.MessagingFee",
                components: [
                    {
                        name: "nativeFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "lzTokenFee",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
            {
                name: "_refundAddress",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "msgReceipt",
                type: "tuple",
                internalType: "struct IStargate.MessagingReceipt",
                components: [
                    {
                        name: "guid",
                        type: "bytes32",
                        internalType: "bytes32",
                    },
                    {
                        name: "nonce",
                        type: "uint64",
                        internalType: "uint64",
                    },
                    {
                        name: "fee",
                        type: "tuple",
                        internalType: "struct IStargate.MessagingFee",
                        components: [
                            {
                                name: "nativeFee",
                                type: "uint256",
                                internalType: "uint256",
                            },
                            {
                                name: "lzTokenFee",
                                type: "uint256",
                                internalType: "uint256",
                            },
                        ],
                    },
                ],
            },
            {
                name: "oftReceipt",
                type: "tuple",
                internalType: "struct IStargate.OFTReceipt",
                components: [
                    {
                        name: "amountSentLD",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "amountReceivedLD",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
            {
                name: "ticket",
                type: "tuple",
                internalType: "struct Ticket",
                components: [
                    {
                        name: "ticketId",
                        type: "uint72",
                        internalType: "uint72",
                    },
                    {
                        name: "passengerBytes",
                        type: "bytes",
                        internalType: "bytes",
                    },
                ],
            },
        ],
        stateMutability: "payable",
    },
];
class IStargate__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IStargate__factory = IStargate__factory;
Object.defineProperty(IStargate__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IStargate__factory.js.map