import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IProxy, IProxyInterface } from "../../SafeProxyFactory_flattened.sol/IProxy";
export declare class IProxy__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "masterCopy";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IProxy;
}
