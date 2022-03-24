import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LibSwap, LibSwapInterface } from "../../../src/Libraries/LibSwap";
declare type LibSwapConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LibSwap__factory extends ContractFactory {
    constructor(...args: LibSwapConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LibSwap>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LibSwap;
    connect(signer: Signer): LibSwap__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220c5c5fdb7e0fb92ff5c105e0f734aee145b3e0b30cce4a1edb55a8a2a91df003d64736f6c63430008070033";
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
    static createInterface(): LibSwapInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LibSwap;
}
export {};
