import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPool, IPoolInterface } from "../../IStargateRouter.sol/IPool";
export declare class IPool__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "token";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IPoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPool;
}
