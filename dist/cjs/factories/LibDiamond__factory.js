"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibDiamond__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
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
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                name: "previousOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "newOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "CalldataEmptyButInitNotZero",
        inputs: [],
    },
    {
        type: "error",
        name: "FacetAddressIsNotZero",
        inputs: [],
    },
    {
        type: "error",
        name: "FacetAddressIsZero",
        inputs: [],
    },
    {
        type: "error",
        name: "FacetContainsNoCode",
        inputs: [],
    },
    {
        type: "error",
        name: "FunctionAlreadyExists",
        inputs: [],
    },
    {
        type: "error",
        name: "FunctionDoesNotExist",
        inputs: [],
    },
    {
        type: "error",
        name: "FunctionIsImmutable",
        inputs: [],
    },
    {
        type: "error",
        name: "IncorrectFacetCutAction",
        inputs: [],
    },
    {
        type: "error",
        name: "InitReverted",
        inputs: [],
    },
    {
        type: "error",
        name: "InitZeroButCalldataNotEmpty",
        inputs: [],
    },
    {
        type: "error",
        name: "NoSelectorsInFace",
        inputs: [],
    },
];
const _bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220eb8cca67f35eecf265aa7f15aa41e1ceed5fdf21e77a6bc05b5520b683d6df6c64736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class LibDiamond__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.LibDiamond__factory = LibDiamond__factory;
Object.defineProperty(LibDiamond__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(LibDiamond__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=LibDiamond__factory.js.map