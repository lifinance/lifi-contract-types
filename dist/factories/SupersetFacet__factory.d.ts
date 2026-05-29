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
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161296a38038061296a83398101604081905261002e9161006e565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b03166080524661a4b11460a05261009b565b5f6020828403121561007e575f5ffd5b81516001600160a01b0381168114610094575f5ffd5b9392505050565b60805160a0516128936100d75f395f81816101200152610f0401525f818160a401528181610ed901528181610f2a0152610fe301526128935ff3fe60806040526004361061006e575f3560e01c80638dabad7d1161004c5780638dabad7d1461010f57806395b78ad614610152578063d1731b9314610165578063edc3f41e14610178575f5ffd5b80635b1ee8401461007257806362308e85146100935780638be87635146100f0575b5f5ffd5b34801561007d575f5ffd5b5061009161008c366004611e05565b6101ac565b005b34801561009e575f5ffd5b506100c67f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100fb575f5ffd5b5061009161010a366004611e05565b610343565b34801561011a575f5ffd5b506101427f000000000000000000000000000000000000000000000000000000000000000081565b60405190151581526020016100e7565b6100916101603660046120d1565b6104af565b610091610173366004612197565b6107b7565b348015610183575f5ffd5b50610197610192366004612201565b610a7a565b60405163ffffffff90911681526020016100e7565b5f8190036101e6576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101ee610af4565b7fb7044196c565a2aff8506fab0177dbb71e8b28af17f59b6e53300a128ff59c11547fb7044196c565a2aff8506fab0177dbb71e8b28af17f59b6e53300a128ff59c109060ff1661026b576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b8281101561033d575f84848381811061028857610288612218565b9050604002015f013590505f8585848181106102a6576102a6612218565b90506040020160200160208101906102be9190612258565b5f838152602086815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff8516908117909155915191825291925083917f010b01c68d87c7ce7ee9bd2f5c44a9fc5058745365df809b7326827610200901910160405180910390a2505060010161026d565b50505050565b5f81900361037d576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610385610af4565b7fb7044196c565a2aff8506fab0177dbb71e8b28af17f59b6e53300a128ff59c105f5b82811015610441578383828181106103c2576103c2612218565b90506040020160200160208101906103da9190612258565b825f8686858181106103ee576103ee612218565b604090810292909201358352506020820192909252015f2080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff929092169190911790556001016103a8565b50600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517f11540ef30f5d30a57780ceb12458f32059618a0213feb7db9e81dc752199d647906104a29085908590612278565b60405180910390a1505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161052a576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561053e60808301606084016122c9565b5f610549344761230f565b905086806101000151610588576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156105c6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886105e98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610620576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361065d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361069a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b896106bd816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156106f4576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107028b60e0015189610b69565b8a5160c08c015161072b91908c8c61072060808e0160608f016122c9565b8d6101000135610d39565b60c08c01525f61073a89612339565b9050670de0b6b3a764000061075560608b0160408c0161240c565b67ffffffffffffffff168d60c0015161076e9190612425565b610778919061243c565b60208201526107878c82610ecf565b50479350505050818111156107aa576107aa5f846107a5858561230f565b6110dd565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610832576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561084660808301606084016122c9565b5f610851344761230f565b905061085c85612474565b60a081015173ffffffffffffffffffffffffffffffffffffffff166108ad576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036108ea576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610927576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61093086612474565b608081015173ffffffffffffffffffffffffffffffffffffffff16610981576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61098a87612474565b806101000151156109c7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109d088612474565b80610120015115610a0d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a1b8960e0013589610b69565b610a38610a2e60a08b0160808c016122c9565b8a60c00135611112565b610a52610a448a612474565b610a4d8a612339565b610ecf565b50479250505081811115610a6f57610a6f5f846107a5858561230f565b50505f909155505050565b5f8181527fb7044196c565a2aff8506fab0177dbb71e8b28af17f59b6e53300a128ff59c10602052604081205463ffffffff1690819003610aef576040517fa5dab5fe000000000000000000000000000000000000000000000000000000008152600481018390526024015b60405180910390fd5b919050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610b67576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b610b73818061247f565b90505f03610bad576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610bbe60808301606084016122c9565b73ffffffffffffffffffffffffffffffffffffffff1603610c0b576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610c1c60a08301608084016122c9565b73ffffffffffffffffffffffffffffffffffffffff161480610c635750610c4960a08201608083016122c9565b73ffffffffffffffffffffffffffffffffffffffff163b15155b15610c9a576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806101000135341015610cd9576040517f35898e6e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ce960e0820160c08301612258565b63ffffffff16610cf883610a7a565b63ffffffff1614610d35576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b5f83808203610d74576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610d8260018561230f565b818110610d9157610d91612218565b9050602002810190610da391906124e7565b610db49060808101906060016122c9565b90505f610dc0826111c2565b905073ffffffffffffffffffffffffffffffffffffffff8216610dea57610de7348261230f565b90505b5f610df5898961120c565b9050610e018989611316565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610e3c818b8b85611382565b5f83610e47866111c2565b610e51919061230f565b905073ffffffffffffffffffffffffffffffffffffffff8516610e7b57610e78888261230f565b90505b8b811015610ebf576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d905260248101829052604401610ae6565b9c9b505050505050505050505050565b610f0282608001517f00000000000000000000000000000000000000000000000000000000000000008460c001516115d8565b7f000000000000000000000000000000000000000000000000000000000000000015610fe1577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bf7d3227826101000151835f01518560c0015185602001518760a0015187608001518860a001518960c001516040518963ffffffff1660e01b8152600401610fae979695949392919061256f565b5f604051808303818588803b158015610fc5575f5ffd5b505af1158015610fd7573d5f5f3e3d5ffd5b50505050506110a2565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630bb26a71826101000151835f01518560c0015185602001518760a00151876060015188608001518960a001518a60c001518b60e001516040518b63ffffffff1660e01b8152600401611073999897969594939291906125e5565b5f604051808303818588803b15801561108a575f5ffd5b505af115801561109c573d5f5f3e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516110d1919061267e565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316611107576111028282611604565b505050565b611102838383611671565b805f0361114b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111a05780341015610d35576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d3573ffffffffffffffffffffffffffffffffffffffff83163330846116df565b5f73ffffffffffffffffffffffffffffffffffffffff821615611204576111ff73ffffffffffffffffffffffffffffffffffffffff831630611737565b611206565b475b92915050565b6060815f8167ffffffffffffffff81111561122957611229611e76565b604051908082528060200260200182016040528015611252578160200160208202803683370190505b5090505f5f5b8381101561130b5786868281811061127257611272612218565b905060200281019061128491906124e7565b6112959060808101906060016122c9565b91506112a0826111c2565b8382815181106112b2576112b2612218565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661130357348382815181106112eb576112eb612218565b602002602001018181516112ff919061230f565b9052505b600101611258565b509095945050505050565b5f5b81811015611102573683838381811061133357611333612218565b905060200281019061134591906124e7565b905061135760e0820160c08301612791565b156113795761137961136f60608301604084016122c9565b8260800135611112565b50600101611318565b60208401516040850151849184918490835f80805b838110156115bc57368c8c838181106113b2576113b2612218565b90506020028101906113c491906124e7565b90506113d360208201826122c9565b93506113e560408201602083016122c9565b9250611488846113f860a084018461247f565b611406916004915f916127aa565b61140f916127d1565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061157057506114bc6114a260608301604084016122c9565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156114f557508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611570575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b156115a7576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8d516115b3908261176a565b50600101611397565b505050506115cd85858585856119dd565b505050505050505050565b6111028383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611bf4565b73ffffffffffffffffffffffffffffffffffffffff8216611651576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d3573ffffffffffffffffffffffffffffffffffffffff831682611d1b565b73ffffffffffffffffffffffffffffffffffffffff82166116be576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61110273ffffffffffffffffffffffffffffffffffffffff84168383611d34565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661172a57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61178261177a60208301836122c9565b6017903b1190565b6117b8576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036117f7576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61180b6114a260608501604086016122c9565b611815575f61181b565b82608001355b90505f61183661183160808601606087016122c9565b6111c2565b9050815f0361186c5761186c61185260608601604087016122c9565b61186260408701602088016122c9565b86608001356115d8565b5f8061187b60208701876122c9565b73ffffffffffffffffffffffffffffffffffffffff168461189f60a089018961247f565b6040516118ad929190612837565b5f6040518083038185875af1925050503d805f81146118e7576040519150601f19603f3d011682016040523d82523d5f602084013e6118ec565b606091505b5091509150816118ff576118ff81611d7d565b5f6119136118316080890160608a016122c9565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861194460208a018a6122c9565b61195460608b0160408c016122c9565b61196460808c0160608d016122c9565b8b608001358987116119765786611980565b6119808a8861230f565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826119ec60018261230f565b8181106119fb576119fb612218565b9050602002810190611a0d91906124e7565b611a1e9060808101906060016122c9565b90505f5f5f5f5f5f5f5b88811015611be457611a3b60018a61230f565b81108015611a4a575088600114155b15611b25578d8d82818110611a6157611a61612218565b9050602002810190611a7391906124e7565b611a849060808101906060016122c9565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611b25578a8181518110611acb57611acb612218565b6020026020010151611adc876111c2565b611ae6919061230f565b965073ffffffffffffffffffffffffffffffffffffffff861615611b0a575f611b0c565b895b935083871115611b2557611b25868d6107a5878b61230f565b8d8d82818110611b3757611b37612218565b9050602002810190611b4991906124e7565b611b5a9060608101906040016122c9565b9450611b65856111c2565b925073ffffffffffffffffffffffffffffffffffffffff851615611b89575f611b8b565b895b91508183118015611bc857508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611bdc57611bdc858d6107a5858761230f565b600101611a28565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84161561033d5773ffffffffffffffffffffffffffffffffffffffff8316611c5d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611cd0573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611cf49190612846565b101561033d5761033d73ffffffffffffffffffffffffffffffffffffffff85168483611d87565b5f385f3884865af1610d355763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611d74576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611d74575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611d7457633e3f8f735f526004601cfd5b5f5f60208385031215611e16575f5ffd5b823567ffffffffffffffff811115611e2c575f5ffd5b8301601f81018513611e3c575f5ffd5b803567ffffffffffffffff811115611e52575f5ffd5b8560208260061b8401011115611e66575f5ffd5b6020919091019590945092505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611ec757611ec7611e76565b60405290565b604051610120810167ffffffffffffffff81118282101715611ec757611ec7611e76565b5f82601f830112611f00575f5ffd5b8135602083015f5f67ffffffffffffffff841115611f2057611f20611e76565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff82111715611f6d57611f6d611e76565b604052838152905080828401871015611f84575f5ffd5b838360208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610aef575f5ffd5b80358015158114610aef575f5ffd5b5f6101408284031215611fe3575f5ffd5b611feb611ea3565b823581529050602082013567ffffffffffffffff81111561200a575f5ffd5b61201684828501611ef1565b602083015250604082013567ffffffffffffffff811115612035575f5ffd5b61204184828501611ef1565b60408301525061205360608301611fa0565b606082015261206460808301611fa0565b608082015261207560a08301611fa0565b60a082015260c0828101359082015260e0808301359082015261209b6101008301611fc3565b6101008201526120ae6101208301611fc3565b61012082015292915050565b5f61012082840312156120cb575f5ffd5b50919050565b5f5f5f5f606085870312156120e4575f5ffd5b843567ffffffffffffffff8111156120fa575f5ffd5b61210687828801611fd2565b945050602085013567ffffffffffffffff811115612122575f5ffd5b8501601f81018713612132575f5ffd5b803567ffffffffffffffff811115612148575f5ffd5b8760208260051b840101111561215c575f5ffd5b60209190910193509150604085013567ffffffffffffffff81111561217f575f5ffd5b61218b878288016120ba565b91505092959194509250565b5f5f604083850312156121a8575f5ffd5b823567ffffffffffffffff8111156121be575f5ffd5b830161014081860312156121d0575f5ffd5b9150602083013567ffffffffffffffff8111156121eb575f5ffd5b6121f7858286016120ba565b9150509250929050565b5f60208284031215612211575f5ffd5b5035919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b803563ffffffff81168114610aef575f5ffd5b5f60208284031215612268575f5ffd5b61227182612245565b9392505050565b602080825281018290525f8360408301825b858110156122bf578235825263ffffffff6122a760208501612245565b1660208301526040928301929091019060010161228a565b5095945050505050565b5f602082840312156122d9575f5ffd5b61227182611fa0565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115611206576112066122e2565b803567ffffffffffffffff81168114610aef575f5ffd5b5f610120823603121561234a575f5ffd5b612352611ecd565b823567ffffffffffffffff811115612368575f5ffd5b61237436828601611ef1565b8252506020838101359082015261238d60408401612322565b604082015261239e60608401611fa0565b60608201526123af60808401611fa0565b608082015260a083810135908201526123ca60c08401612245565b60c082015260e083013567ffffffffffffffff8111156123e8575f5ffd5b6123f436828601611ef1565b60e08301525061010092830135928101929092525090565b5f6020828403121561241c575f5ffd5b61227182612322565b8082028115828204841417611206576112066122e2565b5f8261246f577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b5f6112063683611fd2565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126124b2575f5ffd5b83018035915067ffffffffffffffff8211156124cc575f5ffd5b6020019150368190038213156124e0575f5ffd5b9250929050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612519575f5ffd5b9190910192915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60e081525f61258160e083018a612523565b905087602083015286604083015273ffffffffffffffffffffffffffffffffffffffff8616606083015273ffffffffffffffffffffffffffffffffffffffff851660808301528360a083015263ffffffff831660c083015298975050505050505050565b61012081525f6125f961012083018c612523565b8a602084015289604084015273ffffffffffffffffffffffffffffffffffffffff8916606084015273ffffffffffffffffffffffffffffffffffffffff8816608084015273ffffffffffffffffffffffffffffffffffffffff871660a08401528560c084015263ffffffff851660e0840152828103610100840152610ebf8185612523565b60208152815160208201525f602083015161014060408401526126a5610160840182612523565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526126e08282612523565b915050606084015161270a608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161277961012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156127a1575f5ffd5b61227182611fc3565b5f5f858511156127b8575f5ffd5b838611156127c4575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612830577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612856575f5ffd5b505191905056fea2646970667358221220219856014b19f229a43940820ba0407d0ddf21092679a5b5524fdde81b249ae164736f6c634300081d0033";
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
                readonly name: "amountOutMinPercent";
                readonly type: "uint64";
                readonly internalType: "uint64";
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
                readonly name: "amountOutMinPercent";
                readonly type: "uint64";
                readonly internalType: "uint64";
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
