import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { TransferEventEmitter, TransferEventEmitterInterface } from "../TransferEventEmitter";
declare type TransferEventEmitterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TransferEventEmitter__factory extends ContractFactory {
    constructor(...args: TransferEventEmitterConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TransferEventEmitter>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TransferEventEmitter;
    connect(signer: Signer): TransferEventEmitter__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610154806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063b5d26df014610030575b600080fd5b61004361003e3660046100d3565b610045565b005b6040805173ffffffffffffffffffffffffffffffffffffffff868116825285811660208301528416818301526060810183905290517f70c5f97fd0068e96984b8116fe83eefbff3b91244565bf311a3cba619b4ecbc79181900360800190a150505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146100ce57600080fd5b919050565b600080600080608085870312156100e957600080fd5b6100f2856100aa565b9350610100602086016100aa565b925061010e604086016100aa565b939692955092936060013592505056fea2646970667358221220b8b831ff96f9e7dde4e1dd64a2c595899f214bae314f50032d5e2c0d7e3cdd1564736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "emitTransferEvent";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "TokensTransferred";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "from";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): TransferEventEmitterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TransferEventEmitter;
}
export {};
