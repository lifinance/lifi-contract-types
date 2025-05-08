import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { SafeProxy, SafeProxyInterface } from "../../SafeProxyFactory_flattened.sol/SafeProxy";
declare type SafeProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SafeProxy__factory extends ContractFactory {
    constructor(...args: SafeProxyConstructorParams);
    deploy(_singleton: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SafeProxy>;
    getDeployTransaction(_singleton: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SafeProxy;
    connect(signer: Signer): SafeProxy__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50604051610176380380610176833981016040819052602b9160b2565b6001600160a01b038116608f5760405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b606482015260840160405180910390fd5b5f80546001600160a01b0319166001600160a01b039290921691909117905560dd565b5f6020828403121560c1575f5ffd5b81516001600160a01b038116811460d6575f5ffd5b9392505050565b608d806100e95f395ff3fe60806040525f547fa619486e000000000000000000000000000000000000000000000000000000005f35036039578060601b600c5260205ff35b365f5f375f5f365f845af490503d5f5f3e806052573d5ffd5b503d5ff3fea26469706673582212207d5db7fcbf2310c12e5fff9b422107fe0cff8e0fa422ad4041a511543f698f5c64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_singleton";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }];
    static createInterface(): SafeProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SafeProxy;
}
export {};
