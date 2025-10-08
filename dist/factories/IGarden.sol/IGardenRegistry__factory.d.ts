import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGardenRegistry, IGardenRegistryInterface } from "../../IGarden.sol/IGardenRegistry";
export declare class IGardenRegistry__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "htlcs";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IGardenRegistryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGardenRegistry;
}
