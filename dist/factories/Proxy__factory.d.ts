import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Proxy, ProxyInterface } from "../Proxy";
export declare class Proxy__factory {
    static readonly abi: readonly [{
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }];
    static createInterface(): ProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Proxy;
}
