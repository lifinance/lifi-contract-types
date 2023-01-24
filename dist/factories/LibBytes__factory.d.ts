import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LibBytes, LibBytesInterface } from "../LibBytes";
declare type LibBytesConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LibBytes__factory extends ContractFactory {
    constructor(...args: LibBytesConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LibBytes>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LibBytes;
    connect(signer: Signer): LibBytes__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b98ca003ee0b8a0599e09f418c83fe4c7bcbd6c3cb73314703f8bb2ed64ceca764736f6c63430008110033";
    static readonly abi: {
        inputs: never[];
        name: string;
        type: string;
    }[];
    static createInterface(): LibBytesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LibBytes;
}
export {};
