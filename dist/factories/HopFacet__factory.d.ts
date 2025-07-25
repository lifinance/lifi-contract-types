import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HopFacet, HopFacetInterface } from "../HopFacet";
type HopFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HopFacet__factory extends ContractFactory {
    constructor(...args: HopFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<HopFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): HopFacet;
    connect(signer: Signer): HopFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506120f48061001c5f395ff3fe60806040526004361061003e575f3560e01c80633961d1ed1461004257806367fdd71e14610063578063a01fe78414610082578063b3b6358714610095575b5f5ffd5b34801561004d575f5ffd5b5061006161005c36600461192f565b6100a8565b005b34801561006e575f5ffd5b5061006161007d366004611960565b6101a8565b610061610090366004611bdf565b610343565b6100616100a3366004611c8d565b610575565b6100b0610795565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b873ffffffffffffffffffffffffffffffffffffffff821661011e576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381165f818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917fcf56a25ddc5c325bc2d2557f7eee90d061f2e19b7294a6ef738f86f2c3d9280c910160405180910390a2505050565b6101b0610795565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b85f5b82811015610304575f8484838181106101ee576101ee611cd1565b90506040020160200160208101906102069190611cfe565b73ffffffffffffffffffffffffffffffffffffffff1603610253576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83838281811061026557610265611cd1565b905060400201602001602081019061027d9190611cfe565b825f86868581811061029157610291611cd1565b6102a79260206040909202019081019150611cfe565b73ffffffffffffffffffffffffffffffffffffffff908116825260208201929092526040015f2080547fffffffffffffffffffffffff000000000000000000000000000000000000000016929091169190911790556001016101d3565b507f5910f57b2fdae9f2f45a1d913c63f55985d0f77d120de8aab63e686ff670dde38383604051610336929190611d1e565b60405180910390a1505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103be576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103ce3447611dc9565b90508680610100015161040d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561044b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861046e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104a5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361051f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105388a5f01518b60c001518b8b338c60e0013561080a565b60c08b01526105478a886109a4565b504791505081811115610568576105685f846105638585611dc9565b610c5b565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105f0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6106003447611dc9565b90508480610100015115610640576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061012001511561067e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866106a18160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106d8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610715576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610752576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61076488608001518960c00151610c90565b61076e88886109a4565b50479150508181111561078a5761078a5f846105638585611dc9565b50505f909155505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610808576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f83808203610845576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610853600185611dc9565b81811061086257610862611cd1565b90506020028101906108749190611ddc565b610885906080810190606001611cfe565b90505f61089182610d44565b905073ffffffffffffffffffffffffffffffffffffffff82166108bb576108b83482611dc9565b90505b5f6108c68989610d8e565b90506108d28989610e98565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff8916602082015290810187905261090d818b8b85610f04565b5f8361091886610d44565b6109229190611dc9565b905073ffffffffffffffffffffffffffffffffffffffff851661094c576109498882611dc9565b90505b8b811015610994576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff8082165f8181527f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b860208190526040909120549092169015610a0957610a0983828760c001516110d4565b5f73ffffffffffffffffffffffffffffffffffffffff841615610a30578460e00135610a43565b60c0860151610a439060e0870135611e18565b90504660011480610a545750466005145b15610b4e578173ffffffffffffffffffffffffffffffffffffffff1663deace8f5828860e001518960a001518a60c001518a606001358b608001358c60a0016020810190610aa29190611cfe565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019690965273ffffffffffffffffffffffffffffffffffffffff94851660248701526044860193909352606485019190915260848401521660a482015260c089013560c482015260e4015f604051808303818588803b158015610b32575f5ffd5b505af1158015610b44573d5f5f3e3d5ffd5b5050505050610c1c565b60e086015160a087015160c0880151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501526044840191909152873560648401526020880135608484015287013560a4830152606087013560c4830152608087013560e483015283169063eea0d7b2908390610104015f604051808303818588803b158015610c04575f5ffd5b505af1158015610c16573d5f5f3e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610c4b9190611e77565b60405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c8557610c808282611100565b505050565b610c8083838361116d565b805f03610cc9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d225780341015610d1e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610d1e73ffffffffffffffffffffffffffffffffffffffff83163330846111db565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d8657610d8173ffffffffffffffffffffffffffffffffffffffff831630611233565b610d88565b475b92915050565b6060815f8167ffffffffffffffff811115610dab57610dab6119d1565b604051908082528060200260200182016040528015610dd4578160200160208202803683370190505b5090505f5f5b83811015610e8d57868682818110610df457610df4611cd1565b9050602002810190610e069190611ddc565b610e17906080810190606001611cfe565b9150610e2282610d44565b838281518110610e3457610e34611cd1565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e855734838281518110610e6d57610e6d611cd1565b60200260200101818151610e819190611dc9565b9052505b600101610dda565b509095945050505050565b5f5b81811015610c805736838383818110610eb557610eb5611cd1565b9050602002810190610ec79190611ddc565b9050610ed960e0820160c08301611f8a565b15610efb57610efb610ef16060830160408401611cfe565b8260800135610c90565b50600101610e9a565b60208401516040850151849184918490835f5b818110156110ba57368a8a83818110610f3257610f32611cd1565b9050602002810190610f449190611ddc565b9050610f73610f596060830160408401611cfe565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610fd55750610fd5610f8c6040830160208401611cfe565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610fec5750610fec610f8c6020830183611cfe565b801561106f575061106f61100360a0830183611fa3565b611011916004915f9161200b565b61101a91612032565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6110a5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b516110b19082611266565b50600101610f17565b50506110c985858585856114d9565b505050505050505050565b610c808383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116f0565b73ffffffffffffffffffffffffffffffffffffffff821661114d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d1e73ffffffffffffffffffffffffffffffffffffffff83168261181d565b73ffffffffffffffffffffffffffffffffffffffff82166111ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c8073ffffffffffffffffffffffffffffffffffffffff84168383611836565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661122657637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61127e6112766020830183611cfe565b6017903b1190565b6112b4576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036112f3576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611307610f596060850160408601611cfe565b611311575f611317565b82608001355b90505f61133261132d6080860160608701611cfe565b610d44565b9050815f036113685761136861134e6060860160408701611cfe565b61135e6040870160208801611cfe565b86608001356110d4565b5f806113776020870187611cfe565b73ffffffffffffffffffffffffffffffffffffffff168461139b60a0890189611fa3565b6040516113a9929190612098565b5f6040518083038185875af1925050503d805f81146113e3576040519150601f19603f3d011682016040523d82523d5f602084013e6113e8565b606091505b5091509150816113fb576113fb8161187f565b5f61140f61132d6080890160608a01611cfe565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861144060208a018a611cfe565b61145060608b0160408c01611cfe565b61146060808c0160608d01611cfe565b8b60800135898711611472578661147c565b61147c8a88611dc9565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826114e8600182611dc9565b8181106114f7576114f7611cd1565b90506020028101906115099190611ddc565b61151a906080810190606001611cfe565b90505f5f5f5f5f5f5f5b888110156116e05761153760018a611dc9565b81108015611546575088600114155b15611621578d8d8281811061155d5761155d611cd1565b905060200281019061156f9190611ddc565b611580906080810190606001611cfe565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611621578a81815181106115c7576115c7611cd1565b60200260200101516115d887610d44565b6115e29190611dc9565b965073ffffffffffffffffffffffffffffffffffffffff861615611606575f611608565b895b93508387111561162157611621868d610563878b611dc9565b8d8d8281811061163357611633611cd1565b90506020028101906116459190611ddc565b611656906060810190604001611cfe565b945061166185610d44565b925073ffffffffffffffffffffffffffffffffffffffff851615611685575f611687565b895b915081831180156116c457508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156116d8576116d8858d6105638587611dc9565b600101611524565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156118175773ffffffffffffffffffffffffffffffffffffffff8316611759576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156117cc573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117f091906120a7565b10156118175761181773ffffffffffffffffffffffffffffffffffffffff85168483611889565b50505050565b5f385f3884865af1610d1e5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611876576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611876575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661187657633e3f8f735f526004601cfd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461192a575f5ffd5b919050565b5f5f60408385031215611940575f5ffd5b61194983611907565b915061195760208401611907565b90509250929050565b5f5f60208385031215611971575f5ffd5b823567ffffffffffffffff811115611987575f5ffd5b8301601f81018513611997575f5ffd5b803567ffffffffffffffff8111156119ad575f5ffd5b8560208260061b84010111156119c1575f5ffd5b6020919091019590945092505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611a2257611a226119d1565b60405290565b5f82601f830112611a37575f5ffd5b813567ffffffffffffffff811115611a5157611a516119d1565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611a9e57611a9e6119d1565b604052818152838201602001851015611ab5575f5ffd5b816020850160208301375f918101602001919091529392505050565b8035801515811461192a575f5ffd5b5f6101408284031215611af1575f5ffd5b611af96119fe565b823581529050602082013567ffffffffffffffff811115611b18575f5ffd5b611b2484828501611a28565b602083015250604082013567ffffffffffffffff811115611b43575f5ffd5b611b4f84828501611a28565b604083015250611b6160608301611907565b6060820152611b7260808301611907565b6080820152611b8360a08301611907565b60a082015260c0828101359082015260e08083013590820152611ba96101008301611ad1565b610100820152611bbc6101208301611ad1565b61012082015292915050565b5f6101008284031215611bd9575f5ffd5b50919050565b5f5f5f5f6101408587031215611bf3575f5ffd5b843567ffffffffffffffff811115611c09575f5ffd5b611c1587828801611ae0565b945050602085013567ffffffffffffffff811115611c31575f5ffd5b8501601f81018713611c41575f5ffd5b803567ffffffffffffffff811115611c57575f5ffd5b8760208260051b8401011115611c6b575f5ffd5b60209190910193509150611c828660408701611bc8565b905092959194509250565b5f5f6101208385031215611c9f575f5ffd5b823567ffffffffffffffff811115611cb5575f5ffd5b611cc185828601611ae0565b9250506119578460208501611bc8565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215611d0e575f5ffd5b611d1782611907565b9392505050565b602080825281018290525f8360408301825b85811015611d925773ffffffffffffffffffffffffffffffffffffffff611d5684611907565b16825273ffffffffffffffffffffffffffffffffffffffff611d7a60208501611907565b16602083015260409283019290910190600101611d30565b5095945050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610d8857610d88611d9c565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611e0e575f5ffd5b9190910192915050565b80820180821115610d8857610d88611d9c565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611e9e610160840182611e2b565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611ed98282611e2b565b9150506060840151611f03608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611f7261012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611f9a575f5ffd5b611d1782611ad1565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611fd6575f5ffd5b83018035915067ffffffffffffffff821115611ff0575f5ffd5b602001915036819003821315612004575f5ffd5b9250929050565b5f5f85851115612019575f5ffd5b83861115612025575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612091577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f602082840312156120b7575f5ffd5b505191905056fea26469706673582212209f0fb0b639d7a3f5df5842509e8075acd013496c9f4a0757d05d43ecaae0118f64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "initHop";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly internalType: "struct HopFacet.Config[]";
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
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "registerBridge";
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
        readonly name: "startBridgeTokensViaHop";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacet.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaHop";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacet.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
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
        readonly name: "HopBridgeRegistered";
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
        readonly name: "HopInitialized";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly indexed: false;
            readonly internalType: "struct HopFacet.Config[]";
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
    }];
    static createInterface(): HopFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HopFacet;
}
export {};
