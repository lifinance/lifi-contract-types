import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Executor, ExecutorInterface } from "../Executor";
type ExecutorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Executor__factory extends ContractFactory {
    constructor(...args: ExecutorConstructorParams);
    deploy(_erc20Proxy: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Executor>;
    getDeployTransaction(_erc20Proxy: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Executor;
    connect(signer: Signer): Executor__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50604051611e79380380611e79833981016040819052602b9160a0565b5f80546001600160a01b038084166001600160a01b03199283161783556002805491861691909216811790915560405190917f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a991a2505060cc565b80516001600160a01b0381168114609b575f5ffd5b919050565b5f5f6040838503121560b0575f5ffd5b60b7836086565b915060c3602084016086565b90509250929050565b611da0806100d95f395ff3fe6080604052600436106100d1575f3560e01c80637f555b031161007c578063bc197c8111610057578063bc197c811461026f578063e30c3978146102b3578063f23a6e61146102df578063f2fde38b14610323575f5ffd5b80637f555b03146101e05780638da5cb5b14610231578063a83cbaa31461025c575f5ffd5b806323452b9c116100ac57806323452b9c146101a55780634f91bc2b146101b95780637200b829146101cc575f5ffd5b806301e33667146100dc57806301ffc9a7146100fd578063150b7a0214610131575f5ffd5b366100d857005b5f5ffd5b3480156100e7575f5ffd5b506100fb6100f636600461177c565b610342565b005b348015610108575f5ffd5b5061011c6101173660046117ba565b610433565b60405190151581526020015b60405180910390f35b34801561013c575f5ffd5b5061017461014b366004611906565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610128565b3480156101b0575f5ffd5b506100fb6104cb565b6100fb6101c73660046119b6565b610594565b3480156101d7575f5ffd5b506100fb610632565b3480156101eb575f5ffd5b5060025461020c9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610128565b34801561023c575f5ffd5b505f5461020c9073ffffffffffffffffffffffffffffffffffffffff1681565b6100fb61026a366004611a25565b610716565b34801561027a575f5ffd5b50610174610289366004611b1c565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b3480156102be575f5ffd5b5060015461020c9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102ea575f5ffd5b506101746102f9366004611bcf565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b34801561032e575f5ffd5b506100fb61033d366004611c27565b6107af565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610392576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805f036103cb576040517f1f2a200500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103d683838361090b565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f7fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e00000000000000000000000000000000000000000000000000000000014806104c557507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461051b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661056a576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161060f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815f018190555061062886868686865f6001610940565b5f90555050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610684576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610791576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556107a48787878787875f610940565b5f9055505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146107ff576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661084c576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361089b576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b73ffffffffffffffffffffffffffffffffffffffff8316610935576109308282610c0e565b505050565b610930838383610c7f565b5f80808888610950600182611c42565b81811061095f5761095f611c7a565b90506020028101906109719190611ca7565b610982906080810190606001611c27565b905073ffffffffffffffffffffffffffffffffffffffff8116156109b0576109a981610ced565b91506109c7565b346109ba82610ced565b6109c49190611c42565b91505b73ffffffffffffffffffffffffffffffffffffffff871615610b32576109ec87610ced565b92508315610a9a576040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523360048201523060248201525f9073ffffffffffffffffffffffffffffffffffffffff89169063dd62ed3e90604401602060405180830381865afa158015610a64573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a889190611ce3565b9050610a948882610d36565b50610b49565b6002546040517f15dacbea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015233602483015230604483015260648201889052909116906315dacbea906084015f604051808303815f87803b158015610b17575f5ffd5b505af1158015610b29573d5f5f3e3d5ffd5b50505050610b49565b34610b3c88610ced565b610b469190611c42565b92505b610b558a8a8a89610de6565b5f610b5f88610ced565b905083811115610b7d57610b7d8888610b788785611c42565b61090b565b5f610b8783610ced565b905083811115610ba057610ba08389610b788785611c42565b6040805173ffffffffffffffffffffffffffffffffffffffff808c1682528a1660208201529081018290524260608201528c907fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a2505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c5b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c7b73ffffffffffffffffffffffffffffffffffffffff8316826110f3565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216610ccc576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61093073ffffffffffffffffffffffffffffffffffffffff8416838361110c565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d2f57610d2a73ffffffffffffffffffffffffffffffffffffffff831630611155565b6104c5565b4792915050565b805f03610d6f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610dc45780341015610c7b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c7b73ffffffffffffffffffffffffffffffffffffffff8316333084611188565b8282828160018114611009575f610dfd85856111e0565b90505f8585610e0d600186611c42565b818110610e1c57610e1c611c7a565b9050602002810190610e2e9190611ca7565b610e3f906080810190606001611c27565b90505f88815b81811015610f1f5760025473ffffffffffffffffffffffffffffffffffffffff168c8c83818110610e7857610e78611c7a565b9050602002810190610e8a9190611ca7565b610e98906020810190611c27565b73ffffffffffffffffffffffffffffffffffffffff1603610ee5576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368c8c83818110610ef857610ef8611c7a565b9050602002810190610f0a9190611ca7565b9050610f168e826112ea565b50600101610e45565b505f90505b610f2f600186611c42565b811015611000575f888883818110610f4957610f49611c7a565b9050602002810190610f5b9190611ca7565b610f6c906080810190606001611c27565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ff757610faa81610ced565b9250848281518110610fbe57610fbe611c7a565b6020026020010151831115610ff757610ff78188878581518110610fe457610fe4611c7a565b602002602001015186610b789190611c42565b50600101610f24565b505050506110e9565b855f5b818110156110e65760025473ffffffffffffffffffffffffffffffffffffffff1689898381811061103f5761103f611c7a565b90506020028101906110519190611ca7565b61105f906020810190611c27565b73ffffffffffffffffffffffffffffffffffffffff16036110ac576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368989838181106110bf576110bf611c7a565b90506020028101906110d19190611ca7565b90506110dd8b826112ea565b5060010161100c565b50505b5050505050505050565b5f385f3884865af1610c7b5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661114c576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166111d357637939f4245f526004601cfd5b5f60605260405250505050565b6060815f8167ffffffffffffffff8111156111fd576111fd611800565b604051908082528060200260200182016040528015611226578160200160208202803683370190505b5090505f805b838110156112df5786868281811061124657611246611c7a565b90506020028101906112589190611ca7565b611269906080810190606001611c27565b915061127482610ced565b83828151811061128657611286611c7a565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166112d757348382815181106112bf576112bf611c7a565b602002602001018181516112d39190611c42565b9052505b60010161122c565b509095945050505050565b6113026112fa6020830183611c27565b6017903b1190565b611338576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611377576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6113a561138b6060850160408601611c27565b73ffffffffffffffffffffffffffffffffffffffff161590565b6113af575f6113b5565b82608001355b90505f6113d06113cb6080860160608701611c27565b610ced565b9050815f03611406576114066113ec6060860160408701611c27565b6113fc6040870160208801611c27565b8660800135611577565b5f806114156020870187611c27565b73ffffffffffffffffffffffffffffffffffffffff168461143960a0890189611cfa565b604051611447929190611d5b565b5f6040518083038185875af1925050503d805f8114611481576040519150601f19603f3d011682016040523d82523d5f602084013e611486565b606091505b50915091508161149957611499816115a3565b5f6114ad6113cb6080890160608a01611c27565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886114de60208a018a611c27565b6114ee60608b0160408c01611c27565b6114fe60808c0160608d01611c27565b8b60800135898711611510578661151a565b61151a8a88611c42565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b6109308383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6115ad565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156116d45773ffffffffffffffffffffffffffffffffffffffff8316611616576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611689573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116ad9190611ce3565b10156116d4576116d473ffffffffffffffffffffffffffffffffffffffff851684836116da565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661114c575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661114c57633e3f8f735f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff81168114611779575f5ffd5b50565b5f5f5f6060848603121561178e575f5ffd5b833561179981611758565b925060208401356117a981611758565b929592945050506040919091013590565b5f602082840312156117ca575f5ffd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146117f9575f5ffd5b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561187457611874611800565b604052919050565b5f82601f83011261188b575f5ffd5b813567ffffffffffffffff8111156118a5576118a5611800565b6118d660207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161182d565b8181528460208386010111156118ea575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f60808587031215611919575f5ffd5b843561192481611758565b9350602085013561193481611758565b925060408501359150606085013567ffffffffffffffff811115611956575f5ffd5b6119628782880161187c565b91505092959194509250565b5f5f83601f84011261197e575f5ffd5b50813567ffffffffffffffff811115611995575f5ffd5b6020830191508360208260051b85010111156119af575f5ffd5b9250929050565b5f5f5f5f5f608086880312156119ca575f5ffd5b85359450602086013567ffffffffffffffff8111156119e7575f5ffd5b6119f38882890161196e565b9095509350506040860135611a0781611758565b91506060860135611a1781611758565b809150509295509295909350565b5f5f5f5f5f5f60a08789031215611a3a575f5ffd5b86359550602087013567ffffffffffffffff811115611a57575f5ffd5b611a6389828a0161196e565b9096509450506040870135611a7781611758565b92506060870135611a8781611758565b95989497509295919493608090920135925050565b5f82601f830112611aab575f5ffd5b813567ffffffffffffffff811115611ac557611ac5611800565b8060051b611ad56020820161182d565b91825260208185018101929081019086841115611af0575f5ffd5b6020860192505b83831015611b12578235825260209283019290910190611af7565b9695505050505050565b5f5f5f5f5f60a08688031215611b30575f5ffd5b8535611b3b81611758565b94506020860135611b4b81611758565b9350604086013567ffffffffffffffff811115611b66575f5ffd5b611b7288828901611a9c565b935050606086013567ffffffffffffffff811115611b8e575f5ffd5b611b9a88828901611a9c565b925050608086013567ffffffffffffffff811115611bb6575f5ffd5b611bc28882890161187c565b9150509295509295909350565b5f5f5f5f5f60a08688031215611be3575f5ffd5b8535611bee81611758565b94506020860135611bfe81611758565b93506040860135925060608601359150608086013567ffffffffffffffff811115611bb6575f5ffd5b5f60208284031215611c37575f5ffd5b81356117f981611758565b818103818111156104c5577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611cd9575f5ffd5b9190910192915050565b5f60208284031215611cf3575f5ffd5b5051919050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611d2d575f5ffd5b83018035915067ffffffffffffffff821115611d47575f5ffd5b6020019150368190038213156119af575f5ffd5b818382375f910190815291905056fea2646970667358221220e170b1b9a1551bdc5ef5e119916c365f553544534d253cfbac9bef8243a8b23f64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_erc20Proxy";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "erc20Proxy";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Proxy";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "onERC1155BatchReceived";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "onERC1155Received";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "onERC721Received";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "supportsInterface";
        readonly inputs: readonly [{
            readonly name: "interfaceId";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "swapAndCompleteBridgeTokens";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
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
        }, {
            readonly name: "_transferredAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndExecute";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
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
        }, {
            readonly name: "_transferredAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdrawToken";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "ERC20ProxySet";
        readonly inputs: readonly [{
            readonly name: "proxy";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
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
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "TokensWithdrawn";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address payable";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
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
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ZeroAmount";
        readonly inputs: readonly [];
    }];
    static createInterface(): ExecutorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Executor;
}
export {};
