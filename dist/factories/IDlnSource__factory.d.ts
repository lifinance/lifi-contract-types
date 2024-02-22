import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDlnSource, IDlnSourceInterface } from "../IDlnSource";
export declare class IDlnSource__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "createOrder";
        readonly inputs: readonly [{
            readonly name: "_orderCreation";
            readonly type: "tuple";
            readonly internalType: "struct IDlnSource.OrderCreation";
            readonly components: readonly [{
                readonly name: "giveTokenAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "giveAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "takeTokenAddress";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "takeAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "takeChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiverDst";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "givePatchAuthoritySrc";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "orderAuthorityAddressDst";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "allowedTakerDst";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "externalCall";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "allowedCancelBeneficiarySrc";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "_affiliateFee";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_referralCode";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "_permitEnvelope";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "orderId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "globalFixedNativeFee";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IDlnSourceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDlnSource;
}
