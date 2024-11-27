import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITeleportGateway, ITeleportGatewayInterface } from "../ITeleportGateway.js";
export declare class ITeleportGateway__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "initiateTeleport";
        readonly inputs: readonly [{
            readonly name: "targetDomain";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): ITeleportGatewayInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITeleportGateway;
}
//# sourceMappingURL=ITeleportGateway__factory.d.ts.map