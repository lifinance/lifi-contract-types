"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeripheryRegistryFacet__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "getPeripheryContract",
        inputs: [
            {
                name: "_name",
                type: "string",
                internalType: "string",
            },
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "registerPeripheryContract",
        inputs: [
            {
                name: "_name",
                type: "string",
                internalType: "string",
            },
            {
                name: "_contractAddress",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "PeripheryContractRegistered",
        inputs: [
            {
                name: "name",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "contractAddress",
                type: "address",
                indexed: false,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "OnlyContractOwner",
        inputs: [],
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506103e2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635c2ed36a1461003b578063a516f0f314610050575b600080fd5b61004e61004936600461027d565b61008c565b005b61006361005e3660046102ed565b61015e565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100946101bf565b6040517fddb1a97e204589b19d70796e7a3363c86670116d11313290b7a7eb064a8f3da190829082906100ca908790879061032f565b908152604051908190036020018120805473ffffffffffffffffffffffffffffffffffffffff939093167fffffffffffffffffffffffff0000000000000000000000000000000000000000909316929092179091557f565ec6e69c37ed7e06dad89507c35f4e77eac7390c9e25b775b6ba442d99ebbc906101509086908690869061033f565b60405180910390a150505050565b60007fddb1a97e204589b19d70796e7a3363c86670116d11313290b7a7eb064a8f3da1604051610191908590859061032f565b9081526040519081900360200190205473ffffffffffffffffffffffffffffffffffffffff16905092915050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610232576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60008083601f84011261024657600080fd5b50813567ffffffffffffffff81111561025e57600080fd5b60208301915083602082850101111561027657600080fd5b9250929050565b60008060006040848603121561029257600080fd5b833567ffffffffffffffff8111156102a957600080fd5b6102b586828701610234565b909450925050602084013573ffffffffffffffffffffffffffffffffffffffff811681146102e257600080fd5b809150509250925092565b6000806020838503121561030057600080fd5b823567ffffffffffffffff81111561031757600080fd5b61032385828601610234565b90969095509350505050565b8183823760009101908152919050565b6040815282604082015282846060830137600060608483010152600060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f860116830101905073ffffffffffffffffffffffffffffffffffffffff8316602083015294935050505056fea2646970667358221220d055510f3177bc09228db0cbb27fca4aa790f116109f62d20afec449dc73c6d064736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class PeripheryRegistryFacet__factory extends ethers_1.ContractFactory {
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
exports.PeripheryRegistryFacet__factory = PeripheryRegistryFacet__factory;
Object.defineProperty(PeripheryRegistryFacet__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(PeripheryRegistryFacet__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=PeripheryRegistryFacet__factory.js.map