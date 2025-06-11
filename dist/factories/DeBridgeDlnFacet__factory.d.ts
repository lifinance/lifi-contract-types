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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161284638038061284683398101604081905261002e9161003f565b6001600160a01b031660805261006c565b5f6020828403121561004f575f5ffd5b81516001600160a01b0381168114610065575f5ffd5b9392505050565b6080516127a06100a65f395f818160d20152818161037e015281816106cb01528181610d5e01528181610dc40152610e9e01526127a05ff3fe608060405260043610610063575f3560e01c80638f4bef1c116100415780638f4bef1c146100c15780639f5e58f514610119578063f2455b7114610138575f5ffd5b80632c7d2db0146100675780634004633e1461007c5780635df39dde1461008f575b5f5ffd5b61007a610075366004611fc0565b610157565b005b61007a61008a366004612086565b61048d565b34801561009a575f5ffd5b506100ae6100a93660046120eb565b610784565b6040519081526020015b60405180910390f35b3480156100cc575f5ffd5b506100f47f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b8565b348015610124575f5ffd5b5061007a610133366004612102565b6107f3565b348015610143575f5ffd5b5061007a610152366004612173565b610921565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101d2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101e23447612193565b905086806101000151610221576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561025f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156102b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036102f6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610333576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8661034160208201826121cb565b90505f0361037b576040517f7a7ed98f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335087f0a6040518163ffffffff1660e01b81526004016020604051808303815f875af11580156103e6573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061040a9190612233565b60808d01518d5160c08f0151929350909161044b91908e8e3373ffffffffffffffffffffffffffffffffffffffff87161561044557876109ef565b5f6109ef565b60c08e015261045b8d8b84610b89565b50479450505050828211159050610480576104805f8461047b8585612193565b61101a565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610508576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6105183447612193565b90508461053d8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610574576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036105b1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036105ee576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b846105fc60208201826121cb565b90505f03610636576040517f7a7ed98f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610100015115610674576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156106b2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106c489608001518a60c0015161104f565b61075c89897f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335087f0a6040518163ffffffff1660e01b81526004016020604051808303815f875af1158015610733573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107579190612233565b610b89565b50479250505081811115610779576107795f8461047b8585612193565b50505f909155505050565b5f8181527fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b602081905260408220548083036107ec576040517f9322741e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9392505050565b5f81900361082d576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610835611103565b7fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b5f5b828110156108b3578383828181106108725761087261224a565b90506040020160200135825f015f8686858181106108925761089261224a565b604090810292909201358352506020820192909252015f2055600101610858565b50600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517f0cd20b776bdd48fad561fb65af5b002cf62ca0e0d5e89f165a9364d9da52a21b906109149085908590612277565b60405180910390a1505050565b610929611103565b7fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96c547fddf87bcc92bf634bfc8852f5a61f9209ce340952b463e87b4242394f116ee96b9060ff166109a6576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8381526020828152604091829020849055905183815284917fdc55a9203281afff9f6c3a20ab84a4858a398d4b5050c87a02ca78e573d8b34b910160405180910390a2505050565b5f83808203610a2a576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610a38600185612193565b818110610a4757610a4761224a565b9050602002810190610a5991906122bb565b610a6a9060808101906060016122f7565b90505f610a7682611178565b905073ffffffffffffffffffffffffffffffffffffffff8216610aa057610a9d3482612193565b90505b5f610aab89896111c2565b9050610ab789896112cc565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610af2818b8b85611338565b5f83610afd86611178565b610b079190612193565b905073ffffffffffffffffffffffffffffffffffffffff8516610b3157610b2e8882612193565b90505b8b811015610b79576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b6040805161016081018252608085015173ffffffffffffffffffffffffffffffffffffffff16815260c085015160208201525f918101610bc985806121cb565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050908252506060850135602082015260e0860151604090910190610c1d90610784565b8152602001848060200190610c3291906121cb565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250336020820152604090810190610c80908601866121cb565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201829052509385525050604080516020818101835284825280860191909152815180820183529384528185019390935251606090930192610d19923392500160609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b60405160208183030381529060405281525090505f610d50856080015173ffffffffffffffffffffffffffffffffffffffff161590565b610e4757610d8785608001517f00000000000000000000000000000000000000000000000000000000000000008760c001516116de565b6040517ffbe16ca700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063fbe16ca7908590610dff9086906178099060040161235c565b60206040518083038185885af1158015610e1b573d5f5f3e3d5ffd5b50505050506040513d601f19601f82011682018060405250810190610e409190612233565b9050610f1b565b828260200151610e579190612193565b602083015260c08501516040517ffbe16ca700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163fbe16ca791610ed79086906178099060040161235c565b60206040518083038185885af1158015610ef3573d5f5f3e3d5ffd5b50505050506040513d601f19601f82011682018060405250810190610f189190612233565b90505b60405181907ff19318a6980c94fb206f1e506fa7017ed9dd61959634e8fa128a38df4e527db7905f90a27311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168560a0015173ffffffffffffffffffffffffffffffffffffffff1603610fdc5760e085015185517ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b610fc560208801886121cb565b604051610fd3929190612556565b60405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18560405161100b91906125a2565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff83166110445761103f828261170a565b505050565b61103f838383611777565b805f03611088576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110e157803410156110dd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6110dd73ffffffffffffffffffffffffffffffffffffffff83163330846117e5565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314611176576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f73ffffffffffffffffffffffffffffffffffffffff8216156111ba576111b573ffffffffffffffffffffffffffffffffffffffff83163061183d565b6111bc565b475b92915050565b6060815f8167ffffffffffffffff8111156111df576111df611d8b565b604051908082528060200260200182016040528015611208578160200160208202803683370190505b5090505f805b838110156112c1578686828181106112285761122861224a565b905060200281019061123a91906122bb565b61124b9060808101906060016122f7565b915061125682611178565b8382815181106112685761126861224a565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166112b957348382815181106112a1576112a161224a565b602002602001018181516112b59190612193565b9052505b60010161120e565b509095945050505050565b5f5b8181101561103f57368383838181106112e9576112e961224a565b90506020028101906112fb91906122bb565b905061130d60e0820160c083016126b5565b1561132f5761132f61132560608301604084016122f7565b826080013561104f565b506001016112ce565b6020840151604085015184918491849083805f5b818110156114ef57368b8b838181106113675761136761224a565b905060200281019061137991906122bb565b90506113a861138e60608301604084016122f7565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061140a575061140a6113c160408301602084016122f7565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561142157506114216113c160208301836122f7565b80156114a457506114a461143860a08301836121cb565b611446916004915f916126ce565b61144f916126f5565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6114da576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516114e69082611870565b5060010161134c565b505080600114611637575f8686611507600185612193565b8181106115165761151661224a565b905060200281019061152891906122bb565b6115399060808101906060016122f7565b90505f805b611549600185612193565b811015611633575f8989838181106115635761156361224a565b905060200281019061157591906122bb565b6115869060808101906060016122f7565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461162a578682815181106115cd576115cd61224a565b60200260200101516115de82611178565b6115e89190612193565b92505f73ffffffffffffffffffffffffffffffffffffffff82161561160d575f61160f565b865b90508084111561162857611628828a61047b8488612193565b505b5060010161153e565b5050505b5f5b818110156116d1575f8787838181106116545761165461224a565b905060200281019061166691906122bb565b6116779060608101906040016122f7565b90505f61168382611178565b90505f73ffffffffffffffffffffffffffffffffffffffff8316156116a8575f6116aa565b855b9050808211156116c3576116c3838961047b8486612193565b836001019350505050611639565b5050505050505050505050565b61103f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611ae0565b73ffffffffffffffffffffffffffffffffffffffff8216611757576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110dd73ffffffffffffffffffffffffffffffffffffffff831682611c0d565b73ffffffffffffffffffffffffffffffffffffffff82166117c4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61103f73ffffffffffffffffffffffffffffffffffffffff84168383611c26565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661183057637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61188561188060208301836122f7565b611c6f565b6118bb576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036118fa576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61190e61138e60608501604086016122f7565b611918575f61191e565b82608001355b90505f61193961193460808601606087016122f7565b611178565b9050815f0361196f5761196f61195560608601604087016122f7565b61196560408701602088016122f7565b86608001356116de565b5f8061197e60208701876122f7565b73ffffffffffffffffffffffffffffffffffffffff16846119a260a08901896121cb565b6040516119b092919061275b565b5f6040518083038185875af1925050503d805f81146119ea576040519150601f19603f3d011682016040523d82523d5f602084013e6119ef565b606091505b509150915081611a0257611a0281611d03565b5f611a166119346080890160608a016122f7565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611a4760208a018a6122f7565b611a5760608b0160408c016122f7565b611a6760808c0160608d016122f7565b8b60800135898711611a795786611a83565b611a838a88612193565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611c075773ffffffffffffffffffffffffffffffffffffffff8316611b49576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611bbc573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611be09190612233565b1015611c0757611c0773ffffffffffffffffffffffffffffffffffffffff85168483611d0d565b50505050565b5f385f3884865af16110dd5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c66576390b8ec185f526004601cfd5b5f603452505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000821601611cfa57506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c66575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611c6657633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611ddc57611ddc611d8b565b60405290565b5f82601f830112611df1575f5ffd5b813567ffffffffffffffff811115611e0b57611e0b611d8b565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611e5857611e58611d8b565b604052818152838201602001851015611e6f575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611eae575f5ffd5b919050565b80358015158114611eae575f5ffd5b5f6101408284031215611ed3575f5ffd5b611edb611db8565b823581529050602082013567ffffffffffffffff811115611efa575f5ffd5b611f0684828501611de2565b602083015250604082013567ffffffffffffffff811115611f25575f5ffd5b611f3184828501611de2565b604083015250611f4360608301611e8b565b6060820152611f5460808301611e8b565b6080820152611f6560a08301611e8b565b60a082015260c0828101359082015260e08083013590820152611f8b6101008301611eb3565b610100820152611f9e6101208301611eb3565b61012082015292915050565b5f60808284031215611fba575f5ffd5b50919050565b5f5f5f5f60608587031215611fd3575f5ffd5b843567ffffffffffffffff811115611fe9575f5ffd5b611ff587828801611ec2565b945050602085013567ffffffffffffffff811115612011575f5ffd5b8501601f81018713612021575f5ffd5b803567ffffffffffffffff811115612037575f5ffd5b8760208260051b840101111561204b575f5ffd5b60209190910193509150604085013567ffffffffffffffff81111561206e575f5ffd5b61207a87828801611faa565b91505092959194509250565b5f5f60408385031215612097575f5ffd5b823567ffffffffffffffff8111156120ad575f5ffd5b6120b985828601611ec2565b925050602083013567ffffffffffffffff8111156120d5575f5ffd5b6120e185828601611faa565b9150509250929050565b5f602082840312156120fb575f5ffd5b5035919050565b5f5f60208385031215612113575f5ffd5b823567ffffffffffffffff811115612129575f5ffd5b8301601f81018513612139575f5ffd5b803567ffffffffffffffff81111561214f575f5ffd5b8560208260061b8401011115612163575f5ffd5b6020919091019590945092505050565b5f5f60408385031215612184575f5ffd5b50508035926020909101359150565b818103818111156111bc577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126121fe575f5ffd5b83018035915067ffffffffffffffff821115612218575f5ffd5b60200191503681900382131561222c575f5ffd5b9250929050565b5f60208284031215612243575f5ffd5b5051919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b602080825281018290525f8360408301825b858110156122b157823582526020808401359083015260409283019290910190600101612289565b5095945050505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126122ed575f5ffd5b9190910192915050565b5f60208284031215612307575f5ffd5b6107ec82611e8b565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6080815261238360808201845173ffffffffffffffffffffffffffffffffffffffff169052565b602083015160a08201525f604084015161016060c08401526123a96101e0840182612310565b9050606085015160e0840152608085015161010084015260a08501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80848303016101208501526123fa8282612310565b91505060c085015161242561014085018273ffffffffffffffffffffffffffffffffffffffff169052565b5060e08501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80848303016101608501526124608282612310565b9150506101008501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808483030161018085015261249e8282612310565b9150506101208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80848303016101a08501526124dc8282612310565b9150506101408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80848303016101c085015261251a8282612310565b9150508281036020840152612532815f815260200190565b63ffffffff94909416604084015250508082036060909101525f8152602001919050565b60208152816020820152818360408301375f818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b60208152815160208201525f602083015161014060408401526125c9610160840182612310565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526126048282612310565b915050606084015161262e608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161269d61012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156126c5575f5ffd5b6107ec82611eb3565b5f5f858511156126dc575f5ffd5b838611156126e8575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612754577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f910190815291905056fea26469706673582212201f7a64ea367b9c0dcfb8e3309d41b1066c2507a914367f28021354c3bbba0e9a64736f6c634300081d0033";
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
