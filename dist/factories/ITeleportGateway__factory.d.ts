import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITeleportGateway, ITeleportGatewayInterface } from "../ITeleportGateway";
export declare class ITeleportGateway__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "targetDomain";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint128";
            readonly name: "amount";
            readonly type: "uint128";
        }];
        readonly name: "initiateTeleport";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ITeleportGatewayInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITeleportGateway;
}
