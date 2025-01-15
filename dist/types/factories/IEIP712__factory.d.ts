import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IEIP712, IEIP712Interface } from "../IEIP712.js";
export declare class IEIP712__factory {
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
    static createInterface(): IEIP712Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IEIP712;
}
//# sourceMappingURL=IEIP712__factory.d.ts.map