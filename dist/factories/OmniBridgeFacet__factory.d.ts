import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OmniBridgeFacet, OmniBridgeFacetInterface } from "../OmniBridgeFacet";
declare type OmniBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OmniBridgeFacet__factory extends ContractFactory {
    constructor(...args: OmniBridgeFacetConstructorParams);
    deploy(_foreignOmniBridge: PromiseOrValue<string>, _wethOmniBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OmniBridgeFacet>;
    getDeployTransaction(_foreignOmniBridge: PromiseOrValue<string>, _wethOmniBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OmniBridgeFacet;
    connect(signer: Signer): OmniBridgeFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162001c5738038062001c57833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a051611b89620000ce60003960006105cb01526000818161063801526106c20152611b896000f3fe6080604052600436106100295760003560e01c8063782621d81461002e5780639572678214610043575b600080fd5b61004161003c36600461171a565b610056565b005b610041610051366004611757565b61027d565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476117f1565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024787608001518860c001516104a8565b6102508761055d565b5047915050818111156102725761027260008461026d85856117f1565b61075b565b505060009091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061030934476117f1565b905085806101000151610348576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610386576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103a98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361041e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047089600001518a60c001518a8a33610790565b60c08a015261047e8961055d565b50479150508181111561049b5761049b60008461026d85856117f1565b5050600090915550505050565b806000036104e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053b5780341015610537576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61053773ffffffffffffffffffffffffffffffffffffffff83163330846108d8565b608081015173ffffffffffffffffffffffffffffffffffffffff1661062e5760c081015160a08201516040517ff52cbf0e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f00000000000000000000000000000000000000000000000000000000000000009091169163f52cbf0e916024016000604051808303818588803b15801561061057600080fd5b505af1158015610624573d6000803e3d6000fd5b5050505050610721565b61066181608001517f00000000000000000000000000000000000000000000000000000000000000008360c00151610935565b608081015160a082015160c08301516040517fad58bdd100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9384166004820152918316602483015260448201527f00000000000000000000000000000000000000000000000000000000000000009091169063ad58bdd190606401600060405180830381600087803b15801561070857600080fd5b505af115801561071c573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f181604051610750919061188f565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff8316610785576107808282610961565b505050565b6107808383836109ce565b6000828082036107cc576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856107db6001856117f1565b8181106107ea576107ea6119a2565b90506020028101906107fc91906119d1565b61080d906080810190606001611a0f565b9050600061081a82610a3c565b905073ffffffffffffffffffffffffffffffffffffffff82166108445761084134826117f1565b90505b60006108508888610a87565b905061085c8888610b93565b6108698a89898985610c00565b60008261087585610a3c565b61087f91906117f1565b9050898110156108ca576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661092757637939f4246000526004601cfd5b600060605260405250505050565b6107808383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610fb2565b73ffffffffffffffffffffffffffffffffffffffff82166109ae576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61053773ffffffffffffffffffffffffffffffffffffffff8316826110c5565b73ffffffffffffffffffffffffffffffffffffffff8216610a1b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61078073ffffffffffffffffffffffffffffffffffffffff841683836110e1565b600073ffffffffffffffffffffffffffffffffffffffff821615610a7f57610a7a73ffffffffffffffffffffffffffffffffffffffff831630611130565b610a81565b475b92915050565b60608160008167ffffffffffffffff811115610aa557610aa56114f8565b604051908082528060200260200182016040528015610ace578160200160208202803683370190505b5090506000805b83811015610b8857868682818110610aef57610aef6119a2565b9050602002810190610b0191906119d1565b610b12906080810190606001611a0f565b9150610b1d82610a3c565b838281518110610b2f57610b2f6119a2565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b805734838281518110610b6857610b686119a2565b60200260200101818151610b7c91906117f1565b9052505b600101610ad5565b509095945050505050565b60005b818110156107805736838383818110610bb157610bb16119a2565b9050602002810190610bc391906119d1565b9050610bd560e0820160c08301611a31565b15610bf757610bf7610bed6060830160408401611a0f565b82608001356104a8565b50600101610b96565b838383838260018114610ecd5760008585610c1c6001856117f1565b818110610c2b57610c2b6119a2565b9050602002810190610c3d91906119d1565b610c4e906080810190606001611a0f565b9050600089815b81811015610df957368d8d83818110610c7057610c706119a2565b9050602002810190610c8291906119d1565b9050610cb1610c976060830160408401611a0f565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d145750610d14610cca6040830160208401611a0f565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d2b5750610d2b610cca6020830183611a0f565b8015610db05750610db0610d4260a0830183611a4c565b610d5191600491600091611ab8565b610d5a91611ae2565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610de6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610df08f82611165565b50600101610c55565b505060005b610e096001856117f1565b811015610ec5576000888883818110610e2457610e246119a2565b9050602002810190610e3691906119d1565b610e47906080810190606001611a0f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ebc57858281518110610e8e57610e8e6119a2565b6020026020010151610e9f82610a3c565b610ea991906117f1565b92508215610ebc57610ebc81888561075b565b50600101610dfe565b505050610fa6565b8760005b81811015610fa357368b8b83818110610eec57610eec6119a2565b9050602002810190610efe91906119d1565b9050610f13610c976060830160408401611a0f565b80610f2c5750610f2c610cca6040830160208401611a0f565b8015610f435750610f43610cca6020830183611a0f565b8015610f5a5750610f5a610d4260a0830183611a4c565b610f90576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f9a8d82611165565b50600101610ed1565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fff576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611074573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110989190611b2a565b10156110bf576110bf73ffffffffffffffffffffffffffffffffffffffff85168483611464565b50505050565b60003860003884865af16105375763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611126576390b8ec186000526004601cfd5b6000603452505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61119c6111756020830183611a0f565b3f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470141590565b6111d2576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611212576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611227610c976060850160408601611a0f565b611232576000611238565b82608001355b9050600061125461124f6060860160408701611a0f565b610a3c565b9050600061126b61124f6080870160608801611a0f565b9050826000036112a2576112a26112886060870160408801611a0f565b6112986040880160208901611a0f565b8760800135610935565b84608001358210156112ed576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016108c1565b6000806112fd6020880188611a0f565b73ffffffffffffffffffffffffffffffffffffffff168561132160a08a018a611a4c565b60405161132f929190611b43565b60006040518083038185875af1925050503d806000811461136c576040519150601f19603f3d011682016040523d82523d6000602084013e611371565b606091505b50915091508161138457611384816114ee565b600061139961124f60808a0160608b01611a0f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896113ca60208b018b611a0f565b6113da60608c0160408d01611a0f565b6113ea60808d0160608e01611a0f565b8c608001358987116113fc5786611406565b6114068a886117f1565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166111265760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661112657633e3f8f736000526004601cfd5b8051602082018181fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561154b5761154b6114f8565b60405290565b600082601f83011261156257600080fd5b813567ffffffffffffffff8082111561157d5761157d6114f8565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156115c3576115c36114f8565b816040528381528660208588010111156115dc57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461162057600080fd5b919050565b8035801515811461162057600080fd5b6000610140828403121561164857600080fd5b611650611527565b905081358152602082013567ffffffffffffffff8082111561167157600080fd5b61167d85838601611551565b6020840152604084013591508082111561169657600080fd5b506116a384828501611551565b6040830152506116b5606083016115fc565b60608201526116c6608083016115fc565b60808201526116d760a083016115fc565b60a082015260c082013560c082015260e082013560e08201526101006116fe818401611625565b90820152610120611710838201611625565b9082015292915050565b60006020828403121561172c57600080fd5b813567ffffffffffffffff81111561174357600080fd5b61174f84828501611635565b949350505050565b60008060006040848603121561176c57600080fd5b833567ffffffffffffffff8082111561178457600080fd5b61179087838801611635565b945060208601359150808211156117a657600080fd5b818601915086601f8301126117ba57600080fd5b8135818111156117c957600080fd5b8760208260051b85010111156117de57600080fd5b6020830194508093505050509250925092565b81810381811115610a81577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000815180845260005b8181101561185157602081850181015186830182015201611835565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6020815281516020820152600060208301516101408060408501526118b861016085018361182b565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526118f3838261182b565b925050606085015161191d608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206119908187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611a0557600080fd5b9190910192915050565b600060208284031215611a2157600080fd5b611a2a826115fc565b9392505050565b600060208284031215611a4357600080fd5b611a2a82611625565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611a8157600080fd5b83018035915067ffffffffffffffff821115611a9c57600080fd5b602001915036819003821315611ab157600080fd5b9250929050565b60008085851115611ac857600080fd5b83861115611ad557600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611b225780818660040360031b1b83161692505b505092915050565b600060208284031215611b3c57600080fd5b5051919050565b818382376000910190815291905056fea2646970667358221220b6fc3b0ec8102712cfa2925e1b6c6c926e7fea5abd46d467cdfbc1c479268d2e64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_foreignOmniBridge";
            readonly type: "address";
            readonly internalType: "contract IOmniBridge";
        }, {
            readonly name: "_wethOmniBridge";
            readonly type: "address";
            readonly internalType: "contract IOmniBridge";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaOmniBridge";
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
        readonly name: "swapAndStartBridgeTokensViaOmniBridge";
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
    static createInterface(): OmniBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OmniBridgeFacet;
}
export {};
