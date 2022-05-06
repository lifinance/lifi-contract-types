import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Swapper, SwapperInterface } from "../../../src/Facets/Swapper";
declare type SwapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Swapper__factory extends ContractFactory {
    constructor(...args: SwapperConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Swapper>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Swapper;
    connect(signer: Signer): Swapper__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220103b00593357e558c75d256be164e9869bac4f3958c7e3c6b1debf037214654764736f6c63430008070033";
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): SwapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Swapper;
}
export {};
