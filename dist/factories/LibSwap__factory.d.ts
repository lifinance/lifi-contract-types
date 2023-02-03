import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LibSwap, LibSwapInterface } from "../LibSwap";
declare type LibSwapConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LibSwap__factory extends ContractFactory {
    constructor(...args: LibSwapConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LibSwap>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LibSwap;
    connect(signer: Signer): LibSwap__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220a4461d89dbaf6c2b98735913fe664a32b7212f9876b16a2c3a9c33a603f9d51464736f6c63430008110033";
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
