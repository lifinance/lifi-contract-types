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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506114628061001c5f395ff3fe60806040526004361061001d575f3560e01c80634630a0d814610021575b5f5ffd5b61003461002f36600461105d565b610036565b005b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100b1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155845f6100c13447611158565b905073ffffffffffffffffffffffffffffffffffffffff8716610110576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61011e8d8888888c610242565b90505f868661012e600182611158565b81811061013d5761013d611190565b905060200281019061014f91906111bd565b6101609060808101906060016111f9565b905061016d818a84610384565b8d7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378e8e8e8e8e8d8d5f8181106101a6576101a6611190565b90506020028101906101b891906111bd565b6101c99060608101906040016111f9565b888f8f5f8181106101dc576101dc611190565b90506020028101906101ee91906111bd565b608001358b60405161020899989796959493929190611262565b60405180910390a25047905081811115610230576102305f8461022b8585611158565b610384565b50505f90915550505050505050505050565b5f8280820361027d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561028b600185611158565b81811061029a5761029a611190565b90506020028101906102ac91906111bd565b6102bd9060808101906060016111f9565b90505f6102c9826103b9565b905073ffffffffffffffffffffffffffffffffffffffff82166102f3576102f03482611158565b90505b5f6102fe8888610403565b905061030a888861050d565b6103178a89898985610579565b5f82610322856103b9565b61032c9190611158565b905089811015610376576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166103ae576103a98282610924565b505050565b6103a9838383610995565b5f73ffffffffffffffffffffffffffffffffffffffff8216156103fb576103f673ffffffffffffffffffffffffffffffffffffffff831630610a03565b6103fd565b475b92915050565b6060815f8167ffffffffffffffff811115610420576104206112cc565b604051908082528060200260200182016040528015610449578160200160208202803683370190505b5090505f805b838110156105025786868281811061046957610469611190565b905060200281019061047b91906111bd565b61048c9060808101906060016111f9565b9150610497826103b9565b8382815181106104a9576104a9611190565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166104fa57348382815181106104e2576104e2611190565b602002602001018181516104f69190611158565b9052505b60010161044f565b509095945050505050565b5f5b818110156103a9573683838381811061052a5761052a611190565b905060200281019061053c91906111bd565b905061054e60e0820160c083016112f9565b156105705761057061056660608301604084016111f9565b8260800135610a36565b5060010161050f565b838383838260018114610840575f8585610594600185611158565b8181106105a3576105a3611190565b90506020028101906105b591906111bd565b6105c69060808101906060016111f9565b90505f89815b8181101561076d57368d8d838181106105e7576105e7611190565b90506020028101906105f991906111bd565b905061062861060e60608301604084016111f9565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061068a575061068a61064160408301602084016111f9565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156106a157506106a161064160208301836111f9565b801561072457506107246106b860a0830183611318565b6106c6916004915f91611379565b6106cf916113a0565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61075a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107648f82610ae6565b506001016105cc565b505f90505b61077d600185611158565b811015610838575f88888381811061079757610797611190565b90506020028101906107a991906111bd565b6107ba9060808101906060016111f9565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461082f5785828151811061080157610801611190565b6020026020010151610812826103b9565b61081c9190611158565b9250821561082f5761082f818885610384565b50600101610772565b505050610918565b875f5b8181101561091557368b8b8381811061085e5761085e611190565b905060200281019061087091906111bd565b905061088561060e60608301604084016111f9565b8061089e575061089e61064160408301602084016111f9565b80156108b557506108b561064160208301836111f9565b80156108cc57506108cc6106b860a0830183611318565b610902576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61090c8d82610ae6565b50600101610843565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610971576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61099173ffffffffffffffffffffffffffffffffffffffff831682610d59565b5050565b73ffffffffffffffffffffffffffffffffffffffff82166109e2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103a973ffffffffffffffffffffffffffffffffffffffff84168383610d72565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f03610a6f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ac45780341015610991576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61099173ffffffffffffffffffffffffffffffffffffffff8316333084610dbb565b610afe610af660208301836111f9565b6017903b1190565b610b34576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610b73576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610b8761060e60608501604086016111f9565b610b91575f610b97565b82608001355b90505f610bb2610bad60808601606087016111f9565b6103b9565b9050815f03610be857610be8610bce60608601604087016111f9565b610bde60408701602088016111f9565b8660800135610e13565b5f80610bf760208701876111f9565b73ffffffffffffffffffffffffffffffffffffffff1684610c1b60a0890189611318565b604051610c29929190611406565b5f6040518083038185875af1925050503d805f8114610c63576040519150601f19603f3d011682016040523d82523d5f602084013e610c68565b606091505b509150915081610c7b57610c7b81610e3f565b5f610c8f610bad6080890160608a016111f9565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888610cc060208a018a6111f9565b610cd060608b0160408c016111f9565b610ce060808c0160608d016111f9565b8b60800135898711610cf25786610cfc565b610cfc8a88611158565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b5f385f3884865af16109915763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610db2576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610e0657637939f4245f526004601cfd5b5f60605260405250505050565b6103a98383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610e49565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615610f705773ffffffffffffffffffffffffffffffffffffffff8316610eb2576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610f25573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f499190611415565b1015610f7057610f7073ffffffffffffffffffffffffffffffffffffffff85168483610f76565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610db2575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610db257633e3f8f735f526004601cfd5b5f5f83601f840112611004575f5ffd5b50813567ffffffffffffffff81111561101b575f5ffd5b602083019150836020828501011115611032575f5ffd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff8116811461105a575f5ffd5b50565b5f5f5f5f5f5f5f5f5f60c08a8c031215611075575f5ffd5b8935985060208a013567ffffffffffffffff811115611092575f5ffd5b61109e8c828d01610ff4565b90995097505060408a013567ffffffffffffffff8111156110bd575f5ffd5b6110c98c828d01610ff4565b90975095505060608a01356110dd81611039565b935060808a0135925060a08a013567ffffffffffffffff8111156110ff575f5ffd5b8a015f80601f83018e13611111575f5ffd5b50813567ffffffffffffffff811115611128575f5ffd5b6020830191508d60208260051b8501011115611142575f5ffd5b8194508093505050509295985092959850929598565b818103818111156103fd577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126111ef575f5ffd5b9190910192915050565b5f60208284031215611209575f5ffd5b813561121481611039565b9392505050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081525f61127560e083018b8d61121b565b8281036020840152611288818a8c61121b565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f60208284031215611309575f5ffd5b81358015158114611214575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261134b575f5ffd5b83018035915067ffffffffffffffff821115611365575f5ffd5b602001915036819003821315611032575f5ffd5b5f5f85851115611387575f5ffd5b83861115611393575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156113ff577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611425575f5ffd5b505191905056fea2646970667358221220dc6ad435ff1b02bc3a1f9c923cd0157544164ed17341f7f3e39e8286d8ed430764736f6c634300081d0033";
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
