import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { TestViolationsErrors, TestViolationsErrorsInterface } from "../TestViolationsErrors";
type TestViolationsErrorsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestViolationsErrors__factory extends ContractFactory {
    constructor(...args: TestViolationsErrorsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TestViolationsErrors>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TestViolationsErrors;
    connect(signer: Signer): TestViolationsErrors__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506102708061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061003f575f3560e01c806320987767146100435780633744bdf514610058578063e82aaadc14610060575b5f5ffd5b6100566100513660046101e9565b610073565b005b6100566100e4565b61005661006e366004610200565b61016c565b5f81116100e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f60448201526064015b60405180910390fd5b50565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f5468697320697320612072657665727420737472696e672c2073686f756c642060448201527f75736520637573746f6d206572726f720000000000000000000000000000000060648201526084016100d8565b73ffffffffffffffffffffffffffffffffffffffff81166100e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f416464726573732063616e6e6f74206265207a65726f0000000000000000000060448201526064016100d8565b5f602082840312156101f9575f5ffd5b5035919050565b5f60208284031215610210575f5ffd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610233575f5ffd5b939250505056fea2646970667358221220ef767ee05250bbd86ea29e1999321bed591361d8b448579b04c0a18e38d86a5264736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "testAnotherRevert";
        readonly inputs: readonly [{
            readonly name: "addr";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "testRevert";
        readonly inputs: readonly [{
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "testRevertWithMessage";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }];
    static createInterface(): TestViolationsErrorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestViolationsErrors;
}
export {};
