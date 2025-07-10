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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200277a3803806200277a833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516126d1620000a9600039600081816105560152818161098f01528181610a030152610b0001526126d16000f3fe6080604052600436106100295760003560e01c80633f3138081461002e578063a8f6666614610043575b600080fd5b61004161003c366004611c69565b610056565b005b610041610051366004611ccd565b61024b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447611dbb565b90508480610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101458160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101ba576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f7576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61021461020a60a0880160808901611dce565b8860c0015161043e565b61021e87876104f3565b504790508181111561023f5761023f60008461023a8585611dbb565b610680565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102c6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006102d73447611dbb565b905086806101000151610316576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103398160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610370576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103ae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103eb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61040589600001518a60c001518a8a338b60e001356106b5565b60c08a015261041489876104f3565b50479050818111156104305761043060008461023a8585611dbb565b505060009091555050505050565b80600003610478576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166104d157803410156104cd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6104cd73ffffffffffffffffffffffffffffffffffffffff8316333084610855565b600060405180606001604052808481526020018361051090611f4e565b815260200161051f85856108b2565b905260208101516080015190915073ffffffffffffffffffffffffffffffffffffffff1615610583576105838160200151608001517f0000000000000000000000000000000000000000000000000000000000000000836000015160c001516108f5565b6000610592602084018461208e565b60028111156105a3576105a361205f565b036105b6576105b181610921565b610644565b60016105c5602084018461208e565b60028111156105d6576105d661205f565b036105e4576105b181610a01565b60026105f3602084018461208e565b60028111156106045761060461205f565b03610612576105b181610afe565b6040517f9c59c20c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610673919061210d565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff83166106aa576106a58282610c03565b505050565b6106a5838383610c70565b6000838082036106f1576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610700600185611dbb565b81811061070f5761070f612220565b9050602002810190610721919061224f565b610732906080810190606001611dce565b9050600061073f82610cde565b905073ffffffffffffffffffffffffffffffffffffffff8216610769576107663482611dbb565b90505b60006107758989610d28565b90506107818989610e34565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526107bc818b8b85610ea1565b6000836107c886610cde565b6107d29190611dbb565b905073ffffffffffffffffffffffffffffffffffffffff85166107fc576107f98882611dbb565b90505b8b811015610845576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166108a457637939f4246000526004601cfd5b600060605260405250505050565b608082015160009060e08301359073ffffffffffffffffffffffffffffffffffffffff166108ec5760c08401516108e9908261228d565b90505b90505b92915050565b6106a58383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611292565b6040808201516020808401516060810151855160c08082015194840151848801519185015160a0909301516101009095015197517f2147796000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001698632147796098976109cc979095939493929091906004016122a0565b6000604051808303818588803b1580156109e557600080fd5b505af11580156109f9573d6000803e3d6000fd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166352c41eb68260400151610a6884602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610a7a57836020015160800151610a90565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b846000015160c00151856020015160a00151866020015160600151876020015160200151610add896000015160a0015173ffffffffffffffffffffffffffffffffffffffff1660146113c1565b6040518863ffffffff1660e01b81526004016109cc9695949392919061240c565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663846a1bc68260400151610b6584602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610b7757836020015160800151610b8d565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b845160c08082015160208089015160a0808201516060830151938301516040808501519785015193909801516101009094015197517fffffffff0000000000000000000000000000000000000000000000000000000060e08d901b1681526109cc99989697929691949293929190600401612488565b73ffffffffffffffffffffffffffffffffffffffff8216610c50576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104cd73ffffffffffffffffffffffffffffffffffffffff831682611604565b73ffffffffffffffffffffffffffffffffffffffff8216610cbd576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106a573ffffffffffffffffffffffffffffffffffffffff84168383611620565b600073ffffffffffffffffffffffffffffffffffffffff821615610d2157610d1c73ffffffffffffffffffffffffffffffffffffffff83163061166f565b6108ef565b4792915050565b60608160008167ffffffffffffffff811115610d4657610d466119b5565b604051908082528060200260200182016040528015610d6f578160200160208202803683370190505b5090506000805b83811015610e2957868682818110610d9057610d90612220565b9050602002810190610da2919061224f565b610db3906080810190606001611dce565b9150610dbe82610cde565b838281518110610dd057610dd0612220565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e215734838281518110610e0957610e09612220565b60200260200101818151610e1d9190611dbb565b9052505b600101610d76565b509095945050505050565b60005b818110156106a55736838383818110610e5257610e52612220565b9050602002810190610e64919061224f565b9050610e7660e0820160c0830161252d565b15610e9857610e98610e8e6060830160408401611dce565b826080013561043e565b50600101610e37565b6020840151604085015184918491849083600181146111ab5760008686610ec9600185611dbb565b818110610ed857610ed8612220565b9050602002810190610eea919061224f565b610efb906080810190606001611dce565b9050600089815b818110156110a857368d8d83818110610f1d57610f1d612220565b9050602002810190610f2f919061224f565b9050610f5e610f446060830160408401611dce565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610fc15750610fc1610f776040830160208401611dce565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610fd85750610fd8610f776020830183611dce565b801561105d575061105d610fef60a0830183612548565b610ffe916004916000916125b4565b611007916125de565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611093576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e5161109f90826116a4565b50600101610f02565b505060005b6110b8600185611dbb565b8110156111a35760008989838181106110d3576110d3612220565b90506020028101906110e5919061224f565b6110f6906080810190606001611dce565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461119a5786828151811061113d5761113d612220565b602002602001015161114e82610cde565b6111589190611dbb565b9250600073ffffffffffffffffffffffffffffffffffffffff82161561117f576000611181565b865b9050831561119857611198828a61023a8488611dbb565b505b506001016110ad565b505050611286565b8760005b8181101561128357368b8b838181106111ca576111ca612220565b90506020028101906111dc919061224f565b90506111f1610f446060830160408401611dce565b8061120a575061120a610f776040830160208401611dce565b80156112215750611221610f776020830183611dce565b80156112385750611238610fef60a0830183612548565b61126e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161127a90826116a4565b506001016111af565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156113bb5773ffffffffffffffffffffffffffffffffffffffff83166112fb576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611370573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113949190612626565b10156113bb576113bb73ffffffffffffffffffffffffffffffffffffffff85168483611921565b50505050565b606060006113d083600261263f565b6113db90600261228d565b67ffffffffffffffff8111156113f3576113f36119b5565b6040519080825280601f01601f19166020018201604052801561141d576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061145457611454612220565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106114b7576114b7612220565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006114f384600261263f565b6114fe90600161228d565b90505b600181111561159b577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061153f5761153f612220565b1a60f81b82828151811061155557611555612220565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c9361159481612656565b9050611501565b5083156108ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161083c565b60003860003884865af16104cd5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611665576390b8ec186000526004601cfd5b6000603452505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6116bc6116b46020830183611dce565b6017903b1190565b6116f2576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611732576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611747610f446060850160408601611dce565b611752576000611758565b82608001355b9050600061177461176f6080860160608701611dce565b610cde565b9050816000036117ab576117ab6117916060860160408701611dce565b6117a16040870160208801611dce565b86608001356108f5565b6000806117bb6020870187611dce565b73ffffffffffffffffffffffffffffffffffffffff16846117df60a0890189612548565b6040516117ed92919061268b565b60006040518083038185875af1925050503d806000811461182a576040519150601f19603f3d011682016040523d82523d6000602084013e61182f565b606091505b50915091508161184257611842816119ab565b600061185761176f6080890160608a01611dce565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861188860208a018a611dce565b61189860608b0160408c01611dce565b6118a860808c0160608d01611dce565b8b608001358987116118ba57866118c4565b6118c48a88611dbb565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166116655760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661166557633e3f8f736000526004601cfd5b8051602082018181fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611a0857611a086119b5565b60405290565b60405160a0810167ffffffffffffffff81118282101715611a0857611a086119b5565b604051610120810167ffffffffffffffff81118282101715611a0857611a086119b5565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611a9c57611a9c6119b5565b604052919050565b600082601f830112611ab557600080fd5b813567ffffffffffffffff811115611acf57611acf6119b5565b611b0060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611a55565b818152846020838601011115611b1557600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611b5657600080fd5b919050565b80358015158114611b5657600080fd5b60006101408284031215611b7e57600080fd5b611b866119e4565b905081358152602082013567ffffffffffffffff80821115611ba757600080fd5b611bb385838601611aa4565b60208401526040840135915080821115611bcc57600080fd5b50611bd984828501611aa4565b604083015250611beb60608301611b32565b6060820152611bfc60808301611b32565b6080820152611c0d60a08301611b32565b60a082015260c082013560c082015260e082013560e0820152610100611c34818401611b5b565b90820152610120611c46838201611b5b565b9082015292915050565b60006101208284031215611c6357600080fd5b50919050565b60008060408385031215611c7c57600080fd5b823567ffffffffffffffff80821115611c9457600080fd5b611ca086838701611b6b565b93506020850135915080821115611cb657600080fd5b50611cc385828601611c50565b9150509250929050565b60008060008060608587031215611ce357600080fd5b843567ffffffffffffffff80821115611cfb57600080fd5b611d0788838901611b6b565b95506020870135915080821115611d1d57600080fd5b818701915087601f830112611d3157600080fd5b813581811115611d4057600080fd5b8860208260051b8501011115611d5557600080fd5b602083019550809450506040870135915080821115611d7357600080fd5b50611d8087828801611c50565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156108ef576108ef611d8c565b600060208284031215611de057600080fd5b611de982611b32565b9392505050565b803560038110611b5657600080fd5b600082601f830112611e1057600080fd5b8135602067ffffffffffffffff80831115611e2d57611e2d6119b5565b8260051b611e3c838201611a55565b9384528581018301938381019088861115611e5657600080fd5b84880192505b85831015611f4257823584811115611e745760008081fd5b880160a0818b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001811315611eaa5760008081fd5b611eb2611a0e565b8783013560048110611ec45760008081fd5b81526040611ed3848201611b32565b8983015260608085013582840152608091508185013589811115611ef75760008081fd5b611f058f8c83890101611aa4565b82850152505082840135925087831115611f1f5760008081fd5b611f2d8d8a85870101611aa4565b90820152845250509184019190840190611e5c565b98975050505050505050565b60006101208236031215611f6157600080fd5b611f69611a31565b611f7283611df0565b8152602083013567ffffffffffffffff80821115611f8f57600080fd5b611f9b36838701611aa4565b60208401526040850135915080821115611fb457600080fd5b611fc036838701611aa4565b60408401526060850135915080821115611fd957600080fd5b611fe536838701611aa4565b6060840152611ff660808601611b32565b608084015260a085013591508082111561200f57600080fd5b61201b36838701611dff565b60a084015260c085013591508082111561203457600080fd5b5061204136828601611aa4565b60c08301525060e083013560e0820152610100611c46818501611b5b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000602082840312156120a057600080fd5b611de982611df0565b6000815180845260005b818110156120cf576020818501810151868301820152016120b3565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6020815281516020820152600060208301516101408060408501526121366101608501836120a9565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261217183826120a9565b925050606085015161219b608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061220e8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261228357600080fd5b9190910192915050565b808201808211156108ef576108ef611d8c565b60e0815260006122b360e083018a6120a9565b88602084015282810360408401526122cb81896120a9565b905082810360608401526122df81886120a9565b905082810360808401526122f381876120a9565b73ffffffffffffffffffffffffffffffffffffffff9590951660a0840152505090151560c09091015295945050505050565b6000815180845260208085019450848260051b86018286016000805b868110156123fe578484038a52825160a081516004808210612389577f4e487b7100000000000000000000000000000000000000000000000000000000865260218152602486fd5b5086528188015173ffffffffffffffffffffffffffffffffffffffff1688870152604080830151908701526060808301518188018390526123cc838901826120a9565b92505050608080830151925086820381880152506123ea81836120a9565b9b88019b9550505091850191600101612341565b509198975050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015260c06040820152600061244160c0830187612325565b828103606084015261245381876120a9565b9050828103608084015261246781866120a9565b905082810360a084015261247b81856120a9565b9998505050505050505050565b600061012073ffffffffffffffffffffffffffffffffffffffff808d1684528b60208501528160408501526124bf8285018c612325565b915083820360608501526124d3828b6120a9565b915083820360808501526124e7828a6120a9565b915083820360a08501526124fb82896120a9565b915083820360c085015261250f82886120a9565b951660e0840152505090151561010090910152979650505050505050565b60006020828403121561253f57600080fd5b611de982611b5b565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261257d57600080fd5b83018035915067ffffffffffffffff82111561259857600080fd5b6020019150368190038213156125ad57600080fd5b9250929050565b600080858511156125c457600080fd5b838611156125d157600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561261e5780818660040360031b1b83161692505b505092915050565b60006020828403121561263857600080fd5b5051919050565b80820281158282048414176108ef576108ef611d8c565b60008161266557612665611d8c565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b818382376000910190815291905056fea26469706673582212201587ed8f0e45a678abedbedb4e9f625bb9defbcc0246ce7d6840f9a35c0a719a64736f6c63430008110033";
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
