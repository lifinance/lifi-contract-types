import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AnyswapInit, AnyswapInitInterface } from "../AnyswapInit";
export declare class AnyswapInit__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AnyswapInit>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AnyswapInit;
    connect(signer: Signer): AnyswapInit__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060c08061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806319ab453c14602d575b600080fd5b605a6038366004605c565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b005b600060208284031215606d57600080fd5b81356001600160a01b0381168114608357600080fd5b939250505056fea264697066735822122009a19d7b8de655c89bd4280a0d82c8bd00573af5c11ba4713399f27d6be17fef64736f6c63430008070033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): AnyswapInitInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AnyswapInit;
}
