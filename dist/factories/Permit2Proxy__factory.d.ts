import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Permit2Proxy, Permit2ProxyInterface } from "../Permit2Proxy";
declare type Permit2ProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Permit2Proxy__factory extends ContractFactory {
    constructor(...args: Permit2ProxyConstructorParams);
    deploy(permit2Address: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Permit2Proxy>;
    getDeployTransaction(permit2Address: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Permit2Proxy;
    connect(signer: Signer): Permit2Proxy__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162001cb038038062001cb0833981016040819052620000349162000086565b600080546001600160a01b039283166001600160a01b03199182161790915560028054939092169216919091179055620000be565b80516001600160a01b03811681146200008157600080fd5b919050565b600080604083850312156200009a57600080fd5b620000a58362000069565b9150620000b56020840162000069565b90509250929050565b611be280620000ce6000396000f3fe6080604052600436106100b15760003560e01c80637200b8291161006957806390c843701161004e57806390c84370146101d9578063e30c3978146101ec578063f2fde38b1461021957600080fd5b80637200b829146101975780638da5cb5b146101ac57600080fd5b806323452b9c1161009a57806323452b9c1461012257806333320de31461013757806356ee2b501461015757600080fd5b806312261ee7146100b65780631ad779271461010d575b600080fd5b3480156100c257600080fd5b506002546100e39073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61012061011b36600461133e565b610239565b005b34801561012e57600080fd5b50610120610445565b34801561014357600080fd5b506101206101523660046114d1565b61050f565b34801561016357600080fd5b5061018761017236600461153d565b60036020526000908152604090205460ff1681565b6040519015158152602001610104565b3480156101a357600080fd5b5061012061065c565b3480156101b857600080fd5b506000546100e39073ffffffffffffffffffffffffffffffffffffffff1681565b6101206101e7366004611561565b610742565b3480156101f857600080fd5b506001546100e39073ffffffffffffffffffffffffffffffffffffffff1681565b34801561022557600080fd5b5061012061023436600461153d565b61086f565b60008480602001905181019061024f919061164a565b905060008667ffffffffffffffff81111561026c5761026c6110df565b6040519080825280602002602001820160405280156102b157816020015b604080518082019091526000808252602082015281526020019060019003908161028a5790505b50905060005b8781101561036f5760405180604001604052803073ffffffffffffffffffffffffffffffffffffffff1681526020018a8a848181106102f8576102f8611718565b9050602002013581525082828151811061031457610314611718565b60200260200101819052506103678a60000151828151811061033857610338611718565b60200260200101516000015184602001518b8b8581811061035b5761035b611718565b905060200201356109cd565b6001016102b7565b50600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fe8ec1a78a83888a805190602001206040518060c0016040528060898152602001611b24608991398a8a6040518863ffffffff1660e01b81526004016103f6979695949392919061183f565b600060405180830381600087803b15801561041057600080fd5b505af1158015610424573d6000803e3d6000fd5b5050505061043a82602001518360400151610b15565b505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610496576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166104e5576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610560576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b838110156106185782828281811061057d5761057d611718565b90506020020160208101906105929190611948565b600360008787858181106105a8576105a8611718565b90506020020160208101906105bd919061153d565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055600101610563565b507faa9b4ef90f4ce69eff58dfa82ee849c9d5063df771c1320a024b5a9fb67225438484848460405161064e9493929190611965565b60405180910390a150505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146106ae576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b600084806020019051810190610758919061164a565b9050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663137c29fe886040518060400160405280856000015173ffffffffffffffffffffffffffffffffffffffff1681526020018a8152508789805190602001206040518060c0016040528060898152602001611b246089913989896040518863ffffffff1660e01b815260040161080e9796959493929190611a02565b600060405180830381600087803b15801561082857600080fd5b505af115801561083c573d6000803e3d6000fd5b505088515160208401516108549350909150886109cd565b61086681602001518260400151610b15565b50505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108c0576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661090d576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361095c576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff83166109ed57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610a3a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610aaf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad39190611abe565b1015610b1057610ae583836000610c2c565b610b1083837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610c2c565b505050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526003602052604090205460ff16610b74576040517fb21c96b900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808373ffffffffffffffffffffffffffffffffffffffff163484604051610b9d9190611ad7565b60006040518083038185875af1925050503d8060008114610bda576040519150601f19603f3d011682016040523d82523d6000602084013e610bdf565b606091505b509150915081610c2657806040517f0e971f12000000000000000000000000000000000000000000000000000000008152600401610c1d9190611af3565b60405180910390fd5b50505050565b801580610ccc57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610ca6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cca9190611abe565b155b610d58576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610c1d565b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610b1092869291600091610e23918516908490610ed0565b9050805160001480610e44575080806020019051810190610e449190611b06565b610b10576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610c1d565b6060610edf8484600085610ee7565b949350505050565b606082471015610f79576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610c1d565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610fa29190611ad7565b60006040518083038185875af1925050503d8060008114610fdf576040519150601f19603f3d011682016040523d82523d6000602084013e610fe4565b606091505b5091509150610ff587838387611000565b979650505050505050565b6060831561109657825160000361108f5773ffffffffffffffffffffffffffffffffffffffff85163b61108f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610c1d565b5081610edf565b610edf83838151156110ab5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1d9190611af3565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611131576111316110df565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561117e5761117e6110df565b604052919050565b73ffffffffffffffffffffffffffffffffffffffff811681146111a857600080fd5b50565b80356111b681611186565b919050565b6000604082840312156111cd57600080fd5b6040516040810181811067ffffffffffffffff821117156111f0576111f06110df565b604052905080823561120181611186565b8152602092830135920191909152919050565b60008083601f84011261122657600080fd5b50813567ffffffffffffffff81111561123e57600080fd5b6020830191508360208260051b850101111561125957600080fd5b9250929050565b600067ffffffffffffffff82111561127a5761127a6110df565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126112b757600080fd5b81356112ca6112c582611260565b611137565b8181528460208386010111156112df57600080fd5b816020850160208301376000918101602001919091529392505050565b60008083601f84011261130e57600080fd5b50813567ffffffffffffffff81111561132657600080fd5b60208301915083602082850101111561125957600080fd5b600080600080600080600060a0888a03121561135957600080fd5b67ffffffffffffffff808935111561137057600080fd5b606089358a018b03121561138357600080fd5b61138b61110e565b818a358b0135111561139c57600080fd5b89358a01803501601f81018c136113b257600080fd5b82813511156113c3576113c36110df565b6113d36020823560051b01611137565b81358082526020808301929160061b8401018e10156113f157600080fd5b602083015b6020843560061b850101811015611421576114118f826111bb565b83526020909201916040016113f6565b5080845250505060208a358b010135602082015260408a358b0101356040820152809850508060208a0135111561145757600080fd5b6114678a60208b01358b01611214565b9097509550604089013581101561147d57600080fd5b61148d8a60408b01358b016112a6565b945061149b60608a016111ab565b93508060808a013511156114ae57600080fd5b506114bf8960808a01358a016112fc565b979a9699509497509295919491925050565b600080600080604085870312156114e757600080fd5b843567ffffffffffffffff808211156114ff57600080fd5b61150b88838901611214565b9096509450602087013591508082111561152457600080fd5b5061153187828801611214565b95989497509550505050565b60006020828403121561154f57600080fd5b813561155a81611186565b9392505050565b60008060008060008086880361010081121561157c57600080fd5b608081121561158a57600080fd5b5061159361110e565b61159d89896111bb565b8152604088810135602083015260608901359082015295506080870135945060a087013567ffffffffffffffff808211156115d757600080fd5b6115e38a838b016112a6565b95506115f160c08a016111ab565b945060e089013591508082111561160757600080fd5b5061161489828a016112fc565b979a9699509497509295939492505050565b60005b83811015611641578181015183820152602001611629565b50506000910152565b6000602080838503121561165d57600080fd5b825167ffffffffffffffff8082111561167557600080fd5b908401906060828703121561168957600080fd5b61169161110e565b825161169c81611186565b8152828401516116ab81611186565b818501526040830151828111156116c157600080fd5b80840193505086601f8401126116d657600080fd5b825191506116e66112c583611260565b82815287858486010111156116fa57600080fd5b61170983868301878701611626565b60408201529695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081518084526020808501945080840160005b838110156117a15761178e878351805173ffffffffffffffffffffffffffffffffffffffff168252602090810151910152565b604096909601959082019060010161175b565b509495945050505050565b600081518084526117c4816020860160208601611626565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60c08152600061012082018951606060c08501528181518084526101408601915060209350838301925060005b818110156118b25761189f838551805173ffffffffffffffffffffffffffffffffffffffff168252602090810151910152565b928401926040929092019160010161186c565b5050828c015160e086015260408c0151610100860152848103838601526118d9818c611747565b925050506118ff604084018973ffffffffffffffffffffffffffffffffffffffff169052565b866060840152828103608084015261191781876117ac565b905082810360a084015261192c8185876117f6565b9a9950505050505050505050565b80151581146111a857600080fd5b60006020828403121561195a57600080fd5b813561155a8161193a565b6040808252810184905260008560608301825b878110156119b557823561198b81611186565b73ffffffffffffffffffffffffffffffffffffffff16825260209283019290910190600101611978565b5083810360208581019190915285825291508590820160005b868110156119f55782356119e18161193a565b1515825291830191908301906001016119ce565b5098975050505050505050565b6000610140611a32838b51805173ffffffffffffffffffffffffffffffffffffffff168252602090810151910152565b60208a0151604084015260408a01516060840152611a73608084018a805173ffffffffffffffffffffffffffffffffffffffff168252602090810151910152565b73ffffffffffffffffffffffffffffffffffffffff881660c08401528660e084015280610100840152611aa8818401876117ac565b905082810361012084015261192c8185876117f6565b600060208284031215611ad057600080fd5b5051919050565b60008251611ae9818460208701611626565b9190910192915050565b60208152600061155a60208301846117ac565b600060208284031215611b1857600080fd5b815161155a8161193a56fe5769746e657373207769746e65737329546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e74295769746e657373286164647265737320746f6b656e52656365697665722c61646472657373206469616d6f6e64416464726573732c6279746573206469616d6f6e6443616c6c6461746129a264697066735822122030cd8c7e305f130757c841c9448df4e2d3752b712aba542a0b2067be7f961a2c64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "permit2Address";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "diamondWhitelist";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "gaslessWitnessDiamondCallMultipleTokens";
        readonly inputs: readonly [{
            readonly name: "permit";
            readonly type: "tuple";
            readonly internalType: "struct IPermit2.PermitBatchTransferFrom";
            readonly components: readonly [{
                readonly name: "permitted";
                readonly type: "tuple[]";
                readonly internalType: "struct IPermit2.TokenPermissions[]";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "witnessData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "senderAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "gaslessWitnessDiamondCallSingleToken";
        readonly inputs: readonly [{
            readonly name: "permit";
            readonly type: "tuple";
            readonly internalType: "struct IPermit2.PermitTransferFrom";
            readonly components: readonly [{
                readonly name: "permitted";
                readonly type: "tuple";
                readonly internalType: "struct IPermit2.TokenPermissions";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "witnessData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "senderAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "permit2";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IPermit2";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateWhitelist";
        readonly inputs: readonly [{
            readonly name: "addresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "WhitelistUpdated";
        readonly inputs: readonly [{
            readonly name: "addresses";
            readonly type: "address[]";
            readonly indexed: false;
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "bool[]";
            readonly indexed: false;
            readonly internalType: "bool[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CallToDiamondFailed";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly type: "error";
        readonly name: "DiamondAddressNotWhitelisted";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): Permit2ProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Permit2Proxy;
}
export {};
