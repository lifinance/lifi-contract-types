import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OwnershipFacet, OwnershipFacetInterface } from "../../../src/Facets/OwnershipFacet";
declare type OwnershipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OwnershipFacet__factory extends ContractFactory {
    constructor(...args: OwnershipFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OwnershipFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OwnershipFacet;
    connect(signer: Signer): OwnershipFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610645806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630f4efb90146100515780637200b8291461005b5780638da5cb5b14610063578063f2fde38b14610094575b600080fd5b6100596100a7565b005b610059610146565b61006b610283565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100596100a23660046105d2565b6102c8565b6100af610449565b7fcf2fba1a5c9c61959b11f2f1f88658271468c6fcc649cb2a6868473d3cd07f8b805473ffffffffffffffffffffffffffffffffffffffff1661011e576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fcf2fba1a5c9c61959b11f2f1f88658271468c6fcc649cb2a6868473d3cd07f8b805473ffffffffffffffffffffffffffffffffffffffff1633146101b7576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80546101d89073ffffffffffffffffffffffffffffffffffffffff16610518565b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000168155600061023e7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b60006102c37fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b6102d0610449565b7fcf2fba1a5c9c61959b11f2f1f88658271468c6fcc649cb2a6868473d3cd07f8b73ffffffffffffffffffffffffffffffffffffffff821661033e576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036103da576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117825560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a35050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610516576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201527f6572000000000000000000000000000000000000000000000000000000000000606482015260840160405180910390fd5b565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132080547fffffffffffffffffffffffff0000000000000000000000000000000000000000811673ffffffffffffffffffffffffffffffffffffffff8481169182179093556040517fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6000602082840312156105e457600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461060857600080fd5b939250505056fea26469706673582212209e0714afe5e2e5aef67e5e8424091709aa07a5c5bde79d38c87fcd7571f886e164736f6c634300080d0033";
    static readonly abi: ({
        inputs: never[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
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
        outputs?: undefined;
        stateMutability?: undefined;
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
    static createInterface(): OwnershipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OwnershipFacet;
}
export {};
