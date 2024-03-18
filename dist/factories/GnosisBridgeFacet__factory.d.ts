import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GnosisBridgeFacet, GnosisBridgeFacetInterface } from "../GnosisBridgeFacet";
declare type GnosisBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GnosisBridgeFacet__factory extends ContractFactory {
    constructor(...args: GnosisBridgeFacetConstructorParams);
    deploy(_xDaiBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GnosisBridgeFacet>;
    getDeployTransaction(_xDaiBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GnosisBridgeFacet;
    connect(signer: Signer): GnosisBridgeFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200293c3803806200293c833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516128a16200009b600039600081816107d1015261084101526128a16000f3fe6080604052600436106100295760003560e01c806302cba4a31461002e578063a9d0550f14610050575b600080fd5b34801561003a57600080fd5b5061004e610049366004612361565b610063565b005b61004e61005e366004612396565b610337565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100de576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155610100820151829015610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b828061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b836101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84606467ffffffffffffffff16808260e001511461027e576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86736b175474e89094c44da98b954eedeac495271d0f8073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102fd576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61031f736b175474e89094c44da98b954eedeac495271d0f8a60c00151610637565b610328896107b7565b50506000909555505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103c3344761245f565b905085806101000151610402576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610440576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876104638160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561049a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104d8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610515576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88606467ffffffffffffffff16808260e001511461055f576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a736b175474e89094c44da98b954eedeac495271d0f8073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146105de576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105f38d600001518e60c001518e8e33610901565b60c08e01526106018d6107b7565b5050505050505060004790508181111561062a5761062a600084610625858561245f565b610a44565b5050600090915550505050565b80600003610671576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106ca57803410156106c6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610737573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075b9190612472565b9050818110156107a6576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6107b283333085610a75565b505050565b6107fa736b175474e89094c44da98b954eedeac495271d0f7f00000000000000000000000000000000000000000000000000000000000000008360c00151610ca0565b60a081015160c08201516040517f01e4f53a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016926301e4f53a926108959260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b1580156108af57600080fd5b505af11580156108c3573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1816040516108f691906124f9565b60405180910390a150565b60008280820361093d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561094c60018561245f565b81811061095b5761095b61260c565b905060200281019061096d919061263b565b61097e906080810190606001612679565b9050600061098b82610de3565b905073ffffffffffffffffffffffffffffffffffffffff82166109b5576109b2348261245f565b90505b60006109c18888610e9c565b90506109cd8888610fa8565b6109da8a89898985611015565b6000826109e685610de3565b6109f0919061245f565b905089811015610a36576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161079d565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a6b576107b28383836113c7565b6107b28282611549565b73ffffffffffffffffffffffffffffffffffffffff8416610ac2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b0f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610b80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba49190612472565b9050610bb282868686611673565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015260009183918516906370a0823190602401602060405180830381865afa158015610c23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c479190612472565b610c51919061245f565b905083610c5f826001612694565b1015610c97576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610cc057505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d0d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da69190612472565b10156107b257610db88383600061174f565b6107b283837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61174f565b600073ffffffffffffffffffffffffffffffffffffffff821615610e94576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610e6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8f9190612472565b610e96565b475b92915050565b60608160008167ffffffffffffffff811115610eba57610eba6120f3565b604051908082528060200260200182016040528015610ee3578160200160208202803683370190505b5090506000805b83811015610f9d57868682818110610f0457610f0461260c565b9050602002810190610f16919061263b565b610f27906080810190606001612679565b9150610f3282610de3565b838281518110610f4457610f4461260c565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f955734838281518110610f7d57610f7d61260c565b60200260200101818151610f91919061245f565b9052505b600101610eea565b509095945050505050565b60005b818110156107b25736838383818110610fc657610fc661260c565b9050602002810190610fd8919061263b565b9050610fea60e0820160c083016126a7565b1561100c5761100c6110026060830160408401612679565b8260800135610637565b50600101610fab565b8383838382600181146112e2576000858561103160018561245f565b8181106110405761104061260c565b9050602002810190611052919061263b565b611063906080810190606001612679565b9050600089815b8181101561120e57368d8d838181106110855761108561260c565b9050602002810190611097919061263b565b90506110c66110ac6060830160408401612679565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061112957506111296110df6040830160208401612679565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561114057506111406110df6020830183612679565b80156111c557506111c561115760a08301836126c4565b61116691600491600091612730565b61116f9161275a565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6111fb576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112058f826118d1565b5060010161106a565b505060005b61121e60018561245f565b8110156112da5760008888838181106112395761123961260c565b905060200281019061124b919061263b565b61125c906080810190606001612679565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146112d1578582815181106112a3576112a361260c565b60200260200101516112b482610de3565b6112be919061245f565b925082156112d1576112d1818885610a44565b50600101611213565b5050506113bb565b8760005b818110156113b857368b8b838181106113015761130161260c565b9050602002810190611313919061263b565b90506113286110ac6060830160408401612679565b8061134157506113416110df6040830160208401612679565b801561135857506113586110df6020830183612679565b801561136f575061136f61115760a08301836126c4565b6113a5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113af8d826118d1565b506001016112e6565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611414576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611461576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156114ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f29190612472565b905080821115611538576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161079d565b611543848484611be7565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611596576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156115d9576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161079d565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611633576040519150601f19603f3d011682016040523d82523d6000602084013e611638565b606091505b50509050806107b2576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526115439085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c3d565b8015806117ef57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156117c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117ed9190612472565b155b61187b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161079d565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107b29084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016116cd565b6118e76118e16020830183612679565b3b151590565b61191d576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361195d576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006119726110ac6060850160408601612679565b61197d576000611983565b82608001355b9050600061199f61199a6060860160408701612679565b610de3565b905060006119b661199a6080870160608801612679565b9050826000036119ed576119ed6119d36060870160408801612679565b6119e36040880160208901612679565b8760800135610ca0565b8460800135821015611a38576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161079d565b600080611a486020880188612679565b73ffffffffffffffffffffffffffffffffffffffff1685611a6c60a08a018a6126c4565b604051611a7a9291906127a2565b60006040518083038185875af1925050503d8060008114611ab7576040519150601f19603f3d011682016040523d82523d6000602084013e611abc565b606091505b509150915081611b07576000611ad182611d4c565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079d91906127b2565b6000611b1c61199a60808a0160608b01612679565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611b4d60208b018b612679565b611b5d60608c0160408d01612679565b611b6d60808d0160608e01612679565b8c60800135898711611b7f5786611b89565b611b898a8861245f565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107b29084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016116cd565b6000611c9f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611dca9092919063ffffffff16565b9050805160001480611cc0575080806020019051810190611cc091906127c5565b6107b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161079d565b6060604482511015611d9157505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611dad6004808551611da5919061245f565b859190611de1565b905080806020019051810190611dc391906127e2565b9392505050565b6060611dd98484600085611efb565b949350505050565b606081611def81601f612694565b1015611e27576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e318284612694565b84511015611e6b576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611e8a5760405191506000825260208201604052611ef2565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611ec3578051835260209283019201611eab565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611f8d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161079d565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611fb69190612859565b60006040518083038185875af1925050503d8060008114611ff3576040519150601f19603f3d011682016040523d82523d6000602084013e611ff8565b606091505b509150915061200987838387612014565b979650505050505050565b606083156120aa5782516000036120a35773ffffffffffffffffffffffffffffffffffffffff85163b6120a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161079d565b5081611dd9565b611dd983838151156120bf5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079d91906127b2565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715612146576121466120f3565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612193576121936120f3565b604052919050565b600067ffffffffffffffff8211156121b5576121b56120f3565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126121f257600080fd5b81356122056122008261219b565b61214c565b81815284602083860101111561221a57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461225b57600080fd5b919050565b801515811461226e57600080fd5b50565b803561225b81612260565b6000610140828403121561228f57600080fd5b612297612122565b905081358152602082013567ffffffffffffffff808211156122b857600080fd5b6122c4858386016121e1565b602084015260408401359150808211156122dd57600080fd5b506122ea848285016121e1565b6040830152506122fc60608301612237565b606082015261230d60808301612237565b608082015261231e60a08301612237565b60a082015260c082013560c082015260e082013560e0820152610100612345818401612271565b90820152610120612357838201612271565b9082015292915050565b60006020828403121561237357600080fd5b813567ffffffffffffffff81111561238a57600080fd5b611dd98482850161227c565b6000806000604084860312156123ab57600080fd5b833567ffffffffffffffff808211156123c357600080fd5b6123cf8783880161227c565b945060208601359150808211156123e557600080fd5b818601915086601f8301126123f957600080fd5b81358181111561240857600080fd5b8760208260051b850101111561241d57600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610e9657610e96612430565b60006020828403121561248457600080fd5b5051919050565b60005b838110156124a657818101518382015260200161248e565b50506000910152565b600081518084526124c781602086016020860161248b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526125226101608501836124af565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261255d83826124af565b9250506060850151612587608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125fa8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261266f57600080fd5b9190910192915050565b60006020828403121561268b57600080fd5b611dc382612237565b80820180821115610e9657610e96612430565b6000602082840312156126b957600080fd5b8135611dc381612260565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126126f957600080fd5b83018035915067ffffffffffffffff82111561271457600080fd5b60200191503681900382131561272957600080fd5b9250929050565b6000808585111561274057600080fd5b8386111561274d57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561279a5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611dc360208301846124af565b6000602082840312156127d757600080fd5b8151611dc381612260565b6000602082840312156127f457600080fd5b815167ffffffffffffffff81111561280b57600080fd5b8201601f8101841361281c57600080fd5b805161282a6122008261219b565b81815285602083850101111561283f57600080fd5b61285082602083016020860161248b565b95945050505050565b6000825161266f81846020870161248b56fea26469706673582212203e6f433ef525c512920544b073894e3a8e628917a526a069d71969702eecedf864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_xDaiBridge";
            readonly type: "address";
            readonly internalType: "contract IXDaiBridge";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaXDaiBridge";
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
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaXDaiBridge";
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
        readonly name: "InvalidDestinationChain";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSendingToken";
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
    static createInterface(): GnosisBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GnosisBridgeFacet;
}
export {};
