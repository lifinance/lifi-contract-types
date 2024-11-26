import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IL2AmmWrapper, IL2AmmWrapperInterface } from "../../IHopBridge.sol/IL2AmmWrapper.js";
export declare class IL2AmmWrapper__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "bridge";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "exchangeAddress";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "hToken";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "l2CanonicalToken";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IL2AmmWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IL2AmmWrapper;
}
//# sourceMappingURL=IL2AmmWrapper__factory.d.ts.map