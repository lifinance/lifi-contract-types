import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GenericSwapFacet, GenericSwapFacetInterface } from "../GenericSwapFacet";
declare type GenericSwapFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GenericSwapFacet__factory extends ContractFactory {
    constructor(...args: GenericSwapFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GenericSwapFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GenericSwapFacet;
    connect(signer: Signer): GenericSwapFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611f1b806100206000396000f3fe60806040526004361061001e5760003560e01c80634630a0d814610023575b600080fd5b610036610031366004611a77565b610038565b005b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100b3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181558460006100c43447611b68565b905073ffffffffffffffffffffffffffffffffffffffff8716610113576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006101228d8888888c61024b565b905060008686610133600182611b68565b81811061014257610142611ba2565b90506020028101906101549190611bd1565b610165906080810190606001611c0f565b9050610172818a84610393565b8d7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378e8e8e8e8e8d8d60008181106101ac576101ac611ba2565b90506020028101906101be9190611bd1565b6101cf906060810190604001611c0f565b888f8f60008181106101e3576101e3611ba2565b90506020028101906101f59190611bd1565b608001358b60405161020f99989796959493929190611c7c565b60405180910390a25047905081811115610238576102386000846102338585611b68565b610393565b5050600090915550505050505050505050565b600082808203610287576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610296600185611b68565b8181106102a5576102a5611ba2565b90506020028101906102b79190611bd1565b6102c8906080810190606001611c0f565b905060006102d5826103c9565b905073ffffffffffffffffffffffffffffffffffffffff82166102ff576102fc3482611b68565b90505b600061030b8888610482565b9050610317888861058e565b6103248a898989856105fb565b600082610330856103c9565b61033a9190611b68565b905089811015610385576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316156103bf576103ba8383836109ad565b505050565b6103ba8282610b2f565b600073ffffffffffffffffffffffffffffffffffffffff82161561047a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610451573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104759190611ce7565b61047c565b475b92915050565b60608160008167ffffffffffffffff8111156104a0576104a0611d00565b6040519080825280602002602001820160405280156104c9578160200160208202803683370190505b5090506000805b83811015610583578686828181106104ea576104ea611ba2565b90506020028101906104fc9190611bd1565b61050d906080810190606001611c0f565b9150610518826103c9565b83828151811061052a5761052a611ba2565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661057b573483828151811061056357610563611ba2565b602002602001018181516105779190611b68565b9052505b6001016104d0565b509095945050505050565b60005b818110156103ba57368383838181106105ac576105ac611ba2565b90506020028101906105be9190611bd1565b90506105d060e0820160c08301611d3d565b156105f2576105f26105e86060830160408401611c0f565b8260800135610c59565b50600101610591565b8383838382600181146108c85760008585610617600185611b68565b81811061062657610626611ba2565b90506020028101906106389190611bd1565b610649906080810190606001611c0f565b9050600089815b818110156107f457368d8d8381811061066b5761066b611ba2565b905060200281019061067d9190611bd1565b90506106ac6106926060830160408401611c0f565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061070f575061070f6106c56040830160208401611c0f565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561072657506107266106c56020830183611c0f565b80156107ab57506107ab61073d60a0830183611d5a565b61074c91600491600091611dbf565b61075591611de9565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6107e1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107eb8f82610dcf565b50600101610650565b505060005b610804600185611b68565b8110156108c057600088888381811061081f5761081f611ba2565b90506020028101906108319190611bd1565b610842906080810190606001611c0f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146108b75785828151811061088957610889611ba2565b602002602001015161089a826103c9565b6108a49190611b68565b925082156108b7576108b7818885610393565b506001016107f9565b5050506109a1565b8760005b8181101561099e57368b8b838181106108e7576108e7611ba2565b90506020028101906108f99190611bd1565b905061090e6106926060830160408401611c0f565b8061092757506109276106c56040830160208401611c0f565b801561093e575061093e6106c56020830183611c0f565b8015610955575061095561073d60a0830183611d5a565b61098b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109958d82610dcf565b506001016108cc565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166109fa576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a47576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610ab4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad89190611ce7565b905080821115610b1e576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161037c565b610b298484846110ad565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610b7c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610bbf576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161037c565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610c19576040519150601f19603f3d011682016040523d82523d6000602084013e610c1e565b606091505b50509050806103ba576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600003610c93576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610cec5780341015610ce8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610d59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7d9190611ce7565b905081811015610dc3576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161037c565b6103ba83333085611181565b610de5610ddf6020830183611c0f565b3b151590565b610e1b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003610e5b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610e706106926060850160408601611c0f565b610e7b576000610e81565b82608001355b90506000610e9d610e986060860160408701611c0f565b6103c9565b90506000610eb4610e986080870160608801611c0f565b905082600003610eeb57610eeb610ed16060870160408801611c0f565b610ee16040880160208901611c0f565b876080013561139b565b8460800135821015610f36576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161037c565b600080610f466020880188611c0f565b73ffffffffffffffffffffffffffffffffffffffff1685610f6a60a08a018a611d5a565b604051610f78929190611e31565b60006040518083038185875af1925050503d8060008114610fb5576040519150601f19603f3d011682016040523d82523d6000602084013e610fba565b606091505b509150915081610fcd57610fcd816114d2565b6000610fe2610e9860808a0160608b01611c0f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961101360208b018b611c0f565b61102360608c0160408d01611c0f565b61103360808d0160608e01611c0f565b8c60800135898711611045578661104f565b61104f8a88611b68565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526103ba9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526114dc565b73ffffffffffffffffffffffffffffffffffffffff84166111ce576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661121b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561128c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b09190611ce7565b90506112be828686866115eb565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561132e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113529190611ce7565b61135c9190611b68565b14611393576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166113bb57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611408576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa15801561147d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a19190611ce7565b10156103ba576103ba83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611649565b8051602082018181fd5b600061153e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166117399092919063ffffffff16565b905080516000148061155f57508080602001905181019061155f9190611e41565b6103ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161037c565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610b299085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016110ff565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526116d58482611750565b610b295760405173ffffffffffffffffffffffffffffffffffffffff841660248201526000604482015261172f9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016110ff565b610b2984826114dc565b60606117488484600085611811565b949350505050565b60008060008473ffffffffffffffffffffffffffffffffffffffff168460405161177a9190611e82565b6000604051808303816000865af19150503d80600081146117b7576040519150601f19603f3d011682016040523d82523d6000602084013e6117bc565b606091505b50915091508180156117e65750805115806117e65750808060200190518101906117e69190611e41565b8015611808575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b6060824710156118a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161037c565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516118cc9190611e82565b60006040518083038185875af1925050503d8060008114611909576040519150601f19603f3d011682016040523d82523d6000602084013e61190e565b606091505b509150915061191f8783838761192a565b979650505050505050565b606083156119c05782516000036119b95773ffffffffffffffffffffffffffffffffffffffff85163b6119b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161037c565b5081611748565b61174883838151156119d55781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037c9190611e94565b60008083601f840112611a1b57600080fd5b50813567ffffffffffffffff811115611a3357600080fd5b602083019150836020828501011115611a4b57600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114611a7457600080fd5b50565b600080600080600080600080600060c08a8c031215611a9557600080fd5b8935985060208a013567ffffffffffffffff80821115611ab457600080fd5b611ac08d838e01611a09565b909a50985060408c0135915080821115611ad957600080fd5b611ae58d838e01611a09565b909850965060608c01359150611afa82611a52565b90945060808b0135935060a08b01359080821115611b1757600080fd5b818c0191508c601f830112611b2b57600080fd5b813581811115611b3a57600080fd5b8d60208260051b8501011115611b4f57600080fd5b6020830194508093505050509295985092959850929598565b8181038181111561047c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611c0557600080fd5b9190910192915050565b600060208284031215611c2157600080fd5b8135611c2c81611a52565b9392505050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081526000611c9060e083018b8d611c33565b8281036020840152611ca3818a8c611c33565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b600060208284031215611cf957600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b8015158114611a7457600080fd5b600060208284031215611d4f57600080fd5b8135611c2c81611d2f565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611d8f57600080fd5b83018035915067ffffffffffffffff821115611daa57600080fd5b602001915036819003821315611a4b57600080fd5b60008085851115611dcf57600080fd5b83861115611ddc57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611e295780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215611e5357600080fd5b8151611c2c81611d2f565b60005b83811015611e79578181015183820152602001611e61565b50506000910152565b60008251611c05818460208701611e5e565b6020815260008251806020840152611eb3816040850160208701611e5e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea26469706673582212207295d4ba98da808c40349f289ac8310a56cb6114a8dbd0c5f2d542cf80ee2e4564736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "swapTokensGeneric";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_integrator";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_referrer";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
    static createInterface(): GenericSwapFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GenericSwapFacet;
}
export {};
