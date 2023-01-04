import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMessageReceiverApp, IMessageReceiverAppInterface } from "../IMessageReceiverApp";
export declare class IMessageReceiverApp__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_sender";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint64";
            readonly name: "_srcChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "_executor";
            readonly type: "address";
        }];
        readonly name: "executeMessage";
        readonly outputs: readonly [{
            readonly internalType: "enum IMessageReceiverApp.ExecutionStatus";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "_srcChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "_executor";
            readonly type: "address";
        }];
        readonly name: "executeMessage";
        readonly outputs: readonly [{
            readonly internalType: "enum IMessageReceiverApp.ExecutionStatus";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "_srcChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "_executor";
            readonly type: "address";
        }];
        readonly name: "executeMessageWithTransfer";
        readonly outputs: readonly [{
            readonly internalType: "enum IMessageReceiverApp.ExecutionStatus";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "_srcChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "_executor";
            readonly type: "address";
        }];
        readonly name: "executeMessageWithTransferFallback";
        readonly outputs: readonly [{
            readonly internalType: "enum IMessageReceiverApp.ExecutionStatus";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "_executor";
            readonly type: "address";
        }];
        readonly name: "executeMessageWithTransferRefund";
        readonly outputs: readonly [{
            readonly internalType: "enum IMessageReceiverApp.ExecutionStatus";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IMessageReceiverAppInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMessageReceiverApp;
}
