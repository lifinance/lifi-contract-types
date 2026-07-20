import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SupersetFacet, SupersetFacetInterface } from "../SupersetFacet";
type SupersetFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SupersetFacet__factory extends ContractFactory {
    constructor(...args: SupersetFacetConstructorParams);
    deploy(_poolManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SupersetFacet>;
    getDeployTransaction(_poolManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SupersetFacet;
    connect(signer: Signer): SupersetFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b50604051612cae380380612cae83398101604081905261002e9161006e565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b03166080524661a4b11460a05261009b565b5f6020828403121561007e575f5ffd5b81516001600160a01b0381168114610094575f5ffd5b9392505050565b60805160a051612bd06100de5f395f8181610133015261113301525f818160b701528181610d13015281816111080152818161115901526112110152612bd05ff3fe60806040526004361061006e575f3560e01c80638be876351161004c5780638be87635146101035780638dabad7d14610122578063edc3f41e14610165578063f26e657f14610199575f5ffd5b80630691ff78146100725780635b1ee8401461008757806362308e85146100a6575b5f5ffd5b6100856100803660046121c9565b6101ac565b005b348015610092575f5ffd5b506100856100a1366004612233565b610484565b3480156100b1575f5ffd5b506100d97f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561010e575f5ffd5b5061008561011d366004612233565b610662565b34801561012d575f5ffd5b506101557f000000000000000000000000000000000000000000000000000000000000000081565b60405190151581526020016100fa565b348015610170575f5ffd5b5061018461017f3660046122a4565b61084c565b60405163ffffffff90911681526020016100fa565b6100856101a736600461250b565b6108c6565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610227576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561023b60608301604084016125d1565b5f61024634476125f3565b90506102518561262b565b60a081015173ffffffffffffffffffffffffffffffffffffffff166102a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036102df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361031c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103258661262b565b608081015173ffffffffffffffffffffffffffffffffffffffff16610376576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61037f8761262b565b806101000151156103bc576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103c58861262b565b80610120015115610402576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61042060e08a013561041a60a08c0160808d016125d1565b8a610c65565b61043d61043360a08b0160808c016125d1565b8a60c0013561104a565b6104576104498a61262b565b6104528a612649565b6110fe565b50479250505081811115610479576104795f8461047485856125f3565b61130a565b50505f909155505050565b5f8190036104be576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104c661133f565b7fb7044196c565a2aff8506fab0177dbb71e8b28af17f59b6e53300a128ff59c11547fb7044196c565a2aff8506fab0177dbb71e8b28af17f59b6e53300a128ff59c109060ff16610543576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b8281101561065c575f8484838181106105605761056061270a565b9050604002015f013590505f85858481811061057e5761057e61270a565b90506040020160200160208101906105969190612737565b90508115806105a9575063ffffffff8116155b156105e0576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f828152602085815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff8516908117909155915191825283917f010b01c68d87c7ce7ee9bd2f5c44a9fc5058745365df809b7326827610200901910160405180910390a25050600101610545565b50505050565b5f81900361069c576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106a461133f565b7fb7044196c565a2aff8506fab0177dbb71e8b28af17f59b6e53300a128ff59c105f5b828110156107de575f8484838181106106e2576106e261270a565b9050604002015f013590505f8585848181106107005761070061270a565b90506040020160200160208101906107189190612737565b905081158061072b575063ffffffff8116155b15610762576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f828152602085815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff8516908117909155915191825283917f010b01c68d87c7ce7ee9bd2f5c44a9fc5058745365df809b7326827610200901910160405180910390a250506001016106c7565b50600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517f11540ef30f5d30a57780ceb12458f32059618a0213feb7db9e81dc752199d6479061083f9085908590612750565b60405180910390a1505050565b5f8181527fb7044196c565a2aff8506fab0177dbb71e8b28af17f59b6e53300a128ff59c10602052604081205463ffffffff16908190036108c1576040517fa5dab5fe000000000000000000000000000000000000000000000000000000008152600481018390526024015b60405180910390fd5b919050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610941576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561095560608301604084016125d1565b5f61096034476125f3565b90508680610100015161099f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156109dd576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88610a008160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610a37576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610a74576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610ab1576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b89610ad4816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610b0b576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8815801590610b88575060808b015173ffffffffffffffffffffffffffffffffffffffff168a8a610b3d6001826125f3565b818110610b4c57610b4c61270a565b9050602002810190610b5e91906127a1565b610b6f9060808101906060016125d1565b73ffffffffffffffffffffffffffffffffffffffff1614155b15610bbf576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bd28b60e001518c608001518a610c65565b5f8b60c001519050610c058c5f01518d60c001518d8d8d6040016020810190610bfb91906125d1565b8e60e001356113b4565b60c08d01525f610c148a612649565b9050610c298a602001358e60c001518461154a565b6020820152610c388d826110fe565b50479450505050828211159050610c5857610c585f8461047485856125f3565b50505f9091555050505050565b6020610c7182806127dd565b90501015610cab576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80602001355f03610ce8576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610cf382806127dd565b610d01916020915f91612845565b810190610d0e91906122a4565b90505f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638a670baa6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d7a573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d9e919061286c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff166396497efb846040518263ffffffff1660e01b8152600401610df291815260200190565b602060405180830381865afa158015610e0d573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e31919061286c565b73ffffffffffffffffffffffffffffffffffffffff1614610e7e576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610e8f60608501604086016125d1565b73ffffffffffffffffffffffffffffffffffffffff1603610edc576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610eed60808501606086016125d1565b73ffffffffffffffffffffffffffffffffffffffff161480610f345750610f1a60808401606085016125d1565b73ffffffffffffffffffffffffffffffffffffffff163b15155b15610f6b576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8260e00135341015610fa9576040517f35898e6e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8260800135421115610fe7576040517f1ab7da6b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ff760c0840160a08501612737565b63ffffffff166110068661084c565b63ffffffff1614611043576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050565b805f03611083576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110dc57803410156110d8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6110d873ffffffffffffffffffffffffffffffffffffffff831633308461156f565b61113182608001517f00000000000000000000000000000000000000000000000000000000000000008460c001516115c7565b7f00000000000000000000000000000000000000000000000000000000000000001561120f577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bf7d32278260e00151835f01518560c0015185602001518760a00151876060015188608001518960a001516040518963ffffffff1660e01b81526004016111dc97969594939291906128d3565b5f604051808303818588803b1580156111f3575f5ffd5b505af1158015611205573d5f5f3e3d5ffd5b50505050506112cf565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630bb26a718260e00151835f01518560c0015185602001518760a001518760400151886060015189608001518a60a001518b60c001516040518b63ffffffff1660e01b81526004016112a099989796959493929190612949565b5f604051808303818588803b1580156112b7575f5ffd5b505af11580156112c9573d5f5f3e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516112fe91906129e2565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166113345761132f82826115f3565b505050565b61132f838383611660565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146113b2576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f838082036113ef576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f86866113fd6001856125f3565b81811061140c5761140c61270a565b905060200281019061141e91906127a1565b61142f9060808101906060016125d1565b90505f61143b826116ce565b905073ffffffffffffffffffffffffffffffffffffffff82166114655761146234826125f3565b90505b5f6114708989611718565b905061147c8989611822565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526114b7818b8b8561188e565b5f836114c2866116ce565b6114cc91906125f3565b905073ffffffffffffffffffffffffffffffffffffffff85166114f6576114f388826125f3565b90505b8b81101561153a576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044016108b8565b9c9b505050505050505050505050565b828202831584820484141782026115685763ad251c275f526004601cfd5b0492915050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166115ba57637939f4245f526004601cfd5b5f60605260405250505050565b61132f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611ae4565b73ffffffffffffffffffffffffffffffffffffffff8216611640576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110d873ffffffffffffffffffffffffffffffffffffffff831682611c0b565b73ffffffffffffffffffffffffffffffffffffffff82166116ad576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61132f73ffffffffffffffffffffffffffffffffffffffff84168383611c24565b5f73ffffffffffffffffffffffffffffffffffffffff8216156117105761170b73ffffffffffffffffffffffffffffffffffffffff831630611c6d565b611712565b475b92915050565b6060815f8167ffffffffffffffff811115611735576117356122bb565b60405190808252806020026020018201604052801561175e578160200160208202803683370190505b5090505f5f5b838110156118175786868281811061177e5761177e61270a565b905060200281019061179091906127a1565b6117a19060808101906060016125d1565b91506117ac826116ce565b8382815181106117be576117be61270a565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661180f57348382815181106117f7576117f761270a565b6020026020010181815161180b91906125f3565b9052505b600101611764565b509095945050505050565b5f5b8181101561132f573683838381811061183f5761183f61270a565b905060200281019061185191906127a1565b905061186360e0820160c08301612af5565b156118855761188561187b60608301604084016125d1565b826080013561104a565b50600101611824565b60208401516040850151849184918490835f80805b83811015611ac857368c8c838181106118be576118be61270a565b90506020028101906118d091906127a1565b90506118df60208201826125d1565b93506118f160408201602083016125d1565b92506119948461190460a08401846127dd565b611912916004915f91612845565b61191b91612b0e565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580611a7c57506119c86119ae60608301604084016125d1565b73ffffffffffffffffffffffffffffffffffffffff161590565b158015611a0157508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611a7c575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15611ab3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8d51611abf9082611ca0565b506001016118a3565b50505050611ad98585858585611f13565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84161561065c5773ffffffffffffffffffffffffffffffffffffffff8316611b4d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611bc0573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611be49190612b74565b101561065c5761065c73ffffffffffffffffffffffffffffffffffffffff8516848361212a565b5f385f3884865af16110d85763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c64576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b611cb8611cb060208301836125d1565b6017903b1190565b611cee576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611d2d576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611d416119ae60608501604086016125d1565b611d4b575f611d51565b82608001355b90505f611d6c611d6760808601606087016125d1565b6116ce565b9050815f03611da257611da2611d8860608601604087016125d1565b611d9860408701602088016125d1565b86608001356115c7565b5f80611db160208701876125d1565b73ffffffffffffffffffffffffffffffffffffffff1684611dd560a08901896127dd565b604051611de3929190612b8b565b5f6040518083038185875af1925050503d805f8114611e1d576040519150601f19603f3d011682016040523d82523d5f602084013e611e22565b606091505b509150915081611e3557611e35816121a8565b5f611e49611d676080890160608a016125d1565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611e7a60208a018a6125d1565b611e8a60608b0160408c016125d1565b611e9a60808c0160608d016125d1565b8b60800135898711611eac5786611eb6565b611eb68a886125f3565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611f226001826125f3565b818110611f3157611f3161270a565b9050602002810190611f4391906127a1565b611f549060808101906060016125d1565b90505f5f5f5f5f5f5f5b8881101561211a57611f7160018a6125f3565b81108015611f80575088600114155b1561205b578d8d82818110611f9757611f9761270a565b9050602002810190611fa991906127a1565b611fba9060808101906060016125d1565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461205b578a81815181106120015761200161270a565b6020026020010151612012876116ce565b61201c91906125f3565b965073ffffffffffffffffffffffffffffffffffffffff861615612040575f612042565b895b93508387111561205b5761205b868d610474878b6125f3565b8d8d8281811061206d5761206d61270a565b905060200281019061207f91906127a1565b6120909060608101906040016125d1565b945061209b856116ce565b925073ffffffffffffffffffffffffffffffffffffffff8516156120bf575f6120c1565b895b915081831180156120fe57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561211257612112858d61047485876125f3565b600101611f5e565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c64575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611c6457633e3f8f735f526004601cfd5b8051602082018181fd5b5f61010082840312156121c3575f5ffd5b50919050565b5f5f604083850312156121da575f5ffd5b823567ffffffffffffffff8111156121f0575f5ffd5b83016101408186031215612202575f5ffd5b9150602083013567ffffffffffffffff81111561221d575f5ffd5b612229858286016121b2565b9150509250929050565b5f5f60208385031215612244575f5ffd5b823567ffffffffffffffff81111561225a575f5ffd5b8301601f8101851361226a575f5ffd5b803567ffffffffffffffff811115612280575f5ffd5b8560208260061b8401011115612294575f5ffd5b6020919091019590945092505050565b5f602082840312156122b4575f5ffd5b5035919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561230c5761230c6122bb565b60405290565b604051610100810167ffffffffffffffff8111828210171561230c5761230c6122bb565b5f82601f830112612345575f5ffd5b8135602083015f5f67ffffffffffffffff841115612365576123656122bb565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff821117156123b2576123b26122bb565b6040528381529050808284018710156123c9575f5ffd5b838360208301375f602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff81168114612406575f5ffd5b50565b80356108c1816123e5565b803580151581146108c1575f5ffd5b5f6101408284031215612434575f5ffd5b61243c6122e8565b823581529050602082013567ffffffffffffffff81111561245b575f5ffd5b61246784828501612336565b602083015250604082013567ffffffffffffffff811115612486575f5ffd5b61249284828501612336565b6040830152506124a460608301612409565b60608201526124b560808301612409565b60808201526124c660a08301612409565b60a082015260c0828101359082015260e080830135908201526124ec6101008301612414565b6101008201526124ff6101208301612414565b61012082015292915050565b5f5f5f5f6060858703121561251e575f5ffd5b843567ffffffffffffffff811115612534575f5ffd5b61254087828801612423565b945050602085013567ffffffffffffffff81111561255c575f5ffd5b8501601f8101871361256c575f5ffd5b803567ffffffffffffffff811115612582575f5ffd5b8760208260051b8401011115612596575f5ffd5b60209190910193509150604085013567ffffffffffffffff8111156125b9575f5ffd5b6125c5878288016121b2565b91505092959194509250565b5f602082840312156125e1575f5ffd5b81356125ec816123e5565b9392505050565b81810381811115611712577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6117123683612423565b803563ffffffff811681146108c1575f5ffd5b5f610100823603121561265a575f5ffd5b612662612312565b823567ffffffffffffffff811115612678575f5ffd5b61268436828601612336565b8252506020838101359082015261269d60408401612409565b60408201526126ae60608401612409565b6060820152608083810135908201526126c960a08401612636565b60a082015260c083013567ffffffffffffffff8111156126e7575f5ffd5b6126f336828601612336565b60c08301525060e092830135928101929092525090565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215612747575f5ffd5b6125ec82612636565b602080825281018290525f8360408301825b85811015612797578235825263ffffffff61277f60208501612636565b16602083015260409283019290910190600101612762565b5095945050505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126127d3575f5ffd5b9190910192915050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612810575f5ffd5b83018035915067ffffffffffffffff82111561282a575f5ffd5b60200191503681900382131561283e575f5ffd5b9250929050565b5f5f85851115612853575f5ffd5b8386111561285f575f5ffd5b5050820193919092039150565b5f6020828403121561287c575f5ffd5b81516125ec816123e5565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60e081525f6128e560e083018a612887565b905087602083015286604083015273ffffffffffffffffffffffffffffffffffffffff8616606083015273ffffffffffffffffffffffffffffffffffffffff851660808301528360a083015263ffffffff831660c083015298975050505050505050565b61012081525f61295d61012083018c612887565b8a602084015289604084015273ffffffffffffffffffffffffffffffffffffffff8916606084015273ffffffffffffffffffffffffffffffffffffffff8816608084015273ffffffffffffffffffffffffffffffffffffffff871660a08401528560c084015263ffffffff851660e084015282810361010084015261153a8185612887565b60208152815160208201525f60208301516101406040840152612a09610160840182612887565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152612a448282612887565b9150506060840151612a6e608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151612add61012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215612b05575f5ffd5b6125ec82612414565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612b6d577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612b84575f5ffd5b5051919050565b818382375f910190815291905056fea264697066735822122085368cca233c64e8309b98e3aa00158d61d97fc50e9219f4db2499fda07546cb64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_poolManager";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "IS_HUB";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "POOL_MANAGER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getChainIdToEid";
        readonly inputs: readonly [{
            readonly name: "_chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "lzEid";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initSuperset";
        readonly inputs: readonly [{
            readonly name: "_chainIdConfigs";
            readonly type: "tuple[]";
            readonly internalType: "struct SupersetFacet.ChainIdConfig[]";
            readonly components: readonly [{
                readonly name: "chainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "lzEid";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setChainIdToEid";
        readonly inputs: readonly [{
            readonly name: "_chainIdConfigs";
            readonly type: "tuple[]";
            readonly internalType: "struct SupersetFacet.ChainIdConfig[]";
            readonly components: readonly [{
                readonly name: "chainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "lzEid";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaSuperset";
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
            readonly name: "_supersetData";
            readonly type: "tuple";
            readonly internalType: "struct SupersetFacet.SupersetData";
            readonly components: readonly [{
                readonly name: "path";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fallbackEoA";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "toEid";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "options";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "lzFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaSuperset";
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
            readonly name: "_supersetData";
            readonly type: "tuple";
            readonly internalType: "struct SupersetFacet.SupersetData";
            readonly components: readonly [{
                readonly name: "path";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fallbackEoA";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "toEid";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "options";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "lzFee";
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
        readonly name: "ChainIdToEidSet";
        readonly inputs: readonly [{
            readonly name: "chainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "lzEid";
            readonly type: "uint32";
            readonly indexed: false;
            readonly internalType: "uint32";
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
        readonly name: "SupersetChainMappingsInitialized";
        readonly inputs: readonly [{
            readonly name: "chainIdConfigs";
            readonly type: "tuple[]";
            readonly indexed: false;
            readonly internalType: "struct SupersetFacet.ChainIdConfig[]";
            readonly components: readonly [{
                readonly name: "chainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "lzEid";
                readonly type: "uint32";
                readonly internalType: "uint32";
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
        readonly name: "DeadlineExpired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientNativeValue";
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
        readonly name: "NativeAssetNotSupported";
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
        readonly name: "UnsupportedChainId";
        readonly inputs: readonly [{
            readonly name: "chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    static createInterface(): SupersetFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SupersetFacet;
}
export {};
