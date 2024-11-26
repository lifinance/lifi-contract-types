import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IStargateRouter, IStargateRouterInterface } from "../IStargateRouter.js";
export declare class IStargateRouter__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "factory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "quoteLayerZeroFee";
        readonly inputs: readonly [{
            readonly name: "dstChainId";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "functionType";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "toAddress";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "transferAndCallPayload";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "lzTxParams";
            readonly type: "tuple";
            readonly internalType: "struct IStargateRouter.lzTxObj";
            readonly components: readonly [{
                readonly name: "dstGasForCall";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "dstNativeAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "dstNativeAddr";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "nativeFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "zroFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "swap";
        readonly inputs: readonly [{
            readonly name: "dstChainId";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "srcPoolId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "dstPoolId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "refundAddress";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "amountLD";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minAmountLD";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "lzTxParams";
            readonly type: "tuple";
            readonly internalType: "struct IStargateRouter.lzTxObj";
            readonly components: readonly [{
                readonly name: "dstGasForCall";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "dstNativeAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "dstNativeAddr";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "to";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "payload";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapETHAndCall";
        readonly inputs: readonly [{
            readonly name: "_dstChainId";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "_refundAddress";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_toAddress";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_swapAmount";
            readonly type: "tuple";
            readonly internalType: "struct IStargateRouter.SwapAmount";
            readonly components: readonly [{
                readonly name: "amountLD";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountLD";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "_lzTxParams";
            readonly type: "tuple";
            readonly internalType: "struct IStargateRouter.lzTxObj";
            readonly components: readonly [{
                readonly name: "dstGasForCall";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "dstNativeAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "dstNativeAddr";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "_payload";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IStargateRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IStargateRouter;
}
