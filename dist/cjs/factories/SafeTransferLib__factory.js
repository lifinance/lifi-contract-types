"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafeTransferLib__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "error",
        name: "ApproveFailed",
        inputs: [],
    },
    {
        type: "error",
        name: "ETHTransferFailed",
        inputs: [],
    },
    {
        type: "error",
        name: "Permit2AmountOverflow",
        inputs: [],
    },
    {
        type: "error",
        name: "Permit2Failed",
        inputs: [],
    },
    {
        type: "error",
        name: "TransferFailed",
        inputs: [],
    },
    {
        type: "error",
        name: "TransferFromFailed",
        inputs: [],
    },
];
const _bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122092ec241ea66e0f209b951f6f12b02a640b57fb033f71ec39b2bfc85fe8ff043d64736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class SafeTransferLib__factory extends ethers_1.ContractFactory {
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
exports.SafeTransferLib__factory = SafeTransferLib__factory;
Object.defineProperty(SafeTransferLib__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(SafeTransferLib__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=SafeTransferLib__factory.js.map