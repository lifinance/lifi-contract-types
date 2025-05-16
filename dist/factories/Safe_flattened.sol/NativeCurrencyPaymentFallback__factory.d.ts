import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { NativeCurrencyPaymentFallback, NativeCurrencyPaymentFallbackInterface } from "../../Safe_flattened.sol/NativeCurrencyPaymentFallback";
export declare class NativeCurrencyPaymentFallback__factory {
    static readonly abi: readonly [{
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "SafeReceived";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): NativeCurrencyPaymentFallbackInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NativeCurrencyPaymentFallback;
}
