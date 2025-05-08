import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFallbackManager, IFallbackManagerInterface } from "../../Safe_flattened.sol/IFallbackManager";
export declare class IFallbackManager__factory {
    static readonly abi: readonly [{
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
    static createInterface(): IFallbackManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFallbackManager;
}
