import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFusePool, IFusePoolInterface } from "../../FusePoolZap.sol/IFusePool";
export declare class IFusePool__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "cTokensByUnderlying";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IFusePoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFusePool;
}
