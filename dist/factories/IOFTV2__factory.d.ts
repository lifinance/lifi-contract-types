import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOFTV2, IOFTV2Interface } from "../IOFTV2";
export declare class IOFTV2__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
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
            readonly internalType: "bool";
            readonly name: "_useZro";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "_adapterParams";
            readonly type: "bytes";
        }];
        readonly name: "estimateSendFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "nativeFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "zroFee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
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
    static createInterface(): IOFTV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOFTV2;
}
