import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Vault, VaultInterface } from "../../Executor.t.sol/Vault";
declare type VaultConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Vault__factory extends ContractFactory {
    constructor(...args: VaultConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Vault>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Vault;
    connect(signer: Signer): Vault__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061018b806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806347e7ef2414610030575b600080fd5b61004361003e3660046100e7565b610045565b005b6040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810182905273ffffffffffffffffffffffffffffffffffffffff8316906323b872dd906064016020604051808303816000875af11580156100be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e2919061012c565b505050565b600080604083850312156100fa57600080fd5b823573ffffffffffffffffffffffffffffffffffffffff8116811461011e57600080fd5b946020939093013593505050565b60006020828403121561013e57600080fd5b8151801515811461014e57600080fd5b939250505056fea26469706673582212205c47a83e8e84a9464f9ca07af8d281518a63c73905551fd50b898f474f60399f64736f6c63430008110033";
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
    static createInterface(): VaultInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Vault;
}
export {};
