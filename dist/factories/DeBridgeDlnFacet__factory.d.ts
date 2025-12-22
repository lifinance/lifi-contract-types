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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b506040516128ba3803806128ba83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516127ed6100cd5f395f818160d20152818161037e015281816106cb01528181610d5e01528181610dc40152610e9e01526127ed5ff3fe608060405260043610610063575f3560e01c80639eaeb24f116100415780639eaeb24f146100c15780639f5e58f514610119578063f2455b7114610138575f5ffd5b80632c7d2db0146100675780634004633e1461007c5780635df39dde1461008f575b5f5ffd5b61007a61007536600461200d565b610157565b005b61007a61008a3660046120d3565b61048d565b34801561009a575f5ffd5b506100ae6100a9366004612138565b610784565b6040519081526020015b60405180910390f35b3480156100cc575f5ffd5b506100f47f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b8565b348015610124575f5ffd5b5061007a61013336600461214f565b6107f3565b348015610143575f5ffd5b5061007a6101523660046121c0565b610921565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101d2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101e234476121e0565b905086806101000151610221576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561025f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156102b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036102f6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610333576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866103416020820182612218565b90505f0361037b576040517f7a7ed98f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335087f0a6040518163ffffffff1660e01b81526004016020604051808303815f875af11580156103e6573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061040a9190612280565b60808d01518d5160c08f0151929350909161044b91908e8e3373ffffffffffffffffffffffffffffffffffffffff87161561044557876109ef565b5f6109ef565b60c08e015261045b8d8b84610b89565b50479450505050828211159050610480576104805f8461047b85856121e0565b61101a565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610508576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61051834476121e0565b90508461053d8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610574576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036105b1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036105ee576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b846105fc6020820182612218565b90505f03610636576040517f7a7ed98f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610100015115610674576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156106b2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106c489608001518a60c0015161104f565b61075c89897f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335087f0a6040518163ffffffff1660e01b81526004016020604051808303815f875af1158015610733573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107579190612280565b610b89565b50479250505081811115610779576107795f8461047b85856121e0565b50505f909155505050565b5f8181527fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b602081905260408220548083036107ec576040517f9322741e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9392505050565b5f81900361082d576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610835611103565b7fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b5f5b828110156108b35783838281811061087257610872612297565b90506040020160200135825f015f86868581811061089257610892612297565b604090810292909201358352506020820192909252015f2055600101610858565b50600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517f0cd20b776bdd48fad561fb65af5b002cf62ca0e0d5e89f165a9364d9da52a21b9061091490859085906122c4565b60405180910390a1505050565b610929611103565b7fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96c547fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b9060ff166109a6576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8381526020828152604091829020849055905183815284917fdc55a9203281afff9f6c3a20ab84a4858a398d4b5050c87a02ca78e573d8b34b910160405180910390a2505050565b5f83808203610a2a576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610a386001856121e0565b818110610a4757610a47612297565b9050602002810190610a599190612308565b610a6a906080810190606001612344565b90505f610a7682611178565b905073ffffffffffffffffffffffffffffffffffffffff8216610aa057610a9d34826121e0565b90505b5f610aab89896111c2565b9050610ab789896112cc565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610af2818b8b85611338565b5f83610afd86611178565b610b0791906121e0565b905073ffffffffffffffffffffffffffffffffffffffff8516610b3157610b2e88826121e0565b90505b8b811015610b79576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b6040805161016081018252608085015173ffffffffffffffffffffffffffffffffffffffff16815260c085015160208201525f918101610bc98580612218565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050908252506060850135602082015260e0860151604090910190610c1d90610784565b8152602001848060200190610c329190612218565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250336020820152604090810190610c8090860186612218565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201829052509385525050604080516020818101835284825280860191909152815180820183529384528185019390935251606090930192610d19923392500160609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b60405160208183030381529060405281525090505f610d50856080015173ffffffffffffffffffffffffffffffffffffffff161590565b610e4757610d8785608001517f00000000000000000000000000000000000000000000000000000000000000008760c001516115a5565b6040517ffbe16ca700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063fbe16ca7908590610dff908690617809906004016123a9565b60206040518083038185885af1158015610e1b573d5f5f3e3d5ffd5b50505050506040513d601f19601f82011682018060405250810190610e409190612280565b9050610f1b565b828260200151610e5791906121e0565b602083015260c08501516040517ffbe16ca700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163fbe16ca791610ed7908690617809906004016123a9565b60206040518083038185885af1158015610ef3573d5f5f3e3d5ffd5b50505050506040513d601f19601f82011682018060405250810190610f189190612280565b90505b60405181907ff19318a6980c94fb206f1e506fa7017ed9dd61959634e8fa128a38df4e527db7905f90a27311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168560a0015173ffffffffffffffffffffffffffffffffffffffff1603610fdc5760e085015185517ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b610fc56020880188612218565b604051610fd39291906125a3565b60405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18560405161100b91906125ef565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff83166110445761103f82826115d1565b505050565b61103f83838361163e565b805f03611088576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110e157803410156110dd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6110dd73ffffffffffffffffffffffffffffffffffffffff83163330846116ac565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314611176576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f73ffffffffffffffffffffffffffffffffffffffff8216156111ba576111b573ffffffffffffffffffffffffffffffffffffffff831630611704565b6111bc565b475b92915050565b6060815f8167ffffffffffffffff8111156111df576111df611dd8565b604051908082528060200260200182016040528015611208578160200160208202803683370190505b5090505f5f5b838110156112c15786868281811061122857611228612297565b905060200281019061123a9190612308565b61124b906080810190606001612344565b915061125682611178565b83828151811061126857611268612297565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166112b957348382815181106112a1576112a1612297565b602002602001018181516112b591906121e0565b9052505b60010161120e565b509095945050505050565b5f5b8181101561103f57368383838181106112e9576112e9612297565b90506020028101906112fb9190612308565b905061130d60e0820160c08301612702565b1561132f5761132f6113256060830160408401612344565b826080013561104f565b506001016112ce565b60208401516040850151849184918490835f5b8181101561158b57368a8a8381811061136657611366612297565b90506020028101906113789190612308565b905061142761138a6020830183612344565b61139760a0840184612218565b6113a5916004915f9161271b565b6113ae91612742565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061153f575061145b6114416060830160408401612344565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156114af57506114706020820182612344565b73ffffffffffffffffffffffffffffffffffffffff166114966040830160208401612344565b73ffffffffffffffffffffffffffffffffffffffff1614155b801561153f575061153d6114c96040830160208401612344565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff1690565b155b15611576576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b516115829082611737565b5060010161134b565b505061159a85858585856119aa565b505050505050505050565b61103f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611bc1565b73ffffffffffffffffffffffffffffffffffffffff821661161e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110dd73ffffffffffffffffffffffffffffffffffffffff831682611cee565b73ffffffffffffffffffffffffffffffffffffffff821661168b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61103f73ffffffffffffffffffffffffffffffffffffffff84168383611d07565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166116f757637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61174f6117476020830183612344565b6017903b1190565b611785576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036117c4576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6117d86114416060850160408601612344565b6117e2575f6117e8565b82608001355b90505f6118036117fe6080860160608701612344565b611178565b9050815f036118395761183961181f6060860160408701612344565b61182f6040870160208801612344565b86608001356115a5565b5f806118486020870187612344565b73ffffffffffffffffffffffffffffffffffffffff168461186c60a0890189612218565b60405161187a9291906127a8565b5f6040518083038185875af1925050503d805f81146118b4576040519150601f19603f3d011682016040523d82523d5f602084013e6118b9565b606091505b5091509150816118cc576118cc81611d50565b5f6118e06117fe6080890160608a01612344565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861191160208a018a612344565b61192160608b0160408c01612344565b61193160808c0160608d01612344565b8b60800135898711611943578661194d565b61194d8a886121e0565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826119b96001826121e0565b8181106119c8576119c8612297565b90506020028101906119da9190612308565b6119eb906080810190606001612344565b90505f5f5f5f5f5f5f5b88811015611bb157611a0860018a6121e0565b81108015611a17575088600114155b15611af2578d8d82818110611a2e57611a2e612297565b9050602002810190611a409190612308565b611a51906080810190606001612344565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611af2578a8181518110611a9857611a98612297565b6020026020010151611aa987611178565b611ab391906121e0565b965073ffffffffffffffffffffffffffffffffffffffff861615611ad7575f611ad9565b895b935083871115611af257611af2868d61047b878b6121e0565b8d8d82818110611b0457611b04612297565b9050602002810190611b169190612308565b611b27906060810190604001612344565b9450611b3285611178565b925073ffffffffffffffffffffffffffffffffffffffff851615611b56575f611b58565b895b91508183118015611b9557508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611ba957611ba9858d61047b85876121e0565b6001016119f5565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611ce85773ffffffffffffffffffffffffffffffffffffffff8316611c2a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611c9d573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611cc19190612280565b1015611ce857611ce873ffffffffffffffffffffffffffffffffffffffff85168483611d5a565b50505050565b5f385f3884865af16110dd5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611d47576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611d47575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611d4757633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611e2957611e29611dd8565b60405290565b5f82601f830112611e3e575f5ffd5b813567ffffffffffffffff811115611e5857611e58611dd8565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611ea557611ea5611dd8565b604052818152838201602001851015611ebc575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611efb575f5ffd5b919050565b80358015158114611efb575f5ffd5b5f6101408284031215611f20575f5ffd5b611f28611e05565b823581529050602082013567ffffffffffffffff811115611f47575f5ffd5b611f5384828501611e2f565b602083015250604082013567ffffffffffffffff811115611f72575f5ffd5b611f7e84828501611e2f565b604083015250611f9060608301611ed8565b6060820152611fa160808301611ed8565b6080820152611fb260a08301611ed8565b60a082015260c0828101359082015260e08083013590820152611fd86101008301611f00565b610100820152611feb6101208301611f00565b61012082015292915050565b5f60808284031215612007575f5ffd5b50919050565b5f5f5f5f60608587031215612020575f5ffd5b843567ffffffffffffffff811115612036575f5ffd5b61204287828801611f0f565b945050602085013567ffffffffffffffff81111561205e575f5ffd5b8501601f8101871361206e575f5ffd5b803567ffffffffffffffff811115612084575f5ffd5b8760208260051b8401011115612098575f5ffd5b60209190910193509150604085013567ffffffffffffffff8111156120bb575f5ffd5b6120c787828801611ff7565b91505092959194509250565b5f5f604083850312156120e4575f5ffd5b823567ffffffffffffffff8111156120fa575f5ffd5b61210685828601611f0f565b925050602083013567ffffffffffffffff811115612122575f5ffd5b61212e85828601611ff7565b9150509250929050565b5f60208284031215612148575f5ffd5b5035919050565b5f5f60208385031215612160575f5ffd5b823567ffffffffffffffff811115612176575f5ffd5b8301601f81018513612186575f5ffd5b803567ffffffffffffffff81111561219c575f5ffd5b8560208260061b84010111156121b0575f5ffd5b6020919091019590945092505050565b5f5f604083850312156121d1575f5ffd5b50508035926020909101359150565b818103818111156111bc577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261224b575f5ffd5b83018035915067ffffffffffffffff821115612265575f5ffd5b602001915036819003821315612279575f5ffd5b9250929050565b5f60208284031215612290575f5ffd5b5051919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b602080825281018290525f8360408301825b858110156122fe578235825260208084013590830152604092830192909101906001016122d6565b5095945050505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261233a575f5ffd5b9190910192915050565b5f60208284031215612354575f5ffd5b6107ec82611ed8565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b608081526123d060808201845173ffffffffffffffffffffffffffffffffffffffff169052565b602083015160a08201525f604084015161016060c08401526123f66101e084018261235d565b9050606085015160e0840152608085015161010084015260a08501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8084830301610120850152612447828261235d565b91505060c085015161247261014085018273ffffffffffffffffffffffffffffffffffffffff169052565b5060e08501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80848303016101608501526124ad828261235d565b9150506101008501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80848303016101808501526124eb828261235d565b9150506101208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80848303016101a0850152612529828261235d565b9150506101408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80848303016101c0850152612567828261235d565b915050828103602084015261257f815f815260200190565b63ffffffff94909416604084015250508082036060909101525f8152602001919050565b60208152816020820152818360408301375f818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b60208152815160208201525f6020830151610140604084015261261661016084018261235d565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152612651828261235d565b915050606084015161267b608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516126ea61012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215612712575f5ffd5b6107ec82611f00565b5f5f85851115612729575f5ffd5b83861115612735575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156127a1577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f910190815291905056fea26469706673582212201b145b4c1cfee96cd7e8f8cd70c9734a4b4d1ea02f664fdb0c99e5b64f2a1ea064736f6c634300081d0033";
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
