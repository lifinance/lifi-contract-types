import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICurveV2, ICurveV2Interface } from "../ICurveV2";
export declare class ICurveV2__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "exchange";
        readonly inputs: readonly [{
            readonly name: "i";
            readonly type: "int128";
            readonly internalType: "int128";
        }, {
            readonly name: "j";
            readonly type: "int128";
            readonly internalType: "int128";
        }, {
            readonly name: "dx";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "min_dy";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "exchange_received";
        readonly inputs: readonly [{
            readonly name: "i";
            readonly type: "int128";
            readonly internalType: "int128";
        }, {
            readonly name: "j";
            readonly type: "int128";
            readonly internalType: "int128";
        }, {
            readonly name: "dx";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "min_dy";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): ICurveV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICurveV2;
}
