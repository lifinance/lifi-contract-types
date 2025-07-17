import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GasZipFacet, GasZipFacetInterface } from "../GasZipFacet";
type GasZipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasZipFacet__factory extends ContractFactory {
    constructor(...args: GasZipFacetConstructorParams);
    deploy(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasZipFacet>;
    getDeployTransaction(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasZipFacet;
    connect(signer: Signer): GasZipFacet__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405162001d5b38038062001d5b83398101604081905261003191610069565b6001600160a01b038116610058576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610099565b60006020828403121561007b57600080fd5b81516001600160a01b038116811461009257600080fd5b9392505050565b608051611ca0620000bb60003960008181607101526107e50152611ca06000f3fe60806040526004361061005a5760003560e01c8063606326ff11610043578063606326ff146100eb578063b49d391d14610100578063fc5f10031461012857600080fd5b8063194c869f1461005f57806346fd98e2146100bd575b600080fd5b34801561006b57600080fd5b506100937f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100c957600080fd5b506100dd6100d8366004611567565b61013b565b6040519081526020016100b4565b6100fe6100f93660046117e3565b6101cf565b005b34801561010c57600080fd5b506100937311f111f111f111f111f111f111f111f111f111f181565b6100fe61013636600461185f565b6103bd565b6000816010811115610179576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156101c757848482818110610196576101966118ae565b90506020020160208101906101ab91906118dd565b60ff16601084901b179250806101c090611936565b905061017c565b505092915050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161024a576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061025b344761196e565b90508680610100015161029a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156102d8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61033488886102e860018261196e565b8181106102f7576102f76118ae565b90506020028101906103099190611981565b61031a9060808101906060016119bf565b73ffffffffffffffffffffffffffffffffffffffff161590565b61036a576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61037f89600001518a60c001518a8a3361055c565b60c08a015261038e89876106a3565b50479050818111156103af576103af6000846103aa858561196e565b610891565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610438576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561010083015183901561047b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83806101200151156104b9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608085015173ffffffffffffffffffffffffffffffffffffffff161561050b576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8460c001513414610548576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055285856106a3565b5050600090555050565b600082808203610598576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856105a760018561196e565b8181106105b6576105b66118ae565b90506020028101906105c89190611981565b6105d99060808101906060016119bf565b905060006105e6826108c6565b905073ffffffffffffffffffffffffffffffffffffffff82166106105761060d348261196e565b90505b600061061c8888610911565b90506106288888610a1d565b6106358a89898985610a8a565b600082610641856108c6565b61064b919061196e565b905089811015610695576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b80356106db576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11480159061073357508160a0015160601b6bffffffffffffffffffffffff1916816000013514155b1561076a576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e00151036107a7576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08201516040517fc9630cb000000000000000000000000000000000000000000000000000000000815260208301356004820152823560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163c9630cb0916044016000604051808303818588803b15801561083d57600080fd5b505af1158015610851573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108859190611a3e565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166108bb576108b68282610e22565b505050565b6108b6838383610e93565b600073ffffffffffffffffffffffffffffffffffffffff8216156109095761090473ffffffffffffffffffffffffffffffffffffffff831630610f01565b61090b565b475b92915050565b60608160008167ffffffffffffffff81111561092f5761092f6115a9565b604051908082528060200260200182016040528015610958578160200160208202803683370190505b5090506000805b83811015610a1257868682818110610979576109796118ae565b905060200281019061098b9190611981565b61099c9060808101906060016119bf565b91506109a7826108c6565b8382815181106109b9576109b96118ae565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a0a57348382815181106109f2576109f26118ae565b60200260200101818151610a06919061196e565b9052505b60010161095f565b509095945050505050565b60005b818110156108b65736838383818110610a3b57610a3b6118ae565b9050602002810190610a4d9190611981565b9050610a5f60e0820160c08301611b51565b15610a8157610a81610a7760608301604084016119bf565b8260800135610f36565b50600101610a20565b838383838260018114610d3d5760008585610aa660018561196e565b818110610ab557610ab56118ae565b9050602002810190610ac79190611981565b610ad89060808101906060016119bf565b9050600089815b81811015610c6957368d8d83818110610afa57610afa6118ae565b9050602002810190610b0c9190611981565b9050610b2161031a60608301604084016119bf565b80610b845750610b84610b3a60408301602084016119bf565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610b9b5750610b9b610b3a60208301836119bf565b8015610c205750610c20610bb260a0830183611b6c565b610bc191600491600091611bd1565b610bca91611bfb565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610c56576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c608f82610fe7565b50600101610adf565b505060005b610c7960018561196e565b811015610d35576000888883818110610c9457610c946118ae565b9050602002810190610ca69190611981565b610cb79060808101906060016119bf565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d2c57858281518110610cfe57610cfe6118ae565b6020026020010151610d0f826108c6565b610d19919061196e565b92508215610d2c57610d2c818885610891565b50600101610c6e565b505050610e16565b8760005b81811015610e1357368b8b83818110610d5c57610d5c6118ae565b9050602002810190610d6e9190611981565b9050610d8361031a60608301604084016119bf565b80610d9c5750610d9c610b3a60408301602084016119bf565b8015610db35750610db3610b3a60208301836119bf565b8015610dca5750610dca610bb260a0830183611b6c565b610e00576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e0a8d82610fe7565b50600101610d41565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e6f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e8f73ffffffffffffffffffffffffffffffffffffffff831682611264565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216610ee0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108b673ffffffffffffffffffffffffffffffffffffffff84168383611280565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b80600003610f70576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610fc55780341015610e8f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e8f73ffffffffffffffffffffffffffffffffffffffff83163330846112cf565b610fff610ff760208301836119bf565b6017903b1190565b611035576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611075576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061108a61031a60608501604086016119bf565b61109557600061109b565b82608001355b905060006110b76110b260808601606087016119bf565b6108c6565b9050816000036110ee576110ee6110d460608601604087016119bf565b6110e460408701602088016119bf565b866080013561132c565b6000806110fe60208701876119bf565b73ffffffffffffffffffffffffffffffffffffffff168461112260a0890189611b6c565b604051611130929190611c41565b60006040518083038185875af1925050503d806000811461116d576040519150601f19603f3d011682016040523d82523d6000602084013e611172565b606091505b5091509150816111855761118581611358565b600061119a6110b26080890160608a016119bf565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886111cb60208a018a6119bf565b6111db60608b0160408c016119bf565b6111eb60808c0160608d016119bf565b8b608001358987116111fd5786611207565b6112078a8861196e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b60003860003884865af1610e8f5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166112c5576390b8ec186000526004601cfd5b6000603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661131e57637939f4246000526004601cfd5b600060605260405250505050565b6108b68383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611362565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff84161561148b5773ffffffffffffffffffffffffffffffffffffffff83166113cb576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611440573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114649190611c51565b101561148b5761148b73ffffffffffffffffffffffffffffffffffffffff85168483611491565b50505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166112c55760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166112c557633e3f8f736000526004601cfd5b60008083601f84011261152d57600080fd5b50813567ffffffffffffffff81111561154557600080fd5b6020830191508360208260051b850101111561156057600080fd5b9250929050565b6000806020838503121561157a57600080fd5b823567ffffffffffffffff81111561159157600080fd5b61159d8582860161151b565b90969095509350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156115fc576115fc6115a9565b60405290565b600082601f83011261161357600080fd5b813567ffffffffffffffff8082111561162e5761162e6115a9565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611674576116746115a9565b8160405283815286602085880101111561168d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146116d157600080fd5b919050565b803580151581146116d157600080fd5b600061014082840312156116f957600080fd5b6117016115d8565b905081358152602082013567ffffffffffffffff8082111561172257600080fd5b61172e85838601611602565b6020840152604084013591508082111561174757600080fd5b5061175484828501611602565b604083015250611766606083016116ad565b6060820152611777608083016116ad565b608082015261178860a083016116ad565b60a082015260c082013560c082015260e082013560e08201526101006117af8184016116d6565b908201526101206117c18382016116d6565b9082015292915050565b6000604082840312156117dd57600080fd5b50919050565b600080600080608085870312156117f957600080fd5b843567ffffffffffffffff8082111561181157600080fd5b61181d888389016116e6565b9550602087013591508082111561183357600080fd5b506118408782880161151b565b9094509250611854905086604087016117cb565b905092959194509250565b6000806060838503121561187257600080fd5b823567ffffffffffffffff81111561188957600080fd5b611895858286016116e6565b9250506118a584602085016117cb565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156118ef57600080fd5b813560ff8116811461190057600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361196757611967611907565b5060010190565b8181038181111561090b5761090b611907565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126119b557600080fd5b9190910192915050565b6000602082840312156119d157600080fd5b611900826116ad565b6000815180845260005b81811015611a00576020818501810151868301820152016119e4565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152611a676101608501836119da565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611aa283826119da565b9250506060850151611acc608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611b3f8187018315159052565b90950151151593019290925250919050565b600060208284031215611b6357600080fd5b611900826116d6565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ba157600080fd5b83018035915067ffffffffffffffff821115611bbc57600080fd5b60200191503681900382131561156057600080fd5b60008085851115611be157600080fd5b83861115611bee57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156101c75760049490940360031b84901b1690921692915050565b8183823760009101908152919050565b600060208284031215611c6357600080fd5b505191905056fea2646970667358221220ac4b67a96289a61e5f4917ce47d6c55e550df5030fdfc24abe4049f9d4560fba64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gasZipRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "GAS_ZIP_ROUTER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGasZip";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "NON_EVM_ADDRESS";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDestinationChainsValue";
        readonly inputs: readonly [{
            readonly name: "_chainIds";
            readonly type: "uint8[]";
            readonly internalType: "uint8[]";
        }];
        readonly outputs: readonly [{
            readonly name: "destinationChains";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGasZip";
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
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGasZip";
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
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
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
        readonly name: "OnlyNativeAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TooManyChainIds";
        readonly inputs: readonly [];
    }];
    static createInterface(): GasZipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasZipFacet;
}
export {};
