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
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051611d2f380380611d2f833981016040819052602b916061565b6001600160a01b038116605157604051631c49f4d160e01b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b608051611c856100aa5f395f8181607001526105f60152611c855ff3fe608060405260043610610033575f3560e01c8063092e8fa414610037578063a3443faa1461004c578063b94289bb1461005f575b5f5ffd5b61004a6100453660046115d3565b6100bb565b005b61004a61005a366004611843565b610303565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61014634476118f0565b905061015185611928565b60a081015173ffffffffffffffffffffffffffffffffffffffff166101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61022586611928565b80610100015115610262576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61026b87611928565b806101200151156102a8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102c56102bb60a08a0160808b01611933565b8960c0013561052b565b6102d76102d189611928565b886105df565b5047915050818111156102f8576102f85f846102f385856118f0565b610891565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161037e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61038e34476118f0565b9050868061010001516103cd576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561040b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861042e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610465576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104a2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104df576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104f38a5f01518b60c001518b8b336108c6565b60c08b01526105028a886105df565b50479150508181111561051e5761051e5f846102f385856118f0565b50505f9091555050505050565b805f03610564576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105bd57803410156105b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6105b973ffffffffffffffffffffffffffffffffffffffff8316333084610a08565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166106266040830160208401611933565b73ffffffffffffffffffffffffffffffffffffffff1614610673576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff16610731576106a26040820160208301611933565b60c08301516040517f49290c1c0000000000000000000000000000000000000000000000000000000081523360048201528335602482015273ffffffffffffffffffffffffffffffffffffffff92909216916349290c1c91906044015f604051808303818588803b158015610715575f5ffd5b505af1158015610727573d5f5f3e3d5ffd5b5050505050610800565b60808201516107549061074a6040840160208501611933565b8460c00151610a60565b6107646040820160208301611933565b608083015160c08401516040517fe801795200000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff928316602482015260448101919091528335606482015291169063e8017952906084015f604051808303815f87803b1580156107e9575f5ffd5b505af11580156107fb573d5f5f3e3d5ffd5b505050505b6108106040820160208301611933565b73ffffffffffffffffffffffffffffffffffffffff16815f01357fe70edd61c3b4f4cfb1a93f11b458c2e824db6663a09ffdca6a2685b34f24ad8960405160405180910390a37fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610885919061199f565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166108bb576108b68282610a8c565b505050565b6108b6838383610af9565b5f82808203610901576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561090f6001856118f0565b81811061091e5761091e611ab2565b90506020028101906109309190611adf565b610941906080810190606001611933565b90505f61094d82610b67565b905073ffffffffffffffffffffffffffffffffffffffff82166109775761097434826118f0565b90505b5f6109828888610bb1565b905061098e8888610cbb565b61099b8a89898985610d27565b5f826109a685610b67565b6109b091906118f0565b9050898110156109fa576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610a5357637939f4245f526004601cfd5b5f60605260405250505050565b6108b68383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610ee9565b73ffffffffffffffffffffffffffffffffffffffff8216610ad9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105b973ffffffffffffffffffffffffffffffffffffffff831682611016565b73ffffffffffffffffffffffffffffffffffffffff8216610b46576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108b673ffffffffffffffffffffffffffffffffffffffff8416838361102f565b5f73ffffffffffffffffffffffffffffffffffffffff821615610ba957610ba473ffffffffffffffffffffffffffffffffffffffff831630611078565b610bab565b475b92915050565b6060815f8167ffffffffffffffff811115610bce57610bce611624565b604051908082528060200260200182016040528015610bf7578160200160208202803683370190505b5090505f5f5b83811015610cb057868682818110610c1757610c17611ab2565b9050602002810190610c299190611adf565b610c3a906080810190606001611933565b9150610c4582610b67565b838281518110610c5757610c57611ab2565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ca85734838281518110610c9057610c90611ab2565b60200260200101818151610ca491906118f0565b9052505b600101610bfd565b509095945050505050565b5f5b818110156108b65736838383818110610cd857610cd8611ab2565b9050602002810190610cea9190611adf565b9050610cfc60e0820160c08301611b1b565b15610d1e57610d1e610d146060830160408401611933565b826080013561052b565b50600101610cbd565b83838383825f5b81811015610ecf57368a8a83818110610d4957610d49611ab2565b9050602002810190610d5b9190611adf565b9050610d8a610d706060830160408401611933565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610dec5750610dec610da36040830160208401611933565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e035750610e03610da36020830183611933565b8015610e865750610e86610e1a60a0830183611b34565b610e28916004915f91611b9c565b610e3191611bc3565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610ebc576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ec68c826110ab565b50600101610d2e565b5050610ede848484845f61131e565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156110105773ffffffffffffffffffffffffffffffffffffffff8316610f52576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610fc5573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fe99190611c29565b10156110105761101073ffffffffffffffffffffffffffffffffffffffff85168483611535565b50505050565b5f385f3884865af16105b95763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661106f576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6110c36110bb6020830183611933565b6017903b1190565b6110f9576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611138576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61114c610d706060850160408601611933565b611156575f61115c565b82608001355b90505f6111776111726080860160608701611933565b610b67565b9050815f036111ad576111ad6111936060860160408701611933565b6111a36040870160208801611933565b8660800135610a60565b5f806111bc6020870187611933565b73ffffffffffffffffffffffffffffffffffffffff16846111e060a0890189611b34565b6040516111ee929190611c40565b5f6040518083038185875af1925050503d805f8114611228576040519150601f19603f3d011682016040523d82523d5f602084013e61122d565b606091505b50915091508161124057611240816115b3565b5f6112546111726080890160608a01611933565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861128560208a018a611933565b61129560608b0160408c01611933565b6112a560808c0160608d01611933565b8b608001358987116112b757866112c1565b6112c18a886118f0565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261132d6001826118f0565b81811061133c5761133c611ab2565b905060200281019061134e9190611adf565b61135f906080810190606001611933565b90505f5f5f5f5f5f5f5b888110156115255761137c60018a6118f0565b8110801561138b575088600114155b15611466578d8d828181106113a2576113a2611ab2565b90506020028101906113b49190611adf565b6113c5906080810190606001611933565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611466578a818151811061140c5761140c611ab2565b602002602001015161141d87610b67565b61142791906118f0565b965073ffffffffffffffffffffffffffffffffffffffff86161561144b575f61144d565b895b93508387111561146657611466868d6102f3878b6118f0565b8d8d8281811061147857611478611ab2565b905060200281019061148a9190611adf565b61149b906060810190604001611933565b94506114a685610b67565b925073ffffffffffffffffffffffffffffffffffffffff8516156114ca575f6114cc565b895b9150818311801561150957508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561151d5761151d858d6102f385876118f0565b600101611369565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661106f575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661106f57633e3f8f735f526004601cfd5b8051602082018181fd5b5f604082840312156115cd575f5ffd5b50919050565b5f5f606083850312156115e4575f5ffd5b823567ffffffffffffffff8111156115fa575f5ffd5b8301610140818603121561160c575f5ffd5b915061161b84602085016115bd565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561167557611675611624565b60405290565b5f82601f83011261168a575f5ffd5b813567ffffffffffffffff8111156116a4576116a4611624565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156116f1576116f1611624565b604052818152838201602001851015611708575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611747575f5ffd5b919050565b80358015158114611747575f5ffd5b5f610140828403121561176c575f5ffd5b611774611651565b823581529050602082013567ffffffffffffffff811115611793575f5ffd5b61179f8482850161167b565b602083015250604082013567ffffffffffffffff8111156117be575f5ffd5b6117ca8482850161167b565b6040830152506117dc60608301611724565b60608201526117ed60808301611724565b60808201526117fe60a08301611724565b60a082015260c0828101359082015260e08083013590820152611824610100830161174c565b610100820152611837610120830161174c565b61012082015292915050565b5f5f5f5f60808587031215611856575f5ffd5b843567ffffffffffffffff81111561186c575f5ffd5b6118788782880161175b565b945050602085013567ffffffffffffffff811115611894575f5ffd5b8501601f810187136118a4575f5ffd5b803567ffffffffffffffff8111156118ba575f5ffd5b8760208260051b84010111156118ce575f5ffd5b602091909101935091506118e586604087016115bd565b905092959194509250565b81810381811115610bab577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610bab368361175b565b5f60208284031215611943575f5ffd5b61194c82611724565b9392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526119c6610160840182611953565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611a018282611953565b9150506060840151611a2b608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611a9a61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611b11575f5ffd5b9190910192915050565b5f60208284031215611b2b575f5ffd5b61194c8261174c565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b67575f5ffd5b83018035915067ffffffffffffffff821115611b81575f5ffd5b602001915036819003821315611b95575f5ffd5b9250929050565b5f5f85851115611baa575f5ffd5b83861115611bb6575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611c22577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611c39575f5ffd5b5051919050565b818382375f910190815291905056fea2646970667358221220a225fcbbab20d0c88187acdb2b518ed354503e4146292bee88ceb3604309d09364736f6c634300081d0033";
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
                readonly name: "depository";
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
                readonly name: "depository";
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
        readonly type: "event";
        readonly name: "RelayDepositoryDeposit";
        readonly inputs: readonly [{
            readonly name: "orderId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "depository";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
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
