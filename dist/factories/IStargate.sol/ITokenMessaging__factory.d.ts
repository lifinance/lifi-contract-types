import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITokenMessaging, ITokenMessagingInterface } from "../../IStargate.sol/ITokenMessaging";
export declare class ITokenMessaging__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "assetIds";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "stargateImpls";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): ITokenMessagingInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITokenMessaging;
}
