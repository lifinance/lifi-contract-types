import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Executor, ExecutorInterface } from "../Executor";
declare type ExecutorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50604051611f9e380380611f9e833981016040819052602b9160a0565b5f80546001600160a01b038084166001600160a01b03199283161783556002805491861691909216811790915560405190917f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a991a2505060cc565b80516001600160a01b0381168114609b575f5ffd5b919050565b5f5f6040838503121560b0575f5ffd5b60b7836086565b915060c3602084016086565b90509250929050565b611ec5806100d95f395ff3fe6080604052600436106100d1575f3560e01c80637f555b031161007c578063bc197c8111610057578063bc197c811461026f578063e30c3978146102b3578063f23a6e61146102df578063f2fde38b14610323575f5ffd5b80637f555b03146101e05780638da5cb5b14610231578063a83cbaa31461025c575f5ffd5b806323452b9c116100ac57806323452b9c146101a55780634f91bc2b146101b95780637200b829146101cc575f5ffd5b806301e33667146100dc57806301ffc9a7146100fd578063150b7a0214610131575f5ffd5b366100d857005b5f5ffd5b3480156100e7575f5ffd5b506100fb6100f63660046118a1565b610342565b005b348015610108575f5ffd5b5061011c6101173660046118df565b6104c7565b60405190151581526020015b60405180910390f35b34801561013c575f5ffd5b5061017461014b366004611a2b565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610128565b3480156101b0575f5ffd5b506100fb61055f565b6100fb6101c7366004611adb565b610628565b3480156101d7575f5ffd5b506100fb6106c6565b3480156101eb575f5ffd5b5060025461020c9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610128565b34801561023c575f5ffd5b505f5461020c9073ffffffffffffffffffffffffffffffffffffffff1681565b6100fb61026a366004611b4a565b6107aa565b34801561027a575f5ffd5b50610174610289366004611c41565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b3480156102be575f5ffd5b5060015461020c9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102ea575f5ffd5b506101746102f9366004611cf4565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b34801561032e575f5ffd5b506100fb61033d366004611d4c565b610843565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610392576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316610449575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610403576040519150601f19603f3d011682016040523d82523d5f602084013e610408565b606091505b5050905080610443576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061046a565b61046a73ffffffffffffffffffffffffffffffffffffffff8416838361099f565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f7fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000148061055957507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146105af576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166105fe576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016106a3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815f01819055506106bc86868686865f60016109e8565b5f90555050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610718576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610825576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556108388787878787875f6109e8565b5f9055505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610893576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166108e0576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361092f576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166109df576390b8ec185f526004601cfd5b5f603452505050565b5f808088886109f8600182611d67565b818110610a0757610a07611d9f565b9050602002810190610a199190611dcc565b610a2a906080810190606001611d4c565b905073ffffffffffffffffffffffffffffffffffffffff811615610a5857610a5181610cb6565b9150610a6f565b34610a6282610cb6565b610a6c9190611d67565b91505b73ffffffffffffffffffffffffffffffffffffffff871615610bda57610a9487610cb6565b92508315610b42576040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523360048201523060248201525f9073ffffffffffffffffffffffffffffffffffffffff89169063dd62ed3e90604401602060405180830381865afa158015610b0c573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b309190611e08565b9050610b3c8882610cff565b50610bf1565b6002546040517f15dacbea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015233602483015230604483015260648201889052909116906315dacbea906084015f604051808303815f87803b158015610bbf575f5ffd5b505af1158015610bd1573d5f5f3e3d5ffd5b50505050610bf1565b34610be488610cb6565b610bee9190611d67565b92505b610bfd8a8a8a89610db3565b5f610c0788610cb6565b905083811115610c2557610c258888610c208785611d67565b6110c0565b5f610c2f83610cb6565b905083811115610c4857610c488389610c208785611d67565b6040805173ffffffffffffffffffffffffffffffffffffffff808c1682528a1660208201529081018290524260608201528c907fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a2505050505050505050505050565b5f73ffffffffffffffffffffffffffffffffffffffff821615610cf857610cf373ffffffffffffffffffffffffffffffffffffffff8316306110f5565b610559565b4792915050565b805f03610d38576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d915780341015610d8d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610d8d73ffffffffffffffffffffffffffffffffffffffff8316333084611128565b8282828160018114610fd6575f610dca8585611180565b90505f8585610dda600186611d67565b818110610de957610de9611d9f565b9050602002810190610dfb9190611dcc565b610e0c906080810190606001611d4c565b90505f88815b81811015610eec5760025473ffffffffffffffffffffffffffffffffffffffff168c8c83818110610e4557610e45611d9f565b9050602002810190610e579190611dcc565b610e65906020810190611d4c565b73ffffffffffffffffffffffffffffffffffffffff1603610eb2576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368c8c83818110610ec557610ec5611d9f565b9050602002810190610ed79190611dcc565b9050610ee38e8261128a565b50600101610e12565b505f90505b610efc600186611d67565b811015610fcd575f888883818110610f1657610f16611d9f565b9050602002810190610f289190611dcc565b610f39906080810190606001611d4c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610fc457610f7781610cb6565b9250848281518110610f8b57610f8b611d9f565b6020026020010151831115610fc457610fc48188878581518110610fb157610fb1611d9f565b602002602001015186610c209190611d67565b50600101610ef1565b505050506110b6565b855f5b818110156110b35760025473ffffffffffffffffffffffffffffffffffffffff1689898381811061100c5761100c611d9f565b905060200281019061101e9190611dcc565b61102c906020810190611d4c565b73ffffffffffffffffffffffffffffffffffffffff1603611079576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3689898381811061108c5761108c611d9f565b905060200281019061109e9190611dcc565b90506110aa8b8261128a565b50600101610fd9565b50505b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166110ea576110e58282611514565b505050565b6110e5838383611581565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661117357637939f4245f526004601cfd5b5f60605260405250505050565b6060815f8167ffffffffffffffff81111561119d5761119d611925565b6040519080825280602002602001820160405280156111c6578160200160208202803683370190505b5090505f805b8381101561127f578686828181106111e6576111e6611d9f565b90506020028101906111f89190611dcc565b611209906080810190606001611d4c565b915061121482610cb6565b83828151811061122657611226611d9f565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611277573483828151811061125f5761125f611d9f565b602002602001018181516112739190611d67565b9052505b6001016111cc565b509095945050505050565b61129f61129a6020830183611d4c565b6115ef565b6112d5576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611314576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6113426113286060850160408601611d4c565b73ffffffffffffffffffffffffffffffffffffffff161590565b61134c575f611352565b82608001355b90505f61136d6113686080860160608701611d4c565b610cb6565b9050815f036113a3576113a36113896060860160408701611d4c565b6113996040870160208801611d4c565b8660800135611683565b5f806113b26020870187611d4c565b73ffffffffffffffffffffffffffffffffffffffff16846113d660a0890189611e1f565b6040516113e4929190611e80565b5f6040518083038185875af1925050503d805f811461141e576040519150601f19603f3d011682016040523d82523d5f602084013e611423565b606091505b50915091508161143657611436816116af565b5f61144a6113686080890160608a01611d4c565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861147b60208a018a611d4c565b61148b60608b0160408c01611d4c565b61149b60808c0160608d01611d4c565b8b608001358987116114ad57866114b7565b6114b78a88611d67565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216611561576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d8d73ffffffffffffffffffffffffffffffffffffffff8316826116b9565b73ffffffffffffffffffffffffffffffffffffffff82166115ce576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110e573ffffffffffffffffffffffffffffffffffffffff8416838361099f565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161167a57506023015160601c3b151592915050565b5050503b151590565b6110e58383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116d2565b8051602082018181fd5b5f385f3884865af1610d8d5763b12d13eb5f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff8416156117f95773ffffffffffffffffffffffffffffffffffffffff831661173b576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156117ae573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117d29190611e08565b10156117f9576117f973ffffffffffffffffffffffffffffffffffffffff851684836117ff565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166109df575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166109df57633e3f8f735f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff8116811461189e575f5ffd5b50565b5f5f5f606084860312156118b3575f5ffd5b83356118be8161187d565b925060208401356118ce8161187d565b929592945050506040919091013590565b5f602082840312156118ef575f5ffd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461191e575f5ffd5b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561199957611999611925565b604052919050565b5f82601f8301126119b0575f5ffd5b813567ffffffffffffffff8111156119ca576119ca611925565b6119fb60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611952565b818152846020838601011115611a0f575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f60808587031215611a3e575f5ffd5b8435611a498161187d565b93506020850135611a598161187d565b925060408501359150606085013567ffffffffffffffff811115611a7b575f5ffd5b611a87878288016119a1565b91505092959194509250565b5f5f83601f840112611aa3575f5ffd5b50813567ffffffffffffffff811115611aba575f5ffd5b6020830191508360208260051b8501011115611ad4575f5ffd5b9250929050565b5f5f5f5f5f60808688031215611aef575f5ffd5b85359450602086013567ffffffffffffffff811115611b0c575f5ffd5b611b1888828901611a93565b9095509350506040860135611b2c8161187d565b91506060860135611b3c8161187d565b809150509295509295909350565b5f5f5f5f5f5f60a08789031215611b5f575f5ffd5b86359550602087013567ffffffffffffffff811115611b7c575f5ffd5b611b8889828a01611a93565b9096509450506040870135611b9c8161187d565b92506060870135611bac8161187d565b95989497509295919493608090920135925050565b5f82601f830112611bd0575f5ffd5b813567ffffffffffffffff811115611bea57611bea611925565b8060051b611bfa60208201611952565b91825260208185018101929081019086841115611c15575f5ffd5b6020860192505b83831015611c37578235825260209283019290910190611c1c565b9695505050505050565b5f5f5f5f5f60a08688031215611c55575f5ffd5b8535611c608161187d565b94506020860135611c708161187d565b9350604086013567ffffffffffffffff811115611c8b575f5ffd5b611c9788828901611bc1565b935050606086013567ffffffffffffffff811115611cb3575f5ffd5b611cbf88828901611bc1565b925050608086013567ffffffffffffffff811115611cdb575f5ffd5b611ce7888289016119a1565b9150509295509295909350565b5f5f5f5f5f60a08688031215611d08575f5ffd5b8535611d138161187d565b94506020860135611d238161187d565b93506040860135925060608601359150608086013567ffffffffffffffff811115611cdb575f5ffd5b5f60208284031215611d5c575f5ffd5b813561191e8161187d565b81810381811115610559577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611dfe575f5ffd5b9190910192915050565b5f60208284031215611e18575f5ffd5b5051919050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e52575f5ffd5b83018035915067ffffffffffffffff821115611e6c575f5ffd5b602001915036819003821315611ad4575f5ffd5b818382375f910190815291905056fea26469706673582212203057d30196a71fbafaa2662d9bd7229bc3aab5b9f7e1211adca67cca2231258064736f6c634300081d0033";
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
        readonly name: "ExternalCallFailed";
        readonly inputs: readonly [];
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
    }];
    static createInterface(): ExecutorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Executor;
}
export {};
