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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200285a3803806200285a833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516127a4620000b66000396000818160d701528181610389015281816106df01528181610d9201528181610df80152610ed401526127a46000f3fe6080604052600436106100655760003560e01c80638f4bef1c116100435780638f4bef1c146100c55780639f5e58f51461011e578063f2455b711461013e57600080fd5b80632c7d2db01461006a5780634004633e1461007f5780635df39dde14610092575b600080fd5b61007d610078366004611fe5565b61015e565b005b61007d61008d3660046120a4565b61049e565b34801561009e57600080fd5b506100b26100ad366004612108565b61079d565b6040519081526020015b60405180910390f35b3480156100d157600080fd5b506100f97f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100bc565b34801561012a57600080fd5b5061007d610139366004612121565b61080d565b34801561014a57600080fd5b5061007d610159366004612196565b61094a565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101d9576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101ea34476121e7565b905086806101000151610229576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610267576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861028a8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156102c1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036102ff576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361033c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8661034a60208201826121fa565b9050600003610385576040517f7a7ed98f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335087f0a6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156103f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104189190612266565b60808d01518d5160c08f0151929350909161045a91908e8e3373ffffffffffffffffffffffffffffffffffffffff8716156104535787610a19565b6000610a19565b60c08e015261046a8d8b84610bb8565b504794505050508282111590506104905761049060008461048b85856121e7565b611053565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610519576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061052a34476121e7565b90508461054f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610586576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036105c4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610601576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8461060f60208201826121fa565b905060000361064a576040517f7a7ed98f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610100015115610688576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156106c6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106d889608001518a60c00151611088565b61077389897f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335087f0a6040518163ffffffff1660e01b81526004016020604051808303816000875af115801561074a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076e9190612266565b610bb8565b504792505050818111156107915761079160008461048b85856121e7565b50506000909155505050565b60008181527fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b60208190526040822054808303610806576040517f9322741e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9392505050565b6000819003610848576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61085061113d565b7fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b60005b828110156108dc5783838281811061088e5761088e61227f565b905060400201602001358260000160008686858181106108b0576108b061227f565b6040908102929092013583525060208201929092520160002055806108d4816122ae565b915050610874565b50600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517f0cd20b776bdd48fad561fb65af5b002cf62ca0e0d5e89f165a9364d9da52a21b9061093d90859085906122e6565b60405180910390a1505050565b61095261113d565b7fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96c547fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b9060ff166109cf576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008381526020828152604091829020849055905183815284917fdc55a9203281afff9f6c3a20ab84a4858a398d4b5050c87a02ca78e573d8b34b910160405180910390a2505050565b600083808203610a55576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610a646001856121e7565b818110610a7357610a7361227f565b9050602002810190610a85919061232d565b610a9690608081019060600161236b565b90506000610aa3826111b2565b905073ffffffffffffffffffffffffffffffffffffffff8216610acd57610aca34826121e7565b90505b6000610ad989896111fd565b9050610ae58989611309565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610b20818b8b85611376565b600083610b2c866111b2565b610b3691906121e7565b905073ffffffffffffffffffffffffffffffffffffffff8516610b6057610b5d88826121e7565b90505b8b811015610ba8576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b6040805161016081018252608085015173ffffffffffffffffffffffffffffffffffffffff16815260c085015160208201526000918101610bf985806121fa565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252506060850135602082015260e0860151604090910190610c4e9061079d565b8152602001848060200190610c6391906121fa565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250336020820152604090810190610cb2908601866121fa565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509385525050604080516020818101835284825280860191909152815180820183529384528185019390935251606090930192610d4c923392500160609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b60405160208183030381529060405281525090506000610d84856080015173ffffffffffffffffffffffffffffffffffffffff161590565b610e7d57610dbb85608001517f00000000000000000000000000000000000000000000000000000000000000008760c00151611767565b6040517ffbe16ca700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063fbe16ca7908590610e33908690617809906004016123ea565b60206040518083038185885af1158015610e51573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610e769190612266565b9050610f53565b828260200151610e8d91906121e7565b602083015260c08501516040517ffbe16ca700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163fbe16ca791610f0d908690617809906004016123ea565b60206040518083038185885af1158015610f2b573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610f509190612266565b90505b60405181907ff19318a6980c94fb206f1e506fa7017ed9dd61959634e8fa128a38df4e527db790600090a27311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168560a0015173ffffffffffffffffffffffffffffffffffffffff16036110155760e085015185517ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b610ffe60208801886121fa565b60405161100c929190612571565b60405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18560405161104491906125be565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff831661107d576110788282611793565b505050565b611078838383611800565b806000036110c2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661111b5780341015611117576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61111773ffffffffffffffffffffffffffffffffffffffff831633308461186e565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146111b0576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff8216156111f5576111f073ffffffffffffffffffffffffffffffffffffffff8316306118cb565b6111f7565b475b92915050565b60608160008167ffffffffffffffff81111561121b5761121b611dab565b604051908082528060200260200182016040528015611244578160200160208202803683370190505b5090506000805b838110156112fe578686828181106112655761126561227f565b9050602002810190611277919061232d565b61128890608081019060600161236b565b9150611293826111b2565b8382815181106112a5576112a561227f565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166112f657348382815181106112de576112de61227f565b602002602001018181516112f291906121e7565b9052505b60010161124b565b509095945050505050565b60005b8181101561107857368383838181106113275761132761227f565b9050602002810190611339919061232d565b905061134b60e0820160c083016126d1565b1561136d5761136d611363606083016040840161236b565b8260800135611088565b5060010161130c565b602084015160408501518491849184908360018114611680576000868661139e6001856121e7565b8181106113ad576113ad61227f565b90506020028101906113bf919061232d565b6113d090608081019060600161236b565b9050600089815b8181101561157d57368d8d838181106113f2576113f261227f565b9050602002810190611404919061232d565b9050611433611419606083016040840161236b565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611496575061149661144c604083016020840161236b565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156114ad57506114ad61144c602083018361236b565b801561153257506115326114c460a08301836121fa565b6114d3916004916000916126ec565b6114dc91612716565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611568576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516115749082611900565b506001016113d7565b505060005b61158d6001856121e7565b8110156116785760008989838181106115a8576115a861227f565b90506020028101906115ba919061232d565b6115cb90608081019060600161236b565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461166f578682815181106116125761161261227f565b6020026020010151611623826111b2565b61162d91906121e7565b9250600073ffffffffffffffffffffffffffffffffffffffff821615611654576000611656565b865b9050831561166d5761166d828a61048b84886121e7565b505b50600101611582565b50505061175b565b8760005b8181101561175857368b8b8381811061169f5761169f61227f565b90506020028101906116b1919061232d565b90506116c6611419606083016040840161236b565b806116df57506116df61144c604083016020840161236b565b80156116f657506116f661144c602083018361236b565b801561170d575061170d6114c460a08301836121fa565b611743576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161174f9082611900565b50600101611684565b50505b50505050505050505050565b6110788383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b7d565b73ffffffffffffffffffffffffffffffffffffffff82166117e0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61111773ffffffffffffffffffffffffffffffffffffffff831682611cac565b73ffffffffffffffffffffffffffffffffffffffff821661184d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61107873ffffffffffffffffffffffffffffffffffffffff84168383611cc8565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166118bd57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b611918611910602083018361236b565b6017903b1190565b61194e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361198e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006119a3611419606085016040860161236b565b6119ae5760006119b4565b82608001355b905060006119d06119cb608086016060870161236b565b6111b2565b905081600003611a0757611a076119ed606086016040870161236b565b6119fd604087016020880161236b565b8660800135611767565b600080611a17602087018761236b565b73ffffffffffffffffffffffffffffffffffffffff1684611a3b60a08901896121fa565b604051611a4992919061275e565b60006040518083038185875af1925050503d8060008114611a86576040519150601f19603f3d011682016040523d82523d6000602084013e611a8b565b606091505b509150915081611a9e57611a9e81611d17565b6000611ab36119cb6080890160608a0161236b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611ae460208a018a61236b565b611af460608b0160408c0161236b565b611b0460808c0160608d0161236b565b8b60800135898711611b165786611b20565b611b208a886121e7565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611ca65773ffffffffffffffffffffffffffffffffffffffff8316611be6576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611c5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c7f9190612266565b1015611ca657611ca673ffffffffffffffffffffffffffffffffffffffff85168483611d21565b50505050565b60003860003884865af16111175763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611d0d576390b8ec186000526004601cfd5b6000603452505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716611d0d5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716611d0d57633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611dfe57611dfe611dab565b60405290565b600082601f830112611e1557600080fd5b813567ffffffffffffffff80821115611e3057611e30611dab565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611e7657611e76611dab565b81604052838152866020858801011115611e8f57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611ed357600080fd5b919050565b80358015158114611ed357600080fd5b60006101408284031215611efb57600080fd5b611f03611dda565b905081358152602082013567ffffffffffffffff80821115611f2457600080fd5b611f3085838601611e04565b60208401526040840135915080821115611f4957600080fd5b50611f5684828501611e04565b604083015250611f6860608301611eaf565b6060820152611f7960808301611eaf565b6080820152611f8a60a08301611eaf565b60a082015260c082013560c082015260e082013560e0820152610100611fb1818401611ed8565b90820152610120611fc3838201611ed8565b9082015292915050565b600060808284031215611fdf57600080fd5b50919050565b60008060008060608587031215611ffb57600080fd5b843567ffffffffffffffff8082111561201357600080fd5b61201f88838901611ee8565b9550602087013591508082111561203557600080fd5b818701915087601f83011261204957600080fd5b81358181111561205857600080fd5b8860208260051b850101111561206d57600080fd5b60208301955080945050604087013591508082111561208b57600080fd5b5061209887828801611fcd565b91505092959194509250565b600080604083850312156120b757600080fd5b823567ffffffffffffffff808211156120cf57600080fd5b6120db86838701611ee8565b935060208501359150808211156120f157600080fd5b506120fe85828601611fcd565b9150509250929050565b60006020828403121561211a57600080fd5b5035919050565b6000806020838503121561213457600080fd5b823567ffffffffffffffff8082111561214c57600080fd5b818501915085601f83011261216057600080fd5b81358181111561216f57600080fd5b8660208260061b850101111561218457600080fd5b60209290920196919550909350505050565b600080604083850312156121a957600080fd5b50508035926020909101359150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156111f7576111f76121b8565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261222f57600080fd5b83018035915067ffffffffffffffff82111561224a57600080fd5b60200191503681900382131561225f57600080fd5b9250929050565b60006020828403121561227857600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036122df576122df6121b8565b5060010190565b6020808252818101839052600090604080840186845b878110156123205781358352848201358584015291830191908301906001016122fc565b5090979650505050505050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261236157600080fd5b9190910192915050565b60006020828403121561237d57600080fd5b61080682611eaf565b6000815180845260005b818110156123ac57602081850181015186830182015201612390565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6080815261241160808201845173ffffffffffffffffffffffffffffffffffffffff169052565b602083015160a0820152600060408401516101608060c08501526124396101e0850183612386565b9150606086015160e08501526080860151610100818187015260a088015191507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff806101208188870301818901526124908685612386565b955060c08a015193506101406124bd818a018673ffffffffffffffffffffffffffffffffffffffff169052565b60e08b015194508289880301868a01526124d78786612386565b9650838b0151955082898803016101808a01526124f48787612386565b9650818b0151955082898803016101a08a01526125118787612386565b9650808b01519550505080878603016101c08801525050506125338282612386565b915050828103602084015261254c816000815260200190565b63ffffffff949094166040840152505080820360609091015260008152602001919050565b60208152816020820152818360408301376000818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b6020815281516020820152600060208301516101408060408501526125e7610160850183612386565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526126228382612386565b925050606085015161264c608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126bf8187018315159052565b90950151151593019290925250919050565b6000602082840312156126e357600080fd5b61080682611ed8565b600080858511156126fc57600080fd5b8386111561270957600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127565780818660040360031b1b83161692505b505092915050565b818382376000910190815291905056fea264697066735822122043dd65add706ca9ddb6f91010cb5a9030400389538ce4ea223a08a403a13675b64736f6c63430008110033";
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
