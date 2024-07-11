import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGasZip, IGasZipInterface } from "../../GasZipFacet.sol/IGasZip";
export declare class IGasZip__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "destinationChains";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IGasZipInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGasZip;
}
