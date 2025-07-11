import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ShortStrings, ShortStringsInterface } from "../ShortStrings";
type ShortStringsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ShortStrings__factory extends ContractFactory {
    constructor(...args: ShortStringsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ShortStrings>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ShortStrings;
    connect(signer: Signer): ShortStrings__factory;
    static readonly bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea2646970667358221220616813bcc4102051375814bc64ee3c7ef621130ad593e45c1801078d61ff602c64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "InvalidShortString";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "StringTooLong";
        readonly inputs: readonly [{
            readonly name: "str";
            readonly type: "string";
            readonly internalType: "string";
        }];
    }];
    static createInterface(): ShortStringsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ShortStrings;
}
export {};
