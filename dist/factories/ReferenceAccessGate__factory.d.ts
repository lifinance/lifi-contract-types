import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ReferenceAccessGate, ReferenceAccessGateInterface } from "../ReferenceAccessGate";
type ReferenceAccessGateConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ReferenceAccessGate__factory extends ContractFactory {
    constructor(...args: ReferenceAccessGateConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _allowlistEnabled: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ReferenceAccessGate>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _allowlistEnabled: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ReferenceAccessGate;
    connect(signer: Signer): ReferenceAccessGate__factory;
    static readonly bytecode = "0x608060405234801561000f575f5ffd5b50604051610eca380380610eca83398101604081905261002e916100f3565b816001600160a01b03811661005c57604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b61006581610088565b5060018054911515600160a01b0260ff60a01b199092169190911790555061013a565b600180546001600160a01b03191690556100a1816100a4565b50565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f5f60408385031215610104575f5ffd5b82516001600160a01b038116811461011a575f5ffd5b6020840151909250801515811461012f575f5ffd5b809150509250929050565b610d83806101475f395ff3fe608060405234801561000f575f5ffd5b5060043610610149575f3560e01c80639aa54181116100c7578063df592f7d1161007d578063e857901511610063578063e857901514610309578063eae4f19f1461031c578063f2fde38b1461033e575f5ffd5b8063df592f7d146102b3578063e30c3978146102eb575f5ffd5b8063b33f95fa116100ad578063b33f95fa1461027a578063babcc5391461028d578063d7644ba2146102a0575f5ffd5b80639aa5418114610254578063ace8bec914610267575f5ffd5b806365c05aed1161011c57806379ba50971161010257806379ba5097146101e95780638da5cb5b146101f157806394c8e4ff1461022f575f5ffd5b806365c05aed146101ce578063715018a6146101e1575f5ffd5b806303f45d411461014d5780631aceaf9e146101845780633002654214610199578063300f32e8146101bb575b5f5ffd5b61016f61015b366004610c07565b60026020525f908152604090205460ff1681565b60405190151581526020015b60405180910390f35b610197610192366004610c2f565b610351565b005b61016f6101a7366004610c07565b60036020525f908152604090205460ff1681565b6101976101c9366004610c2f565b610466565b6101976101dc366004610c2f565b610575565b610197610684565b6101976106b6565b5f5473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161017b565b60015461016f9074010000000000000000000000000000000000000000900460ff1681565b610197610262366004610cae565b610732565b61016f610275366004610cdf565b6107c4565b610197610288366004610cae565b6107e5565b61016f61029b366004610c07565b61086f565b6101976102ae366004610d07565b610926565b61016f6102c1366004610c07565b73ffffffffffffffffffffffffffffffffffffffff165f9081526004602052604090205460ff1690565b60015473ffffffffffffffffffffffffffffffffffffffff1661020a565b610197610317366004610cae565b6109b2565b61016f61032a366004610c07565b60046020525f908152604090205460ff1681565b61019761034c366004610c07565b610a3c565b610359610aeb565b5f5b82811015610460578160045f86868581811061037957610379610d20565b905060200201602081019061038e9190610c07565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f2080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790558383828181106103f2576103f2610d20565b90506020020160208101906104079190610c07565b73ffffffffffffffffffffffffffffffffffffffff167fe120f1c2a7416d3ef8776f69c89583cdc9ab7f2c3e525f55df52c5b5ce45360883604051610450911515815260200190565b60405180910390a260010161035b565b50505050565b61046e610aeb565b5f5b82811015610460578160035f86868581811061048e5761048e610d20565b90506020020160208101906104a39190610c07565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f2080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001691151591909117905583838281811061050757610507610d20565b905060200201602081019061051c9190610c07565b73ffffffffffffffffffffffffffffffffffffffff167f4dcca662d4e33d75d9b9b07c0238c9aa4f2f6a38c018783999d6afa7928cba6283604051610565911515815260200190565b60405180910390a2600101610470565b61057d610aeb565b5f5b82811015610460578160025f86868581811061059d5761059d610d20565b90506020020160208101906105b29190610c07565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f2080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001691151591909117905583838281811061061657610616610d20565b905060200201602081019061062b9190610c07565b73ffffffffffffffffffffffffffffffffffffffff167ffaff2e43eb09669f07ccc23f57fe6afee69e4870bd95b6ea09b70276a373333183604051610674911515815260200190565b60405180910390a260010161057f565b6040517f8905116500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600154339073ffffffffffffffffffffffffffffffffffffffff168114610726576040517f118cdaa700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff821660048201526024015b60405180910390fd5b61072f81610b3f565b50565b61073a610aeb565b73ffffffffffffffffffffffffffffffffffffffff82165f8181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527ffaff2e43eb09669f07ccc23f57fe6afee69e4870bd95b6ea09b70276a373333191015b60405180910390a25050565b5f6107ce8361086f565b80156107de57506107de8261086f565b9392505050565b6107ed610aeb565b73ffffffffffffffffffffffffffffffffffffffff82165f8181526003602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527f4dcca662d4e33d75d9b9b07c0238c9aa4f2f6a38c018783999d6afa7928cba6291016107b8565b73ffffffffffffffffffffffffffffffffffffffff81165f9081526003602052604081205460ff16806108c6575073ffffffffffffffffffffffffffffffffffffffff82165f9081526004602052604090205460ff165b156108d257505f919050565b60015474010000000000000000000000000000000000000000900460ff161580610920575073ffffffffffffffffffffffffffffffffffffffff82165f9081526002602052604090205460ff165b92915050565b61092e610aeb565b6001805482151574010000000000000000000000000000000000000000027fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff9091161790556040517fa1bf86c493917580dec207969ef59976f0c378f10ece581237f19acfbd858f1c906109a790831515815260200190565b60405180910390a150565b6109ba610aeb565b73ffffffffffffffffffffffffffffffffffffffff82165f8181526004602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fe120f1c2a7416d3ef8776f69c89583cdc9ab7f2c3e525f55df52c5b5ce45360891016107b8565b610a44610aeb565b6001805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff00000000000000000000000000000000000000009091168117909155610aa65f5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610b3d576040517f118cdaa700000000000000000000000000000000000000000000000000000000815233600482015260240161071d565b565b600180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905561072f815f805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610c02575f5ffd5b919050565b5f60208284031215610c17575f5ffd5b6107de82610bdf565b80358015158114610c02575f5ffd5b5f5f5f60408486031215610c41575f5ffd5b833567ffffffffffffffff811115610c57575f5ffd5b8401601f81018613610c67575f5ffd5b803567ffffffffffffffff811115610c7d575f5ffd5b8660208260051b8401011115610c91575f5ffd5b602091820194509250610ca5908501610c20565b90509250925092565b5f5f60408385031215610cbf575f5ffd5b610cc883610bdf565b9150610cd660208401610c20565b90509250929050565b5f5f60408385031215610cf0575f5ffd5b610cf983610bdf565b9150610cd660208401610bdf565b5f60208284031215610d17575f5ffd5b6107de82610c20565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffdfea2646970667358221220940c33d98c050077dc35cf67bab05deb4b327cbe080cdea700fb81c095782eab64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_allowlistEnabled";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "acceptOwnership";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "allowlistEnabled";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "allowlisted";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "denylisted";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isAllowed";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isSanctioned";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isTransferable";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "renounceOwnership";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "sanctioned";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setAllowlistEnabled";
        readonly inputs: readonly [{
            readonly name: "_enabled";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setAllowlisted";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_allowed";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setAllowlistedBatch";
        readonly inputs: readonly [{
            readonly name: "_accounts";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "_allowed";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setDenylisted";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_denied";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setDenylistedBatch";
        readonly inputs: readonly [{
            readonly name: "_accounts";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "_denied";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setSanctioned";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_flagged";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setSanctionedBatch";
        readonly inputs: readonly [{
            readonly name: "_accounts";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "_flagged";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "AllowlistEnabledSet";
        readonly inputs: readonly [{
            readonly name: "enabled";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "AllowlistedSet";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "allowed";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DenylistedSet";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "denied";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferStarted";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "SanctionedSet";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "flagged";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "OwnableInvalidOwner";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "OwnableUnauthorizedAccount";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "RenounceDisabled";
        readonly inputs: readonly [];
    }];
    static createInterface(): ReferenceAccessGateInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReferenceAccessGate;
}
export {};
