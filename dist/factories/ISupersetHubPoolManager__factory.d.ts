import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISupersetHubPoolManager, ISupersetHubPoolManagerInterface } from "../ISupersetHubPoolManager";
export declare class ISupersetHubPoolManager__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "exactInput";
        readonly inputs: readonly [{
            readonly name: "_params";
            readonly type: "tuple";
            readonly internalType: "struct ISupersetHubPoolManager.ExactInputParams";
            readonly components: readonly [{
                readonly name: "path";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "recipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountIn";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMinimum";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
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
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): ISupersetHubPoolManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISupersetHubPoolManager;
}
