import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IM0OrderBook, IM0OrderBookInterface } from "../IM0OrderBook";
export declare class IM0OrderBook__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "isDestinationSupported";
        readonly inputs: readonly [{
            readonly name: "destChainId";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "openOrder";
        readonly inputs: readonly [{
            readonly name: "orderParams";
            readonly type: "tuple";
            readonly internalType: "struct IM0OrderBook.OrderParams";
            readonly components: readonly [{
                readonly name: "destChainId";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "tokenIn";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenOut";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "amountIn";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "amountOut";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "solver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sender";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "orderId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IM0OrderBookInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IM0OrderBook;
}
