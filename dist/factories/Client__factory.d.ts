import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Client, ClientInterface } from "../Client";
declare type ClientConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Client__factory extends ContractFactory {
    constructor(...args: ClientConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Client>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Client;
    connect(signer: Signer): Client__factory;
    static readonly bytecode = "0x60c9610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80633ab8c0d0146038575b600080fd5b605e7f97a657c90000000000000000000000000000000000000000000000000000000081565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200160405180910390f3fea26469706673582212206d62bc00bd3c0b6a0681381968d552fed93154e9bbd18a9cee07363716efc2ed64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "EVM_EXTRA_ARGS_V1_TAG";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ClientInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Client;
}
export {};
