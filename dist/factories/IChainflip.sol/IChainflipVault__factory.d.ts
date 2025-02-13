import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IChainflipVault, IChainflipVaultInterface } from "../../IChainflip.sol/IChainflipVault";
export declare class IChainflipVault__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "xSwapNative";
        readonly inputs: readonly [{
            readonly name: "dstChain";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "dstAddress";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "dstToken";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "cfParameters";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "xSwapToken";
        readonly inputs: readonly [{
            readonly name: "dstChain";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "dstAddress";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "dstToken";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "srcToken";
            readonly type: "address";
            readonly internalType: "contract IERC20";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "cfParameters";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IChainflipVaultInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IChainflipVault;
}
