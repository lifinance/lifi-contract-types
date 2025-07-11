import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { WhitelistManagerFacet, WhitelistManagerFacetInterface } from "../WhitelistManagerFacet";
declare type WhitelistManagerFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class WhitelistManagerFacet__factory extends ContractFactory {
    constructor(...args: WhitelistManagerFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<WhitelistManagerFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): WhitelistManagerFacet;
    connect(signer: Signer): WhitelistManagerFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506113868061001c5f395ff3fe608060405234801561000f575f5ffd5b50600436106100b9575f3560e01c80636d02802711610072578063bcde4c4511610058578063bcde4c451461015d578063e43252d714610170578063ecd1851714610183575f5ffd5b80636d028027146101355780638ab1d6811461014a575f5ffd5b806314a931f2116100a257806314a931f2146100fa5780632d2506a91461010f5780632db6fa3614610122575f5ffd5b8063045fb888146100bd57806313f44d10146100d2575b5f5ffd5b6100d06100cb3660046110b7565b610196565b005b6100e56100e03660046110f6565b610224565b60405190151581526020015b60405180910390f35b610102610272565b6040516100f19190611130565b6100e561011d3660046111c8565b610281565b6100d06101303660046110b7565b6102d9565b61013d610361565b6040516100f191906111e1565b6100d06101583660046110f6565b61036b565b6100d061016b36600461123d565b6103bd565b6100d061017e3660046110f6565b610411565b6100d061019136600461126e565b610460565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146101dc576101dc6104f0565b805f5b8181101561021e576102168484838181106101fc576101fc6112be565b905060200201602081019061021191906110f6565b61058c565b6001016101df565b50505050565b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604081205460ff165b92915050565b606061027c610626565b905090565b7fffffffff0000000000000000000000000000000000000000000000000000000081165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604081205460ff1661026c565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461031f5761031f6104f0565b805f5b8181101561021e5761035984848381811061033f5761033f6112be565b905060200201602081019061035491906110f6565b6106df565b600101610322565b606061027c6107c9565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146103b1576103b16104f0565b6103ba8161058c565b50565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff163314610403576104036104f0565b61040d8282610857565b5050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff163314610457576104576104f0565b6103ba816106df565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146104a6576104a66104f0565b815f5b818110156104e9576104e18585838181106104c6576104c66112be565b90506020020160208101906104db91906111c8565b84610857565b6001016104a9565b5050505050565b5f80357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff9091161515146103ba576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff166105da5750565b6105e381610928565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f24a12366c02e13fe4a9e03d86a8952e85bb74a456c16e4a18b6d8295700b74bb905f90a250565b60607f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e6005018054806020026020016040519081016040528092919081815260200182805480156106d557602002820191905f5260205f20905f905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116106825790505b5050505050905090565b3073ffffffffffffffffffffffffffffffffffffffff82160361072e576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff161561077d5750565b61078681610b55565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f4f783c179409b4127238bc9c990bc99b9a651666a0d20b51d6c42849eb88466d905f90a250565b60607f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e6002018054806020026020016040519081016040528092919081815260200182805480156106d557602002820191905f5260205f20905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610823575050505050905090565b7fffffffff0000000000000000000000000000000000000000000000000000000082165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff16811515811515146109235781156108c9576108c483610cd0565b6108d2565b6108d283610dfd565b604051821515907fffffffff000000000000000000000000000000000000000000000000000000008516907fcf13ae361f956ffe6b34a2c8e46f4e87d8671c9352d2a8c3474774d61422cab4905f90a35b505050565b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1661097a575050565b73ffffffffffffffffffffffffffffffffffffffff82165f908152600382016020526040812054908190036109ae57505050565b5f6109ba6001836112eb565b60028401549091505f906109d0906001906112eb565b9050808214610a8d575f8460020182815481106109ef576109ef6112be565b5f9182526020909120015460028601805473ffffffffffffffffffffffffffffffffffffffff9092169250829185908110610a2c57610a2c6112be565b5f91825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff94851617905592909116815260038601909152604090208390555b83600201805480610aa057610aa0611323565b5f828152602080822083017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590920190925573ffffffffffffffffffffffffffffffffffffffff969096168152600385018652604080822082905594909552505050902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b73ffffffffffffffffffffffffffffffffffffffff8116610ba2576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6017813b11610bdd576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1615610c30575050565b73ffffffffffffffffffffffffffffffffffffffff9091165f8181526020838152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155600286018054918201815580855283852090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000168617905554938352600390940190529190912055565b7fffffffff0000000000000000000000000000000000000000000000000000000081165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f60205260409020547f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e9060ff1615610d4e575050565b7fffffffff0000000000000000000000000000000000000000000000000000000082165f81815260018381016020908152604080842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168417905560058601805493840181558085528285206008850401805460e09990991c6004600790961686026101000a90810263ffffffff90910219909916989098179097559554938352930190925291902055565b7fffffffff0000000000000000000000000000000000000000000000000000000081165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f60205260409020547f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e9060ff16610e7a575050565b7fffffffff0000000000000000000000000000000000000000000000000000000082165f90815260048201602052604081205490819003610eba57505050565b5f610ec66001836112eb565b60058401549091505f90610edc906001906112eb565b9050808214610fa0575f846005018281548110610efb57610efb6112be565b905f5260205f2090600891828204019190066004029054906101000a900460e01b905080856005018481548110610f3457610f346112be565b5f91825260208083206008830401805460e09590951c6004600790941684026101000a90810263ffffffff90910219909516949094179093557fffffffff0000000000000000000000000000000000000000000000000000000090931681529186019052604090208390555b83600501805480610fb357610fb3611323565b5f828152602080822060087fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90940193840401805463ffffffff60046007871681026101000a9190910219909116909155929093557fffffffff0000000000000000000000000000000000000000000000000000000090971687528501815260408087208790556001959095019052505050902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b5f5f83601f84011261107f575f5ffd5b50813567ffffffffffffffff811115611096575f5ffd5b6020830191508360208260051b85010111156110b0575f5ffd5b9250929050565b5f5f602083850312156110c8575f5ffd5b823567ffffffffffffffff8111156110de575f5ffd5b6110ea8582860161106f565b90969095509350505050565b5f60208284031215611106575f5ffd5b813573ffffffffffffffffffffffffffffffffffffffff81168114611129575f5ffd5b9392505050565b602080825282518282018190525f918401906040840190835b818110156111895783517fffffffff0000000000000000000000000000000000000000000000000000000016835260209384019390920191600101611149565b509095945050505050565b80357fffffffff00000000000000000000000000000000000000000000000000000000811681146111c3575f5ffd5b919050565b5f602082840312156111d8575f5ffd5b61112982611194565b602080825282518282018190525f918401906040840190835b8181101561118957835173ffffffffffffffffffffffffffffffffffffffff168352602093840193909201916001016111fa565b803580151581146111c3575f5ffd5b5f5f6040838503121561124e575f5ffd5b61125783611194565b91506112656020840161122e565b90509250929050565b5f5f5f60408486031215611280575f5ffd5b833567ffffffffffffffff811115611296575f5ffd5b6112a28682870161106f565b90945092506112b590506020850161122e565b90509250925092565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b8181038181111561026c577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603160045260245ffdfea2646970667358221220e7e40993602d93817f8cbc5362f433f36299492a7f16176512663c97399f6a9f64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "addToWhitelist";
        readonly inputs: readonly [{
            readonly name: "_contractAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "batchAddToWhitelist";
        readonly inputs: readonly [{
            readonly name: "_addresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "batchRemoveFromWhitelist";
        readonly inputs: readonly [{
            readonly name: "_addresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "batchSetFunctionApprovalBySelector";
        readonly inputs: readonly [{
            readonly name: "_selectors";
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
        readonly name: "getApprovedFunctionSelectors";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "selectors";
            readonly type: "bytes4[]";
            readonly internalType: "bytes4[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getWhitelistedAddresses";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "addresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isAddressWhitelisted";
        readonly inputs: readonly [{
            readonly name: "_address";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "approved";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isFunctionApproved";
        readonly inputs: readonly [{
            readonly name: "_selector";
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
        readonly name: "removeFromWhitelist";
        readonly inputs: readonly [{
            readonly name: "_address";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setFunctionApprovalBySelector";
        readonly inputs: readonly [{
            readonly name: "_selector";
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
        readonly name: "AddressRemoved";
        readonly inputs: readonly [{
            readonly name: "removedAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "AddressWhitelisted";
        readonly inputs: readonly [{
            readonly name: "whitelistedAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "FunctionSelectorApprovalChanged";
        readonly inputs: readonly [{
            readonly name: "functionSelector";
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
    static createInterface(): WhitelistManagerFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): WhitelistManagerFacet;
}
export {};
