import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Ownable, OwnableInterface } from "../../RelayerCelerIM.t.sol/Ownable";
export declare class Ownable__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): OwnableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ownable;
}
