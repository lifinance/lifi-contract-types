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
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051611c88380380611c88833981016040819052602b916061565b6001600160a01b0381166051576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b608051611bde6100aa5f395f81816053015261078b0152611bde5ff3fe60806040526004361061003e575f3560e01c8063194c869f1461004257806346fd98e21461009f578063606326ff146100cc578063fc5f1003146100e1575b5f5ffd5b34801561004d575f5ffd5b506100757f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100aa575f5ffd5b506100be6100b93660046114ff565b6100f4565b604051908152602001610096565b6100df6100da366004611773565b610180565b005b6100df6100ef3660046117ef565b61036a565b5f816010811115610131576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b818110156101785784848281811061014d5761014d61183b565b90506020020160208101906101629190611868565b60ff16601084901b179250806001019050610133565b505092915050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101fb576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61020b344761188f565b90508680610100015161024a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610288576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102e4888861029860018261188f565b8181106102a7576102a761183b565b90506020028101906102b991906118c7565b6102ca906080810190606001611903565b73ffffffffffffffffffffffffffffffffffffffff161590565b61031a576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61032e895f01518a60c001518a8a33610508565b60c08a015261033d898761064a565b504790508181111561035d5761035d5f84610358858561188f565b610833565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103e5576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155610100830151839015610428576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8380610120015115610466576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608085015173ffffffffffffffffffffffffffffffffffffffff16156104b8576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8460c0015134146104f5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104ff858561064a565b50505f90555050565b5f82808203610543576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561055160018561188f565b8181106105605761056061183b565b905060200281019061057291906118c7565b610583906080810190606001611903565b90505f61058f82610868565b905073ffffffffffffffffffffffffffffffffffffffff82166105b9576105b6348261188f565b90505b5f6105c488886108b2565b90506105d088886109bc565b6105dd8a89898985610a28565b5f826105e885610868565b6105f2919061188f565b90508981101561063c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b8035610682576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f1148015906106d957508160a0015160601b6bffffffffffffffffffffffff1916815f013514155b15610710576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e001510361074d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08201516040517fc9630cb000000000000000000000000000000000000000000000000000000000815260208301356004820152823560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163c9630cb0916044015f604051808303818588803b1580156107e1575f5ffd5b505af11580156107f3573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108279190611968565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831661085d576108588282610bd0565b505050565b610858838383610c41565b5f73ffffffffffffffffffffffffffffffffffffffff8216156108aa576108a573ffffffffffffffffffffffffffffffffffffffff831630610caf565b6108ac565b475b92915050565b6060815f8167ffffffffffffffff8111156108cf576108cf61153e565b6040519080825280602002602001820160405280156108f8578160200160208202803683370190505b5090505f5f5b838110156109b1578686828181106109185761091861183b565b905060200281019061092a91906118c7565b61093b906080810190606001611903565b915061094682610868565b8382815181106109585761095861183b565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166109a957348382815181106109915761099161183b565b602002602001018181516109a5919061188f565b9052505b6001016108fe565b509095945050505050565b5f5b8181101561085857368383838181106109d9576109d961183b565b90506020028101906109eb91906118c7565b90506109fd60e0820160c08301611a7b565b15610a1f57610a1f610a156060830160408401611903565b8260800135610ce2565b506001016109be565b83838383825f5b81811015610bb657368a8a83818110610a4a57610a4a61183b565b9050602002810190610a5c91906118c7565b9050610a716102ca6060830160408401611903565b80610ad35750610ad3610a8a6040830160208401611903565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610aea5750610aea610a8a6020830183611903565b8015610b6d5750610b6d610b0160a0830183611a94565b610b0f916004915f91611af5565b610b1891611b1c565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610ba3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bad8c82610d92565b50600101610a2f565b5050610bc5848484845f611005565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c1d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c3d73ffffffffffffffffffffffffffffffffffffffff83168261121c565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216610c8e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61085873ffffffffffffffffffffffffffffffffffffffff84168383611235565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f03610d1b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d705780341015610c3d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c3d73ffffffffffffffffffffffffffffffffffffffff831633308461127e565b610daa610da26020830183611903565b6017903b1190565b610de0576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610e1f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610e336102ca6060850160408601611903565b610e3d575f610e43565b82608001355b90505f610e5e610e596080860160608701611903565b610868565b9050815f03610e9457610e94610e7a6060860160408701611903565b610e8a6040870160208801611903565b86608001356112d6565b5f80610ea36020870187611903565b73ffffffffffffffffffffffffffffffffffffffff1684610ec760a0890189611a94565b604051610ed5929190611b82565b5f6040518083038185875af1925050503d805f8114610f0f576040519150601f19603f3d011682016040523d82523d5f602084013e610f14565b606091505b509150915081610f2757610f2781611302565b5f610f3b610e596080890160608a01611903565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888610f6c60208a018a611903565b610f7c60608b0160408c01611903565b610f8c60808c0160608d01611903565b8b60800135898711610f9e5786610fa8565b610fa88a8861188f565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261101460018261188f565b8181106110235761102361183b565b905060200281019061103591906118c7565b611046906080810190606001611903565b90505f5f5f5f5f5f5f5b8881101561120c5761106360018a61188f565b81108015611072575088600114155b1561114d578d8d828181106110895761108961183b565b905060200281019061109b91906118c7565b6110ac906080810190606001611903565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461114d578a81815181106110f3576110f361183b565b602002602001015161110487610868565b61110e919061188f565b965073ffffffffffffffffffffffffffffffffffffffff861615611132575f611134565b895b93508387111561114d5761114d868d610358878b61188f565b8d8d8281811061115f5761115f61183b565b905060200281019061117191906118c7565b611182906060810190604001611903565b945061118d85610868565b925073ffffffffffffffffffffffffffffffffffffffff8516156111b1575f6111b3565b895b915081831180156111f057508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561120457611204858d610358858761188f565b600101611050565b5050505050505050505050505050565b5f385f3884865af1610c3d5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611275576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166112c957637939f4245f526004601cfd5b5f60605260405250505050565b6108588383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61130c565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156114335773ffffffffffffffffffffffffffffffffffffffff8316611375576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156113e8573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061140c9190611b91565b10156114335761143373ffffffffffffffffffffffffffffffffffffffff85168483611439565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611275575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661127557633e3f8f735f526004601cfd5b5f5f83601f8401126114c7575f5ffd5b50813567ffffffffffffffff8111156114de575f5ffd5b6020830191508360208260051b85010111156114f8575f5ffd5b9250929050565b5f5f60208385031215611510575f5ffd5b823567ffffffffffffffff811115611526575f5ffd5b611532858286016114b7565b90969095509350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561158f5761158f61153e565b60405290565b5f82601f8301126115a4575f5ffd5b813567ffffffffffffffff8111156115be576115be61153e565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561160b5761160b61153e565b604052818152838201602001851015611622575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611661575f5ffd5b919050565b80358015158114611661575f5ffd5b5f6101408284031215611686575f5ffd5b61168e61156b565b823581529050602082013567ffffffffffffffff8111156116ad575f5ffd5b6116b984828501611595565b602083015250604082013567ffffffffffffffff8111156116d8575f5ffd5b6116e484828501611595565b6040830152506116f66060830161163e565b60608201526117076080830161163e565b608082015261171860a0830161163e565b60a082015260c0828101359082015260e0808301359082015261173e6101008301611666565b6101008201526117516101208301611666565b61012082015292915050565b5f6040828403121561176d575f5ffd5b50919050565b5f5f5f5f60808587031215611786575f5ffd5b843567ffffffffffffffff81111561179c575f5ffd5b6117a887828801611675565b945050602085013567ffffffffffffffff8111156117c4575f5ffd5b6117d0878288016114b7565b90945092506117e49050866040870161175d565b905092959194509250565b5f5f60608385031215611800575f5ffd5b823567ffffffffffffffff811115611816575f5ffd5b61182285828601611675565b925050611832846020850161175d565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215611878575f5ffd5b813560ff81168114611888575f5ffd5b9392505050565b818103818111156108ac577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126118f9575f5ffd5b9190910192915050565b5f60208284031215611913575f5ffd5b6118888261163e565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f6020830151610140604084015261198f61016084018261191c565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526119ca828261191c565b91505060608401516119f4608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611a6361012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611a8b575f5ffd5b61188882611666565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ac7575f5ffd5b83018035915067ffffffffffffffff821115611ae1575f5ffd5b6020019150368190038213156114f8575f5ffd5b5f5f85851115611b03575f5ffd5b83861115611b0f575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611b7b577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611ba1575f5ffd5b505191905056fea2646970667358221220fe24c12839b223339ff39cfa861fb4f0fedbcea4cc63b7d26f508585b171dfe964736f6c634300081d0033";
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
