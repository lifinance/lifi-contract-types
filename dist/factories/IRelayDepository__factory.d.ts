import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRelayDepository, IRelayDepositoryInterface } from "../IRelayDepository";
export declare class IRelayDepository__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "depositErc20";
        readonly inputs: readonly [{
            readonly name: "depositor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "id";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "depositErc20";
        readonly inputs: readonly [{
            readonly name: "depositor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "id";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "depositNative";
        readonly inputs: readonly [{
            readonly name: "depositor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "id";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "getAllocator";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IRelayDepositoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRelayDepository;
}
