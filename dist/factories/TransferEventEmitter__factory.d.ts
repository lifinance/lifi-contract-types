import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { TransferEventEmitter, TransferEventEmitterInterface } from "../TransferEventEmitter";
declare type TransferEventEmitterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TransferEventEmitter__factory extends ContractFactory {
    constructor(...args: TransferEventEmitterConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TransferEventEmitter>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TransferEventEmitter;
    connect(signer: Signer): TransferEventEmitter__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b5060968061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063bbf2397414602d575b600080fd5b60336035565b005b6040517f2ec600c9806a8ba595ce14cf568dda3052971ad28dd2bc1b75baf21440ec95b690600090a156fea264697066735822122026182aba718306c1351c50285650622b490200f4df68a32d4439d9854817089c64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "emitTransferEvent";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "TokensTransferred";
        readonly inputs: readonly [];
        readonly anonymous: false;
    }];
    static createInterface(): TransferEventEmitterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TransferEventEmitter;
}
export {};
