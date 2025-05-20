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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506114088061001c5f395ff3fe608060405234801561000f575f5ffd5b50600436106100b9575f3560e01c80636d02802711610072578063bcde4c4511610058578063bcde4c451461015d578063e43252d714610170578063ecd1851714610183575f5ffd5b80636d028027146101355780638ab1d6811461014a575f5ffd5b806314a931f2116100a257806314a931f2146100fa5780632d2506a91461010f5780632db6fa3614610122575f5ffd5b8063045fb888146100bd57806313f44d10146100d2575b5f5ffd5b6100d06100cb366004611139565b610196565b005b6100e56100e0366004611178565b61028d565b60405190151581526020015b60405180910390f35b6101026102db565b6040516100f191906111b2565b6100e561011d36600461124a565b6102ea565b6100d0610130366004611139565b610342565b61013d6104b3565b6040516100f19190611263565b6100d0610158366004611178565b6104bd565b6100d061016b3660046112bf565b61054f565b6100d061017e366004611178565b610606565b6100d06101913660046112f0565b610698565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146101dc576101dc610790565b805f5b81811015610287576102168484838181106101fc576101fc611340565b90506020020160208101906102119190611178565b61082f565b83838281811061022857610228611340565b905060200201602081019061023d9190611178565b73ffffffffffffffffffffffffffffffffffffffff167f24a12366c02e13fe4a9e03d86a8952e85bb74a456c16e4a18b6d8295700b74bb60405160405180910390a26001016101df565b50505050565b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea68602052604081205460ff165b92915050565b60606102e5610a5c565b905090565b7fffffffff0000000000000000000000000000000000000000000000000000000081165f9081527f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea69602052604081205460ff166102d5565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461038857610388610790565b805f5b81811015610287575f8484838181106103a6576103a6611340565b90506020020160208101906103bb9190611178565b90503073ffffffffffffffffffffffffffffffffffffffff82160361040c576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea68602052604090205460ff1615610461575060010161038b565b61046a81610b15565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f4f783c179409b4127238bc9c990bc99b9a651666a0d20b51d6c42849eb88466d905f90a25060010161038b565b60606102e5610c11565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461050357610503610790565b61050c8161082f565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f24a12366c02e13fe4a9e03d86a8952e85bb74a456c16e4a18b6d8295700b74bb905f90a250565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461059557610595610790565b80156105a9576105a482610c9f565b6105b2565b6105b282610dcc565b604051811515907fffffffff000000000000000000000000000000000000000000000000000000008416907fcf13ae361f956ffe6b34a2c8e46f4e87d8671c9352d2a8c3474774d61422cab4905f90a35050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461064c5761064c610790565b61065581610b15565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f4f783c179409b4127238bc9c990bc99b9a651666a0d20b51d6c42849eb88466d905f90a250565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146106de576106de610790565b815f5b81811015610789575f8585838181106106fc576106fc611340565b9050602002016020810190610711919061124a565b905083156107275761072281610c9f565b610730565b61073081610dcc565b604051841515907fffffffff000000000000000000000000000000000000000000000000000000008316907fcf13ae361f956ffe6b34a2c8e46f4e87d8671c9352d2a8c3474774d61422cab4905f90a3506001016106e1565b5050505050565b5f80357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff90911615151461082c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea68602081905260409091205460ff16610881575050565b73ffffffffffffffffffffffffffffffffffffffff82165f908152600282016020526040812054908190036108b557505050565b5f6108c160018361136d565b60048401549091505f906108d79060019061136d565b9050808214610994575f8460040182815481106108f6576108f6611340565b5f9182526020909120015460048601805473ffffffffffffffffffffffffffffffffffffffff909216925082918590811061093357610933611340565b5f91825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff94851617905592909116815260028601909152604090208390555b836004018054806109a7576109a76113a5565b5f828152602080822083017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590920190925573ffffffffffffffffffffffffffffffffffffffff969096168152600285018652604080822082905594909552505050902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60607f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea68600501805480602002602001604051908101604052809291908181526020018280548015610b0b57602002820191905f5260205f20905f905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019060040190602082600301049283019260010382029150808411610ab85790505b5050505050905090565b610b1e81611054565b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea68602081905260409091205460ff1615610b71575050565b73ffffffffffffffffffffffffffffffffffffffff9091165f8181526020838152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155600486018054918201815580855283852090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000168617905554938352600290940190529190912055565b60607f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea68600401805480602002602001604051908101604052809291908181526020018280548015610b0b57602002820191905f5260205f20905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610c6b575050505050905090565b7fffffffff0000000000000000000000000000000000000000000000000000000081165f9081527f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea6960205260409020547f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea689060ff1615610d1d575050565b7fffffffff0000000000000000000000000000000000000000000000000000000082165f81815260018381016020908152604080842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168417905560058601805493840181558085528285206008850401805463ffffffff60079096166004026101000a958602191660e09990991c949094029790971790925594549282526003909301909352912055565b7fffffffff0000000000000000000000000000000000000000000000000000000081165f9081527f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea6960205260409020547f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea689060ff16610e49575050565b7fffffffff0000000000000000000000000000000000000000000000000000000082165f90815260038201602052604081205490819003610e8957505050565b5f610e9560018361136d565b60058401549091505f90610eab9060019061136d565b9050808214610f89575f846005018281548110610eca57610eca611340565b905f5260205f2090600891828204019190066004029054906101000a900460e01b905080856005018481548110610f0357610f03611340565b905f5260205f2090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555083856003015f837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019081526020015f2081905550505b83600501805480610f9c57610f9c6113a5565b5f828152602080822060087fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90940193840401805463ffffffff600460078716026101000a0219169055919092557fffffffff0000000000000000000000000000000000000000000000000000000090961681526003850186526040808220829055600195909501909552505050902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b73ffffffffffffffffffffffffffffffffffffffff81166110a1576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b5f0361082c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5f83601f840112611101575f5ffd5b50813567ffffffffffffffff811115611118575f5ffd5b6020830191508360208260051b8501011115611132575f5ffd5b9250929050565b5f5f6020838503121561114a575f5ffd5b823567ffffffffffffffff811115611160575f5ffd5b61116c858286016110f1565b90969095509350505050565b5f60208284031215611188575f5ffd5b813573ffffffffffffffffffffffffffffffffffffffff811681146111ab575f5ffd5b9392505050565b602080825282518282018190525f918401906040840190835b8181101561120b5783517fffffffff00000000000000000000000000000000000000000000000000000000168352602093840193909201916001016111cb565b509095945050505050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081168114611245575f5ffd5b919050565b5f6020828403121561125a575f5ffd5b6111ab82611216565b602080825282518282018190525f918401906040840190835b8181101561120b57835173ffffffffffffffffffffffffffffffffffffffff1683526020938401939092019160010161127c565b80358015158114611245575f5ffd5b5f5f604083850312156112d0575f5ffd5b6112d983611216565b91506112e7602084016112b0565b90509250929050565b5f5f5f60408486031215611302575f5ffd5b833567ffffffffffffffff811115611318575f5ffd5b611324868287016110f1565b90945092506113379050602085016112b0565b90509250925092565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b818103818111156102d5577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603160045260245ffdfea2646970667358221220a08014bd4dfb74bcf7d5730d0cbad0f41ffbc073f2642a87bac13cd20e75c88b64736f6c634300081d0033";
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
