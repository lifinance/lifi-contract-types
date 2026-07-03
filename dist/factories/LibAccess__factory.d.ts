import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LibAccess, LibAccessInterface } from "../LibAccess";
type LibAccessConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LibAccess__factory extends ContractFactory {
    constructor(...args: LibAccessConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LibAccess>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LibAccess;
    connect(signer: Signer): LibAccess__factory;
    static readonly bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea26469706673582212200f56a1370f092160348d8155ec96d864d7007eff53db068d9ee51eb2e63f05a864736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "event";
        readonly name: "AccessGranted";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "method";
            readonly type: "bytes4";
            readonly indexed: true;
            readonly internalType: "bytes4";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "AccessRevoked";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "method";
            readonly type: "bytes4";
            readonly indexed: true;
            readonly internalType: "bytes4";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): LibAccessInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LibAccess;
}
export {};
