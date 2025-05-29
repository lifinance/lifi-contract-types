import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IHyperswapV3Factory, IHyperswapV3FactoryInterface } from "../IHyperswapV3Factory";
export declare class IHyperswapV3Factory__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getPool";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }];
        readonly outputs: readonly [{
            readonly name: "pool";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IHyperswapV3FactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IHyperswapV3Factory;
}
