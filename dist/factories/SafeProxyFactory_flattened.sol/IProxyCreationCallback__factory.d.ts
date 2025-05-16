import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IProxyCreationCallback, IProxyCreationCallbackInterface } from "../../SafeProxyFactory_flattened.sol/IProxyCreationCallback";
export declare class IProxyCreationCallback__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "proxyCreated";
        readonly inputs: readonly [{
            readonly name: "proxy";
            readonly type: "address";
            readonly internalType: "contract SafeProxy";
        }, {
            readonly name: "_singleton";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "initializer";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "saltNonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IProxyCreationCallbackInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IProxyCreationCallback;
}
