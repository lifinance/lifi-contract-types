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
    static readonly bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f80fdfea2646970667358221220228044ca0071670deb90aaf3eea0764ca6e0d9f34541500ddefeed5c8a09e45d64736f6c63430008160033";
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
