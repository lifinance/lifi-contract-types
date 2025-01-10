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
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620029cc380380620029cc8339810160408190526200003491620000af565b600080546001600160a01b038084166001600160a01b03199283161783556002805491861691909216811790915560405190917f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a991a25050620000e7565b80516001600160a01b0381168114620000aa57600080fd5b919050565b60008060408385031215620000c357600080fd5b620000ce8362000092565b9150620000de6020840162000092565b90509250929050565b6128d580620000f76000396000f3fe6080604052600436106100d65760003560e01c80637f555b031161007f578063bc197c8111610059578063bc197c8114610259578063e30c39781461029e578063f23a6e61146102cb578063f2fde38b1461031057600080fd5b80637f555b03146101c75780638da5cb5b14610219578063a83cbaa31461024657600080fd5b806323452b9c116100b057806323452b9c1461018a5780634f91bc2b1461019f5780637200b829146101b257600080fd5b806301e33667146100e257806301ffc9a714610104578063150b7a021461013957600080fd5b366100dd57005b600080fd5b3480156100ee57600080fd5b506101026100fd3660046121da565b610330565b005b34801561011057600080fd5b5061012461011f36600461221b565b6104ba565b60405190151581526020015b60405180910390f35b34801561014557600080fd5b50610159610154366004612370565b610553565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610130565b34801561019657600080fd5b5061010261057d565b6101026101ad366004612428565b610647565b3480156101be57600080fd5b506101026106e8565b3480156101d357600080fd5b506002546101f49073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610130565b34801561022557600080fd5b506000546101f49073ffffffffffffffffffffffffffffffffffffffff1681565b61010261025436600461249c565b6107ce565b34801561026557600080fd5b5061015961027436600461258d565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b3480156102aa57600080fd5b506001546101f49073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102d757600080fd5b506101596102e636600461263b565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b34801561031c57600080fd5b5061010261032b3660046126a4565b610869565b60005473ffffffffffffffffffffffffffffffffffffffff163314610381576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831661043c5760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146103f6576040519150601f19603f3d011682016040523d82523d6000602084013e6103fb565b606091505b5050905080610436576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061045d565b61045d73ffffffffffffffffffffffffffffffffffffffff841683836109c7565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000148061054d57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b7f150b7a02000000000000000000000000000000000000000000000000000000005b949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105ce576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661061d576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016106c2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181600001819055506106dd868686868660006001610a16565b600090555050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461073a576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610849576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561085d8787878787876000610a16565b60009055505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108ba576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610907576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610956576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610a0c576390b8ec186000526004601cfd5b6000603452505050565b600080808888610a276001826126c1565b818110610a3657610a366126fb565b9050602002810190610a48919061272a565b610a599060808101906060016126a4565b905073ffffffffffffffffffffffffffffffffffffffff811615610a8757610a8081610cef565b9150610a9e565b34610a9182610cef565b610a9b91906126c1565b91505b73ffffffffffffffffffffffffffffffffffffffff871615610c1157610ac387610cef565b92508315610b74576040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff89169063dd62ed3e90604401602060405180830381865afa158015610b3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b629190612768565b9050610b6e8882610da7565b50610c28565b6002546040517f15dacbea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015233602483015230604483015260648201889052909116906315dacbea90608401600060405180830381600087803b158015610bf457600080fd5b505af1158015610c08573d6000803e3d6000fd5b50505050610c28565b34610c1b88610cef565b610c2591906126c1565b92505b610c348a8a8a89610f27565b6000610c3f88610cef565b905083811115610c5d57610c5d8888610c5887856126c1565b611239565b6000610c6883610cef565b905083811115610c8157610c818389610c5887856126c1565b6040805173ffffffffffffffffffffffffffffffffffffffff808c1682528a1660208201529081018290524260608201528c907fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a2505050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610da0576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610d77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9b9190612768565b61054d565b4792915050565b80600003610de1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e3a5780341015610e36576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610ea7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ecb9190612768565b905081811015610f16576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610f228333308561126a565b505050565b828282816001811461114e576000610f3f8585611484565b905060008585610f506001866126c1565b818110610f5f57610f5f6126fb565b9050602002810190610f71919061272a565b610f829060808101906060016126a4565b9050600088815b818110156110635760025473ffffffffffffffffffffffffffffffffffffffff168c8c83818110610fbc57610fbc6126fb565b9050602002810190610fce919061272a565b610fdc9060208101906126a4565b73ffffffffffffffffffffffffffffffffffffffff1603611029576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368c8c8381811061103c5761103c6126fb565b905060200281019061104e919061272a565b905061105a8e82611590565b50600101610f89565b505060005b6110736001866126c1565b81101561114557600088888381811061108e5761108e6126fb565b90506020028101906110a0919061272a565b6110b19060808101906060016126a4565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461113c576110ef81610cef565b9250848281518110611103576111036126fb565b602002602001015183111561113c5761113c8188878581518110611129576111296126fb565b602002602001015186610c5891906126c1565b50600101611068565b5050505061122f565b8560005b8181101561122c5760025473ffffffffffffffffffffffffffffffffffffffff16898983818110611185576111856126fb565b9050602002810190611197919061272a565b6111a59060208101906126a4565b73ffffffffffffffffffffffffffffffffffffffff16036111f2576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b36898983818110611205576112056126fb565b9050602002810190611217919061272a565b90506112238b82611590565b50600101611152565b50505b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83161561126057610f22838383611888565b610f228282611a0a565b73ffffffffffffffffffffffffffffffffffffffff84166112b7576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611304576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611375573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113999190612768565b90506113a782868686611b34565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611417573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061143b9190612768565b61144591906126c1565b1461147c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60608160008167ffffffffffffffff8111156114a2576114a2612264565b6040519080825280602002602001820160405280156114cb578160200160208202803683370190505b5090506000805b83811015611585578686828181106114ec576114ec6126fb565b90506020028101906114fe919061272a565b61150f9060808101906060016126a4565b915061151a82610cef565b83828151811061152c5761152c6126fb565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661157d5734838281518110611565576115656126fb565b6020026020010181815161157991906126c1565b9052505b6001016114d2565b509095945050505050565b6115a66115a060208301836126a4565b3b151590565b6115dc576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361161c576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061164b61163160608501604086016126a4565b73ffffffffffffffffffffffffffffffffffffffff161590565b61165657600061165c565b82608001355b9050600061167861167360608601604087016126a4565b610cef565b9050600061168f61167360808701606088016126a4565b9050826000036116c6576116c66116ac60608701604088016126a4565b6116bc60408801602089016126a4565b8760800135611c10565b8460800135821015611711576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610f0d565b60008061172160208801886126a4565b73ffffffffffffffffffffffffffffffffffffffff168561174560a08a018a612781565b6040516117539291906127e6565b60006040518083038185875af1925050503d8060008114611790576040519150601f19603f3d011682016040523d82523d6000602084013e611795565b606091505b5091509150816117a8576117a881611d53565b60006117bd61167360808a0160608b016126a4565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896117ee60208b018b6126a4565b6117fe60608c0160408d016126a4565b61180e60808d0160608e016126a4565b8c60800135898711611820578661182a565b61182a8a886126c1565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166118d5576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611922576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561198f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119b39190612768565b9050808211156119f9576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610f0d565b611a04848484611d5d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611a57576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611a9a576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610f0d565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611af4576040519150601f19603f3d011682016040523d82523d6000602084013e611af9565b606091505b5050905080610f22576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052611a049085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611db3565b73ffffffffffffffffffffffffffffffffffffffff8316611c3057505050565b73ffffffffffffffffffffffffffffffffffffffff8216611c7d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611cf2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d169190612768565b1015610f2257611d2883836000611ec2565b610f2283837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611ec2565b8051602082018181fd5b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610f229084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611b8e565b6000611e15826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166120449092919063ffffffff16565b9050805160001480611e36575080806020019051810190611e3691906127f6565b610f22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610f0d565b801580611f6257506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611f3c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f609190612768565b155b611fee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610f0d565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610f229084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611b8e565b60606105758484600085856000808673ffffffffffffffffffffffffffffffffffffffff168587604051612078919061283c565b60006040518083038185875af1925050503d80600081146120b5576040519150601f19603f3d011682016040523d82523d6000602084013e6120ba565b606091505b50915091506120cb878383876120d6565b979650505050505050565b6060831561216c5782516000036121655773ffffffffffffffffffffffffffffffffffffffff85163b612165576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610f0d565b5081610575565b61057583838151156121815781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0d919061284e565b73ffffffffffffffffffffffffffffffffffffffff811681146121d757600080fd5b50565b6000806000606084860312156121ef57600080fd5b83356121fa816121b5565b9250602084013561220a816121b5565b929592945050506040919091013590565b60006020828403121561222d57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461225d57600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156122da576122da612264565b604052919050565b600082601f8301126122f357600080fd5b813567ffffffffffffffff81111561230d5761230d612264565b61233e60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601612293565b81815284602083860101111561235357600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561238657600080fd5b8435612391816121b5565b935060208501356123a1816121b5565b925060408501359150606085013567ffffffffffffffff8111156123c457600080fd5b6123d0878288016122e2565b91505092959194509250565b60008083601f8401126123ee57600080fd5b50813567ffffffffffffffff81111561240657600080fd5b6020830191508360208260051b850101111561242157600080fd5b9250929050565b60008060008060006080868803121561244057600080fd5b85359450602086013567ffffffffffffffff81111561245e57600080fd5b61246a888289016123dc565b909550935050604086013561247e816121b5565b9150606086013561248e816121b5565b809150509295509295909350565b60008060008060008060a087890312156124b557600080fd5b86359550602087013567ffffffffffffffff8111156124d357600080fd5b6124df89828a016123dc565b90965094505060408701356124f3816121b5565b92506060870135612503816121b5565b80925050608087013590509295509295509295565b600082601f83011261252957600080fd5b8135602067ffffffffffffffff82111561254557612545612264565b8160051b612554828201612293565b928352848101820192828101908785111561256e57600080fd5b83870192505b848310156120cb57823582529183019190830190612574565b600080600080600060a086880312156125a557600080fd5b85356125b0816121b5565b945060208601356125c0816121b5565b9350604086013567ffffffffffffffff808211156125dd57600080fd5b6125e989838a01612518565b945060608801359150808211156125ff57600080fd5b61260b89838a01612518565b9350608088013591508082111561262157600080fd5b5061262e888289016122e2565b9150509295509295909350565b600080600080600060a0868803121561265357600080fd5b853561265e816121b5565b9450602086013561266e816121b5565b93506040860135925060608601359150608086013567ffffffffffffffff81111561269857600080fd5b61262e888289016122e2565b6000602082840312156126b657600080fd5b813561225d816121b5565b8181038181111561054d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261275e57600080fd5b9190910192915050565b60006020828403121561277a57600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126127b657600080fd5b83018035915067ffffffffffffffff8211156127d157600080fd5b60200191503681900382131561242157600080fd5b8183823760009101908152919050565b60006020828403121561280857600080fd5b8151801515811461225d57600080fd5b60005b8381101561283357818101518382015260200161281b565b50506000910152565b6000825161275e818460208701612818565b602081526000825180602084015261286d816040850160208701612818565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220ad6f124a1760fc27ec5c9d3ffeda50cccbccbbf9a744bfa34aacbea81ea7866864736f6c63430008110033";
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
