import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { DeBridgeDlnFacet, DeBridgeDlnFacetInterface } from "../DeBridgeDlnFacet";
type DeBridgeDlnFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DeBridgeDlnFacet__factory extends ContractFactory {
    constructor(...args: DeBridgeDlnFacetConstructorParams);
    deploy(_dlnSource: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<DeBridgeDlnFacet>;
    getDeployTransaction(_dlnSource: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): DeBridgeDlnFacet;
    connect(signer: Signer): DeBridgeDlnFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620029193803806200291983398101604081905262000034916200006e565b6001600160a01b0381166200005c576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052620000a0565b6000602082840312156200008157600080fd5b81516001600160a01b03811681146200009957600080fd5b9392505050565b60805161283b620000de6000396000818160d701528181610389015281816106df01528181610d9201528181610df80152610ed4015261283b6000f3fe6080604052600436106100655760003560e01c80639eaeb24f116100435780639eaeb24f146100c55780639f5e58f51461011e578063f2455b711461013e57600080fd5b80632c7d2db01461006a5780634004633e1461007f5780635df39dde14610092575b600080fd5b61007d61007836600461207c565b61015e565b005b61007d61008d36600461213b565b61049e565b34801561009e57600080fd5b506100b26100ad36600461219f565b61079d565b6040519081526020015b60405180910390f35b3480156100d157600080fd5b506100f97f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100bc565b34801561012a57600080fd5b5061007d6101393660046121b8565b61080d565b34801561014a57600080fd5b5061007d61015936600461222d565b61094a565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101d9576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101ea344761227e565b905086806101000151610229576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610267576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861028a8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156102c1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036102ff576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361033c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8661034a6020820182612291565b9050600003610385576040517f7a7ed98f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335087f0a6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156103f4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041891906122fd565b60808d01518d5160c08f0151929350909161045a91908e8e3373ffffffffffffffffffffffffffffffffffffffff8716156104535787610a19565b6000610a19565b60c08e015261046a8d8b84610bb8565b504794505050508282111590506104905761049060008461048b858561227e565b611053565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610519576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061052a344761227e565b90508461054f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610586576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036105c4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610601576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8461060f6020820182612291565b905060000361064a576040517f7a7ed98f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610100015115610688576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156106c6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106d889608001518a60c00151611088565b61077389897f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335087f0a6040518163ffffffff1660e01b81526004016020604051808303816000875af115801561074a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076e91906122fd565b610bb8565b504792505050818111156107915761079160008461048b858561227e565b50506000909155505050565b60008181527fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b60208190526040822054808303610806576040517f9322741e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9392505050565b6000819003610848576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61085061113d565b7fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b60005b828110156108dc5783838281811061088e5761088e612316565b905060400201602001358260000160008686858181106108b0576108b0612316565b6040908102929092013583525060208201929092520160002055806108d481612345565b915050610874565b50600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517f0cd20b776bdd48fad561fb65af5b002cf62ca0e0d5e89f165a9364d9da52a21b9061093d908590859061237d565b60405180910390a1505050565b61095261113d565b7fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96c547fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b9060ff166109cf576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008381526020828152604091829020849055905183815284917fdc55a9203281afff9f6c3a20ab84a4858a398d4b5050c87a02ca78e573d8b34b910160405180910390a2505050565b600083808203610a55576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610a6460018561227e565b818110610a7357610a73612316565b9050602002810190610a8591906123c4565b610a96906080810190606001612402565b90506000610aa3826111b2565b905073ffffffffffffffffffffffffffffffffffffffff8216610acd57610aca348261227e565b90505b6000610ad989896111fd565b9050610ae58989611311565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610b20818b8b8561137e565b600083610b2c866111b2565b610b36919061227e565b905073ffffffffffffffffffffffffffffffffffffffff8516610b6057610b5d888261227e565b90505b8b811015610ba8576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b6040805161016081018252608085015173ffffffffffffffffffffffffffffffffffffffff16815260c085015160208201526000918101610bf98580612291565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252506060850135602082015260e0860151604090910190610c4e9061079d565b8152602001848060200190610c639190612291565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250336020820152604090810190610cb290860186612291565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509385525050604080516020818101835284825280860191909152815180820183529384528185019390935251606090930192610d4c923392500160609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b60405160208183030381529060405281525090506000610d84856080015173ffffffffffffffffffffffffffffffffffffffff161590565b610e7d57610dbb85608001517f00000000000000000000000000000000000000000000000000000000000000008760c001516115d8565b6040517ffbe16ca700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063fbe16ca7908590610e3390869061780990600401612481565b60206040518083038185885af1158015610e51573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610e7691906122fd565b9050610f53565b828260200151610e8d919061227e565b602083015260c08501516040517ffbe16ca700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163fbe16ca791610f0d90869061780990600401612481565b60206040518083038185885af1158015610f2b573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610f5091906122fd565b90505b60405181907ff19318a6980c94fb206f1e506fa7017ed9dd61959634e8fa128a38df4e527db790600090a27311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168560a0015173ffffffffffffffffffffffffffffffffffffffff16036110155760e085015185517ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b610ffe6020880188612291565b60405161100c929190612608565b60405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1856040516110449190612655565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff831661107d576110788282611604565b505050565b611078838383611671565b806000036110c2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661111b5780341015611117576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61111773ffffffffffffffffffffffffffffffffffffffff83163330846116df565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146111b0576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff8216156111f5576111f073ffffffffffffffffffffffffffffffffffffffff83163061173c565b6111f7565b475b92915050565b60608160008167ffffffffffffffff81111561121b5761121b611e42565b604051908082528060200260200182016040528015611244578160200160208202803683370190505b5090506000805b838110156113065786868281811061126557611265612316565b905060200281019061127791906123c4565b611288906080810190606001612402565b9150611293826111b2565b8382815181106112a5576112a5612316565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166112f657348382815181106112de576112de612316565b602002602001018181516112f2919061227e565b9052505b6112ff81612345565b905061124b565b509095945050505050565b60005b81811015611078573683838381811061132f5761132f612316565b905060200281019061134191906123c4565b905061135360e0820160c08301612768565b156113755761137561136b6060830160408401612402565b8260800135611088565b50600101611314565b6020840151604085015184918491849083600080805b838110156115bc57368c8c838181106113af576113af612316565b90506020028101906113c191906123c4565b90506113d06020820182612402565b93506113e26040820160208301612402565b9250611487846113f560a0840184612291565b61140491600491600091612783565b61140d916127ad565b73ffffffffffffffffffffffffffffffffffffffff9190911660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061157057506114bb6114a16060830160408401612402565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156114f457508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611570575073ffffffffffffffffffffffffffffffffffffffff831660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b156115a7576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8d516115b39082611771565b50600101611394565b505050506115cd85858585856119ee565b505050505050505050565b6110788383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611c14565b73ffffffffffffffffffffffffffffffffffffffff8216611651576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61111773ffffffffffffffffffffffffffffffffffffffff831682611d43565b73ffffffffffffffffffffffffffffffffffffffff82166116be576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61107873ffffffffffffffffffffffffffffffffffffffff84168383611d5f565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661172e57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6117896117816020830183612402565b6017903b1190565b6117bf576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036117ff576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118146114a16060850160408601612402565b61181f576000611825565b82608001355b9050600061184161183c6080860160608701612402565b6111b2565b9050816000036118785761187861185e6060860160408701612402565b61186e6040870160208801612402565b86608001356115d8565b6000806118886020870187612402565b73ffffffffffffffffffffffffffffffffffffffff16846118ac60a0890189612291565b6040516118ba9291906127f5565b60006040518083038185875af1925050503d80600081146118f7576040519150601f19603f3d011682016040523d82523d6000602084013e6118fc565b606091505b50915091508161190f5761190f81611dae565b600061192461183c6080890160608a01612402565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861195560208a018a612402565b61196560608b0160408c01612402565b61197560808c0160608d01612402565b8b608001358987116119875786611991565b6119918a8861227e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b83600086826119fe60018261227e565b818110611a0d57611a0d612316565b9050602002810190611a1f91906123c4565b611a30906080810190606001612402565b905060008060008060008060005b88811015611c0457611a5160018a61227e565b81108015611a60575088600114155b15611b3c578d8d82818110611a7757611a77612316565b9050602002810190611a8991906123c4565b611a9a906080810190606001612402565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611b3c578a8181518110611ae157611ae1612316565b6020026020010151611af2876111b2565b611afc919061227e565b965073ffffffffffffffffffffffffffffffffffffffff861615611b21576000611b23565b895b935083871115611b3c57611b3c868d61048b878b61227e565b8d8d82818110611b4e57611b4e612316565b9050602002810190611b6091906123c4565b611b71906060810190604001612402565b9450611b7c856111b2565b925073ffffffffffffffffffffffffffffffffffffffff851615611ba1576000611ba3565b895b91508183118015611be057508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611bf457611bf4858d61048b858761227e565b611bfd81612345565b9050611a3e565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611d3d5773ffffffffffffffffffffffffffffffffffffffff8316611c7d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611cf2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d1691906122fd565b1015611d3d57611d3d73ffffffffffffffffffffffffffffffffffffffff85168483611db8565b50505050565b60003860003884865af16111175763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611da4576390b8ec186000526004601cfd5b6000603452505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716611da45760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716611da457633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611e9557611e95611e42565b60405290565b600082601f830112611eac57600080fd5b813567ffffffffffffffff80821115611ec757611ec7611e42565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611f0d57611f0d611e42565b81604052838152866020858801011115611f2657600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f6a57600080fd5b919050565b80358015158114611f6a57600080fd5b60006101408284031215611f9257600080fd5b611f9a611e71565b905081358152602082013567ffffffffffffffff80821115611fbb57600080fd5b611fc785838601611e9b565b60208401526040840135915080821115611fe057600080fd5b50611fed84828501611e9b565b604083015250611fff60608301611f46565b606082015261201060808301611f46565b608082015261202160a08301611f46565b60a082015260c082013560c082015260e082013560e0820152610100612048818401611f6f565b9082015261012061205a838201611f6f565b9082015292915050565b60006080828403121561207657600080fd5b50919050565b6000806000806060858703121561209257600080fd5b843567ffffffffffffffff808211156120aa57600080fd5b6120b688838901611f7f565b955060208701359150808211156120cc57600080fd5b818701915087601f8301126120e057600080fd5b8135818111156120ef57600080fd5b8860208260051b850101111561210457600080fd5b60208301955080945050604087013591508082111561212257600080fd5b5061212f87828801612064565b91505092959194509250565b6000806040838503121561214e57600080fd5b823567ffffffffffffffff8082111561216657600080fd5b61217286838701611f7f565b9350602085013591508082111561218857600080fd5b5061219585828601612064565b9150509250929050565b6000602082840312156121b157600080fd5b5035919050565b600080602083850312156121cb57600080fd5b823567ffffffffffffffff808211156121e357600080fd5b818501915085601f8301126121f757600080fd5b81358181111561220657600080fd5b8660208260061b850101111561221b57600080fd5b60209290920196919550909350505050565b6000806040838503121561224057600080fd5b50508035926020909101359150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156111f7576111f761224f565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126122c657600080fd5b83018035915067ffffffffffffffff8211156122e157600080fd5b6020019150368190038213156122f657600080fd5b9250929050565b60006020828403121561230f57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036123765761237661224f565b5060010190565b6020808252818101839052600090604080840186845b878110156123b7578135835284820135858401529183019190830190600101612393565b5090979650505050505050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126123f857600080fd5b9190910192915050565b60006020828403121561241457600080fd5b61080682611f46565b6000815180845260005b8181101561244357602081850181015186830182015201612427565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b608081526124a860808201845173ffffffffffffffffffffffffffffffffffffffff169052565b602083015160a0820152600060408401516101608060c08501526124d06101e085018361241d565b9150606086015160e08501526080860151610100818187015260a088015191507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80610120818887030181890152612527868561241d565b955060c08a01519350610140612554818a018673ffffffffffffffffffffffffffffffffffffffff169052565b60e08b015194508289880301868a015261256e878661241d565b9650838b0151955082898803016101808a015261258b878761241d565b9650818b0151955082898803016101a08a01526125a8878761241d565b9650808b01519550505080878603016101c08801525050506125ca828261241d565b91505082810360208401526125e3816000815260200190565b63ffffffff949094166040840152505080820360609091015260008152602001919050565b60208152816020820152818360408301376000818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b60208152815160208201526000602083015161014080604085015261267e61016085018361241d565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526126b9838261241d565b92505060608501516126e3608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127568187018315159052565b90950151151593019290925250919050565b60006020828403121561277a57600080fd5b61080682611f6f565b6000808585111561279357600080fd5b838611156127a057600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127ed5780818660040360031b1b83161692505b505092915050565b818382376000910190815291905056fea2646970667358221220646f0b4dbe71d7c5de0d9c9f18941d08ceb295e12926f10568f3b89410347eef64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_dlnSource";
            readonly type: "address";
            readonly internalType: "contract IDlnSource";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "DLN_SOURCE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IDlnSource";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDeBridgeChainId";
        readonly inputs: readonly [{
            readonly name: "_chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initDeBridgeDln";
        readonly inputs: readonly [{
            readonly name: "chainIdConfigs";
            readonly type: "tuple[]";
            readonly internalType: "struct DeBridgeDlnFacet.ChainIdConfig[]";
            readonly components: readonly [{
                readonly name: "chainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deBridgeChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setDeBridgeChainId";
        readonly inputs: readonly [{
            readonly name: "_chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_deBridgeChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaDeBridgeDln";
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
            readonly name: "_deBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct DeBridgeDlnFacet.DeBridgeDlnData";
            readonly components: readonly [{
                readonly name: "receivingAssetId";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "receiver";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "orderAuthorityDst";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaDeBridgeDln";
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
            readonly name: "_deBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct DeBridgeDlnFacet.DeBridgeDlnData";
            readonly components: readonly [{
                readonly name: "receivingAssetId";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "receiver";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "orderAuthorityDst";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
        readonly name: "DeBridgeChainIdSet";
        readonly inputs: readonly [{
            readonly name: "chainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "deBridgeChainId";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DeBridgeInitialized";
        readonly inputs: readonly [{
            readonly name: "chainIdConfigs";
            readonly type: "tuple[]";
            readonly indexed: false;
            readonly internalType: "struct DeBridgeDlnFacet.ChainIdConfig[]";
            readonly components: readonly [{
                readonly name: "chainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deBridgeChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DlnOrderCreated";
        readonly inputs: readonly [{
            readonly name: "orderId";
            readonly type: "bytes32";
            readonly indexed: true;
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
        readonly name: "EmptyNonEVMAddress";
        readonly inputs: readonly [];
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
        readonly name: "InvalidReceiver";
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
        readonly name: "NotInitialized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnknownDeBridgeChain";
        readonly inputs: readonly [];
    }];
    static createInterface(): DeBridgeDlnFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DeBridgeDlnFacet;
}
export {};
