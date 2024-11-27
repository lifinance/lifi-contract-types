"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDiamondCut__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "diamondCut",
        inputs: [
            {
                name: "_diamondCut",
                type: "tuple[]",
                internalType: "struct LibDiamond.FacetCut[]",
                components: [
                    {
                        name: "facetAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "action",
                        type: "uint8",
                        internalType: "enum LibDiamond.FacetCutAction",
                    },
                    {
                        name: "functionSelectors",
                        type: "bytes4[]",
                        internalType: "bytes4[]",
                    },
                ],
            },
            {
                name: "_init",
                type: "address",
                internalType: "address",
            },
            {
                name: "_calldata",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "DiamondCut",
        inputs: [
            {
                name: "_diamondCut",
                type: "tuple[]",
                indexed: false,
                internalType: "struct LibDiamond.FacetCut[]",
                components: [
                    {
                        name: "facetAddress",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "action",
                        type: "uint8",
                        internalType: "enum LibDiamond.FacetCutAction",
                    },
                    {
                        name: "functionSelectors",
                        type: "bytes4[]",
                        internalType: "bytes4[]",
                    },
                ],
            },
            {
                name: "_init",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "_calldata",
                type: "bytes",
                indexed: false,
                internalType: "bytes",
            },
        ],
        anonymous: false,
    },
];
class IDiamondCut__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IDiamondCut__factory = IDiamondCut__factory;
Object.defineProperty(IDiamondCut__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=IDiamondCut__factory.js.map