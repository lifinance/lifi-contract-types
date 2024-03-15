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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200293b3803806200293b833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516128a06200009b600039600081816107d1015261084101526128a06000f3fe6080604052600436106100295760003560e01c806302cba4a31461002e578063a9d0550f14610050575b600080fd5b34801561003a57600080fd5b5061004e610049366004612360565b610063565b005b61004e61005e366004612395565b610337565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100de576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155610100820151829015610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b828061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b836101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84606467ffffffffffffffff16808260e001511461027e576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86736b175474e89094c44da98b954eedeac495271d0f8073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102fd576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61031f736b175474e89094c44da98b954eedeac495271d0f8a60c00151610637565b610328896107b7565b50506000909555505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103c3344761245e565b905085806101000151610402576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610440576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876104638160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561049a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104d8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610515576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88606467ffffffffffffffff16808260e001511461055f576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a736b175474e89094c44da98b954eedeac495271d0f8073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146105de576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105f38d600001518e60c001518e8e33610901565b60c08e01526106018d6107b7565b5050505050505060004790508181111561062a5761062a600084610625858561245e565b610a44565b5050600090915550505050565b80600003610671576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106ca57803410156106c6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610737573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075b9190612471565b9050818110156107a6576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6107b283333085610a75565b505050565b6107fa736b175474e89094c44da98b954eedeac495271d0f7f00000000000000000000000000000000000000000000000000000000000000008360c00151610c9f565b60a081015160c08201516040517f01e4f53a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016926301e4f53a926108959260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b1580156108af57600080fd5b505af11580156108c3573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1816040516108f691906124f8565b60405180910390a150565b60008280820361093d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561094c60018561245e565b81811061095b5761095b61260b565b905060200281019061096d919061263a565b61097e906080810190606001612678565b9050600061098b82610de2565b905073ffffffffffffffffffffffffffffffffffffffff82166109b5576109b2348261245e565b90505b60006109c18888610e9b565b90506109cd8888610fa7565b6109da8a89898985611014565b6000826109e685610de2565b6109f0919061245e565b905089811015610a36576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161079d565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a6b576107b28383836113c6565b6107b28282611548565b73ffffffffffffffffffffffffffffffffffffffff8416610ac2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b0f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610b80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba49190612471565b9050610bb282868686611672565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015260009183918516906370a0823190602401602060405180830381865afa158015610c23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c479190612471565b610c51919061245e565b905083610c5f826001612693565b11610c96576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610cbf57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d0c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da59190612471565b10156107b257610db78383600061174e565b6107b283837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61174e565b600073ffffffffffffffffffffffffffffffffffffffff821615610e93576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610e6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8e9190612471565b610e95565b475b92915050565b60608160008167ffffffffffffffff811115610eb957610eb96120f2565b604051908082528060200260200182016040528015610ee2578160200160208202803683370190505b5090506000805b83811015610f9c57868682818110610f0357610f0361260b565b9050602002810190610f15919061263a565b610f26906080810190606001612678565b9150610f3182610de2565b838281518110610f4357610f4361260b565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f945734838281518110610f7c57610f7c61260b565b60200260200101818151610f90919061245e565b9052505b600101610ee9565b509095945050505050565b60005b818110156107b25736838383818110610fc557610fc561260b565b9050602002810190610fd7919061263a565b9050610fe960e0820160c083016126a6565b1561100b5761100b6110016060830160408401612678565b8260800135610637565b50600101610faa565b8383838382600181146112e1576000858561103060018561245e565b81811061103f5761103f61260b565b9050602002810190611051919061263a565b611062906080810190606001612678565b9050600089815b8181101561120d57368d8d838181106110845761108461260b565b9050602002810190611096919061263a565b90506110c56110ab6060830160408401612678565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061112857506111286110de6040830160208401612678565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561113f575061113f6110de6020830183612678565b80156111c457506111c461115660a08301836126c3565b6111659160049160009161272f565b61116e91612759565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6111fa576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112048f826118d0565b50600101611069565b505060005b61121d60018561245e565b8110156112d95760008888838181106112385761123861260b565b905060200281019061124a919061263a565b61125b906080810190606001612678565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146112d0578582815181106112a2576112a261260b565b60200260200101516112b382610de2565b6112bd919061245e565b925082156112d0576112d0818885610a44565b50600101611212565b5050506113ba565b8760005b818110156113b757368b8b838181106113005761130061260b565b9050602002810190611312919061263a565b90506113276110ab6060830160408401612678565b8061134057506113406110de6040830160208401612678565b801561135757506113576110de6020830183612678565b801561136e575061136e61115660a08301836126c3565b6113a4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113ae8d826118d0565b506001016112e5565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611413576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611460576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156114cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f19190612471565b905080821115611537576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161079d565b611542848484611be6565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611595576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156115d8576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161079d565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611632576040519150601f19603f3d011682016040523d82523d6000602084013e611637565b606091505b50509050806107b2576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526115429085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c3c565b8015806117ee57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156117c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117ec9190612471565b155b61187a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161079d565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107b29084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016116cc565b6118e66118e06020830183612678565b3b151590565b61191c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361195c576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006119716110ab6060850160408601612678565b61197c576000611982565b82608001355b9050600061199e6119996060860160408701612678565b610de2565b905060006119b56119996080870160608801612678565b9050826000036119ec576119ec6119d26060870160408801612678565b6119e26040880160208901612678565b8760800135610c9f565b8460800135821015611a37576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161079d565b600080611a476020880188612678565b73ffffffffffffffffffffffffffffffffffffffff1685611a6b60a08a018a6126c3565b604051611a799291906127a1565b60006040518083038185875af1925050503d8060008114611ab6576040519150601f19603f3d011682016040523d82523d6000602084013e611abb565b606091505b509150915081611b06576000611ad082611d4b565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079d91906127b1565b6000611b1b61199960808a0160608b01612678565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611b4c60208b018b612678565b611b5c60608c0160408d01612678565b611b6c60808d0160608e01612678565b8c60800135898711611b7e5786611b88565b611b888a8861245e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107b29084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016116cc565b6000611c9e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611dc99092919063ffffffff16565b9050805160001480611cbf575080806020019051810190611cbf91906127c4565b6107b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161079d565b6060604482511015611d9057505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611dac6004808551611da4919061245e565b859190611de0565b905080806020019051810190611dc291906127e1565b9392505050565b6060611dd88484600085611efa565b949350505050565b606081611dee81601f612693565b1015611e26576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e308284612693565b84511015611e6a576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611e895760405191506000825260208201604052611ef1565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611ec2578051835260209283019201611eaa565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611f8c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161079d565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611fb59190612858565b60006040518083038185875af1925050503d8060008114611ff2576040519150601f19603f3d011682016040523d82523d6000602084013e611ff7565b606091505b509150915061200887838387612013565b979650505050505050565b606083156120a95782516000036120a25773ffffffffffffffffffffffffffffffffffffffff85163b6120a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161079d565b5081611dd8565b611dd883838151156120be5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079d91906127b1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715612145576121456120f2565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612192576121926120f2565b604052919050565b600067ffffffffffffffff8211156121b4576121b46120f2565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126121f157600080fd5b81356122046121ff8261219a565b61214b565b81815284602083860101111561221957600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461225a57600080fd5b919050565b801515811461226d57600080fd5b50565b803561225a8161225f565b6000610140828403121561228e57600080fd5b612296612121565b905081358152602082013567ffffffffffffffff808211156122b757600080fd5b6122c3858386016121e0565b602084015260408401359150808211156122dc57600080fd5b506122e9848285016121e0565b6040830152506122fb60608301612236565b606082015261230c60808301612236565b608082015261231d60a08301612236565b60a082015260c082013560c082015260e082013560e0820152610100612344818401612270565b90820152610120612356838201612270565b9082015292915050565b60006020828403121561237257600080fd5b813567ffffffffffffffff81111561238957600080fd5b611dd88482850161227b565b6000806000604084860312156123aa57600080fd5b833567ffffffffffffffff808211156123c257600080fd5b6123ce8783880161227b565b945060208601359150808211156123e457600080fd5b818601915086601f8301126123f857600080fd5b81358181111561240757600080fd5b8760208260051b850101111561241c57600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610e9557610e9561242f565b60006020828403121561248357600080fd5b5051919050565b60005b838110156124a557818101518382015260200161248d565b50506000910152565b600081518084526124c681602086016020860161248a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526125216101608501836124ae565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261255c83826124ae565b9250506060850151612586608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125f98187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261266e57600080fd5b9190910192915050565b60006020828403121561268a57600080fd5b611dc282612236565b80820180821115610e9557610e9561242f565b6000602082840312156126b857600080fd5b8135611dc28161225f565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126126f857600080fd5b83018035915067ffffffffffffffff82111561271357600080fd5b60200191503681900382131561272857600080fd5b9250929050565b6000808585111561273f57600080fd5b8386111561274c57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127995780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611dc260208301846124ae565b6000602082840312156127d657600080fd5b8151611dc28161225f565b6000602082840312156127f357600080fd5b815167ffffffffffffffff81111561280a57600080fd5b8201601f8101841361281b57600080fd5b80516128296121ff8261219a565b81815285602083850101111561283e57600080fd5b61284f82602083016020860161248a565b95945050505050565b6000825161266e81846020870161248a56fea2646970667358221220ff56ab1e3756b8176ec633ac98d4d487de0e0f418b3076a6b10119ee8eaf762964736f6c63430008110033";
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
