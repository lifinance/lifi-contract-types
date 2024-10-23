import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { NonStandardSelectorsRegistryFacet, NonStandardSelectorsRegistryFacetInterface } from "../NonStandardSelectorsRegistryFacet";
declare type NonStandardSelectorsRegistryFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NonStandardSelectorsRegistryFacet__factory extends ContractFactory {
    constructor(...args: NonStandardSelectorsRegistryFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<NonStandardSelectorsRegistryFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): NonStandardSelectorsRegistryFacet;
    connect(signer: Signer): NonStandardSelectorsRegistryFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506105cc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806337352cbd14610046578063b9eb14af1461005b578063e2440f0d146100d3575b600080fd5b6100596100543660046103e7565b6100e6565b005b6100bf610069366004610488565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f9322cbed71b6123048bfdf45bc15fe46382317debf7575a9c9ad1dcbce4034ce602052604090205460ff1690565b604051901515815260200160405180910390f35b6100596100e13660046104ba565b61029d565b6100ee610326565b7f9322cbed71b6123048bfdf45bc15fe46382317debf7575a9c9ad1dcbce4034ce8184146101c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152605760248201527f4e6f6e5374616e6461726453656c6563746f727352656769737472794661636560448201527f743a2073656c6563746f727320616e642069734e6f6e5374616e64617264536560648201527f6c6563746f7273206c656e677468206d69736d61746368000000000000000000608482015260a40160405180910390fd5b60005b84811015610295578383828181106101e5576101e56104ed565b90506020020160208101906101fa919061051c565b82600088888581811061020f5761020f6104ed565b90506020020160208101906102249190610488565b7fffffffff00000000000000000000000000000000000000000000000000000000168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790558061028d81610537565b9150506101cb565b505050505050565b6102a5610326565b7fffffffff000000000000000000000000000000000000000000000000000000009190911660009081527f9322cbed71b6123048bfdf45bc15fe46382317debf7575a9c9ad1dcbce4034ce6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610399576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60008083601f8401126103ad57600080fd5b50813567ffffffffffffffff8111156103c557600080fd5b6020830191508360208260051b85010111156103e057600080fd5b9250929050565b600080600080604085870312156103fd57600080fd5b843567ffffffffffffffff8082111561041557600080fd5b6104218883890161039b565b9096509450602087013591508082111561043a57600080fd5b506104478782880161039b565b95989497509550505050565b80357fffffffff000000000000000000000000000000000000000000000000000000008116811461048357600080fd5b919050565b60006020828403121561049a57600080fd5b6104a382610453565b9392505050565b8035801515811461048357600080fd5b600080604083850312156104cd57600080fd5b6104d683610453565b91506104e4602084016104aa565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561052e57600080fd5b6104a3826104aa565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361058f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea26469706673582212204d153beb3896a05733f6f8ecda8ba904448e59d0d0a635743adf7b9e712a885364736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "batchSetNonStandardSelectors";
        readonly inputs: readonly [{
            readonly name: "_selectors";
            readonly type: "bytes4[]";
            readonly internalType: "bytes4[]";
        }, {
            readonly name: "_isNonStandardSelectors";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "isNonStandardSelector";
        readonly inputs: readonly [{
            readonly name: "_selector";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setNonStandardSelector";
        readonly inputs: readonly [{
            readonly name: "_selector";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }, {
            readonly name: "_isNonStandardSelector";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }];
    static createInterface(): NonStandardSelectorsRegistryFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NonStandardSelectorsRegistryFacet;
}
export {};
