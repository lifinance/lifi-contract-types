import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LibClone, LibCloneInterface } from "../LibClone";
type LibCloneConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LibClone__factory extends ContractFactory {
    constructor(...args: LibCloneConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LibClone>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LibClone;
    connect(signer: Signer): LibClone__factory;
    static readonly bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea2646970667358221220b6033748c83759da2fbca59a4653d91b323175502612219c7f4111a267f8e4d364736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "DeploymentFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ETHTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SaltDoesNotStartWith";
        readonly inputs: readonly [];
    }];
    static createInterface(): LibCloneInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LibClone;
}
export {};
