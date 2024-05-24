import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { CalledContract, CalledContractInterface } from "../../LibUtil.sol/CalledContract";
declare type CalledContractConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CalledContract__factory extends ContractFactory {
    constructor(...args: CalledContractConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CalledContract>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CalledContract;
    connect(signer: Signer): CalledContract__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610113806100206000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063591a2a69146037578063b0bea72514603f575b600080fd5b603d6045565b005b603d60ab565b6040517f49411f8800000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f446f6e27742063616c6c206d6521000000000000000000000000000000000000604482015260640160405180910390fd5b6040517f9f0d3cb000000000000000000000000000000000000000000000000000000000815260040160405180910390fdfea26469706673582212203a11141bb7c3204931b31c4d871ebf233b79f8dc353c52f1d9420a0c7ec0f29864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "callMe";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "callMeAlso";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "error";
        readonly name: "CallMeError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CallMeErrorWithMessage";
        readonly inputs: readonly [{
            readonly name: "message";
            readonly type: "string";
            readonly internalType: "string";
        }];
    }];
    static createInterface(): CalledContractInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CalledContract;
}
export {};
