import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CBridgeInit, CBridgeInitInterface } from "../CBridgeInit";
export declare class CBridgeInit__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CBridgeInit>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CBridgeInit;
    connect(signer: Signer): CBridgeInit__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060cc8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063399ae72414602d575b600080fd5b605e60383660046060565b600480546001600160a01b0319166001600160a01b039390931692909217909155600555565b005b60008060408385031215607257600080fd5b82356001600160a01b0381168114608857600080fd5b94602093909301359350505056fea264697066735822122089f53e9933e15586bc9a24b21c97501719a05013fc6650bb2d797daad219b49764736f6c63430008070033";
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
    static createInterface(): CBridgeInitInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CBridgeInit;
}
