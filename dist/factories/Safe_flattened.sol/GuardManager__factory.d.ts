import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { GuardManager, GuardManagerInterface } from "../../Safe_flattened.sol/GuardManager";
export declare class GuardManager__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "setGuard";
        readonly inputs: readonly [{
            readonly name: "guard";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "ChangedGuard";
        readonly inputs: readonly [{
            readonly name: "guard";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): GuardManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GuardManager;
}
