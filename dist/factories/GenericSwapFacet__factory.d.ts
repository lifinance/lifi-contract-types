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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50611ebd8061001c5f395ff3fe60806040526004361061001d575f3560e01c80634630a0d814610021575b5f5ffd5b61003461002f366004611a2b565b610036565b005b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100b1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155845f6100c13447611b26565b905073ffffffffffffffffffffffffffffffffffffffff8716610110576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61011e8d8888888c610242565b90505f868661012e600182611b26565b81811061013d5761013d611b5e565b905060200281019061014f9190611b8b565b610160906080810190606001611bc7565b905061016d818a84610385565b8d7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378e8e8e8e8e8d8d5f8181106101a6576101a6611b5e565b90506020028101906101b89190611b8b565b6101c9906060810190604001611bc7565b888f8f5f8181106101dc576101dc611b5e565b90506020028101906101ee9190611b8b565b608001358b60405161020899989796959493929190611c30565b60405180910390a25047905081811115610230576102305f8461022b8585611b26565b610385565b50505f90915550505050505050505050565b5f8280820361027d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561028b600185611b26565b81811061029a5761029a611b5e565b90506020028101906102ac9190611b8b565b6102bd906080810190606001611bc7565b90505f6102c9826103bb565b905073ffffffffffffffffffffffffffffffffffffffff82166102f3576102f03482611b26565b90505b5f6102fe8888610471565b905061030a888861057b565b6103178a898989856105e7565b5f82610322856103bb565b61032c9190611b26565b905089811015610377576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316156103b1576103ac838383610992565b505050565b6103ac8282610b11565b5f73ffffffffffffffffffffffffffffffffffffffff821615610469576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610440573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104649190611c9a565b61046b565b475b92915050565b6060815f8167ffffffffffffffff81111561048e5761048e611cb1565b6040519080825280602002602001820160405280156104b7578160200160208202803683370190505b5090505f805b83811015610570578686828181106104d7576104d7611b5e565b90506020028101906104e99190611b8b565b6104fa906080810190606001611bc7565b9150610505826103bb565b83828151811061051757610517611b5e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610568573483828151811061055057610550611b5e565b602002602001018181516105649190611b26565b9052505b6001016104bd565b509095945050505050565b5f5b818110156103ac573683838381811061059857610598611b5e565b90506020028101906105aa9190611b8b565b90506105bc60e0820160c08301611ceb565b156105de576105de6105d46060830160408401611bc7565b8260800135610c37565b5060010161057d565b8383838382600181146108ae575f8585610602600185611b26565b81811061061157610611611b5e565b90506020028101906106239190611b8b565b610634906080810190606001611bc7565b90505f89815b818110156107db57368d8d8381811061065557610655611b5e565b90506020028101906106679190611b8b565b905061069661067c6060830160408401611bc7565b73ffffffffffffffffffffffffffffffffffffffff161590565b806106f857506106f86106af6040830160208401611bc7565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561070f575061070f6106af6020830183611bc7565b8015610792575061079261072660a0830183611d06565b610734916004915f91611d67565b61073d91611d8e565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6107c8576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107d28f82610da9565b5060010161063a565b505f90505b6107eb600185611b26565b8110156108a6575f88888381811061080557610805611b5e565b90506020028101906108179190611b8b565b610828906080810190606001611bc7565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461089d5785828151811061086f5761086f611b5e565b6020026020010151610880826103bb565b61088a9190611b26565b9250821561089d5761089d818885610385565b506001016107e0565b505050610986565b875f5b8181101561098357368b8b838181106108cc576108cc611b5e565b90506020028101906108de9190611b8b565b90506108f361067c6060830160408401611bc7565b8061090c575061090c6106af6040830160208401611bc7565b801561092357506109236106af6020830183611bc7565b801561093a575061093a61072660a0830183611d06565b610970576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61097a8d82610da9565b506001016108b1565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166109df576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a2c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610a96573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610aba9190611c9a565b905080821115610b00576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161036e565b610b0b84848461107c565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610b5e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610ba1576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161036e565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610bf7576040519150601f19603f3d011682016040523d82523d5f602084013e610bfc565b606091505b50509050806103ac576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805f03610c70576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610cc95780341015610cc5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610d33573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d579190611c9a565b905081811015610d9d576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161036e565b6103ac83333085611150565b610dbf610db96020830183611bc7565b3b151590565b610df5576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610e34576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610e4861067c6060850160408601611bc7565b610e52575f610e58565b82608001355b90505f610e73610e6e6060860160408701611bc7565b6103bb565b90505f610e89610e6e6080870160608801611bc7565b9050825f03610ebf57610ebf610ea56060870160408801611bc7565b610eb56040880160208901611bc7565b8760800135611365565b8460800135821015610f0a576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161036e565b5f80610f196020880188611bc7565b73ffffffffffffffffffffffffffffffffffffffff1685610f3d60a08a018a611d06565b604051610f4b929190611df4565b5f6040518083038185875af1925050503d805f8114610f85576040519150601f19603f3d011682016040523d82523d5f602084013e610f8a565b606091505b509150915081610f9d57610f9d8161149a565b5f610fb1610e6e60808a0160608b01611bc7565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889610fe260208b018b611bc7565b610ff260608c0160408d01611bc7565b61100260808d0160608e01611bc7565b8c60800135898711611014578661101e565b61101e8a88611b26565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526103ac9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526114a4565b73ffffffffffffffffffffffffffffffffffffffff841661119d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111ea576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa158015611258573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061127c9190611c9a565b905061128a828686866115b1565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156112f8573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061131c9190611c9a565b6113269190611b26565b1461135d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661138557505050565b73ffffffffffffffffffffffffffffffffffffffff82166113d2576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611445573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114699190611c9a565b10156103ac576103ac83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61160f565b8051602082018181fd5b5f611505826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166116fe9092919063ffffffff16565b905080515f14806115255750808060200190518101906115259190611e03565b6103ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161036e565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610b0b9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016110ce565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905261169b8482611714565b610b0b5760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f60448201526116f49085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016110ce565b610b0b84826114a4565b606061170c84845f856117cf565b949350505050565b5f5f5f8473ffffffffffffffffffffffffffffffffffffffff168460405161173c9190611e1e565b5f604051808303815f865af19150503d805f8114611775576040519150601f19603f3d011682016040523d82523d5f602084013e61177a565b606091505b50915091508180156117a45750805115806117a45750808060200190518101906117a49190611e03565b80156117c6575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b606082471015611861576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161036e565b5f5f8673ffffffffffffffffffffffffffffffffffffffff1685876040516118899190611e1e565b5f6040518083038185875af1925050503d805f81146118c3576040519150601f19603f3d011682016040523d82523d5f602084013e6118c8565b606091505b50915091506118d9878383876118e4565b979650505050505050565b606083156119795782515f036119725773ffffffffffffffffffffffffffffffffffffffff85163b611972576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161036e565b508161170c565b61170c838381511561198e5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036e9190611e34565b5f5f83601f8401126119d2575f5ffd5b50813567ffffffffffffffff8111156119e9575f5ffd5b602083019150836020828501011115611a00575f5ffd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114611a28575f5ffd5b50565b5f5f5f5f5f5f5f5f5f60c08a8c031215611a43575f5ffd5b8935985060208a013567ffffffffffffffff811115611a60575f5ffd5b611a6c8c828d016119c2565b90995097505060408a013567ffffffffffffffff811115611a8b575f5ffd5b611a978c828d016119c2565b90975095505060608a0135611aab81611a07565b935060808a0135925060a08a013567ffffffffffffffff811115611acd575f5ffd5b8a015f80601f83018e13611adf575f5ffd5b50813567ffffffffffffffff811115611af6575f5ffd5b6020830191508d60208260051b8501011115611b10575f5ffd5b8194508093505050509295985092959850929598565b8181038181111561046b577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611bbd575f5ffd5b9190910192915050565b5f60208284031215611bd7575f5ffd5b8135611be281611a07565b9392505050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081525f611c4360e083018b8d611be9565b8281036020840152611c56818a8c611be9565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b5f60208284031215611caa575f5ffd5b5051919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b8015158114611a28575f5ffd5b5f60208284031215611cfb575f5ffd5b8135611be281611cde565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611d39575f5ffd5b83018035915067ffffffffffffffff821115611d53575f5ffd5b602001915036819003821315611a00575f5ffd5b5f5f85851115611d75575f5ffd5b83861115611d81575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611ded577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611e13575f5ffd5b8151611be281611cde565b5f82518060208501845e5f920191825250919050565b602081525f82518060208401528060208501604085015e5f6040828501015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150509291505056fea26469706673582212202ba5d1765b4544c0f6bb3fbe610097610fd5c99bacd85048fab05cd9edd8f26864736f6c634300081d0033";
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
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
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
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
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
