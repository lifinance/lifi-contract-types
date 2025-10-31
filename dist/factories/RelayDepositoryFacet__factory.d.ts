import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { RelayDepositoryFacet, RelayDepositoryFacetInterface } from "../RelayDepositoryFacet";
type RelayDepositoryFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RelayDepositoryFacet__factory extends ContractFactory {
    constructor(...args: RelayDepositoryFacetConstructorParams);
    deploy(_relayDepository: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<RelayDepositoryFacet>;
    getDeployTransaction(_relayDepository: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): RelayDepositoryFacet;
    connect(signer: Signer): RelayDepositoryFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051611d39380380611d3983398101604081905261002e91610066565b6001600160a01b03811661005557604051631c49f4d160e01b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b608051611c7a6100bf5f395f81816070015281816106780152818161073f015261077f0152611c7a5ff3fe608060405260043610610033575f3560e01c8063092e8fa414610037578063a3443faa1461004c578063b94289bb1461005f575b5f5ffd5b61004a6100453660046115c8565b6100bb565b005b61004a61005a366004611838565b610303565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61014634476118e5565b90506101518561191d565b60a081015173ffffffffffffffffffffffffffffffffffffffff166101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102258661191d565b80610100015115610262576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61026b8761191d565b806101200151156102a8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102c56102bb60a08a0160808b01611928565b8960c0013561052b565b6102d76102d18961191d565b886105df565b5047915050818111156102f8576102f85f846102f385856118e5565b610888565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161037e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61038e34476118e5565b9050868061010001516103cd576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561040b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861042e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610465576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104a2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104df576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104f38a5f01518b60c001518b8b336108bd565b60c08b01526105028a886105df565b50479150508181111561051e5761051e5f846102f385856118e5565b50505f9091555050505050565b805f03610564576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105bd57803410156105b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6105b973ffffffffffffffffffffffffffffffffffffffff83163330846109ff565b5f6105f06040830160208401611928565b73ffffffffffffffffffffffffffffffffffffffff160361063d576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff166107355760c082015173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906349290c1c906106af6040850160208601611928565b60405160e084901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9091166004820152843560248201526044015f604051808303818588803b158015610719575f5ffd5b505af115801561072b573d5f5f3e3d5ffd5b505050505061084d565b61076882608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610a57565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663e80179526107b46040840160208501611928565b608085015160c086015160405160e085901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff93841660048201529290911660248301526044820152833560648201526084015f604051808303815f87803b158015610836575f5ffd5b505af1158015610848573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161087c9190611994565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166108b2576108ad8282610a83565b505050565b6108ad838383610af0565b5f828082036108f8576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856109066001856118e5565b81811061091557610915611aa7565b90506020028101906109279190611ad4565b610938906080810190606001611928565b90505f61094482610b5e565b905073ffffffffffffffffffffffffffffffffffffffff821661096e5761096b34826118e5565b90505b5f6109798888610ba8565b90506109858888610cb2565b6109928a89898985610d1e565b5f8261099d85610b5e565b6109a791906118e5565b9050898110156109f1576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610a4a57637939f4245f526004601cfd5b5f60605260405250505050565b6108ad8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610ede565b73ffffffffffffffffffffffffffffffffffffffff8216610ad0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105b973ffffffffffffffffffffffffffffffffffffffff83168261100b565b73ffffffffffffffffffffffffffffffffffffffff8216610b3d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108ad73ffffffffffffffffffffffffffffffffffffffff84168383611024565b5f73ffffffffffffffffffffffffffffffffffffffff821615610ba057610b9b73ffffffffffffffffffffffffffffffffffffffff83163061106d565b610ba2565b475b92915050565b6060815f8167ffffffffffffffff811115610bc557610bc5611619565b604051908082528060200260200182016040528015610bee578160200160208202803683370190505b5090505f5f5b83811015610ca757868682818110610c0e57610c0e611aa7565b9050602002810190610c209190611ad4565b610c31906080810190606001611928565b9150610c3c82610b5e565b838281518110610c4e57610c4e611aa7565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c9f5734838281518110610c8757610c87611aa7565b60200260200101818151610c9b91906118e5565b9052505b600101610bf4565b509095945050505050565b5f5b818110156108ad5736838383818110610ccf57610ccf611aa7565b9050602002810190610ce19190611ad4565b9050610cf360e0820160c08301611b10565b15610d1557610d15610d0b6060830160408401611928565b826080013561052b565b50600101610cb4565b83838383825f5b81811015610ec457368a8a83818110610d4057610d40611aa7565b9050602002810190610d529190611ad4565b9050610d81610d676060830160408401611928565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610de25750610de2610d9a6040830160208401611928565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f216020526040902054151590565b8015610df95750610df9610d9a6020830183611928565b8015610e7b5750610e7b610e1060a0830183611b29565b610e1e916004915f91611b91565b610e2791611bb8565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f226020526040902054151590565b610eb1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ebb8c826110a0565b50600101610d25565b5050610ed3848484845f611313565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156110055773ffffffffffffffffffffffffffffffffffffffff8316610f47576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610fba573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fde9190611c1e565b10156110055761100573ffffffffffffffffffffffffffffffffffffffff8516848361152a565b50505050565b5f385f3884865af16105b95763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611064576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6110b86110b06020830183611928565b6017903b1190565b6110ee576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361112d576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611141610d676060850160408601611928565b61114b575f611151565b82608001355b90505f61116c6111676080860160608701611928565b610b5e565b9050815f036111a2576111a26111886060860160408701611928565b6111986040870160208801611928565b8660800135610a57565b5f806111b16020870187611928565b73ffffffffffffffffffffffffffffffffffffffff16846111d560a0890189611b29565b6040516111e3929190611c35565b5f6040518083038185875af1925050503d805f811461121d576040519150601f19603f3d011682016040523d82523d5f602084013e611222565b606091505b50915091508161123557611235816115a8565b5f6112496111676080890160608a01611928565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861127a60208a018a611928565b61128a60608b0160408c01611928565b61129a60808c0160608d01611928565b8b608001358987116112ac57866112b6565b6112b68a886118e5565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826113226001826118e5565b81811061133157611331611aa7565b90506020028101906113439190611ad4565b611354906080810190606001611928565b90505f5f5f5f5f5f5f5b8881101561151a5761137160018a6118e5565b81108015611380575088600114155b1561145b578d8d8281811061139757611397611aa7565b90506020028101906113a99190611ad4565b6113ba906080810190606001611928565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461145b578a818151811061140157611401611aa7565b602002602001015161141287610b5e565b61141c91906118e5565b965073ffffffffffffffffffffffffffffffffffffffff861615611440575f611442565b895b93508387111561145b5761145b868d6102f3878b6118e5565b8d8d8281811061146d5761146d611aa7565b905060200281019061147f9190611ad4565b611490906060810190604001611928565b945061149b85610b5e565b925073ffffffffffffffffffffffffffffffffffffffff8516156114bf575f6114c1565b895b915081831180156114fe57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561151257611512858d6102f385876118e5565b60010161135e565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611064575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661106457633e3f8f735f526004601cfd5b8051602082018181fd5b5f604082840312156115c2575f5ffd5b50919050565b5f5f606083850312156115d9575f5ffd5b823567ffffffffffffffff8111156115ef575f5ffd5b83016101408186031215611601575f5ffd5b915061161084602085016115b2565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561166a5761166a611619565b60405290565b5f82601f83011261167f575f5ffd5b813567ffffffffffffffff81111561169957611699611619565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156116e6576116e6611619565b6040528181528382016020018510156116fd575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461173c575f5ffd5b919050565b8035801515811461173c575f5ffd5b5f6101408284031215611761575f5ffd5b611769611646565b823581529050602082013567ffffffffffffffff811115611788575f5ffd5b61179484828501611670565b602083015250604082013567ffffffffffffffff8111156117b3575f5ffd5b6117bf84828501611670565b6040830152506117d160608301611719565b60608201526117e260808301611719565b60808201526117f360a08301611719565b60a082015260c0828101359082015260e080830135908201526118196101008301611741565b61010082015261182c6101208301611741565b61012082015292915050565b5f5f5f5f6080858703121561184b575f5ffd5b843567ffffffffffffffff811115611861575f5ffd5b61186d87828801611750565b945050602085013567ffffffffffffffff811115611889575f5ffd5b8501601f81018713611899575f5ffd5b803567ffffffffffffffff8111156118af575f5ffd5b8760208260051b84010111156118c3575f5ffd5b602091909101935091506118da86604087016115b2565b905092959194509250565b81810381811115610ba2577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610ba23683611750565b5f60208284031215611938575f5ffd5b61194182611719565b9392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526119bb610160840182611948565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526119f68282611948565b9150506060840151611a20608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611a8f61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611b06575f5ffd5b9190910192915050565b5f60208284031215611b20575f5ffd5b61194182611741565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b5c575f5ffd5b83018035915067ffffffffffffffff821115611b76575f5ffd5b602001915036819003821315611b8a575f5ffd5b9250929050565b5f5f85851115611b9f575f5ffd5b83861115611bab575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611c17577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611c2e575f5ffd5b5051919050565b818382375f910190815291905056fea2646970667358221220d69d78dc92693ee256f1bdafdd18fd6a79d8312e4dbf9ac33d59ccfaf0cf439664736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_relayDepository";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "RELAY_DEPOSITORY";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaRelayDepository";
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
            readonly name: "_relayDepositoryData";
            readonly type: "tuple";
            readonly internalType: "struct RelayDepositoryFacet.RelayDepositoryData";
            readonly components: readonly [{
                readonly name: "orderId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositorAddress";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaRelayDepository";
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
            readonly name: "_relayDepositoryData";
            readonly type: "tuple";
            readonly internalType: "struct RelayDepositoryFacet.RelayDepositoryData";
            readonly components: readonly [{
                readonly name: "orderId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositorAddress";
                readonly type: "address";
                readonly internalType: "address";
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
    static createInterface(): RelayDepositoryFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RelayDepositoryFacet;
}
export {};
