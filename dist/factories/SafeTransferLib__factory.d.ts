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
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207523ce54f8c54cb1de69030ee0b0d6f02597d94e0de7712a5d7d5a3e2f29b28b64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "one";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "two";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "retsize";
            readonly type: "uint256";
        }];
        readonly name: "Debug";
        readonly type: "event";
    }];
    static createInterface(): SafeTransferLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SafeTransferLib;
}
export {};
