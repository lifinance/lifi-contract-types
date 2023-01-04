import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IWormholeRouter, IWormholeRouterInterface } from "../IWormholeRouter";
export declare class IWormholeRouter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint16";
            readonly name: "recipientChain";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes32";
            readonly name: "recipient";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "arbiterFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "nonce";
            readonly type: "uint32";
        }];
        readonly name: "transferTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "recipientChain";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes32";
            readonly name: "recipient";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "arbiterFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "nonce";
            readonly type: "uint32";
        }];
        readonly name: "wrapAndTransferETH";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "sequence";
            readonly type: "uint64";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IWormholeRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IWormholeRouter;
}
