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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161276538038061276583398101604081905261002e9161003f565b6001600160a01b031660805261006c565b5f6020828403121561004f575f5ffd5b81516001600160a01b0381168114610065575f5ffd5b9392505050565b6080516126cc6100995f395f818161054901528181610975015281816109e50152610ae001526126cc5ff3fe608060405260043610610028575f3560e01c80633f3138081461002c578063a8f6666614610041575b5f5ffd5b61003f61003a366004611c12565b610054565b005b61003f61004f366004611c77565b610245565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611d6a565b9050848061010001511561011f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101428160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610179576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101b6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f3576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61021061020660a0880160808901611d7d565b8860c00151610433565b61021a87876104e7565b504790508181111561023a5761023a5f846102358585611d6a565b610671565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102c0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6102d03447611d6a565b90508680610100015161030f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103328160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610369576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036103a6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103e3576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103fc895f01518a60c001518a8a338b60e001356106a6565b60c08a015261040b89876104e7565b5047905081811115610426576104265f846102358585611d6a565b50505f9091555050505050565b805f0361046c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166104c557803410156104c1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6104c173ffffffffffffffffffffffffffffffffffffffff8316333084610841565b5f60405180606001604052808481526020018361050390611f05565b81526020016105128585610899565b905260208101516080015190915073ffffffffffffffffffffffffffffffffffffffff1615610575576105758160200151608001517f0000000000000000000000000000000000000000000000000000000000000000835f015160c001516108db565b5f6105836020840184612061565b600281111561059457610594612034565b036105a7576105a281610907565b610635565b60016105b66020840184612061565b60028111156105c7576105c7612034565b036105d5576105a2816109e3565b60026105e46020840184612061565b60028111156105f5576105f5612034565b03610603576105a281610ade565b6040517f9c59c20c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18360405161066491906120c6565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831661069b576106968282610be3565b505050565b610696838383610c50565b5f838082036106e1576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f86866106ef600185611d6a565b8181106106fe576106fe6121d9565b90506020028101906107109190612206565b610721906080810190606001611d7d565b90505f61072d82610cbe565b905073ffffffffffffffffffffffffffffffffffffffff8216610757576107543482611d6a565b90505b5f6107628989610d07565b905061076e8989610e11565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526107a9818b8b85610e7d565b5f836107b486610cbe565b6107be9190611d6a565b905073ffffffffffffffffffffffffffffffffffffffff85166107e8576107e58882611d6a565b90505b8b811015610831576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661088c57637939f4245f526004601cfd5b5f60605260405250505050565b60808201515f9060e08301359073ffffffffffffffffffffffffffffffffffffffff166108d25760c08401516108cf9082612242565b90505b90505b92915050565b6106968383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611265565b6040808201516020808401516060810151855160c08082015194840151848801519185015160a0909301516101009095015197517f2147796000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001698632147796098976109b297909593949392909190600401612255565b5f604051808303818588803b1580156109c9575f5ffd5b505af11580156109db573d5f5f3e3d5ffd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166352c41eb68260400151610a4a84602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610a5c57836020015160800151610a72565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b845f015160c00151856020015160a00151866020015160600151876020015160200151610abd895f015160a0015173ffffffffffffffffffffffffffffffffffffffff166014611392565b6040518863ffffffff1660e01b81526004016109b2969594939291906123e3565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663846a1bc68260400151610b4584602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610b5757836020015160800151610b6d565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b845160c08082015160208089015160a0808201516060830151938301516040808501519785015193909801516101009094015197517fffffffff0000000000000000000000000000000000000000000000000000000060e08d901b1681526109b29998969792969194929392919060040161245e565b73ffffffffffffffffffffffffffffffffffffffff8216610c30576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104c173ffffffffffffffffffffffffffffffffffffffff8316826115cf565b73ffffffffffffffffffffffffffffffffffffffff8216610c9d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61069673ffffffffffffffffffffffffffffffffffffffff841683836115e8565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d0057610cfb73ffffffffffffffffffffffffffffffffffffffff831630611631565b6108d5565b4792915050565b6060815f8167ffffffffffffffff811115610d2457610d2461195f565b604051908082528060200260200182016040528015610d4d578160200160208202803683370190505b5090505f805b83811015610e0657868682818110610d6d57610d6d6121d9565b9050602002810190610d7f9190612206565b610d90906080810190606001611d7d565b9150610d9b82610cbe565b838281518110610dad57610dad6121d9565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610dfe5734838281518110610de657610de66121d9565b60200260200101818151610dfa9190611d6a565b9052505b600101610d53565b509095945050505050565b5f5b818110156106965736838383818110610e2e57610e2e6121d9565b9050602002810190610e409190612206565b9050610e5260e0820160c08301612517565b15610e7457610e74610e6a6060830160408401611d7d565b8260800135610433565b50600101610e13565b60208401516040850151849184918490836001811461117f575f8686610ea4600185611d6a565b818110610eb357610eb36121d9565b9050602002810190610ec59190612206565b610ed6906080810190606001611d7d565b90505f89815b8181101561107f57368d8d83818110610ef757610ef76121d9565b9050602002810190610f099190612206565b9050610f38610f1e6060830160408401611d7d565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610f9a5750610f9a610f516040830160208401611d7d565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610fb15750610fb1610f516020830183611d7d565b80156110345750611034610fc860a0830183612530565b610fd6916004915f91612598565b610fdf916125bf565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61106a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516110769082611664565b50600101610edc565b505f90505b61108f600185611d6a565b811015611177575f8989838181106110a9576110a96121d9565b90506020028101906110bb9190612206565b6110cc906080810190606001611d7d565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461116e57868281518110611113576111136121d9565b602002602001015161112482610cbe565b61112e9190611d6a565b92505f73ffffffffffffffffffffffffffffffffffffffff821615611153575f611155565b865b9050831561116c5761116c828a6102358488611d6a565b505b50600101611084565b505050611259565b875f5b8181101561125657368b8b8381811061119d5761119d6121d9565b90506020028101906111af9190612206565b90506111c4610f1e6060830160408401611d7d565b806111dd57506111dd610f516040830160208401611d7d565b80156111f457506111f4610f516020830183611d7d565b801561120b575061120b610fc860a0830183612530565b611241576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161124d9082611664565b50600101611182565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84161561138c5773ffffffffffffffffffffffffffffffffffffffff83166112ce576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611341573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113659190612625565b101561138c5761138c73ffffffffffffffffffffffffffffffffffffffff851684836118d7565b50505050565b60605f6113a083600261263c565b6113ab906002612242565b67ffffffffffffffff8111156113c3576113c361195f565b6040519080825280601f01601f1916602001820160405280156113ed576020820181803683370190505b5090507f3000000000000000000000000000000000000000000000000000000000000000815f81518110611423576114236121d9565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611485576114856121d9565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053505f6114bf84600261263c565b6114ca906001612242565b90505b6001811115611566577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061150b5761150b6121d9565b1a60f81b828281518110611521576115216121d9565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a90535060049490941c9361155f81612653565b90506114cd565b5083156108d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610828565b5f385f3884865af16104c15763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611628576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61167c6116746020830183611d7d565b6017903b1190565b6116b2576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036116f1576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611705610f1e6060850160408601611d7d565b61170f575f611715565b82608001355b90505f61173061172b6080860160608701611d7d565b610cbe565b9050815f036117665761176661174c6060860160408701611d7d565b61175c6040870160208801611d7d565b86608001356108db565b5f806117756020870187611d7d565b73ffffffffffffffffffffffffffffffffffffffff168461179960a0890189612530565b6040516117a7929190612687565b5f6040518083038185875af1925050503d805f81146117e1576040519150601f19603f3d011682016040523d82523d5f602084013e6117e6565b606091505b5091509150816117f9576117f981611955565b5f61180d61172b6080890160608a01611d7d565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861183e60208a018a611d7d565b61184e60608b0160408c01611d7d565b61185e60808c0160608d01611d7d565b8b60800135898711611870578661187a565b61187a8a88611d6a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611628575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661162857633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156119b0576119b061195f565b60405290565b60405160a0810167ffffffffffffffff811182821017156119b0576119b061195f565b604051610120810167ffffffffffffffff811182821017156119b0576119b061195f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611a4457611a4461195f565b604052919050565b5f82601f830112611a5b575f5ffd5b8135602083015f5f67ffffffffffffffff841115611a7b57611a7b61195f565b50601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016602001611aae816119fd565b915050828152858383011115611ac2575f5ffd5b828260208301375f92810160200192909252509392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611aff575f5ffd5b919050565b80358015158114611aff575f5ffd5b5f6101408284031215611b24575f5ffd5b611b2c61198c565b823581529050602082013567ffffffffffffffff811115611b4b575f5ffd5b611b5784828501611a4c565b602083015250604082013567ffffffffffffffff811115611b76575f5ffd5b611b8284828501611a4c565b604083015250611b9460608301611adc565b6060820152611ba560808301611adc565b6080820152611bb660a08301611adc565b60a082015260c0828101359082015260e08083013590820152611bdc6101008301611b04565b610100820152611bef6101208301611b04565b61012082015292915050565b5f6101208284031215611c0c575f5ffd5b50919050565b5f5f60408385031215611c23575f5ffd5b823567ffffffffffffffff811115611c39575f5ffd5b611c4585828601611b13565b925050602083013567ffffffffffffffff811115611c61575f5ffd5b611c6d85828601611bfb565b9150509250929050565b5f5f5f5f60608587031215611c8a575f5ffd5b843567ffffffffffffffff811115611ca0575f5ffd5b611cac87828801611b13565b945050602085013567ffffffffffffffff811115611cc8575f5ffd5b8501601f81018713611cd8575f5ffd5b803567ffffffffffffffff811115611cee575f5ffd5b8760208260051b8401011115611d02575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611d25575f5ffd5b611d3187828801611bfb565b91505092959194509250565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156108d5576108d5611d3d565b5f60208284031215611d8d575f5ffd5b611d9682611adc565b9392505050565b803560038110611aff575f5ffd5b5f82601f830112611dba575f5ffd5b813567ffffffffffffffff811115611dd457611dd461195f565b8060051b611de4602082016119fd565b91825260208185018101929081019086841115611dff575f5ffd5b6020860192505b83831015611efb57823567ffffffffffffffff811115611e24575f5ffd5b860160a08189037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0011215611e57575f5ffd5b611e5f6119b6565b602082013560048110611e70575f5ffd5b8152611e7e60408301611adc565b602082015260608201356040820152608082013567ffffffffffffffff811115611ea6575f5ffd5b611eb58a602083860101611a4c565b60608301525060a082013567ffffffffffffffff811115611ed4575f5ffd5b611ee38a602083860101611a4c565b60808301525083525060209283019290910190611e06565b9695505050505050565b5f6101208236031215611f16575f5ffd5b611f1e6119d9565b611f2783611d9d565b8152602083013567ffffffffffffffff811115611f42575f5ffd5b611f4e36828601611a4c565b602083015250604083013567ffffffffffffffff811115611f6d575f5ffd5b611f7936828601611a4c565b604083015250606083013567ffffffffffffffff811115611f98575f5ffd5b611fa436828601611a4c565b606083015250611fb660808401611adc565b608082015260a083013567ffffffffffffffff811115611fd4575f5ffd5b611fe036828601611dab565b60a08301525060c083013567ffffffffffffffff811115611fff575f5ffd5b61200b36828601611a4c565b60c08301525060e083810135908201526120286101008401611b04565b61010082015292915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f60208284031215612071575f5ffd5b611d9682611d9d565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526120ed61016084018261207a565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152612128828261207a565b9150506060840151612152608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516121c161012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612238575f5ffd5b9190910192915050565b808201808211156108d5576108d5611d3d565b60e081525f61226760e083018a61207a565b886020840152828103604084015261227f818961207a565b90508281036060840152612293818861207a565b905082810360808401526122a7818761207a565b73ffffffffffffffffffffffffffffffffffffffff9590951660a0840152505090151560c09091015295945050505050565b5f82825180855260208501945060208160051b830101602085015f5b838110156123d7577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403018852815180516004811061235d577f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b8085525073ffffffffffffffffffffffffffffffffffffffff602082015116602085015260408101516040850152606081015160a060608601526123a460a086018261207a565b90506080820151915084810360808601526123bf818361207a565b60209a8b019a909550939093019250506001016122f5565b50909695505050505050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015260c060408201525f61241760c08301876122d9565b8281036060840152612429818761207a565b9050828103608084015261243d818661207a565b905082810360a0840152612451818561207a565b9998505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8a16815288602082015261012060408201525f61249461012083018a6122d9565b82810360608401526124a6818a61207a565b905082810360808401526124ba818961207a565b905082810360a08401526124ce818861207a565b905082810360c08401526124e2818761207a565b73ffffffffffffffffffffffffffffffffffffffff9590951660e0840152505090151561010090910152979650505050505050565b5f60208284031215612527575f5ffd5b611d9682611b04565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612563575f5ffd5b83018035915067ffffffffffffffff82111561257d575f5ffd5b602001915036819003821315612591575f5ffd5b9250929050565b5f5f858511156125a6575f5ffd5b838611156125b2575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561261e577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612635575f5ffd5b5051919050565b80820281158282048414176108d5576108d5611d3d565b5f8161266157612661611d3d565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b818382375f910190815291905056fea26469706673582212204b797132f4125a9e108ca10c1b735835476196167b577482bedbe745895207a264736f6c634300081d0033";
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
