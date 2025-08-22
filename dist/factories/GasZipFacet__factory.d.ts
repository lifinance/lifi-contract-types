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
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051611c5a380380611c5a833981016040819052602b916061565b6001600160a01b0381166051576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b608051611bb06100aa5f395f81816053015261078b0152611bb05ff3fe60806040526004361061003e575f3560e01c8063194c869f1461004257806346fd98e21461009f578063606326ff146100cc578063fc5f1003146100e1575b5f5ffd5b34801561004d575f5ffd5b506100757f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100aa575f5ffd5b506100be6100b93660046114d1565b6100f4565b604051908152602001610096565b6100df6100da366004611745565b610180565b005b6100df6100ef3660046117c1565b61036a565b5f816010811115610131576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b818110156101785784848281811061014d5761014d61180d565b9050602002016020810190610162919061183a565b60ff16601084901b179250806001019050610133565b505092915050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101fb576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61020b3447611861565b90508680610100015161024a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610288576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102e48888610298600182611861565b8181106102a7576102a761180d565b90506020028101906102b99190611899565b6102ca9060808101906060016118d5565b73ffffffffffffffffffffffffffffffffffffffff161590565b61031a576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61032e895f01518a60c001518a8a33610508565b60c08a015261033d898761064a565b504790508181111561035d5761035d5f846103588585611861565b610833565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103e5576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155610100830151839015610428576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8380610120015115610466576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608085015173ffffffffffffffffffffffffffffffffffffffff16156104b8576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8460c0015134146104f5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104ff858561064a565b50505f90555050565b5f82808203610543576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610551600185611861565b8181106105605761056061180d565b90506020028101906105729190611899565b6105839060808101906060016118d5565b90505f61058f82610868565b905073ffffffffffffffffffffffffffffffffffffffff82166105b9576105b63482611861565b90505b5f6105c488886108b2565b90506105d088886109bc565b6105dd8a89898985610a28565b5f826105e885610868565b6105f29190611861565b90508981101561063c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b8035610682576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f1148015906106d957508160a0015160601b6bffffffffffffffffffffffff1916815f013514155b15610710576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e001510361074d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08201516040517fc9630cb000000000000000000000000000000000000000000000000000000000815260208301356004820152823560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163c9630cb0916044015f604051808303818588803b1580156107e1575f5ffd5b505af11580156107f3573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610827919061193a565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831661085d576108588282610db9565b505050565b610858838383610e2a565b5f73ffffffffffffffffffffffffffffffffffffffff8216156108aa576108a573ffffffffffffffffffffffffffffffffffffffff831630610e98565b6108ac565b475b92915050565b6060815f8167ffffffffffffffff8111156108cf576108cf611510565b6040519080825280602002602001820160405280156108f8578160200160208202803683370190505b5090505f805b838110156109b1578686828181106109185761091861180d565b905060200281019061092a9190611899565b61093b9060808101906060016118d5565b915061094682610868565b8382815181106109585761095861180d565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166109a957348382815181106109915761099161180d565b602002602001018181516109a59190611861565b9052505b6001016108fe565b509095945050505050565b5f5b8181101561085857368383838181106109d9576109d961180d565b90506020028101906109eb9190611899565b90506109fd60e0820160c08301611a4d565b15610a1f57610a1f610a1560608301604084016118d5565b8260800135610ecb565b506001016109be565b838383838260018114610cd5575f8585610a43600185611861565b818110610a5257610a5261180d565b9050602002810190610a649190611899565b610a759060808101906060016118d5565b90505f89815b81811015610c0257368d8d83818110610a9657610a9661180d565b9050602002810190610aa89190611899565b9050610abd6102ca60608301604084016118d5565b80610b1f5750610b1f610ad660408301602084016118d5565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610b365750610b36610ad660208301836118d5565b8015610bb95750610bb9610b4d60a0830183611a66565b610b5b916004915f91611ac7565b610b6491611aee565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610bef576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bf98f82610f7b565b50600101610a7b565b505f90505b610c12600185611861565b811015610ccd575f888883818110610c2c57610c2c61180d565b9050602002810190610c3e9190611899565b610c4f9060808101906060016118d5565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610cc457858281518110610c9657610c9661180d565b6020026020010151610ca782610868565b610cb19190611861565b92508215610cc457610cc4818885610833565b50600101610c07565b505050610dad565b875f5b81811015610daa57368b8b83818110610cf357610cf361180d565b9050602002810190610d059190611899565b9050610d1a6102ca60608301604084016118d5565b80610d335750610d33610ad660408301602084016118d5565b8015610d4a5750610d4a610ad660208301836118d5565b8015610d615750610d61610b4d60a0830183611a66565b610d97576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610da18d82610f7b565b50600101610cd8565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e06576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e2673ffffffffffffffffffffffffffffffffffffffff8316826111ee565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216610e77576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61085873ffffffffffffffffffffffffffffffffffffffff84168383611207565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f03610f04576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f595780341015610e26576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e2673ffffffffffffffffffffffffffffffffffffffff8316333084611250565b610f93610f8b60208301836118d5565b6017903b1190565b610fc9576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611008576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61101c6102ca60608501604086016118d5565b611026575f61102c565b82608001355b90505f61104761104260808601606087016118d5565b610868565b9050815f0361107d5761107d61106360608601604087016118d5565b61107360408701602088016118d5565b86608001356112a8565b5f8061108c60208701876118d5565b73ffffffffffffffffffffffffffffffffffffffff16846110b060a0890189611a66565b6040516110be929190611b54565b5f6040518083038185875af1925050503d805f81146110f8576040519150601f19603f3d011682016040523d82523d5f602084013e6110fd565b606091505b50915091508161111057611110816112d4565b5f6111246110426080890160608a016118d5565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861115560208a018a6118d5565b61116560608b0160408c016118d5565b61117560808c0160608d016118d5565b8b608001358987116111875786611191565b6111918a88611861565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b5f385f3884865af1610e265763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611247576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661129b57637939f4245f526004601cfd5b5f60605260405250505050565b6108588383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6112de565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156114055773ffffffffffffffffffffffffffffffffffffffff8316611347576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156113ba573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113de9190611b63565b10156114055761140573ffffffffffffffffffffffffffffffffffffffff8516848361140b565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611247575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661124757633e3f8f735f526004601cfd5b5f5f83601f840112611499575f5ffd5b50813567ffffffffffffffff8111156114b0575f5ffd5b6020830191508360208260051b85010111156114ca575f5ffd5b9250929050565b5f5f602083850312156114e2575f5ffd5b823567ffffffffffffffff8111156114f8575f5ffd5b61150485828601611489565b90969095509350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561156157611561611510565b60405290565b5f82601f830112611576575f5ffd5b813567ffffffffffffffff81111561159057611590611510565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156115dd576115dd611510565b6040528181528382016020018510156115f4575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611633575f5ffd5b919050565b80358015158114611633575f5ffd5b5f6101408284031215611658575f5ffd5b61166061153d565b823581529050602082013567ffffffffffffffff81111561167f575f5ffd5b61168b84828501611567565b602083015250604082013567ffffffffffffffff8111156116aa575f5ffd5b6116b684828501611567565b6040830152506116c860608301611610565b60608201526116d960808301611610565b60808201526116ea60a08301611610565b60a082015260c0828101359082015260e080830135908201526117106101008301611638565b6101008201526117236101208301611638565b61012082015292915050565b5f6040828403121561173f575f5ffd5b50919050565b5f5f5f5f60808587031215611758575f5ffd5b843567ffffffffffffffff81111561176e575f5ffd5b61177a87828801611647565b945050602085013567ffffffffffffffff811115611796575f5ffd5b6117a287828801611489565b90945092506117b69050866040870161172f565b905092959194509250565b5f5f606083850312156117d2575f5ffd5b823567ffffffffffffffff8111156117e8575f5ffd5b6117f485828601611647565b925050611804846020850161172f565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f6020828403121561184a575f5ffd5b813560ff8116811461185a575f5ffd5b9392505050565b818103818111156108ac577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126118cb575f5ffd5b9190910192915050565b5f602082840312156118e5575f5ffd5b61185a82611610565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526119616101608401826118ee565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261199c82826118ee565b91505060608401516119c6608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611a3561012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611a5d575f5ffd5b61185a82611638565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611a99575f5ffd5b83018035915067ffffffffffffffff821115611ab3575f5ffd5b6020019150368190038213156114ca575f5ffd5b5f5f85851115611ad5575f5ffd5b83861115611ae1575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611b4d577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611b73575f5ffd5b505191905056fea264697066735822122023e4af904a09ea5a58f89f7159588902fa91f55badc0cc6013d193d8e7544f4164736f6c634300081d0033";
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
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
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
