import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGravityRouter, IGravityRouterInterface } from "../IGravityRouter";
export declare class IGravityRouter__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "sendToCosmos";
        readonly inputs: readonly [{
            readonly name: "_tokenContract";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_destination";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IGravityRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGravityRouter;
}
