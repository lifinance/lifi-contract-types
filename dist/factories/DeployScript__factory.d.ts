import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DeployScript, DeployScriptInterface } from "../DeployScript";
export declare class DeployScript__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "IS_SCRIPT";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "run";
        readonly inputs: readonly [{
            readonly name: "_deployerAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_create3FactoryAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_network";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_saltPrefix";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_isProduction";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "deployed";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "constructorArgs";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): DeployScriptInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DeployScript;
}
