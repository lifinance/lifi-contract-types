import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SquidFacet, SquidFacetInterface } from "../SquidFacet";
declare type SquidFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161280038038061280083398101604081905261002e9161003f565b6001600160a01b031660805261006c565b5f6020828403121561004f575f5ffd5b81516001600160a01b0381168114610065575f5ffd5b9392505050565b6080516127676100995f395f818161054901528181610975015281816109e50152610ae001526127675ff3fe608060405260043610610028575f3560e01c80633f3138081461002c578063a8f6666614610041575b5f5ffd5b61003f61003a366004611cad565b610054565b005b61003f61004f366004611d12565b610245565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611e05565b9050848061010001511561011f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101428160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610179576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101b6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f3576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61021061020660a0880160808901611e18565b8860c00151610433565b61021a87876104e7565b504790508181111561023a5761023a5f846102358585611e05565b610671565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102c0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6102d03447611e05565b90508680610100015161030f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103328160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610369576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036103a6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103e3576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103fc895f01518a60c001518a8a338b60e001356106a6565b60c08a015261040b89876104e7565b5047905081811115610426576104265f846102358585611e05565b50505f9091555050505050565b805f0361046c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166104c557803410156104c1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6104c173ffffffffffffffffffffffffffffffffffffffff8316333084610841565b5f60405180606001604052808481526020018361050390611fa0565b81526020016105128585610899565b905260208101516080015190915073ffffffffffffffffffffffffffffffffffffffff1615610575576105758160200151608001517f0000000000000000000000000000000000000000000000000000000000000000835f015160c001516108db565b5f61058360208401846120fc565b6002811115610594576105946120cf565b036105a7576105a281610907565b610635565b60016105b660208401846120fc565b60028111156105c7576105c76120cf565b036105d5576105a2816109e3565b60026105e460208401846120fc565b60028111156105f5576105f56120cf565b03610603576105a281610ade565b6040517f9c59c20c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516106649190612161565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831661069b576106968282610be3565b505050565b610696838383610c50565b5f838082036106e1576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f86866106ef600185611e05565b8181106106fe576106fe612274565b905060200281019061071091906122a1565b610721906080810190606001611e18565b90505f61072d82610cbe565b905073ffffffffffffffffffffffffffffffffffffffff8216610757576107543482611e05565b90505b5f6107628989610d07565b905061076e8989610e11565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526107a9818b8b85610e7d565b5f836107b486610cbe565b6107be9190611e05565b905073ffffffffffffffffffffffffffffffffffffffff85166107e8576107e58882611e05565b90505b8b811015610831576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661088c57637939f4245f526004601cfd5b5f60605260405250505050565b60808201515f9060e08301359073ffffffffffffffffffffffffffffffffffffffff166108d25760c08401516108cf90826122dd565b90505b90505b92915050565b6106968383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61104d565b6040808201516020808401516060810151855160c08082015194840151848801519185015160a0909301516101009095015197517f2147796000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001698632147796098976109b2979095939493929091906004016122f0565b5f604051808303818588803b1580156109c9575f5ffd5b505af11580156109db573d5f5f3e3d5ffd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166352c41eb68260400151610a4a84602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610a5c57836020015160800151610a72565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b845f015160c00151856020015160a00151866020015160600151876020015160200151610abd895f015160a0015173ffffffffffffffffffffffffffffffffffffffff16601461117a565b6040518863ffffffff1660e01b81526004016109b29695949392919061247e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663846a1bc68260400151610b4584602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610b5757836020015160800151610b6d565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b845160c08082015160208089015160a0808201516060830151938301516040808501519785015193909801516101009094015197517fffffffff0000000000000000000000000000000000000000000000000000000060e08d901b1681526109b2999896979296919492939291906004016124f9565b73ffffffffffffffffffffffffffffffffffffffff8216610c30576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104c173ffffffffffffffffffffffffffffffffffffffff8316826113b7565b73ffffffffffffffffffffffffffffffffffffffff8216610c9d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61069673ffffffffffffffffffffffffffffffffffffffff841683836113d0565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d0057610cfb73ffffffffffffffffffffffffffffffffffffffff831630611419565b6108d5565b4792915050565b6060815f8167ffffffffffffffff811115610d2457610d246119fa565b604051908082528060200260200182016040528015610d4d578160200160208202803683370190505b5090505f805b83811015610e0657868682818110610d6d57610d6d612274565b9050602002810190610d7f91906122a1565b610d90906080810190606001611e18565b9150610d9b82610cbe565b838281518110610dad57610dad612274565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610dfe5734838281518110610de657610de6612274565b60200260200101818151610dfa9190611e05565b9052505b600101610d53565b509095945050505050565b5f5b818110156106965736838383818110610e2e57610e2e612274565b9050602002810190610e4091906122a1565b9050610e5260e0820160c083016125b2565b15610e7457610e74610e6a6060830160408401611e18565b8260800135610433565b50600101610e13565b60208401516040850151849184918490835f5b8181101561103357368a8a83818110610eab57610eab612274565b9050602002810190610ebd91906122a1565b9050610eec610ed26060830160408401611e18565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610f4e5750610f4e610f056040830160208401611e18565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610f655750610f65610f056020830183611e18565b8015610fe85750610fe8610f7c60a08301836125cb565b610f8a916004915f91612633565b610f939161265a565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61101e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b5161102a908261144c565b50600101610e90565b505061104285858585856116bc565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156111745773ffffffffffffffffffffffffffffffffffffffff83166110b6576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611129573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061114d91906126c0565b10156111745761117473ffffffffffffffffffffffffffffffffffffffff851684836118de565b50505050565b60605f6111888360026126d7565b6111939060026122dd565b67ffffffffffffffff8111156111ab576111ab6119fa565b6040519080825280601f01601f1916602001820160405280156111d5576020820181803683370190505b5090507f3000000000000000000000000000000000000000000000000000000000000000815f8151811061120b5761120b612274565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061126d5761126d612274565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053505f6112a78460026126d7565b6112b29060016122dd565b90505b600181111561134e577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106112f3576112f3612274565b1a60f81b82828151811061130957611309612274565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a90535060049490941c93611347816126ee565b90506112b5565b5083156108d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610828565b5f385f3884865af16104c15763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611410576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61146161145c6020830183611e18565b61195c565b611497576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036114d6576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6114ea610ed26060850160408601611e18565b6114f4575f6114fa565b82608001355b90505f6115156115106080860160608701611e18565b610cbe565b9050815f0361154b5761154b6115316060860160408701611e18565b6115416040870160208801611e18565b86608001356108db565b5f8061155a6020870187611e18565b73ffffffffffffffffffffffffffffffffffffffff168461157e60a08901896125cb565b60405161158c929190612722565b5f6040518083038185875af1925050503d805f81146115c6576040519150601f19603f3d011682016040523d82523d5f602084013e6115cb565b606091505b5091509150816115de576115de816119f0565b5f6115f26115106080890160608a01611e18565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861162360208a018a611e18565b61163360608b0160408c01611e18565b61164360808c0160608d01611e18565b8b60800135898711611655578661165f565b61165f8a88611e05565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826116cb600182611e05565b8181106116da576116da612274565b90506020028101906116ec91906122a1565b6116fd906080810190606001611e18565b905081600114611802575f805b611715600185611e05565b8110156117ff575f89898381811061172f5761172f612274565b905060200281019061174191906122a1565b611752906080810190606001611e18565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146117f65786828151811061179957611799612274565b60200260200101516117aa82610cbe565b6117b49190611e05565b92505f73ffffffffffffffffffffffffffffffffffffffff8216156117d9575f6117db565b865b9050808411156117f4576117f4828a6102358488611e05565b505b5060010161170a565b50505b5f5b828110156118d4575f88888381811061181f5761181f612274565b905060200281019061183191906122a1565b611842906060810190604001611e18565b90505f61184e82610cbe565b90505f73ffffffffffffffffffffffffffffffffffffffff831615611873575f611875565b865b905080821180156118b257508473ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b156118c6576118c6838a6102358486611e05565b836001019350505050611804565b5050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611410575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661141057633e3f8f735f526004601cfd5b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff00000000000000000000000000000000000000000000000000000000008216016119e757506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611a4b57611a4b6119fa565b60405290565b60405160a0810167ffffffffffffffff81118282101715611a4b57611a4b6119fa565b604051610120810167ffffffffffffffff81118282101715611a4b57611a4b6119fa565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611adf57611adf6119fa565b604052919050565b5f82601f830112611af6575f5ffd5b8135602083015f5f67ffffffffffffffff841115611b1657611b166119fa565b50601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016602001611b4981611a98565b915050828152858383011115611b5d575f5ffd5b828260208301375f92810160200192909252509392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611b9a575f5ffd5b919050565b80358015158114611b9a575f5ffd5b5f6101408284031215611bbf575f5ffd5b611bc7611a27565b823581529050602082013567ffffffffffffffff811115611be6575f5ffd5b611bf284828501611ae7565b602083015250604082013567ffffffffffffffff811115611c11575f5ffd5b611c1d84828501611ae7565b604083015250611c2f60608301611b77565b6060820152611c4060808301611b77565b6080820152611c5160a08301611b77565b60a082015260c0828101359082015260e08083013590820152611c776101008301611b9f565b610100820152611c8a6101208301611b9f565b61012082015292915050565b5f6101208284031215611ca7575f5ffd5b50919050565b5f5f60408385031215611cbe575f5ffd5b823567ffffffffffffffff811115611cd4575f5ffd5b611ce085828601611bae565b925050602083013567ffffffffffffffff811115611cfc575f5ffd5b611d0885828601611c96565b9150509250929050565b5f5f5f5f60608587031215611d25575f5ffd5b843567ffffffffffffffff811115611d3b575f5ffd5b611d4787828801611bae565b945050602085013567ffffffffffffffff811115611d63575f5ffd5b8501601f81018713611d73575f5ffd5b803567ffffffffffffffff811115611d89575f5ffd5b8760208260051b8401011115611d9d575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611dc0575f5ffd5b611dcc87828801611c96565b91505092959194509250565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156108d5576108d5611dd8565b5f60208284031215611e28575f5ffd5b611e3182611b77565b9392505050565b803560038110611b9a575f5ffd5b5f82601f830112611e55575f5ffd5b813567ffffffffffffffff811115611e6f57611e6f6119fa565b8060051b611e7f60208201611a98565b91825260208185018101929081019086841115611e9a575f5ffd5b6020860192505b83831015611f9657823567ffffffffffffffff811115611ebf575f5ffd5b860160a08189037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0011215611ef2575f5ffd5b611efa611a51565b602082013560048110611f0b575f5ffd5b8152611f1960408301611b77565b602082015260608201356040820152608082013567ffffffffffffffff811115611f41575f5ffd5b611f508a602083860101611ae7565b60608301525060a082013567ffffffffffffffff811115611f6f575f5ffd5b611f7e8a602083860101611ae7565b60808301525083525060209283019290910190611ea1565b9695505050505050565b5f6101208236031215611fb1575f5ffd5b611fb9611a74565b611fc283611e38565b8152602083013567ffffffffffffffff811115611fdd575f5ffd5b611fe936828601611ae7565b602083015250604083013567ffffffffffffffff811115612008575f5ffd5b61201436828601611ae7565b604083015250606083013567ffffffffffffffff811115612033575f5ffd5b61203f36828601611ae7565b60608301525061205160808401611b77565b608082015260a083013567ffffffffffffffff81111561206f575f5ffd5b61207b36828601611e46565b60a08301525060c083013567ffffffffffffffff81111561209a575f5ffd5b6120a636828601611ae7565b60c08301525060e083810135908201526120c36101008401611b9f565b61010082015292915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f6020828403121561210c575f5ffd5b611e3182611e38565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152612188610160840182612115565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526121c38282612115565b91505060608401516121ed608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161225c61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126122d3575f5ffd5b9190910192915050565b808201808211156108d5576108d5611dd8565b60e081525f61230260e083018a612115565b886020840152828103604084015261231a8189612115565b9050828103606084015261232e8188612115565b905082810360808401526123428187612115565b73ffffffffffffffffffffffffffffffffffffffff9590951660a0840152505090151560c09091015295945050505050565b5f82825180855260208501945060208160051b830101602085015f5b83811015612472577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301885281518051600481106123f8577f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b8085525073ffffffffffffffffffffffffffffffffffffffff602082015116602085015260408101516040850152606081015160a0606086015261243f60a0860182612115565b905060808201519150848103608086015261245a8183612115565b60209a8b019a90955093909301925050600101612390565b50909695505050505050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015260c060408201525f6124b260c0830187612374565b82810360608401526124c48187612115565b905082810360808401526124d88186612115565b905082810360a08401526124ec8185612115565b9998505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8a16815288602082015261012060408201525f61252f61012083018a612374565b8281036060840152612541818a612115565b905082810360808401526125558189612115565b905082810360a08401526125698188612115565b905082810360c084015261257d8187612115565b73ffffffffffffffffffffffffffffffffffffffff9590951660e0840152505090151561010090910152979650505050505050565b5f602082840312156125c2575f5ffd5b611e3182611b9f565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125fe575f5ffd5b83018035915067ffffffffffffffff821115612618575f5ffd5b60200191503681900382131561262c575f5ffd5b9250929050565b5f5f85851115612641575f5ffd5b8386111561264d575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156126b9577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f602082840312156126d0575f5ffd5b5051919050565b80820281158282048414176108d5576108d5611dd8565b5f816126fc576126fc611dd8565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b818382375f910190815291905056fea2646970667358221220c31a26c493987e4d9fa150ae823d34207ddd52fe0a92503779b76e1d4816caad64736f6c634300081d0033";
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
