import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { DexManagerFacet, DexManagerFacetInterface } from "../DexManagerFacet";
declare type DexManagerFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DexManagerFacet__factory extends ContractFactory {
    constructor(...args: DexManagerFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<DexManagerFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): DexManagerFacet;
    connect(signer: Signer): DexManagerFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610f9a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80639afc19c71161005b5780639afc19c7146100f0578063c3a6a96b14610103578063fbb2d38114610116578063fcd8e49e1461012b57600080fd5b8063124f1ead1461008d5780632d2506a9146100a257806344e2b18c146100ca578063536db266146100dd575b600080fd5b6100a061009b366004610c80565b61013e565b005b6100b56100b0366004610cf2565b6101d1565b60405190151581526020015b60405180910390f35b6100a06100d8366004610d69565b61022c565b6100a06100eb366004610c80565b610327565b6100a06100fe366004610dbd565b6103ba565b6100a0610111366004610dff565b6104b2565b61011e61056a565b6040516100c19190610e32565b6100a0610139366004610dbd565b610579565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff163314610184576101846106ee565b61018d8161078e565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f78e0a2ffcdfbbb49ba5c8050d8630fab2176d825e8360809db049cd98f462a7890600090a250565b7fffffffff00000000000000000000000000000000000000000000000000000000811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604081205460ff165b92915050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff163314610272576102726106ee565b8160005b8181101561032057600085858381811061029257610292610e8c565b90506020020160208101906102a79190610cf2565b905083156102bd576102b8816109b2565b6102c6565b6102c681610a3c565b604051841515907fffffffff000000000000000000000000000000000000000000000000000000008316907f9167f6a23d52a4522e9211205d62ce63f02d928227ae0fe00326f51e152a3c4590600090a350600101610276565b5050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461036d5761036d6106ee565b61037681610a64565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f7e0058dd0cbc0a8b7beaa013a4825655d8e9e81a5e2cc6582818deded0a41b9990600090a250565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff163314610400576104006106ee565b8060005b818110156104ac5761043b84848381811061042157610421610e8c565b90506020020160208101906104369190610c80565b61078e565b83838281811061044d5761044d610e8c565b90506020020160208101906104629190610c80565b73ffffffffffffffffffffffffffffffffffffffff167f78e0a2ffcdfbbb49ba5c8050d8630fab2176d825e8360809db049cd98f462a7860405160405180910390a2600101610404565b50505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146104f8576104f86106ee565b801561050c57610507826109b2565b610515565b61051582610a3c565b604051811515907fffffffff000000000000000000000000000000000000000000000000000000008416907f9167f6a23d52a4522e9211205d62ce63f02d928227ae0fe00326f51e152a3c4590600090a35050565b6060610574610b51565b905090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146105bf576105bf6106ee565b8060005b818110156104ac5760008484838181106105df576105df610e8c565b90506020020160208101906105f49190610c80565b90503073ffffffffffffffffffffffffffffffffffffffff821603610645576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff161561069b57506001016105c3565b6106a481610a64565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f7e0058dd0cbc0a8b7beaa013a4825655d8e9e81a5e2cc6582818deded0a41b9990600090a2506001016105c3565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff90911615151461078b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff166107e1575050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208290526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690556002820154905b818110156104ac578373ffffffffffffffffffffffffffffffffffffffff1683600201828154811061086757610867610e8c565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16036109a0576002830161089d600184610eea565b815481106108ad576108ad610e8c565b60009182526020909120015460028401805473ffffffffffffffffffffffffffffffffffffffff90921691839081106108e8576108e8610e8c565b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260020180548061094357610943610efd565b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690550190556104ac565b806109aa81610f2c565b915050610833565b60017f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e5b7fffffffff000000000000000000000000000000000000000000000000000000009290921660009081526001909201602052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60007f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e6109d6565b610a6d81610be2565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1615610ac1575050565b73ffffffffffffffffffffffffffffffffffffffff909116600081815260208381526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556002909401805494850181558252902090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b60607f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e600201805480602002602001604051908101604052809291908181526020018280548015610bd857602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610bad575b5050505050905090565b73ffffffffffffffffffffffffffffffffffffffff8116610c2f576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b60000361078b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060208284031215610c9257600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610cb657600080fd5b9392505050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081168114610ced57600080fd5b919050565b600060208284031215610d0457600080fd5b610cb682610cbd565b60008083601f840112610d1f57600080fd5b50813567ffffffffffffffff811115610d3757600080fd5b6020830191508360208260051b8501011115610d5257600080fd5b9250929050565b80358015158114610ced57600080fd5b600080600060408486031215610d7e57600080fd5b833567ffffffffffffffff811115610d9557600080fd5b610da186828701610d0d565b9094509250610db4905060208501610d59565b90509250925092565b60008060208385031215610dd057600080fd5b823567ffffffffffffffff811115610de757600080fd5b610df385828601610d0d565b90969095509350505050565b60008060408385031215610e1257600080fd5b610e1b83610cbd565b9150610e2960208401610d59565b90509250929050565b6020808252825182820181905260009190848201906040850190845b81811015610e8057835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101610e4e565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561022657610226610ebb565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610f5d57610f5d610ebb565b506001019056fea264697066735822122009b89011a981af457091913059eac24e5d97d4e70c1092218431c923a6c1d52364736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "addDex";
        readonly inputs: readonly [{
            readonly name: "_dex";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "approvedDexs";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "addresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "batchAddDex";
        readonly inputs: readonly [{
            readonly name: "_dexs";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "batchRemoveDex";
        readonly inputs: readonly [{
            readonly name: "_dexs";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "batchSetFunctionApprovalBySignature";
        readonly inputs: readonly [{
            readonly name: "_signatures";
            readonly type: "bytes4[]";
            readonly internalType: "bytes4[]";
        }, {
            readonly name: "_approval";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "isFunctionApproved";
        readonly inputs: readonly [{
            readonly name: "_signature";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "approved";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "removeDex";
        readonly inputs: readonly [{
            readonly name: "_dex";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setFunctionApprovalBySignature";
        readonly inputs: readonly [{
            readonly name: "_signature";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }, {
            readonly name: "_approval";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "DexAdded";
        readonly inputs: readonly [{
            readonly name: "dexAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DexRemoved";
        readonly inputs: readonly [{
            readonly name: "dexAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "FunctionSignatureApprovalChanged";
        readonly inputs: readonly [{
            readonly name: "functionSignature";
            readonly type: "bytes4";
            readonly indexed: true;
            readonly internalType: "bytes4";
        }, {
            readonly name: "approved";
            readonly type: "bool";
            readonly indexed: true;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotAuthoriseSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): DexManagerFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DexManagerFacet;
}
export {};
