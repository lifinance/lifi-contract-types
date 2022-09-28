import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TransferrableOwnership, TransferrableOwnershipInterface } from "../../../src/Helpers/TransferrableOwnership";
declare type TransferrableOwnershipConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TransferrableOwnership__factory extends ContractFactory {
    constructor(...args: TransferrableOwnershipConstructorParams);
    deploy(initialOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TransferrableOwnership>;
    getDeployTransaction(initialOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TransferrableOwnership;
    connect(signer: Signer): TransferrableOwnership__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161050e38038061050e83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b61047b806100936000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80638da5cb5b116100505780638da5cb5b1461007e578063e30c3978146100c7578063f2fde38b146100e757600080fd5b806323452b9c1461006c5780637200b82914610076575b600080fd5b6100746100fa565b005b6100746101c4565b60005461009e9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60015461009e9073ffffffffffffffffffffffffffffffffffffffff1681565b6100746100f5366004610408565b6102aa565b60005473ffffffffffffffffffffffffffffffffffffffff16331461014b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661019a576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610216576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102fb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610348576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610397576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60006020828403121561041a57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461043e57600080fd5b939250505056fea264697066735822122059a4243fbf0c7025bb7226af9bea1e596d663eb8e3c5330a863c2181b9a1836064736f6c63430008100033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): TransferrableOwnershipInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TransferrableOwnership;
}
export {};
