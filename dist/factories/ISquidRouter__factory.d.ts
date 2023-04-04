import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISquidRouter, ISquidRouterInterface } from "../ISquidRouter";
export declare class ISquidRouter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "destinationChain";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "bridgedTokenSymbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "enum ISquidMulticall.CallType";
                readonly name: "callType";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "payload";
                readonly type: "bytes";
            }];
            readonly internalType: "struct ISquidMulticall.Call[]";
            readonly name: "calls";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "refundRecipient";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "forecallEnabled";
            readonly type: "bool";
        }];
        readonly name: "bridgeCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "destinationChain";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "destinationAddress";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "bridgedTokenSymbol";
            readonly type: "string";
        }, {
            readonly components: readonly [{
                readonly internalType: "enum ISquidMulticall.CallType";
                readonly name: "callType";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "payload";
                readonly type: "bytes";
            }];
            readonly internalType: "struct ISquidMulticall.Call[]";
            readonly name: "calls";
            readonly type: "tuple[]";
        }];
        readonly name: "callBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "destinationChain";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "bridgedTokenSymbol";
            readonly type: "string";
        }, {
            readonly components: readonly [{
                readonly internalType: "enum ISquidMulticall.CallType";
                readonly name: "callType";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "payload";
                readonly type: "bytes";
            }];
            readonly internalType: "struct ISquidMulticall.Call[]";
            readonly name: "sourceCalls";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "enum ISquidMulticall.CallType";
                readonly name: "callType";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "payload";
                readonly type: "bytes";
            }];
            readonly internalType: "struct ISquidMulticall.Call[]";
            readonly name: "destinationCalls";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "refundRecipient";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "forecallEnabled";
            readonly type: "bool";
        }];
        readonly name: "callBridgeCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): ISquidRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISquidRouter;
}
