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
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002a5838038062002a58833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051612974620000e46000396000818160db01526107a9015260008181607e0152818161075e0152818161085f015261088a01526129746000f3fe60806040526004361061003f5760003560e01c806328832cbd1461004457806328cc431614610059578063afdac3d61461006c578063eb6d3a11146100c9575b600080fd5b610057610052366004612254565b6100fd565b005b610057610067366004612313565b61033f565b34801561007857600080fd5b506100a07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100d557600080fd5b506100a07f000000000000000000000000000000000000000000000000000000000000000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610178576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061018934476123a6565b9050868061010001516101c8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101eb8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610222576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610260576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361029d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b289600001518a60c001518a8a3361052c565b60c08a015260006102c2876123e5565b9050670de0b6b3a76400006102dd60a0890160808a016124c3565b67ffffffffffffffff168b60c001516102f691906124e5565b61030091906124fc565b606082015261030f8a82610674565b5047915050818111156103315761033160008461032c85856123a6565b610997565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103ba576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103cb34476123a6565b9050846103f08160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610427576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610465576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104a2576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156104e0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104f287608001518860c001516109cd565b610504876104ff886123e5565b610674565b50479050818111156105205761052060008461032c85856123a6565b50506000909155505050565b600082808203610568576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856105776001856123a6565b81811061058657610586612537565b90506020028101906105989190612566565b6105a99060808101906060016125a4565b905060006105b682610b43565b905073ffffffffffffffffffffffffffffffffffffffff82166105e0576105dd34826123a6565b90505b60006105ec8888610bfc565b90506105f88888610d08565b6106058a89898985610d75565b60008261061185610b43565b61061b91906123a6565b905089811015610666576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b8161012001511515600082610120015151111515146106bf576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8161012001511580156107065750806000015173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b1561073d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff16610855577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b9392328360c00151836020015184600001517f000000000000000000000000000000000000000000000000000000000000000086604001518860c0015188606001518a60e001518a60a001518b60c001518c60e001518d61010001518e61012001516040518e63ffffffff1660e01b815260040161081e9c9b9a9998979695949392919061262d565b6000604051808303818588803b15801561083757600080fd5b505af115801561084b573d6000803e3d6000fd5b505050505061095c565b61088882608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151611127565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b93923282602001518360000151856080015185604001518760c0015187606001518960e001518960a001518a60c001518b60e001518c61010001518d61012001516040518d63ffffffff1660e01b81526004016109299c9b9a9998979695949392919061262d565b600060405180830381600087803b15801561094357600080fd5b505af1158015610957573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161098b91906126c5565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156109c3576109be83838361125e565b505050565b6109be82826113e0565b80600003610a07576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a605780341015610a5c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610acd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af191906127d8565b905081811015610b37576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161065d565b6109be8333308561150a565b600073ffffffffffffffffffffffffffffffffffffffff821615610bf4576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610bcb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bef91906127d8565b610bf6565b475b92915050565b60608160008167ffffffffffffffff811115610c1a57610c1a61200d565b604051908082528060200260200182016040528015610c43578160200160208202803683370190505b5090506000805b83811015610cfd57868682818110610c6457610c64612537565b9050602002810190610c769190612566565b610c879060808101906060016125a4565b9150610c9282610b43565b838281518110610ca457610ca4612537565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610cf55734838281518110610cdd57610cdd612537565b60200260200101818151610cf191906123a6565b9052505b600101610c4a565b509095945050505050565b60005b818110156109be5736838383818110610d2657610d26612537565b9050602002810190610d389190612566565b9050610d4a60e0820160c083016127f1565b15610d6c57610d6c610d6260608301604084016125a4565b82608001356109cd565b50600101610d0b565b8383838382600181146110425760008585610d916001856123a6565b818110610da057610da0612537565b9050602002810190610db29190612566565b610dc39060808101906060016125a4565b9050600089815b81811015610f6e57368d8d83818110610de557610de5612537565b9050602002810190610df79190612566565b9050610e26610e0c60608301604084016125a4565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e895750610e89610e3f60408301602084016125a4565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610ea05750610ea0610e3f60208301836125a4565b8015610f255750610f25610eb760a083018361280e565b610ec69160049160009161287a565b610ecf916128a4565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f5b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f658f82611724565b50600101610dca565b505060005b610f7e6001856123a6565b81101561103a576000888883818110610f9957610f99612537565b9050602002810190610fab9190612566565b610fbc9060808101906060016125a4565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110315785828151811061100357611003612537565b602002602001015161101482610b43565b61101e91906123a6565b9250821561103157611031818885610997565b50600101610f73565b50505061111b565b8760005b8181101561111857368b8b8381811061106157611061612537565b90506020028101906110739190612566565b9050611088610e0c60608301604084016125a4565b806110a157506110a1610e3f60408301602084016125a4565b80156110b857506110b8610e3f60208301836125a4565b80156110cf57506110cf610eb760a083018361280e565b611105576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61110f8d82611724565b50600101611046565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661114757505050565b73ffffffffffffffffffffffffffffffffffffffff8216611194576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611209573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122d91906127d8565b10156109be576109be83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a02565b73ffffffffffffffffffffffffffffffffffffffff83166112ab576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166112f8576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611365573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138991906127d8565b9050808211156113cf576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161065d565b6113da848484611b70565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661142d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611470576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161065d565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146114ca576040519150601f19603f3d011682016040523d82523d6000602084013e6114cf565b606091505b50509050806109be576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611557576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166115a4576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611615573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061163991906127d8565b905061164782868686611bc6565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156116b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116db91906127d8565b6116e591906123a6565b1461171c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61173a61173460208301836125a4565b3b151590565b611770576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036117b0576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006117c5610e0c60608501604086016125a4565b6117d05760006117d6565b82608001355b905060006117f26117ed60608601604087016125a4565b610b43565b905060006118096117ed60808701606088016125a4565b9050826000036118405761184061182660608701604088016125a4565b61183660408801602089016125a4565b8760800135611127565b846080013582101561188b576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161065d565b60008061189b60208801886125a4565b73ffffffffffffffffffffffffffffffffffffffff16856118bf60a08a018a61280e565b6040516118cd9291906128ec565b60006040518083038185875af1925050503d806000811461190a576040519150601f19603f3d011682016040523d82523d6000602084013e61190f565b606091505b5091509150816119225761192281611c24565b60006119376117ed60808a0160608b016125a4565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961196860208b018b6125a4565b61197860608c0160408d016125a4565b61198860808d0160608e016125a4565b8c6080013589871161199a57866119a4565b6119a48a886123a6565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611a8e8482611c2e565b6113da5760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611b669085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611cef565b6113da8482611cef565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109be9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611ae4565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113da9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611ae4565b8051602082018181fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611c5891906128fc565b6000604051808303816000865af19150503d8060008114611c95576040519150601f19603f3d011682016040523d82523d6000602084013e611c9a565b606091505b5091509150818015611cc4575080511580611cc4575080806020019051810190611cc4919061290e565b8015611ce6575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b6000611d51826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611dfe9092919063ffffffff16565b9050805160001480611d72575080806020019051810190611d72919061290e565b6109be576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161065d565b6060611e0d8484600085611e15565b949350505050565b606082471015611ea7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161065d565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ed091906128fc565b60006040518083038185875af1925050503d8060008114611f0d576040519150601f19603f3d011682016040523d82523d6000602084013e611f12565b606091505b5091509150611f2387838387611f2e565b979650505050505050565b60608315611fc4578251600003611fbd5773ffffffffffffffffffffffffffffffffffffffff85163b611fbd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161065d565b5081611e0d565b611e0d8383815115611fd95781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065d919061292b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120605761206061200d565b60405290565b600082601f83011261207757600080fd5b813567ffffffffffffffff808211156120925761209261200d565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156120d8576120d861200d565b816040528381528660208588010111156120f157600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461213557600080fd5b919050565b801515811461214857600080fd5b50565b80356121358161213a565b6000610140828403121561216957600080fd5b61217161203c565b905081358152602082013567ffffffffffffffff8082111561219257600080fd5b61219e85838601612066565b602084015260408401359150808211156121b757600080fd5b506121c484828501612066565b6040830152506121d660608301612111565b60608201526121e760808301612111565b60808201526121f860a08301612111565b60a082015260c082013560c082015260e082013560e082015261010061221f81840161214b565b9082015261012061223183820161214b565b9082015292915050565b6000610140828403121561224e57600080fd5b50919050565b6000806000806060858703121561226a57600080fd5b843567ffffffffffffffff8082111561228257600080fd5b61228e88838901612156565b955060208701359150808211156122a457600080fd5b818701915087601f8301126122b857600080fd5b8135818111156122c757600080fd5b8860208260051b85010111156122dc57600080fd5b6020830195508094505060408701359150808211156122fa57600080fd5b506123078782880161223b565b91505092959194509250565b6000806040838503121561232657600080fd5b823567ffffffffffffffff8082111561233e57600080fd5b61234a86838701612156565b9350602085013591508082111561236057600080fd5b5061236d8582860161223b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610bf657610bf6612377565b803567ffffffffffffffff8116811461213557600080fd5b803563ffffffff8116811461213557600080fd5b600061014082360312156123f857600080fd5b61240061203c565b61240983612111565b815261241760208401612111565b602082015261242860408401612111565b604082015260608301356060820152612443608084016123b9565b608082015261245460a08401612111565b60a082015261246560c084016123d1565b60c082015261247660e084016123d1565b60e08201526101006124898185016123d1565b908201526101208381013567ffffffffffffffff8111156124a957600080fd5b6124b536828701612066565b918301919091525092915050565b6000602082840312156124d557600080fd5b6124de826123b9565b9392505050565b8082028115828204841417610bf657610bf6612377565b600082612532577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261259a57600080fd5b9190910192915050565b6000602082840312156125b657600080fd5b6124de82612111565b60005b838110156125da5781810151838201526020016125c2565b50506000910152565b600081518084526125fb8160208601602086016125bf565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff8d811682528c811660208301528b811660408301528a81166060830152608082018a905260a0820189905260c08201889052861660e082015263ffffffff858116610100830152848116610120830152831661014082015260006101806101608301526126b36101808301846125e3565b9e9d5050505050505050505050505050565b6020815281516020820152600060208301516101408060408501526126ee6101608501836125e3565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261272983826125e3565b9250506060850151612753608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127c68187018315159052565b90950151151593019290925250919050565b6000602082840312156127ea57600080fd5b5051919050565b60006020828403121561280357600080fd5b81356124de8161213a565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261284357600080fd5b83018035915067ffffffffffffffff82111561285e57600080fd5b60200191503681900382131561287357600080fd5b9250929050565b6000808585111561288a57600080fd5b8386111561289757600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128e45780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000825161259a8184602087016125bf565b60006020828403121561292057600080fd5b81516124de8161213a565b6020815260006124de60208301846125e356fea26469706673582212207c3bd863fb0c7a057a01b6565de92f5147b1301b9973dddcabd7f11b5bda41cd64736f6c63430008110033";
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
                readonly type: "uint64";
                readonly internalType: "uint64";
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
                readonly type: "uint64";
                readonly internalType: "uint64";
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
