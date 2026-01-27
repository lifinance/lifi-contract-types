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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200284c3803806200284c833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516127a3620000a9600039600081816105560152818161098f01528181610a030152610b0001526127a36000f3fe6080604052600436106100295760003560e01c80633f3138081461002e578063a8f6666614610043575b600080fd5b61004161003c366004611d00565b610056565b005b610041610051366004611d64565b61024b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447611e52565b90508480610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101458160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101ba576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f7576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61021461020a60a0880160808901611e65565b8860c0015161043e565b61021e87876104f3565b504790508181111561023f5761023f60008461023a8585611e52565b610680565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102c6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006102d73447611e52565b905086806101000151610316576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103398160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610370576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103ae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103eb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61040589600001518a60c001518a8a338b60e001356106b5565b60c08a015261041489876104f3565b50479050818111156104305761043060008461023a8585611e52565b505060009091555050505050565b80600003610478576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166104d157803410156104cd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6104cd73ffffffffffffffffffffffffffffffffffffffff8316333084610855565b600060405180606001604052808481526020018361051090611fe5565b815260200161051f85856108b2565b905260208101516080015190915073ffffffffffffffffffffffffffffffffffffffff1615610583576105838160200151608001517f0000000000000000000000000000000000000000000000000000000000000000836000015160c001516108f5565b60006105926020840184612125565b60028111156105a3576105a36120f6565b036105b6576105b181610921565b610644565b60016105c56020840184612125565b60028111156105d6576105d66120f6565b036105e4576105b181610a01565b60026105f36020840184612125565b6002811115610604576106046120f6565b03610612576105b181610afe565b6040517f9c59c20c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18360405161067391906121a4565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff83166106aa576106a58282610c03565b505050565b6106a5838383610c70565b6000838082036106f1576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610700600185611e52565b81811061070f5761070f6122b7565b905060200281019061072191906122e6565b610732906080810190606001611e65565b9050600061073f82610cde565b905073ffffffffffffffffffffffffffffffffffffffff8216610769576107663482611e52565b90505b60006107758989610d28565b90506107818989610e3c565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526107bc818b8b85610ea9565b6000836107c886610cde565b6107d29190611e52565b905073ffffffffffffffffffffffffffffffffffffffff85166107fc576107f98882611e52565b90505b8b811015610845576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166108a457637939f4246000526004601cfd5b600060605260405250505050565b608082015160009060e08301359073ffffffffffffffffffffffffffffffffffffffff166108ec5760c08401516108e99082612324565b90505b90505b92915050565b6106a58383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611103565b6040808201516020808401516060810151855160c08082015194840151848801519185015160a0909301516101009095015197517f2147796000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001698632147796098976109cc97909593949392909190600401612337565b6000604051808303818588803b1580156109e557600080fd5b505af11580156109f9573d6000803e3d6000fd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166352c41eb68260400151610a6884602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610a7a57836020015160800151610a90565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b846000015160c00151856020015160a00151866020015160600151876020015160200151610add896000015160a0015173ffffffffffffffffffffffffffffffffffffffff166014611232565b6040518863ffffffff1660e01b81526004016109cc969594939291906124a6565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663846a1bc68260400151610b6584602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610b7757836020015160800151610b8d565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b845160c08082015160208089015160a0808201516060830151938301516040808501519785015193909801516101009094015197517fffffffff0000000000000000000000000000000000000000000000000000000060e08d901b1681526109cc99989697929691949293929190600401612522565b73ffffffffffffffffffffffffffffffffffffffff8216610c50576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104cd73ffffffffffffffffffffffffffffffffffffffff831682611475565b73ffffffffffffffffffffffffffffffffffffffff8216610cbd576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106a573ffffffffffffffffffffffffffffffffffffffff84168383611491565b600073ffffffffffffffffffffffffffffffffffffffff821615610d2157610d1c73ffffffffffffffffffffffffffffffffffffffff8316306114e0565b6108ef565b4792915050565b60608160008167ffffffffffffffff811115610d4657610d46611a4c565b604051908082528060200260200182016040528015610d6f578160200160208202803683370190505b5090506000805b83811015610e3157868682818110610d9057610d906122b7565b9050602002810190610da291906122e6565b610db3906080810190606001611e65565b9150610dbe82610cde565b838281518110610dd057610dd06122b7565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e215734838281518110610e0957610e096122b7565b60200260200101818151610e1d9190611e52565b9052505b610e2a816125c7565b9050610d76565b509095945050505050565b60005b818110156106a55736838383818110610e5a57610e5a6122b7565b9050602002810190610e6c91906122e6565b9050610e7e60e0820160c083016125ff565b15610ea057610ea0610e966060830160408401611e65565b826080013561043e565b50600101610e3f565b6020840151604085015184918491849083600080805b838110156110e757368c8c83818110610eda57610eda6122b7565b9050602002810190610eec91906122e6565b9050610efb6020820182611e65565b9350610f0d6040820160208301611e65565b9250610fb284610f2060a084018461261a565b610f2f91600491600091612686565b610f38916126b0565b73ffffffffffffffffffffffffffffffffffffffff9190911660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061109b5750610fe6610fcc6060830160408401611e65565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561101f57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b801561109b575073ffffffffffffffffffffffffffffffffffffffff831660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b156110d2576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8d516110de9082611515565b50600101610ebf565b505050506110f88585858585611792565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84161561122c5773ffffffffffffffffffffffffffffffffffffffff831661116c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156111e1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120591906126f8565b101561122c5761122c73ffffffffffffffffffffffffffffffffffffffff851684836119b8565b50505050565b60606000611241836002612711565b61124c906002612324565b67ffffffffffffffff81111561126457611264611a4c565b6040519080825280601f01601f19166020018201604052801561128e576020820181803683370190505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106112c5576112c56122b7565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611328576113286122b7565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000611364846002612711565b61136f906001612324565b90505b600181111561140c577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106113b0576113b06122b7565b1a60f81b8282815181106113c6576113c66122b7565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c9361140581612728565b9050611372565b5083156108ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161083c565b60003860003884865af16104cd5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166114d6576390b8ec186000526004601cfd5b6000603452505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61152d6115256020830183611e65565b6017903b1190565b611563576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036115a3576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006115b8610fcc6060850160408601611e65565b6115c35760006115c9565b82608001355b905060006115e56115e06080860160608701611e65565b610cde565b90508160000361161c5761161c6116026060860160408701611e65565b6116126040870160208801611e65565b86608001356108f5565b60008061162c6020870187611e65565b73ffffffffffffffffffffffffffffffffffffffff168461165060a089018961261a565b60405161165e92919061275d565b60006040518083038185875af1925050503d806000811461169b576040519150601f19603f3d011682016040523d82523d6000602084013e6116a0565b606091505b5091509150816116b3576116b381611a42565b60006116c86115e06080890160608a01611e65565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886116f960208a018a611e65565b61170960608b0160408c01611e65565b61171960808c0160608d01611e65565b8b6080013589871161172b5786611735565b6117358a88611e52565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b83600086826117a2600182611e52565b8181106117b1576117b16122b7565b90506020028101906117c391906122e6565b6117d4906080810190606001611e65565b905060008060008060008060005b888110156119a8576117f560018a611e52565b81108015611804575088600114155b156118e0578d8d8281811061181b5761181b6122b7565b905060200281019061182d91906122e6565b61183e906080810190606001611e65565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146118e0578a8181518110611885576118856122b7565b602002602001015161189687610cde565b6118a09190611e52565b965073ffffffffffffffffffffffffffffffffffffffff8616156118c55760006118c7565b895b9350838711156118e0576118e0868d61023a878b611e52565b8d8d828181106118f2576118f26122b7565b905060200281019061190491906122e6565b611915906060810190604001611e65565b945061192085610cde565b925073ffffffffffffffffffffffffffffffffffffffff851615611945576000611947565b895b9150818311801561198457508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561199857611998858d61023a8587611e52565b6119a1816125c7565b90506117e2565b5050505050505050505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166114d65760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166114d657633e3f8f736000526004601cfd5b8051602082018181fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611a9f57611a9f611a4c565b60405290565b60405160a0810167ffffffffffffffff81118282101715611a9f57611a9f611a4c565b604051610120810167ffffffffffffffff81118282101715611a9f57611a9f611a4c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611b3357611b33611a4c565b604052919050565b600082601f830112611b4c57600080fd5b813567ffffffffffffffff811115611b6657611b66611a4c565b611b9760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611aec565b818152846020838601011115611bac57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611bed57600080fd5b919050565b80358015158114611bed57600080fd5b60006101408284031215611c1557600080fd5b611c1d611a7b565b905081358152602082013567ffffffffffffffff80821115611c3e57600080fd5b611c4a85838601611b3b565b60208401526040840135915080821115611c6357600080fd5b50611c7084828501611b3b565b604083015250611c8260608301611bc9565b6060820152611c9360808301611bc9565b6080820152611ca460a08301611bc9565b60a082015260c082013560c082015260e082013560e0820152610100611ccb818401611bf2565b90820152610120611cdd838201611bf2565b9082015292915050565b60006101208284031215611cfa57600080fd5b50919050565b60008060408385031215611d1357600080fd5b823567ffffffffffffffff80821115611d2b57600080fd5b611d3786838701611c02565b93506020850135915080821115611d4d57600080fd5b50611d5a85828601611ce7565b9150509250929050565b60008060008060608587031215611d7a57600080fd5b843567ffffffffffffffff80821115611d9257600080fd5b611d9e88838901611c02565b95506020870135915080821115611db457600080fd5b818701915087601f830112611dc857600080fd5b813581811115611dd757600080fd5b8860208260051b8501011115611dec57600080fd5b602083019550809450506040870135915080821115611e0a57600080fd5b50611e1787828801611ce7565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156108ef576108ef611e23565b600060208284031215611e7757600080fd5b611e8082611bc9565b9392505050565b803560038110611bed57600080fd5b600082601f830112611ea757600080fd5b8135602067ffffffffffffffff80831115611ec457611ec4611a4c565b8260051b611ed3838201611aec565b9384528581018301938381019088861115611eed57600080fd5b84880192505b85831015611fd957823584811115611f0b5760008081fd5b880160a0818b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001811315611f415760008081fd5b611f49611aa5565b8783013560048110611f5b5760008081fd5b81526040611f6a848201611bc9565b8983015260608085013582840152608091508185013589811115611f8e5760008081fd5b611f9c8f8c83890101611b3b565b82850152505082840135925087831115611fb65760008081fd5b611fc48d8a85870101611b3b565b90820152845250509184019190840190611ef3565b98975050505050505050565b60006101208236031215611ff857600080fd5b612000611ac8565b61200983611e87565b8152602083013567ffffffffffffffff8082111561202657600080fd5b61203236838701611b3b565b6020840152604085013591508082111561204b57600080fd5b61205736838701611b3b565b6040840152606085013591508082111561207057600080fd5b61207c36838701611b3b565b606084015261208d60808601611bc9565b608084015260a08501359150808211156120a657600080fd5b6120b236838701611e96565b60a084015260c08501359150808211156120cb57600080fd5b506120d836828601611b3b565b60c08301525060e083013560e0820152610100611cdd818501611bf2565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60006020828403121561213757600080fd5b611e8082611e87565b6000815180845260005b818110156121665760208185018101518683018201520161214a565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6020815281516020820152600060208301516101408060408501526121cd610160850183612140565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526122088382612140565b9250506060850151612232608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206122a58187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261231a57600080fd5b9190910192915050565b808201808211156108ef576108ef611e23565b60e08152600061234a60e083018a612140565b88602084015282810360408401526123628189612140565b905082810360608401526123768188612140565b9050828103608084015261238a8187612140565b73ffffffffffffffffffffffffffffffffffffffff9590951660a0840152505090151560c09091015295945050505050565b600081518084526020808501808196508360051b810191508286016000805b86811015612498578385038a52825160a081516004808210612423577f4e487b7100000000000000000000000000000000000000000000000000000000865260218152602486fd5b5087528188015173ffffffffffffffffffffffffffffffffffffffff168888015260408083015190880152606080830151818901839052612466838a0182612140565b92505050608080830151925087820381890152506124848183612140565b9b88019b96505050918501916001016123db565b509298975050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015260c0604082015260006124db60c08301876123bc565b82810360608401526124ed8187612140565b905082810360808401526125018186612140565b905082810360a08401526125158185612140565b9998505050505050505050565b600061012073ffffffffffffffffffffffffffffffffffffffff808d1684528b60208501528160408501526125598285018c6123bc565b9150838203606085015261256d828b612140565b91508382036080850152612581828a612140565b915083820360a08501526125958289612140565b915083820360c08501526125a98288612140565b951660e0840152505090151561010090910152979650505050505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036125f8576125f8611e23565b5060010190565b60006020828403121561261157600080fd5b611e8082611bf2565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261264f57600080fd5b83018035915067ffffffffffffffff82111561266a57600080fd5b60200191503681900382131561267f57600080fd5b9250929050565b6000808585111561269657600080fd5b838611156126a357600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126f05780818660040360031b1b83161692505b505092915050565b60006020828403121561270a57600080fd5b5051919050565b80820281158282048414176108ef576108ef611e23565b60008161273757612737611e23565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b818382376000910190815291905056fea264697066735822122067d34813805e249b10b8e99b76a562954cbf4ea30bb8fde30a42b1d5db3d9a0664736f6c63430008110033";
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
