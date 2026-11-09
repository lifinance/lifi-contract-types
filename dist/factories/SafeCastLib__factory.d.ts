import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SafeCastLib, SafeCastLibInterface } from "../SafeCastLib";
type SafeCastLibConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SafeCastLib__factory extends ContractFactory {
    constructor(...args: SafeCastLibConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SafeCastLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SafeCastLib;
    connect(signer: Signer): SafeCastLib__factory;
    static readonly bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea26469706673582212203a4ece0ba9e500aa6e0db05f2e6eb28c254d0b526c5ea544a416d12706ef928564736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "Overflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): SafeCastLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SafeCastLib;
}
export {};
