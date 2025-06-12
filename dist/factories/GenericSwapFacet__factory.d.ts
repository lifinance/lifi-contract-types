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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506114c08061001c5f395ff3fe60806040526004361061001d575f3560e01c80634630a0d814610021575b5f5ffd5b61003461002f3660046110bb565b610036565b005b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100b1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155845f6100c134476111b6565b905073ffffffffffffffffffffffffffffffffffffffff8716610110576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61011e8d8888888c610242565b90505f868661012e6001826111b6565b81811061013d5761013d6111ee565b905060200281019061014f919061121b565b610160906080810190606001611257565b905061016d818a8461038e565b8d7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378e8e8e8e8e8d8d5f8181106101a6576101a66111ee565b90506020028101906101b8919061121b565b6101c9906060810190604001611257565b888f8f5f8181106101dc576101dc6111ee565b90506020028101906101ee919061121b565b608001358b604051610208999897969594939291906112c0565b60405180910390a25047905081811115610230576102305f8461022b85856111b6565b61038e565b50505f90915550505050505050505050565b5f8280820361027d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561028b6001856111b6565b81811061029a5761029a6111ee565b90506020028101906102ac919061121b565b6102bd906080810190606001611257565b90505f6102c9826103c3565b905073ffffffffffffffffffffffffffffffffffffffff82166102f3576102f034826111b6565b90505b5f6102fe888861040d565b905061030a8888610517565b6103158a8989610583565b5f82610320856103c3565b61032a91906111b6565b905089811015610374576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b6103808989898561072e565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166103b8576103b382826108f1565b505050565b6103b3838383610962565b5f73ffffffffffffffffffffffffffffffffffffffff8216156104055761040073ffffffffffffffffffffffffffffffffffffffff8316306109d0565b610407565b475b92915050565b6060815f8167ffffffffffffffff81111561042a5761042a61132a565b604051908082528060200260200182016040528015610453578160200160208202803683370190505b5090505f805b8381101561050c57868682818110610473576104736111ee565b9050602002810190610485919061121b565b610496906080810190606001611257565b91506104a1826103c3565b8382815181106104b3576104b36111ee565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661050457348382815181106104ec576104ec6111ee565b6020026020010181815161050091906111b6565b9052505b600101610459565b509095945050505050565b5f5b818110156103b35736838383818110610534576105346111ee565b9050602002810190610546919061121b565b905061055860e0820160c08301611357565b1561057a5761057a6105706060830160408401611257565b8260800135610a03565b50600101610519565b805f5b8181101561072757368484838181106105a1576105a16111ee565b90506020028101906105b3919061121b565b90506105e26105c86060830160408401611257565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061064457506106446105fb6040830160208401611257565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561065b575061065b6105fb6020830183611257565b80156106de57506106de61067260a0830183611376565b610680916004915f916113d7565b610689916113fe565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610714576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61071e8682610ab3565b50600101610586565b5050505050565b825f858261073d6001826111b6565b81811061074c5761074c6111ee565b905060200281019061075e919061121b565b61076f906080810190606001611257565b905081600114610845575f805b6107876001856111b6565b811015610842575f8888838181106107a1576107a16111ee565b90506020028101906107b3919061121b565b6107c4906080810190606001611257565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146108395785828151811061080b5761080b6111ee565b602002602001015161081c826103c3565b61082691906111b6565b925082156108395761083981888561038e565b5060010161077c565b50505b5f5b828110156108e8575f878783818110610862576108626111ee565b9050602002810190610874919061121b565b610885906060810190604001611257565b90505f610891826103c3565b90505f811180156108ce57508373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156108de576108de82888361038e565b5050600101610847565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff821661093e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61095e73ffffffffffffffffffffffffffffffffffffffff831682610d23565b5050565b73ffffffffffffffffffffffffffffffffffffffff82166109af576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103b373ffffffffffffffffffffffffffffffffffffffff84168383610d3c565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f03610a3c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a91578034101561095e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61095e73ffffffffffffffffffffffffffffffffffffffff8316333084610d85565b610ac8610ac36020830183611257565b610ddd565b610afe576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610b3d576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610b516105c86060850160408601611257565b610b5b575f610b61565b82608001355b90505f610b7c610b776080860160608701611257565b6103c3565b9050815f03610bb257610bb2610b986060860160408701611257565b610ba86040870160208801611257565b8660800135610e71565b5f80610bc16020870187611257565b73ffffffffffffffffffffffffffffffffffffffff1684610be560a0890189611376565b604051610bf3929190611464565b5f6040518083038185875af1925050503d805f8114610c2d576040519150601f19603f3d011682016040523d82523d5f602084013e610c32565b606091505b509150915081610c4557610c4581610e9d565b5f610c59610b776080890160608a01611257565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888610c8a60208a018a611257565b610c9a60608b0160408c01611257565b610caa60808c0160608d01611257565b8b60800135898711610cbc5786610cc6565b610cc68a886111b6565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b5f385f3884865af161095e5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610d7c576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610dd057637939f4245f526004601cfd5b5f60605260405250505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000821601610e6857506023015160601c3b151592915050565b5050503b151590565b6103b38383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610ea7565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615610fce5773ffffffffffffffffffffffffffffffffffffffff8316610f10576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610f83573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fa79190611473565b1015610fce57610fce73ffffffffffffffffffffffffffffffffffffffff85168483610fd4565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610d7c575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610d7c57633e3f8f735f526004601cfd5b5f5f83601f840112611062575f5ffd5b50813567ffffffffffffffff811115611079575f5ffd5b602083019150836020828501011115611090575f5ffd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff811681146110b8575f5ffd5b50565b5f5f5f5f5f5f5f5f5f60c08a8c0312156110d3575f5ffd5b8935985060208a013567ffffffffffffffff8111156110f0575f5ffd5b6110fc8c828d01611052565b90995097505060408a013567ffffffffffffffff81111561111b575f5ffd5b6111278c828d01611052565b90975095505060608a013561113b81611097565b935060808a0135925060a08a013567ffffffffffffffff81111561115d575f5ffd5b8a015f80601f83018e1361116f575f5ffd5b50813567ffffffffffffffff811115611186575f5ffd5b6020830191508d60208260051b85010111156111a0575f5ffd5b8194508093505050509295985092959850929598565b81810381811115610407577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261124d575f5ffd5b9190910192915050565b5f60208284031215611267575f5ffd5b813561127281611097565b9392505050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081525f6112d360e083018b8d611279565b82810360208401526112e6818a8c611279565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f60208284031215611367575f5ffd5b81358015158114611272575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126113a9575f5ffd5b83018035915067ffffffffffffffff8211156113c3575f5ffd5b602001915036819003821315611090575f5ffd5b5f5f858511156113e5575f5ffd5b838611156113f1575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561145d577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611483575f5ffd5b505191905056fea2646970667358221220d3eaf4bb4a789fc3dd1c639c3d79d6efb32ee4cebc9af62bfe13b42c48e2f94a64736f6c634300081d0033";
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
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
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
