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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506114808061001c5f395ff3fe60806040526004361061001d575f3560e01c80634630a0d814610021575b5f5ffd5b61003461002f36600461107b565b610036565b005b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100b1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155845f6100c13447611176565b905073ffffffffffffffffffffffffffffffffffffffff8716610110576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61011e8d8888888c610242565b90505f868661012e600182611176565b81811061013d5761013d6111ae565b905060200281019061014f91906111db565b610160906080810190606001611217565b905061016d818a84610384565b8d7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378e8e8e8e8e8d8d5f8181106101a6576101a66111ae565b90506020028101906101b891906111db565b6101c9906060810190604001611217565b888f8f5f8181106101dc576101dc6111ae565b90506020028101906101ee91906111db565b608001358b60405161020899989796959493929190611280565b60405180910390a25047905081811115610230576102305f8461022b8585611176565b610384565b50505f90915550505050505050505050565b5f8280820361027d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561028b600185611176565b81811061029a5761029a6111ae565b90506020028101906102ac91906111db565b6102bd906080810190606001611217565b90505f6102c9826103b9565b905073ffffffffffffffffffffffffffffffffffffffff82166102f3576102f03482611176565b90505b5f6102fe8888610403565b905061030a888861050d565b6103178a89898985610579565b5f82610322856103b9565b61032c9190611176565b905089811015610376576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166103ae576103a982826108b1565b505050565b6103a9838383610922565b5f73ffffffffffffffffffffffffffffffffffffffff8216156103fb576103f673ffffffffffffffffffffffffffffffffffffffff831630610990565b6103fd565b475b92915050565b6060815f8167ffffffffffffffff811115610420576104206112ea565b604051908082528060200260200182016040528015610449578160200160208202803683370190505b5090505f805b8381101561050257868682818110610469576104696111ae565b905060200281019061047b91906111db565b61048c906080810190606001611217565b9150610497826103b9565b8382815181106104a9576104a96111ae565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166104fa57348382815181106104e2576104e26111ae565b602002602001018181516104f69190611176565b9052505b60010161044f565b509095945050505050565b5f5b818110156103a9573683838381811061052a5761052a6111ae565b905060200281019061053c91906111db565b905061054e60e0820160c08301611317565b15610570576105706105666060830160408401611217565b82608001356109c3565b5060010161050f565b8383838382805f5b8181101561072257368b8b8381811061059c5761059c6111ae565b90506020028101906105ae91906111db565b90506105dd6105c36060830160408401611217565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061063f575061063f6105f66040830160208401611217565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561065657506106566105f66020830183611217565b80156106d957506106d961066d60a0830183611336565b61067b916004915f91611397565b610684916113be565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61070f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107198d82610a73565b50600101610581565b50508060011461083b575f858561073a600185611176565b818110610749576107496111ae565b905060200281019061075b91906111db565b61076c906080810190606001611217565b90505f805b61077c600185611176565b811015610837575f888883818110610796576107966111ae565b90506020028101906107a891906111db565b6107b9906080810190606001611217565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461082e57858281518110610800576108006111ae565b6020026020010151610811826103b9565b61081b9190611176565b9250821561082e5761082e818885610384565b50600101610771565b5050505b5f5b818110156108a4575f868683818110610858576108586111ae565b905060200281019061086a91906111db565b61087b906060810190604001611217565b90505f610887826103b9565b9050801561089a5761089a828783610384565b505060010161083d565b5050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff82166108fe576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61091e73ffffffffffffffffffffffffffffffffffffffff831682610ce3565b5050565b73ffffffffffffffffffffffffffffffffffffffff821661096f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103a973ffffffffffffffffffffffffffffffffffffffff84168383610cfc565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f036109fc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a51578034101561091e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61091e73ffffffffffffffffffffffffffffffffffffffff8316333084610d45565b610a88610a836020830183611217565b610d9d565b610abe576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610afd576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610b116105c36060850160408601611217565b610b1b575f610b21565b82608001355b90505f610b3c610b376080860160608701611217565b6103b9565b9050815f03610b7257610b72610b586060860160408701611217565b610b686040870160208801611217565b8660800135610e31565b5f80610b816020870187611217565b73ffffffffffffffffffffffffffffffffffffffff1684610ba560a0890189611336565b604051610bb3929190611424565b5f6040518083038185875af1925050503d805f8114610bed576040519150601f19603f3d011682016040523d82523d5f602084013e610bf2565b606091505b509150915081610c0557610c0581610e5d565b5f610c19610b376080890160608a01611217565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888610c4a60208a018a611217565b610c5a60608b0160408c01611217565b610c6a60808c0160608d01611217565b8b60800135898711610c7c5786610c86565b610c868a88611176565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b5f385f3884865af161091e5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610d3c576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610d9057637939f4245f526004601cfd5b5f60605260405250505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000821601610e2857506023015160601c3b151592915050565b5050503b151590565b6103a98383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610e67565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615610f8e5773ffffffffffffffffffffffffffffffffffffffff8316610ed0576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610f43573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f679190611433565b1015610f8e57610f8e73ffffffffffffffffffffffffffffffffffffffff85168483610f94565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610d3c575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610d3c57633e3f8f735f526004601cfd5b5f5f83601f840112611022575f5ffd5b50813567ffffffffffffffff811115611039575f5ffd5b602083019150836020828501011115611050575f5ffd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114611078575f5ffd5b50565b5f5f5f5f5f5f5f5f5f60c08a8c031215611093575f5ffd5b8935985060208a013567ffffffffffffffff8111156110b0575f5ffd5b6110bc8c828d01611012565b90995097505060408a013567ffffffffffffffff8111156110db575f5ffd5b6110e78c828d01611012565b90975095505060608a01356110fb81611057565b935060808a0135925060a08a013567ffffffffffffffff81111561111d575f5ffd5b8a015f80601f83018e1361112f575f5ffd5b50813567ffffffffffffffff811115611146575f5ffd5b6020830191508d60208260051b8501011115611160575f5ffd5b8194508093505050509295985092959850929598565b818103818111156103fd577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261120d575f5ffd5b9190910192915050565b5f60208284031215611227575f5ffd5b813561123281611057565b9392505050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081525f61129360e083018b8d611239565b82810360208401526112a6818a8c611239565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f60208284031215611327575f5ffd5b81358015158114611232575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611369575f5ffd5b83018035915067ffffffffffffffff821115611383575f5ffd5b602001915036819003821315611050575f5ffd5b5f5f858511156113a5575f5ffd5b838611156113b1575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561141d577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611443575f5ffd5b505191905056fea2646970667358221220140a4a569bd908f46dc5f20d657c23a8230009ea55f9160d8644086d307a1de464736f6c634300081d0033";
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
