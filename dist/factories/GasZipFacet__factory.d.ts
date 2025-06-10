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
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405162001e5238038062001e5283398101604081905261003191610069565b6001600160a01b038116610058576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610099565b60006020828403121561007b57600080fd5b81516001600160a01b038116811461009257600080fd5b9392505050565b608051611d97620000bb60003960008181607101526107e60152611d976000f3fe60806040526004361061005a5760003560e01c8063606326ff11610043578063606326ff146100eb578063b49d391d14610100578063fc5f10031461012857600080fd5b8063194c869f1461005f57806346fd98e2146100bd575b600080fd5b34801561006b57600080fd5b506100937f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100c957600080fd5b506100dd6100d836600461165e565b61013b565b6040519081526020016100b4565b6100fe6100f93660046118da565b6101cf565b005b34801561010c57600080fd5b506100937311f111f111f111f111f111f111f111f111f111f181565b6100fe610136366004611956565b6103bd565b6000816010811115610179576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156101c757848482818110610196576101966119a5565b90506020020160208101906101ab91906119d4565b60ff16601084901b179250806101c090611a2d565b905061017c565b505092915050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161024a576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061025b3447611a65565b90508680610100015161029a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156102d8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61033488886102e8600182611a65565b8181106102f7576102f76119a5565b90506020028101906103099190611a78565b61031a906080810190606001611ab6565b73ffffffffffffffffffffffffffffffffffffffff161590565b61036a576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61037f89600001518a60c001518a8a3361055c565b60c08a015261038e89876106a4565b50479050818111156103af576103af6000846103aa8585611a65565b610892565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610438576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561010083015183901561047b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83806101200151156104b9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608085015173ffffffffffffffffffffffffffffffffffffffff161561050b576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8460c001513414610548576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055285856106a4565b5050600090555050565b600082808203610598576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856105a7600185611a65565b8181106105b6576105b66119a5565b90506020028101906105c89190611a78565b6105d9906080810190606001611ab6565b905060006105e6826108c7565b905073ffffffffffffffffffffffffffffffffffffffff82166106105761060d3482611a65565b90505b600061061c8888610912565b90506106288888610a1e565b6106358a89898985610a8b565b600082610641856108c7565b61064b9190611a65565b905089811015610696576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b80356106dc576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11480159061073457508160a0015160601b6bffffffffffffffffffffffff1916816000013514155b1561076b576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e00151036107a8576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08201516040517fc9630cb000000000000000000000000000000000000000000000000000000000815260208301356004820152823560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163c9630cb0916044016000604051808303818588803b15801561083e57600080fd5b505af1158015610852573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108869190611b35565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166108bc576108b78282610e23565b505050565b6108b7838383610e94565b600073ffffffffffffffffffffffffffffffffffffffff82161561090a5761090573ffffffffffffffffffffffffffffffffffffffff831630610f02565b61090c565b475b92915050565b60608160008167ffffffffffffffff811115610930576109306116a0565b604051908082528060200260200182016040528015610959578160200160208202803683370190505b5090506000805b83811015610a135786868281811061097a5761097a6119a5565b905060200281019061098c9190611a78565b61099d906080810190606001611ab6565b91506109a8826108c7565b8382815181106109ba576109ba6119a5565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a0b57348382815181106109f3576109f36119a5565b60200260200101818151610a079190611a65565b9052505b600101610960565b509095945050505050565b60005b818110156108b75736838383818110610a3c57610a3c6119a5565b9050602002810190610a4e9190611a78565b9050610a6060e0820160c08301611c48565b15610a8257610a82610a786060830160408401611ab6565b8260800135610f37565b50600101610a21565b838383838260018114610d3e5760008585610aa7600185611a65565b818110610ab657610ab66119a5565b9050602002810190610ac89190611a78565b610ad9906080810190606001611ab6565b9050600089815b81811015610c6a57368d8d83818110610afb57610afb6119a5565b9050602002810190610b0d9190611a78565b9050610b2261031a6060830160408401611ab6565b80610b855750610b85610b3b6040830160208401611ab6565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610b9c5750610b9c610b3b6020830183611ab6565b8015610c215750610c21610bb360a0830183611c63565b610bc291600491600091611cc8565b610bcb91611cf2565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610c57576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c618f82610fe8565b50600101610ae0565b505060005b610c7a600185611a65565b811015610d36576000888883818110610c9557610c956119a5565b9050602002810190610ca79190611a78565b610cb8906080810190606001611ab6565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d2d57858281518110610cff57610cff6119a5565b6020026020010151610d10826108c7565b610d1a9190611a65565b92508215610d2d57610d2d818885610892565b50600101610c6f565b505050610e17565b8760005b81811015610e1457368b8b83818110610d5d57610d5d6119a5565b9050602002810190610d6f9190611a78565b9050610d8461031a6060830160408401611ab6565b80610d9d5750610d9d610b3b6040830160208401611ab6565b8015610db45750610db4610b3b6020830183611ab6565b8015610dcb5750610dcb610bb360a0830183611c63565b610e01576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e0b8d82610fe8565b50600101610d42565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e70576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e9073ffffffffffffffffffffffffffffffffffffffff8316826112c5565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216610ee1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108b773ffffffffffffffffffffffffffffffffffffffff841683836112e1565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b80600003610f71576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610fc65780341015610e90576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e9073ffffffffffffffffffffffffffffffffffffffff8316333084611330565b610ffd610ff86020830183611ab6565b61138d565b611033576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611073576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061108861031a6060850160408601611ab6565b611093576000611099565b82608001355b905060006110b56110b06060860160408701611ab6565b6108c7565b905060006110cc6110b06080870160608801611ab6565b905082600003611103576111036110e96060870160408801611ab6565b6110f96040880160208901611ab6565b8760800135611423565b846080013582101561114e576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161068d565b60008061115e6020880188611ab6565b73ffffffffffffffffffffffffffffffffffffffff168561118260a08a018a611c63565b604051611190929190611d38565b60006040518083038185875af1925050503d80600081146111cd576040519150601f19603f3d011682016040523d82523d6000602084013e6111d2565b606091505b5091509150816111e5576111e58161144f565b60006111fa6110b060808a0160608b01611ab6565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961122b60208b018b611ab6565b61123b60608c0160408d01611ab6565b61124b60808d0160608e01611ab6565b8c6080013589871161125d5786611267565b6112678a88611a65565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60003860003884865af1610e905763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611326576390b8ec186000526004601cfd5b6000603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661137f57637939f4246000526004601cfd5b600060605260405250505050565b6040805160178082528183019092526000918291906020820181803683370190505090506017600060208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161141a57506023015160601c3b151592915050565b5050503b151590565b6108b78383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611459565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156115825773ffffffffffffffffffffffffffffffffffffffff83166114c2576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611537573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155b9190611d48565b10156115825761158273ffffffffffffffffffffffffffffffffffffffff85168483611588565b50505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166113265760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661132657633e3f8f736000526004601cfd5b60008083601f84011261162457600080fd5b50813567ffffffffffffffff81111561163c57600080fd5b6020830191508360208260051b850101111561165757600080fd5b9250929050565b6000806020838503121561167157600080fd5b823567ffffffffffffffff81111561168857600080fd5b61169485828601611612565b90969095509350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156116f3576116f36116a0565b60405290565b600082601f83011261170a57600080fd5b813567ffffffffffffffff80821115611725576117256116a0565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561176b5761176b6116a0565b8160405283815286602085880101111561178457600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146117c857600080fd5b919050565b803580151581146117c857600080fd5b600061014082840312156117f057600080fd5b6117f86116cf565b905081358152602082013567ffffffffffffffff8082111561181957600080fd5b611825858386016116f9565b6020840152604084013591508082111561183e57600080fd5b5061184b848285016116f9565b60408301525061185d606083016117a4565b606082015261186e608083016117a4565b608082015261187f60a083016117a4565b60a082015260c082013560c082015260e082013560e08201526101006118a68184016117cd565b908201526101206118b88382016117cd565b9082015292915050565b6000604082840312156118d457600080fd5b50919050565b600080600080608085870312156118f057600080fd5b843567ffffffffffffffff8082111561190857600080fd5b611914888389016117dd565b9550602087013591508082111561192a57600080fd5b5061193787828801611612565b909450925061194b905086604087016118c2565b905092959194509250565b6000806060838503121561196957600080fd5b823567ffffffffffffffff81111561198057600080fd5b61198c858286016117dd565b92505061199c84602085016118c2565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156119e657600080fd5b813560ff811681146119f757600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611a5e57611a5e6119fe565b5060010190565b8181038181111561090c5761090c6119fe565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611aac57600080fd5b9190910192915050565b600060208284031215611ac857600080fd5b6119f7826117a4565b6000815180845260005b81811015611af757602081850181015186830182015201611adb565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152611b5e610160850183611ad1565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611b998382611ad1565b9250506060850151611bc3608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611c368187018315159052565b90950151151593019290925250919050565b600060208284031215611c5a57600080fd5b6119f7826117cd565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611c9857600080fd5b83018035915067ffffffffffffffff821115611cb357600080fd5b60200191503681900382131561165757600080fd5b60008085851115611cd857600080fd5b83861115611ce557600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156101c75760049490940360031b84901b1690921692915050565b8183823760009101908152919050565b600060208284031215611d5a57600080fd5b505191905056fea26469706673582212201f4d38026df5bd6618079d56701331a4b92ca6f3185ab6ae507c9ed10219592c64736f6c63430008110033";
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
