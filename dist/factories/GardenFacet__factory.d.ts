import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GardenFacet, GardenFacetInterface } from "../GardenFacet";
type GardenFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GardenFacet__factory extends ContractFactory {
    constructor(...args: GardenFacetConstructorParams);
    deploy(_htlcRegistry: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GardenFacet>;
    getDeployTransaction(_htlcRegistry: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GardenFacet;
    connect(signer: Signer): GardenFacet__factory;
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051611e55380380611e55833981016040819052602b916061565b6001600160a01b0381166051576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b608051611db16100a45f395f6106ba0152611db15ff3fe608060405260043610610028575f3560e01c80633ca5502c1461002c578063d6220ae314610041575b5f5ffd5b61003f61003a366004611911565b610054565b005b61003f61004f36600461195d565b610279565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611a0a565b9050846101048160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610178576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610231576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024388608001518960c001516104a1565b61024d8888610555565b50479150508181111561026e5761026e5f846102698585611a0a565b6109a4565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103043447611a0a565b905086806101000151610343576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610381576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103a48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103db576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610418576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610455576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104698a5f01518b60c001518b8b336109d9565b60c08b01526104788a88610555565b504791505081811115610494576104945f846102698585611a0a565b50505f9091555050505050565b805f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610533578034101561052f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61052f73ffffffffffffffffffffffffffffffffffffffff8316333084610b1b565b5f6105636020830183611a42565b73ffffffffffffffffffffffffffffffffffffffff16148061058757506040810135155b8061059457506060810135155b156105cb576040517f639a6b5600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6105dc6040830160208401611a42565b73ffffffffffffffffffffffffffffffffffffffff1603610629576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61064c836080015173ffffffffffffffffffffffffffffffffffffffff161590565b61065a578260800151610670565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee5b6040517f6ff78d6900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301529192505f917f00000000000000000000000000000000000000000000000000000000000000001690636ff78d6990602401602060405180830381865afa1580156106ff573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107239190611a64565b905073ffffffffffffffffffffffffffffffffffffffff8116610772576040517f981a2a2b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080840151819073ffffffffffffffffffffffffffffffffffffffff166108795760c085015173ffffffffffffffffffffffffffffffffffffffff8216906313d4a787906107c66040880160208901611a42565b6107d36020890189611a42565b60c08a0151604080517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff948516600482015293909216602484015290890135604483015260648201526060880135608482015260a4015f604051808303818588803b15801561085d575f5ffd5b505af115801561086f573d5f5f3e3d5ffd5b5050505050610966565b61088c8560800151838760c00151610b73565b73ffffffffffffffffffffffffffffffffffffffff81166313d4a7876108b86040870160208801611a42565b6108c56020880188611a42565b60c0890151604080517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b16815273ffffffffffffffffffffffffffffffffffffffff948516600482015293909216602484015290880135604483015260648201526060870135608482015260a4015f604051808303815f87803b15801561094f575f5ffd5b505af1158015610961573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1856040516109959190611acb565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff83166109ce576109c98282610b9f565b505050565b6109c9838383610c0c565b5f82808203610a14576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610a22600185611a0a565b818110610a3157610a31611bde565b9050602002810190610a439190611c0b565b610a54906080810190606001611a42565b90505f610a6082610c7a565b905073ffffffffffffffffffffffffffffffffffffffff8216610a8a57610a873482611a0a565b90505b5f610a958888610cc4565b9050610aa18888610dce565b610aae8a89898985610e3a565b5f82610ab985610c7a565b610ac39190611a0a565b905089811015610b0d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610b6657637939f4245f526004601cfd5b5f60605260405250505050565b6109c98383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610ffc565b73ffffffffffffffffffffffffffffffffffffffff8216610bec576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052f73ffffffffffffffffffffffffffffffffffffffff831682611129565b73ffffffffffffffffffffffffffffffffffffffff8216610c59576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109c973ffffffffffffffffffffffffffffffffffffffff84168383611142565b5f73ffffffffffffffffffffffffffffffffffffffff821615610cbc57610cb773ffffffffffffffffffffffffffffffffffffffff83163061118b565b610cbe565b475b92915050565b6060815f8167ffffffffffffffff811115610ce157610ce16116d0565b604051908082528060200260200182016040528015610d0a578160200160208202803683370190505b5090505f5f5b83811015610dc357868682818110610d2a57610d2a611bde565b9050602002810190610d3c9190611c0b565b610d4d906080810190606001611a42565b9150610d5882610c7a565b838281518110610d6a57610d6a611bde565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610dbb5734838281518110610da357610da3611bde565b60200260200101818151610db79190611a0a565b9052505b600101610d10565b509095945050505050565b5f5b818110156109c95736838383818110610deb57610deb611bde565b9050602002810190610dfd9190611c0b565b9050610e0f60e0820160c08301611c47565b15610e3157610e31610e276060830160408401611a42565b82608001356104a1565b50600101610dd0565b83838383825f5b81811015610fe257368a8a83818110610e5c57610e5c611bde565b9050602002810190610e6e9190611c0b565b9050610e9d610e836060830160408401611a42565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610eff5750610eff610eb66040830160208401611a42565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610f165750610f16610eb66020830183611a42565b8015610f995750610f99610f2d60a0830183611c60565b610f3b916004915f91611cc8565b610f4491611cef565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610fcf576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fd98c826111be565b50600101610e41565b5050610ff1848484845f611431565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156111235773ffffffffffffffffffffffffffffffffffffffff8316611065576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156110d8573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110fc9190611d55565b10156111235761112373ffffffffffffffffffffffffffffffffffffffff85168483611648565b50505050565b5f385f3884865af161052f5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611182576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6111d66111ce6020830183611a42565b6017903b1190565b61120c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361124b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61125f610e836060850160408601611a42565b611269575f61126f565b82608001355b90505f61128a6112856080860160608701611a42565b610c7a565b9050815f036112c0576112c06112a66060860160408701611a42565b6112b66040870160208801611a42565b8660800135610b73565b5f806112cf6020870187611a42565b73ffffffffffffffffffffffffffffffffffffffff16846112f360a0890189611c60565b604051611301929190611d6c565b5f6040518083038185875af1925050503d805f811461133b576040519150601f19603f3d011682016040523d82523d5f602084013e611340565b606091505b50915091508161135357611353816116c6565b5f6113676112856080890160608a01611a42565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861139860208a018a611a42565b6113a860608b0160408c01611a42565b6113b860808c0160608d01611a42565b8b608001358987116113ca57866113d4565b6113d48a88611a0a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611440600182611a0a565b81811061144f5761144f611bde565b90506020028101906114619190611c0b565b611472906080810190606001611a42565b90505f5f5f5f5f5f5f5b888110156116385761148f60018a611a0a565b8110801561149e575088600114155b15611579578d8d828181106114b5576114b5611bde565b90506020028101906114c79190611c0b565b6114d8906080810190606001611a42565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611579578a818151811061151f5761151f611bde565b602002602001015161153087610c7a565b61153a9190611a0a565b965073ffffffffffffffffffffffffffffffffffffffff86161561155e575f611560565b895b93508387111561157957611579868d610269878b611a0a565b8d8d8281811061158b5761158b611bde565b905060200281019061159d9190611c0b565b6115ae906060810190604001611a42565b94506115b985610c7a565b925073ffffffffffffffffffffffffffffffffffffffff8516156115dd575f6115df565b895b9150818311801561161c57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561163057611630858d6102698587611a0a565b60010161147c565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611182575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661118257633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611721576117216116d0565b60405290565b5f82601f830112611736575f5ffd5b813567ffffffffffffffff811115611750576117506116d0565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561179d5761179d6116d0565b6040528181528382016020018510156117b4575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146117f1575f5ffd5b50565b80356117ff816117d0565b919050565b803580151581146117ff575f5ffd5b5f6101408284031215611824575f5ffd5b61182c6116fd565b823581529050602082013567ffffffffffffffff81111561184b575f5ffd5b61185784828501611727565b602083015250604082013567ffffffffffffffff811115611876575f5ffd5b61188284828501611727565b604083015250611894606083016117f4565b60608201526118a5608083016117f4565b60808201526118b660a083016117f4565b60a082015260c0828101359082015260e080830135908201526118dc6101008301611804565b6101008201526118ef6101208301611804565b61012082015292915050565b5f6080828403121561190b575f5ffd5b50919050565b5f5f60a08385031215611922575f5ffd5b823567ffffffffffffffff811115611938575f5ffd5b61194485828601611813565b92505061195484602085016118fb565b90509250929050565b5f5f5f5f60c08587031215611970575f5ffd5b843567ffffffffffffffff811115611986575f5ffd5b61199287828801611813565b945050602085013567ffffffffffffffff8111156119ae575f5ffd5b8501601f810187136119be575f5ffd5b803567ffffffffffffffff8111156119d4575f5ffd5b8760208260051b84010111156119e8575f5ffd5b602091909101935091506119ff86604087016118fb565b905092959194509250565b81810381811115610cbe577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215611a52575f5ffd5b8135611a5d816117d0565b9392505050565b5f60208284031215611a74575f5ffd5b8151611a5d816117d0565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611af2610160840182611a7f565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611b2d8282611a7f565b9150506060840151611b57608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611bc661012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611c3d575f5ffd5b9190910192915050565b5f60208284031215611c57575f5ffd5b611a5d82611804565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611c93575f5ffd5b83018035915067ffffffffffffffff821115611cad575f5ffd5b602001915036819003821315611cc1575f5ffd5b9250929050565b5f5f85851115611cd6575f5ffd5b83861115611ce2575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611d4e577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611d65575f5ffd5b5051919050565b818382375f910190815291905056fea2646970667358221220bee8467ff3aa9f45dc8771930ce121247d13f25fe103cedfaca57073047264fc64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_htlcRegistry";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGarden";
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
            readonly name: "_gardenData";
            readonly type: "tuple";
            readonly internalType: "struct GardenFacet.GardenData";
            readonly components: readonly [{
                readonly name: "redeemer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "timelock";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "secretHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGarden";
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
            readonly name: "_gardenData";
            readonly type: "tuple";
            readonly internalType: "struct GardenFacet.GardenData";
            readonly components: readonly [{
                readonly name: "redeemer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "timelock";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "secretHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
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
        readonly name: "AssetNotSupported";
        readonly inputs: readonly [];
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
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidGardenData";
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
    static createInterface(): GardenFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GardenFacet;
}
export {};
