import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOFT, IOFTInterface } from "../../IOFTWrapper.sol/IOFT";
export declare class IOFT__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_toAddress";
            readonly type: "bytes";
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
            readonly internalType: "bytes";
            readonly name: "_toAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_refundAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_zroPaymentAddress";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_adapterParams";
            readonly type: "bytes";
        }];
        readonly name: "sendFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IOFTInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOFT;
}
