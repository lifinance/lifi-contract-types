import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC20TransferWithAuthorization, IERC20TransferWithAuthorizationInterface } from "../IERC20TransferWithAuthorization";
export declare class IERC20TransferWithAuthorization__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "receiveWithAuthorization";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "validAfter";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "validBefore";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "nonce";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "receiveWithAuthorization";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "validAfter";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "validBefore";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "nonce";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IERC20TransferWithAuthorizationInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC20TransferWithAuthorization;
}
