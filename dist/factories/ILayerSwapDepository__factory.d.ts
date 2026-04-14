import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ILayerSwapDepository, ILayerSwapDepositoryInterface } from "../ILayerSwapDepository";
export declare class ILayerSwapDepository__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "depositERC20";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "depositNative";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): ILayerSwapDepositoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILayerSwapDepository;
}
