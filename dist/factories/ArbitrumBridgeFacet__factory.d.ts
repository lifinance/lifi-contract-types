import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ArbitrumBridgeFacet, ArbitrumBridgeFacetInterface } from "../ArbitrumBridgeFacet";
declare type ArbitrumBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ArbitrumBridgeFacet__factory extends ContractFactory {
    constructor(...args: ArbitrumBridgeFacetConstructorParams);
    deploy(_gatewayRouter: PromiseOrValue<string>, _inbox: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ArbitrumBridgeFacet>;
    getDeployTransaction(_gatewayRouter: PromiseOrValue<string>, _inbox: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ArbitrumBridgeFacet;
    connect(signer: Signer): ArbitrumBridgeFacet__factory;
    static readonly bytecode = "0x60c060405234801562000010575f80fd5b506040516200296038038062002960833981016040819052620000339162000067565b6001600160a01b039182166080521660a0526200009d565b80516001600160a01b038116811462000062575f80fd5b919050565b5f806040838503121562000079575f80fd5b62000084836200004b565b915062000094602084016200004b565b90509250929050565b60805160a05161289a620000c65f395f6106a201525f818161081b0152610892015261289a5ff3fe608060405260043610610028575f3560e01c80633cc9517b1461002c578063c9851d0b14610041575b5f80fd5b61003f61003a3660046122d2565b610054565b005b61003f61004f366004612376565b6102a4565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df34476123ef565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861017f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610230576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610243604089013560208a0135612402565b61024e908935612419565b90506102658b5f01518c60c001518c8c33866104e6565b60c08c01526102758b8983610681565b50479250505081811115610297576102975f8461029285856123ef565b6109d9565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161031f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61032f34476123ef565b9050848061010001511561036f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156103ad576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866103d08160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610407576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610444576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610481576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610494604089013560208a0135612402565b61049f908935612419565b90506104b389608001518a60c00151610a0f565b6104be898983610681565b504792505050818111156104db576104db5f8461029285856123ef565b50505f909155505050565b5f83808203610521576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f868661052f6001856123ef565b81811061053e5761053e61242c565b90506020028101906105509190612459565b610561906080810190606001612495565b90505f61056d82610b81565b905073ffffffffffffffffffffffffffffffffffffffff82166105975761059434826123ef565b90505b5f6105a28989610c37565b90506105ae8989610d41565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526105e9818b8b85610dad565b5f836105f486610b81565b6105fe91906123ef565b905073ffffffffffffffffffffffffffffffffffffffff85166106285761062588826123ef565b90505b8b811015610671576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b608083015173ffffffffffffffffffffffffffffffffffffffff166107cc577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636e6e8a6a828560c001516106ec9190612419565b60a086015160c08701516040805160e086901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff90931660048401819052602484019290925287356044840152606483018290526084830191909152602087013560a483015286013560c482015261010060e48201525f6101048201526101240160206040518083038185885af11580156107a1573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906107c691906124b7565b5061099d565b60808301516040517fbda009fe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff808316600483015261089092917f00000000000000000000000000000000000000000000000000000000000000009091169063bda009fe90602401602060405180830381865afa158015610862573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061088691906124ce565b8560c00151611194565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d2ce7d658285608001518660a001518760c0015187602001358860400135895f013560405160200161090a9181526040602082018190525f9082015260600190565b6040516020818303038152906040526040518863ffffffff1660e01b815260040161093a96959493929190612554565b5f6040518083038185885af1158015610955573d5f803e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261099b91908101906125aa565b505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516109cc9190612613565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a0557610a008383836112c9565b505050565b610a008282611448565b805f03610a48576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610aa15780341015610a9d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610b0b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b2f91906124b7565b905081811015610b75576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610668565b610a008333308561156e565b5f73ffffffffffffffffffffffffffffffffffffffff821615610c2f576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610c06573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c2a91906124b7565b610c31565b475b92915050565b6060815f8167ffffffffffffffff811115610c5457610c54612052565b604051908082528060200260200182016040528015610c7d578160200160208202803683370190505b5090505f805b83811015610d3657868682818110610c9d57610c9d61242c565b9050602002810190610caf9190612459565b610cc0906080810190606001612495565b9150610ccb82610b81565b838281518110610cdd57610cdd61242c565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d2e5734838281518110610d1657610d1661242c565b60200260200101818151610d2a91906123ef565b9052505b600101610c83565b509095945050505050565b5f5b81811015610a005736838383818110610d5e57610d5e61242c565b9050602002810190610d709190612459565b9050610d8260e0820160c08301612725565b15610da457610da4610d9a6060830160408401612495565b8260800135610a0f565b50600101610d43565b6020840151604085015184918491849083600181146110ae575f8686610dd46001856123ef565b818110610de357610de361242c565b9050602002810190610df59190612459565b610e06906080810190606001612495565b90505f89815b81811015610faf57368d8d83818110610e2757610e2761242c565b9050602002810190610e399190612459565b9050610e68610e4e6060830160408401612495565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610eca5750610eca610e816040830160208401612495565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610ee15750610ee1610e816020830183612495565b8015610f645750610f64610ef860a0830183612740565b610f06916004915f916127a8565b610f0f916127cf565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f9a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610fa69082611783565b50600101610e0c565b50505f5b610fbe6001856123ef565b8110156110a6575f898983818110610fd857610fd861242c565b9050602002810190610fea9190612459565b610ffb906080810190606001612495565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461109d578682815181106110425761104261242c565b602002602001015161105382610b81565b61105d91906123ef565b92505f73ffffffffffffffffffffffffffffffffffffffff821615611082575f611084565b865b9050831561109b5761109b828a61029284886123ef565b505b50600101610fb3565b505050611188565b875f5b8181101561118557368b8b838181106110cc576110cc61242c565b90506020028101906110de9190612459565b90506110f3610e4e6060830160408401612495565b8061110c575061110c610e816040830160208401612495565b80156111235750611123610e816020830183612495565b801561113a575061113a610ef860a0830183612740565b611170576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161117c9082611783565b506001016110b1565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166111b457505050565b73ffffffffffffffffffffffffffffffffffffffff8216611201576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611274573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061129891906124b7565b1015610a0057610a0083837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a56565b73ffffffffffffffffffffffffffffffffffffffff8316611316576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611363576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156113cd573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113f191906124b7565b905080821115611437576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610668565b611442848484611bc3565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611495576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156114d8576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610668565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f811461152e576040519150601f19603f3d011682016040523d82523d5f602084013e611533565b606091505b5050905080610a00576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166115bb576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611608576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa158015611676573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061169a91906124b7565b90506116a882868686611c19565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611716573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061173a91906124b7565b61174491906123ef565b1461177b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6117996117936020830183612495565b3b151590565b6117cf576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361180e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611822610e4e6060850160408601612495565b61182c575f611832565b82608001355b90505f61184d6118486060860160408701612495565b610b81565b90505f6118636118486080870160608801612495565b9050825f036118995761189961187f6060870160408801612495565b61188f6040880160208901612495565b8760800135611194565b84608001358210156118e4576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610668565b5f806118f36020880188612495565b73ffffffffffffffffffffffffffffffffffffffff168561191760a08a018a612740565b604051611925929190612817565b5f6040518083038185875af1925050503d805f811461195f576040519150601f19603f3d011682016040523d82523d5f602084013e611964565b606091505b5091509150816119775761197781611c77565b5f61198b61184860808a0160608b01612495565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896119bc60208b018b612495565b6119cc60608c0160408d01612495565b6119dc60808d0160608e01612495565b8c608001358987116119ee57866119f8565b6119f88a886123ef565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611ae28482611c81565b6114425760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f6044820152611bb99085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d3c565b6114428482611d3c565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a009084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611b37565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526114429085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611b37565b8051602082018181fd5b5f805f8473ffffffffffffffffffffffffffffffffffffffff1684604051611ca99190612826565b5f604051808303815f865af19150503d805f8114611ce2576040519150601f19603f3d011682016040523d82523d5f602084013e611ce7565b606091505b5091509150818015611d11575080511580611d11575080806020019051810190611d119190612837565b8015611d33575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b5f611d9d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e499092919063ffffffff16565b905080515f1480611dbd575080806020019051810190611dbd9190612837565b610a00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610668565b6060611e5784845f85611e5f565b949350505050565b606082471015611ef1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610668565b5f808673ffffffffffffffffffffffffffffffffffffffff168587604051611f199190612826565b5f6040518083038185875af1925050503d805f8114611f53576040519150601f19603f3d011682016040523d82523d5f602084013e611f58565b606091505b5091509150611f6987838387611f74565b979650505050505050565b606083156120095782515f036120025773ffffffffffffffffffffffffffffffffffffffff85163b612002576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610668565b5081611e57565b611e57838381511561201e5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106689190612852565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156120a3576120a3612052565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156120f0576120f0612052565b604052919050565b5f67ffffffffffffffff82111561211157612111612052565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f83011261214c575f80fd5b813561215f61215a826120f8565b6120a9565b818152846020838601011115612173575f80fd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146121b0575f80fd5b50565b80356121be8161218f565b919050565b80151581146121b0575f80fd5b80356121be816121c3565b5f61014082840312156121ec575f80fd5b6121f461207f565b905081358152602082013567ffffffffffffffff80821115612214575f80fd5b6122208583860161213d565b60208401526040840135915080821115612238575f80fd5b506122458482850161213d565b604083015250612257606083016121b3565b6060820152612268608083016121b3565b608082015261227960a083016121b3565b60a082015260c082013560c082015260e082013560e08201526101006122a08184016121d0565b908201526101206122b28382016121d0565b9082015292915050565b5f606082840312156122cc575f80fd5b50919050565b5f805f8060a085870312156122e5575f80fd5b843567ffffffffffffffff808211156122fc575f80fd5b612308888389016121db565b9550602087013591508082111561231d575f80fd5b818701915087601f830112612330575f80fd5b81358181111561233e575f80fd5b8860208260051b8501011115612352575f80fd5b60208301955080945050505061236b86604087016122bc565b905092959194509250565b5f8060808385031215612387575f80fd5b823567ffffffffffffffff81111561239d575f80fd5b6123a9858286016121db565b9250506123b984602085016122bc565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610c3157610c316123c2565b8082028115828204841417610c3157610c316123c2565b80820180821115610c3157610c316123c2565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261248b575f80fd5b9190910192915050565b5f602082840312156124a5575f80fd5b81356124b08161218f565b9392505050565b5f602082840312156124c7575f80fd5b5051919050565b5f602082840312156124de575f80fd5b81516124b08161218f565b5f5b838110156125035781810151838201526020016124eb565b50505f910152565b5f81518084526125228160208601602086016124e9565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b5f73ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015284606083015283608083015260c060a083015261259e60c083018461250b565b98975050505050505050565b5f602082840312156125ba575f80fd5b815167ffffffffffffffff8111156125d0575f80fd5b8201601f810184136125e0575f80fd5b80516125ee61215a826120f8565b818152856020838501011115612602575f80fd5b611d338260208301602086016124e9565b60208152815160208201525f602083015161014080604085015261263b61016085018361250b565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612676838261250b565b92505060608501516126a0608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127138187018315159052565b90950151151593019290925250919050565b5f60208284031215612735575f80fd5b81356124b0816121c3565b5f8083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612773575f80fd5b83018035915067ffffffffffffffff82111561278d575f80fd5b6020019150368190038213156127a1575f80fd5b9250929050565b5f80858511156127b6575f80fd5b838611156127c2575f80fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561280f5780818660040360031b1b83161692505b505092915050565b818382375f9101908152919050565b5f825161248b8184602087016124e9565b5f60208284031215612847575f80fd5b81516124b0816121c3565b602081525f6124b0602083018461250b56fea264697066735822122065022f5e101402e456fc5389c83ef606eee04b7081a8751e371ce2bc840086ae64736f6c63430008160033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gatewayRouter";
            readonly type: "address";
            readonly internalType: "contract IGatewayRouter";
        }, {
            readonly name: "_inbox";
            readonly type: "address";
            readonly internalType: "contract IGatewayRouter";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaArbitrumBridge";
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
            readonly name: "_arbitrumData";
            readonly type: "tuple";
            readonly internalType: "struct ArbitrumBridgeFacet.ArbitrumData";
            readonly components: readonly [{
                readonly name: "maxSubmissionCost";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGasPrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaArbitrumBridge";
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
            readonly name: "_arbitrumData";
            readonly type: "tuple";
            readonly internalType: "struct ArbitrumBridgeFacet.ArbitrumData";
            readonly components: readonly [{
                readonly name: "maxSubmissionCost";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGasPrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
    static createInterface(): ArbitrumBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ArbitrumBridgeFacet;
}
export {};
