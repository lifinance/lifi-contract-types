import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRoninBridgeGateway, IRoninBridgeGatewayInterface } from "../IRoninBridgeGateway";
export declare class IRoninBridgeGateway__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "requestDepositFor";
        readonly inputs: readonly [{
            readonly name: "_request";
            readonly type: "tuple";
            readonly internalType: "struct IRoninBridgeGateway.Request";
            readonly components: readonly [{
                readonly name: "recipientAddr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenAddr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "info";
                readonly type: "tuple";
                readonly internalType: "struct IRoninBridgeGateway.Info";
                readonly components: readonly [{
                    readonly name: "erc";
                    readonly type: "uint8";
                    readonly internalType: "enum IRoninBridgeGateway.Standard";
                }, {
                    readonly name: "id";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "quantity";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IRoninBridgeGatewayInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRoninBridgeGateway;
}
