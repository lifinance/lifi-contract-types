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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506116bd8061001c5f395ff3fe60806040526004361061001d575f3560e01c80634630a0d814610021575b5f5ffd5b61003461002f366004611246565b610036565b005b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100b1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155845f6100c13447611341565b905073ffffffffffffffffffffffffffffffffffffffff8716610110576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61011e8d8888888c610242565b90505f868661012e600182611341565b81811061013d5761013d611379565b905060200281019061014f91906113a6565b6101609060808101906060016113e2565b905061016d818a84610385565b8d7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378e8e8e8e8e8d8d5f8181106101a6576101a6611379565b90506020028101906101b891906113a6565b6101c99060608101906040016113e2565b888f8f5f8181106101dc576101dc611379565b90506020028101906101ee91906113a6565b608001358b6040516102089998979695949392919061144b565b60405180910390a25047905081811115610230576102305f8461022b8585611341565b610385565b50505f90915550505050505050505050565b5f8280820361027d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561028b600185611341565b81811061029a5761029a611379565b90506020028101906102ac91906113a6565b6102bd9060808101906060016113e2565b90505f6102c9826103ba565b905073ffffffffffffffffffffffffffffffffffffffff82166102f3576102f03482611341565b90505b5f6102fe8888610404565b905061030a888861050e565b6103178a8989898561057a565b5f82610322856103ba565b61032c9190611341565b905089811015610377576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166103af576103aa8282610925565b505050565b6103aa838383610996565b5f73ffffffffffffffffffffffffffffffffffffffff8216156103fc576103f773ffffffffffffffffffffffffffffffffffffffff831630610a04565b6103fe565b475b92915050565b6060815f8167ffffffffffffffff811115610421576104216114b5565b60405190808252806020026020018201604052801561044a578160200160208202803683370190505b5090505f805b838110156105035786868281811061046a5761046a611379565b905060200281019061047c91906113a6565b61048d9060808101906060016113e2565b9150610498826103ba565b8382815181106104aa576104aa611379565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166104fb57348382815181106104e3576104e3611379565b602002602001018181516104f79190611341565b9052505b600101610450565b509095945050505050565b5f5b818110156103aa573683838381811061052b5761052b611379565b905060200281019061053d91906113a6565b905061054f60e0820160c083016114e2565b156105715761057161056760608301604084016113e2565b8260800135610a37565b50600101610510565b838383838260018114610841575f8585610595600185611341565b8181106105a4576105a4611379565b90506020028101906105b691906113a6565b6105c79060808101906060016113e2565b90505f89815b8181101561076e57368d8d838181106105e8576105e8611379565b90506020028101906105fa91906113a6565b905061062961060f60608301604084016113e2565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061068b575061068b61064260408301602084016113e2565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156106a257506106a261064260208301836113e2565b801561072557506107256106b960a0830183611501565b6106c7916004915f91611562565b6106d091611589565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61075b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107658f82610ae7565b506001016105cd565b505f90505b61077e600185611341565b811015610839575f88888381811061079857610798611379565b90506020028101906107aa91906113a6565b6107bb9060808101906060016113e2565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146108305785828151811061080257610802611379565b6020026020010151610813826103ba565b61081d9190611341565b9250821561083057610830818885610385565b50600101610773565b505050610919565b875f5b8181101561091657368b8b8381811061085f5761085f611379565b905060200281019061087191906113a6565b905061088661060f60608301604084016113e2565b8061089f575061089f61064260408301602084016113e2565b80156108b657506108b661064260208301836113e2565b80156108cd57506108cd6106b960a0830183611501565b610903576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61090d8d82610ae7565b50600101610844565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610972576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61099273ffffffffffffffffffffffffffffffffffffffff831682610dda565b5050565b73ffffffffffffffffffffffffffffffffffffffff82166109e3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103aa73ffffffffffffffffffffffffffffffffffffffff84168383610df3565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f03610a70576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ac55780341015610992576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61099273ffffffffffffffffffffffffffffffffffffffff8316333084610e3c565b610b1d610af760208301836113e2565b7f91765d13665119d9c89a9e8beb9cfeb4a5a44ca96d7513e297e1357af2479ef0610e94565b610b53576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610b92576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610ba661060f60608501604086016113e2565b610bb0575f610bb6565b82608001355b90505f610bd1610bcc60608601604087016113e2565b6103ba565b90505f610be7610bcc60808701606088016113e2565b9050825f03610c1d57610c1d610c0360608701604088016113e2565b610c1360408801602089016113e2565b8760800135610ffc565b8460800135821015610c68576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161036e565b5f80610c7760208801886113e2565b73ffffffffffffffffffffffffffffffffffffffff1685610c9b60a08a018a611501565b604051610ca99291906115ef565b5f6040518083038185875af1925050503d805f8114610ce3576040519150601f19603f3d011682016040523d82523d5f602084013e610ce8565b606091505b509150915081610cfb57610cfb81611028565b5f610d0f610bcc60808a0160608b016113e2565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889610d4060208b018b6113e2565b610d5060608c0160408d016113e2565b610d6060808d0160608e016113e2565b8c60800135898711610d725786610d7c565b610d7c8a88611341565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b5f385f3884865af16109925763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610e33576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610e8757637939f4245f526004601cfd5b5f60605260405250505050565b6040805173ffffffffffffffffffffffffffffffffffffffff84811660248084019190915283518084039091018152604490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167ffab46d660000000000000000000000000000000000000000000000000000000017905291515f928392839291861691610f2891906115fe565b5f60405180830381855afa9150503d805f8114610f60576040519150601f19603f3d011682016040523d82523d5f602084013e610f65565b606091505b5091509150818015610f78575080516040145b15610ff2575f5f82806020019051810190610f939190611614565b90925090507f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000831601610fef573b151593506103fe92505050565b50505b505050503b151590565b6103aa8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611032565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156111595773ffffffffffffffffffffffffffffffffffffffff831661109b576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561110e573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111329190611670565b10156111595761115973ffffffffffffffffffffffffffffffffffffffff8516848361115f565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610e33575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610e3357633e3f8f735f526004601cfd5b5f5f83601f8401126111ed575f5ffd5b50813567ffffffffffffffff811115611204575f5ffd5b60208301915083602082850101111561121b575f5ffd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114611243575f5ffd5b50565b5f5f5f5f5f5f5f5f5f60c08a8c03121561125e575f5ffd5b8935985060208a013567ffffffffffffffff81111561127b575f5ffd5b6112878c828d016111dd565b90995097505060408a013567ffffffffffffffff8111156112a6575f5ffd5b6112b28c828d016111dd565b90975095505060608a01356112c681611222565b935060808a0135925060a08a013567ffffffffffffffff8111156112e8575f5ffd5b8a015f80601f83018e136112fa575f5ffd5b50813567ffffffffffffffff811115611311575f5ffd5b6020830191508d60208260051b850101111561132b575f5ffd5b8194508093505050509295985092959850929598565b818103818111156103fe577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126113d8575f5ffd5b9190910192915050565b5f602082840312156113f2575f5ffd5b81356113fd81611222565b9392505050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081525f61145e60e083018b8d611404565b8281036020840152611471818a8c611404565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f602082840312156114f2575f5ffd5b813580151581146113fd575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611534575f5ffd5b83018035915067ffffffffffffffff82111561154e575f5ffd5b60200191503681900382131561121b575f5ffd5b5f5f85851115611570575f5ffd5b8386111561157c575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156115e8577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f82518060208501845e5f920191825250919050565b5f5f60408385031215611625575f5ffd5b82517fffffff000000000000000000000000000000000000000000000000000000000081168114611654575f5ffd5b602084015190925061166581611222565b809150509250929050565b5f60208284031215611680575f5ffd5b505191905056fea2646970667358221220fba499b610082e51fc70ab0793074dd40909b667264f525d32e5a29788e61c2164736f6c634300081d0033";
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
