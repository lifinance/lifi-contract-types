import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGatewayRouter, IGatewayRouterInterface } from "../IGatewayRouter";
export declare class IGatewayRouter__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "calculateL2TokenAddress";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getGateway";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "outboundTransfer";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_maxGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_gasPriceBid";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "unsafeCreateRetryableTicket";
        readonly inputs: readonly [{
            readonly name: "_destAddr";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_l2CallValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_maxSubmissionCost";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_excessFeeRefundAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_callValueRefundAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_maxGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_gasPriceBid";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IGatewayRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGatewayRouter;
}
