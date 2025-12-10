import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOutputCallback, IOutputCallbackInterface } from "../../ReceiverOIF.sol/IOutputCallback";
export declare class IOutputCallback__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "outputFilled";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executionData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IOutputCallbackInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOutputCallback;
}
