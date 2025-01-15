"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibAccess__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "event",
        name: "AccessGranted",
        inputs: [
            {
                name: "account",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "method",
                type: "bytes4",
                indexed: true,
                internalType: "bytes4",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "AccessRevoked",
        inputs: [
            {
                name: "account",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "method",
                type: "bytes4",
                indexed: true,
                internalType: "bytes4",
            },
        ],
        anonymous: false,
    },
];
const _bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220a5fddb5094c62a4fc2a28140eb1ad204da5ce37e6d0a3f84fa4c75154c00dac864736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class LibAccess__factory extends ethers_1.ContractFactory {
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
exports.LibAccess__factory = LibAccess__factory;
Object.defineProperty(LibAccess__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(LibAccess__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=LibAccess__factory.js.map