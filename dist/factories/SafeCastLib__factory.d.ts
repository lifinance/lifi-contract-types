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
    static readonly bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea2646970667358221220c2eb571470d0bf3c22df53a83450ef17938389de52b18b1371e520b71df461f064736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "Overflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): SafeCastLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SafeCastLib;
}
export {};
