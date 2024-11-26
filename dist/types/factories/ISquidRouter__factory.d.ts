import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISquidRouter, ISquidRouterInterface } from "../ISquidRouter.js";
export declare class ISquidRouter__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "bridgeCall";
        readonly inputs: readonly [{
            readonly name: "bridgedTokenSymbol";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "destinationChain";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "destinationAddress";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "payload";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "gasRefundRecipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "enableExpress";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "callBridge";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "calls";
            readonly type: "tuple[]";
            readonly internalType: "struct ISquidMulticall.Call[]";
            readonly components: readonly [{
                readonly name: "callType";
                readonly type: "uint8";
                readonly internalType: "enum ISquidMulticall.CallType";
            }, {
                readonly name: "target";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "payload";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "bridgedTokenSymbol";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "destinationChain";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "destinationAddress";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "callBridgeCall";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "calls";
            readonly type: "tuple[]";
            readonly internalType: "struct ISquidMulticall.Call[]";
            readonly components: readonly [{
                readonly name: "callType";
                readonly type: "uint8";
                readonly internalType: "enum ISquidMulticall.CallType";
            }, {
                readonly name: "target";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "payload";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "bridgedTokenSymbol";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "destinationChain";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "destinationAddress";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "payload";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "gasRefundRecipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "enableExpress";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): ISquidRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISquidRouter;
}
//# sourceMappingURL=ISquidRouter__factory.d.ts.map