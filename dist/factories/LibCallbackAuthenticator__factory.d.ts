import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LibCallbackAuthenticator, LibCallbackAuthenticatorInterface } from "../LibCallbackAuthenticator";
type LibCallbackAuthenticatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LibCallbackAuthenticator__factory extends ContractFactory {
    constructor(...args: LibCallbackAuthenticatorConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LibCallbackAuthenticator>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LibCallbackAuthenticator;
    connect(signer: Signer): LibCallbackAuthenticator__factory;
    static readonly bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea2646970667358221220ddce8af709fff3c765ce5691b9d0f6fd89ec86c6d5f44af1f1e0155fad1cc49764736f6c634300081d0033";
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
    static createInterface(): LibCallbackAuthenticatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LibCallbackAuthenticator;
}
export {};
