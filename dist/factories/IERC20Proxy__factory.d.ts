import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC20Proxy, IERC20ProxyInterface } from "../IERC20Proxy";
export declare class IERC20Proxy__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IERC20ProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC20Proxy;
}
