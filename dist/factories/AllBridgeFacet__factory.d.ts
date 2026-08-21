import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AllBridgeFacet, AllBridgeFacetInterface } from "../AllBridgeFacet";
type AllBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AllBridgeFacet__factory extends ContractFactory {
    constructor(...args: AllBridgeFacetConstructorParams);
    deploy(_allBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AllBridgeFacet>;
    getDeployTransaction(_allBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AllBridgeFacet;
    connect(signer: Signer): AllBridgeFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b506040516125c93803806125c983398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516125106100b95f395f8181610caf01528181610cef0152610dc901526125105ff3fe608060405260043610610063575f3560e01c8063632674691161004157806363267469146100d85780636a51e9a9146100eb578063a62ef168146100fe575f5ffd5b806314e1e3d21461006757806337f6bf4e14610088578063486e7a00146100a7575b5f5ffd5b348015610072575f5ffd5b50610086610081366004611cc2565b61011d565b005b348015610093575f5ffd5b506100866100a2366004611d33565b61028f565b3480156100b2575f5ffd5b506100c66100c1366004611d33565b61034f565b60405190815260200160405180910390f35b6100866100e6366004611f8b565b61035f565b6100866100f9366004612039565b61058c565b348015610109575f5ffd5b50610086610118366004611cc2565b6107ac565b5f819003610157576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61015f610949565b7f21b25a8f1864d80e204c648ddf2ed76e4168f9e40470c07e2a0ac77e9510a9545f5b82811015610221575f84848381811061019d5761019d612085565b9050604002015f013590505f8585848181106101bb576101bb612085565b905060400201602001359050815f14806101d3575080155b1561020a576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f9182526020849052604090912055600101610182565b50600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517f3e50ab2149768e79e14486591ce94dda1939b5d7247173675016b9a3c3ce45d79061028290859085906120b2565b60405180910390a1505050565b610297610949565b7f21b25a8f1864d80e204c648ddf2ed76e4168f9e40470c07e2a0ac77e9510a955547f21b25a8f1864d80e204c648ddf2ed76e4168f9e40470c07e2a0ac77e9510a9549060ff16610314576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f828152602082905260408082208290555183917f7e2819820559b77138a52234f500981056527217117d8bb3515c9a450465b5fc91a25050565b5f610359826109be565b92915050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103da576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103ea34476120f6565b905086806101000151610429576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610467576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861048a8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104c1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104fe576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361053b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61054f8a5f01518b60c001518b8b33610a24565b60c08b015261055e8a88610b66565b50479150508181111561057f5761057f5f8461057a85856120f6565b610ece565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610607576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61061734476120f6565b90508461063c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610673576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036106b0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036106ed576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561072b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610769576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61077b88608001518960c00151610f03565b6107858888610b66565b5047915050818111156107a1576107a15f8461057a85856120f6565b50505f909155505050565b5f8190036107e6576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107ee610949565b7f21b25a8f1864d80e204c648ddf2ed76e4168f9e40470c07e2a0ac77e9510a955547f21b25a8f1864d80e204c648ddf2ed76e4168f9e40470c07e2a0ac77e9510a9549060ff1661086b576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b82811015610943575f84848381811061088857610888612085565b9050604002015f013590505f8585848181106108a6576108a6612085565b905060400201602001359050815f14806108be575080155b156108f5576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8281526020858152604091829020839055905182815283917f1de6d16294a393ebbc1d9d4a6eafa8ff0bee426895d0a99924a603bb94c63f57910160405180910390a2505060010161086d565b50505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146109bc576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f8181527f21b25a8f1864d80e204c648ddf2ed76e4168f9e40470c07e2a0ac77e9510a9546020526040812054808203610359576040517f22df402100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f82808203610a5f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610a6d6001856120f6565b818110610a7c57610a7c612085565b9050602002810190610a8e919061212e565b610a9f90608081019060600161216a565b90505f610aab82610fb7565b905073ffffffffffffffffffffffffffffffffffffffff8216610ad557610ad234826120f6565b90505b5f610ae08888611000565b9050610aec888861110a565b610af98a89898985611176565b5f82610b0485610fb7565b610b0e91906120f6565b905089811015610b58576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b5f610b748360e001516109be565b90507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610c37578135610bf9576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8251604051833581528291907f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a3610ca5565b815f01355f1c73ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614610ca5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cd883608001517f00000000000000000000000000000000000000000000000000000000000000008560c001516113be565b610ce860c0830160a0840161218a565b15610dc7577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd846080015173ffffffffffffffffffffffffffffffffffffffff165f1b8560c00151855f01358587604001358860600135896080016020810190610d6d91906121a5565b8a602001356040518963ffffffff1660e01b8152600401610d959897969594939291906121fc565b5f604051808303815f87803b158015610dac575f5ffd5b505af1158015610dbe573d5f5f3e3d5ffd5b50505050610e9f565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd8360200135856080015173ffffffffffffffffffffffffffffffffffffffff165f1b8660c00151865f013586886040013589606001358a6080016020810190610e4c91906121a5565b5f6040518a63ffffffff1660e01b8152600401610e709897969594939291906121fc565b5f604051808303818588803b158015610e87575f5ffd5b505af1158015610e99573d5f5f3e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516102829190612291565b73ffffffffffffffffffffffffffffffffffffffff8316610ef857610ef382826113ea565b505050565b610ef3838383611457565b805f03610f3c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f955780341015610f91576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610f9173ffffffffffffffffffffffffffffffffffffffff831633308461159c565b5f73ffffffffffffffffffffffffffffffffffffffff821615610ff957610ff473ffffffffffffffffffffffffffffffffffffffff8316306115f4565b610359565b4792915050565b6060815f8167ffffffffffffffff81111561101d5761101d611d4a565b604051908082528060200260200182016040528015611046578160200160208202803683370190505b5090505f5f5b838110156110ff5786868281811061106657611066612085565b9050602002810190611078919061212e565b61108990608081019060600161216a565b915061109482610fb7565b8382815181106110a6576110a6612085565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110f757348382815181106110df576110df612085565b602002602001018181516110f391906120f6565b9052505b60010161104c565b509095945050505050565b5f5b81811015610ef3573683838381811061112757611127612085565b9050602002810190611139919061212e565b905061114b60e0820160c0830161218a565b1561116d5761116d611163606083016040840161216a565b8260800135610f03565b5060010161110c565b83838383825f80805b838110156113a257368c8c8381811061119a5761119a612085565b90506020028101906111ac919061212e565b90506111bb602082018261216a565b93506111cd604082016020830161216a565b9250611270846111e060a08401846123a4565b6111ee916004915f9161240c565b6111f791612433565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061135857506112a461128a606083016040840161216a565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156112dd57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611358575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b1561138f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113998e82611627565b5060010161117f565b505050506113b3848484845f61189a565b505050505050505050565b610ef38383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611ab1565b73ffffffffffffffffffffffffffffffffffffffff8216611437576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f9173ffffffffffffffffffffffffffffffffffffffff831682611bd8565b73ffffffffffffffffffffffffffffffffffffffff82166114a4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b632b6653dc461480156114e0575073ffffffffffffffffffffffffffffffffffffffff831673a614f803b6fd780986a42c78ec9c7f77e6ded13c145b1561157b576040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af1158015611557573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109439190612499565b610ef373ffffffffffffffffffffffffffffffffffffffff84168383611bf1565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166115e757637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61163f611637602083018361216a565b6017903b1190565b611675576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036116b4576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6116c861128a606085016040860161216a565b6116d2575f6116d8565b82608001355b90505f6116f36116ee608086016060870161216a565b610fb7565b9050815f036117295761172961170f606086016040870161216a565b61171f604087016020880161216a565b86608001356113be565b5f80611738602087018761216a565b73ffffffffffffffffffffffffffffffffffffffff168461175c60a08901896123a4565b60405161176a9291906124b4565b5f6040518083038185875af1925050503d805f81146117a4576040519150601f19603f3d011682016040523d82523d5f602084013e6117a9565b606091505b5091509150816117bc576117bc81611c3a565b5f6117d06116ee6080890160608a0161216a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861180160208a018a61216a565b61181160608b0160408c0161216a565b61182160808c0160608d0161216a565b8b60800135898711611833578661183d565b61183d8a886120f6565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826118a96001826120f6565b8181106118b8576118b8612085565b90506020028101906118ca919061212e565b6118db90608081019060600161216a565b90505f5f5f5f5f5f5f5b88811015611aa1576118f860018a6120f6565b81108015611907575088600114155b156119e2578d8d8281811061191e5761191e612085565b9050602002810190611930919061212e565b61194190608081019060600161216a565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146119e2578a818151811061198857611988612085565b602002602001015161199987610fb7565b6119a391906120f6565b965073ffffffffffffffffffffffffffffffffffffffff8616156119c7575f6119c9565b895b9350838711156119e2576119e2868d61057a878b6120f6565b8d8d828181106119f4576119f4612085565b9050602002810190611a06919061212e565b611a1790606081019060400161216a565b9450611a2285610fb7565b925073ffffffffffffffffffffffffffffffffffffffff851615611a46575f611a48565b895b91508183118015611a8557508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611a9957611a99858d61057a85876120f6565b6001016118e5565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156109435773ffffffffffffffffffffffffffffffffffffffff8316611b1a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611b8d573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611bb191906124c3565b10156109435761094373ffffffffffffffffffffffffffffffffffffffff85168483611c44565b5f385f3884865af1610f915763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c31576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c31575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611c3157633e3f8f735f526004601cfd5b5f5f60208385031215611cd3575f5ffd5b823567ffffffffffffffff811115611ce9575f5ffd5b8301601f81018513611cf9575f5ffd5b803567ffffffffffffffff811115611d0f575f5ffd5b8560208260061b8401011115611d23575f5ffd5b6020919091019590945092505050565b5f60208284031215611d43575f5ffd5b5035919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611d9b57611d9b611d4a565b60405290565b5f82601f830112611db0575f5ffd5b813567ffffffffffffffff811115611dca57611dca611d4a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611e1757611e17611d4a565b604052818152838201602001851015611e2e575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611e6d575f5ffd5b919050565b8015158114611e7f575f5ffd5b50565b8035611e6d81611e72565b5f6101408284031215611e9e575f5ffd5b611ea6611d77565b823581529050602082013567ffffffffffffffff811115611ec5575f5ffd5b611ed184828501611da1565b602083015250604082013567ffffffffffffffff811115611ef0575f5ffd5b611efc84828501611da1565b604083015250611f0e60608301611e4a565b6060820152611f1f60808301611e4a565b6080820152611f3060a08301611e4a565b60a082015260c0828101359082015260e08083013590820152611f566101008301611e82565b610100820152611f696101208301611e82565b61012082015292915050565b5f60c08284031215611f85575f5ffd5b50919050565b5f5f5f5f6101008587031215611f9f575f5ffd5b843567ffffffffffffffff811115611fb5575f5ffd5b611fc187828801611e8d565b945050602085013567ffffffffffffffff811115611fdd575f5ffd5b8501601f81018713611fed575f5ffd5b803567ffffffffffffffff811115612003575f5ffd5b8760208260051b8401011115612017575f5ffd5b6020919091019350915061202e8660408701611f75565b905092959194509250565b5f5f60e0838503121561204a575f5ffd5b823567ffffffffffffffff811115612060575f5ffd5b61206c85828601611e8d565b92505061207c8460208501611f75565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b602080825281018290525f8360408301825b858110156120ec578235825260208084013590830152604092830192909101906001016120c4565b5095945050505050565b81810381811115610359577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612160575f5ffd5b9190910192915050565b5f6020828403121561217a575f5ffd5b61218382611e4a565b9392505050565b5f6020828403121561219a575f5ffd5b813561218381611e72565b5f602082840312156121b5575f5ffd5b813560048110612183575f5ffd5b600481106121f8577f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b9052565b5f610100820190508982528860208301528760408301528660608301528560808301528460a083015261223260c08301856121c3565b8260e08301529998505050505050505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526122b8610160840182612245565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526122f38282612245565b915050606084015161231d608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161238c61012085018215159052565b50610120840151801515610140850152509392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126123d7575f5ffd5b83018035915067ffffffffffffffff8211156123f1575f5ffd5b602001915036819003821315612405575f5ffd5b9250929050565b5f5f8585111561241a575f5ffd5b83861115612426575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612492577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f602082840312156124a9575f5ffd5b815161218381611e72565b818382375f9101908152919050565b5f602082840312156124d3575f5ffd5b505191905056fea2646970667358221220bf43957e358cb44d5fbd8b189848a8a5ffad4fb65287eb270eb177ef67e6e4df64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_allBridge";
            readonly type: "address";
            readonly internalType: "contract IAllBridge";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getChainIdToAllBridgeChainId";
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
        readonly name: "initAllBridge";
        readonly inputs: readonly [{
            readonly name: "chainIdConfigs";
            readonly type: "tuple[]";
            readonly internalType: "struct AllBridgeFacet.ChainIdConfig[]";
            readonly components: readonly [{
                readonly name: "chainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "allBridgeChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setChainIdToAllBridgeChainId";
        readonly inputs: readonly [{
            readonly name: "chainIdConfigs";
            readonly type: "tuple[]";
            readonly internalType: "struct AllBridgeFacet.ChainIdConfig[]";
            readonly components: readonly [{
                readonly name: "chainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "allBridgeChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAllBridge";
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
            readonly name: "_allBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly components: readonly [{
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "fees";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiveToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "messenger";
                readonly type: "uint8";
                readonly internalType: "enum IAllBridge.MessengerProtocol";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAllBridge";
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
            readonly name: "_allBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly components: readonly [{
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "fees";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiveToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "messenger";
                readonly type: "uint8";
                readonly internalType: "enum IAllBridge.MessengerProtocol";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "unsetChainIdToAllBridgeChainId";
        readonly inputs: readonly [{
            readonly name: "_chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "AllBridgeChainMappingsInitialized";
        readonly inputs: readonly [{
            readonly name: "chainIdConfigs";
            readonly type: "tuple[]";
            readonly indexed: false;
            readonly internalType: "struct AllBridgeFacet.ChainIdConfig[]";
            readonly components: readonly [{
                readonly name: "chainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "allBridgeChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly anonymous: false;
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
        readonly name: "ChainIdToAllBridgeChainIdSet";
        readonly inputs: readonly [{
            readonly name: "chainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "allBridgeChainId";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ChainIdToAllBridgeChainIdUnset";
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
        readonly name: "InvalidNonEVMReceiver";
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
        readonly name: "UnsupportedAllBridgeChainId";
        readonly inputs: readonly [];
    }];
    static createInterface(): AllBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AllBridgeFacet;
}
export {};
