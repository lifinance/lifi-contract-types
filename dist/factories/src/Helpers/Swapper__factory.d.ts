import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Swapper, SwapperInterface } from "../../../src/Helpers/Swapper";
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
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212204a8569ff353ff16107fb4f3626c45b6dad161029edf3a025e2f4ae02efb8fc8164736f6c634300080d0033";
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
