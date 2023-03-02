import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRootChainManager, IRootChainManagerInterface } from "../IRootChainManager";
export declare class IRootChainManager__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "depositEtherFor";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "rootToken";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "depositData";
            readonly type: "bytes";
        }];
        readonly name: "depositFor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "rootToken";
            readonly type: "address";
        }];
        readonly name: "rootToChildToken";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "childToken";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IRootChainManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRootChainManager;
}
