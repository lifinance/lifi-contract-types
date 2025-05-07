import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAlgebraFactory, IAlgebraFactoryInterface } from "../IAlgebraFactory";
export declare class IAlgebraFactory__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "createPool";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "pool";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IAlgebraFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAlgebraFactory;
}
