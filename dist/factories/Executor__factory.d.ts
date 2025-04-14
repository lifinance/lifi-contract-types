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
    static readonly bytecode = "0x608060405234801562000010575f80fd5b50604051620029d0380380620029d08339810160408190526200003391620000ac565b5f80546001600160a01b038084166001600160a01b03199283161783556002805491861691909216811790915560405190917f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a991a25050620000e2565b80516001600160a01b0381168114620000a7575f80fd5b919050565b5f8060408385031215620000be575f80fd5b620000c98362000090565b9150620000d96020840162000090565b90509250929050565b6128e080620000f05f395ff3fe6080604052600436106100d1575f3560e01c80637f555b031161007c578063bc197c8111610057578063bc197c811461024b578063e30c39781461028f578063f23a6e61146102bb578063f2fde38b146102ff575f80fd5b80637f555b03146101bc5780638da5cb5b1461020d578063a83cbaa314610238575f80fd5b806323452b9c116100ac57806323452b9c146101815780634f91bc2b146101955780637200b829146101a8575f80fd5b806301e33667146100dc57806301ffc9a7146100fd578063150b7a0214610131575f80fd5b366100d857005b5f80fd5b3480156100e7575f80fd5b506100fb6100f6366004612228565b61031e565b005b348015610108575f80fd5b5061011c610117366004612266565b6104a3565b60405190151581526020015b60405180910390f35b34801561013c575f80fd5b5061015061014b3660046123b2565b61053b565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610128565b34801561018c575f80fd5b506100fb610565565b6100fb6101a3366004612462565b61062e565b3480156101b3575f80fd5b506100fb6106cc565b3480156101c7575f80fd5b506002546101e89073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610128565b348015610218575f80fd5b505f546101e89073ffffffffffffffffffffffffffffffffffffffff1681565b6100fb6102463660046124d1565b6107b0565b348015610256575f80fd5b506101506102653660046125ba565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b34801561029a575f80fd5b506001546101e89073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102c6575f80fd5b506101506102d5366004612661565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b34801561030a575f80fd5b506100fb6103193660046126c5565b610849565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461036e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316610425575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146103df576040519150601f19603f3d011682016040523d82523d5f602084013e6103e4565b606091505b505090508061041f576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50610446565b61044673ffffffffffffffffffffffffffffffffffffffff841683836109a5565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f7fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000148061053557507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b7f150b7a02000000000000000000000000000000000000000000000000000000005b949350505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146105b5576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610604576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016106a9576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815f01819055506106c286868686865f60016109ee565b5f90555050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461071e576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161082b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561083e8787878787875f6109ee565b5f9055505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610899576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166108e6576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610935576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166109e5576390b8ec185f526004601cfd5b5f603452505050565b5f808088886109fe6001826126e0565b818110610a0d57610a0d612718565b9050602002810190610a1f9190612745565b610a309060808101906060016126c5565b905073ffffffffffffffffffffffffffffffffffffffff811615610a5e57610a5781610cbc565b9150610a75565b34610a6882610cbc565b610a7291906126e0565b91505b73ffffffffffffffffffffffffffffffffffffffff871615610be057610a9a87610cbc565b92508315610b48576040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523360048201523060248201525f9073ffffffffffffffffffffffffffffffffffffffff89169063dd62ed3e90604401602060405180830381865afa158015610b12573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b369190612781565b9050610b428882610d71565b50610bf7565b6002546040517f15dacbea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015233602483015230604483015260648201889052909116906315dacbea906084015f604051808303815f87803b158015610bc5575f80fd5b505af1158015610bd7573d5f803e3d5ffd5b50505050610bf7565b34610bea88610cbc565b610bf491906126e0565b92505b610c038a8a8a89610eed565b5f610c0d88610cbc565b905083811115610c2b57610c2b8888610c2687856126e0565b6111f9565b5f610c3583610cbc565b905083811115610c4e57610c4e8389610c2687856126e0565b6040805173ffffffffffffffffffffffffffffffffffffffff808c1682528a1660208201529081018290524260608201528c907fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a2505050505050505050505050565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d6a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610d41573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d659190612781565b610535565b4792915050565b805f03610daa576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e035780341015610dff576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610e6d573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e919190612781565b905081811015610edc576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610ee88333308561122a565b505050565b828282816001811461110f575f610f04858561143f565b90505f8585610f146001866126e0565b818110610f2357610f23612718565b9050602002810190610f359190612745565b610f469060808101906060016126c5565b90505f88815b818110156110265760025473ffffffffffffffffffffffffffffffffffffffff168c8c83818110610f7f57610f7f612718565b9050602002810190610f919190612745565b610f9f9060208101906126c5565b73ffffffffffffffffffffffffffffffffffffffff1603610fec576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368c8c83818110610fff57610fff612718565b90506020028101906110119190612745565b905061101d8e82611549565b50600101610f4c565b50505f5b6110356001866126e0565b811015611106575f88888381811061104f5761104f612718565b90506020028101906110619190612745565b6110729060808101906060016126c5565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110fd576110b081610cbc565b92508482815181106110c4576110c4612718565b60200260200101518311156110fd576110fd81888785815181106110ea576110ea612718565b602002602001015186610c2691906126e0565b5060010161102a565b505050506111ef565b855f5b818110156111ec5760025473ffffffffffffffffffffffffffffffffffffffff1689898381811061114557611145612718565b90506020028101906111579190612745565b6111659060208101906126c5565b73ffffffffffffffffffffffffffffffffffffffff16036111b2576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368989838181106111c5576111c5612718565b90506020028101906111d79190612745565b90506111e38b82611549565b50600101611112565b50505b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83161561122057610ee8838383611836565b610ee882826119b5565b73ffffffffffffffffffffffffffffffffffffffff8416611277576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166112c4576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa158015611332573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113569190612781565b905061136482868686611adb565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156113d2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113f69190612781565b61140091906126e0565b14611437576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6060815f8167ffffffffffffffff81111561145c5761145c6122ac565b604051908082528060200260200182016040528015611485578160200160208202803683370190505b5090505f805b8381101561153e578686828181106114a5576114a5612718565b90506020028101906114b79190612745565b6114c89060808101906060016126c5565b91506114d382610cbc565b8382815181106114e5576114e5612718565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611536573483828151811061151e5761151e612718565b6020026020010181815161153291906126e0565b9052505b60010161148b565b509095945050505050565b61155f61155960208301836126c5565b3b151590565b611595576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036115d4576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6116026115e860608501604086016126c5565b73ffffffffffffffffffffffffffffffffffffffff161590565b61160c575f611612565b82608001355b90505f61162d61162860608601604087016126c5565b610cbc565b90505f61164361162860808701606088016126c5565b9050825f036116795761167961165f60608701604088016126c5565b61166f60408801602089016126c5565b8760800135611bb7565b84608001358210156116c4576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610ed3565b5f806116d360208801886126c5565b73ffffffffffffffffffffffffffffffffffffffff16856116f760a08a018a612798565b6040516117059291906127f9565b5f6040518083038185875af1925050503d805f811461173f576040519150601f19603f3d011682016040523d82523d5f602084013e611744565b606091505b5091509150816117575761175781611cec565b5f61176b61162860808a0160608b016126c5565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961179c60208b018b6126c5565b6117ac60608c0160408d016126c5565b6117bc60808d0160608e016126c5565b8c608001358987116117ce57866117d8565b6117d88a886126e0565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611883576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166118d0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561193a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061195e9190612781565b9050808211156119a4576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610ed3565b6119af848484611cf6565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611a02576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611a45576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610ed3565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114611a9b576040519150601f19603f3d011682016040523d82523d5f602084013e611aa0565b606091505b5050905080610ee8576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526119af9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d4c565b73ffffffffffffffffffffffffffffffffffffffff8316611bd757505050565b73ffffffffffffffffffffffffffffffffffffffff8216611c24576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611c97573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611cbb9190612781565b1015610ee857610ee883837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611e59565b8051602082018181fd5b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610ee89084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611b35565b5f611dad826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611f489092919063ffffffff16565b905080515f1480611dcd575080806020019051810190611dcd9190612808565b610ee8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610ed3565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611ee58482611f56565b6119af5760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f6044820152611f3e9085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611b35565b6119af8482611d4c565b606061055d84845f85612011565b5f805f8473ffffffffffffffffffffffffffffffffffffffff1684604051611f7e9190612849565b5f604051808303815f865af19150503d805f8114611fb7576040519150601f19603f3d011682016040523d82523d5f602084013e611fbc565b606091505b5091509150818015611fe6575080511580611fe6575080806020019051810190611fe69190612808565b8015612008575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b6060824710156120a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610ed3565b5f808673ffffffffffffffffffffffffffffffffffffffff1685876040516120cb9190612849565b5f6040518083038185875af1925050503d805f8114612105576040519150601f19603f3d011682016040523d82523d5f602084013e61210a565b606091505b509150915061211b87838387612126565b979650505050505050565b606083156121bb5782515f036121b45773ffffffffffffffffffffffffffffffffffffffff85163b6121b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610ed3565b508161055d565b61055d83838151156121d05781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed3919061285a565b73ffffffffffffffffffffffffffffffffffffffff81168114612225575f80fd5b50565b5f805f6060848603121561223a575f80fd5b833561224581612204565b9250602084013561225581612204565b929592945050506040919091013590565b5f60208284031215612276575f80fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146122a5575f80fd5b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612320576123206122ac565b604052919050565b5f82601f830112612337575f80fd5b813567ffffffffffffffff811115612351576123516122ac565b61238260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016122d9565b818152846020838601011115612396575f80fd5b816020850160208301375f918101602001919091529392505050565b5f805f80608085870312156123c5575f80fd5b84356123d081612204565b935060208501356123e081612204565b925060408501359150606085013567ffffffffffffffff811115612402575f80fd5b61240e87828801612328565b91505092959194509250565b5f8083601f84011261242a575f80fd5b50813567ffffffffffffffff811115612441575f80fd5b6020830191508360208260051b850101111561245b575f80fd5b9250929050565b5f805f805f60808688031215612476575f80fd5b85359450602086013567ffffffffffffffff811115612493575f80fd5b61249f8882890161241a565b90955093505060408601356124b381612204565b915060608601356124c381612204565b809150509295509295909350565b5f805f805f8060a087890312156124e6575f80fd5b86359550602087013567ffffffffffffffff811115612503575f80fd5b61250f89828a0161241a565b909650945050604087013561252381612204565b9250606087013561253381612204565b80925050608087013590509295509295509295565b5f82601f830112612557575f80fd5b8135602067ffffffffffffffff821115612573576125736122ac565b8160051b6125828282016122d9565b928352848101820192828101908785111561259b575f80fd5b83870192505b8483101561211b578235825291830191908301906125a1565b5f805f805f60a086880312156125ce575f80fd5b85356125d981612204565b945060208601356125e981612204565b9350604086013567ffffffffffffffff80821115612605575f80fd5b61261189838a01612548565b94506060880135915080821115612626575f80fd5b61263289838a01612548565b93506080880135915080821115612647575f80fd5b5061265488828901612328565b9150509295509295909350565b5f805f805f60a08688031215612675575f80fd5b853561268081612204565b9450602086013561269081612204565b93506040860135925060608601359150608086013567ffffffffffffffff8111156126b9575f80fd5b61265488828901612328565b5f602082840312156126d5575f80fd5b81356122a581612204565b81810381811115610535577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612777575f80fd5b9190910192915050565b5f60208284031215612791575f80fd5b5051919050565b5f8083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126127cb575f80fd5b83018035915067ffffffffffffffff8211156127e5575f80fd5b60200191503681900382131561245b575f80fd5b818382375f9101908152919050565b5f60208284031215612818575f80fd5b815180151581146122a5575f80fd5b5f5b83811015612841578181015183820152602001612829565b50505f910152565b5f8251612777818460208701612827565b602081525f8251806020840152612878816040850160208701612827565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220ab5b76168113c2507e1ea154dba67de9106fe7cd2d30f51b90093d4c81c8c5a364736f6c63430008160033";
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
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
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
        readonly name: "NativeAssetTransferFailed";
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
        readonly name: "NoTransferToNullAddress";
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
        readonly name: "NullAddrIsNotAnERC20Token";
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
