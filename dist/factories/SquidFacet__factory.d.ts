import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SquidFacet, SquidFacetInterface } from "../SquidFacet";
type SquidFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SquidFacet__factory extends ContractFactory {
    constructor(...args: SquidFacetConstructorParams);
    deploy(_squidRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SquidFacet>;
    getDeployTransaction(_squidRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SquidFacet;
    connect(signer: Signer): SquidFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161280138038061280183398101604081905261002e9161003f565b6001600160a01b031660805261006c565b5f6020828403121561004f575f5ffd5b81516001600160a01b0381168114610065575f5ffd5b9392505050565b6080516127686100995f395f818161054901528181610975015281816109e50152610ae001526127685ff3fe608060405260043610610028575f3560e01c80633f3138081461002c578063a8f6666614610041575b5f5ffd5b61003f61003a366004611cae565b610054565b005b61003f61004f366004611d13565b610245565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611e06565b9050848061010001511561011f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101428160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610179576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101b6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f3576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61021061020660a0880160808901611e19565b8860c00151610433565b61021a87876104e7565b504790508181111561023a5761023a5f846102358585611e06565b610671565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102c0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6102d03447611e06565b90508680610100015161030f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103328160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610369576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036103a6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103e3576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103fc895f01518a60c001518a8a338b60e001356106a6565b60c08a015261040b89876104e7565b5047905081811115610426576104265f846102358585611e06565b50505f9091555050505050565b805f0361046c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166104c557803410156104c1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6104c173ffffffffffffffffffffffffffffffffffffffff8316333084610841565b5f60405180606001604052808481526020018361050390611fa1565b81526020016105128585610899565b905260208101516080015190915073ffffffffffffffffffffffffffffffffffffffff1615610575576105758160200151608001517f0000000000000000000000000000000000000000000000000000000000000000835f015160c001516108db565b5f61058360208401846120fd565b6002811115610594576105946120d0565b036105a7576105a281610907565b610635565b60016105b660208401846120fd565b60028111156105c7576105c76120d0565b036105d5576105a2816109e3565b60026105e460208401846120fd565b60028111156105f5576105f56120d0565b03610603576105a281610ade565b6040517f9c59c20c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516106649190612162565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831661069b576106968282610be3565b505050565b610696838383610c50565b5f838082036106e1576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f86866106ef600185611e06565b8181106106fe576106fe612275565b905060200281019061071091906122a2565b610721906080810190606001611e19565b90505f61072d82610cbe565b905073ffffffffffffffffffffffffffffffffffffffff8216610757576107543482611e06565b90505b5f6107628989610d07565b905061076e8989610e11565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526107a9818b8b85610e7d565b5f836107b486610cbe565b6107be9190611e06565b905073ffffffffffffffffffffffffffffffffffffffff85166107e8576107e58882611e06565b90505b8b811015610831576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661088c57637939f4245f526004601cfd5b5f60605260405250505050565b60808201515f9060e08301359073ffffffffffffffffffffffffffffffffffffffff166108d25760c08401516108cf90826122de565b90505b90505b92915050565b6106968383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6110ea565b6040808201516020808401516060810151855160c08082015194840151848801519185015160a0909301516101009095015197517f2147796000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001698632147796098976109b2979095939493929091906004016122f1565b5f604051808303818588803b1580156109c9575f5ffd5b505af11580156109db573d5f5f3e3d5ffd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166352c41eb68260400151610a4a84602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610a5c57836020015160800151610a72565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b845f015160c00151856020015160a00151866020015160600151876020015160200151610abd895f015160a0015173ffffffffffffffffffffffffffffffffffffffff166014611217565b6040518863ffffffff1660e01b81526004016109b29695949392919061247f565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663846a1bc68260400151610b4584602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610b5757836020015160800151610b6d565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b845160c08082015160208089015160a0808201516060830151938301516040808501519785015193909801516101009094015197517fffffffff0000000000000000000000000000000000000000000000000000000060e08d901b1681526109b2999896979296919492939291906004016124fa565b73ffffffffffffffffffffffffffffffffffffffff8216610c30576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104c173ffffffffffffffffffffffffffffffffffffffff831682611454565b73ffffffffffffffffffffffffffffffffffffffff8216610c9d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61069673ffffffffffffffffffffffffffffffffffffffff8416838361146d565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d0057610cfb73ffffffffffffffffffffffffffffffffffffffff8316306114b6565b6108d5565b4792915050565b6060815f8167ffffffffffffffff811115610d2457610d246119fb565b604051908082528060200260200182016040528015610d4d578160200160208202803683370190505b5090505f5f5b83811015610e0657868682818110610d6d57610d6d612275565b9050602002810190610d7f91906122a2565b610d90906080810190606001611e19565b9150610d9b82610cbe565b838281518110610dad57610dad612275565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610dfe5734838281518110610de657610de6612275565b60200260200101818151610dfa9190611e06565b9052505b600101610d53565b509095945050505050565b5f5b818110156106965736838383818110610e2e57610e2e612275565b9050602002810190610e4091906122a2565b9050610e5260e0820160c083016125b3565b15610e7457610e74610e6a6060830160408401611e19565b8260800135610433565b50600101610e13565b60208401516040850151849184918490835f5b818110156110d057368a8a83818110610eab57610eab612275565b9050602002810190610ebd91906122a2565b9050610f6c610ecf6020830183611e19565b610edc60a08401846125cc565b610eea916004915f91612634565b610ef39161265b565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806110845750610fa0610f866060830160408401611e19565b73ffffffffffffffffffffffffffffffffffffffff161590565b158015610ff45750610fb56020820182611e19565b73ffffffffffffffffffffffffffffffffffffffff16610fdb6040830160208401611e19565b73ffffffffffffffffffffffffffffffffffffffff1614155b8015611084575061108261100e6040830160208401611e19565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff1690565b155b156110bb576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b516110c790826114e9565b50600101610e90565b50506110df858585858561175c565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156112115773ffffffffffffffffffffffffffffffffffffffff8316611153576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156111c6573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111ea91906126c1565b10156112115761121173ffffffffffffffffffffffffffffffffffffffff85168483611973565b50505050565b60605f6112258360026126d8565b6112309060026122de565b67ffffffffffffffff811115611248576112486119fb565b6040519080825280601f01601f191660200182016040528015611272576020820181803683370190505b5090507f3000000000000000000000000000000000000000000000000000000000000000815f815181106112a8576112a8612275565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061130a5761130a612275565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053505f6113448460026126d8565b61134f9060016122de565b90505b60018111156113eb577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061139057611390612275565b1a60f81b8282815181106113a6576113a6612275565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a90535060049490941c936113e4816126ef565b9050611352565b5083156108d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610828565b5f385f3884865af16104c15763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166114ad576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6115016114f96020830183611e19565b6017903b1190565b611537576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611576576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61158a610f866060850160408601611e19565b611594575f61159a565b82608001355b90505f6115b56115b06080860160608701611e19565b610cbe565b9050815f036115eb576115eb6115d16060860160408701611e19565b6115e16040870160208801611e19565b86608001356108db565b5f806115fa6020870187611e19565b73ffffffffffffffffffffffffffffffffffffffff168461161e60a08901896125cc565b60405161162c929190612723565b5f6040518083038185875af1925050503d805f8114611666576040519150601f19603f3d011682016040523d82523d5f602084013e61166b565b606091505b50915091508161167e5761167e816119f1565b5f6116926115b06080890160608a01611e19565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886116c360208a018a611e19565b6116d360608b0160408c01611e19565b6116e360808c0160608d01611e19565b8b608001358987116116f557866116ff565b6116ff8a88611e06565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261176b600182611e06565b81811061177a5761177a612275565b905060200281019061178c91906122a2565b61179d906080810190606001611e19565b90505f5f5f5f5f5f5f5b88811015611963576117ba60018a611e06565b811080156117c9575088600114155b156118a4578d8d828181106117e0576117e0612275565b90506020028101906117f291906122a2565b611803906080810190606001611e19565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146118a4578a818151811061184a5761184a612275565b602002602001015161185b87610cbe565b6118659190611e06565b965073ffffffffffffffffffffffffffffffffffffffff861615611889575f61188b565b895b9350838711156118a4576118a4868d610235878b611e06565b8d8d828181106118b6576118b6612275565b90506020028101906118c891906122a2565b6118d9906060810190604001611e19565b94506118e485610cbe565b925073ffffffffffffffffffffffffffffffffffffffff851615611908575f61190a565b895b9150818311801561194757508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561195b5761195b858d6102358587611e06565b6001016117a7565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166114ad575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166114ad57633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611a4c57611a4c6119fb565b60405290565b60405160a0810167ffffffffffffffff81118282101715611a4c57611a4c6119fb565b604051610120810167ffffffffffffffff81118282101715611a4c57611a4c6119fb565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611ae057611ae06119fb565b604052919050565b5f82601f830112611af7575f5ffd5b8135602083015f5f67ffffffffffffffff841115611b1757611b176119fb565b50601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016602001611b4a81611a99565b915050828152858383011115611b5e575f5ffd5b828260208301375f92810160200192909252509392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611b9b575f5ffd5b919050565b80358015158114611b9b575f5ffd5b5f6101408284031215611bc0575f5ffd5b611bc8611a28565b823581529050602082013567ffffffffffffffff811115611be7575f5ffd5b611bf384828501611ae8565b602083015250604082013567ffffffffffffffff811115611c12575f5ffd5b611c1e84828501611ae8565b604083015250611c3060608301611b78565b6060820152611c4160808301611b78565b6080820152611c5260a08301611b78565b60a082015260c0828101359082015260e08083013590820152611c786101008301611ba0565b610100820152611c8b6101208301611ba0565b61012082015292915050565b5f6101208284031215611ca8575f5ffd5b50919050565b5f5f60408385031215611cbf575f5ffd5b823567ffffffffffffffff811115611cd5575f5ffd5b611ce185828601611baf565b925050602083013567ffffffffffffffff811115611cfd575f5ffd5b611d0985828601611c97565b9150509250929050565b5f5f5f5f60608587031215611d26575f5ffd5b843567ffffffffffffffff811115611d3c575f5ffd5b611d4887828801611baf565b945050602085013567ffffffffffffffff811115611d64575f5ffd5b8501601f81018713611d74575f5ffd5b803567ffffffffffffffff811115611d8a575f5ffd5b8760208260051b8401011115611d9e575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611dc1575f5ffd5b611dcd87828801611c97565b91505092959194509250565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156108d5576108d5611dd9565b5f60208284031215611e29575f5ffd5b611e3282611b78565b9392505050565b803560038110611b9b575f5ffd5b5f82601f830112611e56575f5ffd5b813567ffffffffffffffff811115611e7057611e706119fb565b8060051b611e8060208201611a99565b91825260208185018101929081019086841115611e9b575f5ffd5b6020860192505b83831015611f9757823567ffffffffffffffff811115611ec0575f5ffd5b860160a08189037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0011215611ef3575f5ffd5b611efb611a52565b602082013560048110611f0c575f5ffd5b8152611f1a60408301611b78565b602082015260608201356040820152608082013567ffffffffffffffff811115611f42575f5ffd5b611f518a602083860101611ae8565b60608301525060a082013567ffffffffffffffff811115611f70575f5ffd5b611f7f8a602083860101611ae8565b60808301525083525060209283019290910190611ea2565b9695505050505050565b5f6101208236031215611fb2575f5ffd5b611fba611a75565b611fc383611e39565b8152602083013567ffffffffffffffff811115611fde575f5ffd5b611fea36828601611ae8565b602083015250604083013567ffffffffffffffff811115612009575f5ffd5b61201536828601611ae8565b604083015250606083013567ffffffffffffffff811115612034575f5ffd5b61204036828601611ae8565b60608301525061205260808401611b78565b608082015260a083013567ffffffffffffffff811115612070575f5ffd5b61207c36828601611e47565b60a08301525060c083013567ffffffffffffffff81111561209b575f5ffd5b6120a736828601611ae8565b60c08301525060e083810135908201526120c46101008401611ba0565b61010082015292915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f6020828403121561210d575f5ffd5b611e3282611e39565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152612189610160840182612116565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526121c48282612116565b91505060608401516121ee608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161225d61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126122d4575f5ffd5b9190910192915050565b808201808211156108d5576108d5611dd9565b60e081525f61230360e083018a612116565b886020840152828103604084015261231b8189612116565b9050828103606084015261232f8188612116565b905082810360808401526123438187612116565b73ffffffffffffffffffffffffffffffffffffffff9590951660a0840152505090151560c09091015295945050505050565b5f82825180855260208501945060208160051b830101602085015f5b83811015612473577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301885281518051600481106123f9577f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b8085525073ffffffffffffffffffffffffffffffffffffffff602082015116602085015260408101516040850152606081015160a0606086015261244060a0860182612116565b905060808201519150848103608086015261245b8183612116565b60209a8b019a90955093909301925050600101612391565b50909695505050505050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015260c060408201525f6124b360c0830187612375565b82810360608401526124c58187612116565b905082810360808401526124d98186612116565b905082810360a08401526124ed8185612116565b9998505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8a16815288602082015261012060408201525f61253061012083018a612375565b8281036060840152612542818a612116565b905082810360808401526125568189612116565b905082810360a084015261256a8188612116565b905082810360c084015261257e8187612116565b73ffffffffffffffffffffffffffffffffffffffff9590951660e0840152505090151561010090910152979650505050505050565b5f602082840312156125c3575f5ffd5b611e3282611ba0565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125ff575f5ffd5b83018035915067ffffffffffffffff821115612619575f5ffd5b60200191503681900382131561262d575f5ffd5b9250929050565b5f5f85851115612642575f5ffd5b8386111561264e575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156126ba577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f602082840312156126d1575f5ffd5b5051919050565b80820281158282048414176108d5576108d5611dd9565b5f816126fd576126fd611dd9565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b818382375f910190815291905056fea2646970667358221220df01be6907dc97c24851fdc482cad8a633edd175458dccbcb5a51239c827175c64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_squidRouter";
            readonly type: "address";
            readonly internalType: "contract ISquidRouter";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaSquid";
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
            readonly name: "_squidData";
            readonly type: "tuple";
            readonly internalType: "struct SquidFacet.SquidData";
            readonly components: readonly [{
                readonly name: "routeType";
                readonly type: "uint8";
                readonly internalType: "enum SquidFacet.RouteType";
            }, {
                readonly name: "destinationChain";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "destinationAddress";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "bridgedTokenSymbol";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "depositAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sourceCalls";
                readonly type: "tuple[]";
                readonly internalType: "struct ISquidMulticall.Call[]";
                readonly components: readonly [{
                    readonly name: "callType";
                    readonly type: "uint8";
                    readonly internalType: "enum ISquidMulticall.CallType";
                }, {
                    readonly name: "target";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "callData";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "payload";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "payload";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "fee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "enableExpress";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaSquid";
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
            readonly name: "_squidData";
            readonly type: "tuple";
            readonly internalType: "struct SquidFacet.SquidData";
            readonly components: readonly [{
                readonly name: "routeType";
                readonly type: "uint8";
                readonly internalType: "enum SquidFacet.RouteType";
            }, {
                readonly name: "destinationChain";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "destinationAddress";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "bridgedTokenSymbol";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "depositAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sourceCalls";
                readonly type: "tuple[]";
                readonly internalType: "struct ISquidMulticall.Call[]";
                readonly components: readonly [{
                    readonly name: "callType";
                    readonly type: "uint8";
                    readonly internalType: "enum ISquidMulticall.CallType";
                }, {
                    readonly name: "target";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "callData";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "payload";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "payload";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "fee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "enableExpress";
                readonly type: "bool";
                readonly internalType: "bool";
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
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidRouteType";
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
    static createInterface(): SquidFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SquidFacet;
}
export {};
