import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRoninBridgeGateway, IRoninBridgeGatewayInterface } from "../IRoninBridgeGateway";
export declare class IRoninBridgeGateway__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "recipientAddr";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "tokenAddr";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "enum IRoninBridgeGateway.Standard";
                    readonly name: "erc";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "id";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "quantity";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IRoninBridgeGateway.Info";
                readonly name: "info";
                readonly type: "tuple";
            }];
            readonly internalType: "struct IRoninBridgeGateway.Request";
            readonly name: "_request";
            readonly type: "tuple";
        }];
        readonly name: "requestDepositFor";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IRoninBridgeGatewayInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRoninBridgeGateway;
}
