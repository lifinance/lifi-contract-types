import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CelerCircleBridgeFacet, CelerCircleBridgeFacetInterface } from "../CelerCircleBridgeFacet";
declare type CelerCircleBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CelerCircleBridgeFacet__factory extends ContractFactory {
    constructor(...args: CelerCircleBridgeFacetConstructorParams);
    deploy(_circleBridgeProxy: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CelerCircleBridgeFacet>;
    getDeployTransaction(_circleBridgeProxy: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CelerCircleBridgeFacet;
    connect(signer: Signer): CelerCircleBridgeFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b50604051611e18380380611e1883398101604081905261002e9161005c565b6001600160a01b039182166080521660a052610094565b6001600160a01b0381168114610059575f5ffd5b50565b5f5f6040838503121561006d575f5ffd5b825161007881610045565b602084015190925061008981610045565b809150509250929050565b60805160a051611d406100d85f395f818161023f015281816105020152818161058f015281816107df015261089601525f818161080001526108be0152611d405ff3fe608060405260043610610028575f3560e01c80638fab06631461002c578063bab657d814610041575b5f5ffd5b61003f61003a3660046118b1565b610060565b005b34801561004c575f5ffd5b5061003f61005b36600461194c565b610318565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100db576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100eb344761198b565b90508580610100015161012a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610168576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761018b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101c2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101ff576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361023c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b887f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102c7576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102db8b5f01518c60c001518c8c336105d5565b60c08c01526102e98b610718565b504793505050508181111561030c5761030c5f84610307858561198b565b610963565b50505f90915550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610393576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556103a0826119c3565b806101000151156103dd576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103e6836119c3565b80610120015115610423576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61042c846119c3565b60a081015173ffffffffffffffffffffffffffffffffffffffff1661047d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104ba576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104f7576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610500856119c3565b7f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff161461058a576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105b87f00000000000000000000000000000000000000000000000000000000000000008860c00135610998565b6105c96105c4886119c3565b610718565b50505f90935550505050565b5f82808203610610576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561061e60018561198b565b81811061062d5761062d6119ce565b905060200281019061063f91906119fb565b610650906080810190606001611a37565b90505f61065c82610a4c565b905073ffffffffffffffffffffffffffffffffffffffff821661068657610683348261198b565b90505b5f6106918888610a96565b905061069d8888610ba0565b6106aa8a89898985610c0c565b5f826106b585610a4c565b6106bf919061198b565b90508981101561070a576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60e081015167ffffffffffffffff10156107da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604160248201527f5f627269646765446174612e64657374696e6174696f6e436861696e4964207060448201527f617373656420697320746f6f2062696720746f2066697420696e2075696e743660648201527f3400000000000000000000000000000000000000000000000000000000000000608482015260a401610701565b6108297f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008360c00151610dce565b60c081015160e082015160a08301516040517f2fbb00ac000000000000000000000000000000000000000000000000000000008152600481019390935267ffffffffffffffff909116602483015273ffffffffffffffffffffffffffffffffffffffff90811660448301527f0000000000000000000000000000000000000000000000000000000000000000811660648301527f00000000000000000000000000000000000000000000000000000000000000001690632fbb00ac906084016020604051808303815f875af1158015610904573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109289190611a50565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1816040516109589190611ac3565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff831661098d576109888282610dfa565b505050565b610988838383610e67565b805f036109d1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a2a5780341015610a26576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610a2673ffffffffffffffffffffffffffffffffffffffff8316333084610ed5565b5f73ffffffffffffffffffffffffffffffffffffffff821615610a8e57610a8973ffffffffffffffffffffffffffffffffffffffff831630610f2d565b610a90565b475b92915050565b6060815f8167ffffffffffffffff811115610ab357610ab3611692565b604051908082528060200260200182016040528015610adc578160200160208202803683370190505b5090505f5f5b83811015610b9557868682818110610afc57610afc6119ce565b9050602002810190610b0e91906119fb565b610b1f906080810190606001611a37565b9150610b2a82610a4c565b838281518110610b3c57610b3c6119ce565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b8d5734838281518110610b7557610b756119ce565b60200260200101818151610b89919061198b565b9052505b600101610ae2565b509095945050505050565b5f5b818110156109885736838383818110610bbd57610bbd6119ce565b9050602002810190610bcf91906119fb565b9050610be160e0820160c08301611bd6565b15610c0357610c03610bf96060830160408401611a37565b8260800135610998565b50600101610ba2565b83838383825f5b81811015610db457368a8a83818110610c2e57610c2e6119ce565b9050602002810190610c4091906119fb565b9050610c6f610c556060830160408401611a37565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610cd15750610cd1610c886040830160208401611a37565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610ce85750610ce8610c886020830183611a37565b8015610d6b5750610d6b610cff60a0830183611bef565b610d0d916004915f91611c57565b610d1691611c7e565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610da1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dab8c82610f60565b50600101610c13565b5050610dc3848484845f6111d0565b505050505050505050565b6109888383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6113e7565b73ffffffffffffffffffffffffffffffffffffffff8216610e47576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a2673ffffffffffffffffffffffffffffffffffffffff831682611514565b73ffffffffffffffffffffffffffffffffffffffff8216610eb4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61098873ffffffffffffffffffffffffffffffffffffffff8416838361152d565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610f2057637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b610f75610f706020830183611a37565b611576565b610fab576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610fea576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610ffe610c556060850160408601611a37565b611008575f61100e565b82608001355b90505f6110296110246080860160608701611a37565b610a4c565b9050815f0361105f5761105f6110456060860160408701611a37565b6110556040870160208801611a37565b8660800135610dce565b5f8061106e6020870187611a37565b73ffffffffffffffffffffffffffffffffffffffff168461109260a0890189611bef565b6040516110a0929190611ce4565b5f6040518083038185875af1925050503d805f81146110da576040519150601f19603f3d011682016040523d82523d5f602084013e6110df565b606091505b5091509150816110f2576110f28161160a565b5f6111066110246080890160608a01611a37565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861113760208a018a611a37565b61114760608b0160408c01611a37565b61115760808c0160608d01611a37565b8b608001358987116111695786611173565b6111738a8861198b565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826111df60018261198b565b8181106111ee576111ee6119ce565b905060200281019061120091906119fb565b611211906080810190606001611a37565b90505f5f5f5f5f5f5f5b888110156113d75761122e60018a61198b565b8110801561123d575088600114155b15611318578d8d82818110611254576112546119ce565b905060200281019061126691906119fb565b611277906080810190606001611a37565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611318578a81815181106112be576112be6119ce565b60200260200101516112cf87610a4c565b6112d9919061198b565b965073ffffffffffffffffffffffffffffffffffffffff8616156112fd575f6112ff565b895b93508387111561131857611318868d610307878b61198b565b8d8d8281811061132a5761132a6119ce565b905060200281019061133c91906119fb565b61134d906060810190604001611a37565b945061135885610a4c565b925073ffffffffffffffffffffffffffffffffffffffff85161561137c575f61137e565b895b915081831180156113bb57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156113cf576113cf858d610307858761198b565b60010161121b565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84161561150e5773ffffffffffffffffffffffffffffffffffffffff8316611450576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156114c3573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114e79190611cf3565b101561150e5761150e73ffffffffffffffffffffffffffffffffffffffff85168483611614565b50505050565b5f385f3884865af1610a265763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661156d576390b8ec185f526004601cfd5b5f603452505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161160157506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661156d575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661156d57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156116e3576116e3611692565b60405290565b5f82601f8301126116f8575f5ffd5b813567ffffffffffffffff81111561171257611712611692565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561175f5761175f611692565b604052818152838201602001851015611776575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146117b5575f5ffd5b919050565b803580151581146117b5575f5ffd5b5f61014082840312156117da575f5ffd5b6117e26116bf565b823581529050602082013567ffffffffffffffff811115611801575f5ffd5b61180d848285016116e9565b602083015250604082013567ffffffffffffffff81111561182c575f5ffd5b611838848285016116e9565b60408301525061184a60608301611792565b606082015261185b60808301611792565b608082015261186c60a08301611792565b60a082015260c0828101359082015260e0808301359082015261189261010083016117ba565b6101008201526118a561012083016117ba565b61012082015292915050565b5f5f5f604084860312156118c3575f5ffd5b833567ffffffffffffffff8111156118d9575f5ffd5b6118e5868287016117c9565b935050602084013567ffffffffffffffff811115611901575f5ffd5b8401601f81018613611911575f5ffd5b803567ffffffffffffffff811115611927575f5ffd5b8660208260051b840101111561193b575f5ffd5b939660209190910195509293505050565b5f6020828403121561195c575f5ffd5b813567ffffffffffffffff811115611972575f5ffd5b82016101408185031215611984575f5ffd5b9392505050565b81810381811115610a90577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610a9036836117c9565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611a2d575f5ffd5b9190910192915050565b5f60208284031215611a47575f5ffd5b61198482611792565b5f60208284031215611a60575f5ffd5b815167ffffffffffffffff81168114611984575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611aea610160840182611a77565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611b258282611a77565b9150506060840151611b4f608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611bbe61012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611be6575f5ffd5b611984826117ba565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611c22575f5ffd5b83018035915067ffffffffffffffff821115611c3c575f5ffd5b602001915036819003821315611c50575f5ffd5b9250929050565b5f5f85851115611c65575f5ffd5b83861115611c71575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611cdd577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611d03575f5ffd5b505191905056fea264697066735822122068e0ef7f66c3d733e0891847a402728d0b38c0e764b9972a009bffda365995c664736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_circleBridgeProxy";
            readonly type: "address";
            readonly internalType: "contract ICircleBridgeProxy";
        }, {
            readonly name: "_usdc";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCelerCircleBridge";
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
        readonly name: "swapAndStartBridgeTokensViaCelerCircleBridge";
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
        readonly name: "InvalidContract";
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
    static createInterface(): CelerCircleBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CelerCircleBridgeFacet;
}
export {};
