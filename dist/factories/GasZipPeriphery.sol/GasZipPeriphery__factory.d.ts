import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { GasZipPeriphery, GasZipPeripheryInterface } from "../../GasZipPeriphery.sol/GasZipPeriphery";
declare type GasZipPeripheryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasZipPeriphery__factory extends ContractFactory {
    constructor(...args: GasZipPeripheryConstructorParams);
    deploy(_gasZipRouter: PromiseOrValue<string>, _liFiDiamond: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasZipPeriphery>;
    getDeployTransaction(_gasZipRouter: PromiseOrValue<string>, _liFiDiamond: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasZipPeriphery;
    connect(signer: Signer): GasZipPeriphery__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b506040516116bb3803806116bb83398101604081905261002e91610073565b5f80546001600160a01b0319166001600160a01b039283161790559182166080521660a0526100b3565b80516001600160a01b038116811461006e575f5ffd5b919050565b5f5f5f60608486031215610085575f5ffd5b61008e84610058565b925061009c60208501610058565b91506100aa60408501610058565b90509250925092565b60805160a0516115da6100e15f395f818160f8015261063401525f81816101550152610a6901526115da5ff3fe6080604052600436106100bb575f3560e01c80637200b82911610071578063c4af5a741161004c578063c4af5a7414610216578063e30c397814610229578063f2fde38b14610255575f5ffd5b80637200b829146101b85780638b71ae6c146101cc5780638da5cb5b146101eb575f5ffd5b8063194c869f116100a1578063194c869f1461014457806323452b9c1461017757806346fd98e21461018b575f5ffd5b806301e33667146100c6578063020a1f7d146100e7575f5ffd5b366100c257005b5f5ffd5b3480156100d1575f5ffd5b506100e56100e036600461126a565b610274565b005b3480156100f2575f5ffd5b5061011a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561014f575f5ffd5b5061011a7f000000000000000000000000000000000000000000000000000000000000000081565b348015610182575f5ffd5b506100e56103f9565b348015610196575f5ffd5b506101aa6101a53660046112a8565b6104c2565b60405190815260200161013b565b3480156101c3575f5ffd5b506100e561054e565b3480156101d7575f5ffd5b506100e56101e636600461132f565b610632565b3480156101f6575f5ffd5b505f5461011a9073ffffffffffffffffffffffffffffffffffffffff1681565b6100e561022436600461137f565b6109f8565b348015610234575f5ffd5b5060015461011a9073ffffffffffffffffffffffffffffffffffffffff1681565b348015610260575f5ffd5b506100e561026f3660046113a8565b610bba565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146102c4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831661037b575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610335576040519150601f19603f3d011682016040523d82523d5f602084013e61033a565b606091505b5050905080610375576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061039c565b61039c73ffffffffffffffffffffffffffffffffffffffff84168383610d16565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610449576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610498576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f8160108111156104ff576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b818110156105465784848281811061051b5761051b6113ca565b905060200201602081019061053091906113f7565b60ff16601084901b179250806001019050610501565b505092915050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146105a0576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff811663070d39d961067c60208601866113a8565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152602401602060405180830381865afa1580156106e3573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107079190611417565b15806107c8575073ffffffffffffffffffffffffffffffffffffffff8116632d2506a961073760a0860186611436565b610745916004915f9161149e565b61074e916114c5565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b81168252919091166004820152602401602060405180830381865afa1580156107a2573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107c69190611417565b155b156107ff576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61081c61081260608501604086016113a8565b8460800135610d5f565b61084661082f60608501604086016113a8565b61083c60208601866113a8565b8560800135610e13565b6108846040518060400160405280600481526020017f3131313100000000000000000000000000000000000000000000000000000000815250610e3f565b5f8061089360208601866113a8565b73ffffffffffffffffffffffffffffffffffffffff166108b660a0870187611436565b6040516108c492919061152b565b5f604051808303815f865af19150503d805f81146108fd576040519150601f19603f3d011682016040523d82523d5f602084013e610902565b606091505b50915091506109456040518060400160405280600481526020017f3232323200000000000000000000000000000000000000000000000000000000815250610e3f565b816109535761095381610ed1565b6109916040518060400160405280600481526020017f3333333300000000000000000000000000000000000000000000000000000000815250610e3f565b5f818060200190518101906109a6919061153a565b90506109e66040518060400160405280600481526020017f3434343400000000000000000000000000000000000000000000000000000000815250610e3f565b6109f085826109f8565b505050505050565b8135610a30576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fc9630cb000000000000000000000000000000000000000000000000000000000815260208301356004820152823560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063c9630cb09083906044015f604051808303818588803b158015610ac1575f5ffd5b505af1158015610ad3573d5f5f3e3d5ffd5b5050505050610b166040518060400160405280600481526020017f3535353500000000000000000000000000000000000000000000000000000000815250610e3f565b60408051808201909152600a81527f6d73672e73656e6465720000000000000000000000000000000000000000000060208201524790610b5590610e3f565b610b5e33610edb565b610b9c6040518060400160405280601681526020017f72656d61696e696e674e617469766542616c616e636500000000000000000000815250610e3f565b610ba581610f7c565b8015610bb557610bb5338261100d565b505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610c0a576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610c57576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610ca6576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610d56576390b8ec185f526004601cfd5b5f603452505050565b805f03610d98576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610df15780341015610ded576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610ded73ffffffffffffffffffffffffffffffffffffffff8316333084611026565b610bb58383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61107e565b610ece81604051602401610e539190611551565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f41304fac000000000000000000000000000000000000000000000000000000001790526111ab565b50565b8051602082018181fd5b60405173ffffffffffffffffffffffffffffffffffffffff82166024820152610ece90604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f2c2ecbc2000000000000000000000000000000000000000000000000000000001790526111ab565b610ece81604051602401610f9291815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167ff5b1bba9000000000000000000000000000000000000000000000000000000001790526111ab565b5f385f3884865af1610ded5763b12d13eb5f526004601cfd5b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661107157637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff8416156111a55773ffffffffffffffffffffffffffffffffffffffff83166110e7576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561115a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061117e919061153a565b10156111a5576111a573ffffffffffffffffffffffffffffffffffffffff851684836111cb565b50505050565b80516a636f6e736f6c652e6c6f67602083015f808483855afa5050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610d56575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610d5657633e3f8f735f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff81168114610ece575f5ffd5b5f5f5f6060848603121561127c575f5ffd5b833561128781611249565b9250602084013561129781611249565b929592945050506040919091013590565b5f5f602083850312156112b9575f5ffd5b823567ffffffffffffffff8111156112cf575f5ffd5b8301601f810185136112df575f5ffd5b803567ffffffffffffffff8111156112f5575f5ffd5b8560208260051b8401011115611309575f5ffd5b6020919091019590945092505050565b5f60408284031215611329575f5ffd5b50919050565b5f5f60608385031215611340575f5ffd5b823567ffffffffffffffff811115611356575f5ffd5b830160e08186031215611367575f5ffd5b91506113768460208501611319565b90509250929050565b5f5f60608385031215611390575f5ffd5b61139a8484611319565b946040939093013593505050565b5f602082840312156113b8575f5ffd5b81356113c381611249565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215611407575f5ffd5b813560ff811681146113c3575f5ffd5b5f60208284031215611427575f5ffd5b815180151581146113c3575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611469575f5ffd5b83018035915067ffffffffffffffff821115611483575f5ffd5b602001915036819003821315611497575f5ffd5b9250929050565b5f5f858511156114ac575f5ffd5b838611156114b8575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611524577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f6020828403121561154a575f5ffd5b5051919050565b602081525f82518060208401528060208501604085015e5f6040828501015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150509291505056fea2646970667358221220d78a6efd29b8fc52d99eec7ba9140872eb673e21dfc3227c01185829e92b13f864736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gasZipRouter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_liFiDiamond";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "GAS_ZIP_ROUTER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGasZip";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "LIFI_DIAMOND";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
        readonly name: "depositToGasZipERC20";
        readonly inputs: readonly [{
            readonly name: "_swapData";
            readonly type: "tuple";
            readonly internalType: "struct LibSwap.SwapData";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "depositToGasZipNative";
        readonly inputs: readonly [{
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "getDestinationChainsValue";
        readonly inputs: readonly [{
            readonly name: "_chainIds";
            readonly type: "uint8[]";
            readonly internalType: "uint8[]";
        }];
        readonly outputs: readonly [{
            readonly name: "destinationChains";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
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
        readonly name: "withdrawToken";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
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
        readonly name: "TokensWithdrawn";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address payable";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ExternalCallFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
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
        readonly name: "TooManyChainIds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): GasZipPeripheryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasZipPeriphery;
}
export {};
