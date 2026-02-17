import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { TestViolationsPragma, TestViolationsPragmaInterface } from "../TestViolationsPragma";
type TestViolationsPragmaConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestViolationsPragma__factory extends ContractFactory {
    constructor(...args: TestViolationsPragmaConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TestViolationsPragma>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TestViolationsPragma;
    connect(signer: Signer): TestViolationsPragma__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50607480601a5f395ff3fe6080604052348015600e575f5ffd5b50600436106026575f3560e01c8063e16b4a9b14602a575b5f5ffd5b602a60405190815260200160405180910390f3fea2646970667358221220d7fd7a6302b773d4d83157b9ca1c582f7127c0448d13102fdba46ae9aa7ebe3c64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "testFunction";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }];
    static createInterface(): TestViolationsPragmaInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestViolationsPragma;
}
export {};
