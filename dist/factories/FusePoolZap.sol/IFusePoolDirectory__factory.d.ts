import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFusePoolDirectory, IFusePoolDirectoryInterface } from "../../FusePoolZap.sol/IFusePoolDirectory";
export declare class IFusePoolDirectory__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "poolExists";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IFusePoolDirectoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFusePoolDirectory;
}
