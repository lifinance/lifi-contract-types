import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOFTV2WithFee, IOFTV2WithFeeInterface } from "../../IOFTWrapper.sol/IOFTV2WithFee";
export declare class IOFTV2WithFee__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_toAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minAmount";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address payable";
                readonly name: "refundAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "zroPaymentAddress";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "adapterParams";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IOFTV2.LzCallParams";
            readonly name: "_callParams";
            readonly type: "tuple";
        }];
        readonly name: "sendFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IOFTV2WithFeeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOFTV2WithFee;
}
