import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AllBridgeFacet, AllBridgeFacetInterface } from "../AllBridgeFacet";
declare type AllBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620029ae380380620029ae833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b60805161290c620000a2600039600081816105fe0152818161063e015261073d015261290c6000f3fe6080604052600436106100295760003560e01c8063a74ccb351461002e578063e40f246014610043575b600080fd5b61004161003c3660046122f8565b610056565b005b6100416100513660046123a5565b610288565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612424565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102498a600001518b60c001518b8b336104ac565b60c08b01526102588a886105f4565b50479150508181111561027a5761027a6000846102758585612424565b610859565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610303576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103143447612424565b9050846103398160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610370576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103ae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103eb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610429576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610467576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047988608001518960c0015161088f565b61048388886105f4565b5047915050818111156104a0576104a06000846102758585612424565b50506000909155505050565b6000828082036104e8576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856104f7600185612424565b81811061050657610506612437565b90506020028101906105189190612466565b6105299060808101906060016124a4565b9050600061053682610a05565b905073ffffffffffffffffffffffffffffffffffffffff82166105605761055d3482612424565b90505b600061056c8888610abe565b90506105788888610bca565b6105858a89898985610c37565b60008261059185610a05565b61059b9190612424565b9050898110156105e6576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b61062782608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610fe9565b61063760e0820160c083016124bf565b1561073b577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd836080015173ffffffffffffffffffffffffffffffffffffffff1660001b8460c0015184602001358560400135866060013587608001358860a00160208101906106c291906124dc565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b16815261070497969594939291908b3590600401612538565b600060405180830381600087803b15801561071e57600080fd5b505af1158015610732573d6000803e3d6000fd5b5050505061081e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd8260000135846080015173ffffffffffffffffffffffffffffffffffffffff1660001b8560c0015185602001358660400135876060013588608001358960a00160208101906107c691906124dc565b60006040518a63ffffffff1660e01b81526004016107eb989796959493929190612538565b6000604051808303818588803b15801561080457600080fd5b505af1158015610818573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161084d91906125f0565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108855761088083838361112c565b505050565b61088082826112ae565b806000036108c9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610922578034101561091e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561098f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b39190612703565b9050818110156109f9576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105dd565b610880833330856113d8565b600073ffffffffffffffffffffffffffffffffffffffff821615610ab6576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610a8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab19190612703565b610ab8565b475b92915050565b60608160008167ffffffffffffffff811115610adc57610adc612072565b604051908082528060200260200182016040528015610b05578160200160208202803683370190505b5090506000805b83811015610bbf57868682818110610b2657610b26612437565b9050602002810190610b389190612466565b610b499060808101906060016124a4565b9150610b5482610a05565b838281518110610b6657610b66612437565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610bb75734838281518110610b9f57610b9f612437565b60200260200101818151610bb39190612424565b9052505b600101610b0c565b509095945050505050565b60005b818110156108805736838383818110610be857610be8612437565b9050602002810190610bfa9190612466565b9050610c0c60e0820160c083016124bf565b15610c2e57610c2e610c2460608301604084016124a4565b826080013561088f565b50600101610bcd565b838383838260018114610f045760008585610c53600185612424565b818110610c6257610c62612437565b9050602002810190610c749190612466565b610c859060808101906060016124a4565b9050600089815b81811015610e3057368d8d83818110610ca757610ca7612437565b9050602002810190610cb99190612466565b9050610ce8610cce60608301604084016124a4565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d4b5750610d4b610d0160408301602084016124a4565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d625750610d62610d0160208301836124a4565b8015610de75750610de7610d7960a083018361271c565b610d8891600491600091612788565b610d91916127b2565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e1d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e278f826115f2565b50600101610c8c565b505060005b610e40600185612424565b811015610efc576000888883818110610e5b57610e5b612437565b9050602002810190610e6d9190612466565b610e7e9060808101906060016124a4565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ef357858281518110610ec557610ec5612437565b6020026020010151610ed682610a05565b610ee09190612424565b92508215610ef357610ef3818885610859565b50600101610e35565b505050610fdd565b8760005b81811015610fda57368b8b83818110610f2357610f23612437565b9050602002810190610f359190612466565b9050610f4a610cce60608301604084016124a4565b80610f635750610f63610d0160408301602084016124a4565b8015610f7a5750610f7a610d0160208301836124a4565b8015610f915750610f91610d7960a083018361271c565b610fc7576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fd18d826115f2565b50600101610f08565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661100957505050565b73ffffffffffffffffffffffffffffffffffffffff8216611056576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156110cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ef9190612703565b10156108805761110183836000611908565b61088083837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611908565b73ffffffffffffffffffffffffffffffffffffffff8316611179576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111c6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611233573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112579190612703565b90508082111561129d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105dd565b6112a8848484611b08565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166112fb576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561133e576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105dd565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611398576040519150601f19603f3d011682016040523d82523d6000602084013e61139d565b606091505b5050905080610880576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611425576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611472576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156114e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115079190612703565b905061151582868686611b5e565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611585573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a99190612703565b6115b39190612424565b146115ea576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61160861160260208301836124a4565b3b151590565b61163e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361167e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611693610cce60608501604086016124a4565b61169e5760006116a4565b82608001355b905060006116c06116bb60608601604087016124a4565b610a05565b905060006116d76116bb60808701606088016124a4565b90508260000361170e5761170e6116f460608701604088016124a4565b61170460408801602089016124a4565b8760800135610fe9565b8460800135821015611759576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105dd565b60008061176960208801886124a4565b73ffffffffffffffffffffffffffffffffffffffff168561178d60a08a018a61271c565b60405161179b9291906127fa565b60006040518083038185875af1925050503d80600081146117d8576040519150601f19603f3d011682016040523d82523d6000602084013e6117dd565b606091505b5091509150816118285760006117f282611bbc565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105dd919061280a565b600061183d6116bb60808a0160608b016124a4565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961186e60208b018b6124a4565b61187e60608c0160408d016124a4565b61188e60808d0160608e016124a4565b8c608001358987116118a057866118aa565b6118aa8a88612424565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b8015806119a857506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611982573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119a69190612703565b155b611a34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016105dd565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108809084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c3a565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108809084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611a86565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112a89085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611a86565b6060604482511015611c0157505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611c1d6004808551611c159190612424565b859190611d49565b905080806020019051810190611c33919061281d565b9392505050565b6000611c9c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e639092919063ffffffff16565b9050805160001480611cbd575080806020019051810190611cbd9190612894565b610880576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105dd565b606081611d5781601f6128b1565b1015611d8f576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d9982846128b1565b84511015611dd3576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611df25760405191506000825260208201604052611e5a565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611e2b578051835260209283019201611e13565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611e728484600085611e7a565b949350505050565b606082471015611f0c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105dd565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f3591906128c4565b60006040518083038185875af1925050503d8060008114611f72576040519150601f19603f3d011682016040523d82523d6000602084013e611f77565b606091505b5091509150611f8887838387611f93565b979650505050505050565b606083156120295782516000036120225773ffffffffffffffffffffffffffffffffffffffff85163b612022576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105dd565b5081611e72565b611e72838381511561203e5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105dd919061280a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120c5576120c5612072565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561211257612112612072565b604052919050565b600067ffffffffffffffff82111561213457612134612072565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261217157600080fd5b813561218461217f8261211a565b6120cb565b81815284602083860101111561219957600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146121da57600080fd5b919050565b80151581146121ed57600080fd5b50565b80356121da816121df565b6000610140828403121561220e57600080fd5b6122166120a1565b905081358152602082013567ffffffffffffffff8082111561223757600080fd5b61224385838601612160565b6020840152604084013591508082111561225c57600080fd5b5061226984828501612160565b60408301525061227b606083016121b6565b606082015261228c608083016121b6565b608082015261229d60a083016121b6565b60a082015260c082013560c082015260e082013560e08201526101006122c48184016121f0565b908201526101206122d68382016121f0565b9082015292915050565b600060e082840312156122f257600080fd5b50919050565b600080600080610120858703121561230f57600080fd5b843567ffffffffffffffff8082111561232757600080fd5b612333888389016121fb565b9550602087013591508082111561234957600080fd5b818701915087601f83011261235d57600080fd5b81358181111561236c57600080fd5b8860208260051b850101111561238157600080fd5b60208301955080945050505061239a86604087016122e0565b905092959194509250565b60008061010083850312156123b957600080fd5b823567ffffffffffffffff8111156123d057600080fd5b6123dc858286016121fb565b9250506123ec84602085016122e0565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610ab857610ab86123f5565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261249a57600080fd5b9190910192915050565b6000602082840312156124b657600080fd5b611c33826121b6565b6000602082840312156124d157600080fd5b8135611c33816121df565b6000602082840312156124ee57600080fd5b813560048110611c3357600080fd5b60048110612534577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b6000610100820190508982528860208301528760408301528660608301528560808301528460a083015261256f60c08301856124fd565b8260e08301529998505050505050505050565b60005b8381101561259d578181015183820152602001612585565b50506000910152565b600081518084526125be816020860160208601612582565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526126196101608501836125a6565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261265483826125a6565b925050606085015161267e608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126f18187018315159052565b90950151151593019290925250919050565b60006020828403121561271557600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261275157600080fd5b83018035915067ffffffffffffffff82111561276c57600080fd5b60200191503681900382131561278157600080fd5b9250929050565b6000808585111561279857600080fd5b838611156127a557600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127f25780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611c3360208301846125a6565b60006020828403121561282f57600080fd5b815167ffffffffffffffff81111561284657600080fd5b8201601f8101841361285757600080fd5b805161286561217f8261211a565b81815285602083850101111561287a57600080fd5b61288b826020830160208601612582565b95945050505050565b6000602082840312156128a657600080fd5b8151611c33816121df565b80820180821115610ab857610ab86123f5565b6000825161249a81846020870161258256fea2646970667358221220dd0a7b0fec18635ee30c687d2de73a17d758f51599590e0efe60a2f1cf05db1464736f6c63430008110033";
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
                readonly name: "fees";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
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
                readonly name: "fees";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): AllBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AllBridgeFacet;
}
export {};
