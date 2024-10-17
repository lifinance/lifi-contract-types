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
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b50604051620029ab380380620029ab833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a0516128c7620000e46000396000818160db01526107af015260008181606b015281816107690152818161088b01526108cb01526128c76000f3fe60806040526004361061003f5760003560e01c80634e406e7114610044578063afdac3d614610059578063de7c227f146100b6578063eb6d3a11146100c9575b600080fd5b61005761005236600461225a565b6100fd565b005b34801561006557600080fd5b5061008d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100576100c43660046122be565b6102e7565b3480156100d557600080fd5b5061008d7f000000000000000000000000000000000000000000000000000000000000000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610178576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610189344761237d565b9050846101ae8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101e5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610223576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610260576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561029e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b087608001518860c001516104d5565b6102ba8787610655565b50479050818111156102db576102db6000846102d6858561237d565b6109f9565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610362576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610373344761237d565b9050868061010001516103b2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103d58160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561040c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361044a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610487576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61049c89600001518a60c001518a8a33610a2a565b60c08a01526104ab8987610655565b50479050818111156104c7576104c76000846102d6858561237d565b505060009091555050505050565b8060000361050f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105685780341015610564576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f991906123b7565b905081811015610644576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61065083333085610b6d565b505050565b6101208201511515600061066c60c08401846123d0565b9050111515146106a8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8161012001511580156106f757506106c3602082018261243c565b73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b1561072e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff166108815760c082015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690637b939232906107a0604085016020860161243c565b6107ad602086018661243c565b7f00000000000000000000000000000000000000000000000000000000000000006107de606088016040890161243c565b60c089015160e08a015160608a013590600061080060a08d0160808e0161245e565b61081060c08e0160a08f0161245e565b60008e8060c0019061082291906123d0565b6040518f63ffffffff1660e01b815260040161084a9d9c9b9a999897969594939291906124cd565b6000604051808303818588803b15801561086357600080fd5b505af1158015610877573d6000803e3d6000fd5b50505050506109be565b6108b482608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610d87565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b939232610900604084016020850161243c565b61090d602085018561243c565b6080860151610922606087016040880161243c565b60c088015160e0890151606089013590600061094460a08c0160808d0161245e565b61095460c08d0160a08e0161245e565b600061096360c08f018f6123d0565b6040518e63ffffffff1660e01b815260040161098b9d9c9b9a999897969594939291906124cd565b600060405180830381600087803b1580156109a557600080fd5b505af11580156109b9573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516109ed9190612630565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610a2057610650838383610eca565b610650828261104c565b600082808203610a66576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610a7560018561237d565b818110610a8457610a84612743565b9050602002810190610a969190612772565b610aa790608081019060600161243c565b90506000610ab482611176565b905073ffffffffffffffffffffffffffffffffffffffff8216610ade57610adb348261237d565b90505b6000610aea888861122f565b9050610af6888861133b565b610b038a898989856113a8565b600082610b0f85611176565b610b19919061237d565b905089811015610b5f576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161063b565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610bba576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c07576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610c78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9c91906123b7565b9050610caa8286868661175a565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610d1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3e91906123b7565b610d48919061237d565b14610d7f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610da757505050565b73ffffffffffffffffffffffffffffffffffffffff8216610df4576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610e69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8d91906123b7565b101561065057610e9f83836000611836565b61065083837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611836565b73ffffffffffffffffffffffffffffffffffffffff8316610f17576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f64576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610fd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff591906123b7565b90508082111561103b576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161063b565b6110468484846119b8565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611099576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156110dc576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161063b565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611136576040519150601f19603f3d011682016040523d82523d6000602084013e61113b565b606091505b5050905080610650576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611227576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156111fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122291906123b7565b611229565b475b92915050565b60608160008167ffffffffffffffff81111561124d5761124d612014565b604051908082528060200260200182016040528015611276578160200160208202803683370190505b5090506000805b838110156113305786868281811061129757611297612743565b90506020028101906112a99190612772565b6112ba90608081019060600161243c565b91506112c582611176565b8382815181106112d7576112d7612743565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611328573483828151811061131057611310612743565b60200260200101818151611324919061237d565b9052505b60010161127d565b509095945050505050565b60005b81811015610650573683838381811061135957611359612743565b905060200281019061136b9190612772565b905061137d60e0820160c083016127b0565b1561139f5761139f611395606083016040840161243c565b82608001356104d5565b5060010161133e565b83838383826001811461167557600085856113c460018561237d565b8181106113d3576113d3612743565b90506020028101906113e59190612772565b6113f690608081019060600161243c565b9050600089815b818110156115a157368d8d8381811061141857611418612743565b905060200281019061142a9190612772565b905061145961143f606083016040840161243c565b73ffffffffffffffffffffffffffffffffffffffff161590565b806114bc57506114bc611472604083016020840161243c565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156114d357506114d3611472602083018361243c565b801561155857506115586114ea60a08301836123d0565b6114f9916004916000916127cd565b611502916127f7565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61158e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115988f82611a0e565b506001016113fd565b505060005b6115b160018561237d565b81101561166d5760008888838181106115cc576115cc612743565b90506020028101906115de9190612772565b6115ef90608081019060600161243c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146116645785828151811061163657611636612743565b602002602001015161164782611176565b611651919061237d565b92508215611664576116648188856109f9565b506001016115a6565b50505061174e565b8760005b8181101561174b57368b8b8381811061169457611694612743565b90506020028101906116a69190612772565b90506116bb61143f606083016040840161243c565b806116d457506116d4611472604083016020840161243c565b80156116eb57506116eb611472602083018361243c565b801561170257506117026114ea60a08301836123d0565b611738576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117428d82611a0e565b50600101611679565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526110469085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611cec565b8015806118d657506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156118b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118d491906123b7565b155b611962576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161063b565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106509084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016117b4565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106509084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016117b4565b611a24611a1e602083018361243c565b3b151590565b611a5a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611a9a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611aaf61143f606085016040860161243c565b611aba576000611ac0565b82608001355b90506000611adc611ad7606086016040870161243c565b611176565b90506000611af3611ad7608087016060880161243c565b905082600003611b2a57611b2a611b10606087016040880161243c565b611b20604088016020890161243c565b8760800135610d87565b8460800135821015611b75576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161063b565b600080611b85602088018861243c565b73ffffffffffffffffffffffffffffffffffffffff1685611ba960a08a018a6123d0565b604051611bb792919061283f565b60006040518083038185875af1925050503d8060008114611bf4576040519150601f19603f3d011682016040523d82523d6000602084013e611bf9565b606091505b509150915081611c0c57611c0c81611dfb565b6000611c21611ad760808a0160608b0161243c565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611c5260208b018b61243c565b611c6260608c0160408d0161243c565b611c7260808d0160608e0161243c565b8c60800135898711611c845786611c8e565b611c8e8a8861237d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611d4e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e059092919063ffffffff16565b9050805160001480611d6f575080806020019051810190611d6f919061284f565b610650576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161063b565b8051602082018181fd5b6060611e148484600085611e1c565b949350505050565b606082471015611eae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161063b565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ed7919061286c565b60006040518083038185875af1925050503d8060008114611f14576040519150601f19603f3d011682016040523d82523d6000602084013e611f19565b606091505b5091509150611f2a87838387611f35565b979650505050505050565b60608315611fcb578251600003611fc45773ffffffffffffffffffffffffffffffffffffffff85163b611fc4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161063b565b5081611e14565b611e148383815115611fe05781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063b919061287e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561206757612067612014565b60405290565b600082601f83011261207e57600080fd5b813567ffffffffffffffff8082111561209957612099612014565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156120df576120df612014565b816040528381528660208588010111156120f857600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461213c57600080fd5b919050565b801515811461214f57600080fd5b50565b803561213c81612141565b6000610140828403121561217057600080fd5b612178612043565b905081358152602082013567ffffffffffffffff8082111561219957600080fd5b6121a58583860161206d565b602084015260408401359150808211156121be57600080fd5b506121cb8482850161206d565b6040830152506121dd60608301612118565b60608201526121ee60808301612118565b60808201526121ff60a08301612118565b60a082015260c082013560c082015260e082013560e0820152610100612226818401612152565b90820152610120612238838201612152565b9082015292915050565b600060e0828403121561225457600080fd5b50919050565b6000806040838503121561226d57600080fd5b823567ffffffffffffffff8082111561228557600080fd5b6122918683870161215d565b935060208501359150808211156122a757600080fd5b506122b485828601612242565b9150509250929050565b600080600080606085870312156122d457600080fd5b843567ffffffffffffffff808211156122ec57600080fd5b6122f88883890161215d565b9550602087013591508082111561230e57600080fd5b818701915087601f83011261232257600080fd5b81358181111561233157600080fd5b8860208260051b850101111561234657600080fd5b60208301955080945050604087013591508082111561236457600080fd5b5061237187828801612242565b91505092959194509250565b81810381811115611229577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000602082840312156123c957600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261240557600080fd5b83018035915067ffffffffffffffff82111561242057600080fd5b60200191503681900382131561243557600080fd5b9250929050565b60006020828403121561244e57600080fd5b61245782612118565b9392505050565b60006020828403121561247057600080fd5b813563ffffffff8116811461245757600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8e16815273ffffffffffffffffffffffffffffffffffffffff8d16602082015273ffffffffffffffffffffffffffffffffffffffff8c16604082015273ffffffffffffffffffffffffffffffffffffffff8b1660608201528960808201528860a08201528760c082015273ffffffffffffffffffffffffffffffffffffffff871660e082015263ffffffff861661010082015263ffffffff851661012082015261259561014082018563ffffffff169052565b61018061016082015260006125af61018083018486612484565b9f9e505050505050505050505050505050565b60005b838110156125dd5781810151838201526020016125c5565b50506000910152565b600081518084526125fe8160208601602086016125c2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526126596101608501836125e6565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261269483826125e6565b92505060608501516126be608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127318187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126127a657600080fd5b9190910192915050565b6000602082840312156127c257600080fd5b813561245781612141565b600080858511156127dd57600080fd5b838611156127ea57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128375780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561286157600080fd5b815161245781612141565b600082516127a68184602087016125c2565b60208152600061245760208301846125e656fea26469706673582212205ff2b4baff90a976acc018ed74666a402708a0c15508dd513d51ce9e95c2ab2864736f6c63430008110033";
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
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
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
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
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
