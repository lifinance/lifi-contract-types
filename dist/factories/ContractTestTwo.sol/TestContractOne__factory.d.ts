import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TestContractOne, TestContractOneInterface } from "../../ContractTestTwo.sol/TestContractOne";
declare type TestContractOneConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestContractOne__factory extends ContractFactory {
    constructor(...args: TestContractOneConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TestContractOne>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TestContractOne;
    connect(signer: Signer): TestContractOne__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506102408061001c5f395ff3fe608060405260043610610033575f3560e01c806327e235e3146100375780633ccfd60b14610074578063d0e30db01461008a575b5f5ffd5b348015610042575f5ffd5b50610062610051366004610192565b5f6020819052908152604090205481565b60405190815260200160405180910390f35b34801561007f575f5ffd5b50610088610092565b005b61008861016d565b335f90815260208190526040812054908190036100db576040517fd0d04f6000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040515f90339083908381818185875af1925050503d805f811461011a576040519150601f19603f3d011682016040523d82523d5f602084013e61011f565b606091505b505090508061015a576040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050335f90815260208190526040812055565b335f908152602081905260408120805434929061018b9084906101cc565b9091555050565b5f602082840312156101a2575f5ffd5b813573ffffffffffffffffffffffffffffffffffffffff811681146101c5575f5ffd5b9392505050565b80820180821115610204577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9291505056fea2646970667358221220bedf0c805713835b83360ea813f540ccf32fa191c81a1e02caff2b10e3efc71f64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "balances";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly name: "NothingToWithdraw";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "WithdrawFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): TestContractOneInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestContractOne;
}
export {};
