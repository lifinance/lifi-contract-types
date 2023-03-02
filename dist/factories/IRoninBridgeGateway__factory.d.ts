import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRoninBridgeGateway, IRoninBridgeGatewayInterface } from "../IRoninBridgeGateway";
export declare class IRoninBridgeGateway__factory {
    static readonly abi: {
        inputs: {
            components: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IRoninBridgeGatewayInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRoninBridgeGateway;
}
