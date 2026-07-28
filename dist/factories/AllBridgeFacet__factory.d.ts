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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b506040516124c93803806124c983398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516124106100b95f395f8181610caf01528181610cef0152610dc901526124105ff3fe608060405260043610610063575f3560e01c8063632674691161004157806363267469146100d85780636a51e9a9146100eb578063a62ef168146100fe575f5ffd5b806314e1e3d21461006757806337f6bf4e14610088578063486e7a00146100a7575b5f5ffd5b348015610072575f5ffd5b50610086610081366004611beb565b61011d565b005b348015610093575f5ffd5b506100866100a2366004611c5c565b61028f565b3480156100b2575f5ffd5b506100c66100c1366004611c5c565b61034f565b60405190815260200160405180910390f35b6100866100e6366004611ea8565b61035f565b6100866100f9366004611f56565b61058c565b348015610109575f5ffd5b50610086610118366004611beb565b6107ac565b5f819003610157576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61015f610949565b7f21b25a8f1864d80e204c648ddf2ed76e4168f9e40470c07e2a0ac77e9510a9545f5b82811015610221575f84848381811061019d5761019d611fa2565b9050604002015f013590505f8585848181106101bb576101bb611fa2565b905060400201602001359050815f14806101d3575080155b1561020a576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f9182526020849052604090912055600101610182565b50600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517f3e50ab2149768e79e14486591ce94dda1939b5d7247173675016b9a3c3ce45d7906102829085908590611fcf565b60405180910390a1505050565b610297610949565b7f21b25a8f1864d80e204c648ddf2ed76e4168f9e40470c07e2a0ac77e9510a955547f21b25a8f1864d80e204c648ddf2ed76e4168f9e40470c07e2a0ac77e9510a9549060ff16610314576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f828152602082905260408082208290555183917f7e2819820559b77138a52234f500981056527217117d8bb3515c9a450465b5fc91a25050565b5f610359826109be565b92915050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103da576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103ea3447612013565b905086806101000151610429576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610467576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861048a8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104c1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104fe576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361053b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61054f8a5f01518b60c001518b8b33610a24565b60c08b015261055e8a88610b66565b50479150508181111561057f5761057f5f8461057a8585612013565b610ece565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610607576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6106173447612013565b90508461063c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610673576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036106b0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036106ed576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561072b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610769576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61077b88608001518960c00151610f03565b6107858888610b66565b5047915050818111156107a1576107a15f8461057a8585612013565b50505f909155505050565b5f8190036107e6576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107ee610949565b7f21b25a8f1864d80e204c648ddf2ed76e4168f9e40470c07e2a0ac77e9510a955547f21b25a8f1864d80e204c648ddf2ed76e4168f9e40470c07e2a0ac77e9510a9549060ff1661086b576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b82811015610943575f84848381811061088857610888611fa2565b9050604002015f013590505f8585848181106108a6576108a6611fa2565b905060400201602001359050815f14806108be575080155b156108f5576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8281526020858152604091829020839055905182815283917f1de6d16294a393ebbc1d9d4a6eafa8ff0bee426895d0a99924a603bb94c63f57910160405180910390a2505060010161086d565b50505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146109bc576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f8181527f21b25a8f1864d80e204c648ddf2ed76e4168f9e40470c07e2a0ac77e9510a9546020526040812054808203610359576040517f22df402100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f82808203610a5f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610a6d600185612013565b818110610a7c57610a7c611fa2565b9050602002810190610a8e919061204b565b610a9f906080810190606001612087565b90505f610aab82610fb7565b905073ffffffffffffffffffffffffffffffffffffffff8216610ad557610ad23482612013565b90505b5f610ae08888611000565b9050610aec888861110a565b610af98a89898985611176565b5f82610b0485610fb7565b610b0e9190612013565b905089811015610b58576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b5f610b748360e001516109be565b90507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610c37578135610bf9576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8251604051833581528291907f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a3610ca5565b815f01355f1c73ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614610ca5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cd883608001517f00000000000000000000000000000000000000000000000000000000000000008560c001516113be565b610ce860c0830160a084016120a7565b15610dc7577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd846080015173ffffffffffffffffffffffffffffffffffffffff165f1b8560c00151855f01358587604001358860600135896080016020810190610d6d91906120c0565b8a602001356040518963ffffffff1660e01b8152600401610d95989796959493929190612117565b5f604051808303815f87803b158015610dac575f5ffd5b505af1158015610dbe573d5f5f3e3d5ffd5b50505050610e9f565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd8360200135856080015173ffffffffffffffffffffffffffffffffffffffff165f1b8660c00151865f013586886040013589606001358a6080016020810190610e4c91906120c0565b5f6040518a63ffffffff1660e01b8152600401610e70989796959493929190612117565b5f604051808303818588803b158015610e87575f5ffd5b505af1158015610e99573d5f5f3e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18360405161028291906121ac565b73ffffffffffffffffffffffffffffffffffffffff8316610ef857610ef382826113ea565b505050565b610ef3838383611457565b805f03610f3c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f955780341015610f91576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610f9173ffffffffffffffffffffffffffffffffffffffff83163330846114c5565b5f73ffffffffffffffffffffffffffffffffffffffff821615610ff957610ff473ffffffffffffffffffffffffffffffffffffffff83163061151d565b610359565b4792915050565b6060815f8167ffffffffffffffff81111561101d5761101d611c73565b604051908082528060200260200182016040528015611046578160200160208202803683370190505b5090505f5f5b838110156110ff5786868281811061106657611066611fa2565b9050602002810190611078919061204b565b611089906080810190606001612087565b915061109482610fb7565b8382815181106110a6576110a6611fa2565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110f757348382815181106110df576110df611fa2565b602002602001018181516110f39190612013565b9052505b60010161104c565b509095945050505050565b5f5b81811015610ef3573683838381811061112757611127611fa2565b9050602002810190611139919061204b565b905061114b60e0820160c083016120a7565b1561116d5761116d6111636060830160408401612087565b8260800135610f03565b5060010161110c565b83838383825f80805b838110156113a257368c8c8381811061119a5761119a611fa2565b90506020028101906111ac919061204b565b90506111bb6020820182612087565b93506111cd6040820160208301612087565b9250611270846111e060a08401846122bf565b6111ee916004915f91612327565b6111f79161234e565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061135857506112a461128a6060830160408401612087565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156112dd57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611358575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b1561138f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113998e82611550565b5060010161117f565b505050506113b3848484845f6117c3565b505050505050505050565b610ef38383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119da565b73ffffffffffffffffffffffffffffffffffffffff8216611437576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f9173ffffffffffffffffffffffffffffffffffffffff831682611b01565b73ffffffffffffffffffffffffffffffffffffffff82166114a4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ef373ffffffffffffffffffffffffffffffffffffffff84168383611b1a565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661151057637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6115686115606020830183612087565b6017903b1190565b61159e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036115dd576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6115f161128a6060850160408601612087565b6115fb575f611601565b82608001355b90505f61161c6116176080860160608701612087565b610fb7565b9050815f03611652576116526116386060860160408701612087565b6116486040870160208801612087565b86608001356113be565b5f806116616020870187612087565b73ffffffffffffffffffffffffffffffffffffffff168461168560a08901896122bf565b6040516116939291906123b4565b5f6040518083038185875af1925050503d805f81146116cd576040519150601f19603f3d011682016040523d82523d5f602084013e6116d2565b606091505b5091509150816116e5576116e581611b63565b5f6116f96116176080890160608a01612087565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861172a60208a018a612087565b61173a60608b0160408c01612087565b61174a60808c0160608d01612087565b8b6080013589871161175c5786611766565b6117668a88612013565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826117d2600182612013565b8181106117e1576117e1611fa2565b90506020028101906117f3919061204b565b611804906080810190606001612087565b90505f5f5f5f5f5f5f5b888110156119ca5761182160018a612013565b81108015611830575088600114155b1561190b578d8d8281811061184757611847611fa2565b9050602002810190611859919061204b565b61186a906080810190606001612087565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461190b578a81815181106118b1576118b1611fa2565b60200260200101516118c287610fb7565b6118cc9190612013565b965073ffffffffffffffffffffffffffffffffffffffff8616156118f0575f6118f2565b895b93508387111561190b5761190b868d61057a878b612013565b8d8d8281811061191d5761191d611fa2565b905060200281019061192f919061204b565b611940906060810190604001612087565b945061194b85610fb7565b925073ffffffffffffffffffffffffffffffffffffffff85161561196f575f611971565b895b915081831180156119ae57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156119c2576119c2858d61057a8587612013565b60010161180e565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156109435773ffffffffffffffffffffffffffffffffffffffff8316611a43576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611ab6573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611ada91906123c3565b10156109435761094373ffffffffffffffffffffffffffffffffffffffff85168483611b6d565b5f385f3884865af1610f915763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611b5a576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611b5a575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611b5a57633e3f8f735f526004601cfd5b5f5f60208385031215611bfc575f5ffd5b823567ffffffffffffffff811115611c12575f5ffd5b8301601f81018513611c22575f5ffd5b803567ffffffffffffffff811115611c38575f5ffd5b8560208260061b8401011115611c4c575f5ffd5b6020919091019590945092505050565b5f60208284031215611c6c575f5ffd5b5035919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611cc457611cc4611c73565b60405290565b5f82601f830112611cd9575f5ffd5b813567ffffffffffffffff811115611cf357611cf3611c73565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611d4057611d40611c73565b604052818152838201602001851015611d57575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611d96575f5ffd5b919050565b80358015158114611d96575f5ffd5b5f6101408284031215611dbb575f5ffd5b611dc3611ca0565b823581529050602082013567ffffffffffffffff811115611de2575f5ffd5b611dee84828501611cca565b602083015250604082013567ffffffffffffffff811115611e0d575f5ffd5b611e1984828501611cca565b604083015250611e2b60608301611d73565b6060820152611e3c60808301611d73565b6080820152611e4d60a08301611d73565b60a082015260c0828101359082015260e08083013590820152611e736101008301611d9b565b610100820152611e866101208301611d9b565b61012082015292915050565b5f60c08284031215611ea2575f5ffd5b50919050565b5f5f5f5f6101008587031215611ebc575f5ffd5b843567ffffffffffffffff811115611ed2575f5ffd5b611ede87828801611daa565b945050602085013567ffffffffffffffff811115611efa575f5ffd5b8501601f81018713611f0a575f5ffd5b803567ffffffffffffffff811115611f20575f5ffd5b8760208260051b8401011115611f34575f5ffd5b60209190910193509150611f4b8660408701611e92565b905092959194509250565b5f5f60e08385031215611f67575f5ffd5b823567ffffffffffffffff811115611f7d575f5ffd5b611f8985828601611daa565b925050611f998460208501611e92565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b602080825281018290525f8360408301825b8581101561200957823582526020808401359083015260409283019290910190600101611fe1565b5095945050505050565b81810381811115610359577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261207d575f5ffd5b9190910192915050565b5f60208284031215612097575f5ffd5b6120a082611d73565b9392505050565b5f602082840312156120b7575f5ffd5b6120a082611d9b565b5f602082840312156120d0575f5ffd5b8135600481106120a0575f5ffd5b60048110612113577f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b9052565b5f610100820190508982528860208301528760408301528660608301528560808301528460a083015261214d60c08301856120de565b8260e08301529998505050505050505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526121d3610160840182612160565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261220e8282612160565b9150506060840151612238608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516122a761012085018215159052565b50610120840151801515610140850152509392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126122f2575f5ffd5b83018035915067ffffffffffffffff82111561230c575f5ffd5b602001915036819003821315612320575f5ffd5b9250929050565b5f5f85851115612335575f5ffd5b83861115612341575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156123ad577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f602082840312156123d3575f5ffd5b505191905056fea2646970667358221220f349667db8f209df59117e237c7ad90ffda00c98cfb2354162e1e5108c88140564736f6c634300081d0033";
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
