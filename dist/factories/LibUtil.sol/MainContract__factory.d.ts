import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { MainContract, MainContractInterface } from "../../LibUtil.sol/MainContract";
declare type MainContractConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MainContract__factory extends ContractFactory {
    constructor(...args: MainContractConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MainContract>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MainContract;
    connect(signer: Signer): MainContract__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610265806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633af5bfff1461003b578063f24a1c9214610050575b600080fd5b61004e6100493660046101c3565b610063565b005b61004e61005e3660046101c3565b61013b565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fb0bea725000000000000000000000000000000000000000000000000000000001790529051600091829173ffffffffffffffffffffffffffffffffffffffff8516916100e191610200565b6000604051808303816000865af19150503d806000811461011e576040519150601f19603f3d011682016040523d82523d6000602084013e610123565b606091505b50915091508161013657610136816101b9565b505050565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f591a2a69000000000000000000000000000000000000000000000000000000001790529051600091829173ffffffffffffffffffffffffffffffffffffffff8516916100e191610200565b8051602082018181fd5b6000602082840312156101d557600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146101f957600080fd5b9392505050565b6000825160005b818110156102215760208186018101518583015201610207565b50600092019182525091905056fea2646970667358221220041b2b240ce23cf9c03340c187d567a1f69e6f97418514fe030a46dbee7cca2f64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "topLevelFunction1";
        readonly inputs: readonly [{
            readonly name: "callTo";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "topLevelFunction2";
        readonly inputs: readonly [{
            readonly name: "callTo";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): MainContractInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MainContract;
}
export {};
