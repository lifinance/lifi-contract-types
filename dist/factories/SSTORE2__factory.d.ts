import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SSTORE2, SSTORE2Interface } from "../SSTORE2";
declare type SSTORE2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SSTORE2__factory extends ContractFactory {
    constructor(...args: SSTORE2ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SSTORE2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SSTORE2;
    connect(signer: Signer): SSTORE2__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220fe5112b200d1581b4a48c690514ec45c16ed24a9b44cefece687115a27613d0b64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "WriteError";
        readonly inputs: readonly [];
    }];
    static createInterface(): SSTORE2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): SSTORE2;
}
export {};
