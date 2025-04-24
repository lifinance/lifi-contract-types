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
    static readonly bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea26469706673582212208790e805eb96f860081855bd5748d70a8f91f4230073702b3c25883254b19f4464736f6c634300081d0033";
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
