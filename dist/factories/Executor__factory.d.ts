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
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162002a8538038062002a858339810160408190526200003491620000af565b600080546001600160a01b038084166001600160a01b03199283161783556002805491861691909216811790915560405190917f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a991a25050620000e7565b80516001600160a01b0381168114620000aa57600080fd5b919050565b60008060408385031215620000c357600080fd5b620000ce8362000092565b9150620000de6020840162000092565b90509250929050565b61298e80620000f76000396000f3fe6080604052600436106100d65760003560e01c80637f555b031161007f578063bc197c8111610059578063bc197c8114610259578063e30c39781461029e578063f23a6e61146102cb578063f2fde38b1461031057600080fd5b80637f555b03146101c75780638da5cb5b14610219578063a83cbaa31461024657600080fd5b806323452b9c116100b057806323452b9c1461018a5780634f91bc2b1461019f5780637200b829146101b257600080fd5b806301e33667146100e257806301ffc9a714610104578063150b7a021461013957600080fd5b366100dd57005b600080fd5b3480156100ee57600080fd5b506101026100fd366004612293565b610330565b005b34801561011057600080fd5b5061012461011f3660046122d4565b6104ba565b60405190151581526020015b60405180910390f35b34801561014557600080fd5b50610159610154366004612429565b610553565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610130565b34801561019657600080fd5b5061010261057d565b6101026101ad3660046124e1565b610647565b3480156101be57600080fd5b506101026106e8565b3480156101d357600080fd5b506002546101f49073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610130565b34801561022557600080fd5b506000546101f49073ffffffffffffffffffffffffffffffffffffffff1681565b610102610254366004612555565b6107ce565b34801561026557600080fd5b50610159610274366004612646565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b3480156102aa57600080fd5b506001546101f49073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102d757600080fd5b506101596102e63660046126f4565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b34801561031c57600080fd5b5061010261032b36600461275d565b610869565b60005473ffffffffffffffffffffffffffffffffffffffff163314610381576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831661043c5760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146103f6576040519150601f19603f3d011682016040523d82523d6000602084013e6103fb565b606091505b5050905080610436576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061045d565b61045d73ffffffffffffffffffffffffffffffffffffffff841683836109c7565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000148061054d57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b7f150b7a02000000000000000000000000000000000000000000000000000000005b949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105ce576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661061d576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016106c2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181600001819055506106dd868686868660006001610a16565b600090555050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461073a576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610849576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561085d8787878787876000610a16565b60009055505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108ba576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610907576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610956576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610a0c576390b8ec186000526004601cfd5b6000603452505050565b600080808888610a2760018261277a565b818110610a3657610a366127b4565b9050602002810190610a4891906127e3565b610a5990608081019060600161275d565b905073ffffffffffffffffffffffffffffffffffffffff811615610a8757610a8081610cef565b9150610a9e565b34610a9182610cef565b610a9b919061277a565b91505b73ffffffffffffffffffffffffffffffffffffffff871615610c1157610ac387610cef565b92508315610b74576040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff89169063dd62ed3e90604401602060405180830381865afa158015610b3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b629190612821565b9050610b6e8882610da7565b50610c28565b6002546040517f15dacbea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015233602483015230604483015260648201889052909116906315dacbea90608401600060405180830381600087803b158015610bf457600080fd5b505af1158015610c08573d6000803e3d6000fd5b50505050610c28565b34610c1b88610cef565b610c25919061277a565b92505b610c348a8a8a89610f27565b6000610c3f88610cef565b905083811115610c5d57610c5d8888610c58878561277a565b611239565b6000610c6883610cef565b905083811115610c8157610c818389610c58878561277a565b6040805173ffffffffffffffffffffffffffffffffffffffff808c1682528a1660208201529081018290524260608201528c907fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a2505050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610da0576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610d77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9b9190612821565b61054d565b4792915050565b80600003610de1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e3a5780341015610e36576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610ea7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ecb9190612821565b905081811015610f16576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610f228333308561126a565b505050565b828282816001811461114e576000610f3f8585611484565b905060008585610f5060018661277a565b818110610f5f57610f5f6127b4565b9050602002810190610f7191906127e3565b610f8290608081019060600161275d565b9050600088815b818110156110635760025473ffffffffffffffffffffffffffffffffffffffff168c8c83818110610fbc57610fbc6127b4565b9050602002810190610fce91906127e3565b610fdc90602081019061275d565b73ffffffffffffffffffffffffffffffffffffffff1603611029576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368c8c8381811061103c5761103c6127b4565b905060200281019061104e91906127e3565b905061105a8e82611590565b50600101610f89565b505060005b61107360018661277a565b81101561114557600088888381811061108e5761108e6127b4565b90506020028101906110a091906127e3565b6110b190608081019060600161275d565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461113c576110ef81610cef565b9250848281518110611103576111036127b4565b602002602001015183111561113c5761113c8188878581518110611129576111296127b4565b602002602001015186610c58919061277a565b50600101611068565b5050505061122f565b8560005b8181101561122c5760025473ffffffffffffffffffffffffffffffffffffffff16898983818110611185576111856127b4565b905060200281019061119791906127e3565b6111a590602081019061275d565b73ffffffffffffffffffffffffffffffffffffffff16036111f2576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b36898983818110611205576112056127b4565b905060200281019061121791906127e3565b90506112238b82611590565b50600101611152565b50505b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83161561126057610f22838383611888565b610f228282611a0a565b73ffffffffffffffffffffffffffffffffffffffff84166112b7576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611304576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611375573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113999190612821565b90506113a782868686611b34565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611417573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061143b9190612821565b611445919061277a565b1461147c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60608160008167ffffffffffffffff8111156114a2576114a261231d565b6040519080825280602002602001820160405280156114cb578160200160208202803683370190505b5090506000805b83811015611585578686828181106114ec576114ec6127b4565b90506020028101906114fe91906127e3565b61150f90608081019060600161275d565b915061151a82610cef565b83828151811061152c5761152c6127b4565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661157d5734838281518110611565576115656127b4565b60200260200101818151611579919061277a565b9052505b6001016114d2565b509095945050505050565b6115a66115a0602083018361275d565b3b151590565b6115dc576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361161c576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061164b611631606085016040860161275d565b73ffffffffffffffffffffffffffffffffffffffff161590565b61165657600061165c565b82608001355b90506000611678611673606086016040870161275d565b610cef565b9050600061168f611673608087016060880161275d565b9050826000036116c6576116c66116ac606087016040880161275d565b6116bc604088016020890161275d565b8760800135611c10565b8460800135821015611711576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610f0d565b600080611721602088018861275d565b73ffffffffffffffffffffffffffffffffffffffff168561174560a08a018a61283a565b60405161175392919061289f565b60006040518083038185875af1925050503d8060008114611790576040519150601f19603f3d011682016040523d82523d6000602084013e611795565b606091505b5091509150816117a8576117a881611d47565b60006117bd61167360808a0160608b0161275d565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896117ee60208b018b61275d565b6117fe60608c0160408d0161275d565b61180e60808d0160608e0161275d565b8c60800135898711611820578661182a565b61182a8a8861277a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166118d5576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611922576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561198f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119b39190612821565b9050808211156119f9576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610f0d565b611a04848484611d51565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611a57576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611a9a576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610f0d565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611af4576040519150601f19603f3d011682016040523d82523d6000602084013e611af9565b606091505b5050905080610f22576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052611a049085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611da7565b73ffffffffffffffffffffffffffffffffffffffff8316611c3057505050565b73ffffffffffffffffffffffffffffffffffffffff8216611c7d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611cf2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d169190612821565b1015610f2257610f2283837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611eb6565b8051602082018181fd5b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610f229084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611b8e565b6000611e09826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611fa69092919063ffffffff16565b9050805160001480611e2a575080806020019051810190611e2a91906128af565b610f22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610f0d565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611f428482611fb5565b611a045760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611f9c9085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611b8e565b611a048482611da7565b60606105758484600085612076565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611fdf91906128f5565b6000604051808303816000865af19150503d806000811461201c576040519150601f19603f3d011682016040523d82523d6000602084013e612021565b606091505b509150915081801561204b57508051158061204b57508080602001905181019061204b91906128af565b801561206d575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b606082471015612108576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610f0d565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161213191906128f5565b60006040518083038185875af1925050503d806000811461216e576040519150601f19603f3d011682016040523d82523d6000602084013e612173565b606091505b50915091506121848783838761218f565b979650505050505050565b6060831561222557825160000361221e5773ffffffffffffffffffffffffffffffffffffffff85163b61221e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610f0d565b5081610575565b610575838381511561223a5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0d9190612907565b73ffffffffffffffffffffffffffffffffffffffff8116811461229057600080fd5b50565b6000806000606084860312156122a857600080fd5b83356122b38161226e565b925060208401356122c38161226e565b929592945050506040919091013590565b6000602082840312156122e657600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461231657600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156123935761239361231d565b604052919050565b600082601f8301126123ac57600080fd5b813567ffffffffffffffff8111156123c6576123c661231d565b6123f760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161234c565b81815284602083860101111561240c57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561243f57600080fd5b843561244a8161226e565b9350602085013561245a8161226e565b925060408501359150606085013567ffffffffffffffff81111561247d57600080fd5b6124898782880161239b565b91505092959194509250565b60008083601f8401126124a757600080fd5b50813567ffffffffffffffff8111156124bf57600080fd5b6020830191508360208260051b85010111156124da57600080fd5b9250929050565b6000806000806000608086880312156124f957600080fd5b85359450602086013567ffffffffffffffff81111561251757600080fd5b61252388828901612495565b90955093505060408601356125378161226e565b915060608601356125478161226e565b809150509295509295909350565b60008060008060008060a0878903121561256e57600080fd5b86359550602087013567ffffffffffffffff81111561258c57600080fd5b61259889828a01612495565b90965094505060408701356125ac8161226e565b925060608701356125bc8161226e565b80925050608087013590509295509295509295565b600082601f8301126125e257600080fd5b8135602067ffffffffffffffff8211156125fe576125fe61231d565b8160051b61260d82820161234c565b928352848101820192828101908785111561262757600080fd5b83870192505b848310156121845782358252918301919083019061262d565b600080600080600060a0868803121561265e57600080fd5b85356126698161226e565b945060208601356126798161226e565b9350604086013567ffffffffffffffff8082111561269657600080fd5b6126a289838a016125d1565b945060608801359150808211156126b857600080fd5b6126c489838a016125d1565b935060808801359150808211156126da57600080fd5b506126e78882890161239b565b9150509295509295909350565b600080600080600060a0868803121561270c57600080fd5b85356127178161226e565b945060208601356127278161226e565b93506040860135925060608601359150608086013567ffffffffffffffff81111561275157600080fd5b6126e78882890161239b565b60006020828403121561276f57600080fd5b81356123168161226e565b8181038181111561054d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261281757600080fd5b9190910192915050565b60006020828403121561283357600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261286f57600080fd5b83018035915067ffffffffffffffff82111561288a57600080fd5b6020019150368190038213156124da57600080fd5b8183823760009101908152919050565b6000602082840312156128c157600080fd5b8151801515811461231657600080fd5b60005b838110156128ec5781810151838201526020016128d4565b50506000910152565b600082516128178184602087016128d1565b60208152600082518060208401526129268160408501602087016128d1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea264697066735822122092cd5bc00678c45f0b5067135435c81ab794c3f9d76fc2071142539ccc04e3c464736f6c63430008110033";
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
