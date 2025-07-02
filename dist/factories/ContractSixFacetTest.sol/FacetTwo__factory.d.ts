import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { FacetTwo, FacetTwoInterface } from "../../ContractSixFacetTest.sol/FacetTwo";
declare type FacetTwoConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FacetTwo__factory extends ContractFactory {
    constructor(...args: FacetTwoConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<FacetTwo>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): FacetTwo;
    connect(signer: Signer): FacetTwo__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b5061016a8061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061003f575f3560e01c80633b19e84a1461004357806361d027b314610085578063f0f44260146100a4575b5f5ffd5b5f5473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b5f5461005c9073ffffffffffffffffffffffffffffffffffffffff1681565b6100f86100b23660046100fa565b5f80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b005b5f6020828403121561010a575f5ffd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461012d575f5ffd5b939250505056fea2646970667358221220aa048981328f1ed6a58bc13559c094672b43e462799eca3342e024d4a1b41f1e64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getTreasury";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setTreasury";
        readonly inputs: readonly [{
            readonly name: "_treasury";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "treasury";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): FacetTwoInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FacetTwo;
}
export {};
