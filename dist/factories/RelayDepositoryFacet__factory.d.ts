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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051611ec1380380611ec183398101604081905261002e91610066565b6001600160a01b03811661005557604051631c49f4d160e01b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b608051611e026100bf5f395f81816070015281816106780152818161073f015261077f0152611e025ff3fe608060405260043610610033575f3560e01c8063092e8fa414610037578063a3443faa1461004c578063b94289bb1461005f575b5f5ffd5b61004a610045366004611727565b6100bb565b005b61004a61005a3660046119a3565b610303565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611a50565b905061015185611a88565b60a081015173ffffffffffffffffffffffffffffffffffffffff166101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61022586611a88565b80610100015115610262576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61026b87611a88565b806101200151156102a8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102c56102bb60a08a0160808b01611a93565b8960c0013561052b565b6102d76102d189611a88565b886105df565b5047915050818111156102f8576102f85f846102f38585611a50565b610888565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161037e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61038e3447611a50565b9050868061010001516103cd576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561040b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861042e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610465576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104a2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104df576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104f38a5f01518b60c001518b8b336108bd565b60c08b01526105028a886105df565b50479150508181111561051e5761051e5f846102f38585611a50565b50505f9091555050505050565b805f03610564576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105bd57803410156105b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6105b973ffffffffffffffffffffffffffffffffffffffff83163330846109ff565b5f6105f06040830160208401611a93565b73ffffffffffffffffffffffffffffffffffffffff160361063d576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff166107355760c082015173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906349290c1c906106af6040850160208601611a93565b60405160e084901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9091166004820152843560248201526044015f604051808303818588803b158015610719575f5ffd5b505af115801561072b573d5f5f3e3d5ffd5b505050505061084d565b61076882608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610a57565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663e80179526107b46040840160208501611a93565b608085015160c086015160405160e085901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff93841660048201529290911660248301526044820152833560648201526084015f604051808303815f87803b158015610836575f5ffd5b505af1158015610848573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161087c9190611aff565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166108b2576108ad8282610a83565b505050565b6108ad838383610af0565b5f828082036108f8576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610906600185611a50565b81811061091557610915611c12565b90506020028101906109279190611c3f565b610938906080810190606001611a93565b90505f61094482610c3b565b905073ffffffffffffffffffffffffffffffffffffffff821661096e5761096b3482611a50565b90505b5f6109798888610c85565b90506109858888610d8f565b6109928a89898985610dfb565b5f8261099d85610c3b565b6109a79190611a50565b9050898110156109f1576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610a4a57637939f4245f526004601cfd5b5f60605260405250505050565b6108ad8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611043565b73ffffffffffffffffffffffffffffffffffffffff8216610ad0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105b973ffffffffffffffffffffffffffffffffffffffff83168261116a565b73ffffffffffffffffffffffffffffffffffffffff8216610b3d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b632b6653dc46148015610b79575073ffffffffffffffffffffffffffffffffffffffff831673a614f803b6fd780986a42c78ec9c7f77e6ded13c145b15610c1a576040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af1158015610bf0573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c149190611c7b565b50505050565b6108ad73ffffffffffffffffffffffffffffffffffffffff84168383611183565b5f73ffffffffffffffffffffffffffffffffffffffff821615610c7d57610c7873ffffffffffffffffffffffffffffffffffffffff8316306111cc565b610c7f565b475b92915050565b6060815f8167ffffffffffffffff811115610ca257610ca2611778565b604051908082528060200260200182016040528015610ccb578160200160208202803683370190505b5090505f5f5b83811015610d8457868682818110610ceb57610ceb611c12565b9050602002810190610cfd9190611c3f565b610d0e906080810190606001611a93565b9150610d1982610c3b565b838281518110610d2b57610d2b611c12565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d7c5734838281518110610d6457610d64611c12565b60200260200101818151610d789190611a50565b9052505b600101610cd1565b509095945050505050565b5f5b818110156108ad5736838383818110610dac57610dac611c12565b9050602002810190610dbe9190611c3f565b9050610dd060e0820160c08301611c96565b15610df257610df2610de86060830160408401611a93565b826080013561052b565b50600101610d91565b83838383825f80805b8381101561102757368c8c83818110610e1f57610e1f611c12565b9050602002810190610e319190611c3f565b9050610e406020820182611a93565b9350610e526040820160208301611a93565b9250610ef584610e6560a0840184611cb1565b610e73916004915f91611d19565b610e7c91611d40565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580610fdd5750610f29610f0f6060830160408401611a93565b73ffffffffffffffffffffffffffffffffffffffff161590565b158015610f6257508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015610fdd575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15611014576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61101e8e826111ff565b50600101610e04565b50505050611038848484845f611472565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615610c145773ffffffffffffffffffffffffffffffffffffffff83166110ac576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561111f573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111439190611da6565b1015610c1457610c1473ffffffffffffffffffffffffffffffffffffffff85168483611689565b5f385f3884865af16105b95763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166111c3576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61121761120f6020830183611a93565b6017903b1190565b61124d576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361128c576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6112a0610f0f6060850160408601611a93565b6112aa575f6112b0565b82608001355b90505f6112cb6112c66080860160608701611a93565b610c3b565b9050815f03611301576113016112e76060860160408701611a93565b6112f76040870160208801611a93565b8660800135610a57565b5f806113106020870187611a93565b73ffffffffffffffffffffffffffffffffffffffff168461133460a0890189611cb1565b604051611342929190611dbd565b5f6040518083038185875af1925050503d805f811461137c576040519150601f19603f3d011682016040523d82523d5f602084013e611381565b606091505b5091509150816113945761139481611707565b5f6113a86112c66080890160608a01611a93565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886113d960208a018a611a93565b6113e960608b0160408c01611a93565b6113f960808c0160608d01611a93565b8b6080013589871161140b5786611415565b6114158a88611a50565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611481600182611a50565b81811061149057611490611c12565b90506020028101906114a29190611c3f565b6114b3906080810190606001611a93565b90505f5f5f5f5f5f5f5b88811015611679576114d060018a611a50565b811080156114df575088600114155b156115ba578d8d828181106114f6576114f6611c12565b90506020028101906115089190611c3f565b611519906080810190606001611a93565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146115ba578a818151811061156057611560611c12565b602002602001015161157187610c3b565b61157b9190611a50565b965073ffffffffffffffffffffffffffffffffffffffff86161561159f575f6115a1565b895b9350838711156115ba576115ba868d6102f3878b611a50565b8d8d828181106115cc576115cc611c12565b90506020028101906115de9190611c3f565b6115ef906060810190604001611a93565b94506115fa85610c3b565b925073ffffffffffffffffffffffffffffffffffffffff85161561161e575f611620565b895b9150818311801561165d57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561167157611671858d6102f38587611a50565b6001016114bd565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166111c3575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166111c357633e3f8f735f526004601cfd5b8051602082018181fd5b5f60408284031215611721575f5ffd5b50919050565b5f5f60608385031215611738575f5ffd5b823567ffffffffffffffff81111561174e575f5ffd5b83016101408186031215611760575f5ffd5b915061176f8460208501611711565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156117c9576117c9611778565b60405290565b5f82601f8301126117de575f5ffd5b813567ffffffffffffffff8111156117f8576117f8611778565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561184557611845611778565b60405281815283820160200185101561185c575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461189b575f5ffd5b919050565b80151581146118ad575f5ffd5b50565b803561189b816118a0565b5f61014082840312156118cc575f5ffd5b6118d46117a5565b823581529050602082013567ffffffffffffffff8111156118f3575f5ffd5b6118ff848285016117cf565b602083015250604082013567ffffffffffffffff81111561191e575f5ffd5b61192a848285016117cf565b60408301525061193c60608301611878565b606082015261194d60808301611878565b608082015261195e60a08301611878565b60a082015260c0828101359082015260e0808301359082015261198461010083016118b0565b61010082015261199761012083016118b0565b61012082015292915050565b5f5f5f5f608085870312156119b6575f5ffd5b843567ffffffffffffffff8111156119cc575f5ffd5b6119d8878288016118bb565b945050602085013567ffffffffffffffff8111156119f4575f5ffd5b8501601f81018713611a04575f5ffd5b803567ffffffffffffffff811115611a1a575f5ffd5b8760208260051b8401011115611a2e575f5ffd5b60209190910193509150611a458660408701611711565b905092959194509250565b81810381811115610c7f577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610c7f36836118bb565b5f60208284031215611aa3575f5ffd5b611aac82611878565b9392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611b26610160840182611ab3565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611b618282611ab3565b9150506060840151611b8b608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611bfa61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611c71575f5ffd5b9190910192915050565b5f60208284031215611c8b575f5ffd5b8151611aac816118a0565b5f60208284031215611ca6575f5ffd5b8135611aac816118a0565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ce4575f5ffd5b83018035915067ffffffffffffffff821115611cfe575f5ffd5b602001915036819003821315611d12575f5ffd5b9250929050565b5f5f85851115611d27575f5ffd5b83861115611d33575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611d9f577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611db6575f5ffd5b5051919050565b818382375f910190815291905056fea26469706673582212207c5d31ff19bbe98472f9dc7607d6f785b722d44db2dbc5c793a03c634f9d086064736f6c634300081d0033";
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
