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
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212200c17cf10fa26b441e631075b860312de13c2a50b1c28c1c3904c93cf6539ffd364736f6c63430008110033";
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
