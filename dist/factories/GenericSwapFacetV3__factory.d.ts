import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GenericSwapFacetV3, GenericSwapFacetV3Interface } from "../GenericSwapFacetV3";
declare type GenericSwapFacetV3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GenericSwapFacetV3__factory extends ContractFactory {
    constructor(...args: GenericSwapFacetV3ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GenericSwapFacetV3>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GenericSwapFacetV3;
    connect(signer: Signer): GenericSwapFacetV3__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611f89806100206000396000f3fe6080604052600436106100655760003560e01c8063733214a311610043578063733214a3146100a5578063736eac0b146100b8578063af7060fd146100cb57600080fd5b80632c57e8841461006a5780634666fc801461007f5780635fd9ae2e14610092575b600080fd5b61007d610078366004611af9565b6100de565b005b61007d61008d366004611bea565b610110565b61007d6100a0366004611af9565b61031b565b61007d6100b3366004611bea565b610342565b61007d6100c6366004611af9565b610325565b61007d6100d9366004611bea565b61052f565b6100e882826108ea565b6100f482828b87610979565b610105898989898989898989610ff6565b505050505050505050565b61011a8184611188565b600061012c6080830160608401611cac565b905060006101406060840160408501611cac565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156101b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d49190611cd0565b90508481101561021f576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101869052602481018290526044015b60405180910390fd5b61024073ffffffffffffffffffffffffffffffffffffffff841687836114f3565b60808401357f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c6102746020880188611cac565b6040805192835273ffffffffffffffffffffffffffffffffffffffff918216602084015281871690830152861660608201526080810183905260a081018490524260c082015260e00160405180910390a18b7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378c8c8c8c8c898b898b60405161030599989796959493929190611d32565b60405180910390a2505050505050505050505050565b61032582826108ea565b61033182828b87610979565b6101058989898989898989896115ac565b61034c8184611188565b4782811015610391576040517f275c273c0000000000000000000000000000000000000000000000000000000081526004810184905260248101829052604401610216565b60008473ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146103eb576040519150601f19603f3d011682016040523d82523d6000602084013e6103f0565b606091505b505090508061042b576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061043d6080850160608601611cac565b905060006104516060860160408701611cac565b905060808501357f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388d6104876020890189611cac565b6040805192835273ffffffffffffffffffffffffffffffffffffffff918216602084015281861690830152851660608201526080810183905260a081018790524260c082015260e00160405180910390a18c7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378d8d8d8d8d888a898e60405161051899989796959493929190611d32565b60405180910390a250505050505050505050505050565b600061053e6020830183611cac565b905061058e8173ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561061357506106136105a560a0840184611d9d565b6105b491600491600091611e02565b6105bd91611e2c565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610649576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008073ffffffffffffffffffffffffffffffffffffffff83163461067160a0870187611d9d565b60405161067f929190611e74565b60006040518083038185875af1925050503d80600081146106bc576040519150601f19603f3d011682016040523d82523d6000602084013e6106c1565b606091505b5091509150816106d4576106d481611785565b6106dd8661178f565b60006106ef6080860160608701611cac565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561075f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107839190611cd0565b9050868110156107c9576040517f275c273c0000000000000000000000000000000000000000000000000000000081526004810188905260248101829052604401610216565b6107ea73ffffffffffffffffffffffffffffffffffffffff831689836114f3565b60006107fc6060880160408901611cac565b90506000876080013590507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388f888487858842604051610889979695949392919096875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385166040870152919093166060850152608084019290925260a083019190915260c082015260e00190565b60405180910390a18e7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378f8f8f8f8f888b898c6040516108d199989796959493929190611d32565b60405180910390a2505050505050505050505050505050565b8060005b81811015610973573684848381811061090957610909611e84565b905060200281019061091b9190611eb3565b905061092d60e0820160c08301611ef1565b1561096a5761096a3330608084013561094c6060860160408701611cac565b73ffffffffffffffffffffffffffffffffffffffff16929190611836565b506001016108ee565b50505050565b8260005b81811015610fee573686868381811061099857610998611e84565b90506020028101906109aa9190611eb3565b905060006109be6060830160408401611cac565b9050610a1a6109d06020840184611cac565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b1580610a335750610a316105a560a0840184611d9d565b155b15610a6a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a776020830183611cac565b73ffffffffffffffffffffffffffffffffffffffff16610a9d6040840160208501611cac565b73ffffffffffffffffffffffffffffffffffffffff1614158015610ad15750610acf6109d06040840160208501611cac565b155b15610b08576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b35610b1b6060840160408501611cac565b73ffffffffffffffffffffffffffffffffffffffff161590565b15610c3657600080610b4a6020850185611cac565b73ffffffffffffffffffffffffffffffffffffffff166080850135610b7260a0870187611d9d565b604051610b80929190611e74565b60006040518083038185875af1925050503d8060008114610bbd576040519150601f19603f3d011682016040523d82523d6000602084013e610bc2565b606091505b509150915081610bd557610bd581611785565b610be56080850160608601611cac565b73ffffffffffffffffffffffffffffffffffffffff16610c0b6060860160408701611cac565b73ffffffffffffffffffffffffffffffffffffffff1614610c2f57610c2f8761178f565b5050610e7f565b600073ffffffffffffffffffffffffffffffffffffffff821663dd62ed3e30610c656040870160208801611cac565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff928316600482015291166024820152604401602060405180830381865afa158015610cd5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf99190611cd0565b90508260800135811015610d8a57610d39610d1a6040850160208601611cac565b73ffffffffffffffffffffffffffffffffffffffff84169060006118fc565b610d8a610d4c6040850160208601611cac565b73ffffffffffffffffffffffffffffffffffffffff8416907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118fc565b600080610d9a6020860186611cac565b73ffffffffffffffffffffffffffffffffffffffff16610dbd60a0870187611d9d565b604051610dcb929190611e74565b6000604051808303816000865af19150503d8060008114610e08576040519150601f19603f3d011682016040523d82523d6000602084013e610e0d565b606091505b509150915081610e2057610e2081611785565b610e306080860160608701611cac565b73ffffffffffffffffffffffffffffffffffffffff16610e566060870160408801611cac565b73ffffffffffffffffffffffffffffffffffffffff1614610e7b57610e7b84896119b5565b5050505b7f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3886610eae6020850185611cac565b610ebe6060860160408701611cac565b610ece6080870160608801611cac565b60808701803590610ee690610b1b9060608b01611cac565b610f8f57610efa6080890160608a01611cac565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa158015610f66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8a9190611cd0565b610f91565b475b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505060010161097d565b505050505050565b478381101561103b576040517f275c273c0000000000000000000000000000000000000000000000000000000081526004810185905260248101829052604401610216565b60008573ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611095576040519150601f19603f3d011682016040523d82523d6000602084013e61109a565b606091505b50509050806110d5576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378b8b8b8b8b8a8a600081811061110f5761110f611e84565b90506020028101906111219190611eb3565b611132906060810190604001611cac565b60008c8c600081811061114757611147611e84565b90506020028101906111599190611eb3565b608001358b60405161117399989796959493929190611d32565b60405180910390a25050505050505050505050565b600061119a6060840160408501611cac565b905060808301356111c373ffffffffffffffffffffffffffffffffffffffff8316333084611836565b60006111d26020860186611cac565b905060006111e66040870160208801611cac565b90503660006111f860a0890189611d9d565b9150915061124a8473ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561126257506112626105b4600460008486611e02565b611298576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611319575073ffffffffffffffffffffffffffffffffffffffff831660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff16155b15611350576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff84811660248301526000919088169063dd62ed3e90604401602060405180830381865afa1580156113c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ea9190611cd0565b90508581101561145d57801561141c5761141c73ffffffffffffffffffffffffffffffffffffffff88168560006118fc565b61145d73ffffffffffffffffffffffffffffffffffffffff8816857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118fc565b6000808673ffffffffffffffffffffffffffffffffffffffff168585604051611487929190611e74565b6000604051808303816000865af19150503d80600081146114c4576040519150601f19603f3d011682016040523d82523d6000602084013e6114c9565b606091505b5091509150816114dc576114dc81611785565b6114e6898b6119b5565b5050505050505050505050565b60006040517fa9059cbb000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080610973576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c454400000000000000000000000000000000006044820152606401610216565b600082826115bb600182611f13565b8181106115ca576115ca611e84565b90506020028101906115dc9190611eb3565b6115ed906080810190606001611cac565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561165d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116819190611cd0565b9050848110156116c7576040517f275c273c0000000000000000000000000000000000000000000000000000000081526004810186905260248101829052604401610216565b6116e873ffffffffffffffffffffffffffffffffffffffff831687836114f3565b8a7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378b8b8b8b8b8a8a600081811061172257611722611e84565b90506020028101906117349190611eb3565b611745906060810190604001611cac565b898c8c600081811061175957611759611e84565b905060200281019061176b9190611eb3565b608001358a60405161117399989796959493929190611d32565b8051602082018181fd5b4780156118325760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146117f0576040519150601f19603f3d011682016040523d82523d6000602084013e6117f5565b606091505b5050905080611830576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b5050565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d11600160005114161716915050806118f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152606401610216565b5050505050565b60006040517f095ea7b3000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080610973576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f415050524f56455f4641494c45440000000000000000000000000000000000006044820152606401610216565b73ffffffffffffffffffffffffffffffffffffffff821615611832576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611a3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a629190611cd0565b905080156118305761183073ffffffffffffffffffffffffffffffffffffffff841683836114f3565b60008083601f840112611a9d57600080fd5b50813567ffffffffffffffff811115611ab557600080fd5b602083019150836020828501011115611acd57600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114611af657600080fd5b50565b600080600080600080600080600060c08a8c031215611b1757600080fd5b8935985060208a013567ffffffffffffffff80821115611b3657600080fd5b611b428d838e01611a8b565b909a50985060408c0135915080821115611b5b57600080fd5b611b678d838e01611a8b565b909850965060608c01359150611b7c82611ad4565b90945060808b0135935060a08b01359080821115611b9957600080fd5b818c0191508c601f830112611bad57600080fd5b813581811115611bbc57600080fd5b8d60208260051b8501011115611bd157600080fd5b6020830194508093505050509295985092959850929598565b60008060008060008060008060c0898b031215611c0657600080fd5b88359750602089013567ffffffffffffffff80821115611c2557600080fd5b611c318c838d01611a8b565b909950975060408b0135915080821115611c4a57600080fd5b611c568c838d01611a8b565b909750955060608b01359150611c6b82611ad4565b90935060808a0135925060a08a01359080821115611c8857600080fd5b50890160e0818c031215611c9b57600080fd5b809150509295985092959890939650565b600060208284031215611cbe57600080fd5b8135611cc981611ad4565b9392505050565b600060208284031215611ce257600080fd5b5051919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081526000611d4660e083018b8d611ce9565b8281036020840152611d59818a8c611ce9565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611dd257600080fd5b83018035915067ffffffffffffffff821115611ded57600080fd5b602001915036819003821315611acd57600080fd5b60008085851115611e1257600080fd5b83861115611e1f57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611e6c5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611ee757600080fd5b9190910192915050565b600060208284031215611f0357600080fd5b81358015158114611cc957600080fd5b81810381811115611f4d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9291505056fea2646970667358221220aacd6ebadc74469a855554530afb09c64e46ef15ad75ce498d30907eb20973ec64736f6c63430008110033";
    static readonly abi: readonly [{
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
        readonly stateMutability: "payable";
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
        readonly stateMutability: "payable";
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
        readonly stateMutability: "payable";
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
        readonly stateMutability: "payable";
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
