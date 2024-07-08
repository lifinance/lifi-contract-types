import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC20, IERC20Interface } from "../../Intent.sol/IERC20";
export declare class IERC20__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "balanceOf";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC20;
}
