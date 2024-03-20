import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SSTORE2Map, SSTORE2MapInterface } from "../SSTORE2Map";
declare type SSTORE2MapConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SSTORE2Map__factory extends ContractFactory {
    constructor(...args: SSTORE2MapConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SSTORE2Map>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SSTORE2Map;
    connect(signer: Signer): SSTORE2Map__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220c3fd09526a9a340cda33bb53165cb0ec681e30892d69975a80cdacb8b66b774d64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "WriteError";
        readonly inputs: readonly [];
    }];
    static createInterface(): SSTORE2MapInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SSTORE2Map;
}
export {};
