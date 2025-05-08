import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { FallbackManager, FallbackManagerInterface } from "../../Safe_flattened.sol/FallbackManager";
export declare class FallbackManager__factory {
    static readonly abi: readonly [{
        readonly type: "fallback";
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setFallbackHandler";
        readonly inputs: readonly [{
            readonly name: "handler";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "ChangedFallbackHandler";
        readonly inputs: readonly [{
            readonly name: "handler";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): FallbackManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FallbackManager;
}
