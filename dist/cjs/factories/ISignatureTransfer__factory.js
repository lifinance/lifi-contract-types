"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISignatureTransfer__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "DOMAIN_SEPARATOR",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "invalidateUnorderedNonces",
        inputs: [
            {
                name: "wordPos",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "mask",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "nonceBitmap",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
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
        name: "permitTransferFrom",
        inputs: [
            {
                name: "permit",
                type: "tuple",
                internalType: "struct ISignatureTransfer.PermitTransferFrom",
                components: [
                    {
                        name: "permitted",
                        type: "tuple",
                        internalType: "struct ISignatureTransfer.TokenPermissions",
                        components: [
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
                        ],
                    },
                    {
                        name: "nonce",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "deadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
            {
                name: "transferDetails",
                type: "tuple",
                internalType: "struct ISignatureTransfer.SignatureTransferDetails",
                components: [
                    {
                        name: "to",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "requestedAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
            {
                name: "signature",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "permitTransferFrom",
        inputs: [
            {
                name: "permit",
                type: "tuple",
                internalType: "struct ISignatureTransfer.PermitBatchTransferFrom",
                components: [
                    {
                        name: "permitted",
                        type: "tuple[]",
                        internalType: "struct ISignatureTransfer.TokenPermissions[]",
                        components: [
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
                        ],
                    },
                    {
                        name: "nonce",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "deadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
            {
                name: "transferDetails",
                type: "tuple[]",
                internalType: "struct ISignatureTransfer.SignatureTransferDetails[]",
                components: [
                    {
                        name: "to",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "requestedAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
            {
                name: "signature",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "permitWitnessTransferFrom",
        inputs: [
            {
                name: "permit",
                type: "tuple",
                internalType: "struct ISignatureTransfer.PermitTransferFrom",
                components: [
                    {
                        name: "permitted",
                        type: "tuple",
                        internalType: "struct ISignatureTransfer.TokenPermissions",
                        components: [
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
                        ],
                    },
                    {
                        name: "nonce",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "deadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
            {
                name: "transferDetails",
                type: "tuple",
                internalType: "struct ISignatureTransfer.SignatureTransferDetails",
                components: [
                    {
                        name: "to",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "requestedAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
            {
                name: "witness",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "witnessTypeString",
                type: "string",
                internalType: "string",
            },
            {
                name: "signature",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "permitWitnessTransferFrom",
        inputs: [
            {
                name: "permit",
                type: "tuple",
                internalType: "struct ISignatureTransfer.PermitBatchTransferFrom",
                components: [
                    {
                        name: "permitted",
                        type: "tuple[]",
                        internalType: "struct ISignatureTransfer.TokenPermissions[]",
                        components: [
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
                        ],
                    },
                    {
                        name: "nonce",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "deadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
            {
                name: "transferDetails",
                type: "tuple[]",
                internalType: "struct ISignatureTransfer.SignatureTransferDetails[]",
                components: [
                    {
                        name: "to",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "requestedAmount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
            {
                name: "witness",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "witnessTypeString",
                type: "string",
                internalType: "string",
            },
            {
                name: "signature",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "UnorderedNonceInvalidation",
        inputs: [
            {
                name: "owner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "word",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "mask",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "InvalidAmount",
        inputs: [
            {
                name: "maxAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "LengthMismatch",
        inputs: [],
    },
];
class ISignatureTransfer__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISignatureTransfer__factory = ISignatureTransfer__factory;
Object.defineProperty(ISignatureTransfer__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=ISignatureTransfer__factory.js.map