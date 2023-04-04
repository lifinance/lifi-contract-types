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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200296e3803806200296e833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516128d36200009b6000396000818161064101526106c501526128d36000f3fe6080604052600436106100295760003560e01c80635d939e161461002e578063ebbaa1cb14610043575b600080fd5b61004161003c36600461228e565b610056565b005b61004161005136600461233b565b610288565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476123b9565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102498a600001518b60c001518b8b336104ac565b60c08b01526102588a886105f4565b50479150508181111561027a5761027a60008461027585856123b9565b6107e9565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610303576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061031434476123b9565b9050846103398160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610370576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103ae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103eb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610429576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610467576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047988608001518960c0015161081f565b61048388886105f4565b5047915050818111156104a0576104a060008461027585856123b9565b50506000909155505050565b6000828082036104e8576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856104f76001856123b9565b818110610506576105066123cc565b905060200281019061051891906123fb565b610529906080810190606001612439565b9050600061053682610995565b905073ffffffffffffffffffffffffffffffffffffffff82166105605761055d34826123b9565b90505b600061056c8888610a4e565b90506105788888610b5a565b6105858a89898985610bc7565b60008261059185610995565b61059b91906123b9565b9050898110156105e6576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60808201516040517fb5217bb400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201526000917f0000000000000000000000000000000000000000000000000000000000000000169063b5217bb4906024016020604051808303816000875af115801561068a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ae9190612456565b90506106c38360800151828560c00151610f79565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f35e37d38360000135856080015173ffffffffffffffffffffffffffffffffffffffff1660001b8660c00151866020013587604001602081019061073f9190612473565b606089013560808a013561075960c08c0160a08d01612496565b6040518963ffffffff1660e01b815260040161077b97969594939291906124b7565b6000604051808303818588803b15801561079457600080fd5b505af11580156107a8573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516107dc919061259a565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831615610815576108108383836110bc565b505050565b610810828261123e565b80600003610859576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166108b257803410156108ae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561091f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094391906126ad565b905081811015610989576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105dd565b61081083333085611368565b600073ffffffffffffffffffffffffffffffffffffffff821615610a46576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610a1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4191906126ad565b610a48565b475b92915050565b60608160008167ffffffffffffffff811115610a6c57610a6c611fff565b604051908082528060200260200182016040528015610a95578160200160208202803683370190505b5090506000805b83811015610b4f57868682818110610ab657610ab66123cc565b9050602002810190610ac891906123fb565b610ad9906080810190606001612439565b9150610ae482610995565b838281518110610af657610af66123cc565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b475734838281518110610b2f57610b2f6123cc565b60200260200101818151610b4391906123b9565b9052505b600101610a9c565b509095945050505050565b60005b818110156108105736838383818110610b7857610b786123cc565b9050602002810190610b8a91906123fb565b9050610b9c60e0820160c083016126c6565b15610bbe57610bbe610bb46060830160408401612439565b826080013561081f565b50600101610b5d565b838383838260018114610e945760008585610be36001856123b9565b818110610bf257610bf26123cc565b9050602002810190610c0491906123fb565b610c15906080810190606001612439565b9050600089815b81811015610dc057368d8d83818110610c3757610c376123cc565b9050602002810190610c4991906123fb565b9050610c78610c5e6060830160408401612439565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610cdb5750610cdb610c916040830160208401612439565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610cf25750610cf2610c916020830183612439565b8015610d775750610d77610d0960a08301836126e3565b610d189160049160009161274f565b610d2191612779565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610dad576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610db78f82611582565b50600101610c1c565b505060005b610dd06001856123b9565b811015610e8c576000888883818110610deb57610deb6123cc565b9050602002810190610dfd91906123fb565b610e0e906080810190606001612439565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e8357858281518110610e5557610e556123cc565b6020026020010151610e6682610995565b610e7091906123b9565b92508215610e8357610e838188856107e9565b50600101610dc5565b505050610f6d565b8760005b81811015610f6a57368b8b83818110610eb357610eb36123cc565b9050602002810190610ec591906123fb565b9050610eda610c5e6060830160408401612439565b80610ef35750610ef3610c916040830160208401612439565b8015610f0a5750610f0a610c916020830183612439565b8015610f215750610f21610d0960a08301836126e3565b610f57576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f618d82611582565b50600101610e98565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f9957505050565b73ffffffffffffffffffffffffffffffffffffffff8216610fe6576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa15801561105b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107f91906126ad565b10156108105761109183836000611898565b61081083837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611898565b73ffffffffffffffffffffffffffffffffffffffff8316611109576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611156576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156111c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111e791906126ad565b90508082111561122d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105dd565b611238848484611a98565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661128b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156112ce576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105dd565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611328576040519150601f19603f3d011682016040523d82523d6000602084013e61132d565b606091505b5050905080610810576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166113b5576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611402576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611473573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149791906126ad565b90506114a582868686611aee565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611515573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061153991906126ad565b61154391906123b9565b1461157a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6115986115926020830183612439565b3b151590565b6115ce576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361160e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611623610c5e6060850160408601612439565b61162e576000611634565b82608001355b9050600061165061164b6060860160408701612439565b610995565b9050600061166761164b6080870160608801612439565b90508260000361169e5761169e6116846060870160408801612439565b6116946040880160208901612439565b8760800135610f79565b84608001358210156116e9576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105dd565b6000806116f96020880188612439565b73ffffffffffffffffffffffffffffffffffffffff168561171d60a08a018a6126e3565b60405161172b9291906127c1565b60006040518083038185875af1925050503d8060008114611768576040519150601f19603f3d011682016040523d82523d6000602084013e61176d565b606091505b5091509150816117b857600061178282611b4c565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105dd91906127d1565b60006117cd61164b60808a0160608b01612439565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896117fe60208b018b612439565b61180e60608c0160408d01612439565b61181e60808d0160608e01612439565b8c60800135898711611830578661183a565b61183a8a886123b9565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b80158061193857506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611912573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061193691906126ad565b155b6119c4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016105dd565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108109084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611bca565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108109084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611a16565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112389085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611a16565b6060604482511015611b9157505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611bad6004808551611ba591906123b9565b859190611cd6565b905080806020019051810190611bc391906127e4565b9392505050565b6000611c2c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611df09092919063ffffffff16565b8051909150156108105780806020019051810190611c4a919061285b565b610810576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105dd565b606081611ce481601f612878565b1015611d1c576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d268284612878565b84511015611d60576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611d7f5760405191506000825260208201604052611de7565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611db8578051835260209283019201611da0565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611dff8484600085611e07565b949350505050565b606082471015611e99576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105dd565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ec2919061288b565b60006040518083038185875af1925050503d8060008114611eff576040519150601f19603f3d011682016040523d82523d6000602084013e611f04565b606091505b5091509150611f1587838387611f20565b979650505050505050565b60608315611fb6578251600003611faf5773ffffffffffffffffffffffffffffffffffffffff85163b611faf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105dd565b5081611dff565b611dff8383815115611fcb5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105dd91906127d1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561205257612052611fff565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561209f5761209f611fff565b604052919050565b600067ffffffffffffffff8211156120c1576120c1611fff565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126120fe57600080fd5b813561211161210c826120a7565b612058565b81815284602083860101111561212657600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461216557600080fd5b50565b803561217381612143565b919050565b801515811461216557600080fd5b803561217381612178565b600061014082840312156121a457600080fd5b6121ac61202e565b905081358152602082013567ffffffffffffffff808211156121cd57600080fd5b6121d9858386016120ed565b602084015260408401359150808211156121f257600080fd5b506121ff848285016120ed565b60408301525061221160608301612168565b606082015261222260808301612168565b608082015261223360a08301612168565b60a082015260c082013560c082015260e082013560e082015261010061225a818401612186565b9082015261012061226c838201612186565b9082015292915050565b600060c0828403121561228857600080fd5b50919050565b60008060008061010085870312156122a557600080fd5b843567ffffffffffffffff808211156122bd57600080fd5b6122c988838901612191565b955060208701359150808211156122df57600080fd5b818701915087601f8301126122f357600080fd5b81358181111561230257600080fd5b8860208260051b850101111561231757600080fd5b6020830195508094505050506123308660408701612276565b905092959194509250565b60008060e0838503121561234e57600080fd5b823567ffffffffffffffff81111561236557600080fd5b61237185828601612191565b9250506123818460208501612276565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610a4857610a4861238a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261242f57600080fd5b9190910192915050565b60006020828403121561244b57600080fd5b8135611bc381612143565b60006020828403121561246857600080fd5b8151611bc381612143565b60006020828403121561248557600080fd5b813560ff81168114611bc357600080fd5b6000602082840312156124a857600080fd5b813560048110611bc357600080fd5b600060e08201905088825287602083015286604083015260ff861660608301528460808301528360a08301526004831061251a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8260c083015298975050505050505050565b60005b8381101561254757818101518382015260200161252f565b50506000910152565b6000815180845261256881602086016020860161252c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526125c3610160850183612550565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526125fe8382612550565b9250506060850151612628608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061269b8187018315159052565b90950151151593019290925250919050565b6000602082840312156126bf57600080fd5b5051919050565b6000602082840312156126d857600080fd5b8135611bc381612178565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261271857600080fd5b83018035915067ffffffffffffffff82111561273357600080fd5b60200191503681900382131561274857600080fd5b9250929050565b6000808585111561275f57600080fd5b8386111561276c57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127b95780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611bc36020830184612550565b6000602082840312156127f657600080fd5b815167ffffffffffffffff81111561280d57600080fd5b8201601f8101841361281e57600080fd5b805161282c61210c826120a7565b81815285602083850101111561284157600080fd5b61285282602083016020860161252c565b95945050505050565b60006020828403121561286d57600080fd5b8151611bc381612178565b80820180821115610a4857610a4861238a565b6000825161242f81846020870161252c56fea26469706673582212201105b2f8299fa5ea55c7041ba47157bb71e3ded3f3f211b792bc6fcaba0fdd1b64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IAllBridge";
            readonly name: "_allBridge";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "CannotBridgeToSameNetwork";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ContractCallNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "receivedAmount";
            readonly type: "uint256";
        }];
        readonly name: "CumulativeSlippageTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InformationMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "required";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapDataProvided";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapFromZeroBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTransferToNullAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAValidSpender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOverflow";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiGenericSwapCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiSwappedGeneric";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferRecovered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "LiFiTransferStarted";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "fees";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes32";
                readonly name: "recipient";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint8";
                readonly name: "destinationChainId";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes32";
                readonly name: "receiveToken";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "enum IAllBridge.MessengerProtocol";
                readonly name: "messenger";
                readonly type: "uint8";
            }];
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly name: "_allBridgeData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaAllBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "approveTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "fromAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bool";
                readonly name: "requiresDeposit";
                readonly type: "bool";
            }];
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly name: "_swapData";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "fees";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes32";
                readonly name: "recipient";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint8";
                readonly name: "destinationChainId";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes32";
                readonly name: "receiveToken";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "enum IAllBridge.MessengerProtocol";
                readonly name: "messenger";
                readonly type: "uint8";
            }];
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly name: "_allBridgeData";
            readonly type: "tuple";
        }];
        readonly name: "swapAndStartBridgeTokensViaAllBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): AllBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AllBridgeFacet;
}
export {};
