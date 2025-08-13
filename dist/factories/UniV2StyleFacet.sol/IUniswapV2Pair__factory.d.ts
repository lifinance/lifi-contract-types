import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV2Pair, IUniswapV2PairInterface } from "../../UniV2StyleFacet.sol/IUniswapV2Pair";
export declare class IUniswapV2Pair__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getReserves";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "reserve0";
            readonly type: "uint112";
            readonly internalType: "uint112";
        }, {
            readonly name: "reserve1";
            readonly type: "uint112";
            readonly internalType: "uint112";
        }, {
            readonly name: "blockTimestampLast";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "swap";
        readonly inputs: readonly [{
            readonly name: "amount0Out";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Out";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IUniswapV2PairInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV2Pair;
}
