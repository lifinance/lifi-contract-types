import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ImmutableDiamondOwnershipTransfer, ImmutableDiamondOwnershipTransferInterface } from "../../MakeLiFiDiamondImmutable.s.sol/ImmutableDiamondOwnershipTransfer";
declare type ImmutableDiamondOwnershipTransferConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ImmutableDiamondOwnershipTransfer__factory extends ContractFactory {
    constructor(...args: ImmutableDiamondOwnershipTransferConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ImmutableDiamondOwnershipTransfer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ImmutableDiamondOwnershipTransfer;
    connect(signer: Signer): ImmutableDiamondOwnershipTransfer__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b5061012f8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806358819abf14602d575b600080fd5b60336035565b005b603d6000603f565b565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132080547fffffffffffffffffffffffff0000000000000000000000000000000000000000811673ffffffffffffffffffffffffffffffffffffffff8481169182179093556040517fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350505056fea26469706673582212204883e9eacd6a6b1d82acbdc4450704ddcb0266494d1888c97b6cce417ba1a1d264736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "transferOwnershipToZeroAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ImmutableDiamondOwnershipTransferInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ImmutableDiamondOwnershipTransfer;
}
export {};
