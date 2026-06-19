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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506102128061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610029575f3560e01c8063ae1c160c1461002d575b5f5ffd5b61004061003b36600461019f565b610069565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff163b5f036100ba576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610103573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061012791906101c1565b905073ffffffffffffffffffffffffffffffffffffffff8116610176576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b73ffffffffffffffffffffffffffffffffffffffff8116811461019c575f5ffd5b50565b5f602082840312156101af575f5ffd5b81356101ba8161017b565b9392505050565b5f602082840312156101d1575f5ffd5b81516101ba8161017b56fea26469706673582212205b6edef74a59a5ff825e94850cd9b75bbb282816f941c51bbb96ad4347cd76ea64736f6c634300081d0033";
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
