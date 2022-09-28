import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LibAccess, LibAccessInterface } from "../../../src/Libraries/LibAccess";
declare type LibAccessConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LibAccess__factory extends ContractFactory {
    constructor(...args: LibAccessConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LibAccess>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LibAccess;
    connect(signer: Signer): LibAccess__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212200a69866e045c6a3793349d578310a67075ef04b526e7495ae7e3baede1abaf2964736f6c63430008100033";
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
    static createInterface(): LibAccessInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LibAccess;
}
export {};
