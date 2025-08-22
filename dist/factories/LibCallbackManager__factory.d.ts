import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LibCallbackManager, LibCallbackManagerInterface } from "../LibCallbackManager";
type LibCallbackManagerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LibCallbackManager__factory extends ContractFactory {
    constructor(...args: LibCallbackManagerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LibCallbackManager>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LibCallbackManager;
    connect(signer: Signer): LibCallbackManager__factory;
    static readonly bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea264697066735822122044d424d4fb48c2b2c22da8b2a84a9cebd1ce67eea1d9261b86bcd43074ee6bb764736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "UnexpectedCallbackSender";
        readonly inputs: readonly [{
            readonly name: "actual";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "expected";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    static createInterface(): LibCallbackManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LibCallbackManager;
}
export {};
