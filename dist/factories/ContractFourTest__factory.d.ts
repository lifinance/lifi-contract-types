import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ContractFourTest, ContractFourTestInterface } from "../ContractFourTest";
declare type ContractFourTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ContractFourTest__factory extends ContractFactory {
    constructor(...args: ContractFourTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractFourTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ContractFourTest;
    connect(signer: Signer): ContractFourTest__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506102278061001c5f395ff3fe608060405260043610610020575f3560e01c80631cff79cd1461002b575f5ffd5b3661002757005b5f5ffd5b61003e6100393660046100ee565b610040565b005b5f5f8473ffffffffffffffffffffffffffffffffffffffff1634858560405161006a929190610186565b5f6040518083038185875af1925050503d805f81146100a4576040519150601f19603f3d011682016040523d82523d5f602084013e6100a9565b606091505b50915091507f0fb6775dc1981e714851ec9511c68453c509a3e8c85f97a4f4d1185bf2bdbf7a82826040516100df929190610195565b60405180910390a15050505050565b5f5f5f60408486031215610100575f5ffd5b833573ffffffffffffffffffffffffffffffffffffffff81168114610123575f5ffd5b9250602084013567ffffffffffffffff81111561013e575f5ffd5b8401601f8101861361014e575f5ffd5b803567ffffffffffffffff811115610164575f5ffd5b866020828401011115610175575f5ffd5b939660209190910195509293505050565b818382375f9101908152919050565b8215158152604060208201525f82518060408401528060208501606085015e5f6060828501015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116840101915050939250505056fea2646970667358221220d75de1e850712af8b39d05671d079ebbcc9890897f001065bab96e69f0c7040c64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "execute";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "Executed";
        readonly inputs: readonly [{
            readonly name: "success";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): ContractFourTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ContractFourTest;
}
export {};
