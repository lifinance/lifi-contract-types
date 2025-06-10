import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GenericSwapFacet, GenericSwapFacetInterface } from "../GenericSwapFacet";
declare type GenericSwapFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506114e38061001c5f395ff3fe60806040526004361061001d575f3560e01c80634630a0d814610021575b5f5ffd5b61003461002f3660046110de565b610036565b005b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100b1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155845f6100c134476111d9565b905073ffffffffffffffffffffffffffffffffffffffff8716610110576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61011e8d8888888c610242565b90505f868661012e6001826111d9565b81811061013d5761013d611211565b905060200281019061014f919061123e565b61016090608081019060600161127a565b905061016d818a84610385565b8d7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378e8e8e8e8e8d8d5f8181106101a6576101a6611211565b90506020028101906101b8919061123e565b6101c990606081019060400161127a565b888f8f5f8181106101dc576101dc611211565b90506020028101906101ee919061123e565b608001358b604051610208999897969594939291906112e3565b60405180910390a25047905081811115610230576102305f8461022b85856111d9565b610385565b50505f90915550505050505050505050565b5f8280820361027d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561028b6001856111d9565b81811061029a5761029a611211565b90506020028101906102ac919061123e565b6102bd90608081019060600161127a565b90505f6102c9826103ba565b905073ffffffffffffffffffffffffffffffffffffffff82166102f3576102f034826111d9565b90505b5f6102fe8888610404565b905061030a888861050e565b6103178a8989898561057a565b5f82610322856103ba565b61032c91906111d9565b905089811015610377576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166103af576103aa82826108b2565b505050565b6103aa838383610923565b5f73ffffffffffffffffffffffffffffffffffffffff8216156103fc576103f773ffffffffffffffffffffffffffffffffffffffff831630610991565b6103fe565b475b92915050565b6060815f8167ffffffffffffffff8111156104215761042161134d565b60405190808252806020026020018201604052801561044a578160200160208202803683370190505b5090505f805b838110156105035786868281811061046a5761046a611211565b905060200281019061047c919061123e565b61048d90608081019060600161127a565b9150610498826103ba565b8382815181106104aa576104aa611211565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166104fb57348382815181106104e3576104e3611211565b602002602001018181516104f791906111d9565b9052505b600101610450565b509095945050505050565b5f5b818110156103aa573683838381811061052b5761052b611211565b905060200281019061053d919061123e565b905061054f60e0820160c0830161137a565b1561057157610571610567606083016040840161127a565b82608001356109c4565b50600101610510565b8383838382805f5b8181101561072357368b8b8381811061059d5761059d611211565b90506020028101906105af919061123e565b90506105de6105c4606083016040840161127a565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061064057506106406105f7604083016020840161127a565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561065757506106576105f7602083018361127a565b80156106da57506106da61066e60a0830183611399565b61067c916004915f916113fa565b61068591611421565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610710576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61071a8d82610a74565b50600101610582565b50508060011461083c575f858561073b6001856111d9565b81811061074a5761074a611211565b905060200281019061075c919061123e565b61076d90608081019060600161127a565b90505f805b61077d6001856111d9565b811015610838575f88888381811061079757610797611211565b90506020028101906107a9919061123e565b6107ba90608081019060600161127a565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461082f5785828151811061080157610801611211565b6020026020010151610812826103ba565b61081c91906111d9565b9250821561082f5761082f818885610385565b50600101610772565b5050505b5f5b818110156108a5575f86868381811061085957610859611211565b905060200281019061086b919061123e565b61087c90606081019060400161127a565b90505f610888826103ba565b9050801561089b5761089b828783610385565b505060010161083e565b5050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff82166108ff576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61091f73ffffffffffffffffffffffffffffffffffffffff831682610d46565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216610970576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103aa73ffffffffffffffffffffffffffffffffffffffff84168383610d5f565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f036109fd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a52578034101561091f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61091f73ffffffffffffffffffffffffffffffffffffffff8316333084610da8565b610a89610a84602083018361127a565b610e00565b610abf576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610afe576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610b126105c4606085016040860161127a565b610b1c575f610b22565b82608001355b90505f610b3d610b38606086016040870161127a565b6103ba565b90505f610b53610b38608087016060880161127a565b9050825f03610b8957610b89610b6f606087016040880161127a565b610b7f604088016020890161127a565b8760800135610e94565b8460800135821015610bd4576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161036e565b5f80610be3602088018861127a565b73ffffffffffffffffffffffffffffffffffffffff1685610c0760a08a018a611399565b604051610c15929190611487565b5f6040518083038185875af1925050503d805f8114610c4f576040519150601f19603f3d011682016040523d82523d5f602084013e610c54565b606091505b509150915081610c6757610c6781610ec0565b5f610c7b610b3860808a0160608b0161127a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889610cac60208b018b61127a565b610cbc60608c0160408d0161127a565b610ccc60808d0160608e0161127a565b8c60800135898711610cde5786610ce8565b610ce88a886111d9565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b5f385f3884865af161091f5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610d9f576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610df357637939f4245f526004601cfd5b5f60605260405250505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000821601610e8b57506023015160601c3b151592915050565b5050503b151590565b6103aa8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610eca565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615610ff15773ffffffffffffffffffffffffffffffffffffffff8316610f33576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610fa6573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fca9190611496565b1015610ff157610ff173ffffffffffffffffffffffffffffffffffffffff85168483610ff7565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610d9f575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610d9f57633e3f8f735f526004601cfd5b5f5f83601f840112611085575f5ffd5b50813567ffffffffffffffff81111561109c575f5ffd5b6020830191508360208285010111156110b3575f5ffd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff811681146110db575f5ffd5b50565b5f5f5f5f5f5f5f5f5f60c08a8c0312156110f6575f5ffd5b8935985060208a013567ffffffffffffffff811115611113575f5ffd5b61111f8c828d01611075565b90995097505060408a013567ffffffffffffffff81111561113e575f5ffd5b61114a8c828d01611075565b90975095505060608a013561115e816110ba565b935060808a0135925060a08a013567ffffffffffffffff811115611180575f5ffd5b8a015f80601f83018e13611192575f5ffd5b50813567ffffffffffffffff8111156111a9575f5ffd5b6020830191508d60208260051b85010111156111c3575f5ffd5b8194508093505050509295985092959850929598565b818103818111156103fe577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611270575f5ffd5b9190910192915050565b5f6020828403121561128a575f5ffd5b8135611295816110ba565b9392505050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081525f6112f660e083018b8d61129c565b8281036020840152611309818a8c61129c565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f6020828403121561138a575f5ffd5b81358015158114611295575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126113cc575f5ffd5b83018035915067ffffffffffffffff8211156113e6575f5ffd5b6020019150368190038213156110b3575f5ffd5b5f5f85851115611408575f5ffd5b83861115611414575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611480577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f602082840312156114a6575f5ffd5b505191905056fea26469706673582212208ad5f999a1026285ba2aff8b53ddbdaeb9821462147d48cf6fcb7be0595f5afc64736f6c634300081d0033";
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
