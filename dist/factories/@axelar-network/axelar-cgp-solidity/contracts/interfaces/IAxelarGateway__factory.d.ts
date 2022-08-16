import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAxelarGateway, IAxelarGatewayInterface } from "../../../../../@axelar-network/axelar-cgp-solidity/contracts/interfaces/IAxelarGateway";
export declare class IAxelarGateway__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IAxelarGatewayInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAxelarGateway;
}
