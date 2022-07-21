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
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212204a7148a806d3dce83b40137b3b08e3be085b11acd27d9fdde1ed64bc38f0b27d64736f6c634300080d0033";
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
