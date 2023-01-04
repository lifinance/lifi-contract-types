import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGatewayRouter, IGatewayRouterInterface } from "../IGatewayRouter";
export declare class IGatewayRouter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }];
        readonly name: "calculateL2TokenAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }];
        readonly name: "getGateway";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_maxGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_gasPriceBid";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "outboundTransfer";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_destAddr";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_l2CallValue";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_maxSubmissionCost";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_excessFeeRefundAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_callValueRefundAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_maxGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_gasPriceBid";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "unsafeCreateRetryableTicket";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IGatewayRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGatewayRouter;
}
