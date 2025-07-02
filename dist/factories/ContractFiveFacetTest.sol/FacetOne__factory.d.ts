import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { FacetOne, FacetOneInterface } from "../../ContractFiveFacetTest.sol/FacetOne";
declare type FacetOneConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FacetOne__factory extends ContractFactory {
    constructor(...args: FacetOneConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<FacetOne>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): FacetOne;
    connect(signer: Signer): FacetOne__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b5061016a8061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061003f575f3560e01c80636e9960c314610043578063704b6c0214610085578063f851a440146100db575b5f5ffd5b5f5473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100d96100933660046100fa565b5f80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b005b5f5461005c9073ffffffffffffffffffffffffffffffffffffffff1681565b5f6020828403121561010a575f5ffd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461012d575f5ffd5b939250505056fea2646970667358221220b3bc6dafef17f0f55aa6b6762509c3c2198415a9204c22eb810796eafb3932f364736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "admin";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getAdmin";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setAdmin";
        readonly inputs: readonly [{
            readonly name: "_admin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): FacetOneInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FacetOne;
}
export {};
