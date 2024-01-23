import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOFT, IOFTInterface } from "../../IOFT.sol/IOFT";
export declare class IOFT__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "estimateSendFee";
        readonly inputs: readonly [{
            readonly name: "_dstChainId";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "_toAddress";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_useZro";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "_adapterParams";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "nativeFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "zroFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
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
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_refundAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_zroPaymentAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_adapterParams";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IOFTInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOFT;
}
