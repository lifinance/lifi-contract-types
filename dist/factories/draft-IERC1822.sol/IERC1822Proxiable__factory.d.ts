import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC1822Proxiable, IERC1822ProxiableInterface } from "../../draft-IERC1822.sol/IERC1822Proxiable";
export declare class IERC1822Proxiable__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "proxiableUUID";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IERC1822ProxiableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC1822Proxiable;
}
