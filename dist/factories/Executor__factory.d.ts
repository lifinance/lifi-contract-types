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
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162002056380380620020568339810160408190526200003491620000af565b600080546001600160a01b038084166001600160a01b03199283161783556002805491861691909216811790915560405190917f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a991a25050620000e7565b80516001600160a01b0381168114620000aa57600080fd5b919050565b60008060408385031215620000c357600080fd5b620000ce8362000092565b9150620000de6020840162000092565b90509250929050565b611f5f80620000f76000396000f3fe6080604052600436106100d65760003560e01c80637f555b031161007f578063bc197c8111610059578063bc197c811461027d578063e30c3978146102c2578063f23a6e61146102ef578063f2fde38b1461033457600080fd5b80637f555b03146101eb5780638da5cb5b1461023d578063a83cbaa31461026a57600080fd5b806323452b9c116100b057806323452b9c146101ae5780634f91bc2b146101c35780637200b829146101d657600080fd5b806301e33667146100e257806301ffc9a714610104578063150b7a021461013957600080fd5b366100dd57005b600080fd5b3480156100ee57600080fd5b506101026100fd366004611902565b610354565b005b34801561011057600080fd5b5061012461011f366004611943565b6104de565b60405190151581526020015b60405180910390f35b34801561014557600080fd5b5061017d610154366004611a98565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610130565b3480156101ba57600080fd5b50610102610577565b6101026101d1366004611b50565b610641565b3480156101e257600080fd5b506101026106e2565b3480156101f757600080fd5b506002546102189073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610130565b34801561024957600080fd5b506000546102189073ffffffffffffffffffffffffffffffffffffffff1681565b610102610278366004611bc4565b6107c8565b34801561028957600080fd5b5061017d610298366004611cc0565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b3480156102ce57600080fd5b506001546102189073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102fb57600080fd5b5061017d61030a366004611d6e565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b34801561034057600080fd5b5061010261034f366004611dd7565b610863565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103a5576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166104605760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461041a576040519150601f19603f3d011682016040523d82523d6000602084013e61041f565b606091505b505090508061045a576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50610481565b61048173ffffffffffffffffffffffffffffffffffffffff841683836109c1565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000148061057157507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105c8576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610617576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016106bc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181600001819055506106d7868686868660006001610a10565b600090555050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610734576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610843576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556108578787878787876000610a10565b60009055505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108b4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610901576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610950576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610a06576390b8ec186000526004601cfd5b6000603452505050565b600080808888610a21600182611df4565b818110610a3057610a30611e2e565b9050602002810190610a429190611e5d565b610a53906080810190606001611dd7565b905073ffffffffffffffffffffffffffffffffffffffff811615610a8157610a7a81610ce9565b9150610a98565b34610a8b82610ce9565b610a959190611df4565b91505b73ffffffffffffffffffffffffffffffffffffffff871615610c0b57610abd87610ce9565b92508315610b6e576040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff89169063dd62ed3e90604401602060405180830381865afa158015610b38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5c9190611e9b565b9050610b688882610d33565b50610c22565b6002546040517f15dacbea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015233602483015230604483015260648201889052909116906315dacbea90608401600060405180830381600087803b158015610bee57600080fd5b505af1158015610c02573d6000803e3d6000fd5b50505050610c22565b34610c1588610ce9565b610c1f9190611df4565b92505b610c2e8a8a8a89610de8565b6000610c3988610ce9565b905083811115610c5757610c578888610c528785611df4565b6110fa565b6000610c6283610ce9565b905083811115610c7b57610c7b8389610c528785611df4565b6040805173ffffffffffffffffffffffffffffffffffffffff808c1682528a1660208201529081018290524260608201528c907fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a2505050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610d2c57610d2773ffffffffffffffffffffffffffffffffffffffff83163061112f565b610571565b4792915050565b80600003610d6d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610dc65780341015610dc2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610dc273ffffffffffffffffffffffffffffffffffffffff8316333084611164565b828282816001811461100f576000610e0085856111c1565b905060008585610e11600186611df4565b818110610e2057610e20611e2e565b9050602002810190610e329190611e5d565b610e43906080810190606001611dd7565b9050600088815b81811015610f245760025473ffffffffffffffffffffffffffffffffffffffff168c8c83818110610e7d57610e7d611e2e565b9050602002810190610e8f9190611e5d565b610e9d906020810190611dd7565b73ffffffffffffffffffffffffffffffffffffffff1603610eea576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368c8c83818110610efd57610efd611e2e565b9050602002810190610f0f9190611e5d565b9050610f1b8e826112cd565b50600101610e4a565b505060005b610f34600186611df4565b811015611006576000888883818110610f4f57610f4f611e2e565b9050602002810190610f619190611e5d565b610f72906080810190606001611dd7565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ffd57610fb081610ce9565b9250848281518110610fc457610fc4611e2e565b6020026020010151831115610ffd57610ffd8188878581518110610fea57610fea611e2e565b602002602001015186610c529190611df4565b50600101610f29565b505050506110f0565b8560005b818110156110ed5760025473ffffffffffffffffffffffffffffffffffffffff1689898381811061104657611046611e2e565b90506020028101906110589190611e5d565b611066906020810190611dd7565b73ffffffffffffffffffffffffffffffffffffffff16036110b3576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368989838181106110c6576110c6611e2e565b90506020028101906110d89190611e5d565b90506110e48b826112cd565b50600101611013565b50505b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166111245761111f8282611561565b505050565b61111f8383836115ce565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166111b357637939f4246000526004601cfd5b600060605260405250505050565b60608160008167ffffffffffffffff8111156111df576111df61198c565b604051908082528060200260200182016040528015611208578160200160208202803683370190505b5090506000805b838110156112c25786868281811061122957611229611e2e565b905060200281019061123b9190611e5d565b61124c906080810190606001611dd7565b915061125782610ce9565b83828151811061126957611269611e2e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166112ba57348382815181106112a2576112a2611e2e565b602002602001018181516112b69190611df4565b9052505b60010161120f565b509095945050505050565b6112e26112dd6020830183611dd7565b61163c565b611318576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611358576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061138761136d6060850160408601611dd7565b73ffffffffffffffffffffffffffffffffffffffff161590565b611392576000611398565b82608001355b905060006113b46113af6080860160608701611dd7565b610ce9565b9050816000036113eb576113eb6113d16060860160408701611dd7565b6113e16040870160208801611dd7565b86608001356116d2565b6000806113fb6020870187611dd7565b73ffffffffffffffffffffffffffffffffffffffff168461141f60a0890189611eb4565b60405161142d929190611f19565b60006040518083038185875af1925050503d806000811461146a576040519150601f19603f3d011682016040523d82523d6000602084013e61146f565b606091505b50915091508161148257611482816116fe565b60006114976113af6080890160608a01611dd7565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886114c860208a018a611dd7565b6114d860608b0160408c01611dd7565b6114e860808c0160608d01611dd7565b8b608001358987116114fa5786611504565b6115048a88611df4565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff82166115ae576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dc273ffffffffffffffffffffffffffffffffffffffff831682611708565b73ffffffffffffffffffffffffffffffffffffffff821661161b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61111f73ffffffffffffffffffffffffffffffffffffffff841683836109c1565b6040805160178082528183019092526000918291906020820181803683370190505090506017600060208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff00000000000000000000000000000000000000000000000000000000008216016116c957506023015160601c3b151592915050565b5050503b151590565b61111f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611724565b8051602082018181fd5b60003860003884865af1610dc25763b12d13eb6000526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff84161561184d5773ffffffffffffffffffffffffffffffffffffffff831661178d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611802573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118269190611e9b565b101561184d5761184d73ffffffffffffffffffffffffffffffffffffffff85168483611853565b50505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716610a065760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716610a0657633e3f8f736000526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff811681146118ff57600080fd5b50565b60008060006060848603121561191757600080fd5b8335611922816118dd565b92506020840135611932816118dd565b929592945050506040919091013590565b60006020828403121561195557600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461198557600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611a0257611a0261198c565b604052919050565b600082601f830112611a1b57600080fd5b813567ffffffffffffffff811115611a3557611a3561198c565b611a6660207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016119bb565b818152846020838601011115611a7b57600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215611aae57600080fd5b8435611ab9816118dd565b93506020850135611ac9816118dd565b925060408501359150606085013567ffffffffffffffff811115611aec57600080fd5b611af887828801611a0a565b91505092959194509250565b60008083601f840112611b1657600080fd5b50813567ffffffffffffffff811115611b2e57600080fd5b6020830191508360208260051b8501011115611b4957600080fd5b9250929050565b600080600080600060808688031215611b6857600080fd5b85359450602086013567ffffffffffffffff811115611b8657600080fd5b611b9288828901611b04565b9095509350506040860135611ba6816118dd565b91506060860135611bb6816118dd565b809150509295509295909350565b60008060008060008060a08789031215611bdd57600080fd5b86359550602087013567ffffffffffffffff811115611bfb57600080fd5b611c0789828a01611b04565b9096509450506040870135611c1b816118dd565b92506060870135611c2b816118dd565b80925050608087013590509295509295509295565b600082601f830112611c5157600080fd5b8135602067ffffffffffffffff821115611c6d57611c6d61198c565b8160051b611c7c8282016119bb565b9283528481018201928281019087851115611c9657600080fd5b83870192505b84831015611cb557823582529183019190830190611c9c565b979650505050505050565b600080600080600060a08688031215611cd857600080fd5b8535611ce3816118dd565b94506020860135611cf3816118dd565b9350604086013567ffffffffffffffff80821115611d1057600080fd5b611d1c89838a01611c40565b94506060880135915080821115611d3257600080fd5b611d3e89838a01611c40565b93506080880135915080821115611d5457600080fd5b50611d6188828901611a0a565b9150509295509295909350565b600080600080600060a08688031215611d8657600080fd5b8535611d91816118dd565b94506020860135611da1816118dd565b93506040860135925060608601359150608086013567ffffffffffffffff811115611dcb57600080fd5b611d6188828901611a0a565b600060208284031215611de957600080fd5b8135611985816118dd565b81810381811115610571577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611e9157600080fd5b9190910192915050565b600060208284031215611ead57600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ee957600080fd5b83018035915067ffffffffffffffff821115611f0457600080fd5b602001915036819003821315611b4957600080fd5b818382376000910190815291905056fea26469706673582212201776ca13776a869f4637fe298c08eedc0c8ba62ae75f7a1d1103fa53bd593d3264736f6c63430008110033";
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
