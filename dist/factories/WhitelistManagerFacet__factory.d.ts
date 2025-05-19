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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506114088061001c5f395ff3fe608060405234801561000f575f5ffd5b50600436106100b9575f3560e01c80636d02802711610072578063c3a6a96b11610058578063c3a6a96b1461015b578063e43252d71461016e578063e5e3770814610181575f5ffd5b80636d028027146101335780638ab1d68114610148575f5ffd5b80632d2506a9116100a25780632d2506a9146100fa5780632db6fa361461010d57806344e2b18c14610120575f5ffd5b8063045fb888146100bd57806313f44d10146100d2575b5f5ffd5b6100d06100cb366004611139565b610196565b005b6100e56100e0366004611178565b61028d565b60405190151581526020015b60405180910390f35b6100e56101083660046111e6565b6102db565b6100d061011b366004611139565b610333565b6100d061012e36600461120e565b6104a4565b61013b61059c565b6040516100f1919061125e565b6100d0610156366004611178565b6105ab565b6100d06101693660046112b6565b61063d565b6100d061017c366004611178565b6106f4565b610189610786565b6040516100f191906112e7565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146101dc576101dc610790565b805f5b81811015610287576102168484838181106101fc576101fc611340565b90506020020160208101906102119190611178565b61082f565b83838281811061022857610228611340565b905060200201602081019061023d9190611178565b73ffffffffffffffffffffffffffffffffffffffff167f24a12366c02e13fe4a9e03d86a8952e85bb74a456c16e4a18b6d8295700b74bb60405160405180910390a26001016101df565b50505050565b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea68602052604081205460ff165b92915050565b7fffffffff0000000000000000000000000000000000000000000000000000000081165f9081527f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea69602052604081205460ff166102d5565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461037957610379610790565b805f5b81811015610287575f84848381811061039757610397611340565b90506020020160208101906103ac9190611178565b90503073ffffffffffffffffffffffffffffffffffffffff8216036103fd576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea68602052604090205460ff1615610452575060010161037c565b61045b81610a5c565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f4f783c179409b4127238bc9c990bc99b9a651666a0d20b51d6c42849eb88466d905f90a25060010161037c565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146104ea576104ea610790565b815f5b81811015610595575f85858381811061050857610508611340565b905060200201602081019061051d91906111e6565b905083156105335761052e81610b58565b61053c565b61053c81610c85565b604051841515907fffffffff000000000000000000000000000000000000000000000000000000008316907f9167f6a23d52a4522e9211205d62ce63f02d928227ae0fe00326f51e152a3c45905f90a3506001016104ed565b5050505050565b60606105a6610f0d565b905090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146105f1576105f1610790565b6105fa8161082f565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f24a12366c02e13fe4a9e03d86a8952e85bb74a456c16e4a18b6d8295700b74bb905f90a250565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461068357610683610790565b80156106975761069282610b58565b6106a0565b6106a082610c85565b604051811515907fffffffff000000000000000000000000000000000000000000000000000000008416907f9167f6a23d52a4522e9211205d62ce63f02d928227ae0fe00326f51e152a3c45905f90a35050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461073a5761073a610790565b61074381610a5c565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f4f783c179409b4127238bc9c990bc99b9a651666a0d20b51d6c42849eb88466d905f90a250565b60606105a6610f9c565b5f80357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff90911615151461082c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea68602081905260409091205460ff16610881575050565b73ffffffffffffffffffffffffffffffffffffffff82165f908152600282016020526040812054908190036108b557505050565b5f6108c160018361136d565b60048401549091505f906108d79060019061136d565b9050808214610994575f8460040182815481106108f6576108f6611340565b5f9182526020909120015460048601805473ffffffffffffffffffffffffffffffffffffffff909216925082918590811061093357610933611340565b5f91825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff94851617905592909116815260028601909152604090208390555b836004018054806109a7576109a76113a5565b5f828152602080822083017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590920190925573ffffffffffffffffffffffffffffffffffffffff969096168152600285018652604080822082905594909552505050902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b610a6581611054565b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea68602081905260409091205460ff1615610ab8575050565b73ffffffffffffffffffffffffffffffffffffffff9091165f8181526020838152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155600486018054918201815580855283852090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000168617905554938352600290940190529190912055565b7fffffffff0000000000000000000000000000000000000000000000000000000081165f9081527f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea6960205260409020547f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea689060ff1615610bd6575050565b7fffffffff0000000000000000000000000000000000000000000000000000000082165f81815260018381016020908152604080842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168417905560058601805493840181558085528285206008850401805463ffffffff60079096166004026101000a958602191660e09990991c949094029790971790925594549282526003909301909352912055565b7fffffffff0000000000000000000000000000000000000000000000000000000081165f9081527f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea6960205260409020547f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea689060ff16610d02575050565b7fffffffff0000000000000000000000000000000000000000000000000000000082165f90815260038201602052604081205490819003610d4257505050565b5f610d4e60018361136d565b60058401549091505f90610d649060019061136d565b9050808214610e42575f846005018281548110610d8357610d83611340565b905f5260205f2090600891828204019190066004029054906101000a900460e01b905080856005018481548110610dbc57610dbc611340565b905f5260205f2090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555083856003015f837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019081526020015f2081905550505b83600501805480610e5557610e556113a5565b5f828152602080822060087fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90940193840401805463ffffffff600460078716026101000a0219169055919092557fffffffff0000000000000000000000000000000000000000000000000000000090961681526003850186526040808220829055600195909501909552505050902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60607f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea68600401805480602002602001604051908101604052809291908181526020018280548015610f9257602002820191905f5260205f20905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610f67575b5050505050905090565b60607f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea68600501805480602002602001604051908101604052809291908181526020018280548015610f9257602002820191905f5260205f20905f905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019060040190602082600301049283019260010382029150808411610ff85790505050505050905090565b73ffffffffffffffffffffffffffffffffffffffff81166110a1576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b5f0361082c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5f83601f840112611101575f5ffd5b50813567ffffffffffffffff811115611118575f5ffd5b6020830191508360208260051b8501011115611132575f5ffd5b9250929050565b5f5f6020838503121561114a575f5ffd5b823567ffffffffffffffff811115611160575f5ffd5b61116c858286016110f1565b90969095509350505050565b5f60208284031215611188575f5ffd5b813573ffffffffffffffffffffffffffffffffffffffff811681146111ab575f5ffd5b9392505050565b80357fffffffff00000000000000000000000000000000000000000000000000000000811681146111e1575f5ffd5b919050565b5f602082840312156111f6575f5ffd5b6111ab826111b2565b803580151581146111e1575f5ffd5b5f5f5f60408486031215611220575f5ffd5b833567ffffffffffffffff811115611236575f5ffd5b611242868287016110f1565b90945092506112559050602085016111ff565b90509250925092565b602080825282518282018190525f918401906040840190835b818110156112ab57835173ffffffffffffffffffffffffffffffffffffffff16835260209384019390920191600101611277565b509095945050505050565b5f5f604083850312156112c7575f5ffd5b6112d0836111b2565b91506112de602084016111ff565b90509250929050565b602080825282518282018190525f918401906040840190835b818110156112ab5783517fffffffff0000000000000000000000000000000000000000000000000000000016835260209384019390920191600101611300565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b818103818111156102d5577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603160045260245ffdfea2646970667358221220c832c6aa9f0e06b7533f95774dfa54d066f00cfd9d308ad53accda872fa525b864736f6c634300081d0033";
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
        readonly name: "getApprovedFunctionSignatures";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "signatures";
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
    static createInterface(): WhitelistManagerFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): WhitelistManagerFacet;
}
export {};
