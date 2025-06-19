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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506115218061001c5f395ff3fe60806040526004361061001d575f3560e01c80634630a0d814610021575b5f5ffd5b61003461002f36600461111c565b610036565b005b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100b1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155845f6100c13447611217565b905073ffffffffffffffffffffffffffffffffffffffff8716610110576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61011e8d8888888c610242565b90505f868661012e600182611217565b81811061013d5761013d61124f565b905060200281019061014f919061127c565b6101609060808101906060016112b8565b905061016d818a84610384565b8d7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378e8e8e8e8e8d8d5f8181106101a6576101a661124f565b90506020028101906101b8919061127c565b6101c99060608101906040016112b8565b888f8f5f8181106101dc576101dc61124f565b90506020028101906101ee919061127c565b608001358b60405161020899989796959493929190611321565b60405180910390a25047905081811115610230576102305f8461022b8585611217565b610384565b50505f90915550505050505050505050565b5f8280820361027d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561028b600185611217565b81811061029a5761029a61124f565b90506020028101906102ac919061127c565b6102bd9060808101906060016112b8565b90505f6102c9826103b9565b905073ffffffffffffffffffffffffffffffffffffffff82166102f3576102f03482611217565b90505b5f6102fe8888610403565b905061030a888861050d565b6103178a89898985610579565b5f82610322856103b9565b61032c9190611217565b905089811015610376576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166103ae576103a9828261073b565b505050565b6103a98383836107ac565b5f73ffffffffffffffffffffffffffffffffffffffff8216156103fb576103f673ffffffffffffffffffffffffffffffffffffffff83163061081a565b6103fd565b475b92915050565b6060815f8167ffffffffffffffff8111156104205761042061138b565b604051908082528060200260200182016040528015610449578160200160208202803683370190505b5090505f805b83811015610502578686828181106104695761046961124f565b905060200281019061047b919061127c565b61048c9060808101906060016112b8565b9150610497826103b9565b8382815181106104a9576104a961124f565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166104fa57348382815181106104e2576104e261124f565b602002602001018181516104f69190611217565b9052505b60010161044f565b509095945050505050565b5f5b818110156103a9573683838381811061052a5761052a61124f565b905060200281019061053c919061127c565b905061054e60e0820160c083016113b8565b156105705761057061056660608301604084016112b8565b826080013561084d565b5060010161050f565b83838383825f5b8181101561072157368a8a8381811061059b5761059b61124f565b90506020028101906105ad919061127c565b90506105dc6105c260608301604084016112b8565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061063e575061063e6105f560408301602084016112b8565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561065557506106556105f560208301836112b8565b80156106d857506106d861066c60a08301836113d7565b61067a916004915f91611438565b6106839161145f565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61070e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107188c826108fd565b50600101610580565b5050610730848484845f610b6d565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610788576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107a873ffffffffffffffffffffffffffffffffffffffff831682610d84565b5050565b73ffffffffffffffffffffffffffffffffffffffff82166107f9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103a973ffffffffffffffffffffffffffffffffffffffff84168383610d9d565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f03610886576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166108db57803410156107a8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107a873ffffffffffffffffffffffffffffffffffffffff8316333084610de6565b61091261090d60208301836112b8565b610e3e565b610948576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610987576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61099b6105c260608501604086016112b8565b6109a5575f6109ab565b82608001355b90505f6109c66109c160808601606087016112b8565b6103b9565b9050815f036109fc576109fc6109e260608601604087016112b8565b6109f260408701602088016112b8565b8660800135610ed2565b5f80610a0b60208701876112b8565b73ffffffffffffffffffffffffffffffffffffffff1684610a2f60a08901896113d7565b604051610a3d9291906114c5565b5f6040518083038185875af1925050503d805f8114610a77576040519150601f19603f3d011682016040523d82523d5f602084013e610a7c565b606091505b509150915081610a8f57610a8f81610efe565b5f610aa36109c16080890160608a016112b8565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888610ad460208a018a6112b8565b610ae460608b0160408c016112b8565b610af460808c0160608d016112b8565b8b60800135898711610b065786610b10565b610b108a88611217565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682610b7c600182611217565b818110610b8b57610b8b61124f565b9050602002810190610b9d919061127c565b610bae9060808101906060016112b8565b90505f8080808080805b88811015610d7457610bcb60018a611217565b81108015610bda575088600114155b15610cb5578d8d82818110610bf157610bf161124f565b9050602002810190610c03919061127c565b610c149060808101906060016112b8565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614610cb5578a8181518110610c5b57610c5b61124f565b6020026020010151610c6c876103b9565b610c769190611217565b965073ffffffffffffffffffffffffffffffffffffffff861615610c9a575f610c9c565b895b935083871115610cb557610cb5868d61022b878b611217565b8d8d82818110610cc757610cc761124f565b9050602002810190610cd9919061127c565b610cea9060608101906040016112b8565b9450610cf5856103b9565b925073ffffffffffffffffffffffffffffffffffffffff851615610d19575f610d1b565b895b91508183118015610d5857508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15610d6c57610d6c858d61022b8587611217565b600101610bb8565b5050505050505050505050505050565b5f385f3884865af16107a85763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610ddd576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610e3157637939f4245f526004601cfd5b5f60605260405250505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000821601610ec957506023015160601c3b151592915050565b5050503b151590565b6103a98383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610f08565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff84161561102f5773ffffffffffffffffffffffffffffffffffffffff8316610f71576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610fe4573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061100891906114d4565b101561102f5761102f73ffffffffffffffffffffffffffffffffffffffff85168483611035565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610ddd575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610ddd57633e3f8f735f526004601cfd5b5f5f83601f8401126110c3575f5ffd5b50813567ffffffffffffffff8111156110da575f5ffd5b6020830191508360208285010111156110f1575f5ffd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114611119575f5ffd5b50565b5f5f5f5f5f5f5f5f5f60c08a8c031215611134575f5ffd5b8935985060208a013567ffffffffffffffff811115611151575f5ffd5b61115d8c828d016110b3565b90995097505060408a013567ffffffffffffffff81111561117c575f5ffd5b6111888c828d016110b3565b90975095505060608a013561119c816110f8565b935060808a0135925060a08a013567ffffffffffffffff8111156111be575f5ffd5b8a015f80601f83018e136111d0575f5ffd5b50813567ffffffffffffffff8111156111e7575f5ffd5b6020830191508d60208260051b8501011115611201575f5ffd5b8194508093505050509295985092959850929598565b818103818111156103fd577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126112ae575f5ffd5b9190910192915050565b5f602082840312156112c8575f5ffd5b81356112d3816110f8565b9392505050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081525f61133460e083018b8d6112da565b8281036020840152611347818a8c6112da565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f602082840312156113c8575f5ffd5b813580151581146112d3575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261140a575f5ffd5b83018035915067ffffffffffffffff821115611424575f5ffd5b6020019150368190038213156110f1575f5ffd5b5f5f85851115611446575f5ffd5b83861115611452575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156114be577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f602082840312156114e4575f5ffd5b505191905056fea2646970667358221220babec0b20655b17e5d880839dc06eb7d2b14f2c1bb9e47d2aa282e35fef0cca164736f6c634300081d0033";
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
