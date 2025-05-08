import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISignatureValidator, ISignatureValidatorInterface } from "../../Safe_flattened.sol/ISignatureValidator";
export declare class ISignatureValidator__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "isValidSignature";
        readonly inputs: readonly [{
            readonly name: "_hash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): ISignatureValidatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISignatureValidator;
}
