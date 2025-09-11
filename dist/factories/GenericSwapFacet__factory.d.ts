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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b5061148e8061001c5f395ff3fe60806040526004361061001d575f3560e01c80634630a0d814610021575b5f5ffd5b61003461002f366004611089565b610036565b005b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100b1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155845f6100c13447611184565b905073ffffffffffffffffffffffffffffffffffffffff8716610110576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61011e8d8888888c610242565b90505f868661012e600182611184565b81811061013d5761013d6111bc565b905060200281019061014f91906111e9565b610160906080810190606001611225565b905061016d818a84610384565b8d7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378e8e8e8e8e8d8d5f8181106101a6576101a66111bc565b90506020028101906101b891906111e9565b6101c9906060810190604001611225565b888f8f5f8181106101dc576101dc6111bc565b90506020028101906101ee91906111e9565b608001358b6040516102089998979695949392919061128e565b60405180910390a25047905081811115610230576102305f8461022b8585611184565b610384565b50505f90915550505050505050505050565b5f8280820361027d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561028b600185611184565b81811061029a5761029a6111bc565b90506020028101906102ac91906111e9565b6102bd906080810190606001611225565b90505f6102c9826103b9565b905073ffffffffffffffffffffffffffffffffffffffff82166102f3576102f03482611184565b90505b5f6102fe8888610403565b905061030a888861050d565b6103178a89898985610579565b5f82610322856103b9565b61032c9190611184565b905089811015610376576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166103ae576103a98282610739565b505050565b6103a98383836107aa565b5f73ffffffffffffffffffffffffffffffffffffffff8216156103fb576103f673ffffffffffffffffffffffffffffffffffffffff831630610818565b6103fd565b475b92915050565b6060815f8167ffffffffffffffff811115610420576104206112f8565b604051908082528060200260200182016040528015610449578160200160208202803683370190505b5090505f5f5b8381101561050257868682818110610469576104696111bc565b905060200281019061047b91906111e9565b61048c906080810190606001611225565b9150610497826103b9565b8382815181106104a9576104a96111bc565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166104fa57348382815181106104e2576104e26111bc565b602002602001018181516104f69190611184565b9052505b60010161044f565b509095945050505050565b5f5b818110156103a9573683838381811061052a5761052a6111bc565b905060200281019061053c91906111e9565b905061054e60e0820160c08301611325565b15610570576105706105666060830160408401611225565b826080013561084b565b5060010161050f565b83838383825f5b8181101561071f57368a8a8381811061059b5761059b6111bc565b90506020028101906105ad91906111e9565b90506105dc6105c26060830160408401611225565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061063d575061063d6105f56040830160208401611225565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f216020526040902054151590565b801561065457506106546105f56020830183611225565b80156106d657506106d661066b60a0830183611344565b610679916004915f916113a5565b610682916113cc565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f226020526040902054151590565b61070c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107168c826108fb565b50600101610580565b505061072e848484845f610b6e565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610786576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107a673ffffffffffffffffffffffffffffffffffffffff831682610d85565b5050565b73ffffffffffffffffffffffffffffffffffffffff82166107f7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103a973ffffffffffffffffffffffffffffffffffffffff84168383610d9e565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f03610884576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166108d957803410156107a6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107a673ffffffffffffffffffffffffffffffffffffffff8316333084610de7565b61091361090b6020830183611225565b6017903b1190565b610949576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610988576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61099c6105c26060850160408601611225565b6109a6575f6109ac565b82608001355b90505f6109c76109c26080860160608701611225565b6103b9565b9050815f036109fd576109fd6109e36060860160408701611225565b6109f36040870160208801611225565b8660800135610e3f565b5f80610a0c6020870187611225565b73ffffffffffffffffffffffffffffffffffffffff1684610a3060a0890189611344565b604051610a3e929190611432565b5f6040518083038185875af1925050503d805f8114610a78576040519150601f19603f3d011682016040523d82523d5f602084013e610a7d565b606091505b509150915081610a9057610a9081610e6b565b5f610aa46109c26080890160608a01611225565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888610ad560208a018a611225565b610ae560608b0160408c01611225565b610af560808c0160608d01611225565b8b60800135898711610b075786610b11565b610b118a88611184565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682610b7d600182611184565b818110610b8c57610b8c6111bc565b9050602002810190610b9e91906111e9565b610baf906080810190606001611225565b90505f5f5f5f5f5f5f5b88811015610d7557610bcc60018a611184565b81108015610bdb575088600114155b15610cb6578d8d82818110610bf257610bf26111bc565b9050602002810190610c0491906111e9565b610c15906080810190606001611225565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614610cb6578a8181518110610c5c57610c5c6111bc565b6020026020010151610c6d876103b9565b610c779190611184565b965073ffffffffffffffffffffffffffffffffffffffff861615610c9b575f610c9d565b895b935083871115610cb657610cb6868d61022b878b611184565b8d8d82818110610cc857610cc86111bc565b9050602002810190610cda91906111e9565b610ceb906060810190604001611225565b9450610cf6856103b9565b925073ffffffffffffffffffffffffffffffffffffffff851615610d1a575f610d1c565b895b91508183118015610d5957508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15610d6d57610d6d858d61022b8587611184565b600101610bb9565b5050505050505050505050505050565b5f385f3884865af16107a65763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610dde576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610e3257637939f4245f526004601cfd5b5f60605260405250505050565b6103a98383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610e75565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615610f9c5773ffffffffffffffffffffffffffffffffffffffff8316610ede576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610f51573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f759190611441565b1015610f9c57610f9c73ffffffffffffffffffffffffffffffffffffffff85168483610fa2565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610dde575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610dde57633e3f8f735f526004601cfd5b5f5f83601f840112611030575f5ffd5b50813567ffffffffffffffff811115611047575f5ffd5b60208301915083602082850101111561105e575f5ffd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114611086575f5ffd5b50565b5f5f5f5f5f5f5f5f5f60c08a8c0312156110a1575f5ffd5b8935985060208a013567ffffffffffffffff8111156110be575f5ffd5b6110ca8c828d01611020565b90995097505060408a013567ffffffffffffffff8111156110e9575f5ffd5b6110f58c828d01611020565b90975095505060608a013561110981611065565b935060808a0135925060a08a013567ffffffffffffffff81111561112b575f5ffd5b8a015f80601f83018e1361113d575f5ffd5b50813567ffffffffffffffff811115611154575f5ffd5b6020830191508d60208260051b850101111561116e575f5ffd5b8194508093505050509295985092959850929598565b818103818111156103fd577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261121b575f5ffd5b9190910192915050565b5f60208284031215611235575f5ffd5b813561124081611065565b9392505050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081525f6112a160e083018b8d611247565b82810360208401526112b4818a8c611247565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f60208284031215611335575f5ffd5b81358015158114611240575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611377575f5ffd5b83018035915067ffffffffffffffff821115611391575f5ffd5b60200191503681900382131561105e575f5ffd5b5f5f858511156113b3575f5ffd5b838611156113bf575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561142b577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611451575f5ffd5b505191905056fea2646970667358221220c211b8dd4c9219b671c6c9f78f47dbd91e9ee2683f3f20f63e384b49e2092dee64736f6c634300081d0033";
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
