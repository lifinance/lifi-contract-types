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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200280d3803806200280d833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612764620000a9600039600081816105560152818161098f01528181610a030152610b0001526127646000f3fe6080604052600436106100295760003560e01c80633f3138081461002e578063a8f6666614610043575b600080fd5b61004161003c366004611cfc565b610056565b005b610041610051366004611d60565b61024b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447611e4e565b90508480610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101458160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101ba576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f7576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61021461020a60a0880160808901611e61565b8860c0015161043e565b61021e87876104f3565b504790508181111561023f5761023f60008461023a8585611e4e565b610680565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102c6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006102d73447611e4e565b905086806101000151610316576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103398160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610370576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103ae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103eb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61040589600001518a60c001518a8a338b60e001356106b5565b60c08a015261041489876104f3565b50479050818111156104305761043060008461023a8585611e4e565b505060009091555050505050565b80600003610478576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166104d157803410156104cd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6104cd73ffffffffffffffffffffffffffffffffffffffff8316333084610855565b600060405180606001604052808481526020018361051090611fe1565b815260200161051f85856108b2565b905260208101516080015190915073ffffffffffffffffffffffffffffffffffffffff1615610583576105838160200151608001517f0000000000000000000000000000000000000000000000000000000000000000836000015160c001516108f5565b60006105926020840184612121565b60028111156105a3576105a36120f2565b036105b6576105b181610921565b610644565b60016105c56020840184612121565b60028111156105d6576105d66120f2565b036105e4576105b181610a01565b60026105f36020840184612121565b6002811115610604576106046120f2565b03610612576105b181610afe565b6040517f9c59c20c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18360405161067391906121a0565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff83166106aa576106a58282610c03565b505050565b6106a5838383610c70565b6000838082036106f1576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610700600185611e4e565b81811061070f5761070f6122b3565b905060200281019061072191906122e2565b610732906080810190606001611e61565b9050600061073f82610cde565b905073ffffffffffffffffffffffffffffffffffffffff8216610769576107663482611e4e565b90505b60006107758989610d28565b90506107818989610e34565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526107bc818b8b85610ea1565b6000836107c886610cde565b6107d29190611e4e565b905073ffffffffffffffffffffffffffffffffffffffff85166107fc576107f98882611e4e565b90505b8b811015610845576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166108a457637939f4246000526004601cfd5b600060605260405250505050565b608082015160009060e08301359073ffffffffffffffffffffffffffffffffffffffff166108ec5760c08401516108e99082612320565b90505b90505b92915050565b6106a58383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611292565b6040808201516020808401516060810151855160c08082015194840151848801519185015160a0909301516101009095015197517f2147796000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001698632147796098976109cc97909593949392909190600401612333565b6000604051808303818588803b1580156109e557600080fd5b505af11580156109f9573d6000803e3d6000fd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166352c41eb68260400151610a6884602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610a7a57836020015160800151610a90565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b846000015160c00151856020015160a00151866020015160600151876020015160200151610add896000015160a0015173ffffffffffffffffffffffffffffffffffffffff1660146113c1565b6040518863ffffffff1660e01b81526004016109cc9695949392919061249f565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663846a1bc68260400151610b6584602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610b7757836020015160800151610b8d565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b845160c08082015160208089015160a0808201516060830151938301516040808501519785015193909801516101009094015197517fffffffff0000000000000000000000000000000000000000000000000000000060e08d901b1681526109cc9998969792969194929392919060040161251b565b73ffffffffffffffffffffffffffffffffffffffff8216610c50576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104cd73ffffffffffffffffffffffffffffffffffffffff831682611604565b73ffffffffffffffffffffffffffffffffffffffff8216610cbd576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106a573ffffffffffffffffffffffffffffffffffffffff84168383611620565b600073ffffffffffffffffffffffffffffffffffffffff821615610d2157610d1c73ffffffffffffffffffffffffffffffffffffffff83163061166f565b6108ef565b4792915050565b60608160008167ffffffffffffffff811115610d4657610d46611a48565b604051908082528060200260200182016040528015610d6f578160200160208202803683370190505b5090506000805b83811015610e2957868682818110610d9057610d906122b3565b9050602002810190610da291906122e2565b610db3906080810190606001611e61565b9150610dbe82610cde565b838281518110610dd057610dd06122b3565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e215734838281518110610e0957610e096122b3565b60200260200101818151610e1d9190611e4e565b9052505b600101610d76565b509095945050505050565b60005b818110156106a55736838383818110610e5257610e526122b3565b9050602002810190610e6491906122e2565b9050610e7660e0820160c083016125c0565b15610e9857610e98610e8e6060830160408401611e61565b826080013561043e565b50600101610e37565b6020840151604085015184918491849083600181146111ab5760008686610ec9600185611e4e565b818110610ed857610ed86122b3565b9050602002810190610eea91906122e2565b610efb906080810190606001611e61565b9050600089815b818110156110a857368d8d83818110610f1d57610f1d6122b3565b9050602002810190610f2f91906122e2565b9050610f5e610f446060830160408401611e61565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610fc15750610fc1610f776040830160208401611e61565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610fd85750610fd8610f776020830183611e61565b801561105d575061105d610fef60a08301836125db565b610ffe91600491600091612647565b61100791612671565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611093576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e5161109f90826116a4565b50600101610f02565b505060005b6110b8600185611e4e565b8110156111a35760008989838181106110d3576110d36122b3565b90506020028101906110e591906122e2565b6110f6906080810190606001611e61565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461119a5786828151811061113d5761113d6122b3565b602002602001015161114e82610cde565b6111589190611e4e565b9250600073ffffffffffffffffffffffffffffffffffffffff82161561117f576000611181565b865b9050831561119857611198828a61023a8488611e4e565b505b506001016110ad565b505050611286565b8760005b8181101561128357368b8b838181106111ca576111ca6122b3565b90506020028101906111dc91906122e2565b90506111f1610f446060830160408401611e61565b8061120a575061120a610f776040830160208401611e61565b80156112215750611221610f776020830183611e61565b80156112385750611238610fef60a08301836125db565b61126e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161127a90826116a4565b506001016111af565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156113bb5773ffffffffffffffffffffffffffffffffffffffff83166112fb576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611370573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061139491906126b9565b10156113bb576113bb73ffffffffffffffffffffffffffffffffffffffff8516848361191e565b50505050565b606060006113d08360026126d2565b6113db906002612320565b67ffffffffffffffff8111156113f3576113f3611a48565b6040519080825280601f01601f19166020018201604052801561141d576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611454576114546122b3565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106114b7576114b76122b3565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006114f38460026126d2565b6114fe906001612320565b90505b600181111561159b577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061153f5761153f6122b3565b1a60f81b828281518110611555576115556122b3565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611594816126e9565b9050611501565b5083156108ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161083c565b60003860003884865af16104cd5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611665576390b8ec186000526004601cfd5b6000603452505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6116b96116b46020830183611e61565b6119a8565b6116ef576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361172f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611744610f446060850160408601611e61565b61174f576000611755565b82608001355b9050600061177161176c6080860160608701611e61565b610cde565b9050816000036117a8576117a861178e6060860160408701611e61565b61179e6040870160208801611e61565b86608001356108f5565b6000806117b86020870187611e61565b73ffffffffffffffffffffffffffffffffffffffff16846117dc60a08901896125db565b6040516117ea92919061271e565b60006040518083038185875af1925050503d8060008114611827576040519150601f19603f3d011682016040523d82523d6000602084013e61182c565b606091505b50915091508161183f5761183f81611a3e565b600061185461176c6080890160608a01611e61565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861188560208a018a611e61565b61189560608b0160408c01611e61565b6118a560808c0160608d01611e61565b8b608001358987116118b757866118c1565b6118c18a88611e4e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166116655760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661166557633e3f8f736000526004601cfd5b6040805160178082528183019092526000918291906020820181803683370190505090506017600060208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000821601611a3557506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611a9b57611a9b611a48565b60405290565b60405160a0810167ffffffffffffffff81118282101715611a9b57611a9b611a48565b604051610120810167ffffffffffffffff81118282101715611a9b57611a9b611a48565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611b2f57611b2f611a48565b604052919050565b600082601f830112611b4857600080fd5b813567ffffffffffffffff811115611b6257611b62611a48565b611b9360207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611ae8565b818152846020838601011115611ba857600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611be957600080fd5b919050565b80358015158114611be957600080fd5b60006101408284031215611c1157600080fd5b611c19611a77565b905081358152602082013567ffffffffffffffff80821115611c3a57600080fd5b611c4685838601611b37565b60208401526040840135915080821115611c5f57600080fd5b50611c6c84828501611b37565b604083015250611c7e60608301611bc5565b6060820152611c8f60808301611bc5565b6080820152611ca060a08301611bc5565b60a082015260c082013560c082015260e082013560e0820152610100611cc7818401611bee565b90820152610120611cd9838201611bee565b9082015292915050565b60006101208284031215611cf657600080fd5b50919050565b60008060408385031215611d0f57600080fd5b823567ffffffffffffffff80821115611d2757600080fd5b611d3386838701611bfe565b93506020850135915080821115611d4957600080fd5b50611d5685828601611ce3565b9150509250929050565b60008060008060608587031215611d7657600080fd5b843567ffffffffffffffff80821115611d8e57600080fd5b611d9a88838901611bfe565b95506020870135915080821115611db057600080fd5b818701915087601f830112611dc457600080fd5b813581811115611dd357600080fd5b8860208260051b8501011115611de857600080fd5b602083019550809450506040870135915080821115611e0657600080fd5b50611e1387828801611ce3565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156108ef576108ef611e1f565b600060208284031215611e7357600080fd5b611e7c82611bc5565b9392505050565b803560038110611be957600080fd5b600082601f830112611ea357600080fd5b8135602067ffffffffffffffff80831115611ec057611ec0611a48565b8260051b611ecf838201611ae8565b9384528581018301938381019088861115611ee957600080fd5b84880192505b85831015611fd557823584811115611f075760008081fd5b880160a0818b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001811315611f3d5760008081fd5b611f45611aa1565b8783013560048110611f575760008081fd5b81526040611f66848201611bc5565b8983015260608085013582840152608091508185013589811115611f8a5760008081fd5b611f988f8c83890101611b37565b82850152505082840135925087831115611fb25760008081fd5b611fc08d8a85870101611b37565b90820152845250509184019190840190611eef565b98975050505050505050565b60006101208236031215611ff457600080fd5b611ffc611ac4565b61200583611e83565b8152602083013567ffffffffffffffff8082111561202257600080fd5b61202e36838701611b37565b6020840152604085013591508082111561204757600080fd5b61205336838701611b37565b6040840152606085013591508082111561206c57600080fd5b61207836838701611b37565b606084015261208960808601611bc5565b608084015260a08501359150808211156120a257600080fd5b6120ae36838701611e92565b60a084015260c08501359150808211156120c757600080fd5b506120d436828601611b37565b60c08301525060e083013560e0820152610100611cd9818501611bee565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60006020828403121561213357600080fd5b611e7c82611e83565b6000815180845260005b8181101561216257602081850181015186830182015201612146565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6020815281516020820152600060208301516101408060408501526121c961016085018361213c565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612204838261213c565b925050606085015161222e608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206122a18187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261231657600080fd5b9190910192915050565b808201808211156108ef576108ef611e1f565b60e08152600061234660e083018a61213c565b886020840152828103604084015261235e818961213c565b90508281036060840152612372818861213c565b90508281036080840152612386818761213c565b73ffffffffffffffffffffffffffffffffffffffff9590951660a0840152505090151560c09091015295945050505050565b6000815180845260208085019450848260051b86018286016000805b86811015612491578484038a52825160a08151600480821061241c577f4e487b7100000000000000000000000000000000000000000000000000000000865260218152602486fd5b5086528188015173ffffffffffffffffffffffffffffffffffffffff16888701526040808301519087015260608083015181880183905261245f8389018261213c565b925050506080808301519250868203818801525061247d818361213c565b9b88019b95505050918501916001016123d4565b509198975050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015260c0604082015260006124d460c08301876123b8565b82810360608401526124e6818761213c565b905082810360808401526124fa818661213c565b905082810360a084015261250e818561213c565b9998505050505050505050565b600061012073ffffffffffffffffffffffffffffffffffffffff808d1684528b60208501528160408501526125528285018c6123b8565b91508382036060850152612566828b61213c565b9150838203608085015261257a828a61213c565b915083820360a085015261258e828961213c565b915083820360c08501526125a2828861213c565b951660e0840152505090151561010090910152979650505050505050565b6000602082840312156125d257600080fd5b611e7c82611bee565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261261057600080fd5b83018035915067ffffffffffffffff82111561262b57600080fd5b60200191503681900382131561264057600080fd5b9250929050565b6000808585111561265757600080fd5b8386111561266457600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126b15780818660040360031b1b83161692505b505092915050565b6000602082840312156126cb57600080fd5b5051919050565b80820281158282048414176108ef576108ef611e1f565b6000816126f8576126f8611e1f565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b818382376000910190815291905056fea26469706673582212202fa12b0c03177c81679141f5517ca0850d896460c462cc0a5b1d229941c0901164736f6c63430008110033";
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
