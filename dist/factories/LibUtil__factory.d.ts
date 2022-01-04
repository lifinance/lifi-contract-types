import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LibUtil, LibUtilInterface } from "../LibUtil";
export declare class LibUtil__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LibUtil>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LibUtil;
    connect(signer: Signer): LibUtil__factory;
    static readonly bytecode = "0x60f6610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063df2ebdbb146038575b600080fd5b603e6052565b604051604991906077565b60405180910390f35b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b6071816090565b82525050565b6000602082019050608a6000830184606a565b92915050565b600060998260a0565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff8216905091905056fea26469706673582212202f1f13e078f7883c98190f3126753dc505b9b5cf990a128b421dab2cd40dbe3964736f6c63430008070033";
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): LibUtilInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LibUtil;
}
