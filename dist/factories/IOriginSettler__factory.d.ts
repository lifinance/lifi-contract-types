import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOriginSettler, IOriginSettlerInterface } from "../IOriginSettler";
export declare class IOriginSettler__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "open";
        readonly inputs: readonly [{
            readonly name: "order";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "openFor";
        readonly inputs: readonly [{
            readonly name: "order";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "sponsor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IOriginSettlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOriginSettler;
}
