import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SymbiosisFacet, SymbiosisFacetInterface } from "../SymbiosisFacet";
type SymbiosisFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SymbiosisFacet__factory extends ContractFactory {
    constructor(...args: SymbiosisFacetConstructorParams);
    deploy(_symbiosisMetaRouter: PromiseOrValue<string>, _symbiosisGateway: PromiseOrValue<string>, _onchainSwapV3: PromiseOrValue<string>, _onchainSwapV3Gateway: PromiseOrValue<string>, _backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SymbiosisFacet>;
    getDeployTransaction(_symbiosisMetaRouter: PromiseOrValue<string>, _symbiosisGateway: PromiseOrValue<string>, _onchainSwapV3: PromiseOrValue<string>, _onchainSwapV3Gateway: PromiseOrValue<string>, _backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SymbiosisFacet;
    connect(signer: Signer): SymbiosisFacet__factory;
    static readonly bytecode = "0x610120604052348015610010575f5ffd5b5060405161290838038061290883398101604081905261002f916100ea565b6001600160a01b038516158061004c57506001600160a01b038416155b8061005e57506001600160a01b038116155b1561007c576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b038381161590831615146100aa576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0394851660805292841660a05290831660c052821660e052166101005261015b565b6001600160a01b03811681146100e7575f5ffd5b50565b5f5f5f5f5f60a086880312156100fe575f5ffd5b8551610109816100d3565b602087015190955061011a816100d3565b604087015190945061012b816100d3565b606087015190935061013c816100d3565b608087015190925061014d816100d3565b809150509295509295909350565b60805160a05160c05160e0516101005161276961019f5f395f61155e01525f61094a01525f8181610712015261097501525f610af901525f610b2401526127695ff3fe608060405260043610610028575f3560e01c8063bb58b1051461002c578063e8548a5914610041575b5f5ffd5b61003f61003a366004611ff0565b610054565b005b61003f61004f366004612055565b610279565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df344761211b565b9050846101048160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610178576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610231576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024388608001518960c00151610462565b61024d8888610516565b50479150508181111561026e5761026e5f84610269858561211b565b610541565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610304344761211b565b905086806101000151610343576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103668160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561039d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036103da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610417576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61042b895f01518a60c001518a8a33610576565b60c08a015261043a8987610516565b5047905081811115610455576104555f84610269858561211b565b50505f9091555050505050565b805f0361049b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166104f457803410156104f0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6104f073ffffffffffffffffffffffffffffffffffffffff83163330846106b8565b61052861014082016101208301612153565b15610537576104f08282610710565b6104f08282610ab8565b73ffffffffffffffffffffffffffffffffffffffff831661056b576105668282610daa565b505050565b610566838383610e17565b5f828082036105b1576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856105bf60018561211b565b8181106105ce576105ce612173565b90506020028101906105e091906121a0565b6105f19060808101906060016121dc565b90505f6105fd82610e85565b905073ffffffffffffffffffffffffffffffffffffffff821661062757610624348261211b565b90505b5f6106328888610ecf565b905061063e8888610fd9565b61064b8a89898985611045565b5f8261065685610e85565b610660919061211b565b9050898110156106aa576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661070357637939f4245f526004601cfd5b5f60605260405250505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661077d576040517f78982fad00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f1146107e4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6512309ce540018260e0015114610827576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b803561085f576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610869828261128d565b81515f9081527f538927223924206bd240a355218da67e32e6e52053f03de093634bb0225f5b21602081905260409091205460ff16156108d5576040517feb4156ad00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82515f90815260208290526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560808401516109309073ffffffffffffffffffffffffffffffffffffffff161590565b15610940575060c0830151610973565b61097384608001517f00000000000000000000000000000000000000000000000000000000000000008660c0015161161c565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166321c69a198286608001518760c00151876101400160208101906109ce91906121dc565b6109e06101808a016101608b016121dc565b6109ee6101808b018b6121f5565b6040518863ffffffff1660e01b8152600401610a0f9695949392919061225d565b5f604051808303818588803b158015610a26575f5ffd5b505af1158015610a38573d5f5f3e3d5ffd5b50505060e086015186516040518735815291935091507f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a37fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f184604051610aaa9190612353565b60405180910390a150505050565b5f610adb836080015173ffffffffffffffffffffffffffffffffffffffff161590565b90505f8115610aef575060c0830151610b22565b610b2284608001517f00000000000000000000000000000000000000000000000000000000000000008660c0015161161c565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a11b119882604051806101200160405280878060200190610b7b91906121f5565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250602001610bc160408901896121f5565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250602001610c0760c0890189612466565b808060200260200160405190810160405280939291908181526020018383602002808284375f92019190915250505090825250602001610c4d60a0890160808a016121dc565b73ffffffffffffffffffffffffffffffffffffffff168152602001610c7860c0890160a08a016121dc565b73ffffffffffffffffffffffffffffffffffffffff16815260c089015160208201528615156040820152606001610cb6610100890160e08a016121dc565b73ffffffffffffffffffffffffffffffffffffffff168152602001610cdf6101008901896121f5565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b168152610d4d919060040161251a565b5f604051808303818588803b158015610d64575f5ffd5b505af1158015610d76573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f184604051610aaa9190612353565b73ffffffffffffffffffffffffffffffffffffffff8216610df7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104f073ffffffffffffffffffffffffffffffffffffffff831682611648565b73ffffffffffffffffffffffffffffffffffffffff8216610e64576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61056673ffffffffffffffffffffffffffffffffffffffff84168383611661565b5f73ffffffffffffffffffffffffffffffffffffffff821615610ec757610ec273ffffffffffffffffffffffffffffffffffffffff8316306116aa565b610ec9565b475b92915050565b6060815f8167ffffffffffffffff811115610eec57610eec611dba565b604051908082528060200260200182016040528015610f15578160200160208202803683370190505b5090505f5f5b83811015610fce57868682818110610f3557610f35612173565b9050602002810190610f4791906121a0565b610f589060808101906060016121dc565b9150610f6382610e85565b838281518110610f7557610f75612173565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610fc65734838281518110610fae57610fae612173565b60200260200101818151610fc2919061211b565b9052505b600101610f1b565b509095945050505050565b5f5b818110156105665736838383818110610ff657610ff6612173565b905060200281019061100891906121a0565b905061101a60e0820160c08301612153565b1561103c5761103c61103260608301604084016121dc565b8260800135610462565b50600101610fdb565b83838383825f80805b8381101561127157368c8c8381811061106957611069612173565b905060200281019061107b91906121a0565b905061108a60208201826121dc565b935061109c60408201602083016121dc565b925061113f846110af60a08401846121f5565b6110bd916004915f91612680565b6110c6916126a7565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580611227575061117361115960608301604084016121dc565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156111ac57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611227575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b1561125e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112688e826116dd565b5060010161104e565b50505050611282848484845f611950565b505050505050505050565b806101a001354211156112cc576040517f0819bdcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815160c0830151608084015160e08501515f937fcbef770661caade0f9a99582437a7cf8b10673b081ad0a3d8c9c61e5600c0e0d9390929091863561131961016089016101408a016121dc565b61132b6101808a016101608b016121dc565b6113396101808b018b6121f5565b60405161134792919061270d565b60408051918290038220602083019a909a52810197909752606087019590955273ffffffffffffffffffffffffffffffffffffffff938416608087015260a086019290925260c0850152811660e0840152166101008201526101208101919091526101a0830135610140820152610160016040516020818303038152906040528051906020012090505f6114d4604080518082018252601581527f4c492e46492053796d62696f736973204661636574000000000000000000000060209182015281518083018352600181527f31000000000000000000000000000000000000000000000000000000000000009082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f6693c323254b90b9e5daf6fac05df1190d2903b2507eb6350c5ff1e0d1c75bfb818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b6040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281019190915260428101839052606201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120905073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166115c9826115906101c08701876121f5565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250611b6792505050565b73ffffffffffffffffffffffffffffffffffffffff1614611616576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6105668383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611c0b565b5f385f3884865af16104f05763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166116a1576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6116f56116ed60208301836121dc565b6017903b1190565b61172b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361176a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61177e61115960608501604086016121dc565b611788575f61178e565b82608001355b90505f6117a96117a460808601606087016121dc565b610e85565b9050815f036117df576117df6117c560608601604087016121dc565b6117d560408701602088016121dc565b866080013561161c565b5f806117ee60208701876121dc565b73ffffffffffffffffffffffffffffffffffffffff168461181260a08901896121f5565b60405161182092919061270d565b5f6040518083038185875af1925050503d805f811461185a576040519150601f19603f3d011682016040523d82523d5f602084013e61185f565b606091505b5091509150816118725761187281611d32565b5f6118866117a46080890160608a016121dc565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886118b760208a018a6121dc565b6118c760608b0160408c016121dc565b6118d760808c0160608d016121dc565b8b608001358987116118e957866118f3565b6118f38a8861211b565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261195f60018261211b565b81811061196e5761196e612173565b905060200281019061198091906121a0565b6119919060808101906060016121dc565b90505f5f5f5f5f5f5f5b88811015611b57576119ae60018a61211b565b811080156119bd575088600114155b15611a98578d8d828181106119d4576119d4612173565b90506020028101906119e691906121a0565b6119f79060808101906060016121dc565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611a98578a8181518110611a3e57611a3e612173565b6020026020010151611a4f87610e85565b611a59919061211b565b965073ffffffffffffffffffffffffffffffffffffffff861615611a7d575f611a7f565b895b935083871115611a9857611a98868d610269878b61211b565b8d8d82818110611aaa57611aaa612173565b9050602002810190611abc91906121a0565b611acd9060608101906040016121dc565b9450611ad885610e85565b925073ffffffffffffffffffffffffffffffffffffffff851615611afc575f611afe565b895b91508183118015611b3b57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611b4f57611b4f858d610269858761211b565b60010161199b565b5050505050505050505050505050565b604051600190835f5260208301516040526040835103611bbb57604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052611bdf565b6041835103611bdb5760608301515f1a6020526040830151606052611bdf565b5f91505b6020600160805f855afa5191503d611bfe57638baa579f5f526004601cfd5b5f60605260405292915050565b73ffffffffffffffffffffffffffffffffffffffff8416156116165773ffffffffffffffffffffffffffffffffffffffff8316611c74576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611ce7573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611d0b919061271c565b10156116165761161673ffffffffffffffffffffffffffffffffffffffff85168483611d3c565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166116a1575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166116a157633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611e0b57611e0b611dba565b60405290565b5f82601f830112611e20575f5ffd5b813567ffffffffffffffff811115611e3a57611e3a611dba565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611e8757611e87611dba565b604052818152838201602001851015611e9e575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611edd575f5ffd5b919050565b80358015158114611edd575f5ffd5b5f6101408284031215611f02575f5ffd5b611f0a611de7565b823581529050602082013567ffffffffffffffff811115611f29575f5ffd5b611f3584828501611e11565b602083015250604082013567ffffffffffffffff811115611f54575f5ffd5b611f6084828501611e11565b604083015250611f7260608301611eba565b6060820152611f8360808301611eba565b6080820152611f9460a08301611eba565b60a082015260c0828101359082015260e08083013590820152611fba6101008301611ee2565b610100820152611fcd6101208301611ee2565b61012082015292915050565b5f6101e08284031215611fea575f5ffd5b50919050565b5f5f60408385031215612001575f5ffd5b823567ffffffffffffffff811115612017575f5ffd5b61202385828601611ef1565b925050602083013567ffffffffffffffff81111561203f575f5ffd5b61204b85828601611fd9565b9150509250929050565b5f5f5f5f60608587031215612068575f5ffd5b843567ffffffffffffffff81111561207e575f5ffd5b61208a87828801611ef1565b945050602085013567ffffffffffffffff8111156120a6575f5ffd5b8501601f810187136120b6575f5ffd5b803567ffffffffffffffff8111156120cc575f5ffd5b8760208260051b84010111156120e0575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115612103575f5ffd5b61210f87828801611fd9565b91505092959194509250565b81810381811115610ec9577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215612163575f5ffd5b61216c82611ee2565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126121d2575f5ffd5b9190910192915050565b5f602082840312156121ec575f5ffd5b61216c82611eba565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612228575f5ffd5b83018035915067ffffffffffffffff821115612242575f5ffd5b602001915036819003821315612256575f5ffd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015273ffffffffffffffffffffffffffffffffffffffff8516604082015273ffffffffffffffffffffffffffffffffffffffff8416606082015260a060808201528160a0820152818360c08301375f81830160c090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016010195945050505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f6020830151610140604084015261237a610160840182612307565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526123b58282612307565b91505060608401516123df608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161244e61012085018215159052565b50610120840151801515610140850152509392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612499575f5ffd5b83018035915067ffffffffffffffff8211156124b3575f5ffd5b6020019150600581901b3603821315612256575f5ffd5b5f8151808452602084019350602083015f5b8281101561251057815173ffffffffffffffffffffffffffffffffffffffff168652602095860195909101906001016124dc565b5093949350505050565b602081525f82516101206020840152612537610140840182612307565b905060208401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160408501526125728282612307565b91505060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526125ae82826124ca565b91505060608401516125d8608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015160c084015260c084015161261860e085018215159052565b5060e084015173ffffffffffffffffffffffffffffffffffffffff8116610100850152506101008401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016101208501526126778282612307565b95945050505050565b5f5f8585111561268e575f5ffd5b8386111561269a575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612706577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f6020828403121561272c575f5ffd5b505191905056fea264697066735822122025f64f386ed9d737ecb8f10a39862d092903c2e4cf19d0d235acf41fa146e38f64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_symbiosisMetaRouter";
            readonly type: "address";
            readonly internalType: "contract ISymbiosisMetaRouter";
        }, {
            readonly name: "_symbiosisGateway";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_onchainSwapV3";
            readonly type: "address";
            readonly internalType: "contract IOnchainSwapV3";
        }, {
            readonly name: "_onchainSwapV3Gateway";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_backendSigner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaSymbiosis";
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
            readonly name: "_symbiosisData";
            readonly type: "tuple";
            readonly internalType: "struct SymbiosisFacet.SymbiosisData";
            readonly components: readonly [{
                readonly name: "nonEvmReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "firstSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "secondSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "intermediateToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "firstDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "secondDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approvedTokens";
                readonly type: "address[]";
                readonly internalType: "address[]";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "viaOnchainSwapV3";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "dex";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "dexgateway";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "onchainSwapData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaSymbiosis";
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
            readonly name: "_symbiosisData";
            readonly type: "tuple";
            readonly internalType: "struct SymbiosisFacet.SymbiosisData";
            readonly components: readonly [{
                readonly name: "nonEvmReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "firstSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "secondSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "intermediateToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "firstDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "secondDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approvedTokens";
                readonly type: "address[]";
                readonly internalType: "address[]";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "viaOnchainSwapV3";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "dex";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "dexgateway";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "onchainSwapData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
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
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidDestinationChain";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidNonEVMReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSignature";
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
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnchainSwapV3NotSupported";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SignatureExpired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TransactionAlreadyProcessed";
        readonly inputs: readonly [];
    }];
    static createInterface(): SymbiosisFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SymbiosisFacet;
}
export {};
