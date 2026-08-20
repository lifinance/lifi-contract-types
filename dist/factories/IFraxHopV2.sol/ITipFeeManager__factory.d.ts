import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITipFeeManager, ITipFeeManagerInterface } from "../../IFraxHopV2.sol/ITipFeeManager";
export declare class ITipFeeManager__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "userTokens";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): ITipFeeManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITipFeeManager;
}
