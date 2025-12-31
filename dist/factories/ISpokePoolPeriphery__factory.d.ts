import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISpokePoolPeriphery, ISpokePoolPeripheryInterface } from "../ISpokePoolPeriphery";
export declare class ISpokePoolPeriphery__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "swapAndBridge";
        readonly inputs: readonly [{
            readonly name: "swapAndDepositData";
            readonly type: "tuple";
            readonly internalType: "struct ISpokePoolPeriphery.SwapAndDepositData";
            readonly components: readonly [{
                readonly name: "submissionFees";
                readonly type: "tuple";
                readonly internalType: "struct ISpokePoolPeriphery.Fees";
                readonly components: readonly [{
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "recipient";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
            }, {
                readonly name: "depositData";
                readonly type: "tuple";
                readonly internalType: "struct ISpokePoolPeriphery.BaseDepositData";
                readonly components: readonly [{
                    readonly name: "inputToken";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "outputToken";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "outputAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "depositor";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "recipient";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "destinationChainId";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "exclusiveRelayer";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "quoteTimestamp";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "fillDeadline";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "exclusivityParameter";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "message";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "swapToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "exchange";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "transferType";
                readonly type: "uint8";
                readonly internalType: "enum ISpokePoolPeriphery.TransferType";
            }, {
                readonly name: "swapTokenAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minExpectedInputTokenAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "routerCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "enableProportionalAdjustment";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "spokePool";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): ISpokePoolPeripheryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISpokePoolPeriphery;
}
