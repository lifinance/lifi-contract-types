import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GenericSwapFacetV3, GenericSwapFacetV3Interface } from "../GenericSwapFacetV3";
type GenericSwapFacetV3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GenericSwapFacetV3__factory extends ContractFactory {
    constructor(...args: GenericSwapFacetV3ConstructorParams);
    deploy(_nativeAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GenericSwapFacetV3>;
    getDeployTransaction(_nativeAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GenericSwapFacetV3;
    connect(signer: Signer): GenericSwapFacetV3__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161209c38038061209c83398101604081905261002e9161003f565b6001600160a01b031660805261006c565b5f6020828403121561004f575f5ffd5b81516001600160a01b0381168114610065575f5ffd5b9392505050565b608051611fee6100ae5f395f81816101270152818161052a01528181610598015281816108a30152818161093d0152818161116601526119e00152611fee5ff3fe60806040526004361061006e575f3560e01c8063733214a31161004c578063733214a3146100d1578063736eac0b146100f0578063af7060fd14610103578063d5bcb61014610116575f5ffd5b80632c57e884146100725780634666fc80146100935780635fd9ae2e146100b2575b5f5ffd5b34801561007d575f5ffd5b5061009161008c366004611b54565b610172565b005b34801561009e575f5ffd5b506100916100ad366004611c48565b6101a4565b3480156100bd575f5ffd5b506100916100cc366004611b54565b6103aa565b3480156100dc575f5ffd5b506100916100eb366004611c48565b6103d1565b6100916100fe366004611b54565b6103b4565b610091610111366004611c48565b6105ce565b348015610121575f5ffd5b506101497f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61017c828261098c565b61018882828b87610a1a565b61019989898989898989898961102d565b505050505050505050565b6101ae81846111d8565b5f6101bf6080830160608401611d0b565b90505f6101d26060840160408501611d0b565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529091505f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561023f573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102639190611d2d565b9050848110156102ae576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101869052602481018290526044015b60405180910390fd5b6102cf73ffffffffffffffffffffffffffffffffffffffff84168783611533565b60808401357f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c6103036020880188611d0b565b6040805192835273ffffffffffffffffffffffffffffffffffffffff918216602084015281871690830152861660608201526080810183905260a081018490524260c082015260e00160405180910390a18b7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378c8c8c8c8c898b898b60405161039499989796959493929190611d8b565b60405180910390a2505050505050505050505050565b6103b4828261098c565b6103c082828b87610a1a565b6101998989898989898989896115ee565b6103db81846111d8565b4782811015610420576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101849052602481018290526044016102a5565b5f8473ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610476576040519150601f19603f3d011682016040523d82523d5f602084013e61047b565b606091505b50509050806104b6576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6104c76060850160408601611d0b565b905060808401357f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c6104fd6020880188611d0b565b6040805192835273ffffffffffffffffffffffffffffffffffffffff9182166020840152818616908301527f00000000000000000000000000000000000000000000000000000000000000001660608201526080810183905260a081018690524260c082015260e00160405180910390a18b7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378c8c8c8c8c887f0000000000000000000000000000000000000000000000000000000000000000898d60405161039499989796959493929190611d8b565b5f6105dc6020830183611d0b565b905061062b8173ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156106ae57506106ae61064260a0840184611df5565b610650916004915f91611e56565b61065991611e7d565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6106e4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8073ffffffffffffffffffffffffffffffffffffffff83163461070b60a0870187611df5565b604051610719929190611ee3565b5f6040518083038185875af1925050503d805f8114610753576040519150601f19603f3d011682016040523d82523d5f602084013e610758565b606091505b50915091508161076b5761076b816117c1565b610774866117cb565b5f6107856080860160608701611d0b565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529091505f9073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156107f2573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108169190611d2d565b90508681101561085c576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101889052602481018290526044016102a5565b61087d73ffffffffffffffffffffffffffffffffffffffff83168983611533565b604080518e815273ffffffffffffffffffffffffffffffffffffffff87811660208301527f00000000000000000000000000000000000000000000000000000000000000008116828401528416606082015260808881013590820181905260a082018490524260c083015291517f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b389181900360e00190a18d7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378e8e8e8e8e7f00000000000000000000000000000000000000000000000000000000000000008a898b60405161097499989796959493929190611d8b565b60405180910390a25050505050505050505050505050565b80365f5b82811015610a13578484828181106109aa576109aa611ef2565b90506020028101906109bc9190611f1f565b91506109ce60e0830160c08401611f5b565b15610a0b57610a0b333060808501356109ed6060870160408801611d0b565b73ffffffffffffffffffffffffffffffffffffffff1692919061186e565b600101610990565b5050505050565b825f80803681606081805b8881101561101e578c8c82818110610a3f57610a3f611ef2565b9050602002810190610a519190611f1f565b9450610a636060860160408701611d0b565b9650610a756060860160408701611d0b565b9750610a876080860160608701611d0b565b9550610ae2610a996020870187611d0b565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b1580610afb5750610af961064260a0870187611df5565b155b15610b32576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b3f6020860186611d0b565b73ffffffffffffffffffffffffffffffffffffffff16610b656040870160208801611d0b565b73ffffffffffffffffffffffffffffffffffffffff1614158015610b995750610b97610a996040870160208801611d0b565b155b15610bd0576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8716610cc257610bf86020860186611d0b565b73ffffffffffffffffffffffffffffffffffffffff166080860135610c2060a0880188611df5565b604051610c2e929190611ee3565b5f6040518083038185875af1925050503d805f8114610c68576040519150601f19603f3d011682016040523d82523d5f602084013e610c6d565b606091505b50909450925083610c8157610c81836117c1565b8573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614610cbd57610cbd8a6117cb565b610ede565b73ffffffffffffffffffffffffffffffffffffffff881663dd62ed3e30610cef6040890160208a01611d0b565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff928316600482015291166024820152604401602060405180830381865afa158015610d5d573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d819190611d2d565b91508460800135821015610e1157610dc0610da26040870160208801611d0b565b73ffffffffffffffffffffffffffffffffffffffff8a16905f611929565b610e11610dd36040870160208801611d0b565b73ffffffffffffffffffffffffffffffffffffffff8a16907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611929565b610e1e6020860186611d0b565b73ffffffffffffffffffffffffffffffffffffffff16610e4160a0870187611df5565b604051610e4f929190611ee3565b5f604051808303815f865af19150503d805f8114610e88576040519150601f19603f3d011682016040523d82523d5f602084013e610e8d565b606091505b50909450925083610ea157610ea1836117c1565b8573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614610ede57610ede888b6119de565b7f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388b610f0d6020880188611d0b565b898960808a013573ffffffffffffffffffffffffffffffffffffffff821615610fc1576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8d16906370a0823190602401602060405180830381865afa158015610f98573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fbc9190611d2d565b610fc3565b475b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1600101610a25565b50505050505050505050505050565b4783811015611072576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101859052602481018290526044016102a5565b5f8573ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146110c8576040519150601f19603f3d011682016040523d82523d5f602084013e6110cd565b606091505b5050905080611108576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378b8b8b8b8b8a8a5f81811061114157611141611ef2565b90506020028101906111539190611f1f565b611164906060810190604001611d0b565b7f00000000000000000000000000000000000000000000000000000000000000008c8c5f81811061119757611197611ef2565b90506020028101906111a99190611f1f565b608001358b6040516111c399989796959493929190611d8b565b60405180910390a25050505050505050505050565b5f6111e96060840160408501611d0b565b9050608083013561121273ffffffffffffffffffffffffffffffffffffffff831633308461186e565b5f6112206020860186611d0b565b90505f6112336040870160208801611d0b565b9050365f61124460a0890189611df5565b915091506112958473ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112ac57506112ac61065060045f8486611e56565b6112e2576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611362575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff16155b15611399576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff84811660248301525f919088169063dd62ed3e90604401602060405180830381865afa15801561140c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114309190611d2d565b9050858110156114a25780156114615761146173ffffffffffffffffffffffffffffffffffffffff8816855f611929565b6114a273ffffffffffffffffffffffffffffffffffffffff8816857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611929565b5f5f8673ffffffffffffffffffffffffffffffffffffffff1685856040516114cb929190611ee3565b5f604051808303815f865af19150503d805f8114611504576040519150601f19603f3d011682016040523d82523d5f602084013e611509565b606091505b50915091508161151c5761151c816117c1565b611526898b6119de565b5050505050505050505050565b5f6040517fa9059cbb00000000000000000000000000000000000000000000000000000000815283600482015282602482015260205f6044835f895af13d15601f3d1160015f5114161716915050806115e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c4544000000000000000000000000000000000060448201526064016102a5565b50505050565b5f82826115fc600182611f7a565b81811061160b5761160b611ef2565b905060200281019061161d9190611f1f565b61162e906080810190606001611d0b565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529091505f9073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561169b573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116bf9190611d2d565b905084811015611705576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101869052602481018290526044016102a5565b61172673ffffffffffffffffffffffffffffffffffffffff83168783611533565b8a7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378b8b8b8b8b8a8a5f81811061175f5761175f611ef2565b90506020028101906117719190611f1f565b611782906060810190604001611d0b565b898c8c5f81811061179557611795611ef2565b90506020028101906117a79190611f1f565b608001358a6040516111c399989796959493929190611d8b565b8051602082018181fd5b47801561186a575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114611828576040519150601f19603f3d011682016040523d82523d5f602084013e61182d565b606091505b5050905080611868576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b5050565b5f6040517f23b872dd00000000000000000000000000000000000000000000000000000000815284600482015283602482015282604482015260205f6064835f8a5af13d15601f3d1160015f511416171691505080610a13576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c454400000000000000000000000060448201526064016102a5565b5f6040517f095ea7b300000000000000000000000000000000000000000000000000000000815283600482015282602482015260205f6044835f895af13d15601f3d1160015f5114161716915050806115e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f415050524f56455f4641494c454400000000000000000000000000000000000060448201526064016102a5565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461186a576040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611a9b573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611abf9190611d2d565b905060018111156118685761186873ffffffffffffffffffffffffffffffffffffffff84168383611533565b5f5f83601f840112611afb575f5ffd5b50813567ffffffffffffffff811115611b12575f5ffd5b602083019150836020828501011115611b29575f5ffd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114611b51575f5ffd5b50565b5f5f5f5f5f5f5f5f5f60c08a8c031215611b6c575f5ffd5b8935985060208a013567ffffffffffffffff811115611b89575f5ffd5b611b958c828d01611aeb565b90995097505060408a013567ffffffffffffffff811115611bb4575f5ffd5b611bc08c828d01611aeb565b90975095505060608a0135611bd481611b30565b935060808a0135925060a08a013567ffffffffffffffff811115611bf6575f5ffd5b8a01601f81018c13611c06575f5ffd5b803567ffffffffffffffff811115611c1c575f5ffd5b8c60208260051b8401011115611c30575f5ffd5b60208201935080925050509295985092959850929598565b5f5f5f5f5f5f5f5f60c0898b031215611c5f575f5ffd5b88359750602089013567ffffffffffffffff811115611c7c575f5ffd5b611c888b828c01611aeb565b909850965050604089013567ffffffffffffffff811115611ca7575f5ffd5b611cb38b828c01611aeb565b9096509450506060890135611cc781611b30565b92506080890135915060a089013567ffffffffffffffff811115611ce9575f5ffd5b890160e0818c031215611cfa575f5ffd5b809150509295985092959890939650565b5f60208284031215611d1b575f5ffd5b8135611d2681611b30565b9392505050565b5f60208284031215611d3d575f5ffd5b5051919050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081525f611d9e60e083018b8d611d44565b8281036020840152611db1818a8c611d44565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e28575f5ffd5b83018035915067ffffffffffffffff821115611e42575f5ffd5b602001915036819003821315611b29575f5ffd5b5f5f85851115611e64575f5ffd5b83861115611e70575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611edc577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611f51575f5ffd5b9190910192915050565b5f60208284031215611f6b575f5ffd5b81358015158114611d26575f5ffd5b81810381811115611fb2577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9291505056fea264697066735822122062960983eb177d04371353ed78407cb620c5c8908cd2095a9edf6bb42cf0442664736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_nativeAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "NATIVE_ADDRESS";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "swapTokensMultipleV3ERC20ToERC20";
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
            readonly name: "_minAmountOut";
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
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapTokensMultipleV3ERC20ToNative";
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
            readonly name: "_minAmountOut";
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
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapTokensMultipleV3NativeToERC20";
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
            readonly name: "_minAmountOut";
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
        readonly type: "function";
        readonly name: "swapTokensSingleV3ERC20ToERC20";
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
            readonly name: "_minAmountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
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
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapTokensSingleV3ERC20ToNative";
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
            readonly name: "_minAmountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
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
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapTokensSingleV3NativeToERC20";
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
            readonly name: "_minAmountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
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
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): GenericSwapFacetV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): GenericSwapFacetV3;
}
export {};
