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
    static readonly bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea2646970667358221220d069b6d682e7b143374314ccd31877cc9e200f72793c77867710de5b3ce341f164736f6c634300081d0033";
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
