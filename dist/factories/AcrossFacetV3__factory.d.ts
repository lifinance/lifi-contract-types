import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetV3, AcrossFacetV3Interface } from "../AcrossFacetV3";
declare type AcrossFacetV3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetV3__factory extends ContractFactory {
    constructor(...args: AcrossFacetV3ConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetV3>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetV3;
    connect(signer: Signer): AcrossFacetV3__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002a7f38038062002a7f833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a05161299b620000e46000396000818160f601526107d00152600081816099015281816107850152818161088601526108b1015261299b6000f3fe60806040526004361061005a5760003560e01c8063afdac3d611610043578063afdac3d614610087578063eb6d3a11146100e4578063f07494a01461011857600080fd5b806328832cbd1461005f57806328cc431614610074575b600080fd5b61007261006d36600461227b565b610124565b005b61007261008236600461233a565b610366565b34801561009357600080fd5b506100bb7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100f057600080fd5b506100bb7f000000000000000000000000000000000000000000000000000000000000000081565b34801561007257600080fd5b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161019f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101b034476123cd565b9050868061010001516101ef576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102128160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610249576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610287576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102c4576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102d989600001518a60c001518a8a33610553565b60c08a015260006102e98761240c565b9050670de0b6b3a764000061030460a0890160808a016124ea565b67ffffffffffffffff168b60c0015161031d919061250c565b6103279190612523565b60608201526103368a8261069b565b5047915050818111156103585761035860008461035385856123cd565b6109be565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103e1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103f234476123cd565b9050846104178160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561044e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361048c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104c9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610507576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61051987608001518860c001516109f4565b61052b876105268861240c565b61069b565b50479050818111156105475761054760008461035385856123cd565b50506000909155505050565b60008280820361058f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561059e6001856123cd565b8181106105ad576105ad61255e565b90506020028101906105bf919061258d565b6105d09060808101906060016125cb565b905060006105dd82610b6a565b905073ffffffffffffffffffffffffffffffffffffffff82166106075761060434826123cd565b90505b60006106138888610c23565b905061061f8888610d2f565b61062c8a89898985610d9c565b60008261063885610b6a565b61064291906123cd565b90508981101561068d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b8161012001511515600082610120015151111515146106e6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81610120015115801561072d5750806000015173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b15610764576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff1661087c577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b9392328360c00151836020015184600001517f000000000000000000000000000000000000000000000000000000000000000086604001518860c0015188606001518a60e001518a60a001518b60c001518c60e001518d61010001518e61012001516040518e63ffffffff1660e01b81526004016108459c9b9a99989796959493929190612654565b6000604051808303818588803b15801561085e57600080fd5b505af1158015610872573d6000803e3d6000fd5b5050505050610983565b6108af82608001517f00000000000000000000000000000000000000000000000000000000000000008460c0015161114e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b93923282602001518360000151856080015185604001518760c0015187606001518960e001518960a001518a60c001518b60e001518c61010001518d61012001516040518d63ffffffff1660e01b81526004016109509c9b9a99989796959493929190612654565b600060405180830381600087803b15801561096a57600080fd5b505af115801561097e573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516109b291906126ec565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156109ea576109e5838383611285565b505050565b6109e58282611407565b80600003610a2e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a875780341015610a83576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610af4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1891906127ff565b905081811015610b5e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610684565b6109e583333085611531565b600073ffffffffffffffffffffffffffffffffffffffff821615610c1b576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610bf2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1691906127ff565b610c1d565b475b92915050565b60608160008167ffffffffffffffff811115610c4157610c41612034565b604051908082528060200260200182016040528015610c6a578160200160208202803683370190505b5090506000805b83811015610d2457868682818110610c8b57610c8b61255e565b9050602002810190610c9d919061258d565b610cae9060808101906060016125cb565b9150610cb982610b6a565b838281518110610ccb57610ccb61255e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d1c5734838281518110610d0457610d0461255e565b60200260200101818151610d1891906123cd565b9052505b600101610c71565b509095945050505050565b60005b818110156109e55736838383818110610d4d57610d4d61255e565b9050602002810190610d5f919061258d565b9050610d7160e0820160c08301612818565b15610d9357610d93610d8960608301604084016125cb565b82608001356109f4565b50600101610d32565b8383838382600181146110695760008585610db86001856123cd565b818110610dc757610dc761255e565b9050602002810190610dd9919061258d565b610dea9060808101906060016125cb565b9050600089815b81811015610f9557368d8d83818110610e0c57610e0c61255e565b9050602002810190610e1e919061258d565b9050610e4d610e3360608301604084016125cb565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610eb05750610eb0610e6660408301602084016125cb565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610ec75750610ec7610e6660208301836125cb565b8015610f4c5750610f4c610ede60a0830183612835565b610eed916004916000916128a1565b610ef6916128cb565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f82576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f8c8f8261174b565b50600101610df1565b505060005b610fa56001856123cd565b811015611061576000888883818110610fc057610fc061255e565b9050602002810190610fd2919061258d565b610fe39060808101906060016125cb565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110585785828151811061102a5761102a61255e565b602002602001015161103b82610b6a565b61104591906123cd565b92508215611058576110588188856109be565b50600101610f9a565b505050611142565b8760005b8181101561113f57368b8b838181106110885761108861255e565b905060200281019061109a919061258d565b90506110af610e3360608301604084016125cb565b806110c857506110c8610e6660408301602084016125cb565b80156110df57506110df610e6660208301836125cb565b80156110f657506110f6610ede60a0830183612835565b61112c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111368d8261174b565b5060010161106d565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661116e57505050565b73ffffffffffffffffffffffffffffffffffffffff82166111bb576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611230573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125491906127ff565b10156109e5576109e583837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a29565b73ffffffffffffffffffffffffffffffffffffffff83166112d2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661131f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561138c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b091906127ff565b9050808211156113f6576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610684565b611401848484611b97565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611454576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611497576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610684565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146114f1576040519150601f19603f3d011682016040523d82523d6000602084013e6114f6565b606091505b50509050806109e5576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661157e576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166115cb576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561163c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061166091906127ff565b905061166e82868686611bed565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156116de573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170291906127ff565b61170c91906123cd565b14611743576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61176161175b60208301836125cb565b3b151590565b611797576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036117d7576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006117ec610e3360608501604086016125cb565b6117f75760006117fd565b82608001355b9050600061181961181460608601604087016125cb565b610b6a565b9050600061183061181460808701606088016125cb565b9050826000036118675761186761184d60608701604088016125cb565b61185d60408801602089016125cb565b876080013561114e565b84608001358210156118b2576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610684565b6000806118c260208801886125cb565b73ffffffffffffffffffffffffffffffffffffffff16856118e660a08a018a612835565b6040516118f4929190612913565b60006040518083038185875af1925050503d8060008114611931576040519150601f19603f3d011682016040523d82523d6000602084013e611936565b606091505b5091509150816119495761194981611c4b565b600061195e61181460808a0160608b016125cb565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961198f60208b018b6125cb565b61199f60608c0160408d016125cb565b6119af60808d0160608e016125cb565b8c608001358987116119c157866119cb565b6119cb8a886123cd565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611ab58482611c55565b6114015760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611b8d9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d16565b6114018482611d16565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109e59084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611b0b565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526114019085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611b0b565b8051602082018181fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611c7f9190612923565b6000604051808303816000865af19150503d8060008114611cbc576040519150601f19603f3d011682016040523d82523d6000602084013e611cc1565b606091505b5091509150818015611ceb575080511580611ceb575080806020019051810190611ceb9190612935565b8015611d0d575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b6000611d78826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e259092919063ffffffff16565b9050805160001480611d99575080806020019051810190611d999190612935565b6109e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610684565b6060611e348484600085611e3c565b949350505050565b606082471015611ece576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610684565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ef79190612923565b60006040518083038185875af1925050503d8060008114611f34576040519150601f19603f3d011682016040523d82523d6000602084013e611f39565b606091505b5091509150611f4a87838387611f55565b979650505050505050565b60608315611feb578251600003611fe45773ffffffffffffffffffffffffffffffffffffffff85163b611fe4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610684565b5081611e34565b611e3483838151156120005781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106849190612952565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561208757612087612034565b60405290565b600082601f83011261209e57600080fd5b813567ffffffffffffffff808211156120b9576120b9612034565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156120ff576120ff612034565b8160405283815286602085880101111561211857600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461215c57600080fd5b919050565b801515811461216f57600080fd5b50565b803561215c81612161565b6000610140828403121561219057600080fd5b612198612063565b905081358152602082013567ffffffffffffffff808211156121b957600080fd5b6121c58583860161208d565b602084015260408401359150808211156121de57600080fd5b506121eb8482850161208d565b6040830152506121fd60608301612138565b606082015261220e60808301612138565b608082015261221f60a08301612138565b60a082015260c082013560c082015260e082013560e0820152610100612246818401612172565b90820152610120612258838201612172565b9082015292915050565b6000610140828403121561227557600080fd5b50919050565b6000806000806060858703121561229157600080fd5b843567ffffffffffffffff808211156122a957600080fd5b6122b58883890161217d565b955060208701359150808211156122cb57600080fd5b818701915087601f8301126122df57600080fd5b8135818111156122ee57600080fd5b8860208260051b850101111561230357600080fd5b60208301955080945050604087013591508082111561232157600080fd5b5061232e87828801612262565b91505092959194509250565b6000806040838503121561234d57600080fd5b823567ffffffffffffffff8082111561236557600080fd5b6123718683870161217d565b9350602085013591508082111561238757600080fd5b5061239485828601612262565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610c1d57610c1d61239e565b803567ffffffffffffffff8116811461215c57600080fd5b803563ffffffff8116811461215c57600080fd5b6000610140823603121561241f57600080fd5b612427612063565b61243083612138565b815261243e60208401612138565b602082015261244f60408401612138565b60408201526060830135606082015261246a608084016123e0565b608082015261247b60a08401612138565b60a082015261248c60c084016123f8565b60c082015261249d60e084016123f8565b60e08201526101006124b08185016123f8565b908201526101208381013567ffffffffffffffff8111156124d057600080fd5b6124dc3682870161208d565b918301919091525092915050565b6000602082840312156124fc57600080fd5b612505826123e0565b9392505050565b8082028115828204841417610c1d57610c1d61239e565b600082612559577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126125c157600080fd5b9190910192915050565b6000602082840312156125dd57600080fd5b61250582612138565b60005b838110156126015781810151838201526020016125e9565b50506000910152565b600081518084526126228160208601602086016125e6565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff8d811682528c811660208301528b811660408301528a81166060830152608082018a905260a0820189905260c08201889052861660e082015263ffffffff858116610100830152848116610120830152831661014082015260006101806101608301526126da61018083018461260a565b9e9d5050505050505050505050505050565b60208152815160208201526000602083015161014080604085015261271561016085018361260a565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612750838261260a565b925050606085015161277a608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127ed8187018315159052565b90950151151593019290925250919050565b60006020828403121561281157600080fd5b5051919050565b60006020828403121561282a57600080fd5b813561250581612161565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261286a57600080fd5b83018035915067ffffffffffffffff82111561288557600080fd5b60200191503681900382131561289a57600080fd5b9250929050565b600080858511156128b157600080fd5b838611156128be57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561290b5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600082516125c18184602087016125e6565b60006020828403121561294757600080fd5b815161250581612161565b602081526000612505602083018461260a56fea26469706673582212208d101118a28b91522c6d7e3c43809c32288010684bb4d3212ae26640639de9db64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "bla";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "spokePool";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV3";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
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
        }, {
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV3.AcrossV3Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountPercent";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAcrossV3";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV3.AcrossV3Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountPercent";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "wrappedNative";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
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
        readonly name: "InformationMismatch";
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
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
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
        readonly name: "NoTransferToNullAddress";
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
    }];
    static createInterface(): AcrossFacetV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetV3;
}
export {};
