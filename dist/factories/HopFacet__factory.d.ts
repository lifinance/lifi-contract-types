import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HopFacet, HopFacetInterface } from "../HopFacet";
declare type HopFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506121858061001c5f395ff3fe60806040526004361061003e575f3560e01c80633961d1ed1461004257806367fdd71e14610063578063a01fe78414610082578063b3b6358714610095575b5f5ffd5b34801561004d575f5ffd5b5061006161005c3660046119c0565b6100a8565b005b34801561006e575f5ffd5b5061006161007d3660046119f1565b6101a8565b610061610090366004611c70565b610343565b6100616100a3366004611d1e565b610575565b6100b0610795565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b873ffffffffffffffffffffffffffffffffffffffff821661011e576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381165f818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917fcf56a25ddc5c325bc2d2557f7eee90d061f2e19b7294a6ef738f86f2c3d9280c910160405180910390a2505050565b6101b0610795565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b85f5b82811015610304575f8484838181106101ee576101ee611d62565b90506040020160200160208101906102069190611d8f565b73ffffffffffffffffffffffffffffffffffffffff1603610253576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83838281811061026557610265611d62565b905060400201602001602081019061027d9190611d8f565b825f86868581811061029157610291611d62565b6102a79260206040909202019081019150611d8f565b73ffffffffffffffffffffffffffffffffffffffff908116825260208201929092526040015f2080547fffffffffffffffffffffffff000000000000000000000000000000000000000016929091169190911790556001016101d3565b507f5910f57b2fdae9f2f45a1d913c63f55985d0f77d120de8aab63e686ff670dde38383604051610336929190611daf565b60405180910390a1505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103be576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103ce3447611e5a565b90508680610100015161040d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561044b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861046e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104a5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361051f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105388a5f01518b60c001518b8b338c60e0013561080a565b60c08b01526105478a886109a4565b504791505081811115610568576105685f846105638585611e5a565b610c5b565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105f0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6106003447611e5a565b90508480610100015115610640576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061012001511561067e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866106a18160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106d8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610715576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610752576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61076488608001518960c00151610c90565b61076e88886109a4565b50479150508181111561078a5761078a5f846105638585611e5a565b50505f909155505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610808576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f83808203610845576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610853600185611e5a565b81811061086257610862611d62565b90506020028101906108749190611e6d565b610885906080810190606001611d8f565b90505f61089182610d44565b905073ffffffffffffffffffffffffffffffffffffffff82166108bb576108b83482611e5a565b90505b5f6108c68989610d8e565b90506108d28989610e98565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff8916602082015290810187905261090d818b8b85610f04565b5f8361091886610d44565b6109229190611e5a565b905073ffffffffffffffffffffffffffffffffffffffff851661094c576109498882611e5a565b90505b8b811015610994576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff8082165f8181527f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b860208190526040909120549092169015610a0957610a0983828760c001516110d4565b5f73ffffffffffffffffffffffffffffffffffffffff841615610a30578460e00135610a43565b60c0860151610a439060e0870135611ea9565b90504660011480610a545750466005145b15610b4e578173ffffffffffffffffffffffffffffffffffffffff1663deace8f5828860e001518960a001518a60c001518a606001358b608001358c60a0016020810190610aa29190611d8f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019690965273ffffffffffffffffffffffffffffffffffffffff94851660248701526044860193909352606485019190915260848401521660a482015260c089013560c482015260e4015f604051808303818588803b158015610b32575f5ffd5b505af1158015610b44573d5f5f3e3d5ffd5b5050505050610c1c565b60e086015160a087015160c0880151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501526044840191909152873560648401526020880135608484015287013560a4830152606087013560c4830152608087013560e483015283169063eea0d7b2908390610104015f604051808303818588803b158015610c04575f5ffd5b505af1158015610c16573d5f5f3e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610c4b9190611f08565b60405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c8557610c808282611100565b505050565b610c8083838361116d565b805f03610cc9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d225780341015610d1e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610d1e73ffffffffffffffffffffffffffffffffffffffff83163330846111db565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d8657610d8173ffffffffffffffffffffffffffffffffffffffff831630611233565b610d88565b475b92915050565b6060815f8167ffffffffffffffff811115610dab57610dab611a62565b604051908082528060200260200182016040528015610dd4578160200160208202803683370190505b5090505f5f5b83811015610e8d57868682818110610df457610df4611d62565b9050602002810190610e069190611e6d565b610e17906080810190606001611d8f565b9150610e2282610d44565b838281518110610e3457610e34611d62565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e855734838281518110610e6d57610e6d611d62565b60200260200101818151610e819190611e5a565b9052505b600101610dda565b509095945050505050565b5f5b81811015610c805736838383818110610eb557610eb5611d62565b9050602002810190610ec79190611e6d565b9050610ed960e0820160c0830161201b565b15610efb57610efb610ef16060830160408401611d8f565b8260800135610c90565b50600101610e9a565b60208401516040850151849184918490835f5b818110156110ba57368a8a83818110610f3257610f32611d62565b9050602002810190610f449190611e6d565b9050610f73610f596060830160408401611d8f565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610fd55750610fd5610f8c6040830160208401611d8f565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610fec5750610fec610f8c6020830183611d8f565b801561106f575061106f61100360a0830183612034565b611011916004915f9161209c565b61101a916120c3565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6110a5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b516110b19082611266565b50600101610f17565b50506110c985858585856114d6565b505050505050505050565b610c808383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116ed565b73ffffffffffffffffffffffffffffffffffffffff821661114d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d1e73ffffffffffffffffffffffffffffffffffffffff83168261181a565b73ffffffffffffffffffffffffffffffffffffffff82166111ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c8073ffffffffffffffffffffffffffffffffffffffff84168383611833565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661122657637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61127b6112766020830183611d8f565b61187c565b6112b1576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036112f0576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611304610f596060850160408601611d8f565b61130e575f611314565b82608001355b90505f61132f61132a6080860160608701611d8f565b610d44565b9050815f036113655761136561134b6060860160408701611d8f565b61135b6040870160208801611d8f565b86608001356110d4565b5f806113746020870187611d8f565b73ffffffffffffffffffffffffffffffffffffffff168461139860a0890189612034565b6040516113a6929190612129565b5f6040518083038185875af1925050503d805f81146113e0576040519150601f19603f3d011682016040523d82523d5f602084013e6113e5565b606091505b5091509150816113f8576113f881611910565b5f61140c61132a6080890160608a01611d8f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861143d60208a018a611d8f565b61144d60608b0160408c01611d8f565b61145d60808c0160608d01611d8f565b8b6080013589871161146f5786611479565b6114798a88611e5a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826114e5600182611e5a565b8181106114f4576114f4611d62565b90506020028101906115069190611e6d565b611517906080810190606001611d8f565b90505f5f5f5f5f5f5f5b888110156116dd5761153460018a611e5a565b81108015611543575088600114155b1561161e578d8d8281811061155a5761155a611d62565b905060200281019061156c9190611e6d565b61157d906080810190606001611d8f565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461161e578a81815181106115c4576115c4611d62565b60200260200101516115d587610d44565b6115df9190611e5a565b965073ffffffffffffffffffffffffffffffffffffffff861615611603575f611605565b895b93508387111561161e5761161e868d610563878b611e5a565b8d8d8281811061163057611630611d62565b90506020028101906116429190611e6d565b611653906060810190604001611d8f565b945061165e85610d44565b925073ffffffffffffffffffffffffffffffffffffffff851615611682575f611684565b895b915081831180156116c157508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156116d5576116d5858d6105638587611e5a565b600101611521565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156118145773ffffffffffffffffffffffffffffffffffffffff8316611756576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156117c9573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117ed9190612138565b10156118145761181473ffffffffffffffffffffffffffffffffffffffff8516848361191a565b50505050565b5f385f3884865af1610d1e5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611873576390b8ec185f526004601cfd5b5f603452505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161190757506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611873575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661187357633e3f8f735f526004601cfd5b803573ffffffffffffffffffffffffffffffffffffffff811681146119bb575f5ffd5b919050565b5f5f604083850312156119d1575f5ffd5b6119da83611998565b91506119e860208401611998565b90509250929050565b5f5f60208385031215611a02575f5ffd5b823567ffffffffffffffff811115611a18575f5ffd5b8301601f81018513611a28575f5ffd5b803567ffffffffffffffff811115611a3e575f5ffd5b8560208260061b8401011115611a52575f5ffd5b6020919091019590945092505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611ab357611ab3611a62565b60405290565b5f82601f830112611ac8575f5ffd5b813567ffffffffffffffff811115611ae257611ae2611a62565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611b2f57611b2f611a62565b604052818152838201602001851015611b46575f5ffd5b816020850160208301375f918101602001919091529392505050565b803580151581146119bb575f5ffd5b5f6101408284031215611b82575f5ffd5b611b8a611a8f565b823581529050602082013567ffffffffffffffff811115611ba9575f5ffd5b611bb584828501611ab9565b602083015250604082013567ffffffffffffffff811115611bd4575f5ffd5b611be084828501611ab9565b604083015250611bf260608301611998565b6060820152611c0360808301611998565b6080820152611c1460a08301611998565b60a082015260c0828101359082015260e08083013590820152611c3a6101008301611b62565b610100820152611c4d6101208301611b62565b61012082015292915050565b5f6101008284031215611c6a575f5ffd5b50919050565b5f5f5f5f6101408587031215611c84575f5ffd5b843567ffffffffffffffff811115611c9a575f5ffd5b611ca687828801611b71565b945050602085013567ffffffffffffffff811115611cc2575f5ffd5b8501601f81018713611cd2575f5ffd5b803567ffffffffffffffff811115611ce8575f5ffd5b8760208260051b8401011115611cfc575f5ffd5b60209190910193509150611d138660408701611c59565b905092959194509250565b5f5f6101208385031215611d30575f5ffd5b823567ffffffffffffffff811115611d46575f5ffd5b611d5285828601611b71565b9250506119e88460208501611c59565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215611d9f575f5ffd5b611da882611998565b9392505050565b602080825281018290525f8360408301825b85811015611e235773ffffffffffffffffffffffffffffffffffffffff611de784611998565b16825273ffffffffffffffffffffffffffffffffffffffff611e0b60208501611998565b16602083015260409283019290910190600101611dc1565b5095945050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610d8857610d88611e2d565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611e9f575f5ffd5b9190910192915050565b80820180821115610d8857610d88611e2d565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611f2f610160840182611ebc565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611f6a8282611ebc565b9150506060840151611f94608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161200361012085018215159052565b50610120840151801515610140850152509392505050565b5f6020828403121561202b575f5ffd5b611da882611b62565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612067575f5ffd5b83018035915067ffffffffffffffff821115612081575f5ffd5b602001915036819003821315612095575f5ffd5b9250929050565b5f5f858511156120aa575f5ffd5b838611156120b6575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612122577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612148575f5ffd5b505191905056fea2646970667358221220e54da23708a3818ee05c8ea597eb4174485f00e2f328d392f6265f2ed0fad6e364736f6c634300081d0033";
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
