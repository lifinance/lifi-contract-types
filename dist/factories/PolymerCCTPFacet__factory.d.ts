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
    static readonly bytecode = "0x60e060405234801561000f575f5ffd5b506040516125f63803806125f683398101604081905261002e916100b3565b6001600160a01b038316158061004b57506001600160a01b038216155b8061005d57506001600160a01b038116155b1561007b576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0392831660805290821660a0521660c0526100f3565b80516001600160a01b03811681146100ae575f5ffd5b919050565b5f5f5f606084860312156100c5575f5ffd5b6100ce84610098565b92506100dc60208501610098565b91506100ea60408501610098565b90509250925092565b60805160a05160c05161248d6101695f395f818161011c015261080901525f818160c0015281816102710152818161037a015281816104c9015281816106b4015281816107e8015281816109360152610af201525f818161014f01528181610666015281816108d30152610aab015261248d5ff3fe608060405260043610610063575f3560e01c806389a302711161004157806389a30271146100af5780638eb8fd561461010b578063b8b32ff71461013e575f5ffd5b8063173457ef14610067578063780c82ab14610088578063895359be1461009b575b5f5ffd5b348015610072575f5ffd5b50610086610081366004611fca565b610171565b005b610086610096366004612016565b6103bd565b3480156100a6575f5ffd5b50610086610621565b3480156100ba575f5ffd5b506100e27f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b348015610116575f5ffd5b506100e27f000000000000000000000000000000000000000000000000000000000000000081565b348015610149575f5ffd5b506100e27f000000000000000000000000000000000000000000000000000000000000000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101ec576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560c0830151839083905f03610231576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e001510361026e576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b847f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102f9576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610100015115610337576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610375576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103a57f000000000000000000000000000000000000000000000000000000000000000033308c60c00151610721565b6103af89896107e3565b50505f909455505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610438576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61044834476120c3565b905086848160c001515f03610489576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e00151036104c6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b887f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff1614610551576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a80610100015161058e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b806101200151156105cc576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105e08d5f01518e60c001518e8e33610d58565b60c08e01526105ef8d8b6107e3565b50479450505050828211159050610614576106145f8461060f85856120c3565b610e9a565b50505f9091555050505050565b610629610ecf565b6040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60248301527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303815f875af11580156106fa573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061071e91906120fb565b50565b73ffffffffffffffffffffffffffffffffffffffff841661076e576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166107bb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107dd73ffffffffffffffffffffffffffffffffffffffff8516848484610f44565b50505050565b61082f7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008335610f9c565b60c08201515f90610842908335906120c3565b60e084015160a08501519192509073ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114610a185760a084015173ffffffffffffffffffffffffffffffffffffffff166108d1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638e0250ee836109178461100a565b60a08089015173ffffffffffffffffffffffffffffffffffffffff16907f0000000000000000000000000000000000000000000000000000000000000000905f9060208b01359061096d908c0160808d0161211d565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019790975263ffffffff9586166024880152604487019490945273ffffffffffffffffffffffffffffffffffffffff9092166064860152608485015260a48401521660c482015260e4015f604051808303815f87803b1580156109fd575f5ffd5b505af1158015610a0f573d5f5f3e3d5ffd5b50505050610c12565b660416edef1601be81145f81610a32578460400135610a38565b84606001355b905080610aa9578115610a77576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638e0250ee85610aef8661100a565b847f00000000000000000000000000000000000000000000000000000000000000005f60208c0135610b2760a08e0160808f0161211d565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019790975263ffffffff9586166024880152604487019490945273ffffffffffffffffffffffffffffffffffffffff9092166064860152608485015260a48401521660c482015260e4015f604051808303815f87803b158015610bb7575f5ffd5b505af1158015610bc9573d5f5f3e3d5ffd5b5050505082865f01517f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c8760400135604051610c0791815260200190565b60405180910390a350505b60c08401517f324bb680d8f34b685b89431a2429f01c9b71c00ab9a18e3ad887c464200f1c5b908435610c4b60a087016080880161211d565b60408051938452602084019290925263ffffffff169082015260600160405180910390a17fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1604051806101400160405280865f015181526020018660200151815260200186604001518152602001866060015173ffffffffffffffffffffffffffffffffffffffff168152602001866080015173ffffffffffffffffffffffffffffffffffffffff1681526020018660a0015173ffffffffffffffffffffffffffffffffffffffff168152602001848152602001838152602001866101000151151581526020018661012001511515815250604051610d4a919061218c565b60405180910390a150505050565b5f82808203610d93576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610da16001856120c3565b818110610db057610db061229f565b9050602002810190610dc291906122cc565b610dd3906080810190606001612308565b90505f610ddf8261116e565b905073ffffffffffffffffffffffffffffffffffffffff8216610e0957610e0634826120c3565b90505b5f610e1488886111b8565b9050610e2088886112c2565b610e2d8a8989898561132e565b5f82610e388561116e565b610e4291906120c3565b905089811015610e8c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ec457610ebf8282611576565b505050565b610ebf838383610f9c565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610f42576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610f8f57637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff8216610fe9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ebf73ffffffffffffffffffffffffffffffffffffffff841683836115e7565b5f8160010361101a57505f919050565b8161a86a0361102b57506001919050565b81600a0361103b57506002919050565b8161a4b10361104c57506003919050565b660416edef1601be820361106257506005919050565b816121050361107357506006919050565b8160890361108357506007919050565b816082036110935750600a919050565b8161e708036110a45750600b919050565b8162013d48036110b65750600c919050565b816092036110c65750600d919050565b816101e0036110d75750600e919050565b81608f036110e75750600f919050565b81610531036110f857506010919050565b8160320361110857506012919050565b816103e70361111957506013919050565b8161def10361112a57506015919050565b81620182320361113c57506016919050565b6040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff8216156111b0576111ab73ffffffffffffffffffffffffffffffffffffffff831630611630565b6111b2565b475b92915050565b6060815f8167ffffffffffffffff8111156111d5576111d5611d8c565b6040519080825280602002602001820160405280156111fe578160200160208202803683370190505b5090505f5f5b838110156112b75786868281811061121e5761121e61229f565b905060200281019061123091906122cc565b611241906080810190606001612308565b915061124c8261116e565b83828151811061125e5761125e61229f565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166112af57348382815181106112975761129761229f565b602002602001018181516112ab91906120c3565b9052505b600101611204565b509095945050505050565b5f5b81811015610ebf57368383838181106112df576112df61229f565b90506020028101906112f191906122cc565b905061130360e0820160c08301612321565b156113255761132561131b6060830160408401612308565b8260800135611663565b506001016112c4565b83838383825f80805b8381101561155a57368c8c838181106113525761135261229f565b905060200281019061136491906122cc565b90506113736020820182612308565b93506113856040820160208301612308565b92506114288461139860a084018461233c565b6113a6916004915f916123a4565b6113af916123cb565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580611510575061145c6114426060830160408401612308565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561149557508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611510575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15611547576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115518e82611713565b50600101611337565b5050505061156b848484845f611986565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff82166115c3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115e373ffffffffffffffffffffffffffffffffffffffff831682611b9d565b5050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611627576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f0361169c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166116f157803410156115e3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115e373ffffffffffffffffffffffffffffffffffffffff8316333084610f44565b61172b6117236020830183612308565b6017903b1190565b611761576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036117a0576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6117b46114426060850160408601612308565b6117be575f6117c4565b82608001355b90505f6117df6117da6080860160608701612308565b61116e565b9050815f03611815576118156117fb6060860160408701612308565b61180b6040870160208801612308565b8660800135611bb6565b5f806118246020870187612308565b73ffffffffffffffffffffffffffffffffffffffff168461184860a089018961233c565b604051611856929190612431565b5f6040518083038185875af1925050503d805f8114611890576040519150601f19603f3d011682016040523d82523d5f602084013e611895565b606091505b5091509150816118a8576118a881611be2565b5f6118bc6117da6080890160608a01612308565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886118ed60208a018a612308565b6118fd60608b0160408c01612308565b61190d60808c0160608d01612308565b8b6080013589871161191f5786611929565b6119298a886120c3565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826119956001826120c3565b8181106119a4576119a461229f565b90506020028101906119b691906122cc565b6119c7906080810190606001612308565b90505f5f5f5f5f5f5f5b88811015611b8d576119e460018a6120c3565b811080156119f3575088600114155b15611ace578d8d82818110611a0a57611a0a61229f565b9050602002810190611a1c91906122cc565b611a2d906080810190606001612308565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611ace578a8181518110611a7457611a7461229f565b6020026020010151611a858761116e565b611a8f91906120c3565b965073ffffffffffffffffffffffffffffffffffffffff861615611ab3575f611ab5565b895b935083871115611ace57611ace868d61060f878b6120c3565b8d8d82818110611ae057611ae061229f565b9050602002810190611af291906122cc565b611b03906060810190604001612308565b9450611b0e8561116e565b925073ffffffffffffffffffffffffffffffffffffffff851615611b32575f611b34565b895b91508183118015611b7157508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611b8557611b85858d61060f85876120c3565b6001016119d1565b5050505050505050505050505050565b5f385f3884865af16115e35763b12d13eb5f526004601cfd5b610ebf8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611bec565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156107dd5773ffffffffffffffffffffffffffffffffffffffff8316611c55576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611cc8573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611cec9190612440565b10156107dd576107dd73ffffffffffffffffffffffffffffffffffffffff8516848381601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611627575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661162757633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611ddd57611ddd611d8c565b60405290565b5f82601f830112611df2575f5ffd5b813567ffffffffffffffff811115611e0c57611e0c611d8c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611e5957611e59611d8c565b604052818152838201602001851015611e70575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611eaf575f5ffd5b919050565b801515811461071e575f5ffd5b8035611eaf81611eb4565b5f6101408284031215611edd575f5ffd5b611ee5611db9565b823581529050602082013567ffffffffffffffff811115611f04575f5ffd5b611f1084828501611de3565b602083015250604082013567ffffffffffffffff811115611f2f575f5ffd5b611f3b84828501611de3565b604083015250611f4d60608301611e8c565b6060820152611f5e60808301611e8c565b6080820152611f6f60a08301611e8c565b60a082015260c0828101359082015260e08083013590820152611f956101008301611ec1565b610100820152611fa86101208301611ec1565b61012082015292915050565b5f60a08284031215611fc4575f5ffd5b50919050565b5f5f60c08385031215611fdb575f5ffd5b823567ffffffffffffffff811115611ff1575f5ffd5b611ffd85828601611ecc565b92505061200d8460208501611fb4565b90509250929050565b5f5f5f5f60e08587031215612029575f5ffd5b843567ffffffffffffffff81111561203f575f5ffd5b61204b87828801611ecc565b945050602085013567ffffffffffffffff811115612067575f5ffd5b8501601f81018713612077575f5ffd5b803567ffffffffffffffff81111561208d575f5ffd5b8760208260051b84010111156120a1575f5ffd5b602091909101935091506120b88660408701611fb4565b905092959194509250565b818103818111156111b2577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6020828403121561210b575f5ffd5b815161211681611eb4565b9392505050565b5f6020828403121561212d575f5ffd5b813563ffffffff81168114612116575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526121b3610160840182612140565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526121ee8282612140565b9150506060840151612218608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161228761012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126122fe575f5ffd5b9190910192915050565b5f60208284031215612318575f5ffd5b61211682611e8c565b5f60208284031215612331575f5ffd5b813561211681611eb4565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261236f575f5ffd5b83018035915067ffffffffffffffff821115612389575f5ffd5b60200191503681900382131561239d575f5ffd5b9250929050565b5f5f858511156123b2575f5ffd5b838611156123be575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561242a577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612450575f5ffd5b505191905056fea26469706673582212200298cf1b05847edf33785e3959f016fe1a8816e3359d87ab013f3c9eb5d3f38264736f6c634300081d0033";
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
