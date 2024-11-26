"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDiamondLoupe__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "facetAddress",
        inputs: [
            {
                name: "_functionSelector",
                type: "bytes4",
                internalType: "bytes4",
            },
        ],
        outputs: [
            {
                name: "facetAddress_",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "facetAddresses",
        inputs: [],
        outputs: [
            {
                name: "facetAddresses_",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "facetFunctionSelectors",
        inputs: [
            {
                name: "_facet",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "facetFunctionSelectors_",
                type: "bytes4[]",
                internalType: "bytes4[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "facets",
        inputs: [],
        outputs: [
            {
                name: "facets_",
                type: "tuple[]",
                internalType: "struct IDiamondLoupe.Facet[]",
                components: [
                    {
                        name: "facetAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "functionSelectors",
                        type: "bytes4[]",
                        internalType: "bytes4[]",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
];
class IDiamondLoupe__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IDiamondLoupe__factory = IDiamondLoupe__factory;
Object.defineProperty(IDiamondLoupe__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IDiamondLoupe__factory.js.map