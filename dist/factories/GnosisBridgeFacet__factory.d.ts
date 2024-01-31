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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200292b3803806200292b833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516128906200009b600039600081816107d1015261084101526128906000f3fe6080604052600436106100295760003560e01c806302cba4a31461002e578063a9d0550f14610050575b600080fd5b34801561003a57600080fd5b5061004e610049366004612350565b610063565b005b61004e61005e366004612385565b610337565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100de576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155610100820151829015610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b828061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b836101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84606467ffffffffffffffff16808260e001511461027e576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86736b175474e89094c44da98b954eedeac495271d0f8073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102fd576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61031f736b175474e89094c44da98b954eedeac495271d0f8a60c00151610637565b610328896107b7565b50506000909555505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103c3344761244e565b905085806101000151610402576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610440576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876104638160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561049a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104d8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610515576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88606467ffffffffffffffff16808260e001511461055f576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a736b175474e89094c44da98b954eedeac495271d0f8073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146105de576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105f38d600001518e60c001518e8e33610901565b60c08e01526106018d6107b7565b5050505050505060004790508181111561062a5761062a600084610625858561244e565b610a44565b5050600090915550505050565b80600003610671576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106ca57803410156106c6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610737573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075b9190612461565b9050818110156107a6576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6107b283333085610a75565b505050565b6107fa736b175474e89094c44da98b954eedeac495271d0f7f00000000000000000000000000000000000000000000000000000000000000008360c00151610c8f565b60a081015160c08201516040517f01e4f53a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016926301e4f53a926108959260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b1580156108af57600080fd5b505af11580156108c3573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1816040516108f691906124e8565b60405180910390a150565b60008280820361093d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561094c60018561244e565b81811061095b5761095b6125fb565b905060200281019061096d919061262a565b61097e906080810190606001612668565b9050600061098b82610dd2565b905073ffffffffffffffffffffffffffffffffffffffff82166109b5576109b2348261244e565b90505b60006109c18888610e8b565b90506109cd8888610f97565b6109da8a89898985611004565b6000826109e685610dd2565b6109f0919061244e565b905089811015610a36576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161079d565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a6b576107b28383836113b6565b6107b28282611538565b73ffffffffffffffffffffffffffffffffffffffff8416610ac2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b0f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610b80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba49190612461565b9050610bb282868686611662565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610c22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c469190612461565b610c50919061244e565b14610c87576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610caf57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610cfc576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d959190612461565b10156107b257610da78383600061173e565b6107b283837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61173e565b600073ffffffffffffffffffffffffffffffffffffffff821615610e83576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610e5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7e9190612461565b610e85565b475b92915050565b60608160008167ffffffffffffffff811115610ea957610ea96120e2565b604051908082528060200260200182016040528015610ed2578160200160208202803683370190505b5090506000805b83811015610f8c57868682818110610ef357610ef36125fb565b9050602002810190610f05919061262a565b610f16906080810190606001612668565b9150610f2182610dd2565b838281518110610f3357610f336125fb565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f845734838281518110610f6c57610f6c6125fb565b60200260200101818151610f80919061244e565b9052505b600101610ed9565b509095945050505050565b60005b818110156107b25736838383818110610fb557610fb56125fb565b9050602002810190610fc7919061262a565b9050610fd960e0820160c08301612683565b15610ffb57610ffb610ff16060830160408401612668565b8260800135610637565b50600101610f9a565b8383838382600181146112d1576000858561102060018561244e565b81811061102f5761102f6125fb565b9050602002810190611041919061262a565b611052906080810190606001612668565b9050600089815b818110156111fd57368d8d83818110611074576110746125fb565b9050602002810190611086919061262a565b90506110b561109b6060830160408401612668565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061111857506111186110ce6040830160208401612668565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561112f575061112f6110ce6020830183612668565b80156111b457506111b461114660a08301836126a0565b6111559160049160009161270c565b61115e91612736565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6111ea576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111f48f826118c0565b50600101611059565b505060005b61120d60018561244e565b8110156112c9576000888883818110611228576112286125fb565b905060200281019061123a919061262a565b61124b906080810190606001612668565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146112c057858281518110611292576112926125fb565b60200260200101516112a382610dd2565b6112ad919061244e565b925082156112c0576112c0818885610a44565b50600101611202565b5050506113aa565b8760005b818110156113a757368b8b838181106112f0576112f06125fb565b9050602002810190611302919061262a565b905061131761109b6060830160408401612668565b8061133057506113306110ce6040830160208401612668565b801561134757506113476110ce6020830183612668565b801561135e575061135e61114660a08301836126a0565b611394576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61139e8d826118c0565b506001016112d5565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611403576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611450576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156114bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e19190612461565b905080821115611527576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161079d565b611532848484611bd6565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611585576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156115c8576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161079d565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611622576040519150601f19603f3d011682016040523d82523d6000602084013e611627565b606091505b50509050806107b2576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526115329085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c2c565b8015806117de57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156117b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117dc9190612461565b155b61186a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161079d565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107b29084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016116bc565b6118d66118d06020830183612668565b3b151590565b61190c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361194c576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061196161109b6060850160408601612668565b61196c576000611972565b82608001355b9050600061198e6119896060860160408701612668565b610dd2565b905060006119a56119896080870160608801612668565b9050826000036119dc576119dc6119c26060870160408801612668565b6119d26040880160208901612668565b8760800135610c8f565b8460800135821015611a27576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161079d565b600080611a376020880188612668565b73ffffffffffffffffffffffffffffffffffffffff1685611a5b60a08a018a6126a0565b604051611a6992919061277e565b60006040518083038185875af1925050503d8060008114611aa6576040519150601f19603f3d011682016040523d82523d6000602084013e611aab565b606091505b509150915081611af6576000611ac082611d3b565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079d919061278e565b6000611b0b61198960808a0160608b01612668565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611b3c60208b018b612668565b611b4c60608c0160408d01612668565b611b5c60808d0160608e01612668565b8c60800135898711611b6e5786611b78565b611b788a8861244e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107b29084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016116bc565b6000611c8e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611db99092919063ffffffff16565b9050805160001480611caf575080806020019051810190611caf91906127a1565b6107b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161079d565b6060604482511015611d8057505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611d9c6004808551611d94919061244e565b859190611dd0565b905080806020019051810190611db291906127be565b9392505050565b6060611dc88484600085611eea565b949350505050565b606081611dde81601f612835565b1015611e16576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e208284612835565b84511015611e5a576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611e795760405191506000825260208201604052611ee1565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611eb2578051835260209283019201611e9a565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611f7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161079d565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611fa59190612848565b60006040518083038185875af1925050503d8060008114611fe2576040519150601f19603f3d011682016040523d82523d6000602084013e611fe7565b606091505b5091509150611ff887838387612003565b979650505050505050565b606083156120995782516000036120925773ffffffffffffffffffffffffffffffffffffffff85163b612092576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161079d565b5081611dc8565b611dc883838151156120ae5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079d919061278e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715612135576121356120e2565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612182576121826120e2565b604052919050565b600067ffffffffffffffff8211156121a4576121a46120e2565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126121e157600080fd5b81356121f46121ef8261218a565b61213b565b81815284602083860101111561220957600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461224a57600080fd5b919050565b801515811461225d57600080fd5b50565b803561224a8161224f565b6000610140828403121561227e57600080fd5b612286612111565b905081358152602082013567ffffffffffffffff808211156122a757600080fd5b6122b3858386016121d0565b602084015260408401359150808211156122cc57600080fd5b506122d9848285016121d0565b6040830152506122eb60608301612226565b60608201526122fc60808301612226565b608082015261230d60a08301612226565b60a082015260c082013560c082015260e082013560e0820152610100612334818401612260565b90820152610120612346838201612260565b9082015292915050565b60006020828403121561236257600080fd5b813567ffffffffffffffff81111561237957600080fd5b611dc88482850161226b565b60008060006040848603121561239a57600080fd5b833567ffffffffffffffff808211156123b257600080fd5b6123be8783880161226b565b945060208601359150808211156123d457600080fd5b818601915086601f8301126123e857600080fd5b8135818111156123f757600080fd5b8760208260051b850101111561240c57600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610e8557610e8561241f565b60006020828403121561247357600080fd5b5051919050565b60005b8381101561249557818101518382015260200161247d565b50506000910152565b600081518084526124b681602086016020860161247a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261251161016085018361249e565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261254c838261249e565b9250506060850151612576608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125e98187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261265e57600080fd5b9190910192915050565b60006020828403121561267a57600080fd5b611db282612226565b60006020828403121561269557600080fd5b8135611db28161224f565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126126d557600080fd5b83018035915067ffffffffffffffff8211156126f057600080fd5b60200191503681900382131561270557600080fd5b9250929050565b6000808585111561271c57600080fd5b8386111561272957600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127765780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611db2602083018461249e565b6000602082840312156127b357600080fd5b8151611db28161224f565b6000602082840312156127d057600080fd5b815167ffffffffffffffff8111156127e757600080fd5b8201601f810184136127f857600080fd5b80516128066121ef8261218a565b81815285602083850101111561281b57600080fd5b61282c82602083016020860161247a565b95945050505050565b80820180821115610e8557610e8561241f565b6000825161265e81846020870161247a56fea2646970667358221220c65e3926ac0ac781229ec28d8b249d325a5eabf1e237e5e7dec52e407662420f64736f6c63430008110033";
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
