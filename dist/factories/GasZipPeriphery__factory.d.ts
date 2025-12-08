import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GasZipPeriphery, GasZipPeripheryInterface } from "../GasZipPeriphery";
type GasZipPeripheryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161131938038061131983398101604081905261002e916100c5565b5f80546001600160a01b0319166001600160a01b03838116919091179091558316158061006257506001600160a01b038216155b8061007457506001600160a01b038116155b15610092576040516306b7c75960e31b815260040160405180910390fd5b506001600160a01b039182166080521660a052610105565b80516001600160a01b03811681146100c0575f5ffd5b919050565b5f5f5f606084860312156100d7575f5ffd5b6100e0846100aa565b92506100ee602085016100aa565b91506100fc604085016100aa565b90509250925092565b60805160a0516111e66101335f395f818160f8015261069201525f8181610155015261093401526111e65ff3fe6080604052600436106100bb575f3560e01c80637200b82911610071578063c4af5a741161004c578063c4af5a7414610216578063e30c397814610229578063f2fde38b14610255575f5ffd5b80637200b829146101b85780638b71ae6c146101cc5780638da5cb5b146101eb575f5ffd5b8063194c869f116100a1578063194c869f1461014457806323452b9c1461017757806346fd98e21461018b575f5ffd5b806301e33667146100c6578063020a1f7d146100e7575f5ffd5b366100c257005b5f5ffd5b3480156100d1575f5ffd5b506100e56100e0366004610e8b565b610274565b005b3480156100f2575f5ffd5b5061011a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561014f575f5ffd5b5061011a7f000000000000000000000000000000000000000000000000000000000000000081565b348015610182575f5ffd5b506100e56103f9565b348015610196575f5ffd5b506101aa6101a5366004610ec9565b6104c2565b60405190815260200161013b565b3480156101c3575f5ffd5b506100e561054e565b3480156101d7575f5ffd5b506100e56101e6366004610f50565b610632565b3480156101f6575f5ffd5b505f5461011a9073ffffffffffffffffffffffffffffffffffffffff1681565b6100e5610224366004610fa0565b6108c3565b348015610234575f5ffd5b5060015461011a9073ffffffffffffffffffffffffffffffffffffffff1681565b348015610260575f5ffd5b506100e561026f366004610fc9565b6109bc565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146102c4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831661037b575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610335576040519150601f19603f3d011682016040523d82523d5f602084013e61033a565b606091505b5050905080610375576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061039c565b61039c73ffffffffffffffffffffffffffffffffffffffff84168383610b18565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610449576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610498576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f8160108111156104ff576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b818110156105465784848281811061051b5761051b610feb565b90506020020160208101906105309190611018565b60ff16601084901b179250806001019050610501565b505092915050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146105a0576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f6106436080840160608501610fc9565b73ffffffffffffffffffffffffffffffffffffffff1614610690576040517f3e457d6800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff8116639baf00f96106da6020860186610fc9565b6106e760a0870187611038565b6106f5916004915f916110a0565b6106fe916110c7565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b8116825273ffffffffffffffffffffffffffffffffffffffff909316600482015291166024820152604401602060405180830381865afa15801561076d573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610791919061112d565b6107c7576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107e46107da6060850160408601610fc9565b8460800135610b61565b6108116107f76060850160408601610fc9565b6108076040860160208701610fc9565b8560800135610c15565b475f806108216020870187610fc9565b73ffffffffffffffffffffffffffffffffffffffff1661084460a0880188611038565b60405161085292919061114c565b5f604051808303815f865af19150503d805f811461088b576040519150601f19603f3d011682016040523d82523d5f602084013e610890565b606091505b5091509150816108a3576108a381610c41565b5f6108ae844761115b565b90506108ba86826108c3565b50505050505050565b81356108fb576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fc9630cb000000000000000000000000000000000000000000000000000000000815260208301356004820152823560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063c9630cb09083906044015f604051808303818588803b15801561098c575f5ffd5b505af115801561099e573d5f5f3e3d5ffd5b5047935050821591506109b79050576109b73382610c4b565b505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610a0c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610a59576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610aa8576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610b58576390b8ec185f526004601cfd5b5f603452505050565b805f03610b9a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610bf35780341015610bef576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610bef73ffffffffffffffffffffffffffffffffffffffff8316333084610c64565b6109b78383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610cbc565b8051602082018181fd5b5f385f3884865af1610bef5763b12d13eb5f526004601cfd5b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610caf57637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff841615610de35773ffffffffffffffffffffffffffffffffffffffff8316610d25576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610d98573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610dbc9190611199565b1015610de357610de373ffffffffffffffffffffffffffffffffffffffff85168483610de9565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610b58575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610b5857633e3f8f735f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff81168114610e88575f5ffd5b50565b5f5f5f60608486031215610e9d575f5ffd5b8335610ea881610e67565b92506020840135610eb881610e67565b929592945050506040919091013590565b5f5f60208385031215610eda575f5ffd5b823567ffffffffffffffff811115610ef0575f5ffd5b8301601f81018513610f00575f5ffd5b803567ffffffffffffffff811115610f16575f5ffd5b8560208260051b8401011115610f2a575f5ffd5b6020919091019590945092505050565b5f60408284031215610f4a575f5ffd5b50919050565b5f5f60608385031215610f61575f5ffd5b823567ffffffffffffffff811115610f77575f5ffd5b830160e08186031215610f88575f5ffd5b9150610f978460208501610f3a565b90509250929050565b5f5f60608385031215610fb1575f5ffd5b610fbb8484610f3a565b946040939093013593505050565b5f60208284031215610fd9575f5ffd5b8135610fe481610e67565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215611028575f5ffd5b813560ff81168114610fe4575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261106b575f5ffd5b83018035915067ffffffffffffffff821115611085575f5ffd5b602001915036819003821315611099575f5ffd5b9250929050565b5f5f858511156110ae575f5ffd5b838611156110ba575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611126577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f6020828403121561113d575f5ffd5b81518015158114610fe4575f5ffd5b818382375f9101908152919050565b81810381811115611193577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b92915050565b5f602082840312156111a9575f5ffd5b505191905056fea2646970667358221220aa9f7cb0e1f71e2d965d55ea39f290a3da97ef4734be693ffd893c5ced9139a464736f6c634300081d0033";
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
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
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
        readonly name: "InvalidConfig";
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
        readonly name: "SwapOutputMustBeNative";
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
