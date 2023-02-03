import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { TestAMM, TestAMMInterface } from "../TestAMM";
declare type TestAMMConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestAMM__factory extends ContractFactory {
    constructor(...args: TestAMMConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TestAMM>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TestAMM;
    connect(signer: Signer): TestAMM__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610305806100206000396000f3fe60806040526004361061001e5760003560e01c80638a0ccd5614610023575b600080fd5b610036610031366004610262565b610038565b005b73ffffffffffffffffffffffffffffffffffffffff84161561017d576040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810184905273ffffffffffffffffffffffffffffffffffffffff8516906323b872dd906064016020604051808303816000875af11580156100cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100f191906102a6565b506040517f9dc29fac0000000000000000000000000000000000000000000000000000000081523060048201526024810184905273ffffffffffffffffffffffffffffffffffffffff851690639dc29fac90604401600060405180830381600087803b15801561016057600080fd5b505af1158015610174573d6000803e3d6000fd5b505050506101ad565b60405161d34d903480156108fc02916000818181858888f193505050501580156101ab573d6000803e3d6000fd5b505b6040517f40c10f190000000000000000000000000000000000000000000000000000000081523360048201526024810182905273ffffffffffffffffffffffffffffffffffffffff8316906340c10f1990604401600060405180830381600087803b15801561021b57600080fd5b505af115801561022f573d6000803e3d6000fd5b5050505050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461025d57600080fd5b919050565b6000806000806080858703121561027857600080fd5b61028185610239565b93506020850135925061029660408601610239565b9396929550929360600135925050565b6000602082840312156102b857600080fd5b815180151581146102c857600080fd5b939250505056fea264697066735822122053c6f3df0c03992ddb460c382052d970fa9815c14ed2011b9b6e3d97992d8e1d64736f6c63430008110033";
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
    static createInterface(): TestAMMInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestAMM;
}
export {};
