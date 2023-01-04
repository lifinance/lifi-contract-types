import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFactory, IFactoryInterface } from "../../IStargateRouter.sol/IFactory";
export declare class IFactory__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "getPool";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFactory;
}
