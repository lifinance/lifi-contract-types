import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC165, IERC165Interface } from "../../introspection/IERC165";
export declare class IERC165__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "supportsInterface";
        readonly inputs: readonly [{
            readonly name: "interfaceId";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IERC165Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC165;
}
