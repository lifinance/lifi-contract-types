import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGuardManager, IGuardManagerInterface } from "../../Safe_flattened.sol/IGuardManager";
export declare class IGuardManager__factory {
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
    static createInterface(): IGuardManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGuardManager;
}
