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
    static readonly bytecode = "0x610120604052348015610010575f5ffd5b5060405161290438038061290483398101604081905261002f916100ea565b6001600160a01b038516158061004c57506001600160a01b038416155b8061005e57506001600160a01b038116155b1561007c576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b038381161590831615146100aa576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0394851660805292841660a05290831660c052821660e052166101005261015b565b6001600160a01b03811681146100e7575f5ffd5b50565b5f5f5f5f5f60a086880312156100fe575f5ffd5b8551610109816100d3565b602087015190955061011a816100d3565b604087015190945061012b816100d3565b606087015190935061013c816100d3565b608087015190925061014d816100d3565b809150509295509295909350565b60805160a05160c05160e0516101005161276561019f5f395f611a1c01525f610cfa01525f8181610ac20152610d2501525f610ea901525f610ed401526127655ff3fe608060405260043610610028575f3560e01c80634f9eef951461002c5780636ac650c914610041575b5f5ffd5b61003f61003a366004611fec565b610054565b005b61003f61004f3660046120b2565b610242565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447612117565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101418160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610178576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101b5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f2576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610206895f01518a60c001518a8a33610462565b60c08a015261021589876105a4565b5047905081811115610235576102355f846102308585612117565b6105d3565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102bd576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6102cd3447612117565b9050846102f28160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610329576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610366576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103a3576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156103e1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561041f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043188608001518960c00151610608565b61043b88886105a4565b504791505081811115610457576104575f846102308585612117565b50505f909155505050565b5f8280820361049d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856104ab600185612117565b8181106104ba576104ba61214f565b90506020028101906104cc919061217c565b6104dd9060808101906060016121b8565b90505f6104e9826106b8565b905073ffffffffffffffffffffffffffffffffffffffff8216610513576105103482612117565b90505b5f61051e8888610702565b905061052a888861080c565b6105378a89898985610878565b5f82610542856106b8565b61054c9190612117565b905089811015610596576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b6105b6610120820161010083016121d8565b156105c9576105c58282610ac0565b5050565b6105c58282610e68565b73ffffffffffffffffffffffffffffffffffffffff83166105fd576105f8828261115b565b505050565b6105f88383836111c8565b805f03610641576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661069657803410156105c5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105c573ffffffffffffffffffffffffffffffffffffffff8316333084611236565b5f73ffffffffffffffffffffffffffffffffffffffff8216156106fa576106f573ffffffffffffffffffffffffffffffffffffffff83163061128e565b6106fc565b475b92915050565b6060815f8167ffffffffffffffff81111561071f5761071f611db6565b604051908082528060200260200182016040528015610748578160200160208202803683370190505b5090505f5f5b83811015610801578686828181106107685761076861214f565b905060200281019061077a919061217c565b61078b9060808101906060016121b8565b9150610796826106b8565b8382815181106107a8576107a861214f565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166107f957348382815181106107e1576107e161214f565b602002602001018181516107f59190612117565b9052505b60010161074e565b509095945050505050565b5f5b818110156105f857368383838181106108295761082961214f565b905060200281019061083b919061217c565b905061084d60e0820160c083016121d8565b1561086f5761086f61086560608301604084016121b8565b8260800135610608565b5060010161080e565b83838383825f80805b83811015610aa457368c8c8381811061089c5761089c61214f565b90506020028101906108ae919061217c565b90506108bd60208201826121b8565b93506108cf60408201602083016121b8565b9250610972846108e260a08401846121f1565b6108f0916004915f91612259565b6108f991612280565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580610a5a57506109a661098c60608301604084016121b8565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156109df57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015610a5a575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15610a91576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a9b8e826112c1565b50600101610881565b50505050610ab5848484845f611534565b505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610b2d576040517f78982fad00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114610b94576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6512309ce540018260e0015114610bd7576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8035610c0f576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c19828261174b565b81515f9081527f538927223924206bd240a355218da67e32e6e52053f03de093634bb0225f5b21602081905260409091205460ff1615610c85576040517feb4156ad00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82515f90815260208290526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556080840151610ce09073ffffffffffffffffffffffffffffffffffffffff161590565b15610cf0575060c0830151610d23565b610d2384608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151611ada565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166321c69a198286608001518760c0015187610120016020810190610d7e91906121b8565b610d906101608a016101408b016121b8565b610d9e6101608b018b6121f1565b6040518863ffffffff1660e01b8152600401610dbf969594939291906122e6565b5f604051808303818588803b158015610dd6575f5ffd5b505af1158015610de8573d5f5f3e3d5ffd5b50505060e086015186516040518735815291935091507f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a37fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f184604051610e5a91906123dc565b60405180910390a150505050565b5f610e8b836080015173ffffffffffffffffffffffffffffffffffffffff161590565b90505f8115610e9f575060c0830151610ed2565b610ed284608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151611ada565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a11b119882604051806101200160405280878060200190610f2b91906121f1565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250602001610f7160408901896121f1565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250602001610fb760a08901896124ef565b808060200260200160405190810160405280939291908181526020018383602002808284375f92019190915250505090825250602001610ffd6080890160608a016121b8565b73ffffffffffffffffffffffffffffffffffffffff16815260200161102860a0890160808a016121b8565b73ffffffffffffffffffffffffffffffffffffffff1681526020018860c00151815260200186151581526020018760c001602081019061106891906121b8565b73ffffffffffffffffffffffffffffffffffffffff16815260200161109060e08901896121f1565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526110fe91906004016125a3565b5f604051808303818588803b158015611115575f5ffd5b505af1158015611127573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f184604051610e5a91906123dc565b73ffffffffffffffffffffffffffffffffffffffff82166111a8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105c573ffffffffffffffffffffffffffffffffffffffff831682611b06565b73ffffffffffffffffffffffffffffffffffffffff8216611215576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105f873ffffffffffffffffffffffffffffffffffffffff84168383611b1f565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661128157637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6112d96112d160208301836121b8565b6017903b1190565b61130f576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361134e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61136261098c60608501604086016121b8565b61136c575f611372565b82608001355b90505f61138d61138860808601606087016121b8565b6106b8565b9050815f036113c3576113c36113a960608601604087016121b8565b6113b960408701602088016121b8565b8660800135611ada565b5f806113d260208701876121b8565b73ffffffffffffffffffffffffffffffffffffffff16846113f660a08901896121f1565b604051611404929190612709565b5f6040518083038185875af1925050503d805f811461143e576040519150601f19603f3d011682016040523d82523d5f602084013e611443565b606091505b5091509150816114565761145681611b68565b5f61146a6113886080890160608a016121b8565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861149b60208a018a6121b8565b6114ab60608b0160408c016121b8565b6114bb60808c0160608d016121b8565b8b608001358987116114cd57866114d7565b6114d78a88612117565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611543600182612117565b8181106115525761155261214f565b9050602002810190611564919061217c565b6115759060808101906060016121b8565b90505f5f5f5f5f5f5f5b8881101561173b5761159260018a612117565b811080156115a1575088600114155b1561167c578d8d828181106115b8576115b861214f565b90506020028101906115ca919061217c565b6115db9060808101906060016121b8565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461167c578a81815181106116225761162261214f565b6020026020010151611633876106b8565b61163d9190612117565b965073ffffffffffffffffffffffffffffffffffffffff861615611661575f611663565b895b93508387111561167c5761167c868d610230878b612117565b8d8d8281811061168e5761168e61214f565b90506020028101906116a0919061217c565b6116b19060608101906040016121b8565b94506116bc856106b8565b925073ffffffffffffffffffffffffffffffffffffffff8516156116e0575f6116e2565b895b9150818311801561171f57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561173357611733858d6102308587612117565b60010161157f565b5050505050505050505050505050565b80610180013542111561178a576040517f0819bdcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815160c0830151608084015160e08501515f937fcbef770661caade0f9a99582437a7cf8b10673b081ad0a3d8c9c61e5600c0e0d939092909186356117d761014089016101208a016121b8565b6117e96101608a016101408b016121b8565b6117f76101608b018b6121f1565b604051611805929190612709565b60408051918290038220602083019a909a52810197909752606087019590955273ffffffffffffffffffffffffffffffffffffffff938416608087015260a086019290925260c0850152811660e084015216610100820152610120810191909152610180830135610140820152610160016040516020818303038152906040528051906020012090505f611992604080518082018252601581527f4c492e46492053796d62696f736973204661636574000000000000000000000060209182015281518083018352600181527f31000000000000000000000000000000000000000000000000000000000000009082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f6693c323254b90b9e5daf6fac05df1190d2903b2507eb6350c5ff1e0d1c75bfb818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b6040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281019190915260428101839052606201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120905073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016611a8782611a4e6101a08701876121f1565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250611b7292505050565b73ffffffffffffffffffffffffffffffffffffffff1614611ad4576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6105f88383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611c16565b5f385f3884865af16105c55763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611b5f576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b604051600190835f5260208301516040526040835103611bc657604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052611bea565b6041835103611be65760608301515f1a6020526040830151606052611bea565b5f91505b6020600160805f855afa5191503d611c0957638baa579f5f526004601cfd5b5f60605260405292915050565b73ffffffffffffffffffffffffffffffffffffffff841615611ad45773ffffffffffffffffffffffffffffffffffffffff8316611c7f576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611cf2573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611d169190612718565b1015611ad457611ad473ffffffffffffffffffffffffffffffffffffffff8516848381601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611b5f575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611b5f57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611e0757611e07611db6565b60405290565b5f82601f830112611e1c575f5ffd5b813567ffffffffffffffff811115611e3657611e36611db6565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611e8357611e83611db6565b604052818152838201602001851015611e9a575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611ed9575f5ffd5b919050565b80358015158114611ed9575f5ffd5b5f6101408284031215611efe575f5ffd5b611f06611de3565b823581529050602082013567ffffffffffffffff811115611f25575f5ffd5b611f3184828501611e0d565b602083015250604082013567ffffffffffffffff811115611f50575f5ffd5b611f5c84828501611e0d565b604083015250611f6e60608301611eb6565b6060820152611f7f60808301611eb6565b6080820152611f9060a08301611eb6565b60a082015260c0828101359082015260e08083013590820152611fb66101008301611ede565b610100820152611fc96101208301611ede565b61012082015292915050565b5f6101c08284031215611fe6575f5ffd5b50919050565b5f5f5f5f60608587031215611fff575f5ffd5b843567ffffffffffffffff811115612015575f5ffd5b61202187828801611eed565b945050602085013567ffffffffffffffff81111561203d575f5ffd5b8501601f8101871361204d575f5ffd5b803567ffffffffffffffff811115612063575f5ffd5b8760208260051b8401011115612077575f5ffd5b60209190910193509150604085013567ffffffffffffffff81111561209a575f5ffd5b6120a687828801611fd5565b91505092959194509250565b5f5f604083850312156120c3575f5ffd5b823567ffffffffffffffff8111156120d9575f5ffd5b6120e585828601611eed565b925050602083013567ffffffffffffffff811115612101575f5ffd5b61210d85828601611fd5565b9150509250929050565b818103818111156106fc577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126121ae575f5ffd5b9190910192915050565b5f602082840312156121c8575f5ffd5b6121d182611eb6565b9392505050565b5f602082840312156121e8575f5ffd5b6121d182611ede565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612224575f5ffd5b83018035915067ffffffffffffffff82111561223e575f5ffd5b602001915036819003821315612252575f5ffd5b9250929050565b5f5f85851115612267575f5ffd5b83861115612273575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156122df577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015273ffffffffffffffffffffffffffffffffffffffff8516604082015273ffffffffffffffffffffffffffffffffffffffff8416606082015260a060808201528160a0820152818360c08301375f81830160c090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016010195945050505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152612403610160840182612390565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261243e8282612390565b9150506060840151612468608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516124d761012085018215159052565b50610120840151801515610140850152509392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612522575f5ffd5b83018035915067ffffffffffffffff82111561253c575f5ffd5b6020019150600581901b3603821315612252575f5ffd5b5f8151808452602084019350602083015f5b8281101561259957815173ffffffffffffffffffffffffffffffffffffffff16865260209586019590910190600101612565565b5093949350505050565b602081525f825161012060208401526125c0610140840182612390565b905060208401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160408501526125fb8282612390565b91505060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526126378282612553565b9150506060840151612661608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015160c084015260c08401516126a160e085018215159052565b5060e084015173ffffffffffffffffffffffffffffffffffffffff8116610100850152506101008401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016101208501526127008282612390565b95945050505050565b818382375f9101908152919050565b5f60208284031215612728575f5ffd5b505191905056fea2646970667358221220d8ee0af1a9a63ae38ccced8ed481b17454135737192aecbcbfcaec25bf48479c64736f6c634300081d0033";
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
