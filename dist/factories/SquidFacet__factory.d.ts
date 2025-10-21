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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161276238038061276283398101604081905261002e9161003f565b6001600160a01b031660805261006c565b5f6020828403121561004f575f5ffd5b81516001600160a01b0381168114610065575f5ffd5b9392505050565b6080516126c96100995f395f818161054901528181610975015281816109e50152610ae001526126c95ff3fe608060405260043610610028575f3560e01c80633f3138081461002c578063a8f6666614610041575b5f5ffd5b61003f61003a366004611c0f565b610054565b005b61003f61004f366004611c74565b610245565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611d67565b9050848061010001511561011f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101428160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610179576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101b6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f3576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61021061020660a0880160808901611d7a565b8860c00151610433565b61021a87876104e7565b504790508181111561023a5761023a5f846102358585611d67565b610671565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102c0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6102d03447611d67565b90508680610100015161030f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103328160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610369576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036103a6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103e3576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103fc895f01518a60c001518a8a338b60e001356106a6565b60c08a015261040b89876104e7565b5047905081811115610426576104265f846102358585611d67565b50505f9091555050505050565b805f0361046c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166104c557803410156104c1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6104c173ffffffffffffffffffffffffffffffffffffffff8316333084610841565b5f60405180606001604052808481526020018361050390611f02565b81526020016105128585610899565b905260208101516080015190915073ffffffffffffffffffffffffffffffffffffffff1615610575576105758160200151608001517f0000000000000000000000000000000000000000000000000000000000000000835f015160c001516108db565b5f610583602084018461205e565b600281111561059457610594612031565b036105a7576105a281610907565b610635565b60016105b6602084018461205e565b60028111156105c7576105c7612031565b036105d5576105a2816109e3565b60026105e4602084018461205e565b60028111156105f5576105f5612031565b03610603576105a281610ade565b6040517f9c59c20c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18360405161066491906120c3565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831661069b576106968282610be3565b505050565b610696838383610c50565b5f838082036106e1576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f86866106ef600185611d67565b8181106106fe576106fe6121d6565b90506020028101906107109190612203565b610721906080810190606001611d7a565b90505f61072d82610cbe565b905073ffffffffffffffffffffffffffffffffffffffff8216610757576107543482611d67565b90505b5f6107628989610d07565b905061076e8989610e11565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526107a9818b8b85610e7d565b5f836107b486610cbe565b6107be9190611d67565b905073ffffffffffffffffffffffffffffffffffffffff85166107e8576107e58882611d67565b90505b8b811015610831576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661088c57637939f4245f526004601cfd5b5f60605260405250505050565b60808201515f9060e08301359073ffffffffffffffffffffffffffffffffffffffff166108d25760c08401516108cf908261223f565b90505b90505b92915050565b6106968383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61104b565b6040808201516020808401516060810151855160c08082015194840151848801519185015160a0909301516101009095015197517f2147796000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001698632147796098976109b297909593949392909190600401612252565b5f604051808303818588803b1580156109c9575f5ffd5b505af11580156109db573d5f5f3e3d5ffd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166352c41eb68260400151610a4a84602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610a5c57836020015160800151610a72565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b845f015160c00151856020015160a00151866020015160600151876020015160200151610abd895f015160a0015173ffffffffffffffffffffffffffffffffffffffff166014611178565b6040518863ffffffff1660e01b81526004016109b2969594939291906123e0565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663846a1bc68260400151610b4584602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610b5757836020015160800151610b6d565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b845160c08082015160208089015160a0808201516060830151938301516040808501519785015193909801516101009094015197517fffffffff0000000000000000000000000000000000000000000000000000000060e08d901b1681526109b29998969792969194929392919060040161245b565b73ffffffffffffffffffffffffffffffffffffffff8216610c30576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104c173ffffffffffffffffffffffffffffffffffffffff8316826113b5565b73ffffffffffffffffffffffffffffffffffffffff8216610c9d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61069673ffffffffffffffffffffffffffffffffffffffff841683836113ce565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d0057610cfb73ffffffffffffffffffffffffffffffffffffffff831630611417565b6108d5565b4792915050565b6060815f8167ffffffffffffffff811115610d2457610d2461195c565b604051908082528060200260200182016040528015610d4d578160200160208202803683370190505b5090505f5f5b83811015610e0657868682818110610d6d57610d6d6121d6565b9050602002810190610d7f9190612203565b610d90906080810190606001611d7a565b9150610d9b82610cbe565b838281518110610dad57610dad6121d6565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610dfe5734838281518110610de657610de66121d6565b60200260200101818151610dfa9190611d67565b9052505b600101610d53565b509095945050505050565b5f5b818110156106965736838383818110610e2e57610e2e6121d6565b9050602002810190610e409190612203565b9050610e5260e0820160c08301612514565b15610e7457610e74610e6a6060830160408401611d7a565b8260800135610433565b50600101610e13565b60208401516040850151849184918490835f5b8181101561103157368a8a83818110610eab57610eab6121d6565b9050602002810190610ebd9190612203565b9050610eec610ed26060830160408401611d7a565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610f4d5750610f4d610f056040830160208401611d7a565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f216020526040902054151590565b8015610f645750610f64610f056020830183611d7a565b8015610fe65750610fe6610f7b60a083018361252d565b610f89916004915f91612595565b610f92916125bc565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f226020526040902054151590565b61101c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b51611028908261144a565b50600101610e90565b505061104085858585856116bd565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156111725773ffffffffffffffffffffffffffffffffffffffff83166110b4576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611127573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061114b9190612622565b10156111725761117273ffffffffffffffffffffffffffffffffffffffff851684836118d4565b50505050565b60605f611186836002612639565b61119190600261223f565b67ffffffffffffffff8111156111a9576111a961195c565b6040519080825280601f01601f1916602001820160405280156111d3576020820181803683370190505b5090507f3000000000000000000000000000000000000000000000000000000000000000815f81518110611209576112096121d6565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061126b5761126b6121d6565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053505f6112a5846002612639565b6112b090600161223f565b90505b600181111561134c577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106112f1576112f16121d6565b1a60f81b828281518110611307576113076121d6565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a90535060049490941c9361134581612650565b90506112b3565b5083156108d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610828565b5f385f3884865af16104c15763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661140e576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61146261145a6020830183611d7a565b6017903b1190565b611498576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036114d7576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6114eb610ed26060850160408601611d7a565b6114f5575f6114fb565b82608001355b90505f6115166115116080860160608701611d7a565b610cbe565b9050815f0361154c5761154c6115326060860160408701611d7a565b6115426040870160208801611d7a565b86608001356108db565b5f8061155b6020870187611d7a565b73ffffffffffffffffffffffffffffffffffffffff168461157f60a089018961252d565b60405161158d929190612684565b5f6040518083038185875af1925050503d805f81146115c7576040519150601f19603f3d011682016040523d82523d5f602084013e6115cc565b606091505b5091509150816115df576115df81611952565b5f6115f36115116080890160608a01611d7a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861162460208a018a611d7a565b61163460608b0160408c01611d7a565b61164460808c0160608d01611d7a565b8b608001358987116116565786611660565b6116608a88611d67565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826116cc600182611d67565b8181106116db576116db6121d6565b90506020028101906116ed9190612203565b6116fe906080810190606001611d7a565b90505f5f5f5f5f5f5f5b888110156118c45761171b60018a611d67565b8110801561172a575088600114155b15611805578d8d82818110611741576117416121d6565b90506020028101906117539190612203565b611764906080810190606001611d7a565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611805578a81815181106117ab576117ab6121d6565b60200260200101516117bc87610cbe565b6117c69190611d67565b965073ffffffffffffffffffffffffffffffffffffffff8616156117ea575f6117ec565b895b93508387111561180557611805868d610235878b611d67565b8d8d82818110611817576118176121d6565b90506020028101906118299190612203565b61183a906060810190604001611d7a565b945061184585610cbe565b925073ffffffffffffffffffffffffffffffffffffffff851615611869575f61186b565b895b915081831180156118a857508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156118bc576118bc858d6102358587611d67565b600101611708565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661140e575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661140e57633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156119ad576119ad61195c565b60405290565b60405160a0810167ffffffffffffffff811182821017156119ad576119ad61195c565b604051610120810167ffffffffffffffff811182821017156119ad576119ad61195c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611a4157611a4161195c565b604052919050565b5f82601f830112611a58575f5ffd5b8135602083015f5f67ffffffffffffffff841115611a7857611a7861195c565b50601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016602001611aab816119fa565b915050828152858383011115611abf575f5ffd5b828260208301375f92810160200192909252509392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611afc575f5ffd5b919050565b80358015158114611afc575f5ffd5b5f6101408284031215611b21575f5ffd5b611b29611989565b823581529050602082013567ffffffffffffffff811115611b48575f5ffd5b611b5484828501611a49565b602083015250604082013567ffffffffffffffff811115611b73575f5ffd5b611b7f84828501611a49565b604083015250611b9160608301611ad9565b6060820152611ba260808301611ad9565b6080820152611bb360a08301611ad9565b60a082015260c0828101359082015260e08083013590820152611bd96101008301611b01565b610100820152611bec6101208301611b01565b61012082015292915050565b5f6101208284031215611c09575f5ffd5b50919050565b5f5f60408385031215611c20575f5ffd5b823567ffffffffffffffff811115611c36575f5ffd5b611c4285828601611b10565b925050602083013567ffffffffffffffff811115611c5e575f5ffd5b611c6a85828601611bf8565b9150509250929050565b5f5f5f5f60608587031215611c87575f5ffd5b843567ffffffffffffffff811115611c9d575f5ffd5b611ca987828801611b10565b945050602085013567ffffffffffffffff811115611cc5575f5ffd5b8501601f81018713611cd5575f5ffd5b803567ffffffffffffffff811115611ceb575f5ffd5b8760208260051b8401011115611cff575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611d22575f5ffd5b611d2e87828801611bf8565b91505092959194509250565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156108d5576108d5611d3a565b5f60208284031215611d8a575f5ffd5b611d9382611ad9565b9392505050565b803560038110611afc575f5ffd5b5f82601f830112611db7575f5ffd5b813567ffffffffffffffff811115611dd157611dd161195c565b8060051b611de1602082016119fa565b91825260208185018101929081019086841115611dfc575f5ffd5b6020860192505b83831015611ef857823567ffffffffffffffff811115611e21575f5ffd5b860160a08189037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0011215611e54575f5ffd5b611e5c6119b3565b602082013560048110611e6d575f5ffd5b8152611e7b60408301611ad9565b602082015260608201356040820152608082013567ffffffffffffffff811115611ea3575f5ffd5b611eb28a602083860101611a49565b60608301525060a082013567ffffffffffffffff811115611ed1575f5ffd5b611ee08a602083860101611a49565b60808301525083525060209283019290910190611e03565b9695505050505050565b5f6101208236031215611f13575f5ffd5b611f1b6119d6565b611f2483611d9a565b8152602083013567ffffffffffffffff811115611f3f575f5ffd5b611f4b36828601611a49565b602083015250604083013567ffffffffffffffff811115611f6a575f5ffd5b611f7636828601611a49565b604083015250606083013567ffffffffffffffff811115611f95575f5ffd5b611fa136828601611a49565b606083015250611fb360808401611ad9565b608082015260a083013567ffffffffffffffff811115611fd1575f5ffd5b611fdd36828601611da8565b60a08301525060c083013567ffffffffffffffff811115611ffc575f5ffd5b61200836828601611a49565b60c08301525060e083810135908201526120256101008401611b01565b61010082015292915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f6020828403121561206e575f5ffd5b611d9382611d9a565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526120ea610160840182612077565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526121258282612077565b915050606084015161214f608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516121be61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612235575f5ffd5b9190910192915050565b808201808211156108d5576108d5611d3a565b60e081525f61226460e083018a612077565b886020840152828103604084015261227c8189612077565b905082810360608401526122908188612077565b905082810360808401526122a48187612077565b73ffffffffffffffffffffffffffffffffffffffff9590951660a0840152505090151560c09091015295945050505050565b5f82825180855260208501945060208160051b830101602085015f5b838110156123d4577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403018852815180516004811061235a577f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b8085525073ffffffffffffffffffffffffffffffffffffffff602082015116602085015260408101516040850152606081015160a060608601526123a160a0860182612077565b90506080820151915084810360808601526123bc8183612077565b60209a8b019a909550939093019250506001016122f2565b50909695505050505050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015260c060408201525f61241460c08301876122d6565b82810360608401526124268187612077565b9050828103608084015261243a8186612077565b905082810360a084015261244e8185612077565b9998505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8a16815288602082015261012060408201525f61249161012083018a6122d6565b82810360608401526124a3818a612077565b905082810360808401526124b78189612077565b905082810360a08401526124cb8188612077565b905082810360c08401526124df8187612077565b73ffffffffffffffffffffffffffffffffffffffff9590951660e0840152505090151561010090910152979650505050505050565b5f60208284031215612524575f5ffd5b611d9382611b01565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612560575f5ffd5b83018035915067ffffffffffffffff82111561257a575f5ffd5b60200191503681900382131561258e575f5ffd5b9250929050565b5f5f858511156125a3575f5ffd5b838611156125af575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561261b577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612632575f5ffd5b5051919050565b80820281158282048414176108d5576108d5611d3a565b5f8161265e5761265e611d3a565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b818382375f910190815291905056fea2646970667358221220acdc78e2099866849dd8ea797b3faac62d6c2d6b34725aaf0b73601a30cac75464736f6c634300081d0033";
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
