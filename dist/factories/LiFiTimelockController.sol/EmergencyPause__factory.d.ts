import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { EmergencyPause, EmergencyPauseInterface } from "../../LiFiTimelockController.sol/EmergencyPause";
export declare class EmergencyPause__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "unpauseDiamond";
        readonly inputs: readonly [{
            readonly name: "_blacklist";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): EmergencyPauseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EmergencyPause;
}
