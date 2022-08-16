import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PeripheryRegistryFacet, PeripheryRegistryFacetInterface } from "../../../src/Facets/PeripheryRegistryFacet";
declare type PeripheryRegistryFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PeripheryRegistryFacet__factory extends ContractFactory {
    constructor(...args: PeripheryRegistryFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PeripheryRegistryFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PeripheryRegistryFacet;
    connect(signer: Signer): PeripheryRegistryFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610395806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635c2ed36a1461003b578063a516f0f314610050575b600080fd5b61004e61004936600461029d565b61008c565b005b61006361005e36600461030d565b610124565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b610094610185565b6040517fddb1a97e204589b19d70796e7a3363c86670116d11313290b7a7eb064a8f3da190829082906100ca908790879061034f565b908152604051908190036020019020805473ffffffffffffffffffffffffffffffffffffffff929092167fffffffffffffffffffffffff000000000000000000000000000000000000000090921691909117905550505050565b60007fddb1a97e204589b19d70796e7a3363c86670116d11313290b7a7eb064a8f3da1604051610157908590859061034f565b9081526040519081900360200190205473ffffffffffffffffffffffffffffffffffffffff16905092915050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610252576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201527f6572000000000000000000000000000000000000000000000000000000000000606482015260840160405180910390fd5b565b60008083601f84011261026657600080fd5b50813567ffffffffffffffff81111561027e57600080fd5b60208301915083602082850101111561029657600080fd5b9250929050565b6000806000604084860312156102b257600080fd5b833567ffffffffffffffff8111156102c957600080fd5b6102d586828701610254565b909450925050602084013573ffffffffffffffffffffffffffffffffffffffff8116811461030257600080fd5b809150509250925092565b6000806020838503121561032057600080fd5b823567ffffffffffffffff81111561033757600080fd5b61034385828601610254565b90969095509350505050565b818382376000910190815291905056fea26469706673582212206e9309a66357dfcabecce286bb4312e06e32a5b947086561174bc76b7a197e7e64736f6c634300080d0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): PeripheryRegistryFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PeripheryRegistryFacet;
}
export {};
