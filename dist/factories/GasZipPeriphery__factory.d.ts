import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GasZipPeriphery, GasZipPeripheryInterface } from "../GasZipPeriphery";
declare type GasZipPeripheryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasZipPeriphery__factory extends ContractFactory {
    constructor(...args: GasZipPeripheryConstructorParams);
    deploy(_gasZipRouter: PromiseOrValue<string>, _liFiDEXAggregator: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasZipPeriphery>;
    getDeployTransaction(_gasZipRouter: PromiseOrValue<string>, _liFiDEXAggregator: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasZipPeriphery;
    connect(signer: Signer): GasZipPeriphery__factory;
    static readonly bytecode = "0x60c060405234801562000010575f80fd5b50604051620018ef380380620018ef83398101604081905262000033916200007a565b5f80546001600160a01b0319166001600160a01b039283161790559182166080521660a052620000c1565b80516001600160a01b038116811462000075575f80fd5b919050565b5f805f606084860312156200008d575f80fd5b62000098846200005e565b9250620000a8602085016200005e565b9150620000b8604085016200005e565b90509250925092565b60805160a0516117f7620000f85f395f81816101520152818161066401526106a601525f81816101f401526107cb01526117f75ff3fe6080604052600436106100bb575f3560e01c80638b71ae6c11610071578063c4af5a741161004c578063c4af5a7414610216578063e30c397814610229578063f2fde38b14610255575f80fd5b80638b71ae6c146101995780638da5cb5b146101b8578063ba956b9a146101e3575f80fd5b806346fd98e2116100a157806346fd98e2146100fb5780637200b8291461012d5780638672976d14610141575f80fd5b806301e33667146100c657806323452b9c146100e7575f80fd5b366100c257005b5f80fd5b3480156100d1575f80fd5b506100e56100e03660046114a4565b610274565b005b3480156100f2575f80fd5b506100e56103f9565b348015610106575f80fd5b5061011a6101153660046114e2565b6104c2565b6040519081526020015b60405180910390f35b348015610138575f80fd5b506100e561054e565b34801561014c575f80fd5b506101747f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610124565b3480156101a4575f80fd5b506100e56101b3366004611567565b610632565b3480156101c3575f80fd5b505f546101749073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101ee575f80fd5b506101747f000000000000000000000000000000000000000000000000000000000000000081565b6100e56102243660046115b7565b61075a565b348015610234575f80fd5b506001546101749073ffffffffffffffffffffffffffffffffffffffff1681565b348015610260575f80fd5b506100e561026f3660046115e0565b610853565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146102c4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831661037b575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610335576040519150601f19603f3d011682016040523d82523d5f602084013e61033a565b606091505b5050905080610375576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061039c565b61039c73ffffffffffffffffffffffffffffffffffffffff841683836109af565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610449576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610498576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f8160208111156104ff576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b818110156105465784848281811061051b5761051b611602565b9050602002016020810190610530919061162f565b60ff16600884901b179250806001019050610501565b505092915050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146105a0576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b61064f61064560608401604085016115e0565b83608001356109f8565b61068d61066260608401604085016115e0565b7f00000000000000000000000000000000000000000000000000000000000000008460800135610b6f565b5f8073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166106d360a086018661164f565b6040516106e19291906116b7565b5f604051808303815f865af19150503d805f811461071a576040519150601f19603f3d011682016040523d82523d5f602084013e61071f565b606091505b5091509150816107325761073281610ca4565b5f8180602001905181019061074791906116c6565b9050610753848261075a565b5050505050565b8135610792576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fc9630cb000000000000000000000000000000000000000000000000000000000815260208301356004820152823560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063c9630cb09083906044015f604051808303818588803b158015610823575f80fd5b505af1158015610835573d5f803e3d5ffd5b50479350508215915061084e90505761084e3382610cae565b505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146108a3576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166108f0576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361093f576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166109ef576390b8ec185f526004601cfd5b5f603452505050565b805f03610a31576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a8a5780341015610a86576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610af4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b1891906116c6565b905081811015610b63576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61084e83333085610cc7565b73ffffffffffffffffffffffffffffffffffffffff8316610b8f57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610bdc576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c4f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c7391906116c6565b101561084e5761084e83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610edc565b8051602082018181fd5b5f385f3884865af1610a865763b12d13eb5f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff8416610d14576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d61576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa158015610dcf573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610df391906116c6565b9050610e018286868661104f565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610e6f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e9391906116c6565b610e9d91906116dd565b14610ed4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052610f6884826110ad565b6110495760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f604482015261103f9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261116a565b611049848261116a565b50505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526110499085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610fbd565b5f805f8473ffffffffffffffffffffffffffffffffffffffff16846040516110d59190611737565b5f604051808303815f865af19150503d805f811461110e576040519150601f19603f3d011682016040523d82523d5f602084013e611113565b606091505b509150915081801561113d57508051158061113d57508080602001905181019061113d9190611752565b801561115f575073ffffffffffffffffffffffffffffffffffffffff85163b15155b925050505b92915050565b5f6111cb826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166112779092919063ffffffff16565b905080515f14806111eb5750808060200190518101906111eb9190611752565b61084e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610b5a565b606061128584845f8561128d565b949350505050565b60608247101561131f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b5a565b5f808673ffffffffffffffffffffffffffffffffffffffff1685876040516113479190611737565b5f6040518083038185875af1925050503d805f8114611381576040519150601f19603f3d011682016040523d82523d5f602084013e611386565b606091505b5091509150611397878383876113a2565b979650505050505050565b606083156114375782515f036114305773ffffffffffffffffffffffffffffffffffffffff85163b611430576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b5a565b5081611285565b611285838381511561144c5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5a9190611771565b73ffffffffffffffffffffffffffffffffffffffff811681146114a1575f80fd5b50565b5f805f606084860312156114b6575f80fd5b83356114c181611480565b925060208401356114d181611480565b929592945050506040919091013590565b5f80602083850312156114f3575f80fd5b823567ffffffffffffffff8082111561150a575f80fd5b818501915085601f83011261151d575f80fd5b81358181111561152b575f80fd5b8660208260051b850101111561153f575f80fd5b60209290920196919550909350505050565b5f60408284031215611561575f80fd5b50919050565b5f8060608385031215611578575f80fd5b823567ffffffffffffffff81111561158e575f80fd5b830160e0818603121561159f575f80fd5b91506115ae8460208501611551565b90509250929050565b5f80606083850312156115c8575f80fd5b6115d28484611551565b946040939093013593505050565b5f602082840312156115f0575f80fd5b81356115fb81611480565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f6020828403121561163f575f80fd5b813560ff811681146115fb575f80fd5b5f8083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611682575f80fd5b83018035915067ffffffffffffffff82111561169c575f80fd5b6020019150368190038213156116b0575f80fd5b9250929050565b818382375f9101908152919050565b5f602082840312156116d6575f80fd5b5051919050565b81810381811115611164577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f5b8381101561172f578181015183820152602001611717565b50505f910152565b5f8251611748818460208701611715565b9190910192915050565b5f60208284031215611762575f80fd5b815180151581146115fb575f80fd5b602081525f825180602084015261178f816040850160208701611715565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea26469706673582212204bfbdf88568be3889f7b0ab2b2ac7b03ff9306c91960e33dc94818c985c70e0364736f6c63430008160033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gasZipRouter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_liFiDEXAggregator";
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
        readonly name: "gasZipRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGasZip";
        }];
        readonly stateMutability: "view";
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
        readonly name: "liFiDEXAggregator";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
        readonly name: "ExternalCallFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
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
        readonly name: "NoTransferToNullAddress";
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
        readonly name: "NullAddrIsNotAnERC20Token";
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
