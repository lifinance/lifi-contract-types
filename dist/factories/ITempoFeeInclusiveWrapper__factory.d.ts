import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITempoFeeInclusiveWrapper, ITempoFeeInclusiveWrapperInterface } from "../ITempoFeeInclusiveWrapper";
export declare class ITempoFeeInclusiveWrapper__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "HOP";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "hop";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "quoteFeeInclusive";
        readonly inputs: readonly [{
            readonly name: "oft";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "dstEid";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "recipient";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "maxAmountInLD";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "dstGas";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "feeToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "feeAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "netAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "sendOFTFeeInclusive";
        readonly inputs: readonly [{
            readonly name: "oft";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "dstEid";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "recipient";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "maxAmountInLD";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minNetAmountLD";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "dstGas";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): ITempoFeeInclusiveWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITempoFeeInclusiveWrapper;
}
