import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGravityRouter, IGravityRouterInterface } from "../IGravityRouter";
export declare class IGravityRouter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenContract";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "_destination";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "sendToCosmos";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IGravityRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGravityRouter;
}
