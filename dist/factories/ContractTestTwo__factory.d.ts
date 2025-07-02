import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ContractTestTwo, ContractTestTwoInterface } from "../ContractTestTwo";
declare type ContractTestTwoConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ContractTestTwo__factory extends ContractFactory {
    constructor(...args: ContractTestTwoConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTestTwo>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ContractTestTwo;
    connect(signer: Signer): ContractTestTwo__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b505f80546001600160a01b031916331790556101688061002d5f395ff3fe60806040526004361061002b575f3560e01c80638da5cb5b14610036578063f85f25931461008a575f5ffd5b3661003257005b5f5ffd5b348015610041575f5ffd5b505f546100619073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b348015610095575f5ffd5b506100a96100a43660046100f0565b6100ab565b005b60405173ffffffffffffffffffffffffffffffffffffffff83169082156108fc029083905f818181858888f193505050501580156100eb573d5f5f3e3d5ffd5b505050565b5f5f60408385031215610101575f5ffd5b823573ffffffffffffffffffffffffffffffffffffffff81168114610124575f5ffd5b94602093909301359350505056fea26469706673582212203fc0160480d6475bb2aa45b8fdde11d722a44ba85e436ead40c286d833832e2d64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "emergencyWithdrawForAdmin";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): ContractTestTwoInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ContractTestTwo;
}
export {};
