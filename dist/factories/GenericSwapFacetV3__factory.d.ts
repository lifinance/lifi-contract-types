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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051611e77380380611e7783398101604081905261002e9161003f565b6001600160a01b031660805261006c565b5f6020828403121561004f575f5ffd5b81516001600160a01b0381168114610065575f5ffd5b9392505050565b608051611dc96100ae5f395f81816101270152818161051401528181610582015281816107d40152818161086e01528181610f0701526115960152611dc95ff3fe60806040526004361061006e575f3560e01c8063733214a31161004c578063733214a3146100d1578063736eac0b146100f0578063af7060fd14610103578063d5bcb61014610116575f5ffd5b80632c57e884146100725780634666fc80146100935780635fd9ae2e146100b2575b5f5ffd5b34801561007d575f5ffd5b5061009161008c366004611935565b610172565b005b34801561009e575f5ffd5b506100916100ad366004611a29565b6101a4565b3480156100bd575f5ffd5b506100916100cc366004611935565b610394565b3480156100dc575f5ffd5b506100916100eb366004611a29565b6103bb565b6100916100fe366004611935565b61039e565b610091610111366004611a29565b6105b8565b348015610121575f5ffd5b506101497f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61017c82826108bd565b61018882828b87610932565b610199898989898989898989610dce565b505050505050505050565b6101ae8184610f79565b5f6101bf6080830160608401611aec565b90505f6101d26060840160408501611aec565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529091505f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561023f573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102639190611b0e565b9050848110156102ae576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101869052602481018290526044015b60405180910390fd5b6102b9838783611150565b60808401357f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c6102ed6020880188611aec565b6040805192835273ffffffffffffffffffffffffffffffffffffffff918216602084015281871690830152861660608201526080810183905260a081018490524260c082015260e00160405180910390a18b7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378c8c8c8c8c898b898b60405161037e99989796959493929190611b6c565b60405180910390a2505050505050505050505050565b61039e82826108bd565b6103aa82828b87610932565b6101998989898989898989896111c3565b6103c58184610f79565b478281101561040a576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101849052602481018290526044016102a5565b5f8473ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610460576040519150601f19603f3d011682016040523d82523d5f602084013e610465565b606091505b50509050806104a0576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6104b16060850160408601611aec565b905060808401357f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c6104e76020880188611aec565b6040805192835273ffffffffffffffffffffffffffffffffffffffff9182166020840152818616908301527f00000000000000000000000000000000000000000000000000000000000000001660608201526080810183905260a081018690524260c082015260e00160405180910390a18b7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378c8c8c8c8c887f0000000000000000000000000000000000000000000000000000000000000000898d60405161037e99989796959493929190611b6c565b5f6105c66020830183611aec565b90506105f5816105d960a0850185611bd6565b6105e7916004915f91611c37565b6105f091611c5e565b611380565b61062b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8073ffffffffffffffffffffffffffffffffffffffff83163461065260a0870187611bd6565b604051610660929190611cc4565b5f6040518083038185875af1925050503d805f811461069a576040519150601f19603f3d011682016040523d82523d5f602084013e61069f565b606091505b5091509150816106b2576106b2816113fb565b6106bb86611405565b5f6106cc6080860160608701611aec565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529091505f9073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610739573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061075d9190611b0e565b9050868110156107a3576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101889052602481018290526044016102a5565b6107ae828983611150565b604080518e815273ffffffffffffffffffffffffffffffffffffffff87811660208301527f00000000000000000000000000000000000000000000000000000000000000008116828401528416606082015260808881013590820181905260a082018490524260c083015291517f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b389181900360e00190a18d7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378e8e8e8e8e7f00000000000000000000000000000000000000000000000000000000000000008a898b6040516108a599989796959493929190611b6c565b60405180910390a25050505050505050505050505050565b80365f5b8281101561092b578484828181106108db576108db611cd3565b90506020028101906108ed9190611d00565b91506108ff60e0830160c08401611d3c565b15610923576109236109176060840160408501611aec565b333085608001356114a6565b6001016108c1565b5050505050565b825f8036816060815b86811015610dc1578a8a8281811061095557610955611cd3565b90506020028101906109679190611d00565b93506109796060850160408601611aec565b955061098b6080850160608601611aec565b94506109aa61099d6020860186611aec565b6105d960a0870187611bd6565b6109e0576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109ed6020850185611aec565b73ffffffffffffffffffffffffffffffffffffffff16610a136040860160208701611aec565b73ffffffffffffffffffffffffffffffffffffffff1614158015610a6d5750610a6b610a456040860160208701611aec565b7fffffffff00000000000000000000000000000000000000000000000000000000611380565b155b15610aa4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8616610b9657610acc6020850185611aec565b73ffffffffffffffffffffffffffffffffffffffff166080850135610af460a0870187611bd6565b604051610b02929190611cc4565b5f6040518083038185875af1925050503d805f8114610b3c576040519150601f19603f3d011682016040523d82523d5f602084013e610b41565b606091505b50909350915082610b5557610b55826113fb565b8473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614610b9157610b9188611405565b610c81565b610bb486610baa6040870160208801611aec565b8660800135611568565b610bc16020850185611aec565b73ffffffffffffffffffffffffffffffffffffffff16610be460a0860186611bd6565b604051610bf2929190611cc4565b5f604051808303815f865af19150503d805f8114610c2b576040519150601f19603f3d011682016040523d82523d5f602084013e610c30565b606091505b50909350915082610c4457610c44826113fb565b8473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614610c8157610c818689611594565b7f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889610cb06020870187611aec565b8888608089013573ffffffffffffffffffffffffffffffffffffffff821615610d64576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8c16906370a0823190602401602060405180830381865afa158015610d3b573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d5f9190611b0e565b610d66565b475b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a160010161093b565b5050505050505050505050565b4783811015610e13576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101859052602481018290526044016102a5565b5f8573ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610e69576040519150601f19603f3d011682016040523d82523d5f602084013e610e6e565b606091505b5050905080610ea9576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378b8b8b8b8b8a8a5f818110610ee257610ee2611cd3565b9050602002810190610ef49190611d00565b610f05906060810190604001611aec565b7f00000000000000000000000000000000000000000000000000000000000000008c8c5f818110610f3857610f38611cd3565b9050602002810190610f4a9190611d00565b608001358b604051610f6499989796959493929190611b6c565b60405180910390a25050505050505050505050565b5f610f8a6060840160408501611aec565b90506080830135610f9d823330846114a6565b5f610fab6020860186611aec565b90505f610fbe6040870160208801611aec565b9050365f610fcf60a0890189611bd6565b9092509050610fe5846105e760045f8587611c37565b61101b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561107e575061107c837fffffffff00000000000000000000000000000000000000000000000000000000611380565b155b156110b5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110c0868487611568565b5f5f8573ffffffffffffffffffffffffffffffffffffffff1684846040516110e9929190611cc4565b5f604051808303815f865af19150503d805f8114611122576040519150601f19603f3d011682016040523d82523d5f602084013e611127565b606091505b50915091508161113a5761113a816113fb565b611144888a611594565b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff821661119d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111be73ffffffffffffffffffffffffffffffffffffffff8416838361168b565b505050565b5f82826111d1600182611d5b565b8181106111e0576111e0611cd3565b90506020028101906111f29190611d00565b611203906080810190606001611aec565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529091505f9073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611270573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112949190611b0e565b9050848110156112da576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101869052602481018290526044016102a5565b6112e5828783611150565b8a7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378b8b8b8b8b8a8a5f81811061131e5761131e611cd3565b90506020028101906113309190611d00565b611341906060810190604001611aec565b898c8c5f81811061135457611354611cd3565b90506020028101906113669190611d00565b608001358a604051610f6499989796959493929190611b6c565b73ffffffffffffffffffffffffffffffffffffffff82165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000008516845290915290205460ff165b92915050565b8051602082018181fd5b4780156114a2575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114611462576040519150601f19603f3d011682016040523d82523d5f602084013e611467565b606091505b50509050806111be576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b73ffffffffffffffffffffffffffffffffffffffff84166114f3576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611540576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61156273ffffffffffffffffffffffffffffffffffffffff85168484846116d4565b50505050565b6111be8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61172c565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146114a2576040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611651573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116759190611b0e565b905060018111156111be576111be838383611150565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166116cb576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661171f57637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff8416156115625773ffffffffffffffffffffffffffffffffffffffff8316611795576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611808573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061182c9190611b0e565b10156115625761156273ffffffffffffffffffffffffffffffffffffffff8516848381601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166116cb575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166116cb57633e3f8f735f526004601cfd5b5f5f83601f8401126118dc575f5ffd5b50813567ffffffffffffffff8111156118f3575f5ffd5b60208301915083602082850101111561190a575f5ffd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114611932575f5ffd5b50565b5f5f5f5f5f5f5f5f5f60c08a8c03121561194d575f5ffd5b8935985060208a013567ffffffffffffffff81111561196a575f5ffd5b6119768c828d016118cc565b90995097505060408a013567ffffffffffffffff811115611995575f5ffd5b6119a18c828d016118cc565b90975095505060608a01356119b581611911565b935060808a0135925060a08a013567ffffffffffffffff8111156119d7575f5ffd5b8a01601f81018c136119e7575f5ffd5b803567ffffffffffffffff8111156119fd575f5ffd5b8c60208260051b8401011115611a11575f5ffd5b60208201935080925050509295985092959850929598565b5f5f5f5f5f5f5f5f60c0898b031215611a40575f5ffd5b88359750602089013567ffffffffffffffff811115611a5d575f5ffd5b611a698b828c016118cc565b909850965050604089013567ffffffffffffffff811115611a88575f5ffd5b611a948b828c016118cc565b9096509450506060890135611aa881611911565b92506080890135915060a089013567ffffffffffffffff811115611aca575f5ffd5b890160e0818c031215611adb575f5ffd5b809150509295985092959890939650565b5f60208284031215611afc575f5ffd5b8135611b0781611911565b9392505050565b5f60208284031215611b1e575f5ffd5b5051919050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081525f611b7f60e083018b8d611b25565b8281036020840152611b92818a8c611b25565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611c09575f5ffd5b83018035915067ffffffffffffffff821115611c23575f5ffd5b60200191503681900382131561190a575f5ffd5b5f5f85851115611c45575f5ffd5b83861115611c51575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611cbd577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611d32575f5ffd5b9190910192915050565b5f60208284031215611d4c575f5ffd5b81358015158114611b07575f5ffd5b818103818111156113f5577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffdfea26469706673582212205e9d84b6fa41f839854a96154c00851d70fe655dccff7d05630bf266cb8132f964736f6c634300081d0033";
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
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }];
    static createInterface(): GenericSwapFacetV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): GenericSwapFacetV3;
}
export {};
