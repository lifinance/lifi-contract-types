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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b5061086d8061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061006f575f3560e01c80637a0ed6271161004d5780637a0ed62714610130578063adfca15e14610145578063cdffacc614610165575f5ffd5b806301ffc9a71461007357806349fb4345146100eb57806352ef6b2c1461011b575b5f5ffd5b6100d66100813660046105b8565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f602052604090205460ff1690565b60405190151581526020015b60405180910390f35b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e546040519081526020016100e2565b61012361019d565b6040516100e291906105fe565b61013861022c565b6040516100e29190610656565b610158610153366004610751565b610422565b6040516100e29190610784565b6101786101733660046105b8565b61051e565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100e2565b60605f7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6002810180546040805160208084028201810190925282815293945083018282801561022157602002820191905f5260205f20905b815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116101f6575b505050505091505090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e546060907fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c908067ffffffffffffffff81111561028c5761028c6107dd565b6040519080825280602002602001820160405280156102d157816020015b604080518082019091525f8152606060208201528152602001906001900390816102aa5790505b5092505f5b8181101561041c575f8360020182815481106102f4576102f461080a565b905f5260205f20015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050808583815181106103315761033161080a565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff92831690529082165f908152600186018252604090819020805482518185028101850190935280835291929091908301828280156103ee57602002820191905f5260205f20905f905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001906004019060208260030104928301926001038202915080841161039b5790505b50505050508583815181106104055761040561080a565b6020908102919091018101510152506001016102d6565b50505090565b73ffffffffffffffffffffffffffffffffffffffff81165f9081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d602090815260409182902080548351818402810184019094528084526060937fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c939092919083018282801561051157602002820191905f5260205f20905f905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116104be5790505b5050505050915050919050565b5f7fffffffff000000000000000000000000000000000000000000000000000000008216810361054f57505f919050565b507fffffffff00000000000000000000000000000000000000000000000000000000165f9081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b5f602082840312156105c8575f5ffd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146105f7575f5ffd5b9392505050565b602080825282518282018190525f918401906040840190835b8181101561064b57835173ffffffffffffffffffffffffffffffffffffffff16835260209384019390920191600101610617565b509095945050505050565b5f602082016020835280845180835260408501915060408160051b8601019250602086015f5b82811015610745578685037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc00184528151805173ffffffffffffffffffffffffffffffffffffffff168652602090810151604082880181905281519088018190529101905f9060608801905b8083101561072d577fffffffff0000000000000000000000000000000000000000000000000000000084511682526020820191506020840193506001830192506106e8565b5096505050602093840193919091019060010161067c565b50929695505050505050565b5f60208284031215610761575f5ffd5b813573ffffffffffffffffffffffffffffffffffffffff811681146105f7575f5ffd5b602080825282518282018190525f918401906040840190835b8181101561064b5783517fffffffff000000000000000000000000000000000000000000000000000000001683526020938401939092019160010161079d565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffdfea26469706673582212207a39c57748a866b84eea543f49ade9379fa4a87a58082cc7de9b1c3a4d64e01164736f6c634300081d0033";
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
