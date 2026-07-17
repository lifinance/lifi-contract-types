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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161244438038061244483398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b60805161238b6100b95f395f8181610c2a01528181610c6a0152610d44015261238b5ff3fe608060405260043610610063575f3560e01c8063632674691161004157806363267469146100d85780636a51e9a9146100eb578063a62ef168146100fe575f5ffd5b806314e1e3d21461006757806337f6bf4e14610088578063486e7a00146100a7575b5f5ffd5b348015610072575f5ffd5b50610086610081366004611b66565b61011d565b005b348015610093575f5ffd5b506100866100a2366004611bd7565b61024b565b3480156100b2575f5ffd5b506100c66100c1366004611bd7565b61030b565b60405190815260200160405180910390f35b6100866100e6366004611e23565b61031b565b6100866100f9366004611ed1565b610548565b348015610109575f5ffd5b50610086610118366004611b66565b610768565b5f819003610157576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61015f6108c4565b7f21b25a8f1864d80e204c648ddf2ed76e4168f9e40470c07e2a0ac77e9510a9545f5b828110156101dd5783838281811061019c5761019c611f1d565b90506040020160200135825f015f8686858181106101bc576101bc611f1d565b604090810292909201358352506020820192909252015f2055600101610182565b50600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517f3e50ab2149768e79e14486591ce94dda1939b5d7247173675016b9a3c3ce45d79061023e9085908590611f4a565b60405180910390a1505050565b6102536108c4565b7f21b25a8f1864d80e204c648ddf2ed76e4168f9e40470c07e2a0ac77e9510a955547f21b25a8f1864d80e204c648ddf2ed76e4168f9e40470c07e2a0ac77e9510a9549060ff166102d0576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f828152602082905260408082208290555183917f7e2819820559b77138a52234f500981056527217117d8bb3515c9a450465b5fc91a25050565b5f61031582610939565b92915050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610396576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103a63447611f8e565b9050868061010001516103e5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610423576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104468160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561047d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104ba576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104f7576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61050b8a5f01518b60c001518b8b3361099f565b60c08b015261051a8a88610ae1565b50479150508181111561053b5761053b5f846105368585611f8e565b610e49565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105c3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6105d33447611f8e565b9050846105f88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561062f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361066c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036106a9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156106e7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610725576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61073788608001518960c00151610e7e565b6107418888610ae1565b50479150508181111561075d5761075d5f846105368585611f8e565b50505f909155505050565b5f8190036107a2576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107aa6108c4565b7f21b25a8f1864d80e204c648ddf2ed76e4168f9e40470c07e2a0ac77e9510a955547f21b25a8f1864d80e204c648ddf2ed76e4168f9e40470c07e2a0ac77e9510a9549060ff16610827576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b828110156108be575f84848381811061084457610844611f1d565b9050604002015f013590505f85858481811061086257610862611f1d565b5f858152602088815260409182902092820294909401840135918290555181815290935084927f1de6d16294a393ebbc1d9d4a6eafa8ff0bee426895d0a99924a603bb94c63f5792500160405180910390a25050600101610829565b50505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610937576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f8181527f21b25a8f1864d80e204c648ddf2ed76e4168f9e40470c07e2a0ac77e9510a9546020526040812054808203610315576040517f22df402100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f828082036109da576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856109e8600185611f8e565b8181106109f7576109f7611f1d565b9050602002810190610a099190611fc6565b610a1a906080810190606001612002565b90505f610a2682610f32565b905073ffffffffffffffffffffffffffffffffffffffff8216610a5057610a4d3482611f8e565b90505b5f610a5b8888610f7b565b9050610a678888611085565b610a748a898989856110f1565b5f82610a7f85610f32565b610a899190611f8e565b905089811015610ad3576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b5f610aef8360e00151610939565b90507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610bb2578135610b74576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8251604051833581528291907f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a3610c20565b815f01355f1c73ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614610c20576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c5383608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151611339565b610c6360c0830160a08401612022565b15610d42577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd846080015173ffffffffffffffffffffffffffffffffffffffff165f1b8560c00151855f01358587604001358860600135896080016020810190610ce8919061203b565b8a602001356040518963ffffffff1660e01b8152600401610d10989796959493929190612092565b5f604051808303815f87803b158015610d27575f5ffd5b505af1158015610d39573d5f5f3e3d5ffd5b50505050610e1a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd8360200135856080015173ffffffffffffffffffffffffffffffffffffffff165f1b8660c00151865f013586886040013589606001358a6080016020810190610dc7919061203b565b5f6040518a63ffffffff1660e01b8152600401610deb989796959493929190612092565b5f604051808303818588803b158015610e02575f5ffd5b505af1158015610e14573d5f5f3e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18360405161023e9190612127565b73ffffffffffffffffffffffffffffffffffffffff8316610e7357610e6e8282611365565b505050565b610e6e8383836113d2565b805f03610eb7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f105780341015610f0c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610f0c73ffffffffffffffffffffffffffffffffffffffff8316333084611440565b5f73ffffffffffffffffffffffffffffffffffffffff821615610f7457610f6f73ffffffffffffffffffffffffffffffffffffffff831630611498565b610315565b4792915050565b6060815f8167ffffffffffffffff811115610f9857610f98611bee565b604051908082528060200260200182016040528015610fc1578160200160208202803683370190505b5090505f5f5b8381101561107a57868682818110610fe157610fe1611f1d565b9050602002810190610ff39190611fc6565b611004906080810190606001612002565b915061100f82610f32565b83828151811061102157611021611f1d565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611072573483828151811061105a5761105a611f1d565b6020026020010181815161106e9190611f8e565b9052505b600101610fc7565b509095945050505050565b5f5b81811015610e6e57368383838181106110a2576110a2611f1d565b90506020028101906110b49190611fc6565b90506110c660e0820160c08301612022565b156110e8576110e86110de6060830160408401612002565b8260800135610e7e565b50600101611087565b83838383825f80805b8381101561131d57368c8c8381811061111557611115611f1d565b90506020028101906111279190611fc6565b90506111366020820182612002565b93506111486040820160208301612002565b92506111eb8461115b60a084018461223a565b611169916004915f916122a2565b611172916122c9565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806112d3575061121f6112056060830160408401612002565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561125857508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b80156112d3575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b1561130a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113148e826114cb565b506001016110fa565b5050505061132e848484845f61173e565b505050505050505050565b610e6e8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611955565b73ffffffffffffffffffffffffffffffffffffffff82166113b2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f0c73ffffffffffffffffffffffffffffffffffffffff831682611a7c565b73ffffffffffffffffffffffffffffffffffffffff821661141f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e6e73ffffffffffffffffffffffffffffffffffffffff84168383611a95565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661148b57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6114e36114db6020830183612002565b6017903b1190565b611519576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611558576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61156c6112056060850160408601612002565b611576575f61157c565b82608001355b90505f6115976115926080860160608701612002565b610f32565b9050815f036115cd576115cd6115b36060860160408701612002565b6115c36040870160208801612002565b8660800135611339565b5f806115dc6020870187612002565b73ffffffffffffffffffffffffffffffffffffffff168461160060a089018961223a565b60405161160e92919061232f565b5f6040518083038185875af1925050503d805f8114611648576040519150601f19603f3d011682016040523d82523d5f602084013e61164d565b606091505b5091509150816116605761166081611ade565b5f6116746115926080890160608a01612002565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886116a560208a018a612002565b6116b560608b0160408c01612002565b6116c560808c0160608d01612002565b8b608001358987116116d757866116e1565b6116e18a88611f8e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261174d600182611f8e565b81811061175c5761175c611f1d565b905060200281019061176e9190611fc6565b61177f906080810190606001612002565b90505f5f5f5f5f5f5f5b888110156119455761179c60018a611f8e565b811080156117ab575088600114155b15611886578d8d828181106117c2576117c2611f1d565b90506020028101906117d49190611fc6565b6117e5906080810190606001612002565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611886578a818151811061182c5761182c611f1d565b602002602001015161183d87610f32565b6118479190611f8e565b965073ffffffffffffffffffffffffffffffffffffffff86161561186b575f61186d565b895b93508387111561188657611886868d610536878b611f8e565b8d8d8281811061189857611898611f1d565b90506020028101906118aa9190611fc6565b6118bb906060810190604001612002565b94506118c685610f32565b925073ffffffffffffffffffffffffffffffffffffffff8516156118ea575f6118ec565b895b9150818311801561192957508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561193d5761193d858d6105368587611f8e565b600101611789565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156108be5773ffffffffffffffffffffffffffffffffffffffff83166119be576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611a31573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611a55919061233e565b10156108be576108be73ffffffffffffffffffffffffffffffffffffffff85168483611ae8565b5f385f3884865af1610f0c5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611ad5576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611ad5575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611ad557633e3f8f735f526004601cfd5b5f5f60208385031215611b77575f5ffd5b823567ffffffffffffffff811115611b8d575f5ffd5b8301601f81018513611b9d575f5ffd5b803567ffffffffffffffff811115611bb3575f5ffd5b8560208260061b8401011115611bc7575f5ffd5b6020919091019590945092505050565b5f60208284031215611be7575f5ffd5b5035919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611c3f57611c3f611bee565b60405290565b5f82601f830112611c54575f5ffd5b813567ffffffffffffffff811115611c6e57611c6e611bee565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611cbb57611cbb611bee565b604052818152838201602001851015611cd2575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611d11575f5ffd5b919050565b80358015158114611d11575f5ffd5b5f6101408284031215611d36575f5ffd5b611d3e611c1b565b823581529050602082013567ffffffffffffffff811115611d5d575f5ffd5b611d6984828501611c45565b602083015250604082013567ffffffffffffffff811115611d88575f5ffd5b611d9484828501611c45565b604083015250611da660608301611cee565b6060820152611db760808301611cee565b6080820152611dc860a08301611cee565b60a082015260c0828101359082015260e08083013590820152611dee6101008301611d16565b610100820152611e016101208301611d16565b61012082015292915050565b5f60c08284031215611e1d575f5ffd5b50919050565b5f5f5f5f6101008587031215611e37575f5ffd5b843567ffffffffffffffff811115611e4d575f5ffd5b611e5987828801611d25565b945050602085013567ffffffffffffffff811115611e75575f5ffd5b8501601f81018713611e85575f5ffd5b803567ffffffffffffffff811115611e9b575f5ffd5b8760208260051b8401011115611eaf575f5ffd5b60209190910193509150611ec68660408701611e0d565b905092959194509250565b5f5f60e08385031215611ee2575f5ffd5b823567ffffffffffffffff811115611ef8575f5ffd5b611f0485828601611d25565b925050611f148460208501611e0d565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b602080825281018290525f8360408301825b85811015611f8457823582526020808401359083015260409283019290910190600101611f5c565b5095945050505050565b81810381811115610315577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611ff8575f5ffd5b9190910192915050565b5f60208284031215612012575f5ffd5b61201b82611cee565b9392505050565b5f60208284031215612032575f5ffd5b61201b82611d16565b5f6020828403121561204b575f5ffd5b81356004811061201b575f5ffd5b6004811061208e577f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b9052565b5f610100820190508982528860208301528760408301528660608301528560808301528460a08301526120c860c0830185612059565b8260e08301529998505050505050505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f6020830151610140604084015261214e6101608401826120db565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261218982826120db565b91505060608401516121b3608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161222261012085018215159052565b50610120840151801515610140850152509392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261226d575f5ffd5b83018035915067ffffffffffffffff821115612287575f5ffd5b60200191503681900382131561229b575f5ffd5b9250929050565b5f5f858511156122b0575f5ffd5b838611156122bc575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612328577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f6020828403121561234e575f5ffd5b505191905056fea2646970667358221220039933f1f8f988b8816044c01a698998ce428206775198fea47a1ade6354b9a864736f6c634300081d0033";
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
