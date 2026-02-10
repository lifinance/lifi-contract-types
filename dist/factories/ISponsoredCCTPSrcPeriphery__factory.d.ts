import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISponsoredCCTPSrcPeriphery, ISponsoredCCTPSrcPeripheryInterface } from "../ISponsoredCCTPSrcPeriphery";
export declare class ISponsoredCCTPSrcPeriphery__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "depositForBurn";
        readonly inputs: readonly [{
            readonly name: "quote";
            readonly type: "tuple";
            readonly internalType: "struct ISponsoredCCTPSrcPeriphery.SponsoredCCTPQuote";
            readonly components: readonly [{
                readonly name: "sourceDomain";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "destinationDomain";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "mintRecipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "burnToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationCaller";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "maxFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minFinalityThreshold";
                readonly type: "uint32";
                readonly internalType: "uint32";
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
                readonly name: "executionMode";
                readonly type: "uint8";
                readonly internalType: "uint8";
            }, {
                readonly name: "actionData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): ISponsoredCCTPSrcPeripheryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISponsoredCCTPSrcPeriphery;
}
