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
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051611e03380380611e0383398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b608051611d716100926000396000818161070601526107760152611d716000f3fe6080604052600436106100295760003560e01c806302cba4a31461002e578063a9d0550f14610050575b600080fd5b34801561003a57600080fd5b5061004e6100493660046118b2565b610063565b005b61004e61005e3660046118ef565b610337565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100de576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155610100820151829015610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b828061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b836101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84606467ffffffffffffffff16808260e001511461027e576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86736b175474e89094c44da98b954eedeac495271d0f8073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102fd576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61031f736b175474e89094c44da98b954eedeac495271d0f8a60c00151610637565b610328896106ec565b50506000909555505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103c33447611989565b905085806101000151610402576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610440576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876104638160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561049a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104d8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610515576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88606467ffffffffffffffff16808260e001511461055f576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a736b175474e89094c44da98b954eedeac495271d0f8073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146105de576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105f38d600001518e60c001518e8e33610836565b60c08e01526106018d6106ec565b5050505050505060004790508181111561062a5761062a6000846106258585611989565b61097e565b5050600090915550505050565b80600003610671576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106ca57803410156106c6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6106c673ffffffffffffffffffffffffffffffffffffffff83163330846109b3565b61072f736b175474e89094c44da98b954eedeac495271d0f7f00000000000000000000000000000000000000000000000000000000000000008360c00151610a10565b60a081015160c08201516040517f01e4f53a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016926301e4f53a926107ca9260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b1580156107e457600080fd5b505af11580156107f8573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161082b9190611a27565b60405180910390a150565b600082808203610872576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610881600185611989565b81811061089057610890611b3a565b90506020028101906108a29190611b69565b6108b3906080810190606001611ba7565b905060006108c082610a3c565b905073ffffffffffffffffffffffffffffffffffffffff82166108ea576108e73482611989565b90505b60006108f68888610a87565b90506109028888610b93565b61090f8a89898985610c00565b60008261091b85610a3c565b6109259190611989565b905089811015610970576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166109a8576109a38282610fb2565b505050565b6109a383838361101f565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716610a0257637939f4246000526004601cfd5b600060605260405250505050565b6109a38383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61108d565b600073ffffffffffffffffffffffffffffffffffffffff821615610a7f57610a7a73ffffffffffffffffffffffffffffffffffffffff8316306111a0565b610a81565b475b92915050565b60608160008167ffffffffffffffff811115610aa557610aa5611690565b604051908082528060200260200182016040528015610ace578160200160208202803683370190505b5090506000805b83811015610b8857868682818110610aef57610aef611b3a565b9050602002810190610b019190611b69565b610b12906080810190606001611ba7565b9150610b1d82610a3c565b838281518110610b2f57610b2f611b3a565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b805734838281518110610b6857610b68611b3a565b60200260200101818151610b7c9190611989565b9052505b600101610ad5565b509095945050505050565b60005b818110156109a35736838383818110610bb157610bb1611b3a565b9050602002810190610bc39190611b69565b9050610bd560e0820160c08301611bc9565b15610bf757610bf7610bed6060830160408401611ba7565b8260800135610637565b50600101610b96565b838383838260018114610ecd5760008585610c1c600185611989565b818110610c2b57610c2b611b3a565b9050602002810190610c3d9190611b69565b610c4e906080810190606001611ba7565b9050600089815b81811015610df957368d8d83818110610c7057610c70611b3a565b9050602002810190610c829190611b69565b9050610cb1610c976060830160408401611ba7565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d145750610d14610cca6040830160208401611ba7565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d2b5750610d2b610cca6020830183611ba7565b8015610db05750610db0610d4260a0830183611be4565b610d5191600491600091611c50565b610d5a91611c7a565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610de6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610df08f826111d5565b50600101610c55565b505060005b610e09600185611989565b811015610ec5576000888883818110610e2457610e24611b3a565b9050602002810190610e369190611b69565b610e47906080810190606001611ba7565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ebc57858281518110610e8e57610e8e611b3a565b6020026020010151610e9f82610a3c565b610ea99190611989565b92508215610ebc57610ebc81888561097e565b50600101610dfe565b505050610fa6565b8760005b81811015610fa357368b8b83818110610eec57610eec611b3a565b9050602002810190610efe9190611b69565b9050610f13610c976060830160408401611ba7565b80610f2c5750610f2c610cca6040830160208401611ba7565b8015610f435750610f43610cca6020830183611ba7565b8015610f5a5750610f5a610d4260a0830183611be4565b610f90576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f9a8d826111d5565b50600101610ed1565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610fff576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106c673ffffffffffffffffffffffffffffffffffffffff8316826114b2565b73ffffffffffffffffffffffffffffffffffffffff821661106c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109a373ffffffffffffffffffffffffffffffffffffffff841683836114ce565b73ffffffffffffffffffffffffffffffffffffffff83166110da576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561114f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111739190611cc2565b101561119a5761119a73ffffffffffffffffffffffffffffffffffffffff8516848361151d565b50505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6111ea6111e56020830183611ba7565b6115a7565b611220576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611260576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611275610c976060850160408601611ba7565b611280576000611286565b82608001355b905060006112a261129d6060860160408701611ba7565b610a3c565b905060006112b961129d6080870160608801611ba7565b9050826000036112f0576112f06112d66060870160408801611ba7565b6112e66040880160208901611ba7565b8760800135610a10565b846080013582101561133b576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610967565b60008061134b6020880188611ba7565b73ffffffffffffffffffffffffffffffffffffffff168561136f60a08a018a611be4565b60405161137d929190611cdb565b60006040518083038185875af1925050503d80600081146113ba576040519150601f19603f3d011682016040523d82523d6000602084013e6113bf565b606091505b5091509150816113d2576113d281611686565b60006113e761129d60808a0160608b01611ba7565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961141860208b018b611ba7565b61142860608c0160408d01611ba7565b61143860808d0160608e01611ba7565b8c6080013589871161144a5786611454565b6114548a88611989565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60003860003884865af16106c65763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611513576390b8ec186000526004601cfd5b6000603452505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166115135760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661151357633e3f8f736000526004601cfd5b604080516003808252818301909252600091829182917fef0100000000000000000000000000000000000000000000000000000000000091839160208201818036833701905050863b945090507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4706003600060208401893c863f9350600061162e83611ceb565b90507fffffff00000000000000000000000000000000000000000000000000000000008085169082160361166a57506001979650505050505050565b60008611801561167a5750818514155b98975050505050505050565b8051602082018181fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156116e3576116e3611690565b60405290565b600082601f8301126116fa57600080fd5b813567ffffffffffffffff8082111561171557611715611690565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561175b5761175b611690565b8160405283815286602085880101111561177457600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146117b857600080fd5b919050565b803580151581146117b857600080fd5b600061014082840312156117e057600080fd5b6117e86116bf565b905081358152602082013567ffffffffffffffff8082111561180957600080fd5b611815858386016116e9565b6020840152604084013591508082111561182e57600080fd5b5061183b848285016116e9565b60408301525061184d60608301611794565b606082015261185e60808301611794565b608082015261186f60a08301611794565b60a082015260c082013560c082015260e082013560e08201526101006118968184016117bd565b908201526101206118a88382016117bd565b9082015292915050565b6000602082840312156118c457600080fd5b813567ffffffffffffffff8111156118db57600080fd5b6118e7848285016117cd565b949350505050565b60008060006040848603121561190457600080fd5b833567ffffffffffffffff8082111561191c57600080fd5b611928878388016117cd565b9450602086013591508082111561193e57600080fd5b818601915086601f83011261195257600080fd5b81358181111561196157600080fd5b8760208260051b850101111561197657600080fd5b6020830194508093505050509250925092565b81810381811115610a81577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000815180845260005b818110156119e9576020818501810151868301820152016119cd565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152611a506101608501836119c3565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611a8b83826119c3565b9250506060850151611ab5608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611b288187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611b9d57600080fd5b9190910192915050565b600060208284031215611bb957600080fd5b611bc282611794565b9392505050565b600060208284031215611bdb57600080fd5b611bc2826117bd565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611c1957600080fd5b83018035915067ffffffffffffffff821115611c3457600080fd5b602001915036819003821315611c4957600080fd5b9250929050565b60008085851115611c6057600080fd5b83861115611c6d57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611cba5780818660040360031b1b83161692505b505092915050565b600060208284031215611cd457600080fd5b5051919050565b8183823760009101908152919050565b6000815160208301517fffffff000000000000000000000000000000000000000000000000000000000080821693506003831015611d335780818460030360031b1b83161693505b50505091905056fea2646970667358221220e91b18cae2bad3775dfd1a365f143f3245ada793373ecad4e6c8f85cb01dcaef64736f6c63430008110033";
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
    static createInterface(): GnosisBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GnosisBridgeFacet;
}
export {};
