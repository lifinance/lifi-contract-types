import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OptimismBridgeFacet, OptimismBridgeFacetInterface } from "../OptimismBridgeFacet";
declare type OptimismBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OptimismBridgeFacet__factory extends ContractFactory {
    constructor(...args: OptimismBridgeFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OptimismBridgeFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OptimismBridgeFacet;
    connect(signer: Signer): OptimismBridgeFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50612cb38061001c5f395ff3fe60806040526004361061003e575f3560e01c80635bb5d44814610042578063899cc31714610057578063ce8a97a514610076578063decb09d714610089575b5f5ffd5b61005561005036600461268b565b6100a8565b005b348015610062575f5ffd5b50610055610071366004612738565b6102d5565b6100556100843660046127ba565b610540565b348015610094575f5ffd5b506100556100a3366004612806565b610760565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610123576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610133344761283d565b905086806101000151610172576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101b0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101d38160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561020a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610247576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610284576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102988a5f01518b60c001518b8b336108d4565b60c08b01526102a78a88610a17565b5047915050818111156102c8576102c85f846102c3858561283d565b610d8f565b50505f9091555050505050565b6102dd610dc5565b7f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca4547f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca39074010000000000000000000000000000000000000000900460ff1615610373576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b838110156104a6575f85858381811061039057610390612875565b90506040020160200160208101906103a891906128a2565b73ffffffffffffffffffffffffffffffffffffffff16036103f5576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84848281811061040757610407612875565b905060400201602001602081019061041f91906128a2565b825f87878581811061043357610433612875565b61044992602060409092020190810191506128a2565b73ffffffffffffffffffffffffffffffffffffffff908116825260208201929092526040015f2080547fffffffffffffffffffffffff00000000000000000000000000000000000000001692909116919091179055600101610375565b506001810180547fffffffffffffffffffffff0000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617740100000000000000000000000000000000000000001790556040517fd192688003c02a257d1ee3ef083c31f3ba31e400ad8655bf4257081255c915689061053290869086906128c4565b60405180910390a150505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105bb576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6105cb344761283d565b9050848061010001511561060b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610649576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8661066c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106a3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036106e0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361071d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61072f88608001518960c00151610e3a565b6107398888610a17565b504791505081811115610755576107555f846102c3858561283d565b50505f909155505050565b610768610dc5565b7f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca4547f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca39074010000000000000000000000000000000000000000900460ff166107fd576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661084a576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381165f818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917f8ba151f3405c32cff2d4c159409e00b97b0b46fbcbe59438e7f62c1283f80638910160405180910390a2505050565b5f8280820361090f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561091d60018561283d565b81811061092c5761092c612875565b905060200281019061093e9190612946565b61094f9060808101906060016128a2565b90505f61095b82610fac565b905073ffffffffffffffffffffffffffffffffffffffff821661098557610982348261283d565b90505b5f6109908888611062565b905061099c888861116c565b6109a98a898989856111d8565b5f826109b485610fac565b6109be919061283d565b905089811015610a09576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff9081165f9081527f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca360208190526040822054909216908115610a735781610a8f565b600183015473ffffffffffffffffffffffffffffffffffffffff165b9050610ab3856080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610b875760c085015160a086015173ffffffffffffffffffffffffffffffffffffffff831691639a2ac6d591610af06040890160208a01612982565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff909216600483015263ffffffff166024820152606060448201525f60648201526084015f604051808303818588803b158015610b6b575f5ffd5b505af1158015610b7d573d5f5f3e3d5ffd5b5050505050610d51565b610b9a8560800151828760c00151611583565b610baa60608501604086016129a5565b15610c5c5760a085015160c08601516040517fffaad6a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169263ffaad6a592610c2a9260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b5f604051808303815f87803b158015610c41575f5ffd5b505af1158015610c53573d5f5f3e3d5ffd5b50505050610d51565b608085015173ffffffffffffffffffffffffffffffffffffffff82169063838b252090610c8c60208801886128a2565b60a089015160c08a0151610ca660408b0160208c01612982565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff95861660048201529385166024850152939091166044830152606482015263ffffffff91909116608482015260c060a48201525f60c482015260e4015f604051808303815f87803b158015610d3a575f5ffd5b505af1158015610d4c573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f185604051610d809190612a0c565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610dbb57610db68383836116b8565b505050565b610db68282611837565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610e38576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b805f03610e73576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ecc5780341015610ec8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610f36573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f5a9190612b1f565b905081811015610fa0576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a00565b610db68333308561195d565b5f73ffffffffffffffffffffffffffffffffffffffff82161561105a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611031573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110559190612b1f565b61105c565b475b92915050565b6060815f8167ffffffffffffffff81111561107f5761107f612441565b6040519080825280602002602001820160405280156110a8578160200160208202803683370190505b5090505f805b83811015611161578686828181106110c8576110c8612875565b90506020028101906110da9190612946565b6110eb9060808101906060016128a2565b91506110f682610fac565b83828151811061110857611108612875565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611159573483828151811061114157611141612875565b60200260200101818151611155919061283d565b9052505b6001016110ae565b509095945050505050565b5f5b81811015610db6573683838381811061118957611189612875565b905060200281019061119b9190612946565b90506111ad60e0820160c083016129a5565b156111cf576111cf6111c560608301604084016128a2565b8260800135610e3a565b5060010161116e565b83838383826001811461149f575f85856111f360018561283d565b81811061120257611202612875565b90506020028101906112149190612946565b6112259060808101906060016128a2565b90505f89815b818110156113cc57368d8d8381811061124657611246612875565b90506020028101906112589190612946565b905061128761126d60608301604084016128a2565b73ffffffffffffffffffffffffffffffffffffffff161590565b806112e957506112e96112a060408301602084016128a2565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561130057506113006112a060208301836128a2565b8015611383575061138361131760a0830183612b36565b611325916004915f91612b9e565b61132e91612bc5565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6113b9576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113c38f82611b72565b5060010161122b565b505f90505b6113dc60018561283d565b811015611497575f8888838181106113f6576113f6612875565b90506020028101906114089190612946565b6114199060808101906060016128a2565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461148e5785828151811061146057611460612875565b602002602001015161147182610fac565b61147b919061283d565b9250821561148e5761148e818885610d8f565b506001016113d1565b505050611577565b875f5b8181101561157457368b8b838181106114bd576114bd612875565b90506020028101906114cf9190612946565b90506114e461126d60608301604084016128a2565b806114fd57506114fd6112a060408301602084016128a2565b801561151457506115146112a060208301836128a2565b801561152b575061152b61131760a0830183612b36565b611561576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61156b8d82611b72565b506001016114a2565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166115a357505050565b73ffffffffffffffffffffffffffffffffffffffff82166115f0576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611663573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116879190612b1f565b1015610db657610db683837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611e45565b73ffffffffffffffffffffffffffffffffffffffff8316611705576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611752576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156117bc573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117e09190612b1f565b905080821115611826576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a00565b611831848484611fb2565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611884576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156118c7576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610a00565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f811461191d576040519150601f19603f3d011682016040523d82523d5f602084013e611922565b606091505b5050905080610db6576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166119aa576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166119f7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa158015611a65573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611a899190612b1f565b9050611a9782868686612008565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611b05573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b299190612b1f565b611b33919061283d565b14611b6a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b611b88611b8260208301836128a2565b3b151590565b611bbe576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611bfd576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611c1161126d60608501604086016128a2565b611c1b575f611c21565b82608001355b90505f611c3c611c3760608601604087016128a2565b610fac565b90505f611c52611c3760808701606088016128a2565b9050825f03611c8857611c88611c6e60608701604088016128a2565b611c7e60408801602089016128a2565b8760800135611583565b8460800135821015611cd3576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610a00565b5f80611ce260208801886128a2565b73ffffffffffffffffffffffffffffffffffffffff1685611d0660a08a018a612b36565b604051611d14929190612c2b565b5f6040518083038185875af1925050503d805f8114611d4e576040519150601f19603f3d011682016040523d82523d5f602084013e611d53565b606091505b509150915081611d6657611d6681612066565b5f611d7a611c3760808a0160608b016128a2565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611dab60208b018b6128a2565b611dbb60608c0160408d016128a2565b611dcb60808d0160608e016128a2565b8c60800135898711611ddd5786611de7565b611de78a8861283d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611ed18482612070565b6118315760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f6044820152611fa89085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261212b565b611831848261212b565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610db69084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611f26565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526118319085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611f26565b8051602082018181fd5b5f5f5f8473ffffffffffffffffffffffffffffffffffffffff16846040516120989190612c3a565b5f604051808303815f865af19150503d805f81146120d1576040519150601f19603f3d011682016040523d82523d5f602084013e6120d6565b606091505b50915091508180156121005750805115806121005750808060200190518101906121009190612c50565b8015612122575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b5f61218c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166122389092919063ffffffff16565b905080515f14806121ac5750808060200190518101906121ac9190612c50565b610db6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a00565b606061224684845f8561224e565b949350505050565b6060824710156122e0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a00565b5f5f8673ffffffffffffffffffffffffffffffffffffffff1685876040516123089190612c3a565b5f6040518083038185875af1925050503d805f8114612342576040519150601f19603f3d011682016040523d82523d5f602084013e612347565b606091505b509150915061235887838387612363565b979650505050505050565b606083156123f85782515f036123f15773ffffffffffffffffffffffffffffffffffffffff85163b6123f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a00565b5081612246565b612246838381511561240d5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a009190612c6b565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561249257612492612441565b60405290565b5f82601f8301126124a7575f5ffd5b813567ffffffffffffffff8111156124c1576124c1612441565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561250e5761250e612441565b604052818152838201602001851015612525575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114612562575f5ffd5b50565b803561257081612541565b919050565b8015158114612562575f5ffd5b803561257081612575565b5f610140828403121561259e575f5ffd5b6125a661246e565b823581529050602082013567ffffffffffffffff8111156125c5575f5ffd5b6125d184828501612498565b602083015250604082013567ffffffffffffffff8111156125f0575f5ffd5b6125fc84828501612498565b60408301525061260e60608301612565565b606082015261261f60808301612565565b608082015261263060a08301612565565b60a082015260c0828101359082015260e080830135908201526126566101008301612582565b6101008201526126696101208301612582565b61012082015292915050565b5f60608284031215612685575f5ffd5b50919050565b5f5f5f5f60a0858703121561269e575f5ffd5b843567ffffffffffffffff8111156126b4575f5ffd5b6126c08782880161258d565b945050602085013567ffffffffffffffff8111156126dc575f5ffd5b8501601f810187136126ec575f5ffd5b803567ffffffffffffffff811115612702575f5ffd5b8760208260051b8401011115612716575f5ffd5b6020919091019350915061272d8660408701612675565b905092959194509250565b5f5f5f6040848603121561274a575f5ffd5b833567ffffffffffffffff811115612760575f5ffd5b8401601f81018613612770575f5ffd5b803567ffffffffffffffff811115612786575f5ffd5b8660208260061b840101111561279a575f5ffd5b6020918201945092508401356127af81612541565b809150509250925092565b5f5f608083850312156127cb575f5ffd5b823567ffffffffffffffff8111156127e1575f5ffd5b6127ed8582860161258d565b9250506127fd8460208501612675565b90509250929050565b5f5f60408385031215612817575f5ffd5b823561282281612541565b9150602083013561283281612541565b809150509250929050565b8181038181111561105c577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f602082840312156128b2575f5ffd5b81356128bd81612541565b9392505050565b602080825281018290525f8360408301825b8581101561293c5782356128e981612541565b73ffffffffffffffffffffffffffffffffffffffff168252602083013561290f81612541565b73ffffffffffffffffffffffffffffffffffffffff166020830152604092830192909101906001016128d6565b5095945050505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612978575f5ffd5b9190910192915050565b5f60208284031215612992575f5ffd5b813563ffffffff811681146128bd575f5ffd5b5f602082840312156129b5575f5ffd5b81356128bd81612575565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152612a336101608401826129c0565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152612a6e82826129c0565b9150506060840151612a98608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151612b0761012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215612b2f575f5ffd5b5051919050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612b69575f5ffd5b83018035915067ffffffffffffffff821115612b83575f5ffd5b602001915036819003821315612b97575f5ffd5b9250929050565b5f5f85851115612bac575f5ffd5b83861115612bb8575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612c24577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f82518060208501845e5f920191825250919050565b5f60208284031215612c60575f5ffd5b81516128bd81612575565b602081525f6128bd60208301846129c056fea2646970667358221220b01e481a5d0bf27050015f740c322ad514cbca39648914d18deae54e291fdf7164736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "initOptimism";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly internalType: "struct OptimismBridgeFacet.Config[]";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bridge";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }, {
            readonly name: "standardBridge";
            readonly type: "address";
            readonly internalType: "contract IL1StandardBridge";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "registerOptimismBridge";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "bridge";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaOptimismBridge";
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
            readonly name: "_optimismData";
            readonly type: "tuple";
            readonly internalType: "struct OptimismBridgeFacet.OptimismData";
            readonly components: readonly [{
                readonly name: "assetIdOnL2";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "l2Gas";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "isSynthetix";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaOptimismBridge";
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
            readonly name: "_optimismData";
            readonly type: "tuple";
            readonly internalType: "struct OptimismBridgeFacet.OptimismData";
            readonly components: readonly [{
                readonly name: "assetIdOnL2";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "l2Gas";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "isSynthetix";
                readonly type: "bool";
                readonly internalType: "bool";
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
        readonly name: "OptimismBridgeRegistered";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "bridge";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OptimismInitialized";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly indexed: false;
            readonly internalType: "struct OptimismBridgeFacet.Config[]";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bridge";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AlreadyInitialized";
        readonly inputs: readonly [];
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
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
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
        readonly name: "NativeAssetTransferFailed";
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
        readonly name: "NoTransferToNullAddress";
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
    }];
    static createInterface(): OptimismBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OptimismBridgeFacet;
}
export {};
