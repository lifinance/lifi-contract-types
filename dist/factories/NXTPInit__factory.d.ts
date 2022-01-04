import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NXTPInit, NXTPInitInterface } from "../NXTPInit";
export declare class NXTPInit__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NXTPInit>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NXTPInit;
    connect(signer: Signer): NXTPInit__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060c08061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806319ab453c14602d575b600080fd5b605a6038366004605c565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b005b600060208284031215606d57600080fd5b81356001600160a01b0381168114608357600080fd5b939250505056fea26469706673582212200d28cf499366c5a02fd64f6d49fb4389a10947049c385b05db2006a943567f3964736f6c63430008070033";
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
    static createInterface(): NXTPInitInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NXTPInit;
}
