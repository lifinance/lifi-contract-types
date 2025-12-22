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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506121918061001c5f395ff3fe60806040526004361061003e575f3560e01c80633961d1ed1461004257806367fdd71e14610063578063a01fe78414610082578063b3b6358714610095575b5f5ffd5b34801561004d575f5ffd5b5061006161005c3660046119cc565b6100a8565b005b34801561006e575f5ffd5b5061006161007d3660046119fd565b6101a8565b610061610090366004611c7c565b610343565b6100616100a3366004611d2a565b610575565b6100b0610795565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b873ffffffffffffffffffffffffffffffffffffffff821661011e576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381165f818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917fcf56a25ddc5c325bc2d2557f7eee90d061f2e19b7294a6ef738f86f2c3d9280c910160405180910390a2505050565b6101b0610795565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b85f5b82811015610304575f8484838181106101ee576101ee611d6e565b90506040020160200160208101906102069190611d9b565b73ffffffffffffffffffffffffffffffffffffffff1603610253576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83838281811061026557610265611d6e565b905060400201602001602081019061027d9190611d9b565b825f86868581811061029157610291611d6e565b6102a79260206040909202019081019150611d9b565b73ffffffffffffffffffffffffffffffffffffffff908116825260208201929092526040015f2080547fffffffffffffffffffffffff000000000000000000000000000000000000000016929091169190911790556001016101d3565b507f5910f57b2fdae9f2f45a1d913c63f55985d0f77d120de8aab63e686ff670dde38383604051610336929190611dbb565b60405180910390a1505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103be576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103ce3447611e66565b90508680610100015161040d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561044b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861046e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104a5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361051f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105388a5f01518b60c001518b8b338c60e0013561080a565b60c08b01526105478a886109a4565b504791505081811115610568576105685f846105638585611e66565b610c5b565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105f0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6106003447611e66565b90508480610100015115610640576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061012001511561067e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866106a18160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106d8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610715576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610752576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61076488608001518960c00151610c90565b61076e88886109a4565b50479150508181111561078a5761078a5f846105638585611e66565b50505f909155505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610808576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f83808203610845576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610853600185611e66565b81811061086257610862611d6e565b90506020028101906108749190611e79565b610885906080810190606001611d9b565b90505f61089182610d44565b905073ffffffffffffffffffffffffffffffffffffffff82166108bb576108b83482611e66565b90505b5f6108c68989610d8e565b90506108d28989610e98565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff8916602082015290810187905261090d818b8b85610f04565b5f8361091886610d44565b6109229190611e66565b905073ffffffffffffffffffffffffffffffffffffffff851661094c576109498882611e66565b90505b8b811015610994576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff8082165f8181527f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b860208190526040909120549092169015610a0957610a0983828760c00151611171565b5f73ffffffffffffffffffffffffffffffffffffffff841615610a30578460e00135610a43565b60c0860151610a439060e0870135611eb5565b90504660011480610a545750466005145b15610b4e578173ffffffffffffffffffffffffffffffffffffffff1663deace8f5828860e001518960a001518a60c001518a606001358b608001358c60a0016020810190610aa29190611d9b565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019690965273ffffffffffffffffffffffffffffffffffffffff94851660248701526044860193909352606485019190915260848401521660a482015260c089013560c482015260e4015f604051808303818588803b158015610b32575f5ffd5b505af1158015610b44573d5f5f3e3d5ffd5b5050505050610c1c565b60e086015160a087015160c0880151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501526044840191909152873560648401526020880135608484015287013560a4830152606087013560c4830152608087013560e483015283169063eea0d7b2908390610104015f604051808303818588803b158015610c04575f5ffd5b505af1158015610c16573d5f5f3e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610c4b9190611f14565b60405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c8557610c80828261119d565b505050565b610c8083838361120a565b805f03610cc9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d225780341015610d1e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610d1e73ffffffffffffffffffffffffffffffffffffffff8316333084611278565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d8657610d8173ffffffffffffffffffffffffffffffffffffffff8316306112d0565b610d88565b475b92915050565b6060815f8167ffffffffffffffff811115610dab57610dab611a6e565b604051908082528060200260200182016040528015610dd4578160200160208202803683370190505b5090505f5f5b83811015610e8d57868682818110610df457610df4611d6e565b9050602002810190610e069190611e79565b610e17906080810190606001611d9b565b9150610e2282610d44565b838281518110610e3457610e34611d6e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e855734838281518110610e6d57610e6d611d6e565b60200260200101818151610e819190611e66565b9052505b600101610dda565b509095945050505050565b5f5b81811015610c805736838383818110610eb557610eb5611d6e565b9050602002810190610ec79190611e79565b9050610ed960e0820160c08301612027565b15610efb57610efb610ef16060830160408401611d9b565b8260800135610c90565b50600101610e9a565b60208401516040850151849184918490835f5b8181101561115757368a8a83818110610f3257610f32611d6e565b9050602002810190610f449190611e79565b9050610ff3610f566020830183611d9b565b610f6360a0840184612040565b610f71916004915f916120a8565b610f7a916120cf565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061110b575061102761100d6060830160408401611d9b565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561107b575061103c6020820182611d9b565b73ffffffffffffffffffffffffffffffffffffffff166110626040830160208401611d9b565b73ffffffffffffffffffffffffffffffffffffffff1614155b801561110b57506111096110956040830160208401611d9b565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff1690565b155b15611142576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b5161114e9082611303565b50600101610f17565b50506111668585858585611576565b505050505050505050565b610c808383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61178d565b73ffffffffffffffffffffffffffffffffffffffff82166111ea576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d1e73ffffffffffffffffffffffffffffffffffffffff8316826118ba565b73ffffffffffffffffffffffffffffffffffffffff8216611257576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c8073ffffffffffffffffffffffffffffffffffffffff841683836118d3565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166112c357637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61131b6113136020830183611d9b565b6017903b1190565b611351576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611390576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6113a461100d6060850160408601611d9b565b6113ae575f6113b4565b82608001355b90505f6113cf6113ca6080860160608701611d9b565b610d44565b9050815f03611405576114056113eb6060860160408701611d9b565b6113fb6040870160208801611d9b565b8660800135611171565b5f806114146020870187611d9b565b73ffffffffffffffffffffffffffffffffffffffff168461143860a0890189612040565b604051611446929190612135565b5f6040518083038185875af1925050503d805f8114611480576040519150601f19603f3d011682016040523d82523d5f602084013e611485565b606091505b509150915081611498576114988161191c565b5f6114ac6113ca6080890160608a01611d9b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886114dd60208a018a611d9b565b6114ed60608b0160408c01611d9b565b6114fd60808c0160608d01611d9b565b8b6080013589871161150f5786611519565b6115198a88611e66565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611585600182611e66565b81811061159457611594611d6e565b90506020028101906115a69190611e79565b6115b7906080810190606001611d9b565b90505f5f5f5f5f5f5f5b8881101561177d576115d460018a611e66565b811080156115e3575088600114155b156116be578d8d828181106115fa576115fa611d6e565b905060200281019061160c9190611e79565b61161d906080810190606001611d9b565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146116be578a818151811061166457611664611d6e565b602002602001015161167587610d44565b61167f9190611e66565b965073ffffffffffffffffffffffffffffffffffffffff8616156116a3575f6116a5565b895b9350838711156116be576116be868d610563878b611e66565b8d8d828181106116d0576116d0611d6e565b90506020028101906116e29190611e79565b6116f3906060810190604001611d9b565b94506116fe85610d44565b925073ffffffffffffffffffffffffffffffffffffffff851615611722575f611724565b895b9150818311801561176157508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561177557611775858d6105638587611e66565b6001016115c1565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156118b45773ffffffffffffffffffffffffffffffffffffffff83166117f6576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611869573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061188d9190612144565b10156118b4576118b473ffffffffffffffffffffffffffffffffffffffff85168483611926565b50505050565b5f385f3884865af1610d1e5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611913576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611913575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661191357633e3f8f735f526004601cfd5b803573ffffffffffffffffffffffffffffffffffffffff811681146119c7575f5ffd5b919050565b5f5f604083850312156119dd575f5ffd5b6119e6836119a4565b91506119f4602084016119a4565b90509250929050565b5f5f60208385031215611a0e575f5ffd5b823567ffffffffffffffff811115611a24575f5ffd5b8301601f81018513611a34575f5ffd5b803567ffffffffffffffff811115611a4a575f5ffd5b8560208260061b8401011115611a5e575f5ffd5b6020919091019590945092505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611abf57611abf611a6e565b60405290565b5f82601f830112611ad4575f5ffd5b813567ffffffffffffffff811115611aee57611aee611a6e565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611b3b57611b3b611a6e565b604052818152838201602001851015611b52575f5ffd5b816020850160208301375f918101602001919091529392505050565b803580151581146119c7575f5ffd5b5f6101408284031215611b8e575f5ffd5b611b96611a9b565b823581529050602082013567ffffffffffffffff811115611bb5575f5ffd5b611bc184828501611ac5565b602083015250604082013567ffffffffffffffff811115611be0575f5ffd5b611bec84828501611ac5565b604083015250611bfe606083016119a4565b6060820152611c0f608083016119a4565b6080820152611c2060a083016119a4565b60a082015260c0828101359082015260e08083013590820152611c466101008301611b6e565b610100820152611c596101208301611b6e565b61012082015292915050565b5f6101008284031215611c76575f5ffd5b50919050565b5f5f5f5f6101408587031215611c90575f5ffd5b843567ffffffffffffffff811115611ca6575f5ffd5b611cb287828801611b7d565b945050602085013567ffffffffffffffff811115611cce575f5ffd5b8501601f81018713611cde575f5ffd5b803567ffffffffffffffff811115611cf4575f5ffd5b8760208260051b8401011115611d08575f5ffd5b60209190910193509150611d1f8660408701611c65565b905092959194509250565b5f5f6101208385031215611d3c575f5ffd5b823567ffffffffffffffff811115611d52575f5ffd5b611d5e85828601611b7d565b9250506119f48460208501611c65565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215611dab575f5ffd5b611db4826119a4565b9392505050565b602080825281018290525f8360408301825b85811015611e2f5773ffffffffffffffffffffffffffffffffffffffff611df3846119a4565b16825273ffffffffffffffffffffffffffffffffffffffff611e17602085016119a4565b16602083015260409283019290910190600101611dcd565b5095945050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610d8857610d88611e39565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611eab575f5ffd5b9190910192915050565b80820180821115610d8857610d88611e39565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611f3b610160840182611ec8565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611f768282611ec8565b9150506060840151611fa0608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161200f61012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215612037575f5ffd5b611db482611b6e565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612073575f5ffd5b83018035915067ffffffffffffffff82111561208d575f5ffd5b6020019150368190038213156120a1575f5ffd5b9250929050565b5f5f858511156120b6575f5ffd5b838611156120c2575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561212e577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612154575f5ffd5b505191905056fea2646970667358221220c21f571351d9592ada440ea1e5d0677eb2b2ab218ea0a13b43275bfdaaa66b4564736f6c634300081d0033";
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
