import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC4626Adapter, ERC4626AdapterInterface } from "../ERC4626Adapter";
type ERC4626AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC4626Adapter__factory extends ContractFactory {
    constructor(...args: ERC4626AdapterConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ERC4626Adapter>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ERC4626Adapter;
    connect(signer: Signer): ERC4626Adapter__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506103338061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610029575f3560e01c8063275e5da51461002d575b5f5ffd5b61004061003b3660046102a9565b610069565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff163b5f036100ba576040517f7955c0d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561013f575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261013c918101906102cb565b60015b610175576040517f7955c0d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166101c2576040517f7955c0d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b90508173ffffffffffffffffffffffffffffffffffffffff166301e1d1146040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610249575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610246918101906102e6565b60015b61027f576040517f7955c0d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50919050565b73ffffffffffffffffffffffffffffffffffffffff811681146102a6575f5ffd5b50565b5f602082840312156102b9575f5ffd5b81356102c481610285565b9392505050565b5f602082840312156102db575f5ffd5b81516102c481610285565b5f602082840312156102f6575f5ffd5b505191905056fea2646970667358221220146de6118a10e8d98d50c9d5119ce03574782939c6163d210e8e6f9bc178f9e964736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "probe";
        readonly inputs: readonly [{
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "error";
        readonly name: "UnderlyingProbeFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): ERC4626AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC4626Adapter;
}
export {};
