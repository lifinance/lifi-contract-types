import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISupersetSpokePoolManager, ISupersetSpokePoolManagerInterface } from "../ISupersetSpokePoolManager";
export declare class ISupersetSpokePoolManager__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "multiHopSwap";
        readonly inputs: readonly [{
            readonly name: "_path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_fallbackEoA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_options";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "multiHopSwapWithOutputChain";
        readonly inputs: readonly [{
            readonly name: "_path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_refundAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_fallbackEoA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_toEid";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "_options";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): ISupersetSpokePoolManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISupersetSpokePoolManager;
}
