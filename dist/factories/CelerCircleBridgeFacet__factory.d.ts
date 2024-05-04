import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CelerCircleBridgeFacet, CelerCircleBridgeFacetInterface } from "../CelerCircleBridgeFacet";
declare type CelerCircleBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CelerCircleBridgeFacet__factory extends ContractFactory {
    constructor(...args: CelerCircleBridgeFacetConstructorParams);
    deploy(_circleBridgeProxy: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CelerCircleBridgeFacet>;
    getDeployTransaction(_circleBridgeProxy: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CelerCircleBridgeFacet;
    connect(signer: Signer): CelerCircleBridgeFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002a6638038062002a66833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051612979620000ed600039600081816102440152818161050b01528181610598015281816107ee01526108a501526000818161080f01526108cd01526129796000f3fe6080604052600436106100295760003560e01c80638fab06631461002e578063bab657d814610043575b600080fd5b61004161003c3660046123fc565b610063565b005b34801561004f57600080fd5b5061004161005e366004612496565b610320565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100de576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100ef3447612501565b90508580610100015161012e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561016c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761018f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101c6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610204576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610241576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b887f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102cc576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102e18b600001518c60c001518c8c336105df565b60c08c01526102ef8b610727565b50479350505050818111156103135761031360008461030e8585612501565b610975565b5050600090915550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161039b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556103a882612514565b806101000151156103e5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103ee83612514565b8061012001511561042b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043484612514565b60a081015173ffffffffffffffffffffffffffffffffffffffff16610485576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104c3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610500576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61050985612514565b7f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff1614610593576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105c17f00000000000000000000000000000000000000000000000000000000000000008860c001356109ab565b6105d26105cd88612514565b610727565b5050600090935550505050565b60008280820361061b576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561062a600185612501565b81811061063957610639612520565b905060200281019061064b919061254f565b61065c90608081019060600161258d565b9050600061066982610b21565b905073ffffffffffffffffffffffffffffffffffffffff8216610693576106903482612501565b90505b600061069f8888610bda565b90506106ab8888610ce6565b6106b88a89898985610d53565b6000826106c485610b21565b6106ce9190612501565b905089811015610719576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60e081015167ffffffffffffffff10156107e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604160248201527f5f627269646765446174612e64657374696e6174696f6e436861696e4964207060448201527f617373656420697320746f6f2062696720746f2066697420696e2075696e743660648201527f3400000000000000000000000000000000000000000000000000000000000000608482015260a401610710565b6108387f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008360c00151611105565b60c081015160e082015160a08301516040517f2fbb00ac000000000000000000000000000000000000000000000000000000008152600481019390935267ffffffffffffffff909116602483015273ffffffffffffffffffffffffffffffffffffffff90811660448301527f0000000000000000000000000000000000000000000000000000000000000000811660648301527f00000000000000000000000000000000000000000000000000000000000000001690632fbb00ac906084016020604051808303816000875af1158015610916573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093a91906125a8565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161096a9190612640565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff8316156109a15761099c838383611248565b505050565b61099c82826113ca565b806000036109e5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a3e5780341015610a3a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610aab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acf9190612753565b905081811015610b15576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610710565b61099c833330856114f4565b600073ffffffffffffffffffffffffffffffffffffffff821615610bd2576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610ba9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcd9190612753565b610bd4565b475b92915050565b60608160008167ffffffffffffffff811115610bf857610bf861218e565b604051908082528060200260200182016040528015610c21578160200160208202803683370190505b5090506000805b83811015610cdb57868682818110610c4257610c42612520565b9050602002810190610c54919061254f565b610c6590608081019060600161258d565b9150610c7082610b21565b838281518110610c8257610c82612520565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610cd35734838281518110610cbb57610cbb612520565b60200260200101818151610ccf9190612501565b9052505b600101610c28565b509095945050505050565b60005b8181101561099c5736838383818110610d0457610d04612520565b9050602002810190610d16919061254f565b9050610d2860e0820160c0830161276c565b15610d4a57610d4a610d40606083016040840161258d565b82608001356109ab565b50600101610ce9565b8383838382600181146110205760008585610d6f600185612501565b818110610d7e57610d7e612520565b9050602002810190610d90919061254f565b610da190608081019060600161258d565b9050600089815b81811015610f4c57368d8d83818110610dc357610dc3612520565b9050602002810190610dd5919061254f565b9050610e04610dea606083016040840161258d565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e675750610e67610e1d604083016020840161258d565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e7e5750610e7e610e1d602083018361258d565b8015610f035750610f03610e9560a0830183612789565b610ea4916004916000916127f5565b610ead9161281f565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f39576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f438f8261170e565b50600101610da8565b505060005b610f5c600185612501565b811015611018576000888883818110610f7757610f77612520565b9050602002810190610f89919061254f565b610f9a90608081019060600161258d565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461100f57858281518110610fe157610fe1612520565b6020026020010151610ff282610b21565b610ffc9190612501565b9250821561100f5761100f818885610975565b50600101610f51565b5050506110f9565b8760005b818110156110f657368b8b8381811061103f5761103f612520565b9050602002810190611051919061254f565b9050611066610dea606083016040840161258d565b8061107f575061107f610e1d604083016020840161258d565b80156110965750611096610e1d602083018361258d565b80156110ad57506110ad610e9560a0830183612789565b6110e3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110ed8d8261170e565b50600101611024565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661112557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611172576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156111e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120b9190612753565b101561099c5761121d83836000611a24565b61099c83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a24565b73ffffffffffffffffffffffffffffffffffffffff8316611295576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166112e2576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561134f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113739190612753565b9050808211156113b9576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610710565b6113c4848484611c24565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611417576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561145a576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610710565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146114b4576040519150601f19603f3d011682016040523d82523d6000602084013e6114b9565b606091505b505090508061099c576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611541576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661158e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156115ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116239190612753565b905061163182868686611c7a565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156116a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c59190612753565b6116cf9190612501565b14611706576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61172461171e602083018361258d565b3b151590565b61175a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361179a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006117af610dea606085016040860161258d565b6117ba5760006117c0565b82608001355b905060006117dc6117d7606086016040870161258d565b610b21565b905060006117f36117d7608087016060880161258d565b90508260000361182a5761182a611810606087016040880161258d565b611820604088016020890161258d565b8760800135611105565b8460800135821015611875576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610710565b600080611885602088018861258d565b73ffffffffffffffffffffffffffffffffffffffff16856118a960a08a018a612789565b6040516118b7929190612867565b60006040518083038185875af1925050503d80600081146118f4576040519150601f19603f3d011682016040523d82523d6000602084013e6118f9565b606091505b50915091508161194457600061190e82611cd8565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107109190612877565b60006119596117d760808a0160608b0161258d565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961198a60208b018b61258d565b61199a60608c0160408d0161258d565b6119aa60808d0160608e0161258d565b8c608001358987116119bc57866119c6565b6119c68a88612501565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611ac457506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611a9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ac29190612753565b155b611b50576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610710565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261099c9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d56565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261099c9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611ba2565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113c49085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611ba2565b6060604482511015611d1d57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611d396004808551611d319190612501565b859190611e65565b905080806020019051810190611d4f919061288a565b9392505050565b6000611db8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611f7f9092919063ffffffff16565b9050805160001480611dd9575080806020019051810190611dd99190612901565b61099c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610710565b606081611e7381601f61291e565b1015611eab576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611eb5828461291e565b84511015611eef576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611f0e5760405191506000825260208201604052611f76565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611f47578051835260209283019201611f2f565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611f8e8484600085611f96565b949350505050565b606082471015612028576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610710565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516120519190612931565b60006040518083038185875af1925050503d806000811461208e576040519150601f19603f3d011682016040523d82523d6000602084013e612093565b606091505b50915091506120a4878383876120af565b979650505050505050565b6060831561214557825160000361213e5773ffffffffffffffffffffffffffffffffffffffff85163b61213e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610710565b5081611f8e565b611f8e838381511561215a5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107109190612877565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156121e1576121e161218e565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561222e5761222e61218e565b604052919050565b600067ffffffffffffffff8211156122505761225061218e565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261228d57600080fd5b81356122a061229b82612236565b6121e7565b8181528460208386010111156122b557600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146122f657600080fd5b919050565b801515811461230957600080fd5b50565b80356122f6816122fb565b6000610140828403121561232a57600080fd5b6123326121bd565b905081358152602082013567ffffffffffffffff8082111561235357600080fd5b61235f8583860161227c565b6020840152604084013591508082111561237857600080fd5b506123858482850161227c565b604083015250612397606083016122d2565b60608201526123a8608083016122d2565b60808201526123b960a083016122d2565b60a082015260c082013560c082015260e082013560e08201526101006123e081840161230c565b908201526101206123f283820161230c565b9082015292915050565b60008060006040848603121561241157600080fd5b833567ffffffffffffffff8082111561242957600080fd5b61243587838801612317565b9450602086013591508082111561244b57600080fd5b818601915086601f83011261245f57600080fd5b81358181111561246e57600080fd5b8760208260051b850101111561248357600080fd5b6020830194508093505050509250925092565b6000602082840312156124a857600080fd5b813567ffffffffffffffff8111156124bf57600080fd5b82016101408185031215611d4f57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610bd457610bd46124d2565b6000610bd43683612317565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261258357600080fd5b9190910192915050565b60006020828403121561259f57600080fd5b611d4f826122d2565b6000602082840312156125ba57600080fd5b815167ffffffffffffffff81168114611d4f57600080fd5b60005b838110156125ed5781810151838201526020016125d5565b50506000910152565b6000815180845261260e8160208601602086016125d2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526126696101608501836125f6565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526126a483826125f6565b92505060608501516126ce608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127418187018315159052565b90950151151593019290925250919050565b60006020828403121561276557600080fd5b5051919050565b60006020828403121561277e57600080fd5b8135611d4f816122fb565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126127be57600080fd5b83018035915067ffffffffffffffff8211156127d957600080fd5b6020019150368190038213156127ee57600080fd5b9250929050565b6000808585111561280557600080fd5b8386111561281257600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561285f5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611d4f60208301846125f6565b60006020828403121561289c57600080fd5b815167ffffffffffffffff8111156128b357600080fd5b8201601f810184136128c457600080fd5b80516128d261229b82612236565b8181528560208385010111156128e757600080fd5b6128f88260208301602086016125d2565b95945050505050565b60006020828403121561291357600080fd5b8151611d4f816122fb565b80820180821115610bd457610bd46124d2565b600082516125838184602087016125d256fea2646970667358221220a3121ac5a89f78313a4a9850ea174781c9df0fc28eb19544a0267dcbb26dfb7a64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_circleBridgeProxy";
            readonly type: "address";
            readonly internalType: "contract ICircleBridgeProxy";
        }, {
            readonly name: "_usdc";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCelerCircleBridge";
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
        readonly name: "swapAndStartBridgeTokensViaCelerCircleBridge";
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
    static createInterface(): CelerCircleBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CelerCircleBridgeFacet;
}
export {};
