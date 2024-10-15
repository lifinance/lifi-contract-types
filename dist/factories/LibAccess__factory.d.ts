import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LibAccess, LibAccessInterface } from "../LibAccess";
declare type LibAccessConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208fd65f55a479f5742ed82f4c3ace664b0ef477be2526f4defc1cfb69620d544c64736f6c63430008110033";
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
