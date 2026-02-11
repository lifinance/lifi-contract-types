import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { BadLicensePragma, BadLicensePragmaInterface } from "../BadLicensePragma";
type BadLicensePragmaConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BadLicensePragma__factory extends ContractFactory {
    constructor(...args: BadLicensePragmaConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<BadLicensePragma>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): BadLicensePragma;
    connect(signer: Signer): BadLicensePragma__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b5060aa80601a5f395ff3fe6080604052348015600e575f5ffd5b50600436106030575f3560e01c80633fa4f2451460345780635524107714604d575b5f5ffd5b603b5f5481565b60405190815260200160405180910390f35b605c6058366004605e565b5f55565b005b5f60208284031215606d575f5ffd5b503591905056fea26469706673582212204d1b2ae0ab00d386a9f1db58a830de397349f574bec8ac968d4981119f3f341a64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "setValue";
        readonly inputs: readonly [{
            readonly name: "_value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "value";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): BadLicensePragmaInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BadLicensePragma;
}
export {};
