import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPool, IPoolInterface } from "../../ReceiverStargateV2.sol/IPool.js";
export declare class IPool__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "token";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IPoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPool;
}
