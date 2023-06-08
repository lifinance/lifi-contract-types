import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { L2_AmmWrapper, L2_AmmWrapperInterface } from "../../HopFacetPacked.sol/L2_AmmWrapper";
export declare class L2_AmmWrapper__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "bridge";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "exchangeAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "hToken";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "l2CanonicalToken";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): L2_AmmWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): L2_AmmWrapper;
}
