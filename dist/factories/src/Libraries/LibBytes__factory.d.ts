import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LibBytes, LibBytesInterface } from "../../../src/Libraries/LibBytes";
declare type LibBytesConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LibBytes__factory extends ContractFactory {
    constructor(...args: LibBytesConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LibBytes>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LibBytes;
    connect(signer: Signer): LibBytes__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220cefbdf76a4ac1e6a63a20017e3b6a4f9415fe72ddfab043c3e9df64c286c873a64736f6c63430008100033";
    static readonly abi: {
        inputs: never[];
        name: string;
        type: string;
    }[];
    static createInterface(): LibBytesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LibBytes;
}
export {};
