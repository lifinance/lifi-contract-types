import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ECDSA, ECDSAInterface } from "../ECDSA";
declare type ECDSAConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ECDSA__factory extends ContractFactory {
    constructor(...args: ECDSAConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ECDSA>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ECDSA;
    connect(signer: Signer): ECDSA__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220342de6632cdb7f93d00adf0b6172b6575c2a819a416a3269162f8fda93242c6b64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "InvalidSignature";
        readonly inputs: readonly [];
    }];
    static createInterface(): ECDSAInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ECDSA;
}
export {};
