import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { RestrictedContract, RestrictedContractInterface } from "../../AccessManagerFacet.t.sol/RestrictedContract";
declare type RestrictedContractConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RestrictedContract__factory extends ContractFactory {
    constructor(...args: RestrictedContractConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<RestrictedContract>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): RestrictedContract;
    connect(signer: Signer): RestrictedContract__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061012a806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806324188c4714602d575b600080fd5b60336047565b604051901515815260200160405180910390f35b6000604f6055565b50600190565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff90911615151460f1576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5056fea2646970667358221220cbbfda32aa230ed07ba6ad73d96183f372a7b66b794dce09a5518a5f3c6b328164736f6c63430008110033";
    static readonly abi: ({
        inputs: never[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): RestrictedContractInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RestrictedContract;
}
export {};
