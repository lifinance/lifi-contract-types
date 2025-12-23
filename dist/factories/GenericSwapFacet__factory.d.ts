import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GenericSwapFacet, GenericSwapFacetInterface } from "../GenericSwapFacet";
type GenericSwapFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GenericSwapFacet__factory extends ContractFactory {
    constructor(...args: GenericSwapFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GenericSwapFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GenericSwapFacet;
    connect(signer: Signer): GenericSwapFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506115198061001c5f395ff3fe60806040526004361061001d575f3560e01c80634630a0d814610021575b5f5ffd5b61003461002f366004611114565b610036565b005b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100b1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155845f6100c1344761120f565b905073ffffffffffffffffffffffffffffffffffffffff8716610110576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61011e8d8888888c610242565b90505f868661012e60018261120f565b81811061013d5761013d611247565b905060200281019061014f9190611274565b6101609060808101906060016112b0565b905061016d818a84610384565b8d7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378e8e8e8e8e8d8d5f8181106101a6576101a6611247565b90506020028101906101b89190611274565b6101c99060608101906040016112b0565b888f8f5f8181106101dc576101dc611247565b90506020028101906101ee9190611274565b608001358b60405161020899989796959493929190611319565b60405180910390a25047905081811115610230576102305f8461022b858561120f565b610384565b50505f90915550505050505050505050565b5f8280820361027d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561028b60018561120f565b81811061029a5761029a611247565b90506020028101906102ac9190611274565b6102bd9060808101906060016112b0565b90505f6102c9826103b9565b905073ffffffffffffffffffffffffffffffffffffffff82166102f3576102f0348261120f565b90505b5f6102fe8888610403565b905061030a888861050d565b6103178a89898985610579565b5f82610322856103b9565b61032c919061120f565b905089811015610376576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166103ae576103a982826107c4565b505050565b6103a9838383610835565b5f73ffffffffffffffffffffffffffffffffffffffff8216156103fb576103f673ffffffffffffffffffffffffffffffffffffffff8316306108a3565b6103fd565b475b92915050565b6060815f8167ffffffffffffffff81111561042057610420611383565b604051908082528060200260200182016040528015610449578160200160208202803683370190505b5090505f5f5b838110156105025786868281811061046957610469611247565b905060200281019061047b9190611274565b61048c9060808101906060016112b0565b9150610497826103b9565b8382815181106104a9576104a9611247565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166104fa57348382815181106104e2576104e2611247565b602002602001018181516104f6919061120f565b9052505b60010161044f565b509095945050505050565b5f5b818110156103a9573683838381811061052a5761052a611247565b905060200281019061053c9190611274565b905061054e60e0820160c083016113b0565b156105705761057061056660608301604084016112b0565b82608001356108d6565b5060010161050f565b83838383825f5b818110156107aa57368a8a8381811061059b5761059b611247565b90506020028101906105ad9190611274565b90505f6105bd60208301836112b0565b90505f6105d060408401602085016112b0565b9050610673826105e360a08601866113cf565b6105f1916004915f91611430565b6105fa91611457565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061075b57506106a761068d60608501604086016112b0565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156106e057508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561075b575073ffffffffffffffffffffffffffffffffffffffff81165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15610792576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61079c8e84610986565b836001019350505050610580565b50506107b9848484845f610bf9565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610811576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61083173ffffffffffffffffffffffffffffffffffffffff831682610e10565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216610882576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103a973ffffffffffffffffffffffffffffffffffffffff84168383610e29565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f0361090f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109645780341015610831576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61083173ffffffffffffffffffffffffffffffffffffffff8316333084610e72565b61099e61099660208301836112b0565b6017903b1190565b6109d4576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610a13576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610a2761068d60608501604086016112b0565b610a31575f610a37565b82608001355b90505f610a52610a4d60808601606087016112b0565b6103b9565b9050815f03610a8857610a88610a6e60608601604087016112b0565b610a7e60408701602088016112b0565b8660800135610eca565b5f80610a9760208701876112b0565b73ffffffffffffffffffffffffffffffffffffffff1684610abb60a08901896113cf565b604051610ac99291906114bd565b5f6040518083038185875af1925050503d805f8114610b03576040519150601f19603f3d011682016040523d82523d5f602084013e610b08565b606091505b509150915081610b1b57610b1b81610ef6565b5f610b2f610a4d6080890160608a016112b0565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888610b6060208a018a6112b0565b610b7060608b0160408c016112b0565b610b8060808c0160608d016112b0565b8b60800135898711610b925786610b9c565b610b9c8a8861120f565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682610c0860018261120f565b818110610c1757610c17611247565b9050602002810190610c299190611274565b610c3a9060808101906060016112b0565b90505f5f5f5f5f5f5f5b88811015610e0057610c5760018a61120f565b81108015610c66575088600114155b15610d41578d8d82818110610c7d57610c7d611247565b9050602002810190610c8f9190611274565b610ca09060808101906060016112b0565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614610d41578a8181518110610ce757610ce7611247565b6020026020010151610cf8876103b9565b610d02919061120f565b965073ffffffffffffffffffffffffffffffffffffffff861615610d26575f610d28565b895b935083871115610d4157610d41868d61022b878b61120f565b8d8d82818110610d5357610d53611247565b9050602002810190610d659190611274565b610d769060608101906040016112b0565b9450610d81856103b9565b925073ffffffffffffffffffffffffffffffffffffffff851615610da5575f610da7565b895b91508183118015610de457508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15610df857610df8858d61022b858761120f565b600101610c44565b5050505050505050505050505050565b5f385f3884865af16108315763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610e69576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610ebd57637939f4245f526004601cfd5b5f60605260405250505050565b6103a98383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610f00565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156110275773ffffffffffffffffffffffffffffffffffffffff8316610f69576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610fdc573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061100091906114cc565b10156110275761102773ffffffffffffffffffffffffffffffffffffffff8516848361102d565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610e69575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610e6957633e3f8f735f526004601cfd5b5f5f83601f8401126110bb575f5ffd5b50813567ffffffffffffffff8111156110d2575f5ffd5b6020830191508360208285010111156110e9575f5ffd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114611111575f5ffd5b50565b5f5f5f5f5f5f5f5f5f60c08a8c03121561112c575f5ffd5b8935985060208a013567ffffffffffffffff811115611149575f5ffd5b6111558c828d016110ab565b90995097505060408a013567ffffffffffffffff811115611174575f5ffd5b6111808c828d016110ab565b90975095505060608a0135611194816110f0565b935060808a0135925060a08a013567ffffffffffffffff8111156111b6575f5ffd5b8a015f80601f83018e136111c8575f5ffd5b50813567ffffffffffffffff8111156111df575f5ffd5b6020830191508d60208260051b85010111156111f9575f5ffd5b8194508093505050509295985092959850929598565b818103818111156103fd577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126112a6575f5ffd5b9190910192915050565b5f602082840312156112c0575f5ffd5b81356112cb816110f0565b9392505050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081525f61132c60e083018b8d6112d2565b828103602084015261133f818a8c6112d2565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f602082840312156113c0575f5ffd5b813580151581146112cb575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611402575f5ffd5b83018035915067ffffffffffffffff82111561141c575f5ffd5b6020019150368190038213156110e9575f5ffd5b5f5f8585111561143e575f5ffd5b8386111561144a575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156114b6577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f602082840312156114dc575f5ffd5b505191905056fea26469706673582212206408949d9b4df21ac941f626b8a641db95be799fb9560e3e427f010fd703cc2564736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "swapTokensGeneric";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_integrator";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_referrer";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
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
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
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
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
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
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): GenericSwapFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GenericSwapFacet;
}
export {};
