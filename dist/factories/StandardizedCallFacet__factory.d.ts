import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { StandardizedCallFacet, StandardizedCallFacetInterface } from "../StandardizedCallFacet";
declare type StandardizedCallFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class StandardizedCallFacet__factory extends ContractFactory {
    constructor(...args: StandardizedCallFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<StandardizedCallFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): StandardizedCallFacet;
    connect(signer: Signer): StandardizedCallFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061028e806100206000396000f3fe60806040526004361061001e5760003560e01c8063d6a4bc5014610023575b600080fd5b610036610031366004610139565b610038565b005b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6000818161006685610208565b7fffffffff0000000000000000000000000000000000000000000000000000000016815260208101919091526040016000205473ffffffffffffffffffffffffffffffffffffffff169050806100e8576040517fa9ad62f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080845160208601845af43d6000803e808015610105573d6000f35b3d6000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561014b57600080fd5b813567ffffffffffffffff8082111561016357600080fd5b818401915084601f83011261017757600080fd5b8135818111156101895761018961010a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156101cf576101cf61010a565b816040528281528760208487010111156101e857600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000815160208301517fffffffff00000000000000000000000000000000000000000000000000000000808216935060048310156102505780818460040360031b1b83161693505b50505091905056fea26469706673582212201e123d915c7d7ab2821cebb0281650943feb50830506b570e219126fbcd4ed6264736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "standardizedCall";
        readonly inputs: readonly [{
            readonly name: "callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "error";
        readonly name: "FunctionDoesNotExist";
        readonly inputs: readonly [];
    }];
    static createInterface(): StandardizedCallFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StandardizedCallFacet;
}
export {};
