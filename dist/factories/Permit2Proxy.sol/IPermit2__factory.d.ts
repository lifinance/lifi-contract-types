import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPermit2, IPermit2Interface } from "../../Permit2Proxy.sol/IPermit2";
export declare class IPermit2__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "DOMAIN_SEPARATOR";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IPermit2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPermit2;
}
