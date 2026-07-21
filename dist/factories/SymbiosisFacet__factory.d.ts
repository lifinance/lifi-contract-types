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
    static readonly bytecode = "0x610120604052348015610010575f5ffd5b50604051612aaa380380612aaa83398101604081905261002f916100ea565b6001600160a01b038516158061004c57506001600160a01b038416155b8061005e57506001600160a01b038116155b1561007c576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b038381161590831615146100aa576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0394851660805292841660a05290831660c052821660e052166101005261015b565b6001600160a01b03811681146100e7575f5ffd5b50565b5f5f5f5f5f60a086880312156100fe575f5ffd5b8551610109816100d3565b602087015190955061011a816100d3565b604087015190945061012b816100d3565b606087015190935061013c816100d3565b608087015190925061014d816100d3565b809150509295509295909350565b60805160a05160c05160e0516101005161290b61019f5f395f611bc201525f610ded01525f8181610bb50152610e1801525f61104f01525f61107a015261290b5ff3fe608060405260043610610028575f3560e01c80634f9eef951461002c5780636ac650c914610041575b5f5ffd5b61003f61003a366004612192565b610054565b005b61003f61004f366004612258565b610335565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df34476122bd565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861017f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610230576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87158015906102ad575060808a015173ffffffffffffffffffffffffffffffffffffffff1689896102626001826122bd565b818110610271576102716122f5565b90506020028101906102839190612322565b61029490608081019060600161235e565b73ffffffffffffffffffffffffffffffffffffffff1614155b156102e4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102f88a5f01518b60c001518b8b33610555565b60c08b01526103078a88610697565b504791505081811115610328576103285f8461032385856122bd565b6106c6565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103c034476122bd565b9050846103e58160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561041c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610459576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610496576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156104d4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610512576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052488608001518960c001516106fb565b61052e8888610697565b50479150508181111561054a5761054a5f8461032385856122bd565b50505f909155505050565b5f82808203610590576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561059e6001856122bd565b8181106105ad576105ad6122f5565b90506020028101906105bf9190612322565b6105d090608081019060600161235e565b90505f6105dc826107ab565b905073ffffffffffffffffffffffffffffffffffffffff82166106065761060334826122bd565b90505b5f61061188886107f5565b905061061d88886108ff565b61062a8a8989898561096b565b5f82610635856107ab565b61063f91906122bd565b905089811015610689576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b6106a96101208201610100830161237e565b156106bc576106b88282610bb3565b5050565b6106b88282610f5b565b73ffffffffffffffffffffffffffffffffffffffff83166106f0576106eb8282611301565b505050565b6106eb83838361136e565b805f03610734576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661078957803410156106b8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106b873ffffffffffffffffffffffffffffffffffffffff83163330846113dc565b5f73ffffffffffffffffffffffffffffffffffffffff8216156107ed576107e873ffffffffffffffffffffffffffffffffffffffff831630611434565b6107ef565b475b92915050565b6060815f8167ffffffffffffffff81111561081257610812611f5c565b60405190808252806020026020018201604052801561083b578160200160208202803683370190505b5090505f5f5b838110156108f45786868281811061085b5761085b6122f5565b905060200281019061086d9190612322565b61087e90608081019060600161235e565b9150610889826107ab565b83828151811061089b5761089b6122f5565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166108ec57348382815181106108d4576108d46122f5565b602002602001018181516108e891906122bd565b9052505b600101610841565b509095945050505050565b5f5b818110156106eb573683838381811061091c5761091c6122f5565b905060200281019061092e9190612322565b905061094060e0820160c0830161237e565b1561096257610962610958606083016040840161235e565b82608001356106fb565b50600101610901565b83838383825f80805b83811015610b9757368c8c8381811061098f5761098f6122f5565b90506020028101906109a19190612322565b90506109b0602082018261235e565b93506109c2604082016020830161235e565b9250610a65846109d560a0840184612397565b6109e3916004915f916123ff565b6109ec91612426565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580610b4d5750610a99610a7f606083016040840161235e565b73ffffffffffffffffffffffffffffffffffffffff161590565b158015610ad257508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015610b4d575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15610b84576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b8e8e82611467565b50600101610974565b50505050610ba8848484845f6116da565b505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610c20576040517f78982fad00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114610c87576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6512309ce540018260e0015114610cca576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8035610d02576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d0c82826118f1565b81515f9081527f538927223924206bd240a355218da67e32e6e52053f03de093634bb0225f5b21602081905260409091205460ff1615610d78576040517feb4156ad00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82515f90815260208290526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556080840151610dd39073ffffffffffffffffffffffffffffffffffffffff161590565b15610de3575060c0830151610e16565b610e1684608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151611c80565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166321c69a198286608001518760c0015187610120016020810190610e71919061235e565b610e836101608a016101408b0161235e565b610e916101608b018b612397565b6040518863ffffffff1660e01b8152600401610eb29695949392919061248c565b5f604051808303818588803b158015610ec9575f5ffd5b505af1158015610edb573d5f5f3e3d5ffd5b50505060e086015186516040518735815291935091507f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a37fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f184604051610f4d9190612582565b60405180910390a150505050565b610f6860a0820182612695565b15905080610fd75750608082015173ffffffffffffffffffffffffffffffffffffffff16610f9960a0830183612695565b5f818110610fa957610fa96122f5565b9050602002016020810190610fbe919061235e565b73ffffffffffffffffffffffffffffffffffffffff1614155b1561100e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611031836080015173ffffffffffffffffffffffffffffffffffffffff161590565b90505f8115611045575060c0830151611078565b61107884608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151611c80565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a11b1198826040518061012001604052808780602001906110d19190612397565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050908252506020016111176040890189612397565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509082525060200161115d60a0890189612695565b808060200260200160405190810160405280939291908181526020018383602002808284375f920191909152505050908252506020016111a36080890160608a0161235e565b73ffffffffffffffffffffffffffffffffffffffff1681526020016111ce60a0890160808a0161235e565b73ffffffffffffffffffffffffffffffffffffffff1681526020018860c00151815260200186151581526020018760c001602081019061120e919061235e565b73ffffffffffffffffffffffffffffffffffffffff16815260200161123660e0890189612397565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526112a49190600401612749565b5f604051808303818588803b1580156112bb575f5ffd5b505af11580156112cd573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f184604051610f4d9190612582565b73ffffffffffffffffffffffffffffffffffffffff821661134e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106b873ffffffffffffffffffffffffffffffffffffffff831682611cac565b73ffffffffffffffffffffffffffffffffffffffff82166113bb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106eb73ffffffffffffffffffffffffffffffffffffffff84168383611cc5565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661142757637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61147f611477602083018361235e565b6017903b1190565b6114b5576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036114f4576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611508610a7f606085016040860161235e565b611512575f611518565b82608001355b90505f61153361152e608086016060870161235e565b6107ab565b9050815f036115695761156961154f606086016040870161235e565b61155f604087016020880161235e565b8660800135611c80565b5f80611578602087018761235e565b73ffffffffffffffffffffffffffffffffffffffff168461159c60a0890189612397565b6040516115aa9291906128af565b5f6040518083038185875af1925050503d805f81146115e4576040519150601f19603f3d011682016040523d82523d5f602084013e6115e9565b606091505b5091509150816115fc576115fc81611d0e565b5f61161061152e6080890160608a0161235e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861164160208a018a61235e565b61165160608b0160408c0161235e565b61166160808c0160608d0161235e565b8b60800135898711611673578661167d565b61167d8a886122bd565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826116e96001826122bd565b8181106116f8576116f86122f5565b905060200281019061170a9190612322565b61171b90608081019060600161235e565b90505f5f5f5f5f5f5f5b888110156118e15761173860018a6122bd565b81108015611747575088600114155b15611822578d8d8281811061175e5761175e6122f5565b90506020028101906117709190612322565b61178190608081019060600161235e565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611822578a81815181106117c8576117c86122f5565b60200260200101516117d9876107ab565b6117e391906122bd565b965073ffffffffffffffffffffffffffffffffffffffff861615611807575f611809565b895b93508387111561182257611822868d610323878b6122bd565b8d8d82818110611834576118346122f5565b90506020028101906118469190612322565b61185790606081019060400161235e565b9450611862856107ab565b925073ffffffffffffffffffffffffffffffffffffffff851615611886575f611888565b895b915081831180156118c557508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156118d9576118d9858d61032385876122bd565b600101611725565b5050505050505050505050505050565b806101800135421115611930576040517f0819bdcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815160c0830151608084015160e08501515f937fcbef770661caade0f9a99582437a7cf8b10673b081ad0a3d8c9c61e5600c0e0d9390929091863561197d61014089016101208a0161235e565b61198f6101608a016101408b0161235e565b61199d6101608b018b612397565b6040516119ab9291906128af565b60408051918290038220602083019a909a52810197909752606087019590955273ffffffffffffffffffffffffffffffffffffffff938416608087015260a086019290925260c0850152811660e084015216610100820152610120810191909152610180830135610140820152610160016040516020818303038152906040528051906020012090505f611b38604080518082018252601581527f4c492e46492053796d62696f736973204661636574000000000000000000000060209182015281518083018352600181527f31000000000000000000000000000000000000000000000000000000000000009082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f6693c323254b90b9e5daf6fac05df1190d2903b2507eb6350c5ff1e0d1c75bfb818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b6040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281019190915260428101839052606201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120905073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016611c2d82611bf46101a0870187612397565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250611d1892505050565b73ffffffffffffffffffffffffffffffffffffffff1614611c7a576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6106eb8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611dbc565b5f385f3884865af16106b85763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611d05576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b604051600190835f5260208301516040526040835103611d6c57604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052611d90565b6041835103611d8c5760608301515f1a6020526040830151606052611d90565b5f91505b6020600160805f855afa5191503d611daf57638baa579f5f526004601cfd5b5f60605260405292915050565b73ffffffffffffffffffffffffffffffffffffffff841615611c7a5773ffffffffffffffffffffffffffffffffffffffff8316611e25576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611e98573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611ebc91906128be565b1015611c7a57611c7a73ffffffffffffffffffffffffffffffffffffffff8516848381601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611d05575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611d0557633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611fad57611fad611f5c565b60405290565b5f82601f830112611fc2575f5ffd5b813567ffffffffffffffff811115611fdc57611fdc611f5c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561202957612029611f5c565b604052818152838201602001851015612040575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461207f575f5ffd5b919050565b8035801515811461207f575f5ffd5b5f61014082840312156120a4575f5ffd5b6120ac611f89565b823581529050602082013567ffffffffffffffff8111156120cb575f5ffd5b6120d784828501611fb3565b602083015250604082013567ffffffffffffffff8111156120f6575f5ffd5b61210284828501611fb3565b6040830152506121146060830161205c565b60608201526121256080830161205c565b608082015261213660a0830161205c565b60a082015260c0828101359082015260e0808301359082015261215c6101008301612084565b61010082015261216f6101208301612084565b61012082015292915050565b5f6101c0828403121561218c575f5ffd5b50919050565b5f5f5f5f606085870312156121a5575f5ffd5b843567ffffffffffffffff8111156121bb575f5ffd5b6121c787828801612093565b945050602085013567ffffffffffffffff8111156121e3575f5ffd5b8501601f810187136121f3575f5ffd5b803567ffffffffffffffff811115612209575f5ffd5b8760208260051b840101111561221d575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115612240575f5ffd5b61224c8782880161217b565b91505092959194509250565b5f5f60408385031215612269575f5ffd5b823567ffffffffffffffff81111561227f575f5ffd5b61228b85828601612093565b925050602083013567ffffffffffffffff8111156122a7575f5ffd5b6122b38582860161217b565b9150509250929050565b818103818111156107ef577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612354575f5ffd5b9190910192915050565b5f6020828403121561236e575f5ffd5b6123778261205c565b9392505050565b5f6020828403121561238e575f5ffd5b61237782612084565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126123ca575f5ffd5b83018035915067ffffffffffffffff8211156123e4575f5ffd5b6020019150368190038213156123f8575f5ffd5b9250929050565b5f5f8585111561240d575f5ffd5b83861115612419575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612485577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015273ffffffffffffffffffffffffffffffffffffffff8516604082015273ffffffffffffffffffffffffffffffffffffffff8416606082015260a060808201528160a0820152818360c08301375f81830160c090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016010195945050505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526125a9610160840182612536565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526125e48282612536565b915050606084015161260e608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161267d61012085018215159052565b50610120840151801515610140850152509392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126126c8575f5ffd5b83018035915067ffffffffffffffff8211156126e2575f5ffd5b6020019150600581901b36038213156123f8575f5ffd5b5f8151808452602084019350602083015f5b8281101561273f57815173ffffffffffffffffffffffffffffffffffffffff1686526020958601959091019060010161270b565b5093949350505050565b602081525f82516101206020840152612766610140840182612536565b905060208401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160408501526127a18282612536565b91505060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526127dd82826126f9565b9150506060840151612807608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015160c084015260c084015161284760e085018215159052565b5060e084015173ffffffffffffffffffffffffffffffffffffffff8116610100850152506101008401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016101208501526128a68282612536565b95945050505050565b818382375f9101908152919050565b5f602082840312156128ce575f5ffd5b505191905056fea2646970667358221220b4dc1b4e6f2d346fd4a94e6cc1dc8662b97879c3a48989dce79b1e334752fa6964736f6c634300081d0033";
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
