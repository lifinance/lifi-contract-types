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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161272a38038061272a83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516126726100b85f395f81816053015281816109200152610b6201526126725ff3fe60806040526004361061003e575f3560e01c80631fe5bb31146100425780636d21c5df1461009f5780637dbcf1d9146100b4578063f97136af146100d3575b5f5ffd5b34801561004d575f5ffd5b506100757f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100b26100ad366004611c54565b6100fc565b005b3480156100bf575f5ffd5b506100b26100ce366004611d1a565b6103ae565b3480156100de575f5ffd5b506100ee670de0b6b3a764000081565b604051908152602001610096565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610177576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556080850151859073ffffffffffffffffffffffffffffffffffffffff166101ce576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f6101da3447611dac565b905087806101000151610219576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861023c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610273576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036102b0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6102c16060890160408a01611dbf565b905073ffffffffffffffffffffffffffffffffffffffff8116610310576040517f89b30fbf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6103258c5f01518d60c001518d8d86610625565b90505f670de0b6b3a76400006103436101608c016101408d01611ddf565b61035f906fffffffffffffffffffffffffffffffff1684611e0e565b6103699190611e25565b60c08e01839052905061037d8d8b83610767565b50479350505050818111156103a0576103a05f8461039b8585611dac565b610cdc565b50505f909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610429576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556080830151839073ffffffffffffffffffffffffffffffffffffffff16610480576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b836104a38160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104da576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610517576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610100015115610555576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6105666060870160408801611dbf565b73ffffffffffffffffffffffffffffffffffffffff16036105b3576040517f89b30fbf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105c586608001518760c00151610d11565b5f670de0b6b3a76400006105e161016088016101408901611ddf565b6fffffffffffffffffffffffffffffffff168860c001516106029190611e0e565b61060c9190611e25565b9050610619878783610767565b50505f90925550505050565b5f82808203610660576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561066e600185611dac565b81811061067d5761067d611e5d565b905060200281019061068f9190611e8a565b6106a0906080810190606001611dbf565b90505f6106ac82610dc5565b905073ffffffffffffffffffffffffffffffffffffffff82166106d6576106d33482611dac565b90505b5f6106e18888610e0f565b90506106ed8888610f19565b6106fa8a89898985610f85565b5f8261070585610dc5565b61070f9190611dac565b905089811015610759576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b5f610776610160840184611ec6565b9050905083610120015115155f82111515146107be576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815f036107f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b602083013580610833576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168560a0015173ffffffffffffffffffffffffffffffffffffffff16036108bd5760e085015185516040518381527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a3610910565b60a085015173ffffffffffffffffffffffffffffffffffffffff168114610910576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608085015160c0860151610945827f0000000000000000000000000000000000000000000000000000000000000000836111cd565b60408051602081019091525f815284156109ce578635935083610994576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87516109a4610160890189611ec6565b89602001356040516020016109bc9493929190611fd8565b60405160208183030381529060405290505b6040805160018082528183019092525f91816020015b610a266040518061010001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f815260200160608152602001606081525090565b8152602001906001900390816109e45790505090506040518061010001604052808960e00135815260200189610100013581526020018a60e001518152602001896101200135815260200188815260200186815260200183815260200189806101800190610a94919061216d565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201829052509390945250508351849250610ada57610ada611e5d565b60209081029190910101526040805160018082528183019092525f91816020015b610b03611a00565b815260200190600190039081610afb57905050905060405180604001604052808673ffffffffffffffffffffffffffffffffffffffff16815260200185815250815f81518110610b5557610b55611e5d565b60200260200101819052507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637515fd566040518061010001604052808c6040016020810190610bbb9190611dbf565b73ffffffffffffffffffffffffffffffffffffffff1681526060808e0135602083015246604083015201610bf560a08e0160808f016121ce565b63ffffffff168152602001610c1060c08e0160a08f016121ce565b63ffffffff168152602001610c2b60e08e0160c08f01611dbf565b73ffffffffffffffffffffffffffffffffffffffff168152602001848152602001858152506040518263ffffffff1660e01b8152600401610c6c919061237b565b5f604051808303815f87803b158015610c83575f5ffd5b505af1158015610c95573d5f5f3e3d5ffd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18a604051610cc8919061245d565b60405180910390a150505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d0657610d0182826111f9565b505050565b610d01838383611266565b805f03610d4a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610da35780341015610d9f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610d9f73ffffffffffffffffffffffffffffffffffffffff83163330846112d4565b5f73ffffffffffffffffffffffffffffffffffffffff821615610e0757610e0273ffffffffffffffffffffffffffffffffffffffff83163061132c565b610e09565b475b92915050565b6060815f8167ffffffffffffffff811115610e2c57610e2c611a1e565b604051908082528060200260200182016040528015610e55578160200160208202803683370190505b5090505f5f5b83811015610f0e57868682818110610e7557610e75611e5d565b9050602002810190610e879190611e8a565b610e98906080810190606001611dbf565b9150610ea382610dc5565b838281518110610eb557610eb5611e5d565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f065734838281518110610eee57610eee611e5d565b60200260200101818151610f029190611dac565b9052505b600101610e5b565b509095945050505050565b5f5b81811015610d015736838383818110610f3657610f36611e5d565b9050602002810190610f489190611e8a565b9050610f5a60e0820160c08301612570565b15610f7c57610f7c610f726060830160408401611dbf565b8260800135610d11565b50600101610f1b565b83838383825f80805b838110156111b157368c8c83818110610fa957610fa9611e5d565b9050602002810190610fbb9190611e8a565b9050610fca6020820182611dbf565b9350610fdc6040820160208301611dbf565b925061107f84610fef60a084018461216d565b610ffd916004915f91612589565b611006916125b0565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061116757506110b36110996060830160408401611dbf565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156110ec57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611167575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b1561119e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111a88e8261135f565b50600101610f8e565b505050506111c2848484845f6115d2565b505050505050505050565b610d018383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6117e9565b73ffffffffffffffffffffffffffffffffffffffff8216611246576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d9f73ffffffffffffffffffffffffffffffffffffffff831682611916565b73ffffffffffffffffffffffffffffffffffffffff82166112b3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d0173ffffffffffffffffffffffffffffffffffffffff8416838361192f565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661131f57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61137761136f6020830183611dbf565b6017903b1190565b6113ad576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036113ec576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6114006110996060850160408601611dbf565b61140a575f611410565b82608001355b90505f61142b6114266080860160608701611dbf565b610dc5565b9050815f03611461576114616114476060860160408701611dbf565b6114576040870160208801611dbf565b86608001356111cd565b5f806114706020870187611dbf565b73ffffffffffffffffffffffffffffffffffffffff168461149460a089018961216d565b6040516114a2929190612616565b5f6040518083038185875af1925050503d805f81146114dc576040519150601f19603f3d011682016040523d82523d5f602084013e6114e1565b606091505b5091509150816114f4576114f481611978565b5f6115086114266080890160608a01611dbf565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861153960208a018a611dbf565b61154960608b0160408c01611dbf565b61155960808c0160608d01611dbf565b8b6080013589871161156b5786611575565b6115758a88611dac565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826115e1600182611dac565b8181106115f0576115f0611e5d565b90506020028101906116029190611e8a565b611613906080810190606001611dbf565b90505f5f5f5f5f5f5f5b888110156117d95761163060018a611dac565b8110801561163f575088600114155b1561171a578d8d8281811061165657611656611e5d565b90506020028101906116689190611e8a565b611679906080810190606001611dbf565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461171a578a81815181106116c0576116c0611e5d565b60200260200101516116d187610dc5565b6116db9190611dac565b965073ffffffffffffffffffffffffffffffffffffffff8616156116ff575f611701565b895b93508387111561171a5761171a868d61039b878b611dac565b8d8d8281811061172c5761172c611e5d565b905060200281019061173e9190611e8a565b61174f906060810190604001611dbf565b945061175a85610dc5565b925073ffffffffffffffffffffffffffffffffffffffff85161561177e575f611780565b895b915081831180156117bd57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156117d1576117d1858d61039b8587611dac565b60010161161d565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156119105773ffffffffffffffffffffffffffffffffffffffff8316611852576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156118c5573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118e99190612625565b10156119105761191073ffffffffffffffffffffffffffffffffffffffff85168483611982565b50505050565b5f385f3884865af1610d9f5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661196f576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661196f575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661196f57633e3f8f735f526004601cfd5b60405180604001604052806002906020820280368337509192915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611a6f57611a6f611a1e565b60405290565b5f82601f830112611a84575f5ffd5b813567ffffffffffffffff811115611a9e57611a9e611a1e565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611aeb57611aeb611a1e565b604052818152838201602001851015611b02575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611b41575f5ffd5b919050565b80358015158114611b41575f5ffd5b5f6101408284031215611b66575f5ffd5b611b6e611a4b565b823581529050602082013567ffffffffffffffff811115611b8d575f5ffd5b611b9984828501611a75565b602083015250604082013567ffffffffffffffff811115611bb8575f5ffd5b611bc484828501611a75565b604083015250611bd660608301611b1e565b6060820152611be760808301611b1e565b6080820152611bf860a08301611b1e565b60a082015260c0828101359082015260e08083013590820152611c1e6101008301611b46565b610100820152611c316101208301611b46565b61012082015292915050565b5f6101a08284031215611c4e575f5ffd5b50919050565b5f5f5f5f60608587031215611c67575f5ffd5b843567ffffffffffffffff811115611c7d575f5ffd5b611c8987828801611b55565b945050602085013567ffffffffffffffff811115611ca5575f5ffd5b8501601f81018713611cb5575f5ffd5b803567ffffffffffffffff811115611ccb575f5ffd5b8760208260051b8401011115611cdf575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611d02575f5ffd5b611d0e87828801611c3d565b91505092959194509250565b5f5f60408385031215611d2b575f5ffd5b823567ffffffffffffffff811115611d41575f5ffd5b611d4d85828601611b55565b925050602083013567ffffffffffffffff811115611d69575f5ffd5b611d7585828601611c3d565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610e0957610e09611d7f565b5f60208284031215611dcf575f5ffd5b611dd882611b1e565b9392505050565b5f60208284031215611def575f5ffd5b81356fffffffffffffffffffffffffffffffff81168114611dd8575f5ffd5b8082028115828204841417610e0957610e09611d7f565b5f82611e58577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611ebc575f5ffd5b9190910192915050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ef9575f5ffd5b83018035915067ffffffffffffffff821115611f13575f5ffd5b6020019150600581901b3603821315611f2a575f5ffd5b9250929050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611f64575f5ffd5b830160208101925035905067ffffffffffffffff811115611f83575f5ffd5b803603821315611f2a575f5ffd5b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f60608201868352606060208401528085825260808401905060808660051b8501019150865f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21893603015b88821015612157577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808786030184528235818112612060575f5ffd5b8a0173ffffffffffffffffffffffffffffffffffffffff61208082611b1e565b16865273ffffffffffffffffffffffffffffffffffffffff6120a460208301611b1e565b16602087015273ffffffffffffffffffffffffffffffffffffffff6120cb60408301611b1e565b1660408701526120dd60608201611b1e565b73ffffffffffffffffffffffffffffffffffffffff1660608701526080818101359087015261210f60a0820182611f31565b60e060a089015261212460e089018284611f91565b91505061213360c08301611b46565b80151560c08901529150955050602093840193929092019160019190910190612024565b5050505060409290920192909252949350505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126121a0575f5ffd5b83018035915067ffffffffffffffff8211156121ba575f5ffd5b602001915036819003821315611f2a575f5ffd5b5f602082840312156121de575f5ffd5b813563ffffffff81168114611dd8575f5ffd5b5f8151808452602084019350602083015f5b82811015612248578151865f5b600281101561222f578251825260209283019290910190600101612210565b5050506040959095019460209190910190600101612203565b5093949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b5f82825180855260208501945060208160051b830101602085015f5b8381101561236f577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030188528151805184526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015161010060c086015261233c610100860182612252565b905060e0820151915084810360e08601526123578183612252565b60209a8b019a909550939093019250506001016122ba565b50909695505050505050565b6020815273ffffffffffffffffffffffffffffffffffffffff825116602082015260208201516040820152604082015160608201525f60608301516123c8608084018263ffffffff169052565b50608083015163ffffffff811660a08401525060a083015173ffffffffffffffffffffffffffffffffffffffff811660c08401525060c083015161010060e08401526124186101208401826121f1565b905060e08401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301610100850152612454828261229e565b95945050505050565b60208152815160208201525f60208301516101406040840152612484610160840182612252565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526124bf8282612252565b91505060608401516124e9608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161255861012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215612580575f5ffd5b611dd882611b46565b5f5f85851115612597575f5ffd5b838611156125a3575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561260f577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612635575f5ffd5b505191905056fea26469706673582212203284f587e663b8134fba64acf5fb7a1854b554c9a069d58a338c940394dbac7464736f6c634300081d0033";
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
        readonly name: "LIFI_INTENT_ESCROW_SETTLER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "MULTIPLIER_BASE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
