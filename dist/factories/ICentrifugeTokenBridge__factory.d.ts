import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICentrifugeTokenBridge, ICentrifugeTokenBridgeInterface } from "../ICentrifugeTokenBridge";
export declare class ICentrifugeTokenBridge__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "send";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "refundAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "payable";
    }];
    static createInterface(): ICentrifugeTokenBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICentrifugeTokenBridge;
}
