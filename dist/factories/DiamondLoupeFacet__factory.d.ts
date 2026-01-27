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
    static readonly bytecode = "0x608060405234801561001057600080fd5b506107e2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80637a0ed627116100505780637a0ed627146100fa578063adfca15e1461010f578063cdffacc61461012f57600080fd5b806301ffc9a71461006c57806352ef6b2c146100e5575b600080fd5b6100d061007a36600461055d565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f602052604090205460ff1690565b60405190151581526020015b60405180910390f35b6100ed6101cb565b6040516100dc91906105a6565b61010261025d565b6040516100dc919061065d565b61012261011d366004610705565b61045d565b6040516100dc919061073b565b6101a661013d36600461055d565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100dc565b606060007fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6002810180546040805160208084028201810190925282815293945083018282801561025257602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610227575b505050505091505090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e546060907fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c908067ffffffffffffffff8111156102bd576102bd61074e565b60405190808252806020026020018201604052801561030357816020015b6040805180820190915260008152606060208201528152602001906001900390816102db5790505b50925060005b818110156104575760008360020182815481106103285761032861077d565b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050808583815181106103685761036861077d565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff928316905290821660009081526001860182526040908190208054825181850281018501909352808352919290919083018282801561042957602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116103d65790505b50505050508583815181106104405761044061077d565b602090810291909101810151015250600101610309565b50505090565b73ffffffffffffffffffffffffffffffffffffffff811660009081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d602090815260409182902080548351818402810184019094528084526060937fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c939092919083018282801561055057602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116104fd5790505b5050505050915050919050565b60006020828403121561056f57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461059f57600080fd5b9392505050565b6020808252825182820181905260009190848201906040850190845b818110156105f457835173ffffffffffffffffffffffffffffffffffffffff16835292840192918401916001016105c2565b50909695505050505050565b600081518084526020808501945080840160005b838110156106525781517fffffffff000000000000000000000000000000000000000000000000000000001687529582019590820190600101610614565b509495945050505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156106f7578883037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc00185528151805173ffffffffffffffffffffffffffffffffffffffff1684528701518784018790526106e487850182610600565b9588019593505090860190600101610684565b509098975050505050505050565b60006020828403121561071757600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461059f57600080fd5b60208152600061059f6020830184610600565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220d4ff5c119b8d14f1ef02226e60e217c72a4e59bdc228436196d684dbf704929664736f6c63430008110033";
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
