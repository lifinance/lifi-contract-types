import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAllBridge, IAllBridgeInterface } from "../IAllBridge.js";
export declare class IAllBridge__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getBridgingCostInTokens";
        readonly inputs: readonly [{
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "messenger";
            readonly type: "uint8";
            readonly internalType: "enum IAllBridge.MessengerProtocol";
        }, {
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getMessageCost";
        readonly inputs: readonly [{
            readonly name: "chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "protocol";
            readonly type: "uint8";
            readonly internalType: "enum IAllBridge.MessengerProtocol";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getTransactionCost";
        readonly inputs: readonly [{
            readonly name: "chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pools";
        readonly inputs: readonly [{
            readonly name: "addr";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndBridge";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "recipient";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiveToken";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "messenger";
            readonly type: "uint8";
            readonly internalType: "enum IAllBridge.MessengerProtocol";
        }, {
            readonly name: "feeTokenAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IAllBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAllBridge;
}
