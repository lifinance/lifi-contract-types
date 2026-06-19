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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b5061025f8061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610029575f3560e01c8063ae1c160c1461002d575b5f5ffd5b61004061003b3660046101ec565b610069565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff163b5f036100ba576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561013f575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261013c9181019061020e565b60015b610175576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166101c2576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b92915050565b73ffffffffffffffffffffffffffffffffffffffff811681146101e9575f5ffd5b50565b5f602082840312156101fc575f5ffd5b8135610207816101c8565b9392505050565b5f6020828403121561021e575f5ffd5b8151610207816101c856fea264697066735822122065411c3d7963c387e0139e669cd1749cc6c935bb03c65ed1ee14438ea3aeb2fa64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "resolveAsset";
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
        readonly name: "AssetResolutionFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): ERC4626AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC4626Adapter;
}
export {};
