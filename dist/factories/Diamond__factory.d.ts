import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Diamond, DiamondInterface } from "../Diamond";
declare type DiamondConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Diamond__factory extends ContractFactory {
    constructor(...args: DiamondConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Diamond>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Diamond;
    connect(signer: Signer): Diamond__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50606c80601a5f395ff3fe6080604052731000000000000000000000000000000000000001365f5f375f5f365f845af43d5f5f3e8080156032573d5ff35b3d5ffdfea2646970667358221220249362c2e9b202ee746c7cf4ccd5b91455cd930beaff716ebad543302b37c0c464736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "error";
        readonly name: "NoFacetSet";
        readonly inputs: readonly [];
    }];
    static createInterface(): DiamondInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Diamond;
}
export {};
