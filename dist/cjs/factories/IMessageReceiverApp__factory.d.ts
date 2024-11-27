import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMessageReceiverApp, IMessageReceiverAppInterface } from "../IMessageReceiverApp.js";
export declare class IMessageReceiverApp__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "executeMessage";
        readonly inputs: readonly [{
            readonly name: "_sender";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_srcChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "_message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_executor";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "enum IMessageReceiverApp.ExecutionStatus";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "executeMessage";
        readonly inputs: readonly [{
            readonly name: "_sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_srcChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "_message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_executor";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "enum IMessageReceiverApp.ExecutionStatus";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "executeMessageWithTransfer";
        readonly inputs: readonly [{
            readonly name: "_sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_srcChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "_message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_executor";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "enum IMessageReceiverApp.ExecutionStatus";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "executeMessageWithTransferFallback";
        readonly inputs: readonly [{
            readonly name: "_sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_srcChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "_message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_executor";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "enum IMessageReceiverApp.ExecutionStatus";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "executeMessageWithTransferRefund";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_executor";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "enum IMessageReceiverApp.ExecutionStatus";
        }];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IMessageReceiverAppInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMessageReceiverApp;
}
