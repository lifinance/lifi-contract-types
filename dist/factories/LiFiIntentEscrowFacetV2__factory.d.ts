import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LiFiIntentEscrowFacetV2, LiFiIntentEscrowFacetV2Interface } from "../LiFiIntentEscrowFacetV2";
type LiFiIntentEscrowFacetV2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LiFiIntentEscrowFacetV2__factory extends ContractFactory {
    constructor(...args: LiFiIntentEscrowFacetV2ConstructorParams);
    deploy(_inputSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LiFiIntentEscrowFacetV2>;
    getDeployTransaction(_inputSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LiFiIntentEscrowFacetV2;
    connect(signer: Signer): LiFiIntentEscrowFacetV2__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161282d38038061282d83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516127756100b85f395f81816048015281816109230152610b6501526127755ff3fe608060405260043610610033575f3560e01c80636577661f146100375780636d21c5df146100935780637dbcf1d9146100a8575b5f5ffd5b348015610042575f5ffd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a66100a1366004611d3a565b6100c7565b005b3480156100b3575f5ffd5b506100a66100c2366004611e00565b610379565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610142576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556080850151859073ffffffffffffffffffffffffffffffffffffffff16610199576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f6101a53447611e92565b9050878061010001516101e4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561023e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361027b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61028c6060890160408a01611ea5565b905073ffffffffffffffffffffffffffffffffffffffff81166102db576040517f89b30fbf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6102f08c5f01518d60c001518d8d866105f0565b90505f670de0b6b3a764000061030e6101608c016101408d01611ec5565b61032a906fffffffffffffffffffffffffffffffff1684611ef4565b6103349190611f0b565b60c08e0183905290506103488d8b83610732565b504793505050508181111561036b5761036b5f846103668585611e92565b610cdf565b50505f909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103f4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556080830151839073ffffffffffffffffffffffffffffffffffffffff1661044b576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8361046e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104a5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610100015115610520576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6105316060870160408801611ea5565b73ffffffffffffffffffffffffffffffffffffffff160361057e576040517f89b30fbf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61059086608001518760c00151610d14565b5f670de0b6b3a76400006105ac61016088016101408901611ec5565b6fffffffffffffffffffffffffffffffff168860c001516105cd9190611ef4565b6105d79190611f0b565b90506105e4878783610732565b50505f90925550505050565b5f8280820361062b576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610639600185611e92565b81811061064857610648611f43565b905060200281019061065a9190611f70565b61066b906080810190606001611ea5565b90505f61067782610dc8565b905073ffffffffffffffffffffffffffffffffffffffff82166106a15761069e3482611e92565b90505b5f6106ac8888610e12565b90506106b88888610f1c565b6106c58a89898985610f88565b5f826106d085610dc8565b6106da9190611e92565b905089811015610724576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b5f610741610160840184611fac565b9050905083610120015115155f8211151514610789576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815f036107c2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6020830135806107fe576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168560a0015173ffffffffffffffffffffffffffffffffffffffff16036108c0578115610881576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60e085015185516040518381527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a3610913565b60a085015173ffffffffffffffffffffffffffffffffffffffff168114610913576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608085015160c0860151610948827f0000000000000000000000000000000000000000000000000000000000000000836111d0565b60408051602081019091525f815284156109d1578635935083610997576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87516109a7610160890189611fac565b89602001356040516020016109bf94939291906120be565b60405160208183030381529060405290505b6040805160018082528183019092525f91816020015b610a296040518061010001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f815260200160608152602001606081525090565b8152602001906001900390816109e75790505090506040518061010001604052808960e00135815260200189610100013581526020018a60e001518152602001896101200135815260200188815260200186815260200183815260200189806101800190610a979190612253565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201829052509390945250508351849250610add57610add611f43565b60209081029190910101526040805160018082528183019092525f91816020015b610b06611ada565b815260200190600190039081610afe57905050905060405180604001604052808673ffffffffffffffffffffffffffffffffffffffff16815260200185815250815f81518110610b5857610b58611f43565b60200260200101819052507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637515fd566040518061010001604052808c6040016020810190610bbe9190611ea5565b73ffffffffffffffffffffffffffffffffffffffff1681526060808e0135602083015246604083015201610bf860a08e0160808f016122b4565b63ffffffff168152602001610c1360c08e0160a08f016122b4565b63ffffffff168152602001610c2e60e08e0160c08f01611ea5565b73ffffffffffffffffffffffffffffffffffffffff168152602001848152602001858152506040518263ffffffff1660e01b8152600401610c6f9190612461565b5f604051808303815f87803b158015610c86575f5ffd5b505af1158015610c98573d5f5f3e3d5ffd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18a604051610ccb9190612543565b60405180910390a150505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d0957610d0482826111fc565b505050565b610d04838383611269565b805f03610d4d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610da65780341015610da2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610da273ffffffffffffffffffffffffffffffffffffffff83163330846113b4565b5f73ffffffffffffffffffffffffffffffffffffffff821615610e0a57610e0573ffffffffffffffffffffffffffffffffffffffff83163061140c565b610e0c565b475b92915050565b6060815f8167ffffffffffffffff811115610e2f57610e2f611af8565b604051908082528060200260200182016040528015610e58578160200160208202803683370190505b5090505f5f5b83811015610f1157868682818110610e7857610e78611f43565b9050602002810190610e8a9190611f70565b610e9b906080810190606001611ea5565b9150610ea682610dc8565b838281518110610eb857610eb8611f43565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f095734838281518110610ef157610ef1611f43565b60200260200101818151610f059190611e92565b9052505b600101610e5e565b509095945050505050565b5f5b81811015610d045736838383818110610f3957610f39611f43565b9050602002810190610f4b9190611f70565b9050610f5d60e0820160c08301612656565b15610f7f57610f7f610f756060830160408401611ea5565b8260800135610d14565b50600101610f1e565b83838383825f80805b838110156111b457368c8c83818110610fac57610fac611f43565b9050602002810190610fbe9190611f70565b9050610fcd6020820182611ea5565b9350610fdf6040820160208301611ea5565b925061108284610ff260a0840184612253565b611000916004915f91612671565b61100991612698565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061116a57506110b661109c6060830160408401611ea5565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156110ef57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b801561116a575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b156111a1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111ab8e8261143f565b50600101610f91565b505050506111c5848484845f6116b2565b505050505050505050565b610d048383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118c9565b73ffffffffffffffffffffffffffffffffffffffff8216611249576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610da273ffffffffffffffffffffffffffffffffffffffff8316826119f0565b73ffffffffffffffffffffffffffffffffffffffff82166112b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b632b6653dc461480156112f2575073ffffffffffffffffffffffffffffffffffffffff831673a614f803b6fd780986a42c78ec9c7f77e6ded13c145b15611393576040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af1158015611369573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061138d91906126fe565b50505050565b610d0473ffffffffffffffffffffffffffffffffffffffff84168383611a09565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166113ff57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61145761144f6020830183611ea5565b6017903b1190565b61148d576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036114cc576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6114e061109c6060850160408601611ea5565b6114ea575f6114f0565b82608001355b90505f61150b6115066080860160608701611ea5565b610dc8565b9050815f03611541576115416115276060860160408701611ea5565b6115376040870160208801611ea5565b86608001356111d0565b5f806115506020870187611ea5565b73ffffffffffffffffffffffffffffffffffffffff168461157460a0890189612253565b604051611582929190612719565b5f6040518083038185875af1925050503d805f81146115bc576040519150601f19603f3d011682016040523d82523d5f602084013e6115c1565b606091505b5091509150816115d4576115d481611a52565b5f6115e86115066080890160608a01611ea5565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861161960208a018a611ea5565b61162960608b0160408c01611ea5565b61163960808c0160608d01611ea5565b8b6080013589871161164b5786611655565b6116558a88611e92565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826116c1600182611e92565b8181106116d0576116d0611f43565b90506020028101906116e29190611f70565b6116f3906080810190606001611ea5565b90505f5f5f5f5f5f5f5b888110156118b95761171060018a611e92565b8110801561171f575088600114155b156117fa578d8d8281811061173657611736611f43565b90506020028101906117489190611f70565b611759906080810190606001611ea5565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146117fa578a81815181106117a0576117a0611f43565b60200260200101516117b187610dc8565b6117bb9190611e92565b965073ffffffffffffffffffffffffffffffffffffffff8616156117df575f6117e1565b895b9350838711156117fa576117fa868d610366878b611e92565b8d8d8281811061180c5761180c611f43565b905060200281019061181e9190611f70565b61182f906060810190604001611ea5565b945061183a85610dc8565b925073ffffffffffffffffffffffffffffffffffffffff85161561185e575f611860565b895b9150818311801561189d57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156118b1576118b1858d6103668587611e92565b6001016116fd565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84161561138d5773ffffffffffffffffffffffffffffffffffffffff8316611932576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156119a5573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119c99190612728565b101561138d5761138d73ffffffffffffffffffffffffffffffffffffffff85168483611a5c565b5f385f3884865af1610da25763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a49576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a49575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611a4957633e3f8f735f526004601cfd5b60405180604001604052806002906020820280368337509192915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611b4957611b49611af8565b60405290565b5f82601f830112611b5e575f5ffd5b813567ffffffffffffffff811115611b7857611b78611af8565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611bc557611bc5611af8565b604052818152838201602001851015611bdc575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611c1b575f5ffd5b919050565b8015158114611c2d575f5ffd5b50565b8035611c1b81611c20565b5f6101408284031215611c4c575f5ffd5b611c54611b25565b823581529050602082013567ffffffffffffffff811115611c73575f5ffd5b611c7f84828501611b4f565b602083015250604082013567ffffffffffffffff811115611c9e575f5ffd5b611caa84828501611b4f565b604083015250611cbc60608301611bf8565b6060820152611ccd60808301611bf8565b6080820152611cde60a08301611bf8565b60a082015260c0828101359082015260e08083013590820152611d046101008301611c30565b610100820152611d176101208301611c30565b61012082015292915050565b5f6101a08284031215611d34575f5ffd5b50919050565b5f5f5f5f60608587031215611d4d575f5ffd5b843567ffffffffffffffff811115611d63575f5ffd5b611d6f87828801611c3b565b945050602085013567ffffffffffffffff811115611d8b575f5ffd5b8501601f81018713611d9b575f5ffd5b803567ffffffffffffffff811115611db1575f5ffd5b8760208260051b8401011115611dc5575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611de8575f5ffd5b611df487828801611d23565b91505092959194509250565b5f5f60408385031215611e11575f5ffd5b823567ffffffffffffffff811115611e27575f5ffd5b611e3385828601611c3b565b925050602083013567ffffffffffffffff811115611e4f575f5ffd5b611e5b85828601611d23565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610e0c57610e0c611e65565b5f60208284031215611eb5575f5ffd5b611ebe82611bf8565b9392505050565b5f60208284031215611ed5575f5ffd5b81356fffffffffffffffffffffffffffffffff81168114611ebe575f5ffd5b8082028115828204841417610e0c57610e0c611e65565b5f82611f3e577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611fa2575f5ffd5b9190910192915050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611fdf575f5ffd5b83018035915067ffffffffffffffff821115611ff9575f5ffd5b6020019150600581901b3603821315612010575f5ffd5b9250929050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261204a575f5ffd5b830160208101925035905067ffffffffffffffff811115612069575f5ffd5b803603821315612010575f5ffd5b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f60608201868352606060208401528085825260808401905060808660051b8501019150865f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21893603015b8882101561223d577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808786030184528235818112612146575f5ffd5b8a0173ffffffffffffffffffffffffffffffffffffffff61216682611bf8565b16865273ffffffffffffffffffffffffffffffffffffffff61218a60208301611bf8565b16602087015273ffffffffffffffffffffffffffffffffffffffff6121b160408301611bf8565b1660408701526121c360608201611bf8565b73ffffffffffffffffffffffffffffffffffffffff166060870152608081810135908701526121f560a0820182612017565b60e060a089015261220a60e089018284612077565b91505061221960c08301611c30565b80151560c0890152915095505060209384019392909201916001919091019061210a565b5050505060409290920192909252949350505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612286575f5ffd5b83018035915067ffffffffffffffff8211156122a0575f5ffd5b602001915036819003821315612010575f5ffd5b5f602082840312156122c4575f5ffd5b813563ffffffff81168114611ebe575f5ffd5b5f8151808452602084019350602083015f5b8281101561232e578151865f5b60028110156123155782518252602092830192909101906001016122f6565b50505060409590950194602091909101906001016122e9565b5093949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b5f82825180855260208501945060208160051b830101602085015f5b83811015612455577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030188528151805184526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015161010060c0860152612422610100860182612338565b905060e0820151915084810360e086015261243d8183612338565b60209a8b019a909550939093019250506001016123a0565b50909695505050505050565b6020815273ffffffffffffffffffffffffffffffffffffffff825116602082015260208201516040820152604082015160608201525f60608301516124ae608084018263ffffffff169052565b50608083015163ffffffff811660a08401525060a083015173ffffffffffffffffffffffffffffffffffffffff811660c08401525060c083015161010060e08401526124fe6101208401826122d7565b905060e08401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030161010085015261253a8282612384565b95945050505050565b60208152815160208201525f6020830151610140604084015261256a610160840182612338565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526125a58282612338565b91505060608401516125cf608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161263e61012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215612666575f5ffd5b8135611ebe81611c20565b5f5f8585111561267f575f5ffd5b8386111561268b575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156126f7577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f6020828403121561270e575f5ffd5b8151611ebe81611c20565b818382375f9101908152919050565b5f60208284031215612738575f5ffd5b505191905056fea264697066735822122031d5141d92547cb3e9755de326f739dfd5a3338e8ccc52d8d065bc11c898582a64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_inputSettler";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "LIFI_INTENT_ESCROW_SETTLER_V2";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaLiFiIntentEscrowV2";
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
            readonly name: "_lifiIntentData";
            readonly type: "tuple";
            readonly internalType: "struct LiFiIntentEscrowFacetV2.LiFiIntentEscrowDataV2";
            readonly components: readonly [{
                readonly name: "dstCallReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAndRefundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "expires";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "inputOracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputOracle";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputSettler";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "dstCallSwapData";
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
                readonly name: "outputContext";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaLiFiIntentEscrowV2";
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
            readonly name: "_lifiIntentData";
            readonly type: "tuple";
            readonly internalType: "struct LiFiIntentEscrowFacetV2.LiFiIntentEscrowDataV2";
            readonly components: readonly [{
                readonly name: "dstCallReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAndRefundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "expires";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "inputOracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputOracle";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputSettler";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "dstCallSwapData";
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
                readonly name: "outputContext";
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
        readonly name: "InvalidDepositAndRefundAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetNotSupported";
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): LiFiIntentEscrowFacetV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): LiFiIntentEscrowFacetV2;
}
export {};
