import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { StdInvariant, StdInvariantInterface } from "../StdInvariant";
declare type StdInvariantConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class StdInvariant__factory extends ContractFactory {
    constructor(...args: StdInvariantConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<StdInvariant>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): StdInvariant;
    connect(signer: Signer): StdInvariant__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610913806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806385226c811161005b57806385226c81146100d0578063916a17c6146100e5578063b5508aa9146100ed578063e20c9f71146100f557600080fd5b80631ed7831c1461008d5780633e5e3c23146100ab5780633f7286f4146100b357806366d9a9a0146100bb575b600080fd5b6100956100fd565b6040516100a2919061066c565b60405180910390f35b61009561016c565b6100956101d9565b6100c3610246565b6040516100a291906106c6565b6100d8610357565b6040516100a291906107bc565b6100c3610427565b6100d861052f565b6100956105ff565b6060600180548060200260200160405190810160405280929190818152602001828054801561016257602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610137575b5050505050905090565b606060038054806020026020016040519081016040528092919081815260200182805480156101625760200282019190600052602060002090815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610137575050505050905090565b606060028054806020026020016040519081016040528092919081815260200182805480156101625760200282019190600052602060002090815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610137575050505050905090565b60606006805480602002602001604051908101604052809291908181526020016000905b8282101561034e57600084815260209081902060408051808201825260028602909201805473ffffffffffffffffffffffffffffffffffffffff16835260018101805483518187028101870190945280845293949193858301939283018282801561033657602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116102e35790505b5050505050815250508152602001906001019061026a565b50505050905090565b60606005805480602002602001604051908101604052809291908181526020016000905b8282101561034e57838290600052602060002001805461039a9061088a565b80601f01602080910402602001604051908101604052809291908181526020018280546103c69061088a565b80156104135780601f106103e857610100808354040283529160200191610413565b820191906000526020600020905b8154815290600101906020018083116103f657829003601f168201915b50505050508152602001906001019061037b565b60606007805480602002602001604051908101604052809291908181526020016000905b8282101561034e57600084815260209081902060408051808201825260028602909201805473ffffffffffffffffffffffffffffffffffffffff16835260018101805483518187028101870190945280845293949193858301939283018282801561051757602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116104c45790505b5050505050815250508152602001906001019061044b565b60606004805480602002602001604051908101604052809291908181526020016000905b8282101561034e5783829060005260206000200180546105729061088a565b80601f016020809104026020016040519081016040528092919081815260200182805461059e9061088a565b80156105eb5780601f106105c0576101008083540402835291602001916105eb565b820191906000526020600020905b8154815290600101906020018083116105ce57829003601f168201915b505050505081526020019060010190610553565b606060008054806020026020016040519081016040528092919081815260200182805480156101625760200282019190600052602060002090815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610137575050505050905090565b6020808252825182820181905260009190848201906040850190845b818110156106ba57835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101610688565b50909695505050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b848110156107ad578984037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc00186528251805173ffffffffffffffffffffffffffffffffffffffff168552880151888501889052805188860181905290890190839060608701905b808310156107985783517fffffffff00000000000000000000000000000000000000000000000000000000168252928b019260019290920191908b0190610756565b50978a019795505050918701916001016106ee565b50919998505050505050505050565b6000602080830181845280855180835260408601915060408160051b87010192508387016000805b8381101561087c577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc089870301855282518051808852835b81811015610837578281018a01518982018b0152890161081c565b508781018901849052601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169096018701955093860193918601916001016107e4565b509398975050505050505050565b600181811c9082168061089e57607f821691505b6020821081036108d7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea264697066735822122052a87aa61b8ac2f6327478925f00c32c0d2be008feaf5d15943b0591dd20575e64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "excludeArtifacts";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "excludedArtifacts_";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "excludeContracts";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "excludedContracts_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "excludeSenders";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "excludedSenders_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetArtifactSelectors";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedArtifactSelectors_";
            readonly type: "tuple[]";
            readonly internalType: "struct StdInvariant.FuzzSelector[]";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "selectors";
                readonly type: "bytes4[]";
                readonly internalType: "bytes4[]";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetArtifacts";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedArtifacts_";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetContracts";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedContracts_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetSelectors";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedSelectors_";
            readonly type: "tuple[]";
            readonly internalType: "struct StdInvariant.FuzzSelector[]";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "selectors";
                readonly type: "bytes4[]";
                readonly internalType: "bytes4[]";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetSenders";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedSenders_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): StdInvariantInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StdInvariant;
}
export {};
