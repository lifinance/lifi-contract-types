import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGarden, IGardenInterface } from "../IGarden";
export declare class IGarden__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "initiateOnBehalf";
        readonly inputs: readonly [{
            readonly name: "initiator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "redeemer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "timelock";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "secretHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IGardenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGarden;
}
