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
    static readonly bytecode = "0x60e060405234801561000f575f5ffd5b50604051612adb380380612adb83398101604081905261002e916100b3565b6001600160a01b038316158061004b57506001600160a01b038216155b8061005d57506001600160a01b038116155b1561007b576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0392831660805290821660a0521660c0526100f3565b80516001600160a01b03811681146100ae575f5ffd5b919050565b5f5f5f606084860312156100c5575f5ffd5b6100ce84610098565b92506100dc60208501610098565b91506100ea60408501610098565b90509250925092565b60805160a05160c05161297161016a5f395f81816101ab0152610d2701525f8181610153015281816102ec0152818161058c01528181610695015281816108d701528181610d0601528181610e54015261101001525f81816101fd0152818161029e01528181610df10152610fc901526129715ff3fe608060405260043610610093575f3560e01c8063780c82ab116100665780638eb8fd561161004c5780638eb8fd561461019a578063b4ecdca6146101cd578063b8b32ff7146101ec575f5ffd5b8063780c82ab1461012f57806389a3027114610142575f5ffd5b806303731c1714610097578063173457ef146100b85780631cd1192f146100d7578063373abe8e14610110575b5f5ffd5b3480156100a2575f5ffd5b506100b66100b1366004612152565b61021f565b005b3480156100c3575f5ffd5b506100b66100d2366004612404565b61048c565b3480156100e2575f5ffd5b506100f66100f1366004612450565b6106d8565b60405163ffffffff90911681526020015b60405180910390f35b34801561011b575f5ffd5b506100b661012a366004612450565b6106e8565b6100b661013d366004612467565b6107cb565b34801561014d575f5ffd5b506101757f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610107565b3480156101a5575f5ffd5b506101757f000000000000000000000000000000000000000000000000000000000000000081565b3480156101d8575f5ffd5b506100b66101e7366004612152565b610a2f565b3480156101f7575f5ffd5b506101757f000000000000000000000000000000000000000000000000000000000000000081565b5f819003610259576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610261610bd0565b6040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60248301527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303815f875af1158015610332573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103569190612514565b507f96f554297b6e3fb8cee8f703eafd1cf8c8ae10e295dbd8c980a94208b39ed0015f5b8281101561041e578383828181106103945761039461252f565b90506040020160200160208101906103ac919061256f565b6103b79060016125b5565b825f8686858181106103cb576103cb61252f565b604090810292909201358352506020820192909252015f2080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff9290921691909117905560010161037a565b50600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517feb2fc90e92cd6872c67b476f416041c22a47406b15ba86c8542fe104d8b4c0de9061047f90859085906125d1565b60405180910390a1505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610507576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560c0830151839083905f0361054c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e0015103610589576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b847f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff1614610614576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610100015115610652576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610690576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106c07f000000000000000000000000000000000000000000000000000000000000000033308c60c00151610c45565b6106ca8989610d01565b50505f909455505050505050565b5f6106e282611276565b92915050565b6106f0610bd0565b7f96f554297b6e3fb8cee8f703eafd1cf8c8ae10e295dbd8c980a94208b39ed002547f96f554297b6e3fb8cee8f703eafd1cf8c8ae10e295dbd8c980a94208b39ed0019060ff1661076d576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8281526020829052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001690555183917f48203834611a2b212056b93cc86ada133e93a33eba2f1853158e435fc4ced32b91a25050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610846576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6108563447612622565b905086848160c001515f03610897576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e00151036108d4576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b887f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff161461095f576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a80610100015161099c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b806101200151156109da576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109ee8d5f01518e60c001518e8e336112fc565b60c08e01526109fd8d8b610d01565b50479450505050828211159050610a2257610a225f84610a1d8585612622565b61143a565b50505f9091555050505050565b5f819003610a69576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a71610bd0565b7f96f554297b6e3fb8cee8f703eafd1cf8c8ae10e295dbd8c980a94208b39ed002547f96f554297b6e3fb8cee8f703eafd1cf8c8ae10e295dbd8c980a94208b39ed0019060ff16610aee576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b82811015610bca575f848483818110610b0b57610b0b61252f565b9050604002015f013590505f858584818110610b2957610b2961252f565b9050604002016020016020810190610b41919061256f565b9050610b4e8160016125b5565b5f838152602086815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff9485161790559051918316825283917fa475624af48483e356a270c0b6ab33a1378acdfb3aaa12f79269bcc10a078414910160405180910390a25050600101610af0565b50505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610c43576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b73ffffffffffffffffffffffffffffffffffffffff8416610c92576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610cdf576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bca73ffffffffffffffffffffffffffffffffffffffff851684848461146f565b610d4d7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000083356114c7565b60c08201515f90610d6090833590612622565b60e084015160a08501519192509073ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114610f365760a084015173ffffffffffffffffffffffffffffffffffffffff16610def576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638e0250ee83610e3584611276565b60a08089015173ffffffffffffffffffffffffffffffffffffffff16907f0000000000000000000000000000000000000000000000000000000000000000905f9060208b013590610e8b908c0160808d0161256f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019790975263ffffffff9586166024880152604487019490945273ffffffffffffffffffffffffffffffffffffffff9092166064860152608485015260a48401521660c482015260e4015f604051808303815f87803b158015610f1b575f5ffd5b505af1158015610f2d573d5f5f3e3d5ffd5b50505050611130565b660416edef1601be81145f81610f50578460400135610f56565b84606001355b905080610fc7578115610f95576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638e0250ee8561100d86611276565b847f00000000000000000000000000000000000000000000000000000000000000005f60208c013561104560a08e0160808f0161256f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019790975263ffffffff9586166024880152604487019490945273ffffffffffffffffffffffffffffffffffffffff9092166064860152608485015260a48401521660c482015260e4015f604051808303815f87803b1580156110d5575f5ffd5b505af11580156110e7573d5f5f3e3d5ffd5b5050505082865f01517f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c876040013560405161112591815260200190565b60405180910390a350505b60c08401517f324bb680d8f34b685b89431a2429f01c9b71c00ab9a18e3ad887c464200f1c5b90843561116960a087016080880161256f565b60408051938452602084019290925263ffffffff169082015260600160405180910390a17fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1604051806101400160405280865f015181526020018660200151815260200186604001518152602001866060015173ffffffffffffffffffffffffffffffffffffffff168152602001866080015173ffffffffffffffffffffffffffffffffffffffff1681526020018660a0015173ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018381526020018661010001511515815260200186610120015115158152506040516112689190612681565b60405180910390a150505050565b5f8181527f96f554297b6e3fb8cee8f703eafd1cf8c8ae10e295dbd8c980a94208b39ed001602052604081205463ffffffff168082036112ea576040517fa5dab5fe000000000000000000000000000000000000000000000000000000008152600481018490526024015b60405180910390fd5b6112f5600182612794565b9392505050565b5f82808203611337576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585611345600185612622565b8181106113545761135461252f565b905060200281019061136691906127b0565b6113779060808101906060016127ec565b90505f61138382611535565b905073ffffffffffffffffffffffffffffffffffffffff82166113ad576113aa3482612622565b90505b5f6113b8888861157e565b90506113c48888611688565b6113d18a898989856116f4565b5f826113dc85611535565b6113e69190612622565b90508981101561142c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044016112e1565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166114645761145f828261193c565b505050565b61145f8383836114c7565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166114ba57637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff8216611514576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61145f73ffffffffffffffffffffffffffffffffffffffff841683836119ad565b5f73ffffffffffffffffffffffffffffffffffffffff8216156115775761157273ffffffffffffffffffffffffffffffffffffffff8316306119f6565b6106e2565b4792915050565b6060815f8167ffffffffffffffff81111561159b5761159b6121c3565b6040519080825280602002602001820160405280156115c4578160200160208202803683370190505b5090505f5f5b8381101561167d578686828181106115e4576115e461252f565b90506020028101906115f691906127b0565b6116079060808101906060016127ec565b915061161282611535565b8382815181106116245761162461252f565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611675573483828151811061165d5761165d61252f565b602002602001018181516116719190612622565b9052505b6001016115ca565b509095945050505050565b5f5b8181101561145f57368383838181106116a5576116a561252f565b90506020028101906116b791906127b0565b90506116c960e0820160c08301612805565b156116eb576116eb6116e160608301604084016127ec565b8260800135611a29565b5060010161168a565b83838383825f80805b8381101561192057368c8c838181106117185761171861252f565b905060200281019061172a91906127b0565b905061173960208201826127ec565b935061174b60408201602083016127ec565b92506117ee8461175e60a0840184612820565b61176c916004915f91612888565b611775916128af565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806118d6575061182261180860608301604084016127ec565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561185b57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b80156118d6575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b1561190d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6119178e82611ad9565b506001016116fd565b50505050611931848484845f611d4c565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216611989576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6119a973ffffffffffffffffffffffffffffffffffffffff831682611f63565b5050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166119ed576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f03611a62576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611ab757803410156119a9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6119a973ffffffffffffffffffffffffffffffffffffffff831633308461146f565b611af1611ae960208301836127ec565b6017903b1190565b611b27576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611b66576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611b7a61180860608501604086016127ec565b611b84575f611b8a565b82608001355b90505f611ba5611ba060808601606087016127ec565b611535565b9050815f03611bdb57611bdb611bc160608601604087016127ec565b611bd160408701602088016127ec565b8660800135611f7c565b5f80611bea60208701876127ec565b73ffffffffffffffffffffffffffffffffffffffff1684611c0e60a0890189612820565b604051611c1c929190612915565b5f6040518083038185875af1925050503d805f8114611c56576040519150601f19603f3d011682016040523d82523d5f602084013e611c5b565b606091505b509150915081611c6e57611c6e81611fa8565b5f611c82611ba06080890160608a016127ec565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611cb360208a018a6127ec565b611cc360608b0160408c016127ec565b611cd360808c0160608d016127ec565b8b60800135898711611ce55786611cef565b611cef8a88612622565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611d5b600182612622565b818110611d6a57611d6a61252f565b9050602002810190611d7c91906127b0565b611d8d9060808101906060016127ec565b90505f5f5f5f5f5f5f5b88811015611f5357611daa60018a612622565b81108015611db9575088600114155b15611e94578d8d82818110611dd057611dd061252f565b9050602002810190611de291906127b0565b611df39060808101906060016127ec565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611e94578a8181518110611e3a57611e3a61252f565b6020026020010151611e4b87611535565b611e559190612622565b965073ffffffffffffffffffffffffffffffffffffffff861615611e79575f611e7b565b895b935083871115611e9457611e94868d610a1d878b612622565b8d8d82818110611ea657611ea661252f565b9050602002810190611eb891906127b0565b611ec99060608101906040016127ec565b9450611ed485611535565b925073ffffffffffffffffffffffffffffffffffffffff851615611ef8575f611efa565b895b91508183118015611f3757508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611f4b57611f4b858d610a1d8587612622565b600101611d97565b5050505050505050505050505050565b5f385f3884865af16119a95763b12d13eb5f526004601cfd5b61145f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611fb2565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615610bca5773ffffffffffffffffffffffffffffffffffffffff831661201b576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561208e573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906120b29190612924565b1015610bca57610bca73ffffffffffffffffffffffffffffffffffffffff8516848381601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166119ed575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166119ed57633e3f8f735f526004601cfd5b5f5f60208385031215612163575f5ffd5b823567ffffffffffffffff811115612179575f5ffd5b8301601f81018513612189575f5ffd5b803567ffffffffffffffff81111561219f575f5ffd5b8560208260061b84010111156121b3575f5ffd5b6020919091019590945092505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715612214576122146121c3565b60405290565b5f82601f830112612229575f5ffd5b813567ffffffffffffffff811115612243576122436121c3565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715612290576122906121c3565b6040528181528382016020018510156122a7575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146122e6575f5ffd5b919050565b80151581146122f8575f5ffd5b50565b80356122e6816122eb565b5f6101408284031215612317575f5ffd5b61231f6121f0565b823581529050602082013567ffffffffffffffff81111561233e575f5ffd5b61234a8482850161221a565b602083015250604082013567ffffffffffffffff811115612369575f5ffd5b6123758482850161221a565b604083015250612387606083016122c3565b6060820152612398608083016122c3565b60808201526123a960a083016122c3565b60a082015260c0828101359082015260e080830135908201526123cf61010083016122fb565b6101008201526123e261012083016122fb565b61012082015292915050565b5f60a082840312156123fe575f5ffd5b50919050565b5f5f60c08385031215612415575f5ffd5b823567ffffffffffffffff81111561242b575f5ffd5b61243785828601612306565b92505061244784602085016123ee565b90509250929050565b5f60208284031215612460575f5ffd5b5035919050565b5f5f5f5f60e0858703121561247a575f5ffd5b843567ffffffffffffffff811115612490575f5ffd5b61249c87828801612306565b945050602085013567ffffffffffffffff8111156124b8575f5ffd5b8501601f810187136124c8575f5ffd5b803567ffffffffffffffff8111156124de575f5ffd5b8760208260051b84010111156124f2575f5ffd5b6020919091019350915061250986604087016123ee565b905092959194509250565b5f60208284031215612524575f5ffd5b81516112f5816122eb565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b803563ffffffff811681146122e6575f5ffd5b5f6020828403121561257f575f5ffd5b6112f58261255c565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b63ffffffff81811683821601908111156106e2576106e2612588565b602080825281018290525f8360408301825b85811015612618578235825263ffffffff6126006020850161255c565b166020830152604092830192909101906001016125e3565b5095945050505050565b818103818111156106e2576106e2612588565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526126a8610160840182612635565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526126e38282612635565b915050606084015161270d608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161277c61012085018215159052565b50610120840151801515610140850152509392505050565b63ffffffff82811682821603908111156106e2576106e2612588565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126127e2575f5ffd5b9190910192915050565b5f602082840312156127fc575f5ffd5b6112f5826122c3565b5f60208284031215612815575f5ffd5b81356112f5816122eb565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612853575f5ffd5b83018035915067ffffffffffffffff82111561286d575f5ffd5b602001915036819003821315612881575f5ffd5b9250929050565b5f5f85851115612896575f5ffd5b838611156128a2575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561290e577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612934575f5ffd5b505191905056fea2646970667358221220b7ce1596b612f82f25020044ea828df219b8a6cb69134e10f52d30320ec934dc64736f6c634300081d0033";
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
        readonly name: "getChainIdToDomainId";
        readonly inputs: readonly [{
            readonly name: "_chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "domainId";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initPolymerCCTP";
        readonly inputs: readonly [{
            readonly name: "chainIdConfigs";
            readonly type: "tuple[]";
            readonly internalType: "struct PolymerCCTPFacet.ChainIdConfig[]";
            readonly components: readonly [{
                readonly name: "chainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "domainId";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setChainIdToDomainId";
        readonly inputs: readonly [{
            readonly name: "chainIdConfigs";
            readonly type: "tuple[]";
            readonly internalType: "struct PolymerCCTPFacet.ChainIdConfig[]";
            readonly components: readonly [{
                readonly name: "chainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "domainId";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }];
        }];
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
        readonly type: "function";
        readonly name: "unsetChainIdToDomainId";
        readonly inputs: readonly [{
            readonly name: "_chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "ChainIdToDomainIdSet";
        readonly inputs: readonly [{
            readonly name: "chainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "domainId";
            readonly type: "uint32";
            readonly indexed: false;
            readonly internalType: "uint32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ChainIdToDomainIdUnset";
        readonly inputs: readonly [{
            readonly name: "chainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
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
        readonly name: "PolymerCCTPChainMappingsInitialized";
        readonly inputs: readonly [{
            readonly name: "chainIdConfigs";
            readonly type: "tuple[]";
            readonly indexed: false;
            readonly internalType: "struct PolymerCCTPFacet.ChainIdConfig[]";
            readonly components: readonly [{
                readonly name: "chainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "domainId";
                readonly type: "uint32";
                readonly internalType: "uint32";
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
        readonly name: "NotInitialized";
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
    }, {
        readonly type: "error";
        readonly name: "UnsupportedChainId";
        readonly inputs: readonly [{
            readonly name: "chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    static createInterface(): PolymerCCTPFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PolymerCCTPFacet;
}
export {};
