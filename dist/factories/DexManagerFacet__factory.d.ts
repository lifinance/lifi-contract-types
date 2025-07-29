import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { DexManagerFacet, DexManagerFacetInterface } from "../DexManagerFacet";
type DexManagerFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50610f148061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610085575f3560e01c80639afc19c7116100585780639afc19c7146100ec578063c3a6a96b146100ff578063fbb2d38114610112578063fcd8e49e14610127575f5ffd5b8063124f1ead146100895780632d2506a91461009e57806344e2b18c146100c6578063536db266146100d9575b5f5ffd5b61009c610097366004610c56565b61013a565b005b6100b16100ac366004610cc4565b6101cc565b60405190151581526020015b60405180910390f35b61009c6100d4366004610d34565b610226565b61009c6100e7366004610c56565b61031e565b61009c6100fa366004610d84565b6103b0565b61009c61010d366004610dc3565b6104a7565b61011a61055e565b6040516100bd9190610df4565b61009c610135366004610d84565b61056d565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff163314610180576101806106de565b6101898161077d565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f78e0a2ffcdfbbb49ba5c8050d8630fab2176d825e8360809db049cd98f462a78905f90a250565b7fffffffff0000000000000000000000000000000000000000000000000000000081165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604081205460ff165b92915050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461026c5761026c6106de565b815f5b81811015610317575f85858381811061028a5761028a610e4c565b905060200201602081019061029f9190610cc4565b905083156102b5576102b08161098f565b6102be565b6102be81610a18565b604051841515907fffffffff000000000000000000000000000000000000000000000000000000008316907f9167f6a23d52a4522e9211205d62ce63f02d928227ae0fe00326f51e152a3c45905f90a35060010161026f565b5050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff163314610364576103646106de565b61036d81610a3f565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f7e0058dd0cbc0a8b7beaa013a4825655d8e9e81a5e2cc6582818deded0a41b99905f90a250565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146103f6576103f66106de565b805f5b818110156104a15761043084848381811061041657610416610e4c565b905060200201602081019061042b9190610c56565b61077d565b83838281811061044257610442610e4c565b90506020020160208101906104579190610c56565b73ffffffffffffffffffffffffffffffffffffffff167f78e0a2ffcdfbbb49ba5c8050d8630fab2176d825e8360809db049cd98f462a7860405160405180910390a26001016103f9565b50505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146104ed576104ed6106de565b8015610501576104fc8261098f565b61050a565b61050a82610a18565b604051811515907fffffffff000000000000000000000000000000000000000000000000000000008416907f9167f6a23d52a4522e9211205d62ce63f02d928227ae0fe00326f51e152a3c45905f90a35050565b6060610568610b2a565b905090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146105b3576105b36106de565b805f5b818110156104a1575f8484838181106105d1576105d1610e4c565b90506020020160208101906105e69190610c56565b90503073ffffffffffffffffffffffffffffffffffffffff821603610637576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff161561068c57506001016105b6565b61069581610a3f565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f7e0058dd0cbc0a8b7beaa013a4825655d8e9e81a5e2cc6582818deded0a41b99905f90a2506001016105b6565b5f80357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff90911615151461077a576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff166107cf575050565b73ffffffffffffffffffffffffffffffffffffffff82165f90815260208290526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690556002820154905b818110156104a1578373ffffffffffffffffffffffffffffffffffffffff1683600201828154811061085457610854610e4c565b5f9182526020909120015473ffffffffffffffffffffffffffffffffffffffff16036109875760028301610889600184610e79565b8154811061089957610899610e4c565b5f9182526020909120015460028401805473ffffffffffffffffffffffffffffffffffffffff90921691839081106108d3576108d3610e4c565b905f5260205f20015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260020180548061092b5761092b610eb1565b5f8281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690550190556104a1565b600101610820565b60017f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e5b7fffffffff00000000000000000000000000000000000000000000000000000000929092165f9081526001909201602052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b5f7f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e6109b3565b610a4881610bb9565b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1615610a9b575050565b73ffffffffffffffffffffffffffffffffffffffff9091165f81815260208381526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556002909401805494850181558252902090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b60607f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e600201805480602002602001604051908101604052809291908181526020018280548015610baf57602002820191905f5260205f20905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610b84575b5050505050905090565b73ffffffffffffffffffffffffffffffffffffffff8116610c06576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b5f0361077a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60208284031215610c66575f5ffd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610c89575f5ffd5b9392505050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081168114610cbf575f5ffd5b919050565b5f60208284031215610cd4575f5ffd5b610c8982610c90565b5f5f83601f840112610ced575f5ffd5b50813567ffffffffffffffff811115610d04575f5ffd5b6020830191508360208260051b8501011115610d1e575f5ffd5b9250929050565b80358015158114610cbf575f5ffd5b5f5f5f60408486031215610d46575f5ffd5b833567ffffffffffffffff811115610d5c575f5ffd5b610d6886828701610cdd565b9094509250610d7b905060208501610d25565b90509250925092565b5f5f60208385031215610d95575f5ffd5b823567ffffffffffffffff811115610dab575f5ffd5b610db785828601610cdd565b90969095509350505050565b5f5f60408385031215610dd4575f5ffd5b610ddd83610c90565b9150610deb60208401610d25565b90509250929050565b602080825282518282018190525f918401906040840190835b81811015610e4157835173ffffffffffffffffffffffffffffffffffffffff16835260209384019390920191600101610e0d565b509095945050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b81810381811115610220577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603160045260245ffdfea2646970667358221220d484a6c4376e8a88d0ee6bc5e4a2a785bc684b5e1d3b427a8d1e8617f5a353c864736f6c634300081d0033";
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
