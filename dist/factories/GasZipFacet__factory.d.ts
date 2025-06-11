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
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051611cb9380380611cb9833981016040819052602b916061565b6001600160a01b0381166051576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b608051611c0f6100aa5f395f8181606d01526107cc0152611c0f5ff3fe608060405260043610610058575f3560e01c8063606326ff11610041578063606326ff146100e6578063b49d391d146100fb578063fc5f100314610122575f5ffd5b8063194c869f1461005c57806346fd98e2146100b9575b5f5ffd5b348015610067575f5ffd5b5061008f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100c4575f5ffd5b506100d86100d3366004611530565b610135565b6040519081526020016100b0565b6100f96100f43660046117a4565b6101c1565b005b348015610106575f5ffd5b5061008f7311f111f111f111f111f111f111f111f111f111f181565b6100f9610130366004611820565b6103ab565b5f816010811115610172576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b818110156101b95784848281811061018e5761018e61186c565b90506020020160208101906101a39190611899565b60ff16601084901b179250806001019050610174565b505092915050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161023c576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61024c34476118c0565b90508680610100015161028b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156102c9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61032588886102d96001826118c0565b8181106102e8576102e861186c565b90506020028101906102fa91906118f8565b61030b906080810190606001611934565b73ffffffffffffffffffffffffffffffffffffffff161590565b61035b576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61036f895f01518a60c001518a8a33610549565b60c08a015261037e898761068b565b504790508181111561039e5761039e5f8461039985856118c0565b610874565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610426576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155610100830151839015610469576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83806101200151156104a7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608085015173ffffffffffffffffffffffffffffffffffffffff16156104f9576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8460c001513414610536576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610540858561068b565b50505f90555050565b5f82808203610584576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856105926001856118c0565b8181106105a1576105a161186c565b90506020028101906105b391906118f8565b6105c4906080810190606001611934565b90505f6105d0826108a9565b905073ffffffffffffffffffffffffffffffffffffffff82166105fa576105f734826118c0565b90505b5f61060588886108f3565b905061061188886109fd565b61061e8a89898985610a69565b5f82610629856108a9565b61063391906118c0565b90508981101561067d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b80356106c3576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11480159061071a57508160a0015160601b6bffffffffffffffffffffffff1916815f013514155b15610751576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e001510361078e576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08201516040517fc9630cb000000000000000000000000000000000000000000000000000000000815260208301356004820152823560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163c9630cb0916044015f604051808303818588803b158015610822575f5ffd5b505af1158015610834573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108689190611999565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831661089e576108998282610d87565b505050565b610899838383610df8565b5f73ffffffffffffffffffffffffffffffffffffffff8216156108eb576108e673ffffffffffffffffffffffffffffffffffffffff831630610e66565b6108ed565b475b92915050565b6060815f8167ffffffffffffffff8111156109105761091061156f565b604051908082528060200260200182016040528015610939578160200160208202803683370190505b5090505f805b838110156109f2578686828181106109595761095961186c565b905060200281019061096b91906118f8565b61097c906080810190606001611934565b9150610987826108a9565b8382815181106109995761099961186c565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166109ea57348382815181106109d2576109d261186c565b602002602001018181516109e691906118c0565b9052505b60010161093f565b509095945050505050565b5f5b818110156108995736838383818110610a1a57610a1a61186c565b9050602002810190610a2c91906118f8565b9050610a3e60e0820160c08301611aac565b15610a6057610a60610a566060830160408401611934565b8260800135610e99565b506001016109ff565b8383838382805f5b81811015610bf857368b8b83818110610a8c57610a8c61186c565b9050602002810190610a9e91906118f8565b9050610ab361030b6060830160408401611934565b80610b155750610b15610acc6040830160208401611934565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610b2c5750610b2c610acc6020830183611934565b8015610baf5750610baf610b4360a0830183611ac5565b610b51916004915f91611b26565b610b5a91611b4d565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610be5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bef8d82610f49565b50600101610a71565b505080600114610d11575f8585610c106001856118c0565b818110610c1f57610c1f61186c565b9050602002810190610c3191906118f8565b610c42906080810190606001611934565b90505f805b610c526001856118c0565b811015610d0d575f888883818110610c6c57610c6c61186c565b9050602002810190610c7e91906118f8565b610c8f906080810190606001611934565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d0457858281518110610cd657610cd661186c565b6020026020010151610ce7826108a9565b610cf191906118c0565b92508215610d0457610d04818885610874565b50600101610c47565b5050505b5f5b81811015610d7a575f868683818110610d2e57610d2e61186c565b9050602002810190610d4091906118f8565b610d51906060810190604001611934565b90505f610d5d826108a9565b90508015610d7057610d70828783610874565b5050600101610d13565b5050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610dd4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610df473ffffffffffffffffffffffffffffffffffffffff8316826111b9565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216610e45576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61089973ffffffffffffffffffffffffffffffffffffffff841683836111d2565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f03610ed2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f275780341015610df4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610df473ffffffffffffffffffffffffffffffffffffffff831633308461121b565b610f5e610f596020830183611934565b611273565b610f94576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610fd3576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610fe761030b6060850160408601611934565b610ff1575f610ff7565b82608001355b90505f61101261100d6080860160608701611934565b6108a9565b9050815f036110485761104861102e6060860160408701611934565b61103e6040870160208801611934565b8660800135611307565b5f806110576020870187611934565b73ffffffffffffffffffffffffffffffffffffffff168461107b60a0890189611ac5565b604051611089929190611bb3565b5f6040518083038185875af1925050503d805f81146110c3576040519150601f19603f3d011682016040523d82523d5f602084013e6110c8565b606091505b5091509150816110db576110db81611333565b5f6110ef61100d6080890160608a01611934565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861112060208a018a611934565b61113060608b0160408c01611934565b61114060808c0160608d01611934565b8b60800135898711611152578661115c565b61115c8a886118c0565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b5f385f3884865af1610df45763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611212576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661126657637939f4245f526004601cfd5b5f60605260405250505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff00000000000000000000000000000000000000000000000000000000008216016112fe57506023015160601c3b151592915050565b5050503b151590565b6108998383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61133d565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156114645773ffffffffffffffffffffffffffffffffffffffff83166113a6576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611419573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061143d9190611bc2565b10156114645761146473ffffffffffffffffffffffffffffffffffffffff8516848361146a565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611212575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661121257633e3f8f735f526004601cfd5b5f5f83601f8401126114f8575f5ffd5b50813567ffffffffffffffff81111561150f575f5ffd5b6020830191508360208260051b8501011115611529575f5ffd5b9250929050565b5f5f60208385031215611541575f5ffd5b823567ffffffffffffffff811115611557575f5ffd5b611563858286016114e8565b90969095509350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156115c0576115c061156f565b60405290565b5f82601f8301126115d5575f5ffd5b813567ffffffffffffffff8111156115ef576115ef61156f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561163c5761163c61156f565b604052818152838201602001851015611653575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611692575f5ffd5b919050565b80358015158114611692575f5ffd5b5f61014082840312156116b7575f5ffd5b6116bf61159c565b823581529050602082013567ffffffffffffffff8111156116de575f5ffd5b6116ea848285016115c6565b602083015250604082013567ffffffffffffffff811115611709575f5ffd5b611715848285016115c6565b6040830152506117276060830161166f565b60608201526117386080830161166f565b608082015261174960a0830161166f565b60a082015260c0828101359082015260e0808301359082015261176f6101008301611697565b6101008201526117826101208301611697565b61012082015292915050565b5f6040828403121561179e575f5ffd5b50919050565b5f5f5f5f608085870312156117b7575f5ffd5b843567ffffffffffffffff8111156117cd575f5ffd5b6117d9878288016116a6565b945050602085013567ffffffffffffffff8111156117f5575f5ffd5b611801878288016114e8565b90945092506118159050866040870161178e565b905092959194509250565b5f5f60608385031215611831575f5ffd5b823567ffffffffffffffff811115611847575f5ffd5b611853858286016116a6565b925050611863846020850161178e565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f602082840312156118a9575f5ffd5b813560ff811681146118b9575f5ffd5b9392505050565b818103818111156108ed577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261192a575f5ffd5b9190910192915050565b5f60208284031215611944575f5ffd5b6118b98261166f565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526119c061016084018261194d565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526119fb828261194d565b9150506060840151611a25608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611a9461012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611abc575f5ffd5b6118b982611697565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611af8575f5ffd5b83018035915067ffffffffffffffff821115611b12575f5ffd5b602001915036819003821315611529575f5ffd5b5f5f85851115611b34575f5ffd5b83861115611b40575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611bac577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611bd2575f5ffd5b505191905056fea264697066735822122019c106297e63c83c8ba1d38c631127fab234570f52eae031be589d03a2509d3064736f6c634300081d0033";
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
