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
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002a0e38038062002a0e833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a05161292a620000e46000396000818160db01526107b0015260008181607e0152818161076a015281816108ac01526108ec015261292a6000f3fe60806040526004361061003f5760003560e01c8063315ea70f1461004457806334a3e4a014610059578063afdac3d61461006c578063eb6d3a11146100c9575b600080fd5b6100576100523660046122bd565b6100fd565b005b610057610067366004612321565b6102e7565b34801561007857600080fd5b506100a07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100d557600080fd5b506100a07f000000000000000000000000000000000000000000000000000000000000000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610178576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061018934476123e0565b9050846101ae8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101e5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610223576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610260576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561029e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b087608001518860c001516104d5565b6102ba8787610655565b50479050818111156102db576102db6000846102d685856123e0565b610a38565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610362576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061037334476123e0565b9050868061010001516103b2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103d58160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561040c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361044a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610487576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61049c89600001518a60c001518a8a33610a69565b60c08a01526104ab8987610655565b50479050818111156104c7576104c76000846102d685856123e0565b505060009091555050505050565b8060000361050f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105685780341015610564576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f9919061241a565b905081811015610644576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61065083333085610bac565b505050565b6101208201511515600061066d610100840184612433565b9050111515146106a9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8161012001511580156106f857506106c4602082018261249f565b73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b1561072f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff166108a25760c082015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690637b939232906107a1604085016020860161249f565b6107ae602086018661249f565b7f00000000000000000000000000000000000000000000000000000000000000006107df606088016040890161249f565b60c089015160e08a015160608a0135906107ff60a08c0160808d0161249f565b61080f60c08d0160a08e016124c1565b61081f60e08e0160c08f016124c1565b8d60e001602081019061083291906124c1565b8e8061010001906108439190612433565b6040518f63ffffffff1660e01b815260040161086b9d9c9b9a99989796959493929190612530565b6000604051808303818588803b15801561088457600080fd5b505af1158015610898573d6000803e3d6000fd5b50505050506109fd565b6108d582608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610dc6565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016637b939232610921604084016020850161249f565b61092e602085018561249f565b6080860151610943606087016040880161249f565b60c088015160e089015160608901359061096360a08b0160808c0161249f565b61097360c08c0160a08d016124c1565b61098360e08d0160c08e016124c1565b6109946101008e0160e08f016124c1565b6109a26101008f018f612433565b6040518e63ffffffff1660e01b81526004016109ca9d9c9b9a99989796959493929190612530565b600060405180830381600087803b1580156109e457600080fd5b505af11580156109f8573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610a2c9190612693565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610a5f57610650838383610efd565b610650828261107f565b600082808203610aa5576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610ab46001856123e0565b818110610ac357610ac36127a6565b9050602002810190610ad591906127d5565b610ae690608081019060600161249f565b90506000610af3826111a9565b905073ffffffffffffffffffffffffffffffffffffffff8216610b1d57610b1a34826123e0565b90505b6000610b298888611262565b9050610b35888861136e565b610b428a898989856113db565b600082610b4e856111a9565b610b5891906123e0565b905089811015610b9e576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161063b565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610bf9576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c46576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610cb7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cdb919061241a565b9050610ce98286868661178d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610d59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7d919061241a565b610d8791906123e0565b14610dbe576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610de657505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e33576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610ea8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ecc919061241a565b10156106505761065083837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611869565b73ffffffffffffffffffffffffffffffffffffffff8316610f4a576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f97576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611004573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611028919061241a565b90508082111561106e576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161063b565b611079848484611959565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166110cc576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561110f576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161063b565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611169576040519150601f19603f3d011682016040523d82523d6000602084013e61116e565b606091505b5050905080610650576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82161561125a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611231573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611255919061241a565b61125c565b475b92915050565b60608160008167ffffffffffffffff81111561128057611280612076565b6040519080825280602002602001820160405280156112a9578160200160208202803683370190505b5090506000805b83811015611363578686828181106112ca576112ca6127a6565b90506020028101906112dc91906127d5565b6112ed90608081019060600161249f565b91506112f8826111a9565b83828151811061130a5761130a6127a6565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661135b5734838281518110611343576113436127a6565b6020026020010181815161135791906123e0565b9052505b6001016112b0565b509095945050505050565b60005b81811015610650573683838381811061138c5761138c6127a6565b905060200281019061139e91906127d5565b90506113b060e0820160c08301612813565b156113d2576113d26113c8606083016040840161249f565b82608001356104d5565b50600101611371565b8383838382600181146116a857600085856113f76001856123e0565b818110611406576114066127a6565b905060200281019061141891906127d5565b61142990608081019060600161249f565b9050600089815b818110156115d457368d8d8381811061144b5761144b6127a6565b905060200281019061145d91906127d5565b905061148c611472606083016040840161249f565b73ffffffffffffffffffffffffffffffffffffffff161590565b806114ef57506114ef6114a5604083016020840161249f565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561150657506115066114a5602083018361249f565b801561158b575061158b61151d60a0830183612433565b61152c91600491600091612830565b6115359161285a565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6115c1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115cb8f826119af565b50600101611430565b505060005b6115e46001856123e0565b8110156116a05760008888838181106115ff576115ff6127a6565b905060200281019061161191906127d5565b61162290608081019060600161249f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461169757858281518110611669576116696127a6565b602002602001015161167a826111a9565b61168491906123e0565b9250821561169757611697818885610a38565b506001016115d9565b505050611781565b8760005b8181101561177e57368b8b838181106116c7576116c76127a6565b90506020028101906116d991906127d5565b90506116ee611472606083016040840161249f565b8061170757506117076114a5604083016020840161249f565b801561171e575061171e6114a5602083018361249f565b8015611735575061173561151d60a0830183612433565b61176b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117758d826119af565b506001016116ac565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526110799085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c8d565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526118f58482611d9c565b6110795760405173ffffffffffffffffffffffffffffffffffffffff841660248201526000604482015261194f9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016117e7565b6110798482611c8d565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106509084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016117e7565b6119c56119bf602083018361249f565b3b151590565b6119fb576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611a3b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611a50611472606085016040860161249f565b611a5b576000611a61565b82608001355b90506000611a7d611a78606086016040870161249f565b6111a9565b90506000611a94611a78608087016060880161249f565b905082600003611acb57611acb611ab1606087016040880161249f565b611ac1604088016020890161249f565b8760800135610dc6565b8460800135821015611b16576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161063b565b600080611b26602088018861249f565b73ffffffffffffffffffffffffffffffffffffffff1685611b4a60a08a018a612433565b604051611b589291906128a2565b60006040518083038185875af1925050503d8060008114611b95576040519150601f19603f3d011682016040523d82523d6000602084013e611b9a565b606091505b509150915081611bad57611bad81611e5d565b6000611bc2611a7860808a0160608b0161249f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611bf360208b018b61249f565b611c0360608c0160408d0161249f565b611c1360808d0160608e0161249f565b8c60800135898711611c255786611c2f565b611c2f8a886123e0565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611cef826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e679092919063ffffffff16565b9050805160001480611d10575080806020019051810190611d1091906128b2565b610650576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161063b565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611dc691906128cf565b6000604051808303816000865af19150503d8060008114611e03576040519150601f19603f3d011682016040523d82523d6000602084013e611e08565b606091505b5091509150818015611e32575080511580611e32575080806020019051810190611e3291906128b2565b8015611e54575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611e768484600085611e7e565b949350505050565b606082471015611f10576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161063b565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f3991906128cf565b60006040518083038185875af1925050503d8060008114611f76576040519150601f19603f3d011682016040523d82523d6000602084013e611f7b565b606091505b5091509150611f8c87838387611f97565b979650505050505050565b6060831561202d5782516000036120265773ffffffffffffffffffffffffffffffffffffffff85163b612026576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161063b565b5081611e76565b611e7683838151156120425781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063b91906128e1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120c9576120c9612076565b60405290565b600082601f8301126120e057600080fd5b813567ffffffffffffffff808211156120fb576120fb612076565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561214157612141612076565b8160405283815286602085880101111561215a57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461219e57600080fd5b919050565b80151581146121b157600080fd5b50565b803561219e816121a3565b600061014082840312156121d257600080fd5b6121da6120a5565b905081358152602082013567ffffffffffffffff808211156121fb57600080fd5b612207858386016120cf565b6020840152604084013591508082111561222057600080fd5b5061222d848285016120cf565b60408301525061223f6060830161217a565b60608201526122506080830161217a565b608082015261226160a0830161217a565b60a082015260c082013560c082015260e082013560e08201526101006122888184016121b4565b9082015261012061229a8382016121b4565b9082015292915050565b600061012082840312156122b757600080fd5b50919050565b600080604083850312156122d057600080fd5b823567ffffffffffffffff808211156122e857600080fd5b6122f4868387016121bf565b9350602085013591508082111561230a57600080fd5b50612317858286016122a4565b9150509250929050565b6000806000806060858703121561233757600080fd5b843567ffffffffffffffff8082111561234f57600080fd5b61235b888389016121bf565b9550602087013591508082111561237157600080fd5b818701915087601f83011261238557600080fd5b81358181111561239457600080fd5b8860208260051b85010111156123a957600080fd5b6020830195508094505060408701359150808211156123c757600080fd5b506123d4878288016122a4565b91505092959194509250565b8181038181111561125c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561242c57600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261246857600080fd5b83018035915067ffffffffffffffff82111561248357600080fd5b60200191503681900382131561249857600080fd5b9250929050565b6000602082840312156124b157600080fd5b6124ba8261217a565b9392505050565b6000602082840312156124d357600080fd5b813563ffffffff811681146124ba57600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8e16815273ffffffffffffffffffffffffffffffffffffffff8d16602082015273ffffffffffffffffffffffffffffffffffffffff8c16604082015273ffffffffffffffffffffffffffffffffffffffff8b1660608201528960808201528860a08201528760c082015273ffffffffffffffffffffffffffffffffffffffff871660e082015263ffffffff861661010082015263ffffffff85166101208201526125f861014082018563ffffffff169052565b6101806101608201526000612612610180830184866124e7565b9f9e505050505050505050505050505050565b60005b83811015612640578181015183820152602001612628565b50506000910152565b60008151808452612661816020860160208601612625565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526126bc610160850183612649565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526126f78382612649565b9250506060850151612721608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127948187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261280957600080fd5b9190910192915050565b60006020828403121561282557600080fd5b81356124ba816121a3565b6000808585111561284057600080fd5b8386111561284d57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561289a5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156128c457600080fd5b81516124ba816121a3565b60008251612809818460208701612625565b6020815260006124ba602083018461264956fea2646970667358221220bc18d276e6ef4ec6060cd892d8f43482bbc3b881e2030cf1ec534cb403de54b364736f6c63430008110033";
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
