import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PolymerCCTPFacet, PolymerCCTPFacetInterface } from "../PolymerCCTPFacet";
type PolymerCCTPFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PolymerCCTPFacet__factory extends ContractFactory {
    constructor(...args: PolymerCCTPFacetConstructorParams);
    deploy(_tokenMessenger: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, _polymerFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PolymerCCTPFacet>;
    getDeployTransaction(_tokenMessenger: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, _polymerFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PolymerCCTPFacet;
    connect(signer: Signer): PolymerCCTPFacet__factory;
    static readonly bytecode = "0x60e060405234801561000f575f5ffd5b506040516126de3803806126de83398101604081905261002e916100b3565b6001600160a01b038316158061004b57506001600160a01b038216155b8061005d57506001600160a01b038116155b1561007b576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0392831660805290821660a0521660c0526100f3565b80516001600160a01b03811681146100ae575f5ffd5b919050565b5f5f5f606084860312156100c5575f5ffd5b6100ce84610098565b92506100dc60208501610098565b91506100ea60408501610098565b90509250925092565b60805160a05160c0516125756101695f395f818161011c015261080901525f818160c0015281816102710152818161037a015281816104c9015281816106b4015281816107e8015281816109360152610af201525f818161014f01528181610666015281816108d30152610aab01526125755ff3fe608060405260043610610063575f3560e01c806389a302711161004157806389a30271146100af5780638eb8fd561461010b578063b8b32ff71461013e575f5ffd5b8063173457ef14610067578063780c82ab14610088578063895359be1461009b575b5f5ffd5b348015610072575f5ffd5b506100866100813660046120b2565b610171565b005b6100866100963660046120fe565b6103bd565b3480156100a6575f5ffd5b50610086610621565b3480156100ba575f5ffd5b506100e27f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b348015610116575f5ffd5b506100e27f000000000000000000000000000000000000000000000000000000000000000081565b348015610149575f5ffd5b506100e27f000000000000000000000000000000000000000000000000000000000000000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101ec576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560c0830151839083905f03610231576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e001510361026e576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b847f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102f9576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610100015115610337576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610375576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103a57f000000000000000000000000000000000000000000000000000000000000000033308c60c00151610721565b6103af89896107e3565b50505f909455505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610438576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61044834476121ab565b905086848160c001515f03610489576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e00151036104c6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b887f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff1614610551576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a80610100015161058e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b806101200151156105cc576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105e08d5f01518e60c001518e8e33610d58565b60c08e01526105ef8d8b6107e3565b50479450505050828211159050610614576106145f8461060f85856121ab565b610e9a565b50505f9091555050505050565b610629610ecf565b6040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60248301527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303815f875af11580156106fa573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061071e91906121e3565b50565b73ffffffffffffffffffffffffffffffffffffffff841661076e576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166107bb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107dd73ffffffffffffffffffffffffffffffffffffffff8516848484610f44565b50505050565b61082f7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008335610f9c565b60c08201515f90610842908335906121ab565b60e084015160a08501519192509073ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114610a185760a084015173ffffffffffffffffffffffffffffffffffffffff166108d1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638e0250ee83610917846110e1565b60a08089015173ffffffffffffffffffffffffffffffffffffffff16907f0000000000000000000000000000000000000000000000000000000000000000905f9060208b01359061096d908c0160808d01612205565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019790975263ffffffff9586166024880152604487019490945273ffffffffffffffffffffffffffffffffffffffff9092166064860152608485015260a48401521660c482015260e4015f604051808303815f87803b1580156109fd575f5ffd5b505af1158015610a0f573d5f5f3e3d5ffd5b50505050610c12565b660416edef1601be81145f81610a32578460400135610a38565b84606001355b905080610aa9578115610a77576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638e0250ee85610aef866110e1565b847f00000000000000000000000000000000000000000000000000000000000000005f60208c0135610b2760a08e0160808f01612205565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019790975263ffffffff9586166024880152604487019490945273ffffffffffffffffffffffffffffffffffffffff9092166064860152608485015260a48401521660c482015260e4015f604051808303815f87803b158015610bb7575f5ffd5b505af1158015610bc9573d5f5f3e3d5ffd5b5050505082865f01517f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c8760400135604051610c0791815260200190565b60405180910390a350505b60c08401517f324bb680d8f34b685b89431a2429f01c9b71c00ab9a18e3ad887c464200f1c5b908435610c4b60a0870160808801612205565b60408051938452602084019290925263ffffffff169082015260600160405180910390a17fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1604051806101400160405280865f015181526020018660200151815260200186604001518152602001866060015173ffffffffffffffffffffffffffffffffffffffff168152602001866080015173ffffffffffffffffffffffffffffffffffffffff1681526020018660a0015173ffffffffffffffffffffffffffffffffffffffff168152602001848152602001838152602001866101000151151581526020018661012001511515815250604051610d4a9190612274565b60405180910390a150505050565b5f82808203610d93576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610da16001856121ab565b818110610db057610db0612387565b9050602002810190610dc291906123b4565b610dd39060808101906060016123f0565b90505f610ddf82611256565b905073ffffffffffffffffffffffffffffffffffffffff8216610e0957610e0634826121ab565b90505b5f610e1488886112a0565b9050610e2088886113aa565b610e2d8a89898985611416565b5f82610e3885611256565b610e4291906121ab565b905089811015610e8c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ec457610ebf828261165e565b505050565b610ebf838383610f9c565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610f42576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610f8f57637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff8216610fe9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b632b6653dc46148015611025575073ffffffffffffffffffffffffffffffffffffffff831673a614f803b6fd780986a42c78ec9c7f77e6ded13c145b156110c0576040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af115801561109c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107dd91906121e3565b610ebf73ffffffffffffffffffffffffffffffffffffffff841683836116cf565b5f816001036110f157505f919050565b8161a86a0361110257506001919050565b81600a0361111257506002919050565b8161a4b10361112357506003919050565b660416edef1601be820361113957506005919050565b816121050361114a57506006919050565b8160890361115a57506007919050565b8160820361116a5750600a919050565b8161e7080361117b5750600b919050565b8162013d480361118d5750600c919050565b8160920361119d5750600d919050565b816101e0036111ae5750600e919050565b81608f036111be5750600f919050565b81610531036111cf57506010919050565b816032036111df57506012919050565b816103e7036111f057506013919050565b8161def10361120157506015919050565b81620182320361121357506016919050565b81610688036112245750601f919050565b6040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff8216156112985761129373ffffffffffffffffffffffffffffffffffffffff831630611718565b61129a565b475b92915050565b6060815f8167ffffffffffffffff8111156112bd576112bd611e74565b6040519080825280602002602001820160405280156112e6578160200160208202803683370190505b5090505f5f5b8381101561139f5786868281811061130657611306612387565b905060200281019061131891906123b4565b6113299060808101906060016123f0565b915061133482611256565b83828151811061134657611346612387565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611397573483828151811061137f5761137f612387565b6020026020010181815161139391906121ab565b9052505b6001016112ec565b509095945050505050565b5f5b81811015610ebf57368383838181106113c7576113c7612387565b90506020028101906113d991906123b4565b90506113eb60e0820160c08301612409565b1561140d5761140d61140360608301604084016123f0565b826080013561174b565b506001016113ac565b83838383825f80805b8381101561164257368c8c8381811061143a5761143a612387565b905060200281019061144c91906123b4565b905061145b60208201826123f0565b935061146d60408201602083016123f0565b92506115108461148060a0840184612424565b61148e916004915f9161248c565b611497916124b3565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806115f8575061154461152a60608301604084016123f0565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561157d57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b80156115f8575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b1561162f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116398e826117fb565b5060010161141f565b50505050611653848484845f611a6e565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff82166116ab576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116cb73ffffffffffffffffffffffffffffffffffffffff831682611c85565b5050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661170f576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f03611784576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166117d957803410156116cb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116cb73ffffffffffffffffffffffffffffffffffffffff8316333084610f44565b61181361180b60208301836123f0565b6017903b1190565b611849576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611888576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61189c61152a60608501604086016123f0565b6118a6575f6118ac565b82608001355b90505f6118c76118c260808601606087016123f0565b611256565b9050815f036118fd576118fd6118e360608601604087016123f0565b6118f360408701602088016123f0565b8660800135611c9e565b5f8061190c60208701876123f0565b73ffffffffffffffffffffffffffffffffffffffff168461193060a0890189612424565b60405161193e929190612519565b5f6040518083038185875af1925050503d805f8114611978576040519150601f19603f3d011682016040523d82523d5f602084013e61197d565b606091505b5091509150816119905761199081611cca565b5f6119a46118c26080890160608a016123f0565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886119d560208a018a6123f0565b6119e560608b0160408c016123f0565b6119f560808c0160608d016123f0565b8b60800135898711611a075786611a11565b611a118a886121ab565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611a7d6001826121ab565b818110611a8c57611a8c612387565b9050602002810190611a9e91906123b4565b611aaf9060808101906060016123f0565b90505f5f5f5f5f5f5f5b88811015611c7557611acc60018a6121ab565b81108015611adb575088600114155b15611bb6578d8d82818110611af257611af2612387565b9050602002810190611b0491906123b4565b611b159060808101906060016123f0565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611bb6578a8181518110611b5c57611b5c612387565b6020026020010151611b6d87611256565b611b7791906121ab565b965073ffffffffffffffffffffffffffffffffffffffff861615611b9b575f611b9d565b895b935083871115611bb657611bb6868d61060f878b6121ab565b8d8d82818110611bc857611bc8612387565b9050602002810190611bda91906123b4565b611beb9060608101906040016123f0565b9450611bf685611256565b925073ffffffffffffffffffffffffffffffffffffffff851615611c1a575f611c1c565b895b91508183118015611c5957508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611c6d57611c6d858d61060f85876121ab565b600101611ab9565b5050505050505050505050505050565b5f385f3884865af16116cb5763b12d13eb5f526004601cfd5b610ebf8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611cd4565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156107dd5773ffffffffffffffffffffffffffffffffffffffff8316611d3d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611db0573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611dd49190612528565b10156107dd576107dd73ffffffffffffffffffffffffffffffffffffffff8516848381601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661170f575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661170f57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611ec557611ec5611e74565b60405290565b5f82601f830112611eda575f5ffd5b813567ffffffffffffffff811115611ef457611ef4611e74565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611f4157611f41611e74565b604052818152838201602001851015611f58575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f97575f5ffd5b919050565b801515811461071e575f5ffd5b8035611f9781611f9c565b5f6101408284031215611fc5575f5ffd5b611fcd611ea1565b823581529050602082013567ffffffffffffffff811115611fec575f5ffd5b611ff884828501611ecb565b602083015250604082013567ffffffffffffffff811115612017575f5ffd5b61202384828501611ecb565b60408301525061203560608301611f74565b606082015261204660808301611f74565b608082015261205760a08301611f74565b60a082015260c0828101359082015260e0808301359082015261207d6101008301611fa9565b6101008201526120906101208301611fa9565b61012082015292915050565b5f60a082840312156120ac575f5ffd5b50919050565b5f5f60c083850312156120c3575f5ffd5b823567ffffffffffffffff8111156120d9575f5ffd5b6120e585828601611fb4565b9250506120f5846020850161209c565b90509250929050565b5f5f5f5f60e08587031215612111575f5ffd5b843567ffffffffffffffff811115612127575f5ffd5b61213387828801611fb4565b945050602085013567ffffffffffffffff81111561214f575f5ffd5b8501601f8101871361215f575f5ffd5b803567ffffffffffffffff811115612175575f5ffd5b8760208260051b8401011115612189575f5ffd5b602091909101935091506121a0866040870161209c565b905092959194509250565b8181038181111561129a577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f602082840312156121f3575f5ffd5b81516121fe81611f9c565b9392505050565b5f60208284031215612215575f5ffd5b813563ffffffff811681146121fe575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f6020830151610140604084015261229b610160840182612228565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526122d68282612228565b9150506060840151612300608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161236f61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126123e6575f5ffd5b9190910192915050565b5f60208284031215612400575f5ffd5b6121fe82611f74565b5f60208284031215612419575f5ffd5b81356121fe81611f9c565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612457575f5ffd5b83018035915067ffffffffffffffff821115612471575f5ffd5b602001915036819003821315612485575f5ffd5b9250929050565b5f5f8585111561249a575f5ffd5b838611156124a6575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612512577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612538575f5ffd5b505191905056fea26469706673582212206324d87904da2df1b0a67cf66126d85afb8c4c57460a7dfc3f5e9d9dc322074664736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_tokenMessenger";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_usdc";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_polymerFeeReceiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "POLYMER_FEE_RECEIVER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "TOKEN_MESSENGER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ITokenMessenger";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "USDC";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initPolymerCCTP";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaPolymerCCTP";
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
            readonly name: "_polymerData";
            readonly type: "tuple";
            readonly internalType: "struct PolymerCCTPFacet.PolymerCCTPData";
            readonly components: readonly [{
                readonly name: "polymerTokenFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxCCTPFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "solanaReceiverATA";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "minFinalityThreshold";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaPolymerCCTP";
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
            readonly name: "_polymerData";
            readonly type: "tuple";
            readonly internalType: "struct PolymerCCTPFacet.PolymerCCTPData";
            readonly components: readonly [{
                readonly name: "polymerTokenFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxCCTPFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "solanaReceiverATA";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "minFinalityThreshold";
                readonly type: "uint32";
                readonly internalType: "uint32";
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
        readonly type: "event";
        readonly name: "PolymerCCTPFeeSent";
        readonly inputs: readonly [{
            readonly name: "bridgeAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "polymerFee";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "minFinalityThreshold";
            readonly type: "uint32";
            readonly indexed: false;
            readonly internalType: "uint32";
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
        readonly name: "InvalidCallData";
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
        readonly name: "InvalidSendingToken";
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
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): PolymerCCTPFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PolymerCCTPFacet;
}
export {};
