import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Create3, Create3Interface } from "../Create3";
declare type Create3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Create3__factory extends ContractFactory {
    constructor(...args: Create3ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Create3>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Create3;
    connect(signer: Signer): Create3__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212209d86c11547ee78fe3f89bd9837be0afb2d8f8b3f27bc9c9de6e4aa4e6b933eb364736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "ErrorCreatingContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ErrorCreatingProxy";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TargetAlreadyExists";
        readonly inputs: readonly [];
    }];
    static createInterface(): Create3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Create3;
}
export {};
