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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50610f118061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610085575f3560e01c80639afc19c7116100585780639afc19c7146100ec578063c3a6a96b146100ff578063fbb2d38114610112578063fcd8e49e14610127575f5ffd5b8063124f1ead146100895780632d2506a91461009e57806344e2b18c146100c6578063536db266146100d9575b5f5ffd5b61009c610097366004610c53565b61013a565b005b6100b16100ac366004610cc1565b6101cc565b60405190151581526020015b60405180910390f35b61009c6100d4366004610d31565b610226565b61009c6100e7366004610c53565b61031e565b61009c6100fa366004610d81565b6103b0565b61009c61010d366004610dc0565b6104a7565b61011a61055e565b6040516100bd9190610df1565b61009c610135366004610d81565b61056d565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff163314610180576101806106db565b6101898161077a565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f78e0a2ffcdfbbb49ba5c8050d8630fab2176d825e8360809db049cd98f462a78905f90a250565b7fffffffff0000000000000000000000000000000000000000000000000000000081165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604081205460ff165b92915050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461026c5761026c6106db565b815f5b81811015610317575f85858381811061028a5761028a610e49565b905060200201602081019061029f9190610cc1565b905083156102b5576102b08161098c565b6102be565b6102be81610a15565b604051841515907fffffffff000000000000000000000000000000000000000000000000000000008316907f9167f6a23d52a4522e9211205d62ce63f02d928227ae0fe00326f51e152a3c45905f90a35060010161026f565b5050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff163314610364576103646106db565b61036d81610a3c565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f7e0058dd0cbc0a8b7beaa013a4825655d8e9e81a5e2cc6582818deded0a41b99905f90a250565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146103f6576103f66106db565b805f5b818110156104a15761043084848381811061041657610416610e49565b905060200201602081019061042b9190610c53565b61077a565b83838281811061044257610442610e49565b90506020020160208101906104579190610c53565b73ffffffffffffffffffffffffffffffffffffffff167f78e0a2ffcdfbbb49ba5c8050d8630fab2176d825e8360809db049cd98f462a7860405160405180910390a26001016103f9565b50505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146104ed576104ed6106db565b8015610501576104fc8261098c565b61050a565b61050a82610a15565b604051811515907fffffffff000000000000000000000000000000000000000000000000000000008416907f9167f6a23d52a4522e9211205d62ce63f02d928227ae0fe00326f51e152a3c45905f90a35050565b6060610568610b27565b905090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146105b3576105b36106db565b805f5b818110156104a1575f8484838181106105d1576105d1610e49565b90506020020160208101906105e69190610c53565b90503073ffffffffffffffffffffffffffffffffffffffff821603610637576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff161561068957506105b6565b61069281610a3c565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f7e0058dd0cbc0a8b7beaa013a4825655d8e9e81a5e2cc6582818deded0a41b99905f90a2506001016105b6565b5f80357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff909116151514610777576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff166107cc575050565b73ffffffffffffffffffffffffffffffffffffffff82165f90815260208290526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690556002820154905b818110156104a1578373ffffffffffffffffffffffffffffffffffffffff1683600201828154811061085157610851610e49565b5f9182526020909120015473ffffffffffffffffffffffffffffffffffffffff16036109845760028301610886600184610e76565b8154811061089657610896610e49565b5f9182526020909120015460028401805473ffffffffffffffffffffffffffffffffffffffff90921691839081106108d0576108d0610e49565b905f5260205f20015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260020180548061092857610928610eae565b5f8281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690550190556104a1565b60010161081d565b60017f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e5b7fffffffff00000000000000000000000000000000000000000000000000000000929092165f9081526001909201602052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b5f7f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e6109b0565b610a4581610bb6565b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1615610a98575050565b73ffffffffffffffffffffffffffffffffffffffff9091165f81815260208381526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556002909401805494850181558252902090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b60607f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e600201805480602002602001604051908101604052809291908181526020018280548015610bac57602002820191905f5260205f20905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610b81575b5050505050905090565b73ffffffffffffffffffffffffffffffffffffffff8116610c03576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b5f03610777576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60208284031215610c63575f5ffd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610c86575f5ffd5b9392505050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081168114610cbc575f5ffd5b919050565b5f60208284031215610cd1575f5ffd5b610c8682610c8d565b5f5f83601f840112610cea575f5ffd5b50813567ffffffffffffffff811115610d01575f5ffd5b6020830191508360208260051b8501011115610d1b575f5ffd5b9250929050565b80358015158114610cbc575f5ffd5b5f5f5f60408486031215610d43575f5ffd5b833567ffffffffffffffff811115610d59575f5ffd5b610d6586828701610cda565b9094509250610d78905060208501610d22565b90509250925092565b5f5f60208385031215610d92575f5ffd5b823567ffffffffffffffff811115610da8575f5ffd5b610db485828601610cda565b90969095509350505050565b5f5f60408385031215610dd1575f5ffd5b610dda83610c8d565b9150610de860208401610d22565b90509250929050565b602080825282518282018190525f918401906040840190835b81811015610e3e57835173ffffffffffffffffffffffffffffffffffffffff16835260209384019390920191600101610e0a565b509095945050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b81810381811115610220577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603160045260245ffdfea2646970667358221220a4ef00fbed9f33ee97cccfb1f93b4101069ee0284efbfc17f7b7e7b7bd76bcc764736f6c634300081d0033";
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
