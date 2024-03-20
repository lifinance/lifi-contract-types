import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Bytecode, BytecodeInterface } from "../Bytecode";
declare type BytecodeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Bytecode__factory extends ContractFactory {
    constructor(...args: BytecodeConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Bytecode>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Bytecode;
    connect(signer: Signer): Bytecode__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220cd03fc853254c74157471ed2a0af3822142ef9fce6b4e9e2e92242ac753fce2664736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "InvalidCodeAtRange";
        readonly inputs: readonly [{
            readonly name: "_size";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_start";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_end";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    static createInterface(): BytecodeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Bytecode;
}
export {};
