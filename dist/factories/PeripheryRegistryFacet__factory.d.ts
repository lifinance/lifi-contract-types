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
    static readonly bytecode = "0x608060405234801561001057600080fd5b506103e2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635c2ed36a1461003b578063a516f0f314610050575b600080fd5b61004e61004936600461027d565b61008c565b005b61006361005e3660046102ed565b61015e565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100946101bf565b6040517fddb1a97e204589b19d70796e7a3363c86670116d11313290b7a7eb064a8f3da190829082906100ca908790879061032f565b908152604051908190036020018120805473ffffffffffffffffffffffffffffffffffffffff939093167fffffffffffffffffffffffff0000000000000000000000000000000000000000909316929092179091557f565ec6e69c37ed7e06dad89507c35f4e77eac7390c9e25b775b6ba442d99ebbc906101509086908690869061033f565b60405180910390a150505050565b60007fddb1a97e204589b19d70796e7a3363c86670116d11313290b7a7eb064a8f3da1604051610191908590859061032f565b9081526040519081900360200190205473ffffffffffffffffffffffffffffffffffffffff16905092915050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610232576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60008083601f84011261024657600080fd5b50813567ffffffffffffffff81111561025e57600080fd5b60208301915083602082850101111561027657600080fd5b9250929050565b60008060006040848603121561029257600080fd5b833567ffffffffffffffff8111156102a957600080fd5b6102b586828701610234565b909450925050602084013573ffffffffffffffffffffffffffffffffffffffff811681146102e257600080fd5b809150509250925092565b6000806020838503121561030057600080fd5b823567ffffffffffffffff81111561031757600080fd5b61032385828601610234565b90969095509350505050565b8183823760009101908152919050565b6040815282604082015282846060830137600060608483010152600060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f860116830101905073ffffffffffffffffffffffffffffffffffffffff8316602083015294935050505056fea2646970667358221220a08a69dcf05d0da0cca80ea6e8a7b6e2f47da1bc543f7d062346fb693984409f64736f6c63430008110033";
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
