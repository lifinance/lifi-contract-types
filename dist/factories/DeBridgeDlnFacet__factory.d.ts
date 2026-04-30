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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b506040516129cd3803806129cd83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516129006100cd5f395f818160bf01528181610492015281816109b201528181610e8801528181610eee0152610fc801526129005ff3fe608060405260043610610063575f3560e01c80639f5e58f5116100415780639f5e58f514610106578063e677857814610125578063f2455b7114610138575f5ffd5b80635df39dde146100675780636636379a146100995780639eaeb24f146100ae575b5f5ffd5b348015610072575f5ffd5b50610086610081366004611eeb565b610157565b6040519081526020015b60405180910390f35b6100ac6100a7366004612137565b6101c6565b005b3480156100b9575f5ffd5b506100e17f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610090565b348015610111575f5ffd5b506100ac6101203660046121fd565b6105a1565b6100ac61013336600461226e565b6106cf565b348015610143575f5ffd5b506100ac6101523660046122d3565b610a6b565b5f8181527fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b602081905260408220548083036101bf576040517f9322741e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9392505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610241576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61025134476122f3565b905086806101000151610290576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156102ce576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102f18160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610328576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610365576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103a2576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866103b0602082018261232b565b90505f036103ea576040517f7a7ed98f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6103fb6060830160408401612393565b73ffffffffffffffffffffffffffffffffffffffff1603610448576040517f0f11701200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610455606082018261232b565b90505f0361048f576040517f7cf83a7000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335087f0a6040518163ffffffff1660e01b81526004016020604051808303815f875af11580156104fa573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061051e91906123ac565b60808d01518d5160c08f0151929350909161055f91908e8e3373ffffffffffffffffffffffffffffffffffffffff8716156105595787610b39565b5f610b39565b60c08e015261056f8d8b84610cd3565b50479450505050828211159050610594576105945f8461058f85856122f3565b611144565b50505f9091555050505050565b5f8190036105db576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105e3611179565b7fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b5f5b8281101561066157838382818110610620576106206123c3565b90506040020160200135825f015f868685818110610640576106406123c3565b604090810292909201358352506020820192909252015f2055600101610606565b50600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517f0cd20b776bdd48fad561fb65af5b002cf62ca0e0d5e89f165a9364d9da52a21b906106c290859085906123f0565b60405180910390a1505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161074a576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61075a34476122f3565b90508461077f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156107b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036107f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610830576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8461083e602082018261232b565b90505f03610878576040517f7a7ed98f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6108896060830160408401612393565b73ffffffffffffffffffffffffffffffffffffffff16036108d6576040517f0f11701200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108e3606082018261232b565b90505f0361091d576040517f7cf83a7000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061010001511561095b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610999576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109ab89608001518a60c001516111ee565b610a4389897f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335087f0a6040518163ffffffff1660e01b81526004016020604051808303815f875af1158015610a1a573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a3e91906123ac565b610cd3565b50479250505081811115610a6057610a605f8461058f85856122f3565b50505f909155505050565b610a73611179565b7fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96c547fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b9060ff16610af0576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8381526020828152604091829020849055905183815284917fdc55a9203281afff9f6c3a20ab84a4858a398d4b5050c87a02ca78e573d8b34b910160405180910390a2505050565b5f83808203610b74576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610b826001856122f3565b818110610b9157610b916123c3565b9050602002810190610ba39190612434565b610bb4906080810190606001612393565b90505f610bc0826112a2565b905073ffffffffffffffffffffffffffffffffffffffff8216610bea57610be734826122f3565b90505b5f610bf589896112ec565b9050610c0189896113f6565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610c3c818b8b85611462565b5f83610c47866112a2565b610c5191906122f3565b905073ffffffffffffffffffffffffffffffffffffffff8516610c7b57610c7888826122f3565b90505b8b811015610cc3576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b6040805161016081018252608085015173ffffffffffffffffffffffffffffffffffffffff16815260c085015160208201525f918101610d13858061232b565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050908252506080850135602082015260e0860151604090910190610d6790610157565b8152602001848060200190610d7c919061232b565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250602001610dc56060860160408701612393565b73ffffffffffffffffffffffffffffffffffffffff168152602001610ded606086018661232b565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92018290525093855250506040805160208082018352848252808601919091528151808201835284815282860152815190810190915282815260609093019290925260808701519293509173ffffffffffffffffffffffffffffffffffffffff16159050610f7157610eb185608001517f00000000000000000000000000000000000000000000000000000000000000008760c001516116b8565b6040517ffbe16ca700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063fbe16ca7908590610f29908690617809906004016124bc565b60206040518083038185885af1158015610f45573d5f5f3e3d5ffd5b50505050506040513d601f19601f82011682018060405250810190610f6a91906123ac565b9050611045565b828260200151610f8191906122f3565b602083015260c08501516040517ffbe16ca700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163fbe16ca791611001908690617809906004016124bc565b60206040518083038185885af115801561101d573d5f5f3e3d5ffd5b50505050506040513d601f19601f8201168201806040525081019061104291906123ac565b90505b60405181907ff19318a6980c94fb206f1e506fa7017ed9dd61959634e8fa128a38df4e527db7905f90a27311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168560a0015173ffffffffffffffffffffffffffffffffffffffff16036111065760e085015185517ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b6110ef602088018861232b565b6040516110fd9291906126b6565b60405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1856040516111359190612702565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff831661116e5761116982826116e4565b505050565b611169838383611751565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146111ec576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b805f03611227576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611280578034101561127c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61127c73ffffffffffffffffffffffffffffffffffffffff83163330846117bf565b5f73ffffffffffffffffffffffffffffffffffffffff8216156112e4576112df73ffffffffffffffffffffffffffffffffffffffff831630611817565b6112e6565b475b92915050565b6060815f8167ffffffffffffffff81111561130957611309611f02565b604051908082528060200260200182016040528015611332578160200160208202803683370190505b5090505f5f5b838110156113eb57868682818110611352576113526123c3565b90506020028101906113649190612434565b611375906080810190606001612393565b9150611380826112a2565b838281518110611392576113926123c3565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166113e357348382815181106113cb576113cb6123c3565b602002602001018181516113df91906122f3565b9052505b600101611338565b509095945050505050565b5f5b818110156111695736838383818110611413576114136123c3565b90506020028101906114259190612434565b905061143760e0820160c08301612815565b156114595761145961144f6060830160408401612393565b82608001356111ee565b506001016113f8565b60208401516040850151849184918490835f80805b8381101561169c57368c8c83818110611492576114926123c3565b90506020028101906114a49190612434565b90506114b36020820182612393565b93506114c56040820160208301612393565b9250611568846114d860a084018461232b565b6114e6916004915f9161282e565b6114ef91612855565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580611650575061159c6115826060830160408401612393565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156115d557508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611650575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15611687576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8d51611693908261184a565b50600101611477565b505050506116ad8585858585611abd565b505050505050505050565b6111698383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611cd4565b73ffffffffffffffffffffffffffffffffffffffff8216611731576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61127c73ffffffffffffffffffffffffffffffffffffffff831682611e01565b73ffffffffffffffffffffffffffffffffffffffff821661179e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61116973ffffffffffffffffffffffffffffffffffffffff84168383611e1a565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661180a57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61186261185a6020830183612393565b6017903b1190565b611898576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036118d7576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6118eb6115826060850160408601612393565b6118f5575f6118fb565b82608001355b90505f6119166119116080860160608701612393565b6112a2565b9050815f0361194c5761194c6119326060860160408701612393565b6119426040870160208801612393565b86608001356116b8565b5f8061195b6020870187612393565b73ffffffffffffffffffffffffffffffffffffffff168461197f60a089018961232b565b60405161198d9291906128bb565b5f6040518083038185875af1925050503d805f81146119c7576040519150601f19603f3d011682016040523d82523d5f602084013e6119cc565b606091505b5091509150816119df576119df81611e63565b5f6119f36119116080890160608a01612393565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611a2460208a018a612393565b611a3460608b0160408c01612393565b611a4460808c0160608d01612393565b8b60800135898711611a565786611a60565b611a608a886122f3565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611acc6001826122f3565b818110611adb57611adb6123c3565b9050602002810190611aed9190612434565b611afe906080810190606001612393565b90505f5f5f5f5f5f5f5b88811015611cc457611b1b60018a6122f3565b81108015611b2a575088600114155b15611c05578d8d82818110611b4157611b416123c3565b9050602002810190611b539190612434565b611b64906080810190606001612393565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611c05578a8181518110611bab57611bab6123c3565b6020026020010151611bbc876112a2565b611bc691906122f3565b965073ffffffffffffffffffffffffffffffffffffffff861615611bea575f611bec565b895b935083871115611c0557611c05868d61058f878b6122f3565b8d8d82818110611c1757611c176123c3565b9050602002810190611c299190612434565b611c3a906060810190604001612393565b9450611c45856112a2565b925073ffffffffffffffffffffffffffffffffffffffff851615611c69575f611c6b565b895b91508183118015611ca857508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611cbc57611cbc858d61058f85876122f3565b600101611b08565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611dfb5773ffffffffffffffffffffffffffffffffffffffff8316611d3d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611db0573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611dd491906123ac565b1015611dfb57611dfb73ffffffffffffffffffffffffffffffffffffffff85168483611e6d565b50505050565b5f385f3884865af161127c5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611e5a576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611e5a575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611e5a57633e3f8f735f526004601cfd5b5f60208284031215611efb575f5ffd5b5035919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611f5357611f53611f02565b60405290565b5f82601f830112611f68575f5ffd5b813567ffffffffffffffff811115611f8257611f82611f02565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611fcf57611fcf611f02565b604052818152838201602001851015611fe6575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114612025575f5ffd5b919050565b80358015158114612025575f5ffd5b5f610140828403121561204a575f5ffd5b612052611f2f565b823581529050602082013567ffffffffffffffff811115612071575f5ffd5b61207d84828501611f59565b602083015250604082013567ffffffffffffffff81111561209c575f5ffd5b6120a884828501611f59565b6040830152506120ba60608301612002565b60608201526120cb60808301612002565b60808201526120dc60a08301612002565b60a082015260c0828101359082015260e08083013590820152612102610100830161202a565b610100820152612115610120830161202a565b61012082015292915050565b5f60a08284031215612131575f5ffd5b50919050565b5f5f5f5f6060858703121561214a575f5ffd5b843567ffffffffffffffff811115612160575f5ffd5b61216c87828801612039565b945050602085013567ffffffffffffffff811115612188575f5ffd5b8501601f81018713612198575f5ffd5b803567ffffffffffffffff8111156121ae575f5ffd5b8760208260051b84010111156121c2575f5ffd5b60209190910193509150604085013567ffffffffffffffff8111156121e5575f5ffd5b6121f187828801612121565b91505092959194509250565b5f5f6020838503121561220e575f5ffd5b823567ffffffffffffffff811115612224575f5ffd5b8301601f81018513612234575f5ffd5b803567ffffffffffffffff81111561224a575f5ffd5b8560208260061b840101111561225e575f5ffd5b6020919091019590945092505050565b5f5f6040838503121561227f575f5ffd5b823567ffffffffffffffff811115612295575f5ffd5b6122a185828601612039565b925050602083013567ffffffffffffffff8111156122bd575f5ffd5b6122c985828601612121565b9150509250929050565b5f5f604083850312156122e4575f5ffd5b50508035926020909101359150565b818103818111156112e6577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261235e575f5ffd5b83018035915067ffffffffffffffff821115612378575f5ffd5b60200191503681900382131561238c575f5ffd5b9250929050565b5f602082840312156123a3575f5ffd5b6101bf82612002565b5f602082840312156123bc575f5ffd5b5051919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b602080825281018290525f8360408301825b8581101561242a57823582526020808401359083015260409283019290910190600101612402565b5095945050505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612466575f5ffd5b9190910192915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b608081526124e360808201845173ffffffffffffffffffffffffffffffffffffffff169052565b602083015160a08201525f604084015161016060c08401526125096101e0840182612470565b9050606085015160e0840152608085015161010084015260a08501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808483030161012085015261255a8282612470565b91505060c085015161258561014085018273ffffffffffffffffffffffffffffffffffffffff169052565b5060e08501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80848303016101608501526125c08282612470565b9150506101008501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80848303016101808501526125fe8282612470565b9150506101208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80848303016101a085015261263c8282612470565b9150506101408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80848303016101c085015261267a8282612470565b9150508281036020840152612692815f815260200190565b63ffffffff94909416604084015250508082036060909101525f8152602001919050565b60208152816020820152818360408301375f818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b60208152815160208201525f60208301516101406040840152612729610160840182612470565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526127648282612470565b915050606084015161278e608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516127fd61012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215612825575f5ffd5b6101bf8261202a565b5f5f8585111561283c575f5ffd5b83861115612848575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156128b4577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f910190815291905056fea2646970667358221220d0d64d4968077b414c79633569d46cc97c18c34f1b0d80440838c9f9dcfd669f64736f6c634300081d0033";
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
                readonly name: "givePatchAuthoritySrc";
                readonly type: "address";
                readonly internalType: "address";
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
                readonly name: "givePatchAuthoritySrc";
                readonly type: "address";
                readonly internalType: "address";
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
        readonly name: "EmptyOrderAuthorityDst";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "EmptyPatchAuthority";
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
