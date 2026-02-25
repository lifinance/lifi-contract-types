import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { DiamondLoupeFacet, DiamondLoupeFacetInterface } from "../DiamondLoupeFacet";
type DiamondLoupeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DiamondLoupeFacet__factory extends ContractFactory {
    constructor(...args: DiamondLoupeFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<DiamondLoupeFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): DiamondLoupeFacet;
    connect(signer: Signer): DiamondLoupeFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506108bb8061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610085575f3560e01c806352ef6b2c1161005857806352ef6b2c146101695780637a0ed6271461017e578063adfca15e14610193578063cdffacc6146101b3575f5ffd5b806301ffc9a71461008957806303cbdbdf14610101578063421670be1461012a57806349fb434514610139575b5f5ffd5b6100ec610097366004610606565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f602052604090205460ff1690565b60405190151581526020015b60405180910390f35b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e5415156100ec565b604051600181526020016100f8565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e546040519081526020016100f8565b6101716101eb565b6040516100f8919061064c565b61018661027a565b6040516100f891906106a4565b6101a66101a136600461079f565b610470565b6040516100f891906107d2565b6101c66101c1366004610606565b61056c565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100f8565b60605f7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6002810180546040805160208084028201810190925282815293945083018282801561026f57602002820191905f5260205f20905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610244575b505050505091505090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e546060907fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c908067ffffffffffffffff8111156102da576102da61082b565b60405190808252806020026020018201604052801561031f57816020015b604080518082019091525f8152606060208201528152602001906001900390816102f85790505b5092505f5b8181101561046a575f83600201828154811061034257610342610858565b905f5260205f20015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508085838151811061037f5761037f610858565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff92831690529082165f9081526001860182526040908190208054825181850281018501909352808352919290919083018282801561043c57602002820191905f5260205f20905f905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116103e95790505b505050505085838151811061045357610453610858565b602090810291909101810151015250600101610324565b50505090565b73ffffffffffffffffffffffffffffffffffffffff81165f9081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d602090815260409182902080548351818402810184019094528084526060937fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c939092919083018282801561055f57602002820191905f5260205f20905f905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001906004019060208260030104928301926001038202915080841161050c5790505b5050505050915050919050565b5f7fffffffff000000000000000000000000000000000000000000000000000000008216810361059d57505f919050565b507fffffffff00000000000000000000000000000000000000000000000000000000165f9081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b5f60208284031215610616575f5ffd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610645575f5ffd5b9392505050565b602080825282518282018190525f918401906040840190835b8181101561069957835173ffffffffffffffffffffffffffffffffffffffff16835260209384019390920191600101610665565b509095945050505050565b5f602082016020835280845180835260408501915060408160051b8601019250602086015f5b82811015610793578685037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc00184528151805173ffffffffffffffffffffffffffffffffffffffff168652602090810151604082880181905281519088018190529101905f9060608801905b8083101561077b577fffffffff000000000000000000000000000000000000000000000000000000008451168252602082019150602084019350600183019250610736565b509650505060209384019391909101906001016106ca565b50929695505050505050565b5f602082840312156107af575f5ffd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610645575f5ffd5b602080825282518282018190525f918401906040840190835b818110156106995783517fffffffff00000000000000000000000000000000000000000000000000000000168352602093840193909201916001016107eb565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffdfea2646970667358221220d4f542d721ccffe41258f4c7acae5309ccee110c9872a8cc31673a9c593a227764736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "facetAddress";
        readonly inputs: readonly [{
            readonly name: "_functionSelector";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "facetAddress_";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "facetAddresses";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "facetAddresses_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "facetCount";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "count_";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "facetFunctionSelectors";
        readonly inputs: readonly [{
            readonly name: "_facet";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "facetFunctionSelectors_";
            readonly type: "bytes4[]";
            readonly internalType: "bytes4[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "facets";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "facets_";
            readonly type: "tuple[]";
            readonly internalType: "struct IDiamondLoupe.Facet[]";
            readonly components: readonly [{
                readonly name: "facetAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "functionSelectors";
                readonly type: "bytes4[]";
                readonly internalType: "bytes4[]";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "hasFacets";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "hasFacets_";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "loupeVersion";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "version_";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "supportsInterface";
        readonly inputs: readonly [{
            readonly name: "_interfaceId";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): DiamondLoupeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DiamondLoupeFacet;
}
export {};
