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
    static readonly bytecode = "0x608060405234801561000f575f80fd5b50612ae88061001d5f395ff3fe60806040526004361061003e575f3560e01c80633961d1ed1461004257806367fdd71e14610063578063a01fe78414610082578063b3b6358714610095575b5f80fd5b34801561004d575f80fd5b5061006161005c3660046122fb565b6100a8565b005b34801561006e575f80fd5b5061006161007d36600461232c565b6101a8565b6100616100903660046125ac565b610343565b6100616100a3366004612651565b610575565b6100b0610795565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b873ffffffffffffffffffffffffffffffffffffffff821661011e576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381165f818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917fcf56a25ddc5c325bc2d2557f7eee90d061f2e19b7294a6ef738f86f2c3d9280c910160405180910390a2505050565b6101b0610795565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b85f5b82811015610304575f8484838181106101ee576101ee612695565b905060400201602001602081019061020691906126c2565b73ffffffffffffffffffffffffffffffffffffffff1603610253576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83838281811061026557610265612695565b905060400201602001602081019061027d91906126c2565b825f86868581811061029157610291612695565b6102a792602060409092020190810191506126c2565b73ffffffffffffffffffffffffffffffffffffffff908116825260208201929092526040015f2080547fffffffffffffffffffffffff000000000000000000000000000000000000000016929091169190911790556001016101d3565b507f5910f57b2fdae9f2f45a1d913c63f55985d0f77d120de8aab63e686ff670dde383836040516103369291906126e2565b60405180910390a1505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103be576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103ce344761277d565b90508680610100015161040d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561044b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861046e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104a5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361051f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105388a5f01518b60c001518b8b338c60e0013561080a565b60c08b01526105478a886109a5565b504791505081811115610568576105685f84610563858561277d565b610c5a565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105f0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610600344761277d565b90508480610100015115610640576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061012001511561067e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866106a18160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106d8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610715576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610752576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61076488608001518960c00151610c90565b61076e88886109a5565b50479150508181111561078a5761078a5f84610563858561277d565b50505f909155505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610808576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f83808203610845576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f868661085360018561277d565b81811061086257610862612695565b90506020028101906108749190612790565b6108859060808101906060016126c2565b90505f61089182610e02565b905073ffffffffffffffffffffffffffffffffffffffff82166108bb576108b8348261277d565b90505b5f6108c68989610eb8565b90506108d28989610fc2565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff8916602082015290810187905261090d818b8b8561102e565b5f8361091886610e02565b610922919061277d565b905073ffffffffffffffffffffffffffffffffffffffff851661094c57610949888261277d565b90505b8b811015610995576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff8082165f9081527f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b8602081905260409091205460c086015191921690610a089084908390611415565b5f73ffffffffffffffffffffffffffffffffffffffff841615610a2f578460e00135610a42565b60c0860151610a429060e08701356127cc565b90504660011480610a535750466005145b15610b4d578173ffffffffffffffffffffffffffffffffffffffff1663deace8f5828860e001518960a001518a60c001518a606001358b608001358c60a0016020810190610aa191906126c2565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019690965273ffffffffffffffffffffffffffffffffffffffff94851660248701526044860193909352606485019190915260848401521660a482015260c089013560c482015260e4015f604051808303818588803b158015610b31575f80fd5b505af1158015610b43573d5f803e3d5ffd5b5050505050610c1b565b60e086015160a087015160c0880151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501526044840191909152873560648401526020880135608484015287013560a4830152606087013560c4830152608087013560e483015283169063eea0d7b2908390610104015f604051808303818588803b158015610c03575f80fd5b505af1158015610c15573d5f803e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610c4a919061284a565b60405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610c8657610c8183838361154a565b505050565b610c8182826116c9565b805f03610cc9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d225780341015610d1e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610d8c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610db0919061295c565b905081811015610df6576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161098c565b610c81833330856117ef565b5f73ffffffffffffffffffffffffffffffffffffffff821615610eb0576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610e87573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610eab919061295c565b610eb2565b475b92915050565b6060815f8167ffffffffffffffff811115610ed557610ed561239b565b604051908082528060200260200182016040528015610efe578160200160208202803683370190505b5090505f805b83811015610fb757868682818110610f1e57610f1e612695565b9050602002810190610f309190612790565b610f419060808101906060016126c2565b9150610f4c82610e02565b838281518110610f5e57610f5e612695565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610faf5734838281518110610f9757610f97612695565b60200260200101818151610fab919061277d565b9052505b600101610f04565b509095945050505050565b5f5b81811015610c815736838383818110610fdf57610fdf612695565b9050602002810190610ff19190612790565b905061100360e0820160c08301612973565b156110255761102561101b60608301604084016126c2565b8260800135610c90565b50600101610fc4565b60208401516040850151849184918490836001811461132f575f868661105560018561277d565b81811061106457611064612695565b90506020028101906110769190612790565b6110879060808101906060016126c2565b90505f89815b8181101561123057368d8d838181106110a8576110a8612695565b90506020028101906110ba9190612790565b90506110e96110cf60608301604084016126c2565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061114b575061114b61110260408301602084016126c2565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015611162575061116261110260208301836126c2565b80156111e557506111e561117960a083018361298e565b611187916004915f916129f6565b61119091612a1d565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61121b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516112279082611a04565b5060010161108d565b50505f5b61123f60018561277d565b811015611327575f89898381811061125957611259612695565b905060200281019061126b9190612790565b61127c9060808101906060016126c2565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461131e578682815181106112c3576112c3612695565b60200260200101516112d482610e02565b6112de919061277d565b92505f73ffffffffffffffffffffffffffffffffffffffff821615611303575f611305565b865b9050831561131c5761131c828a610563848861277d565b505b50600101611234565b505050611409565b875f5b8181101561140657368b8b8381811061134d5761134d612695565b905060200281019061135f9190612790565b90506113746110cf60608301604084016126c2565b8061138d575061138d61110260408301602084016126c2565b80156113a457506113a461110260208301836126c2565b80156113bb57506113bb61117960a083018361298e565b6113f1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516113fd9082611a04565b50600101611332565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661143557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611482576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156114f5573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611519919061295c565b1015610c8157610c8183837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611cd7565b73ffffffffffffffffffffffffffffffffffffffff8316611597576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166115e4576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561164e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611672919061295c565b9050808211156116b8576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161098c565b6116c3848484611e44565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611716576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611759576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161098c565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146117af576040519150601f19603f3d011682016040523d82523d5f602084013e6117b4565b606091505b5050905080610c81576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661183c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611889576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa1580156118f7573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061191b919061295c565b905061192982868686611e9a565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611997573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119bb919061295c565b6119c5919061277d565b146119fc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b611a1a611a1460208301836126c2565b3b151590565b611a50576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611a8f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611aa36110cf60608501604086016126c2565b611aad575f611ab3565b82608001355b90505f611ace611ac960608601604087016126c2565b610e02565b90505f611ae4611ac960808701606088016126c2565b9050825f03611b1a57611b1a611b0060608701604088016126c2565b611b1060408801602089016126c2565b8760800135611415565b8460800135821015611b65576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161098c565b5f80611b7460208801886126c2565b73ffffffffffffffffffffffffffffffffffffffff1685611b9860a08a018a61298e565b604051611ba6929190612a65565b5f6040518083038185875af1925050503d805f8114611be0576040519150601f19603f3d011682016040523d82523d5f602084013e611be5565b606091505b509150915081611bf857611bf881611ef8565b5f611c0c611ac960808a0160608b016126c2565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611c3d60208b018b6126c2565b611c4d60608c0160408d016126c2565b611c5d60808d0160608e016126c2565b8c60800135898711611c6f5786611c79565b611c798a8861277d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611d638482611f02565b6116c35760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f6044820152611e3a9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611fbd565b6116c38482611fbd565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610c819084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611db8565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526116c39085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611db8565b8051602082018181fd5b5f805f8473ffffffffffffffffffffffffffffffffffffffff1684604051611f2a9190612a74565b5f604051808303815f865af19150503d805f8114611f63576040519150601f19603f3d011682016040523d82523d5f602084013e611f68565b606091505b5091509150818015611f92575080511580611f92575080806020019051810190611f929190612a85565b8015611fb4575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b5f61201e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166120ca9092919063ffffffff16565b905080515f148061203e57508080602001905181019061203e9190612a85565b610c81576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161098c565b60606120d884845f856120e0565b949350505050565b606082471015612172576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161098c565b5f808673ffffffffffffffffffffffffffffffffffffffff16858760405161219a9190612a74565b5f6040518083038185875af1925050503d805f81146121d4576040519150601f19603f3d011682016040523d82523d5f602084013e6121d9565b606091505b50915091506121ea878383876121f5565b979650505050505050565b6060831561228a5782515f036122835773ffffffffffffffffffffffffffffffffffffffff85163b612283576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161098c565b50816120d8565b6120d8838381511561229f5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098c9190612aa0565b803573ffffffffffffffffffffffffffffffffffffffff811681146122f6575f80fd5b919050565b5f806040838503121561230c575f80fd5b612315836122d3565b9150612323602084016122d3565b90509250929050565b5f806020838503121561233d575f80fd5b823567ffffffffffffffff80821115612354575f80fd5b818501915085601f830112612367575f80fd5b813581811115612375575f80fd5b8660208260061b8501011115612389575f80fd5b60209290920196919550909350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156123ec576123ec61239b565b60405290565b5f82601f830112612401575f80fd5b813567ffffffffffffffff8082111561241c5761241c61239b565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156124625761246261239b565b8160405283815286602085880101111561247a575f80fd5b836020870160208301375f602085830101528094505050505092915050565b80151581146124a6575f80fd5b50565b80356122f681612499565b5f61014082840312156124c5575f80fd5b6124cd6123c8565b905081358152602082013567ffffffffffffffff808211156124ed575f80fd5b6124f9858386016123f2565b60208401526040840135915080821115612511575f80fd5b5061251e848285016123f2565b604083015250612530606083016122d3565b6060820152612541608083016122d3565b608082015261255260a083016122d3565b60a082015260c082013560c082015260e082013560e08201526101006125798184016124a9565b9082015261012061258b8382016124a9565b9082015292915050565b5f61010082840312156125a6575f80fd5b50919050565b5f805f8061014085870312156125c0575f80fd5b843567ffffffffffffffff808211156125d7575f80fd5b6125e3888389016124b4565b955060208701359150808211156125f8575f80fd5b818701915087601f83011261260b575f80fd5b813581811115612619575f80fd5b8860208260051b850101111561262d575f80fd5b6020830195508094505050506126468660408701612595565b905092959194509250565b5f806101208385031215612663575f80fd5b823567ffffffffffffffff811115612679575f80fd5b612685858286016124b4565b9250506123238460208501612595565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f602082840312156126d2575f80fd5b6126db826122d3565b9392505050565b60208082528181018390525f90604080840186845b878110156127435773ffffffffffffffffffffffffffffffffffffffff8061271e846122d3565b1684528061272d8785016122d3565b16848701525091830191908301906001016126f7565b5090979650505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610eb257610eb2612750565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126127c2575f80fd5b9190910192915050565b80820180821115610eb257610eb2612750565b5f5b838110156127f95781810151838201526020016127e1565b50505f910152565b5f81518084526128188160208601602086016127df565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201525f6020830151610140806040850152612872610160850183612801565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526128ad8382612801565b92505060608501516128d7608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061294a8187018315159052565b90950151151593019290925250919050565b5f6020828403121561296c575f80fd5b5051919050565b5f60208284031215612983575f80fd5b81356126db81612499565b5f8083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126129c1575f80fd5b83018035915067ffffffffffffffff8211156129db575f80fd5b6020019150368190038213156129ef575f80fd5b9250929050565b5f8085851115612a04575f80fd5b83861115612a10575f80fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612a5d5780818660040360031b1b83161692505b505092915050565b818382375f9101908152919050565b5f82516127c28184602087016127df565b5f60208284031215612a95575f80fd5b81516126db81612499565b602081525f6126db602083018461280156fea264697066735822122035b6965e4c169d683fd72fa0709c4a89e2df95949090439d60c1bd916445818e64736f6c63430008160033";
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
    static createInterface(): HopFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HopFacet;
}
export {};
