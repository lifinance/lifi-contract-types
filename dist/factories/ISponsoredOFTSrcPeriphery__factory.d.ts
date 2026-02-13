import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISponsoredOFTSrcPeriphery, ISponsoredOFTSrcPeripheryInterface } from "../ISponsoredOFTSrcPeriphery";
export declare class ISponsoredOFTSrcPeriphery__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "quote";
            readonly type: "tuple";
            readonly internalType: "struct ISponsoredOFTSrcPeriphery.Quote";
            readonly components: readonly [{
                readonly name: "signedParams";
                readonly type: "tuple";
                readonly internalType: "struct ISponsoredOFTSrcPeriphery.SignedQuoteParams";
                readonly components: readonly [{
                    readonly name: "srcEid";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "dstEid";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "destinationHandler";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "amountLD";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "nonce";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "maxBpsToSponsor";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "maxUserSlippageBps";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "finalRecipient";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "finalToken";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "destinationDex";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "lzReceiveGasLimit";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "lzComposeGasLimit";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "maxOftFeeBps";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "accountCreationMode";
                    readonly type: "uint8";
                    readonly internalType: "uint8";
                }, {
                    readonly name: "executionMode";
                    readonly type: "uint8";
                    readonly internalType: "uint8";
                }, {
                    readonly name: "actionData";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "unsignedParams";
                readonly type: "tuple";
                readonly internalType: "struct ISponsoredOFTSrcPeriphery.UnsignedQuoteParams";
                readonly components: readonly [{
                    readonly name: "refundRecipient";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
            }];
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): ISponsoredOFTSrcPeripheryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISponsoredOFTSrcPeriphery;
}
