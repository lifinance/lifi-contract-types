import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ShortStrings, ShortStringsInterface } from "../ShortStrings";
declare type ShortStringsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220f4375e488b153585b9975a1795bfaba0333f5f92edb96ec2460a348ed7c29db964736f6c63430008110033";
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
