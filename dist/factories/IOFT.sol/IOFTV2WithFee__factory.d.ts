import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOFTV2WithFee, IOFTV2WithFeeInterface } from "../../IOFT.sol/IOFTV2WithFee";
export declare class IOFTV2WithFee__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "sendFrom";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_dstChainId";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "_toAddress";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_callParams";
            readonly type: "tuple";
            readonly internalType: "struct IOFTV2.LzCallParams";
            readonly components: readonly [{
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address payable";
            }, {
                readonly name: "zroPaymentAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "adapterParams";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IOFTV2WithFeeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOFTV2WithFee;
}
