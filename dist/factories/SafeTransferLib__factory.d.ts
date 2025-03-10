import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SafeTransferLib, SafeTransferLibInterface } from "../SafeTransferLib";
declare type SafeTransferLibConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SafeTransferLib__factory extends ContractFactory {
    constructor(...args: SafeTransferLibConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SafeTransferLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SafeTransferLib;
    connect(signer: Signer): SafeTransferLib__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122053f8a6d379b0199b394b334cff3fa0db59621c31638da3a3b3726436e82cff5a64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "ApproveFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ETHTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "Permit2AmountOverflow";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "Permit2Failed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TransferFromFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): SafeTransferLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SafeTransferLib;
}
export {};
