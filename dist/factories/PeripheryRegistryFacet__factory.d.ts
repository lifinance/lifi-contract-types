import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PeripheryRegistryFacet, PeripheryRegistryFacetInterface } from "../PeripheryRegistryFacet";
type PeripheryRegistryFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PeripheryRegistryFacet__factory extends ContractFactory {
    constructor(...args: PeripheryRegistryFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PeripheryRegistryFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PeripheryRegistryFacet;
    connect(signer: Signer): PeripheryRegistryFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506103cf8061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610034575f3560e01c80635c2ed36a14610038578063a516f0f31461004d575b5f5ffd5b61004b610046366004610275565b610089565b005b61006061005b3660046102e0565b61015b565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100916101bb565b6040517fddb1a97e204589b19d70796e7a3363c86670116d11313290b7a7eb064a8f3da190829082906100c7908790879061031f565b908152604051908190036020018120805473ffffffffffffffffffffffffffffffffffffffff939093167fffffffffffffffffffffffff0000000000000000000000000000000000000000909316929092179091557f565ec6e69c37ed7e06dad89507c35f4e77eac7390c9e25b775b6ba442d99ebbc9061014d9086908690869061032e565b60405180910390a150505050565b5f7fddb1a97e204589b19d70796e7a3363c86670116d11313290b7a7eb064a8f3da160405161018d908590859061031f565b9081526040519081900360200190205473ffffffffffffffffffffffffffffffffffffffff16905092915050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff16331461022e576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f5f83601f840112610240575f5ffd5b50813567ffffffffffffffff811115610257575f5ffd5b60208301915083602082850101111561026e575f5ffd5b9250929050565b5f5f5f60408486031215610287575f5ffd5b833567ffffffffffffffff81111561029d575f5ffd5b6102a986828701610230565b909450925050602084013573ffffffffffffffffffffffffffffffffffffffff811681146102d5575f5ffd5b809150509250925092565b5f5f602083850312156102f1575f5ffd5b823567ffffffffffffffff811115610307575f5ffd5b61031385828601610230565b90969095509350505050565b818382375f9101908152919050565b60408152826040820152828460608301375f606084830101525f60607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f860116830101905073ffffffffffffffffffffffffffffffffffffffff8316602083015294935050505056fea26469706673582212200e45e23542f22f4b2666fccebc15bacea905ab5da36f916f461c2c8f74e9f9fb64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getPeripheryContract";
        readonly inputs: readonly [{
            readonly name: "_name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "registerPeripheryContract";
        readonly inputs: readonly [{
            readonly name: "_name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_contractAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "PeripheryContractRegistered";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "contractAddress";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }];
    static createInterface(): PeripheryRegistryFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PeripheryRegistryFacet;
}
export {};
