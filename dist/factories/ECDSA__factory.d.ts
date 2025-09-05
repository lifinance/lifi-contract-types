import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ECDSA, ECDSAInterface } from "../ECDSA";
type ECDSAConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea264697066735822122029c141479d5018a1b445b8bd2122099fe7590438a172d4cfd096c6cdb3f58df664736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "InvalidSignature";
        readonly inputs: readonly [];
    }];
    static createInterface(): ECDSAInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ECDSA;
}
export {};
