import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAllBridge, IAllBridgeInterface } from "../IAllBridge";
export declare class IAllBridge__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "addr";
            readonly type: "bytes32";
        }];
        readonly name: "pools";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "token";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "recipient";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint8";
            readonly name: "destinationChainId";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "receiveToken";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum IAllBridge.MessengerProtocol";
            readonly name: "messenger";
            readonly type: "uint8";
        }];
        readonly name: "swapAndBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IAllBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAllBridge;
}
