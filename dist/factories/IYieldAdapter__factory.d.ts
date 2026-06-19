import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IYieldAdapter, IYieldAdapterInterface } from "../IYieldAdapter";
export declare class IYieldAdapter__factory {
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
    }];
    static createInterface(): IYieldAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IYieldAdapter;
}
