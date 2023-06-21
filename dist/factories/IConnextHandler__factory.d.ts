import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IConnextHandler, IConnextHandlerInterface } from "../IConnextHandler";
export declare class IConnextHandler__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "destination";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "delegate";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "slippage";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "callData";
            readonly type: "bytes";
        }];
        readonly name: "xcall";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "destination";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "delegate";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "slippage";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "callData";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_relayerFee";
            readonly type: "uint256";
        }];
        readonly name: "xcall";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IConnextHandlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IConnextHandler;
}
