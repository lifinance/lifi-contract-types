import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GasZipFacet, GasZipFacetInterface } from "../GasZipFacet";
declare type GasZipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405162001dbd38038062001dbd83398101604081905261003191610069565b6001600160a01b038116610058576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610099565b60006020828403121561007b57600080fd5b81516001600160a01b038116811461009257600080fd5b9392505050565b608051611d02620000bb60003960008181607101526107e60152611d026000f3fe60806040526004361061005a5760003560e01c8063606326ff11610043578063606326ff146100eb578063b49d391d14610100578063fc5f10031461012857600080fd5b8063194c869f1461005f57806346fd98e2146100bd575b600080fd5b34801561006b57600080fd5b506100937f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100c957600080fd5b506100dd6100d83660046115c9565b61013b565b6040519081526020016100b4565b6100fe6100f9366004611845565b6101cf565b005b34801561010c57600080fd5b506100937311f111f111f111f111f111f111f111f111f111f181565b6100fe6101363660046118c1565b6103bd565b6000816020811115610179576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156101c75784848281811061019657610196611910565b90506020020160208101906101ab919061193f565b60ff16601084901b179250806101c090611998565b905061017c565b505092915050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161024a576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061025b34476119d0565b90508680610100015161029a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156102d8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61033488886102e86001826119d0565b8181106102f7576102f7611910565b905060200281019061030991906119e3565b61031a906080810190606001611a21565b73ffffffffffffffffffffffffffffffffffffffff161590565b61036a576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61037f89600001518a60c001518a8a3361055c565b60c08a015261038e89876106a4565b50479050818111156103af576103af6000846103aa85856119d0565b610892565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610438576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561010083015183901561047b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83806101200151156104b9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608085015173ffffffffffffffffffffffffffffffffffffffff161561050b576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8460c001513414610548576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055285856106a4565b5050600090555050565b600082808203610598576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856105a76001856119d0565b8181106105b6576105b6611910565b90506020028101906105c891906119e3565b6105d9906080810190606001611a21565b905060006105e6826108c8565b905073ffffffffffffffffffffffffffffffffffffffff82166106105761060d34826119d0565b90505b600061061c8888610913565b90506106288888610a1f565b6106358a89898985610a8c565b600082610641856108c8565b61064b91906119d0565b905089811015610696576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b80356106dc576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11480159061073457508160a0015160601b6bffffffffffffffffffffffff1916816000013514155b1561076b576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e00151036107a8576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08201516040517fc9630cb000000000000000000000000000000000000000000000000000000000815260208301356004820152823560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163c9630cb0916044016000604051808303818588803b15801561083e57600080fd5b505af1158015610852573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108869190611aa0565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108be576108b9838383610e24565b505050565b6108b98282610e92565b600073ffffffffffffffffffffffffffffffffffffffff82161561090b5761090673ffffffffffffffffffffffffffffffffffffffff831630610f03565b61090d565b475b92915050565b60608160008167ffffffffffffffff8111156109315761093161160b565b60405190808252806020026020018201604052801561095a578160200160208202803683370190505b5090506000805b83811015610a145786868281811061097b5761097b611910565b905060200281019061098d91906119e3565b61099e906080810190606001611a21565b91506109a9826108c8565b8382815181106109bb576109bb611910565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a0c57348382815181106109f4576109f4611910565b60200260200101818151610a0891906119d0565b9052505b600101610961565b509095945050505050565b60005b818110156108b95736838383818110610a3d57610a3d611910565b9050602002810190610a4f91906119e3565b9050610a6160e0820160c08301611bb3565b15610a8357610a83610a796060830160408401611a21565b8260800135610f38565b50600101610a22565b838383838260018114610d3f5760008585610aa86001856119d0565b818110610ab757610ab7611910565b9050602002810190610ac991906119e3565b610ada906080810190606001611a21565b9050600089815b81811015610c6b57368d8d83818110610afc57610afc611910565b9050602002810190610b0e91906119e3565b9050610b2361031a6060830160408401611a21565b80610b865750610b86610b3c6040830160208401611a21565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610b9d5750610b9d610b3c6020830183611a21565b8015610c225750610c22610bb460a0830183611bce565b610bc391600491600091611c33565b610bcc91611c5d565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610c58576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c628f82610fe9565b50600101610ae1565b505060005b610c7b6001856119d0565b811015610d37576000888883818110610c9657610c96611910565b9050602002810190610ca891906119e3565b610cb9906080810190606001611a21565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d2e57858281518110610d0057610d00611910565b6020026020010151610d11826108c8565b610d1b91906119d0565b92508215610d2e57610d2e818885610892565b50600101610c70565b505050610e18565b8760005b81811015610e1557368b8b83818110610d5e57610d5e611910565b9050602002810190610d7091906119e3565b9050610d8561031a6060830160408401611a21565b80610d9e5750610d9e610b3c6040830160208401611a21565b8015610db55750610db5610b3c6020830183611a21565b8015610dcc5750610dcc610bb460a0830183611bce565b610e02576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e0c8d82610fe9565b50600101610d43565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e71576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108b973ffffffffffffffffffffffffffffffffffffffff841683836112c6565b73ffffffffffffffffffffffffffffffffffffffff8216610edf576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610eff73ffffffffffffffffffffffffffffffffffffffff831682611315565b5050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b80600003610f72576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610fc75780341015610eff576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610eff73ffffffffffffffffffffffffffffffffffffffff8316333084611331565b610ffe610ff96020830183611a21565b61138e565b611034576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611074576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061108961031a6060850160408601611a21565b61109457600061109a565b82608001355b905060006110b66110b16060860160408701611a21565b6108c8565b905060006110cd6110b16080870160608801611a21565b905082600003611104576111046110ea6060870160408801611a21565b6110fa6040880160208901611a21565b87608001356113aa565b846080013582101561114f576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161068d565b60008061115f6020880188611a21565b73ffffffffffffffffffffffffffffffffffffffff168561118360a08a018a611bce565b604051611191929190611ca3565b60006040518083038185875af1925050503d80600081146111ce576040519150601f19603f3d011682016040523d82523d6000602084013e6111d3565b606091505b5091509150816111e6576111e6816113d6565b60006111fb6110b160808a0160608b01611a21565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961122c60208b018b611a21565b61123c60608c0160408d01611a21565b61124c60808d0160608e01611a21565b8c6080013589871161125e5786611268565b6112688a886119d0565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d15600160005114171661130b576390b8ec186000526004601cfd5b6000603452505050565b60003860003884865af1610eff5763b12d13eb6000526004601cfd5b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661138057637939f4246000526004601cfd5b600060605260405250505050565b6000813f8181158015906113a25750808214155b949350505050565b6108b98383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6113e0565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff831661142d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156114a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114c69190611cb3565b10156114ed576114ed73ffffffffffffffffffffffffffffffffffffffff851684836114f3565b50505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d15600160005114171661130b5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661130b57633e3f8f736000526004601cfd5b60008083601f84011261158f57600080fd5b50813567ffffffffffffffff8111156115a757600080fd5b6020830191508360208260051b85010111156115c257600080fd5b9250929050565b600080602083850312156115dc57600080fd5b823567ffffffffffffffff8111156115f357600080fd5b6115ff8582860161157d565b90969095509350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561165e5761165e61160b565b60405290565b600082601f83011261167557600080fd5b813567ffffffffffffffff808211156116905761169061160b565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156116d6576116d661160b565b816040528381528660208588010111156116ef57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461173357600080fd5b919050565b8035801515811461173357600080fd5b6000610140828403121561175b57600080fd5b61176361163a565b905081358152602082013567ffffffffffffffff8082111561178457600080fd5b61179085838601611664565b602084015260408401359150808211156117a957600080fd5b506117b684828501611664565b6040830152506117c86060830161170f565b60608201526117d96080830161170f565b60808201526117ea60a0830161170f565b60a082015260c082013560c082015260e082013560e0820152610100611811818401611738565b90820152610120611823838201611738565b9082015292915050565b60006040828403121561183f57600080fd5b50919050565b6000806000806080858703121561185b57600080fd5b843567ffffffffffffffff8082111561187357600080fd5b61187f88838901611748565b9550602087013591508082111561189557600080fd5b506118a28782880161157d565b90945092506118b69050866040870161182d565b905092959194509250565b600080606083850312156118d457600080fd5b823567ffffffffffffffff8111156118eb57600080fd5b6118f785828601611748565b925050611907846020850161182d565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561195157600080fd5b813560ff8116811461196257600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036119c9576119c9611969565b5060010190565b8181038181111561090d5761090d611969565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611a1757600080fd5b9190910192915050565b600060208284031215611a3357600080fd5b6119628261170f565b6000815180845260005b81811015611a6257602081850181015186830182015201611a46565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152611ac9610160850183611a3c565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611b048382611a3c565b9250506060850151611b2e608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611ba18187018315159052565b90950151151593019290925250919050565b600060208284031215611bc557600080fd5b61196282611738565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611c0357600080fd5b83018035915067ffffffffffffffff821115611c1e57600080fd5b6020019150368190038213156115c257600080fd5b60008085851115611c4357600080fd5b83861115611c5057600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156101c75760049490940360031b84901b1690921692915050565b8183823760009101908152919050565b600060208284031215611cc557600080fd5b505191905056fea264697066735822122069cf9644e7adb0518db91dda40fa251291255b247ba3a986ada1f7cab832baf664736f6c63430008110033";
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
