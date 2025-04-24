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
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061151d806100206000396000f3fe60806040526004361061001e5760003560e01c80634630a0d814610023575b600080fd5b610036610031366004611126565b610038565b005b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100b3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181558460006100c43447611217565b905073ffffffffffffffffffffffffffffffffffffffff8716610113576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006101228d8888888c61024b565b905060008686610133600182611217565b81811061014257610142611251565b90506020028101906101549190611280565b6101659060808101906060016112be565b9050610172818a84610393565b8d7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378e8e8e8e8e8d8d60008181106101ac576101ac611251565b90506020028101906101be9190611280565b6101cf9060608101906040016112be565b888f8f60008181106101e3576101e3611251565b90506020028101906101f59190611280565b608001358b60405161020f9998979695949392919061132b565b60405180910390a25047905081811115610238576102386000846102338585611217565b610393565b5050600090915550505050505050505050565b600082808203610287576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610296600185611217565b8181106102a5576102a5611251565b90506020028101906102b79190611280565b6102c89060808101906060016112be565b905060006102d5826103c9565b905073ffffffffffffffffffffffffffffffffffffffff82166102ff576102fc3482611217565b90505b600061030b8888610414565b90506103178888610520565b6103248a8989898561058d565b600082610330856103c9565b61033a9190611217565b905089811015610385576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316156103bf576103ba83838361093f565b505050565b6103ba82826109ad565b600073ffffffffffffffffffffffffffffffffffffffff82161561040c5761040773ffffffffffffffffffffffffffffffffffffffff831630610a1e565b61040e565b475b92915050565b60608160008167ffffffffffffffff81111561043257610432611396565b60405190808252806020026020018201604052801561045b578160200160208202803683370190505b5090506000805b838110156105155786868281811061047c5761047c611251565b905060200281019061048e9190611280565b61049f9060808101906060016112be565b91506104aa826103c9565b8382815181106104bc576104bc611251565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661050d57348382815181106104f5576104f5611251565b602002602001018181516105099190611217565b9052505b600101610462565b509095945050505050565b60005b818110156103ba573683838381811061053e5761053e611251565b90506020028101906105509190611280565b905061056260e0820160c083016113c5565b156105845761058461057a60608301604084016112be565b8260800135610a53565b50600101610523565b83838383826001811461085a57600085856105a9600185611217565b8181106105b8576105b8611251565b90506020028101906105ca9190611280565b6105db9060808101906060016112be565b9050600089815b8181101561078657368d8d838181106105fd576105fd611251565b905060200281019061060f9190611280565b905061063e61062460608301604084016112be565b73ffffffffffffffffffffffffffffffffffffffff161590565b806106a157506106a161065760408301602084016112be565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156106b857506106b861065760208301836112be565b801561073d575061073d6106cf60a08301836113e7565b6106de9160049160009161144c565b6106e791611476565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610773576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61077d8f82610b04565b506001016105e2565b505060005b610796600185611217565b8110156108525760008888838181106107b1576107b1611251565b90506020028101906107c39190611280565b6107d49060808101906060016112be565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146108495785828151811061081b5761081b611251565b602002602001015161082c826103c9565b6108369190611217565b9250821561084957610849818885610393565b5060010161078b565b505050610933565b8760005b8181101561093057368b8b8381811061087957610879611251565b905060200281019061088b9190611280565b90506108a061062460608301604084016112be565b806108b957506108b961065760408301602084016112be565b80156108d057506108d061065760208301836112be565b80156108e757506108e76106cf60a08301836113e7565b61091d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109278d82610b04565b5060010161085e565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff821661098c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103ba73ffffffffffffffffffffffffffffffffffffffff84168383610de1565b73ffffffffffffffffffffffffffffffffffffffff82166109fa576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a1a73ffffffffffffffffffffffffffffffffffffffff831682610e30565b5050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b80600003610a8d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ae25780341015610a1a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a1a73ffffffffffffffffffffffffffffffffffffffff8316333084610e4c565b610b19610b1460208301836112be565b610ea9565b610b4f576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003610b8f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610ba461062460608501604086016112be565b610baf576000610bb5565b82608001355b90506000610bd1610bcc60608601604087016112be565b6103c9565b90506000610be8610bcc60808701606088016112be565b905082600003610c1f57610c1f610c0560608701604088016112be565b610c1560408801602089016112be565b8760800135610ee5565b8460800135821015610c6a576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161037c565b600080610c7a60208801886112be565b73ffffffffffffffffffffffffffffffffffffffff1685610c9e60a08a018a6113e7565b604051610cac9291906114be565b60006040518083038185875af1925050503d8060008114610ce9576040519150601f19603f3d011682016040523d82523d6000602084013e610cee565b606091505b509150915081610d0157610d0181610f11565b6000610d16610bcc60808a0160608b016112be565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889610d4760208b018b6112be565b610d5760608c0160408d016112be565b610d6760808d0160608e016112be565b8c60800135898711610d795786610d83565b610d838a88611217565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610e26576390b8ec186000526004601cfd5b6000603452505050565b60003860003884865af1610a1a5763b12d13eb6000526004601cfd5b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716610e9b57637939f4246000526004601cfd5b600060605260405250505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708115801590610edd5750808214155b949350505050565b6103ba8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610f1b565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8316610f68576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610fdd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100191906114ce565b10156110285761102873ffffffffffffffffffffffffffffffffffffffff8516848361102e565b50505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716610e265760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716610e2657633e3f8f736000526004601cfd5b60008083601f8401126110ca57600080fd5b50813567ffffffffffffffff8111156110e257600080fd5b6020830191508360208285010111156110fa57600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff8116811461112357600080fd5b50565b600080600080600080600080600060c08a8c03121561114457600080fd5b8935985060208a013567ffffffffffffffff8082111561116357600080fd5b61116f8d838e016110b8565b909a50985060408c013591508082111561118857600080fd5b6111948d838e016110b8565b909850965060608c013591506111a982611101565b90945060808b0135935060a08b013590808211156111c657600080fd5b818c0191508c601f8301126111da57600080fd5b8135818111156111e957600080fd5b8d60208260051b85010111156111fe57600080fd5b6020830194508093505050509295985092959850929598565b8181038181111561040e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126112b457600080fd5b9190910192915050565b6000602082840312156112d057600080fd5b81356112db81611101565b9392505050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e08152600061133f60e083018b8d6112e2565b8281036020840152611352818a8c6112e2565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000602082840312156113d757600080fd5b813580151581146112db57600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261141c57600080fd5b83018035915067ffffffffffffffff82111561143757600080fd5b6020019150368190038213156110fa57600080fd5b6000808585111561145c57600080fd5b8386111561146957600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156114b65780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156114e057600080fd5b505191905056fea2646970667358221220e08bfce99114890a3c071bf559afe9aa1dfcf328955b02a64223b2a5ddf4d17d64736f6c63430008110033";
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
