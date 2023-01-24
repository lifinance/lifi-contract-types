import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LibAccess, LibAccessInterface } from "../LibAccess";
declare type LibAccessConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LibAccess__factory extends ContractFactory {
    constructor(...args: LibAccessConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LibAccess>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LibAccess;
    connect(signer: Signer): LibAccess__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212202af41103e8825f92933a68267ca9a53c8f9ac3781801a81aae7ba5608c02fde364736f6c63430008110033";
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
