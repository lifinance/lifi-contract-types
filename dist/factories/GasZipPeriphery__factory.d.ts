import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GasZipPeriphery, GasZipPeripheryInterface } from "../GasZipPeriphery";
declare type GasZipPeripheryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasZipPeriphery__factory extends ContractFactory {
    constructor(...args: GasZipPeripheryConstructorParams);
    deploy(_gasZipRouter: PromiseOrValue<string>, _liFiDEXAggregator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasZipPeriphery>;
    getDeployTransaction(_gasZipRouter: PromiseOrValue<string>, _liFiDEXAggregator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasZipPeriphery;
    connect(signer: Signer): GasZipPeriphery__factory;
    static readonly bytecode = "0x60c060405234801561001057600080fd5b506040516113fb3803806113fb83398101604081905261002f91610062565b6001600160a01b039182166080521660a052610095565b80516001600160a01b038116811461005d57600080fd5b919050565b6000806040838503121561007557600080fd5b61007e83610046565b915061008c60208401610046565b90509250929050565b60805160a05161132d6100ce6000396000818160af0152818161039901526103f80152600081816101080152610255015261132d6000f3fe60806040526004361061005e5760003560e01c8063ba956b9a11610043578063ba956b9a146100f6578063ee35f52e1461012a578063f477f9991461013f57600080fd5b806346fd98e21461006a5780638672976d1461009d57600080fd5b3661006557005b600080fd5b34801561007657600080fd5b5061008a610085366004610f4f565b61015f565b6040519081526020015b60405180910390f35b3480156100a957600080fd5b506100d17f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610094565b34801561010257600080fd5b506100d17f000000000000000000000000000000000000000000000000000000000000000081565b61013d610138366004611044565b61021c565b005b34801561014b57600080fd5b5061013d61015a36600461106f565b610367565b60006020825111156101d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f546f6f206d616e7920636861696e20494473000000000000000000000000000060448201526064015b60405180910390fd5b60005b8251811015610216578281815181106101f0576101f06110c3565b602002602001015160ff16600883901b179150808061020e90611121565b9150506101d5565b50919050565b6040517fc9630cb000000000000000000000000000000000000000000000000000000000815282356004820152602083013560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063c9630cb09083906044016000604051808303818588803b1580156102af57600080fd5b505af11580156102c3573d6000803e3d6000fd5b5050505050600081346102d69190611159565b9050801561036257604051600090339083908381818185875af1925050503d8060008114610320576040519150601f19603f3d011682016040523d82523d6000602084013e610325565b606091505b5050905080610360576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b505050565b61038461037a6060840160408501611172565b83608001356104b1565b6103de6103976060840160408501611172565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610627565b60008073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001661042560a08601866111af565b60405161043392919061121b565b6000604051808303816000865af19150503d8060008114610470576040519150601f19603f3d011682016040523d82523d6000602084013e610475565b606091505b509150915081610488576104888161076a565b60008180602001905181019061049e919061122b565b90506104aa848261021c565b5050505050565b806000036104eb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105445780341015610540576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d5919061122b565b90508181101561061b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016101c9565b61036283333085610774565b73ffffffffffffffffffffffffffffffffffffffff831661064757505050565b73ffffffffffffffffffffffffffffffffffffffff8216610694576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610709573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072d919061122b565b10156103625761073f8383600061098e565b61036283837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61098e565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff84166107c1576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661080e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561087f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a3919061122b565b90506108b182868686610b8e565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610921573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610945919061122b565b61094f9190611159565b14610986576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b801580610a2e57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610a08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2c919061122b565b155b610aba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016101c9565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526103629084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610bec565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526103609085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610b0c565b6000610c4e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610cfb9092919063ffffffff16565b9050805160001480610c6f575080806020019051810190610c6f9190611244565b610362576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016101c9565b6060610d0a8484600085610d12565b949350505050565b606082471015610da4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016101c9565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610dcd919061128a565b60006040518083038185875af1925050503d8060008114610e0a576040519150601f19603f3d011682016040523d82523d6000602084013e610e0f565b606091505b5091509150610e2087838387610e2b565b979650505050505050565b60608315610ec1578251600003610eba5773ffffffffffffffffffffffffffffffffffffffff85163b610eba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101c9565b5081610d0a565b610d0a8383815115610ed65781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c991906112a6565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b803560ff81168114610f4a57600080fd5b919050565b60006020808385031215610f6257600080fd5b823567ffffffffffffffff80821115610f7a57600080fd5b818501915085601f830112610f8e57600080fd5b813581811115610fa057610fa0610f0a565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108582111715610fe357610fe3610f0a565b60405291825284820192508381018501918883111561100157600080fd5b938501935b828510156110265761101785610f39565b84529385019392850192611006565b98975050505050505050565b60006040828403121561021657600080fd5b6000806060838503121561105757600080fd5b6110618484611032565b946040939093013593505050565b6000806060838503121561108257600080fd5b823567ffffffffffffffff81111561109957600080fd5b830160e081860312156110ab57600080fd5b91506110ba8460208501611032565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611152576111526110f2565b5060010190565b8181038181111561116c5761116c6110f2565b92915050565b60006020828403121561118457600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146111a857600080fd5b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126111e457600080fd5b83018035915067ffffffffffffffff8211156111ff57600080fd5b60200191503681900382131561121457600080fd5b9250929050565b8183823760009101908152919050565b60006020828403121561123d57600080fd5b5051919050565b60006020828403121561125657600080fd5b815180151581146111a857600080fd5b60005b83811015611281578181015183820152602001611269565b50506000910152565b6000825161129c818460208701611266565b9190910192915050565b60208152600082518060208401526112c5816040850160208701611266565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220cfee1c56df302f818e57f5643a6bb07d9ebfe774e79e928dc2295635b71b968a64736f6c63430008110033";
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
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
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
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
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
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
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
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): GasZipPeripheryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasZipPeriphery;
}
export {};
