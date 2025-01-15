"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECDSA__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "error",
        name: "InvalidSignature",
        inputs: [],
    },
];
const _bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220aa77467795fb7022b7c56146b0e24bc2031b05f305a7768611cf93ed8f93f46e64736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class ECDSA__factory extends ethers_1.ContractFactory {
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
exports.ECDSA__factory = ECDSA__factory;
Object.defineProperty(ECDSA__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(ECDSA__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=ECDSA__factory.js.map