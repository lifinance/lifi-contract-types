import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDeBridgeGate, IDeBridgeGateInterface } from "../IDeBridgeGate.js";
export declare class IDeBridgeGate__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getChainToConfig";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct IDeBridgeGate.ChainSupportInfo";
            readonly components: readonly [{
                readonly name: "fixedNativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "isSupported";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "transferFeeBps";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "globalFixedNativeFee";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "send";
        readonly inputs: readonly [{
            readonly name: "_tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_chainIdTo";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_receiver";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_permit";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_useAssetFee";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "_referralCode";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "_autoParams";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IDeBridgeGateInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDeBridgeGate;
}
//# sourceMappingURL=IDeBridgeGate__factory.d.ts.map