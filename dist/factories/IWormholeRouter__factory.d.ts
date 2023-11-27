import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IWormholeRouter, IWormholeRouterInterface } from "../IWormholeRouter";
export declare class IWormholeRouter__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "transferTokens";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "recipientChain";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "recipient";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "arbiterFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "nonce";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "wrapAndTransferETH";
        readonly inputs: readonly [{
            readonly name: "recipientChain";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "recipient";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "arbiterFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "nonce";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "sequence";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IWormholeRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IWormholeRouter;
}
