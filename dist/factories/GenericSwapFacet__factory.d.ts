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
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611592806100206000396000f3fe60806040526004361061001e5760003560e01c80634630a0d814610023575b600080fd5b61003661003136600461119b565b610038565b005b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100b3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181558460006100c4344761128c565b905073ffffffffffffffffffffffffffffffffffffffff8716610113576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006101228d8888888c61024b565b90506000868661013360018261128c565b818110610142576101426112c6565b905060200281019061015491906112f5565b610165906080810190606001611333565b9050610172818a84610393565b8d7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378e8e8e8e8e8d8d60008181106101ac576101ac6112c6565b90506020028101906101be91906112f5565b6101cf906060810190604001611333565b888f8f60008181106101e3576101e36112c6565b90506020028101906101f591906112f5565b608001358b60405161020f999897969594939291906113a0565b60405180910390a2504790508181111561023857610238600084610233858561128c565b610393565b5050600090915550505050505050505050565b600082808203610287576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561029660018561128c565b8181106102a5576102a56112c6565b90506020028101906102b791906112f5565b6102c8906080810190606001611333565b905060006102d5826103c8565b905073ffffffffffffffffffffffffffffffffffffffff82166102ff576102fc348261128c565b90505b600061030b8888610413565b9050610317888861051f565b6103248a8989898561058c565b600082610330856103c8565b61033a919061128c565b905089811015610385576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166103bd576103b8828261093e565b505050565b6103b88383836109af565b600073ffffffffffffffffffffffffffffffffffffffff82161561040b5761040673ffffffffffffffffffffffffffffffffffffffff831630610a1d565b61040d565b475b92915050565b60608160008167ffffffffffffffff8111156104315761043161140b565b60405190808252806020026020018201604052801561045a578160200160208202803683370190505b5090506000805b838110156105145786868281811061047b5761047b6112c6565b905060200281019061048d91906112f5565b61049e906080810190606001611333565b91506104a9826103c8565b8382815181106104bb576104bb6112c6565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661050c57348382815181106104f4576104f46112c6565b60200260200101818151610508919061128c565b9052505b600101610461565b509095945050505050565b60005b818110156103b8573683838381811061053d5761053d6112c6565b905060200281019061054f91906112f5565b905061056160e0820160c0830161143a565b15610583576105836105796060830160408401611333565b8260800135610a52565b50600101610522565b83838383826001811461085957600085856105a860018561128c565b8181106105b7576105b76112c6565b90506020028101906105c991906112f5565b6105da906080810190606001611333565b9050600089815b8181101561078557368d8d838181106105fc576105fc6112c6565b905060200281019061060e91906112f5565b905061063d6106236060830160408401611333565b73ffffffffffffffffffffffffffffffffffffffff161590565b806106a057506106a06106566040830160208401611333565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156106b757506106b76106566020830183611333565b801561073c575061073c6106ce60a083018361145c565b6106dd916004916000916114c1565b6106e6916114eb565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610772576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61077c8f82610b03565b506001016105e1565b505060005b61079560018561128c565b8110156108515760008888838181106107b0576107b06112c6565b90506020028101906107c291906112f5565b6107d3906080810190606001611333565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146108485785828151811061081a5761081a6112c6565b602002602001015161082b826103c8565b610835919061128c565b9250821561084857610848818885610393565b5060010161078a565b505050610932565b8760005b8181101561092f57368b8b83818110610878576108786112c6565b905060200281019061088a91906112f5565b905061089f6106236060830160408401611333565b806108b857506108b86106566040830160208401611333565b80156108cf57506108cf6106566020830183611333565b80156108e657506108e66106ce60a083018361145c565b61091c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109268d82610b03565b5060010161085d565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff821661098b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109ab73ffffffffffffffffffffffffffffffffffffffff831682610de0565b5050565b73ffffffffffffffffffffffffffffffffffffffff82166109fc576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103b873ffffffffffffffffffffffffffffffffffffffff84168383610dfc565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b80600003610a8c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ae157803410156109ab576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109ab73ffffffffffffffffffffffffffffffffffffffff8316333084610e4b565b610b18610b136020830183611333565b610ea8565b610b4e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003610b8e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610ba36106236060850160408601611333565b610bae576000610bb4565b82608001355b90506000610bd0610bcb6060860160408701611333565b6103c8565b90506000610be7610bcb6080870160608801611333565b905082600003610c1e57610c1e610c046060870160408801611333565b610c146040880160208901611333565b8760800135610f3e565b8460800135821015610c69576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161037c565b600080610c796020880188611333565b73ffffffffffffffffffffffffffffffffffffffff1685610c9d60a08a018a61145c565b604051610cab929190611533565b60006040518083038185875af1925050503d8060008114610ce8576040519150601f19603f3d011682016040523d82523d6000602084013e610ced565b606091505b509150915081610d0057610d0081610f6a565b6000610d15610bcb60808a0160608b01611333565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889610d4660208b018b611333565b610d5660608c0160408d01611333565b610d6660808d0160608e01611333565b8c60800135898711610d785786610d82565b610d828a8861128c565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60003860003884865af16109ab5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610e41576390b8ec186000526004601cfd5b6000603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716610e9a57637939f4246000526004601cfd5b600060605260405250505050565b6040805160178082528183019092526000918291906020820181803683370190505090506017600060208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000821601610f3557506023015160601c3b151592915050565b5050503b151590565b6103b88383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610f74565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff84161561109d5773ffffffffffffffffffffffffffffffffffffffff8316610fdd576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611052573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110769190611543565b101561109d5761109d73ffffffffffffffffffffffffffffffffffffffff851684836110a3565b50505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716610e415760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716610e4157633e3f8f736000526004601cfd5b60008083601f84011261113f57600080fd5b50813567ffffffffffffffff81111561115757600080fd5b60208301915083602082850101111561116f57600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff8116811461119857600080fd5b50565b600080600080600080600080600060c08a8c0312156111b957600080fd5b8935985060208a013567ffffffffffffffff808211156111d857600080fd5b6111e48d838e0161112d565b909a50985060408c01359150808211156111fd57600080fd5b6112098d838e0161112d565b909850965060608c0135915061121e82611176565b90945060808b0135935060a08b0135908082111561123b57600080fd5b818c0191508c601f83011261124f57600080fd5b81358181111561125e57600080fd5b8d60208260051b850101111561127357600080fd5b6020830194508093505050509295985092959850929598565b8181038181111561040d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261132957600080fd5b9190910192915050565b60006020828403121561134557600080fd5b813561135081611176565b9392505050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e0815260006113b460e083018b8d611357565b82810360208401526113c7818a8c611357565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561144c57600080fd5b8135801515811461135057600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261149157600080fd5b83018035915067ffffffffffffffff8211156114ac57600080fd5b60200191503681900382131561116f57600080fd5b600080858511156114d157600080fd5b838611156114de57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561152b5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561155557600080fd5b505191905056fea2646970667358221220534084b8912ffe5c0f96efe286dc386d5d39c48a017bc074d9c727afbc9eb35164736f6c63430008110033";
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
