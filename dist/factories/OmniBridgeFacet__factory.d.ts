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
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162001ce738038062001ce7833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a051611c19620000ce60003960006105cb01526000818161063801526106c20152611c196000f3fe6080604052600436106100295760003560e01c8063782621d81461002e5780639572678214610043575b600080fd5b61004161003c3660046117aa565b610056565b005b6100416100513660046117e7565b61027d565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447611881565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024787608001518860c001516104a8565b6102508761055d565b5047915050818111156102725761027260008461026d8585611881565b61075b565b505060009091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103093447611881565b905085806101000151610348576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610386576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103a98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361041e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047089600001518a60c001518a8a33610790565b60c08a015261047e8961055d565b50479150508181111561049b5761049b60008461026d8585611881565b5050600090915550505050565b806000036104e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053b5780341015610537576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61053773ffffffffffffffffffffffffffffffffffffffff83163330846108d8565b608081015173ffffffffffffffffffffffffffffffffffffffff1661062e5760c081015160a08201516040517ff52cbf0e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f00000000000000000000000000000000000000000000000000000000000000009091169163f52cbf0e916024016000604051808303818588803b15801561061057600080fd5b505af1158015610624573d6000803e3d6000fd5b5050505050610721565b61066181608001517f00000000000000000000000000000000000000000000000000000000000000008360c00151610935565b608081015160a082015160c08301516040517fad58bdd100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9384166004820152918316602483015260448201527f00000000000000000000000000000000000000000000000000000000000000009091169063ad58bdd190606401600060405180830381600087803b15801561070857600080fd5b505af115801561071c573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f181604051610750919061191f565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff8316610785576107808282610961565b505050565b6107808383836109ce565b6000828082036107cc576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856107db600185611881565b8181106107ea576107ea611a32565b90506020028101906107fc9190611a61565b61080d906080810190606001611a9f565b9050600061081a82610a3c565b905073ffffffffffffffffffffffffffffffffffffffff8216610844576108413482611881565b90505b60006108508888610a87565b905061085c8888610b93565b6108698a89898985610c00565b60008261087585610a3c565b61087f9190611881565b9050898110156108ca576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661092757637939f4246000526004601cfd5b600060605260405250505050565b6107808383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610fb2565b73ffffffffffffffffffffffffffffffffffffffff82166109ae576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61053773ffffffffffffffffffffffffffffffffffffffff8316826110e1565b73ffffffffffffffffffffffffffffffffffffffff8216610a1b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61078073ffffffffffffffffffffffffffffffffffffffff841683836110fd565b600073ffffffffffffffffffffffffffffffffffffffff821615610a7f57610a7a73ffffffffffffffffffffffffffffffffffffffff83163061114c565b610a81565b475b92915050565b60608160008167ffffffffffffffff811115610aa557610aa5611588565b604051908082528060200260200182016040528015610ace578160200160208202803683370190505b5090506000805b83811015610b8857868682818110610aef57610aef611a32565b9050602002810190610b019190611a61565b610b12906080810190606001611a9f565b9150610b1d82610a3c565b838281518110610b2f57610b2f611a32565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b805734838281518110610b6857610b68611a32565b60200260200101818151610b7c9190611881565b9052505b600101610ad5565b509095945050505050565b60005b818110156107805736838383818110610bb157610bb1611a32565b9050602002810190610bc39190611a61565b9050610bd560e0820160c08301611ac1565b15610bf757610bf7610bed6060830160408401611a9f565b82608001356104a8565b50600101610b96565b838383838260018114610ecd5760008585610c1c600185611881565b818110610c2b57610c2b611a32565b9050602002810190610c3d9190611a61565b610c4e906080810190606001611a9f565b9050600089815b81811015610df957368d8d83818110610c7057610c70611a32565b9050602002810190610c829190611a61565b9050610cb1610c976060830160408401611a9f565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d145750610d14610cca6040830160208401611a9f565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d2b5750610d2b610cca6020830183611a9f565b8015610db05750610db0610d4260a0830183611adc565b610d5191600491600091611b48565b610d5a91611b72565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610de6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610df08f82611181565b50600101610c55565b505060005b610e09600185611881565b811015610ec5576000888883818110610e2457610e24611a32565b9050602002810190610e369190611a61565b610e47906080810190606001611a9f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ebc57858281518110610e8e57610e8e611a32565b6020026020010151610e9f82610a3c565b610ea99190611881565b92508215610ebc57610ebc81888561075b565b50600101610dfe565b505050610fa6565b8760005b81811015610fa357368b8b83818110610eec57610eec611a32565b9050602002810190610efe9190611a61565b9050610f13610c976060830160408401611a9f565b80610f2c5750610f2c610cca6040830160208401611a9f565b8015610f435750610f43610cca6020830183611a9f565b8015610f5a5750610f5a610d4260a0830183611adc565b610f90576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f9a8d82611181565b50600101610ed1565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156110db5773ffffffffffffffffffffffffffffffffffffffff831661101b576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611090573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b49190611bba565b10156110db576110db73ffffffffffffffffffffffffffffffffffffffff8516848361145e565b50505050565b60003860003884865af16105375763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611142576390b8ec186000526004601cfd5b6000603452505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6111966111916020830183611a9f565b6114e8565b6111cc576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361120c576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611221610c976060850160408601611a9f565b61122c576000611232565b82608001355b9050600061124e6112496060860160408701611a9f565b610a3c565b905060006112656112496080870160608801611a9f565b90508260000361129c5761129c6112826060870160408801611a9f565b6112926040880160208901611a9f565b8760800135610935565b84608001358210156112e7576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016108c1565b6000806112f76020880188611a9f565b73ffffffffffffffffffffffffffffffffffffffff168561131b60a08a018a611adc565b604051611329929190611bd3565b60006040518083038185875af1925050503d8060008114611366576040519150601f19603f3d011682016040523d82523d6000602084013e61136b565b606091505b50915091508161137e5761137e8161157e565b600061139361124960808a0160608b01611a9f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896113c460208b018b611a9f565b6113d460608c0160408d01611a9f565b6113e460808d0160608e01611a9f565b8c608001358987116113f65786611400565b6114008a88611881565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166111425760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661114257633e3f8f736000526004601cfd5b6040805160178082528183019092526000918291906020820181803683370190505090506017600060208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161157557506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156115db576115db611588565b60405290565b600082601f8301126115f257600080fd5b813567ffffffffffffffff8082111561160d5761160d611588565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561165357611653611588565b8160405283815286602085880101111561166c57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146116b057600080fd5b919050565b803580151581146116b057600080fd5b600061014082840312156116d857600080fd5b6116e06115b7565b905081358152602082013567ffffffffffffffff8082111561170157600080fd5b61170d858386016115e1565b6020840152604084013591508082111561172657600080fd5b50611733848285016115e1565b6040830152506117456060830161168c565b60608201526117566080830161168c565b608082015261176760a0830161168c565b60a082015260c082013560c082015260e082013560e082015261010061178e8184016116b5565b908201526101206117a08382016116b5565b9082015292915050565b6000602082840312156117bc57600080fd5b813567ffffffffffffffff8111156117d357600080fd5b6117df848285016116c5565b949350505050565b6000806000604084860312156117fc57600080fd5b833567ffffffffffffffff8082111561181457600080fd5b611820878388016116c5565b9450602086013591508082111561183657600080fd5b818601915086601f83011261184a57600080fd5b81358181111561185957600080fd5b8760208260051b850101111561186e57600080fd5b6020830194508093505050509250925092565b81810381811115610a81577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000815180845260005b818110156118e1576020818501810151868301820152016118c5565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6020815281516020820152600060208301516101408060408501526119486101608501836118bb565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261198383826118bb565b92505060608501516119ad608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611a208187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611a9557600080fd5b9190910192915050565b600060208284031215611ab157600080fd5b611aba8261168c565b9392505050565b600060208284031215611ad357600080fd5b611aba826116b5565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b1157600080fd5b83018035915067ffffffffffffffff821115611b2c57600080fd5b602001915036819003821315611b4157600080fd5b9250929050565b60008085851115611b5857600080fd5b83861115611b6557600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611bb25780818660040360031b1b83161692505b505092915050565b600060208284031215611bcc57600080fd5b5051919050565b818382376000910190815291905056fea2646970667358221220e8d1ab698ee199b9ad638b6c0a727377fcd764b0167d9fe5543b0a8a5e3ff8b164736f6c63430008110033";
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
