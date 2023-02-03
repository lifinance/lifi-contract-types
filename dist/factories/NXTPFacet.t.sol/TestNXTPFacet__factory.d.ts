import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TestNXTPFacet, TestNXTPFacetInterface } from "../../NXTPFacet.t.sol/TestNXTPFacet";
declare type TestNXTPFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestNXTPFacet__factory extends ContractFactory {
    constructor(...args: TestNXTPFacetConstructorParams);
    deploy(txManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TestNXTPFacet>;
    getDeployTransaction(txManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TestNXTPFacet;
    connect(signer: Signer): TestNXTPFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200332f3803806200332f833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516132946200009b60003960008181610a170152610ae701526132946000f3fe60806040526004361061003f5760003560e01c8063536db266146100445780639c70d7e614610066578063c561c14814610079578063c9fb76b114610099575b600080fd5b34801561005057600080fd5b5061006461005f366004612434565b6100ac565b005b61006461007436600461273a565b6100b8565b34801561008557600080fd5b506100646100943660046127f9565b610326565b6100646100a736600461283b565b6103a4565b6100b581610605565b50565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610133576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014434476128ce565b905086806101000151610183576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101a68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101dd576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361021b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610258576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610120890151151561027661026c886129c6565b6040015151151590565b1515146102af576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b9868a6106f2565b6102ce89600001518a60c001518a8a336108c1565b60c08a01526102e5896102e0886129c6565b610a04565b5047905060008282116102f9576000610303565b61030383836128ce565b905080156103175761031760008583610c3c565b50506000909255505050505050565b6100b5817fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161041f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061043034476128ce565b90508480610100015115610470576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856104938160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104ca576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610508576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610545576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610120870151151561055961026c886129c6565b151514610592576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61059c86886106f2565b6105b96105af60a0880160808901612434565b8860c00151610c72565b6105c6876102e0886129c6565b5047905060008282116105da5760006105e4565b6105e483836128ce565b905080156105f8576105f860008583610c3c565b5050600090925550505050565b61060e81610de4565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1615610662575050565b73ffffffffffffffffffffffffffffffffffffffff909116600081815260208381526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556002909401805494850181558252902090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b806080015173ffffffffffffffffffffffffffffffffffffffff168260800160208101906107209190612434565b73ffffffffffffffffffffffffffffffffffffffff16146107a2576040517f90d4ad8f00000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f73656e64696e674173736574496400000000000000000000000000000000000060448201526064015b60405180910390fd5b60a081015173ffffffffffffffffffffffffffffffffffffffff166107ce610100840160e08501612434565b73ffffffffffffffffffffffffffffffffffffffff161461084b576040517f90d4ad8f00000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f726563656976696e6741646472657373000000000000000000000000000000006044820152606401610799565b8060e00151826101400135146108bd576040517f90d4ad8f00000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f726563656976696e67436861696e4964000000000000000000000000000000006044820152606401610799565b5050565b6000828082036108fd576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561090c6001856128ce565b81811061091b5761091b612a9f565b905060200281019061092d9190612ace565b61093e906080810190606001612434565b9050600061094b82610e82565b905073ffffffffffffffffffffffffffffffffffffffff82166109755761097234826128ce565b90505b60006109818888610f3b565b905061098d8888611047565b61099a8a898989856110a8565b6000826109a685610e82565b6109b091906128ce565b9050898110156109f6576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610799565b9a9950505050505050505050565b80516080015160c0830151610a3c9082907f00000000000000000000000000000000000000000000000000000000000000009061145a565b815160c081015160e09091015173ffffffffffffffffffffffffffffffffffffffff8216610a96576040517fd7a2b02200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610ae3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d9459372610b3f8373ffffffffffffffffffffffffffffffffffffffff161590565b610b4a576000610b50565b8460c001515b6040518060e00160405280866000015181526020018760c001518152602001866020015181526020018660400151815260200186606001518152602001866080015181526020018660a001518152506040518363ffffffff1660e01b8152600401610bbb9190612cfa565b6102006040518083038185885af1158015610bda573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610bff9190612dce565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610c2f9190612ed3565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831615610c6857610c638383836115a5565b505050565b610c6382826116d4565b73ffffffffffffffffffffffffffffffffffffffff8216610cc757803410156108bd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600003610d01576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610d6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d929190612fe6565b905081811015610dd8576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610799565b610c63833330856117fe565b73ffffffffffffffffffffffffffffffffffffffff8116610e31576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b6000036100b5576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615610f33576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610f0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2e9190612fe6565b610f35565b475b92915050565b60608160008167ffffffffffffffff811115610f5957610f59612451565b604051908082528060200260200182016040528015610f82578160200160208202803683370190505b5090506000805b8381101561103c57868682818110610fa357610fa3612a9f565b9050602002810190610fb59190612ace565b610fc6906080810190606001612434565b9150610fd182610e82565b838281518110610fe357610fe3612a9f565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611034573483828151811061101c5761101c612a9f565b6020026020010181815161103091906128ce565b9052505b600101610f89565b509095945050505050565b60005b81811015610c6357600083838381811061106657611066612a9f565b90506020028101906110789190612ace565b61108190612fff565b90508060c001511561109f5761109f81604001518260800151610c72565b5060010161104a565b83838383826001811461137557600085856110c46001856128ce565b8181106110d3576110d3612a9f565b90506020028101906110e59190612ace565b6110f6906080810190606001612434565b9050600089815b818110156112a157368d8d8381811061111857611118612a9f565b905060200281019061112a9190612ace565b905061115961113f6060830160408401612434565b73ffffffffffffffffffffffffffffffffffffffff161590565b806111bc57506111bc6111726040830160208401612434565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156111d357506111d36111726020830183612434565b801561125857506112586111ea60a08301836130a4565b6111f991600491600091613110565b6112029161313a565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61128e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112988f82611a18565b506001016110fd565b505060005b6112b16001856128ce565b81101561136d5760008888838181106112cc576112cc612a9f565b90506020028101906112de9190612ace565b6112ef906080810190606001612434565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146113645785828151811061133657611336612a9f565b602002602001015161134782610e82565b61135191906128ce565b9250821561136457611364818885610c3c565b506001016112a6565b50505061144e565b8760005b8181101561144b57368b8b8381811061139457611394612a9f565b90506020028101906113a69190612ace565b90506113bb61113f6060830160408401612434565b806113d457506113d46111726040830160208401612434565b80156113eb57506113eb6111726020830183612434565b801561140257506114026111ea60a08301836130a4565b611438576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114428d82611a18565b50600101611379565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661147a57505050565b73ffffffffffffffffffffffffffffffffffffffff82166114c7576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa15801561153d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115619190612fe6565b90508181101561159f5761159f848461159a847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6128ce565b611d2e565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166115f2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561165f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116839190612fe6565b9050808211156116c9576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610799565b61159f848484611eaa565b73ffffffffffffffffffffffffffffffffffffffff8216611721576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611764576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610799565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146117be576040519150601f19603f3d011682016040523d82523d6000602084013e6117c3565b606091505b5050905080610c63576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661184b576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611898576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611909573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061192d9190612fe6565b905061193b82868686611f00565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156119ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119cf9190612fe6565b6119d991906128ce565b14611a10576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b611a2e611a286020830183612434565b3b151590565b611a64576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611aa4576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611ab961113f6060850160408601612434565b611ac4576000611aca565b82608001355b90506000611ae6611ae16060860160408701612434565b610e82565b90506000611afd611ae16080870160608801612434565b905082600003611b3457611b34611b1a6060870160408801612434565b611b2a6040880160208901612434565b876080013561145a565b8460800135821015611b7f576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610799565b600080611b8f6020880188612434565b73ffffffffffffffffffffffffffffffffffffffff1685611bb360a08a018a6130a4565b604051611bc1929190613182565b60006040518083038185875af1925050503d8060008114611bfe576040519150601f19603f3d011682016040523d82523d6000602084013e611c03565b606091505b509150915081611c4e576000611c1882611f5e565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107999190613192565b6000611c63611ae160808a0160608b01612434565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611c9460208b018b612434565b611ca460608c0160408d01612434565b611cb460808d0160608e01612434565b8c60800135898711611cc65786611cd0565b611cd08a886128ce565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611da5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dc99190612fe6565b611dd391906131a5565b60405173ffffffffffffffffffffffffffffffffffffffff851660248201526044810182905290915061159f9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611fdc565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610c639084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611e28565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261159f9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611e28565b6060604482511015611fa357505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611fbf6004808551611fb791906128ce565b8591906120e8565b905080806020019051810190611fd591906131b8565b9392505050565b600061203e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166122029092919063ffffffff16565b805190915015610c63578080602001905181019061205c919061322f565b610c63576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610799565b6060816120f681601f6131a5565b101561212e576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61213882846131a5565b84511015612172576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561219157604051915060008252602082016040526121f9565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156121ca5780518352602092830192016121b2565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60606122118484600085612219565b949350505050565b6060824710156122ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610799565b73ffffffffffffffffffffffffffffffffffffffff85163b612329576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610799565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051612352919061324c565b60006040518083038185875af1925050503d806000811461238f576040519150601f19603f3d011682016040523d82523d6000602084013e612394565b606091505b50915091506123a48282866123af565b979650505050505050565b606083156123be575081611fd5565b8251156123ce5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107999190613192565b73ffffffffffffffffffffffffffffffffffffffff811681146100b557600080fd5b803561242f81612402565b919050565b60006020828403121561244657600080fd5b8135611fd581612402565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156124a4576124a4612451565b60405290565b6040516101a0810167ffffffffffffffff811182821017156124a4576124a4612451565b60405160c0810167ffffffffffffffff811182821017156124a4576124a4612451565b604051610200810167ffffffffffffffff811182821017156124a4576124a4612451565b60405160e0810167ffffffffffffffff811182821017156124a4576124a4612451565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561257f5761257f612451565b604052919050565b600067ffffffffffffffff8211156125a1576125a1612451565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126125de57600080fd5b81356125f16125ec82612587565b612538565b81815284602083860101111561260657600080fd5b816020850160208301376000918101602001919091529392505050565b80151581146100b557600080fd5b803561242f81612623565b6000610140828403121561264f57600080fd5b612657612480565b905081358152602082013567ffffffffffffffff8082111561267857600080fd5b612684858386016125cd565b6020840152604084013591508082111561269d57600080fd5b506126aa848285016125cd565b6040830152506126bc60608301612424565b60608201526126cd60808301612424565b60808201526126de60a08301612424565b60a082015260c082013560c082015260e082013560e0820152610100612705818401612631565b90820152610120612717838201612631565b9082015292915050565b6000610240828403121561273457600080fd5b50919050565b6000806000806060858703121561275057600080fd5b843567ffffffffffffffff8082111561276857600080fd5b6127748883890161263c565b9550602087013591508082111561278a57600080fd5b818701915087601f83011261279e57600080fd5b8135818111156127ad57600080fd5b8860208260051b85010111156127c257600080fd5b6020830195508094505060408701359150808211156127e057600080fd5b506127ed87828801612721565b91505092959194509250565b60006020828403121561280b57600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611fd557600080fd5b6000806040838503121561284e57600080fd5b823567ffffffffffffffff8082111561286657600080fd5b6128728683870161263c565b9350602085013591508082111561288857600080fd5b5061289585828601612721565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610f3557610f3561289f565b60006101a082840312156128f457600080fd5b6128fc6124aa565b905061290782612424565b815261291560208301612424565b602082015261292660408301612424565b604082015261293760608301612424565b606082015261294860808301612424565b608082015261295960a08301612424565b60a082015261296a60c08301612424565b60c082015261297b60e08301612424565b60e082015261010061298e818401612424565b908201526101208281013590820152610140808301359082015261016080830135908201526101809182013591810191909152919050565b600061024082360312156129d957600080fd5b6129e16124ce565b6129eb36846128e1565b81526101a083013560208201526101c083013567ffffffffffffffff80821115612a1457600080fd5b612a20368387016125cd565b60408401526101e0850135915080821115612a3a57600080fd5b612a46368387016125cd565b6060840152610200850135915080821115612a6057600080fd5b612a6c368387016125cd565b6080840152610220850135915080821115612a8657600080fd5b50612a93368286016125cd565b60a08301525092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612b0257600080fd5b9190910192915050565b805173ffffffffffffffffffffffffffffffffffffffff1682526020810151612b4d602084018273ffffffffffffffffffffffffffffffffffffffff169052565b506040810151612b75604084018273ffffffffffffffffffffffffffffffffffffffff169052565b506060810151612b9d606084018273ffffffffffffffffffffffffffffffffffffffff169052565b506080810151612bc5608084018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a0810151612bed60a084018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c0810151612c1560c084018273ffffffffffffffffffffffffffffffffffffffff169052565b5060e0810151612c3d60e084018273ffffffffffffffffffffffffffffffffffffffff169052565b506101008181015173ffffffffffffffffffffffffffffffffffffffff169083015261012080820151908301526101408082015190830152610160808201519083015261018090810151910152565b60005b83811015612ca7578181015183820152602001612c8f565b50506000910152565b60008151808452612cc8816020860160208601612c8c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152612d0c602082018351612b0c565b60208201516101c082015260408201516101e08201526000606083015161026080610200850152612d41610280850183612cb0565b915060808501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08086850301610220870152612d7e8483612cb0565b935060a087015191508086850301610240870152612d9c8483612cb0565b935060c0870151915080868503018387015250612db98382612cb0565b9695505050505050565b805161242f81612402565b60006102008284031215612de157600080fd5b612de96124f1565b612df283612dc3565b8152612e0060208401612dc3565b6020820152612e1160408401612dc3565b6040820152612e2260608401612dc3565b6060820152612e3360808401612dc3565b6080820152612e4460a08401612dc3565b60a0820152612e5560c08401612dc3565b60c0820152612e6660e08401612dc3565b60e0820152610100612e79818501612dc3565b9082015261012083810151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e0928301519281019290925250919050565b602081528151602082015260006020830151610140806040850152612efc610160850183612cb0565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612f378382612cb0565b9250506060850151612f61608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612fd48187018315159052565b90950151151593019290925250919050565b600060208284031215612ff857600080fd5b5051919050565b600060e0823603121561301157600080fd5b613019612515565b61302283612424565b815261303060208401612424565b602082015261304160408401612424565b604082015261305260608401612424565b60608201526080830135608082015260a083013567ffffffffffffffff81111561307b57600080fd5b613087368286016125cd565b60a08301525061309960c08401612631565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126130d957600080fd5b83018035915067ffffffffffffffff8211156130f457600080fd5b60200191503681900382131561310957600080fd5b9250929050565b6000808585111561312057600080fd5b8386111561312d57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561317a5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611fd56020830184612cb0565b80820180821115610f3557610f3561289f565b6000602082840312156131ca57600080fd5b815167ffffffffffffffff8111156131e157600080fd5b8201601f810184136131f257600080fd5b80516132006125ec82612587565b81815285602083850101111561321557600080fd5b613226826020830160208601612c8c565b95945050505050565b60006020828403121561324157600080fd5b8151611fd581612623565b60008251612b02818460208701612c8c56fea2646970667358221220060c8627c329e3de698aa9fdfd955229f51de583409c0ec6d4e9503827f2241764736f6c63430008110033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            components: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): TestNXTPFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestNXTPFacet;
}
export {};
