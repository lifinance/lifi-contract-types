import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SwapperV2, SwapperV2Interface } from "../../../src/Helpers/SwapperV2";
declare type SwapperV2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SwapperV2__factory extends ContractFactory {
    constructor(...args: SwapperV2ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SwapperV2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SwapperV2;
    connect(signer: Signer): SwapperV2__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212207b87e2fda442e54b070d7635b8ac0f70deca589857b4dba14087b1c1f274fbdb64736f6c634300080d0033";
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): SwapperV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): SwapperV2;
}
export {};
