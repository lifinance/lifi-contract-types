import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetV3, AcrossFacetV3Interface } from "../AcrossFacetV3";
declare type AcrossFacetV3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetV3__factory extends ContractFactory {
    constructor(...args: AcrossFacetV3ConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetV3>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetV3;
    connect(signer: Signer): AcrossFacetV3__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002a2338038062002a23833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a05161293f620000e46000396000818160db01526107d5015260008181606b0152818161078a0152818161088b01526108b6015261293f6000f3fe60806040526004361061003f5760003560e01c8063563498b414610044578063afdac3d614610059578063ba421cef146100b6578063eb6d3a11146100c9575b600080fd5b610057610052366004612225565b6100fd565b005b34801561006557600080fd5b5061008d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100576100c4366004612289565b6102ef565b3480156100d557600080fd5b5061008d7f000000000000000000000000000000000000000000000000000000000000000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610178576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101893447612377565b9050846101ae8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101e5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610223576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610260576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561029e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b087608001518860c00151610520565b6102c2876102bd886123b0565b6106a0565b50479050818111156102e3576102e36000846102de8585612377565b6109c3565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161036a576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061037b3447612377565b9050868061010001516103ba576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103dd8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610414576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610452576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361048f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104a489600001518a60c001518a8a336109f4565b60c08a015260006104b4876123b0565b90506127106104c960a0890160808a0161248e565b61ffff168b60c001516104dc91906124b0565b6104e691906124c7565b60608201526104f58a826106a0565b504791505081811115610512576105126000846102de8585612377565b505060009091555050505050565b8060000361055a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105b357803410156105af576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610620573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106449190612502565b90508181101561068f576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61069b83333085610b37565b505050565b8161012001511515600082610120015151111515146106eb576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8161012001511580156107325750806000015173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b15610769576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff16610881577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b9392328360c00151836020015184600001517f000000000000000000000000000000000000000000000000000000000000000086604001518860c0015188606001518a60e001518a60a001518b60c001518c60e001518d61010001518e61012001516040518e63ffffffff1660e01b815260040161084a9c9b9a99989796959493929190612589565b6000604051808303818588803b15801561086357600080fd5b505af1158015610877573d6000803e3d6000fd5b5050505050610988565b6108b482608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610d51565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b93923282602001518360000151856080015185604001518760c0015187606001518960e001518960a001518a60c001518b60e001518c61010001518d61012001516040518d63ffffffff1660e01b81526004016109559c9b9a99989796959493929190612589565b600060405180830381600087803b15801561096f57600080fd5b505af1158015610983573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516109b79190612621565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156109ea5761069b838383610e94565b61069b8282611016565b600082808203610a30576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610a3f600185612377565b818110610a4e57610a4e612734565b9050602002810190610a609190612763565b610a719060808101906060016127a1565b90506000610a7e82611140565b905073ffffffffffffffffffffffffffffffffffffffff8216610aa857610aa53482612377565b90505b6000610ab488886111f9565b9050610ac08888611305565b610acd8a89898985611372565b600082610ad985611140565b610ae39190612377565b905089811015610b29576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610686565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610b84576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610bd1576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610c42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c669190612502565b9050610c7482868686611724565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610ce4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d089190612502565b610d129190612377565b14610d49576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d7157505050565b73ffffffffffffffffffffffffffffffffffffffff8216610dbe576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610e33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e579190612502565b101561069b57610e6983836000611800565b61069b83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611800565b73ffffffffffffffffffffffffffffffffffffffff8316610ee1576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f2e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610f9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbf9190612502565b905080821115611005576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610686565b611010848484611982565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611063576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156110a6576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610686565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611100576040519150601f19603f3d011682016040523d82523d6000602084013e611105565b606091505b505090508061069b576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156111f1576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156111c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ec9190612502565b6111f3565b475b92915050565b60608160008167ffffffffffffffff81111561121757611217611fde565b604051908082528060200260200182016040528015611240578160200160208202803683370190505b5090506000805b838110156112fa5786868281811061126157611261612734565b90506020028101906112739190612763565b6112849060808101906060016127a1565b915061128f82611140565b8382815181106112a1576112a1612734565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166112f257348382815181106112da576112da612734565b602002602001018181516112ee9190612377565b9052505b600101611247565b509095945050505050565b60005b8181101561069b573683838381811061132357611323612734565b90506020028101906113359190612763565b905061134760e0820160c083016127bc565b156113695761136961135f60608301604084016127a1565b8260800135610520565b50600101611308565b83838383826001811461163f576000858561138e600185612377565b81811061139d5761139d612734565b90506020028101906113af9190612763565b6113c09060808101906060016127a1565b9050600089815b8181101561156b57368d8d838181106113e2576113e2612734565b90506020028101906113f49190612763565b905061142361140960608301604084016127a1565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611486575061148661143c60408301602084016127a1565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561149d575061149d61143c60208301836127a1565b801561152257506115226114b460a08301836127d9565b6114c391600491600091612845565b6114cc9161286f565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611558576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115628f826119d8565b506001016113c7565b505060005b61157b600185612377565b81101561163757600088888381811061159657611596612734565b90506020028101906115a89190612763565b6115b99060808101906060016127a1565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461162e5785828151811061160057611600612734565b602002602001015161161182611140565b61161b9190612377565b9250821561162e5761162e8188856109c3565b50600101611570565b505050611718565b8760005b8181101561171557368b8b8381811061165e5761165e612734565b90506020028101906116709190612763565b905061168561140960608301604084016127a1565b8061169e575061169e61143c60408301602084016127a1565b80156116b557506116b561143c60208301836127a1565b80156116cc57506116cc6114b460a08301836127d9565b611702576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61170c8d826119d8565b50600101611643565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526110109085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611cb6565b8015806118a057506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561187a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061189e9190612502565b155b61192c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610686565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261069b9084907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161177e565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261069b9084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161177e565b6119ee6119e860208301836127a1565b3b151590565b611a24576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611a64576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611a7961140960608501604086016127a1565b611a84576000611a8a565b82608001355b90506000611aa6611aa160608601604087016127a1565b611140565b90506000611abd611aa160808701606088016127a1565b905082600003611af457611af4611ada60608701604088016127a1565b611aea60408801602089016127a1565b8760800135610d51565b8460800135821015611b3f576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610686565b600080611b4f60208801886127a1565b73ffffffffffffffffffffffffffffffffffffffff1685611b7360a08a018a6127d9565b604051611b819291906128b7565b60006040518083038185875af1925050503d8060008114611bbe576040519150601f19603f3d011682016040523d82523d6000602084013e611bc3565b606091505b509150915081611bd657611bd681611dc5565b6000611beb611aa160808a0160608b016127a1565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611c1c60208b018b6127a1565b611c2c60608c0160408d016127a1565b611c3c60808d0160608e016127a1565b8c60800135898711611c4e5786611c58565b611c588a88612377565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611d18826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611dcf9092919063ffffffff16565b9050805160001480611d39575080806020019051810190611d3991906128c7565b61069b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610686565b8051602082018181fd5b6060611dde8484600085611de6565b949350505050565b606082471015611e78576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610686565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ea191906128e4565b60006040518083038185875af1925050503d8060008114611ede576040519150601f19603f3d011682016040523d82523d6000602084013e611ee3565b606091505b5091509150611ef487838387611eff565b979650505050505050565b60608315611f95578251600003611f8e5773ffffffffffffffffffffffffffffffffffffffff85163b611f8e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610686565b5081611dde565b611dde8383815115611faa5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068691906128f6565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561203157612031611fde565b60405290565b600082601f83011261204857600080fd5b813567ffffffffffffffff8082111561206357612063611fde565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156120a9576120a9611fde565b816040528381528660208588010111156120c257600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461210657600080fd5b919050565b801515811461211957600080fd5b50565b80356121068161210b565b6000610140828403121561213a57600080fd5b61214261200d565b905081358152602082013567ffffffffffffffff8082111561216357600080fd5b61216f85838601612037565b6020840152604084013591508082111561218857600080fd5b5061219584828501612037565b6040830152506121a7606083016120e2565b60608201526121b8608083016120e2565b60808201526121c960a083016120e2565b60a082015260c082013560c082015260e082013560e08201526101006121f081840161211c565b9082015261012061220283820161211c565b9082015292915050565b6000610140828403121561221f57600080fd5b50919050565b6000806040838503121561223857600080fd5b823567ffffffffffffffff8082111561225057600080fd5b61225c86838701612127565b9350602085013591508082111561227257600080fd5b5061227f8582860161220c565b9150509250929050565b6000806000806060858703121561229f57600080fd5b843567ffffffffffffffff808211156122b757600080fd5b6122c388838901612127565b955060208701359150808211156122d957600080fd5b818701915087601f8301126122ed57600080fd5b8135818111156122fc57600080fd5b8860208260051b850101111561231157600080fd5b60208301955080945050604087013591508082111561232f57600080fd5b5061233c8782880161220c565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156111f3576111f3612348565b803561ffff8116811461210657600080fd5b803563ffffffff8116811461210657600080fd5b600061014082360312156123c357600080fd5b6123cb61200d565b6123d4836120e2565b81526123e2602084016120e2565b60208201526123f3604084016120e2565b60408201526060830135606082015261240e6080840161238a565b608082015261241f60a084016120e2565b60a082015261243060c0840161239c565b60c082015261244160e0840161239c565b60e082015261010061245481850161239c565b908201526101208381013567ffffffffffffffff81111561247457600080fd5b61248036828701612037565b918301919091525092915050565b6000602082840312156124a057600080fd5b6124a98261238a565b9392505050565b80820281158282048414176111f3576111f3612348565b6000826124fd577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60006020828403121561251457600080fd5b5051919050565b60005b8381101561253657818101518382015260200161251e565b50506000910152565b6000815180845261255781602086016020860161251b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff8d811682528c811660208301528b811660408301528a81166060830152608082018a905260a0820189905260c08201889052861660e082015263ffffffff8581166101008301528481166101208301528316610140820152600061018061016083015261260f61018083018461253f565b9e9d5050505050505050505050505050565b60208152815160208201526000602083015161014080604085015261264a61016085018361253f565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612685838261253f565b92505060608501516126af608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127228187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261279757600080fd5b9190910192915050565b6000602082840312156127b357600080fd5b6124a9826120e2565b6000602082840312156127ce57600080fd5b81356124a98161210b565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261280e57600080fd5b83018035915067ffffffffffffffff82111561282957600080fd5b60200191503681900382131561283e57600080fd5b9250929050565b6000808585111561285557600080fd5b8386111561286257600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128af5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156128d957600080fd5b81516124a98161210b565b6000825161279781846020870161251b565b6020815260006124a9602083018461253f56fea26469706673582212202516d86d4f112831257f4dce93e55cd1f98430c291d6b199aeed46e7bf97ae1c64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "spokePool";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV3";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV3.AcrossV3Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountPercent";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAcrossV3";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV3.AcrossV3Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountPercent";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "wrappedNative";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
    }];
    static createInterface(): AcrossFacetV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetV3;
}
export {};
