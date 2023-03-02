import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDeBridgeGate, IDeBridgeGateInterface } from "../IDeBridgeGate";
export declare class IDeBridgeGate__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "getChainToConfig";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "fixedNativeFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "isSupported";
                readonly type: "bool";
            }, {
                readonly internalType: "uint16";
                readonly name: "transferFeeBps";
                readonly type: "uint16";
            }];
            readonly internalType: "struct IDeBridgeGate.ChainSupportInfo";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "globalFixedNativeFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_chainIdTo";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_receiver";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "_permit";
            readonly type: "bytes";
        }, {
            readonly internalType: "bool";
            readonly name: "_useAssetFee";
            readonly type: "bool";
        }, {
            readonly internalType: "uint32";
            readonly name: "_referralCode";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_autoParams";
            readonly type: "bytes";
        }];
        readonly name: "send";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IDeBridgeGateInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDeBridgeGate;
}
