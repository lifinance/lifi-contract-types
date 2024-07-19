import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LibClone, LibCloneInterface } from "../LibClone";
declare type LibCloneConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LibClone__factory extends ContractFactory {
    constructor(...args: LibCloneConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LibClone>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LibClone;
    connect(signer: Signer): LibClone__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122055c30696bab54e91bcfafbaa125401ffc7170c5a6cdc3f859e37dd4e66964e8f64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "DeploymentFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ETHTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SaltDoesNotStartWith";
        readonly inputs: readonly [];
    }];
    static createInterface(): LibCloneInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LibClone;
}
export {};
