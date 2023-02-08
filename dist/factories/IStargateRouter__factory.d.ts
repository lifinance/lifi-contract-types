import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IStargateRouter, IStargateRouterInterface } from "../IStargateRouter";
export declare class IStargateRouter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "factory";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint8";
            readonly name: "functionType";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes";
            readonly name: "toAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "transferAndCallPayload";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "dstGasForCall";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "dstNativeAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "dstNativeAddr";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IStargateRouter.lzTxObj";
            readonly name: "lzTxParams";
            readonly type: "tuple";
        }];
        readonly name: "quoteLayerZeroFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "nativeFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "zroFee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "srcPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "dstPoolId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address payable";
            readonly name: "refundAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmountLD";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "dstGasForCall";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "dstNativeAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "dstNativeAddr";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IStargateRouter.lzTxObj";
            readonly name: "lzTxParams";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "to";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "payload";
            readonly type: "bytes";
        }];
        readonly name: "swap";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IStargateRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IStargateRouter;
}
