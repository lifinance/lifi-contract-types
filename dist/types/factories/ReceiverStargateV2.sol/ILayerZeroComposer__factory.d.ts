import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ILayerZeroComposer, ILayerZeroComposerInterface } from "../../ReceiverStargateV2.sol/ILayerZeroComposer.js";
export declare class ILayerZeroComposer__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "lzCompose";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_guid";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_extraData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): ILayerZeroComposerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILayerZeroComposer;
}
//# sourceMappingURL=ILayerZeroComposer__factory.d.ts.map