import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LibAttestableSelectors, LibAttestableSelectorsInterface } from "../LibAttestableSelectors";
type LibAttestableSelectorsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LibAttestableSelectors__factory extends ContractFactory {
    constructor(...args: LibAttestableSelectorsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LibAttestableSelectors>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LibAttestableSelectors;
    connect(signer: Signer): LibAttestableSelectors__factory;
    static readonly bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea264697066735822122083587f3f1c93db7a6a8be5457161ef0b6b14a9cd5038ff275fd1f018a153630f64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "event";
        readonly name: "AttestableSelectorSet";
        readonly inputs: readonly [{
            readonly name: "selector";
            readonly type: "bytes4";
            readonly indexed: true;
            readonly internalType: "bytes4";
        }, {
            readonly name: "enabled";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "GatewaySelectorNotAttestable";
        readonly inputs: readonly [];
    }];
    static createInterface(): LibAttestableSelectorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LibAttestableSelectors;
}
export {};
