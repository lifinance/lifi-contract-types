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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506108a18061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061007a575f3560e01c806352ef6b2c1161005857806352ef6b2c1461014f5780637a0ed62714610164578063adfca15e14610179578063cdffacc614610199575f5ffd5b806301ffc9a71461007e57806303cbdbdf146100f657806349fb43451461011f575b5f5ffd5b6100e161008c3660046105ec565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f602052604090205460ff1690565b60405190151581526020015b60405180910390f35b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e5415156100e1565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e546040519081526020016100ed565b6101576101d1565b6040516100ed9190610632565b61016c610260565b6040516100ed919061068a565b61018c610187366004610785565b610456565b6040516100ed91906107b8565b6101ac6101a73660046105ec565b610552565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ed565b60605f7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6002810180546040805160208084028201810190925282815293945083018282801561025557602002820191905f5260205f20905b815473ffffffffffffffffffffffffffffffffffffffff16815260019091019060200180831161022a575b505050505091505090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e546060907fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c908067ffffffffffffffff8111156102c0576102c0610811565b60405190808252806020026020018201604052801561030557816020015b604080518082019091525f8152606060208201528152602001906001900390816102de5790505b5092505f5b81811015610450575f8360020182815481106103285761032861083e565b905f5260205f20015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050808583815181106103655761036561083e565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff92831690529082165f9081526001860182526040908190208054825181850281018501909352808352919290919083018282801561042257602002820191905f5260205f20905f905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116103cf5790505b50505050508583815181106104395761043961083e565b60209081029190910181015101525060010161030a565b50505090565b73ffffffffffffffffffffffffffffffffffffffff81165f9081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d602090815260409182902080548351818402810184019094528084526060937fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c939092919083018282801561054557602002820191905f5260205f20905f905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116104f25790505b5050505050915050919050565b5f7fffffffff000000000000000000000000000000000000000000000000000000008216810361058357505f919050565b507fffffffff00000000000000000000000000000000000000000000000000000000165f9081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b5f602082840312156105fc575f5ffd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461062b575f5ffd5b9392505050565b602080825282518282018190525f918401906040840190835b8181101561067f57835173ffffffffffffffffffffffffffffffffffffffff1683526020938401939092019160010161064b565b509095945050505050565b5f602082016020835280845180835260408501915060408160051b8601019250602086015f5b82811015610779578685037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc00184528151805173ffffffffffffffffffffffffffffffffffffffff168652602090810151604082880181905281519088018190529101905f9060608801905b80831015610761577fffffffff00000000000000000000000000000000000000000000000000000000845116825260208201915060208401935060018301925061071c565b509650505060209384019391909101906001016106b0565b50929695505050505050565b5f60208284031215610795575f5ffd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461062b575f5ffd5b602080825282518282018190525f918401906040840190835b8181101561067f5783517fffffffff00000000000000000000000000000000000000000000000000000000168352602093840193909201916001016107d1565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffdfea2646970667358221220f036cc544196667f745148f0c9f62282e27ab3e50765c09ea1e756704373c27c64736f6c634300081d0033";
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
