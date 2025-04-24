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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620027fb380380620027fb833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612752620000a9600039600081816105560152818161099001528181610a040152610b0101526127526000f3fe6080604052600436106100295760003560e01c80633f3138081461002e578063a8f6666614610043575b600080fd5b61004161003c366004611cea565b610056565b005b610041610051366004611d4e565b61024b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447611e3c565b90508480610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101458160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101ba576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f7576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61021461020a60a0880160808901611e4f565b8860c0015161043e565b61021e87876104f3565b504790508181111561023f5761023f60008461023a8585611e3c565b610680565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102c6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006102d73447611e3c565b905086806101000151610316576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103398160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610370576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103ae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103eb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61040589600001518a60c001518a8a338b60e001356106b6565b60c08a015261041489876104f3565b50479050818111156104305761043060008461023a8585611e3c565b505060009091555050505050565b80600003610478576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166104d157803410156104cd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6104cd73ffffffffffffffffffffffffffffffffffffffff8316333084610856565b600060405180606001604052808481526020018361051090611fcf565b815260200161051f85856108b3565b905260208101516080015190915073ffffffffffffffffffffffffffffffffffffffff1615610583576105838160200151608001517f0000000000000000000000000000000000000000000000000000000000000000836000015160c001516108f6565b6000610592602084018461210f565b60028111156105a3576105a36120e0565b036105b6576105b181610922565b610644565b60016105c5602084018461210f565b60028111156105d6576105d66120e0565b036105e4576105b181610a02565b60026105f3602084018461210f565b6002811115610604576106046120e0565b03610612576105b181610aff565b6040517f9c59c20c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610673919061218e565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316156106ac576106a7838383610c04565b505050565b6106a78282610c72565b6000838082036106f2576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610701600185611e3c565b818110610710576107106122a1565b905060200281019061072291906122d0565b610733906080810190606001611e4f565b9050600061074082610cdf565b905073ffffffffffffffffffffffffffffffffffffffff821661076a576107673482611e3c565b90505b60006107768989610d29565b90506107828989610e35565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526107bd818b8b85610ea2565b6000836107c986610cdf565b6107d39190611e3c565b905073ffffffffffffffffffffffffffffffffffffffff85166107fd576107fa8882611e3c565b90505b8b811015610846576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166108a557637939f4246000526004601cfd5b600060605260405250505050565b608082015160009060e08301359073ffffffffffffffffffffffffffffffffffffffff166108ed5760c08401516108ea908261230e565b90505b90505b92915050565b6106a78383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611293565b6040808201516020808401516060810151855160c08082015194840151848801519185015160a0909301516101009095015197517f2147796000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001698632147796098976109cd97909593949392909190600401612321565b6000604051808303818588803b1580156109e657600080fd5b505af11580156109fa573d6000803e3d6000fd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166352c41eb68260400151610a6984602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610a7b57836020015160800151610a91565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b846000015160c00151856020015160a00151866020015160600151876020015160200151610ade896000015160a0015173ffffffffffffffffffffffffffffffffffffffff1660146113a6565b6040518863ffffffff1660e01b81526004016109cd9695949392919061248d565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663846a1bc68260400151610b6684602001516080015173ffffffffffffffffffffffffffffffffffffffff161590565b610b7857836020015160800151610b8e565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b845160c08082015160208089015160a0808201516060830151938301516040808501519785015193909801516101009094015197517fffffffff0000000000000000000000000000000000000000000000000000000060e08d901b1681526109cd99989697929691949293929190600401612509565b73ffffffffffffffffffffffffffffffffffffffff8216610c51576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106a773ffffffffffffffffffffffffffffffffffffffff841683836115e9565b73ffffffffffffffffffffffffffffffffffffffff8216610cbf576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104cd73ffffffffffffffffffffffffffffffffffffffff831682611638565b600073ffffffffffffffffffffffffffffffffffffffff821615610d2257610d1d73ffffffffffffffffffffffffffffffffffffffff831630611654565b6108f0565b4792915050565b60608160008167ffffffffffffffff811115610d4757610d47611a36565b604051908082528060200260200182016040528015610d70578160200160208202803683370190505b5090506000805b83811015610e2a57868682818110610d9157610d916122a1565b9050602002810190610da391906122d0565b610db4906080810190606001611e4f565b9150610dbf82610cdf565b838281518110610dd157610dd16122a1565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e225734838281518110610e0a57610e0a6122a1565b60200260200101818151610e1e9190611e3c565b9052505b600101610d77565b509095945050505050565b60005b818110156106a75736838383818110610e5357610e536122a1565b9050602002810190610e6591906122d0565b9050610e7760e0820160c083016125ae565b15610e9957610e99610e8f6060830160408401611e4f565b826080013561043e565b50600101610e38565b6020840151604085015184918491849083600181146111ac5760008686610eca600185611e3c565b818110610ed957610ed96122a1565b9050602002810190610eeb91906122d0565b610efc906080810190606001611e4f565b9050600089815b818110156110a957368d8d83818110610f1e57610f1e6122a1565b9050602002810190610f3091906122d0565b9050610f5f610f456060830160408401611e4f565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610fc25750610fc2610f786040830160208401611e4f565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610fd95750610fd9610f786020830183611e4f565b801561105e575061105e610ff060a08301836125c9565b610fff91600491600091612635565b6110089161265f565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611094576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516110a09082611689565b50600101610f03565b505060005b6110b9600185611e3c565b8110156111a45760008989838181106110d4576110d46122a1565b90506020028101906110e691906122d0565b6110f7906080810190606001611e4f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461119b5786828151811061113e5761113e6122a1565b602002602001015161114f82610cdf565b6111599190611e3c565b9250600073ffffffffffffffffffffffffffffffffffffffff821615611180576000611182565b865b9050831561119957611199828a61023a8488611e3c565b505b506001016110ae565b505050611287565b8760005b8181101561128457368b8b838181106111cb576111cb6122a1565b90506020028101906111dd91906122d0565b90506111f2610f456060830160408401611e4f565b8061120b575061120b610f786040830160208401611e4f565b80156112225750611222610f786020830183611e4f565b80156112395750611239610ff060a08301836125c9565b61126f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161127b9082611689565b506001016111b0565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166112e0576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611355573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061137991906126a7565b10156113a0576113a073ffffffffffffffffffffffffffffffffffffffff85168483611966565b50505050565b606060006113b58360026126c0565b6113c090600261230e565b67ffffffffffffffff8111156113d8576113d8611a36565b6040519080825280601f01601f191660200182016040528015611402576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611439576114396122a1565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061149c5761149c6122a1565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006114d88460026126c0565b6114e390600161230e565b90505b6001811115611580577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611524576115246122a1565b1a60f81b82828151811061153a5761153a6122a1565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611579816126d7565b90506114e6565b5083156108ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161083d565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d15600160005114171661162e576390b8ec186000526004601cfd5b6000603452505050565b60003860003884865af16104cd5763b12d13eb6000526004601cfd5b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61169e6116996020830183611e4f565b6119f0565b6116d4576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611714576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611729610f456060850160408601611e4f565b61173457600061173a565b82608001355b905060006117566117516060860160408701611e4f565b610cdf565b9050600061176d6117516080870160608801611e4f565b9050826000036117a4576117a461178a6060870160408801611e4f565b61179a6040880160208901611e4f565b87608001356108f6565b84608001358210156117ef576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161083d565b6000806117ff6020880188611e4f565b73ffffffffffffffffffffffffffffffffffffffff168561182360a08a018a6125c9565b60405161183192919061270c565b60006040518083038185875af1925050503d806000811461186e576040519150601f19603f3d011682016040523d82523d6000602084013e611873565b606091505b5091509150816118865761188681611a2c565b600061189b61175160808a0160608b01611e4f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896118cc60208b018b611e4f565b6118dc60608c0160408d01611e4f565b6118ec60808d0160608e01611e4f565b8c608001358987116118fe5786611908565b6119088a88611e3c565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d15600160005114171661162e5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661162e57633e3f8f736000526004601cfd5b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708115801590611a245750808214155b949350505050565b8051602082018181fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611a8957611a89611a36565b60405290565b60405160a0810167ffffffffffffffff81118282101715611a8957611a89611a36565b604051610120810167ffffffffffffffff81118282101715611a8957611a89611a36565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611b1d57611b1d611a36565b604052919050565b600082601f830112611b3657600080fd5b813567ffffffffffffffff811115611b5057611b50611a36565b611b8160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611ad6565b818152846020838601011115611b9657600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611bd757600080fd5b919050565b80358015158114611bd757600080fd5b60006101408284031215611bff57600080fd5b611c07611a65565b905081358152602082013567ffffffffffffffff80821115611c2857600080fd5b611c3485838601611b25565b60208401526040840135915080821115611c4d57600080fd5b50611c5a84828501611b25565b604083015250611c6c60608301611bb3565b6060820152611c7d60808301611bb3565b6080820152611c8e60a08301611bb3565b60a082015260c082013560c082015260e082013560e0820152610100611cb5818401611bdc565b90820152610120611cc7838201611bdc565b9082015292915050565b60006101208284031215611ce457600080fd5b50919050565b60008060408385031215611cfd57600080fd5b823567ffffffffffffffff80821115611d1557600080fd5b611d2186838701611bec565b93506020850135915080821115611d3757600080fd5b50611d4485828601611cd1565b9150509250929050565b60008060008060608587031215611d6457600080fd5b843567ffffffffffffffff80821115611d7c57600080fd5b611d8888838901611bec565b95506020870135915080821115611d9e57600080fd5b818701915087601f830112611db257600080fd5b813581811115611dc157600080fd5b8860208260051b8501011115611dd657600080fd5b602083019550809450506040870135915080821115611df457600080fd5b50611e0187828801611cd1565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156108f0576108f0611e0d565b600060208284031215611e6157600080fd5b611e6a82611bb3565b9392505050565b803560038110611bd757600080fd5b600082601f830112611e9157600080fd5b8135602067ffffffffffffffff80831115611eae57611eae611a36565b8260051b611ebd838201611ad6565b9384528581018301938381019088861115611ed757600080fd5b84880192505b85831015611fc357823584811115611ef55760008081fd5b880160a0818b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001811315611f2b5760008081fd5b611f33611a8f565b8783013560048110611f455760008081fd5b81526040611f54848201611bb3565b8983015260608085013582840152608091508185013589811115611f785760008081fd5b611f868f8c83890101611b25565b82850152505082840135925087831115611fa05760008081fd5b611fae8d8a85870101611b25565b90820152845250509184019190840190611edd565b98975050505050505050565b60006101208236031215611fe257600080fd5b611fea611ab2565b611ff383611e71565b8152602083013567ffffffffffffffff8082111561201057600080fd5b61201c36838701611b25565b6020840152604085013591508082111561203557600080fd5b61204136838701611b25565b6040840152606085013591508082111561205a57600080fd5b61206636838701611b25565b606084015261207760808601611bb3565b608084015260a085013591508082111561209057600080fd5b61209c36838701611e80565b60a084015260c08501359150808211156120b557600080fd5b506120c236828601611b25565b60c08301525060e083013560e0820152610100611cc7818501611bdc565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60006020828403121561212157600080fd5b611e6a82611e71565b6000815180845260005b8181101561215057602081850181015186830182015201612134565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6020815281516020820152600060208301516101408060408501526121b761016085018361212a565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526121f2838261212a565b925050606085015161221c608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061228f8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261230457600080fd5b9190910192915050565b808201808211156108f0576108f0611e0d565b60e08152600061233460e083018a61212a565b886020840152828103604084015261234c818961212a565b90508281036060840152612360818861212a565b90508281036080840152612374818761212a565b73ffffffffffffffffffffffffffffffffffffffff9590951660a0840152505090151560c09091015295945050505050565b6000815180845260208085019450848260051b86018286016000805b8681101561247f578484038a52825160a08151600480821061240a577f4e487b7100000000000000000000000000000000000000000000000000000000865260218152602486fd5b5086528188015173ffffffffffffffffffffffffffffffffffffffff16888701526040808301519087015260608083015181880183905261244d8389018261212a565b925050506080808301519250868203818801525061246b818361212a565b9b88019b95505050918501916001016123c2565b509198975050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015260c0604082015260006124c260c08301876123a6565b82810360608401526124d4818761212a565b905082810360808401526124e8818661212a565b905082810360a08401526124fc818561212a565b9998505050505050505050565b600061012073ffffffffffffffffffffffffffffffffffffffff808d1684528b60208501528160408501526125408285018c6123a6565b91508382036060850152612554828b61212a565b91508382036080850152612568828a61212a565b915083820360a085015261257c828961212a565b915083820360c0850152612590828861212a565b951660e0840152505090151561010090910152979650505050505050565b6000602082840312156125c057600080fd5b611e6a82611bdc565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125fe57600080fd5b83018035915067ffffffffffffffff82111561261957600080fd5b60200191503681900382131561262e57600080fd5b9250929050565b6000808585111561264557600080fd5b8386111561265257600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561269f5780818660040360031b1b83161692505b505092915050565b6000602082840312156126b957600080fd5b5051919050565b80820281158282048414176108f0576108f0611e0d565b6000816126e6576126e6611e0d565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b818382376000910190815291905056fea264697066735822122081d80109194093e96d927835855168fb0934f5d77e8ed84cd18700d46a968d4564736f6c63430008110033";
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
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
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
