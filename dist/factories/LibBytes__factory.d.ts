import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LibBytes, LibBytesInterface } from "../LibBytes";
declare type LibBytesConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LibBytes__factory extends ContractFactory {
    constructor(...args: LibBytesConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LibBytes>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LibBytes;
    connect(signer: Signer): LibBytes__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220395ada04f2693663f5c7d452d8e57216a05355b0679b3ee6373bf896aee0ce5864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "AddressOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): LibBytesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LibBytes;
}
export {};
