import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PolygonBridgeFacet, PolygonBridgeFacetInterface } from "../PolygonBridgeFacet";
declare type PolygonBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PolygonBridgeFacet__factory extends ContractFactory {
    constructor(...args: PolygonBridgeFacetConstructorParams);
    deploy(_rootChainManager: PromiseOrValue<string>, _erc20Predicate: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PolygonBridgeFacet>;
    getDeployTransaction(_rootChainManager: PromiseOrValue<string>, _erc20Predicate: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PolygonBridgeFacet;
    connect(signer: Signer): PolygonBridgeFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b506040516200277d3803806200277d833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a0516126a5620000d860003960006107c60152600081816106a00152818161074d015261087e01526126a56000f3fe6080604052600436106100295760003560e01c8063af62c7d61461002e578063b4f3758114610043575b600080fd5b61004161003c366004612198565b610056565b005b6100416100513660046121cd565b61027d565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612267565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024787608001518860c001516104a8565b61025087610628565b5047915050818111156102725761027260008461026d8585612267565b610923565b505060009091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103093447612267565b905085806101000151610348576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610386576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103a98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361041e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047089600001518a60c001518a8a33610954565b60c08a015261047e89610628565b50479150508181111561049b5761049b60008461026d8585612267565b5050600090915550505050565b806000036104e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053b5780341015610537576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cc91906122a1565b905081811015610617576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61062383333085610a97565b505050565b600061064c826080015173ffffffffffffffffffffffffffffffffffffffff161590565b156107035760c082015160a08301516040517f4faa8a2600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f000000000000000000000000000000000000000000000000000000000000000090911691634faa8a26916024016000604051808303818588803b1580156106e557600080fd5b505af11580156106f9573d6000803e3d6000fd5b50505050506108e8565b60808201516040517fea60c7c400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f00000000000000000000000000000000000000000000000000000000000000009091169063ea60c7c490602401602060405180830381865afa158015610796573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ba91906122ba565b90506107ef82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610cb1565b60008260c0015160405160200161080891815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905260a085015160808601517fe3dec8fb00000000000000000000000000000000000000000000000000000000845291935073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169263e3dec8fb926108b49291869060040161234c565b600060405180830381600087803b1580156108ce57600080fd5b505af11580156108e2573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516109179190612385565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561094a57610623838383610de8565b6106238282610f6a565b600082808203610990576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561099f600185612267565b8181106109ae576109ae612498565b90506020028101906109c091906124c7565b6109d1906080810190606001612505565b905060006109de82611094565b905073ffffffffffffffffffffffffffffffffffffffff8216610a0857610a053482612267565b90505b6000610a14888861114d565b9050610a208888611259565b610a2d8a898989856112c6565b600082610a3985611094565b610a439190612267565b905089811015610a89576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161060e565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610ae4576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b31576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610ba2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc691906122a1565b9050610bd482868686611678565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610c44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6891906122a1565b610c729190612267565b14610ca9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610cd157505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d1e576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db791906122a1565b10156106235761062383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611754565b73ffffffffffffffffffffffffffffffffffffffff8316610e35576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e82576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610eef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1391906122a1565b905080821115610f59576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161060e565b610f64848484611844565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610fb7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610ffa576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161060e565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611054576040519150601f19603f3d011682016040523d82523d6000602084013e611059565b606091505b5050905080610623576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611145576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561111c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061114091906122a1565b611147565b475b92915050565b60608160008167ffffffffffffffff81111561116b5761116b611f61565b604051908082528060200260200182016040528015611194578160200160208202803683370190505b5090506000805b8381101561124e578686828181106111b5576111b5612498565b90506020028101906111c791906124c7565b6111d8906080810190606001612505565b91506111e382611094565b8382815181106111f5576111f5612498565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611246573483828151811061122e5761122e612498565b602002602001018181516112429190612267565b9052505b60010161119b565b509095945050505050565b60005b81811015610623573683838381811061127757611277612498565b905060200281019061128991906124c7565b905061129b60e0820160c08301612522565b156112bd576112bd6112b36060830160408401612505565b82608001356104a8565b5060010161125c565b83838383826001811461159357600085856112e2600185612267565b8181106112f1576112f1612498565b905060200281019061130391906124c7565b611314906080810190606001612505565b9050600089815b818110156114bf57368d8d8381811061133657611336612498565b905060200281019061134891906124c7565b905061137761135d6060830160408401612505565b73ffffffffffffffffffffffffffffffffffffffff161590565b806113da57506113da6113906040830160208401612505565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156113f157506113f16113906020830183612505565b8015611476575061147661140860a083018361253f565b611417916004916000916125ab565b611420916125d5565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6114ac576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114b68f8261189a565b5060010161131b565b505060005b6114cf600185612267565b81101561158b5760008888838181106114ea576114ea612498565b90506020028101906114fc91906124c7565b61150d906080810190606001612505565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146115825785828151811061155457611554612498565b602002602001015161156582611094565b61156f9190612267565b9250821561158257611582818885610923565b506001016114c4565b50505061166c565b8760005b8181101561166957368b8b838181106115b2576115b2612498565b90506020028101906115c491906124c7565b90506115d961135d6060830160408401612505565b806115f257506115f26113906040830160208401612505565b801561160957506116096113906020830183612505565b8015611620575061162061140860a083018361253f565b611656576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116608d8261189a565b50600101611597565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610f649085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b78565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526117e08482611c87565b610f645760405173ffffffffffffffffffffffffffffffffffffffff841660248201526000604482015261183a9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016116d2565b610f648482611b78565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106239084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016116d2565b6118b06118aa6020830183612505565b3b151590565b6118e6576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611926576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061193b61135d6060850160408601612505565b61194657600061194c565b82608001355b905060006119686119636060860160408701612505565b611094565b9050600061197f6119636080870160608801612505565b9050826000036119b6576119b661199c6060870160408801612505565b6119ac6040880160208901612505565b8760800135610cb1565b8460800135821015611a01576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161060e565b600080611a116020880188612505565b73ffffffffffffffffffffffffffffffffffffffff1685611a3560a08a018a61253f565b604051611a4392919061261d565b60006040518083038185875af1925050503d8060008114611a80576040519150601f19603f3d011682016040523d82523d6000602084013e611a85565b606091505b509150915081611a9857611a9881611d48565b6000611aad61196360808a0160608b01612505565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611ade60208b018b612505565b611aee60608c0160408d01612505565b611afe60808d0160608e01612505565b8c60800135898711611b105786611b1a565b611b1a8a88612267565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611bda826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d529092919063ffffffff16565b9050805160001480611bfb575080806020019051810190611bfb919061262d565b610623576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161060e565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611cb1919061264a565b6000604051808303816000865af19150503d8060008114611cee576040519150601f19603f3d011682016040523d82523d6000602084013e611cf3565b606091505b5091509150818015611d1d575080511580611d1d575080806020019051810190611d1d919061262d565b8015611d3f575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611d618484600085611d69565b949350505050565b606082471015611dfb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161060e565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e24919061264a565b60006040518083038185875af1925050503d8060008114611e61576040519150601f19603f3d011682016040523d82523d6000602084013e611e66565b606091505b5091509150611e7787838387611e82565b979650505050505050565b60608315611f18578251600003611f115773ffffffffffffffffffffffffffffffffffffffff85163b611f11576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161060e565b5081611d61565b611d618383815115611f2d5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060e919061265c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611fb457611fb4611f61565b60405290565b600082601f830112611fcb57600080fd5b813567ffffffffffffffff80821115611fe657611fe6611f61565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561202c5761202c611f61565b8160405283815286602085880101111561204557600080fd5b836020870160208301376000602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff8116811461208757600080fd5b50565b803561209581612065565b919050565b801515811461208757600080fd5b80356120958161209a565b600061014082840312156120c657600080fd5b6120ce611f90565b905081358152602082013567ffffffffffffffff808211156120ef57600080fd5b6120fb85838601611fba565b6020840152604084013591508082111561211457600080fd5b5061212184828501611fba565b6040830152506121336060830161208a565b60608201526121446080830161208a565b608082015261215560a0830161208a565b60a082015260c082013560c082015260e082013560e082015261010061217c8184016120a8565b9082015261012061218e8382016120a8565b9082015292915050565b6000602082840312156121aa57600080fd5b813567ffffffffffffffff8111156121c157600080fd5b611d61848285016120b3565b6000806000604084860312156121e257600080fd5b833567ffffffffffffffff808211156121fa57600080fd5b612206878388016120b3565b9450602086013591508082111561221c57600080fd5b818601915086601f83011261223057600080fd5b81358181111561223f57600080fd5b8760208260051b850101111561225457600080fd5b6020830194508093505050509250925092565b81810381811115611147577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000602082840312156122b357600080fd5b5051919050565b6000602082840312156122cc57600080fd5b81516122d781612065565b9392505050565b60005b838110156122f95781810151838201526020016122e1565b50506000910152565b6000815180845261231a8160208601602086016122de565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600073ffffffffffffffffffffffffffffffffffffffff808616835280851660208401525060606040830152611d3f6060830184612302565b6020815281516020820152600060208301516101408060408501526123ae610160850183612302565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526123e98382612302565b9250506060850151612413608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206124868187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126124fb57600080fd5b9190910192915050565b60006020828403121561251757600080fd5b81356122d781612065565b60006020828403121561253457600080fd5b81356122d78161209a565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261257457600080fd5b83018035915067ffffffffffffffff82111561258f57600080fd5b6020019150368190038213156125a457600080fd5b9250929050565b600080858511156125bb57600080fd5b838611156125c857600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126155780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561263f57600080fd5b81516122d78161209a565b600082516124fb8184602087016122de565b6020815260006122d7602083018461230256fea26469706673582212200b2ab1122ff863724f39b291526b752b93333186270ea0031267fd969354a75964736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_rootChainManager";
            readonly type: "address";
            readonly internalType: "contract IRootChainManager";
        }, {
            readonly name: "_erc20Predicate";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaPolygonBridge";
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
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaPolygonBridge";
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
    static createInterface(): PolygonBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PolygonBridgeFacet;
}
export {};
