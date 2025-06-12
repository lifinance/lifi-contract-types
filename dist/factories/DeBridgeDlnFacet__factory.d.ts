import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { DeBridgeDlnFacet, DeBridgeDlnFacetInterface } from "../DeBridgeDlnFacet";
declare type DeBridgeDlnFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620028ed380380620028ed833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612837620000b66000396000818160d701528181610389015281816106df01528181610d9201528181610df80152610ed401526128376000f3fe6080604052600436106100655760003560e01c80638f4bef1c116100435780638f4bef1c146100c55780639f5e58f51461011e578063f2455b711461013e57600080fd5b80632c7d2db01461006a5780634004633e1461007f5780635df39dde14610092575b600080fd5b61007d610078366004612078565b61015e565b005b61007d61008d366004612137565b61049e565b34801561009e57600080fd5b506100b26100ad36600461219b565b61079d565b6040519081526020015b60405180910390f35b3480156100d157600080fd5b506100f97f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100bc565b34801561012a57600080fd5b5061007d6101393660046121b4565b61080d565b34801561014a57600080fd5b5061007d610159366004612229565b61094a565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101d9576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101ea344761227a565b905086806101000151610229576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610267576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861028a8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156102c1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036102ff576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361033c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8661034a602082018261228d565b9050600003610385576040517f7a7ed98f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335087f0a6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156103f4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041891906122f9565b60808d01518d5160c08f0151929350909161045a91908e8e3373ffffffffffffffffffffffffffffffffffffffff8716156104535787610a19565b6000610a19565b60c08e015261046a8d8b84610bb8565b504794505050508282111590506104905761049060008461048b858561227a565b611053565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610519576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061052a344761227a565b90508461054f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610586576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036105c4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610601576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8461060f602082018261228d565b905060000361064a576040517f7a7ed98f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610100015115610688576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156106c6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106d889608001518a60c00151611088565b61077389897f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335087f0a6040518163ffffffff1660e01b81526004016020604051808303816000875af115801561074a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076e91906122f9565b610bb8565b504792505050818111156107915761079160008461048b858561227a565b50506000909155505050565b60008181527fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b60208190526040822054808303610806576040517f9322741e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9392505050565b6000819003610848576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61085061113d565b7fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b60005b828110156108dc5783838281811061088e5761088e612312565b905060400201602001358260000160008686858181106108b0576108b0612312565b6040908102929092013583525060208201929092520160002055806108d481612341565b915050610874565b50600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517f0cd20b776bdd48fad561fb65af5b002cf62ca0e0d5e89f165a9364d9da52a21b9061093d9085908590612379565b60405180910390a1505050565b61095261113d565b7fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96c547fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b9060ff166109cf576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008381526020828152604091829020849055905183815284917fdc55a9203281afff9f6c3a20ab84a4858a398d4b5050c87a02ca78e573d8b34b910160405180910390a2505050565b600083808203610a55576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610a6460018561227a565b818110610a7357610a73612312565b9050602002810190610a8591906123c0565b610a969060808101906060016123fe565b90506000610aa3826111b2565b905073ffffffffffffffffffffffffffffffffffffffff8216610acd57610aca348261227a565b90505b6000610ad989896111fd565b9050610ae58989611309565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610b20818b8b85611376565b600083610b2c866111b2565b610b36919061227a565b905073ffffffffffffffffffffffffffffffffffffffff8516610b6057610b5d888261227a565b90505b8b811015610ba8576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b6040805161016081018252608085015173ffffffffffffffffffffffffffffffffffffffff16815260c085015160208201526000918101610bf9858061228d565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252506060850135602082015260e0860151604090910190610c4e9061079d565b8152602001848060200190610c63919061228d565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250336020820152604090810190610cb29086018661228d565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509385525050604080516020818101835284825280860191909152815180820183529384528185019390935251606090930192610d4c923392500160609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b60405160208183030381529060405281525090506000610d84856080015173ffffffffffffffffffffffffffffffffffffffff161590565b610e7d57610dbb85608001517f00000000000000000000000000000000000000000000000000000000000000008760c00151611767565b6040517ffbe16ca700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063fbe16ca7908590610e339086906178099060040161247d565b60206040518083038185885af1158015610e51573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610e7691906122f9565b9050610f53565b828260200151610e8d919061227a565b602083015260c08501516040517ffbe16ca700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163fbe16ca791610f0d9086906178099060040161247d565b60206040518083038185885af1158015610f2b573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610f5091906122f9565b90505b60405181907ff19318a6980c94fb206f1e506fa7017ed9dd61959634e8fa128a38df4e527db790600090a27311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168560a0015173ffffffffffffffffffffffffffffffffffffffff16036110155760e085015185517ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b610ffe602088018861228d565b60405161100c929190612604565b60405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1856040516110449190612651565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff831661107d576110788282611793565b505050565b611078838383611800565b806000036110c2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661111b5780341015611117576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61111773ffffffffffffffffffffffffffffffffffffffff831633308461186e565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146111b0576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff8216156111f5576111f073ffffffffffffffffffffffffffffffffffffffff8316306118cb565b6111f7565b475b92915050565b60608160008167ffffffffffffffff81111561121b5761121b611e3e565b604051908082528060200260200182016040528015611244578160200160208202803683370190505b5090506000805b838110156112fe5786868281811061126557611265612312565b905060200281019061127791906123c0565b6112889060808101906060016123fe565b9150611293826111b2565b8382815181106112a5576112a5612312565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166112f657348382815181106112de576112de612312565b602002602001018181516112f2919061227a565b9052505b60010161124b565b509095945050505050565b60005b81811015611078573683838381811061132757611327612312565b905060200281019061133991906123c0565b905061134b60e0820160c08301612764565b1561136d5761136d61136360608301604084016123fe565b8260800135611088565b5060010161130c565b602084015160408501518491849184908360018114611680576000868661139e60018561227a565b8181106113ad576113ad612312565b90506020028101906113bf91906123c0565b6113d09060808101906060016123fe565b9050600089815b8181101561157d57368d8d838181106113f2576113f2612312565b905060200281019061140491906123c0565b905061143361141960608301604084016123fe565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611496575061149661144c60408301602084016123fe565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156114ad57506114ad61144c60208301836123fe565b801561153257506115326114c460a083018361228d565b6114d39160049160009161277f565b6114dc916127a9565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611568576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516115749082611900565b506001016113d7565b505060005b61158d60018561227a565b8110156116785760008989838181106115a8576115a8612312565b90506020028101906115ba91906123c0565b6115cb9060808101906060016123fe565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461166f5786828151811061161257611612612312565b6020026020010151611623826111b2565b61162d919061227a565b9250600073ffffffffffffffffffffffffffffffffffffffff821615611654576000611656565b865b9050831561166d5761166d828a61048b848861227a565b505b50600101611582565b50505061175b565b8760005b8181101561175857368b8b8381811061169f5761169f612312565b90506020028101906116b191906123c0565b90506116c661141960608301604084016123fe565b806116df57506116df61144c60408301602084016123fe565b80156116f657506116f661144c60208301836123fe565b801561170d575061170d6114c460a083018361228d565b611743576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161174f9082611900565b50600101611684565b50505b50505050505050505050565b6110788383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b7a565b73ffffffffffffffffffffffffffffffffffffffff82166117e0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61111773ffffffffffffffffffffffffffffffffffffffff831682611ca9565b73ffffffffffffffffffffffffffffffffffffffff821661184d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61107873ffffffffffffffffffffffffffffffffffffffff84168383611cc5565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166118bd57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61191561191060208301836123fe565b611d14565b61194b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361198b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006119a061141960608501604086016123fe565b6119ab5760006119b1565b82608001355b905060006119cd6119c860808601606087016123fe565b6111b2565b905081600003611a0457611a046119ea60608601604087016123fe565b6119fa60408701602088016123fe565b8660800135611767565b600080611a1460208701876123fe565b73ffffffffffffffffffffffffffffffffffffffff1684611a3860a089018961228d565b604051611a469291906127f1565b60006040518083038185875af1925050503d8060008114611a83576040519150601f19603f3d011682016040523d82523d6000602084013e611a88565b606091505b509150915081611a9b57611a9b81611daa565b6000611ab06119c86080890160608a016123fe565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611ae160208a018a6123fe565b611af160608b0160408c016123fe565b611b0160808c0160608d016123fe565b8b60800135898711611b135786611b1d565b611b1d8a8861227a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611ca35773ffffffffffffffffffffffffffffffffffffffff8316611be3576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611c58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c7c91906122f9565b1015611ca357611ca373ffffffffffffffffffffffffffffffffffffffff85168483611db4565b50505050565b60003860003884865af16111175763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611d0a576390b8ec186000526004601cfd5b6000603452505050565b6040805160178082528183019092526000918291906020820181803683370190505090506017600060208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000821601611da157506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716611d0a5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716611d0a57633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611e9157611e91611e3e565b60405290565b600082601f830112611ea857600080fd5b813567ffffffffffffffff80821115611ec357611ec3611e3e565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611f0957611f09611e3e565b81604052838152866020858801011115611f2257600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f6657600080fd5b919050565b80358015158114611f6657600080fd5b60006101408284031215611f8e57600080fd5b611f96611e6d565b905081358152602082013567ffffffffffffffff80821115611fb757600080fd5b611fc385838601611e97565b60208401526040840135915080821115611fdc57600080fd5b50611fe984828501611e97565b604083015250611ffb60608301611f42565b606082015261200c60808301611f42565b608082015261201d60a08301611f42565b60a082015260c082013560c082015260e082013560e0820152610100612044818401611f6b565b90820152610120612056838201611f6b565b9082015292915050565b60006080828403121561207257600080fd5b50919050565b6000806000806060858703121561208e57600080fd5b843567ffffffffffffffff808211156120a657600080fd5b6120b288838901611f7b565b955060208701359150808211156120c857600080fd5b818701915087601f8301126120dc57600080fd5b8135818111156120eb57600080fd5b8860208260051b850101111561210057600080fd5b60208301955080945050604087013591508082111561211e57600080fd5b5061212b87828801612060565b91505092959194509250565b6000806040838503121561214a57600080fd5b823567ffffffffffffffff8082111561216257600080fd5b61216e86838701611f7b565b9350602085013591508082111561218457600080fd5b5061219185828601612060565b9150509250929050565b6000602082840312156121ad57600080fd5b5035919050565b600080602083850312156121c757600080fd5b823567ffffffffffffffff808211156121df57600080fd5b818501915085601f8301126121f357600080fd5b81358181111561220257600080fd5b8660208260061b850101111561221757600080fd5b60209290920196919550909350505050565b6000806040838503121561223c57600080fd5b50508035926020909101359150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156111f7576111f761224b565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126122c257600080fd5b83018035915067ffffffffffffffff8211156122dd57600080fd5b6020019150368190038213156122f257600080fd5b9250929050565b60006020828403121561230b57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036123725761237261224b565b5060010190565b6020808252818101839052600090604080840186845b878110156123b357813583528482013585840152918301919083019060010161238f565b5090979650505050505050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126123f457600080fd5b9190910192915050565b60006020828403121561241057600080fd5b61080682611f42565b6000815180845260005b8181101561243f57602081850181015186830182015201612423565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b608081526124a460808201845173ffffffffffffffffffffffffffffffffffffffff169052565b602083015160a0820152600060408401516101608060c08501526124cc6101e0850183612419565b9150606086015160e08501526080860151610100818187015260a088015191507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff806101208188870301818901526125238685612419565b955060c08a01519350610140612550818a018673ffffffffffffffffffffffffffffffffffffffff169052565b60e08b015194508289880301868a015261256a8786612419565b9650838b0151955082898803016101808a01526125878787612419565b9650818b0151955082898803016101a08a01526125a48787612419565b9650808b01519550505080878603016101c08801525050506125c68282612419565b91505082810360208401526125df816000815260200190565b63ffffffff949094166040840152505080820360609091015260008152602001919050565b60208152816020820152818360408301376000818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b60208152815160208201526000602083015161014080604085015261267a610160850183612419565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526126b58382612419565b92505060608501516126df608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127528187018315159052565b90950151151593019290925250919050565b60006020828403121561277657600080fd5b61080682611f6b565b6000808585111561278f57600080fd5b8386111561279c57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127e95780818660040360031b1b83161692505b505092915050565b818382376000910190815291905056fea264697066735822122068934b0b7e6de50f37e98cc1c3797e18d8d5422f737e0c9dd1fcb604a65afd0464736f6c63430008110033";
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
        readonly name: "dlnSource";
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
