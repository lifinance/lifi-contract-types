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
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051611cdc380380611cdc833981016040819052602b91603b565b6001600160a01b03166080526066565b5f60208284031215604a575f5ffd5b81516001600160a01b0381168114605f575f5ffd5b9392505050565b608051611c5e61007e5f395f6105d20152611c5e5ff3fe608060405260043610610028575f3560e01c8063191c635d1461002c5780634c6802cd14610041575b5f5ffd5b61003f61003a3660046117be565b610054565b005b61003f61004f36600461180a565b610279565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df34476118b7565b9050846101048160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610178576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610231576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024388608001518960c001516104a1565b61024d8888610555565b50479150508181111561026e5761026e5f8461026985856118b7565b610851565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61030434476118b7565b905086806101000151610343576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610381576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103a48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103db576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610418576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610455576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104698a5f01518b60c001518b8b33610886565b60c08b01526104788a88610555565b504791505081811115610494576104945f8461026985856118b7565b50505f9091555050505050565b805f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610533578034101561052f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61052f73ffffffffffffffffffffffffffffffffffffffff83163330846109c8565b5f610578836080015173ffffffffffffffffffffffffffffffffffffffff161590565b610586578260800151610588565b5f5b6040517f6ff78d6900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301529192505f917f00000000000000000000000000000000000000000000000000000000000000001690636ff78d6990602401602060405180830381865afa158015610617573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061063b91906118ef565b905073ffffffffffffffffffffffffffffffffffffffff811661068a576040517f981a2a2b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080840151819073ffffffffffffffffffffffffffffffffffffffff166107565760c085015160a08601516040517f13d4a78700000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff9182166024820152863560448201526064810183905260208701356084820152908316916313d4a7879160a4015f604051808303818588803b15801561073a575f5ffd5b505af115801561074c573d5f5f3e3d5ffd5b5050505050610813565b6107698560800151838760c00151610a20565b60a085015160c08601516040517f13d4a78700000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff928316602482015286356044820152606481019190915260208601356084820152908216906313d4a787905f9060a4015f604051808303818588803b1580156107fb575f5ffd5b505af115801561080d573d5f5f3e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f185604051610842919061195d565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff831661087b576108768282610a4c565b505050565b610876838383610ab9565b5f828082036108c1576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856108cf6001856118b7565b8181106108de576108de611a70565b90506020028101906108f09190611a9d565b610901906080810190606001611ad9565b90505f61090d82610b27565b905073ffffffffffffffffffffffffffffffffffffffff82166109375761093434826118b7565b90505b5f6109428888610b71565b905061094e8888610c7b565b61095b8a89898985610ce7565b5f8261096685610b27565b61097091906118b7565b9050898110156109ba576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610a1357637939f4245f526004601cfd5b5f60605260405250505050565b6108768383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610ea9565b73ffffffffffffffffffffffffffffffffffffffff8216610a99576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052f73ffffffffffffffffffffffffffffffffffffffff831682610fd6565b73ffffffffffffffffffffffffffffffffffffffff8216610b06576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61087673ffffffffffffffffffffffffffffffffffffffff84168383610fef565b5f73ffffffffffffffffffffffffffffffffffffffff821615610b6957610b6473ffffffffffffffffffffffffffffffffffffffff831630611038565b610b6b565b475b92915050565b6060815f8167ffffffffffffffff811115610b8e57610b8e61157d565b604051908082528060200260200182016040528015610bb7578160200160208202803683370190505b5090505f5f5b83811015610c7057868682818110610bd757610bd7611a70565b9050602002810190610be99190611a9d565b610bfa906080810190606001611ad9565b9150610c0582610b27565b838281518110610c1757610c17611a70565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c685734838281518110610c5057610c50611a70565b60200260200101818151610c6491906118b7565b9052505b600101610bbd565b509095945050505050565b5f5b818110156108765736838383818110610c9857610c98611a70565b9050602002810190610caa9190611a9d565b9050610cbc60e0820160c08301611af4565b15610cde57610cde610cd46060830160408401611ad9565b82608001356104a1565b50600101610c7d565b83838383825f5b81811015610e8f57368a8a83818110610d0957610d09611a70565b9050602002810190610d1b9190611a9d565b9050610d4a610d306060830160408401611ad9565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610dac5750610dac610d636040830160208401611ad9565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610dc35750610dc3610d636020830183611ad9565b8015610e465750610e46610dda60a0830183611b0d565b610de8916004915f91611b75565b610df191611b9c565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e7c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e868c8261106b565b50600101610cee565b5050610e9e848484845f6112de565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615610fd05773ffffffffffffffffffffffffffffffffffffffff8316610f12576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610f85573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fa99190611c02565b1015610fd057610fd073ffffffffffffffffffffffffffffffffffffffff851684836114f5565b50505050565b5f385f3884865af161052f5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661102f576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61108361107b6020830183611ad9565b6017903b1190565b6110b9576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036110f8576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61110c610d306060850160408601611ad9565b611116575f61111c565b82608001355b90505f6111376111326080860160608701611ad9565b610b27565b9050815f0361116d5761116d6111536060860160408701611ad9565b6111636040870160208801611ad9565b8660800135610a20565b5f8061117c6020870187611ad9565b73ffffffffffffffffffffffffffffffffffffffff16846111a060a0890189611b0d565b6040516111ae929190611c19565b5f6040518083038185875af1925050503d805f81146111e8576040519150601f19603f3d011682016040523d82523d5f602084013e6111ed565b606091505b5091509150816112005761120081611573565b5f6112146111326080890160608a01611ad9565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861124560208a018a611ad9565b61125560608b0160408c01611ad9565b61126560808c0160608d01611ad9565b8b608001358987116112775786611281565b6112818a886118b7565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826112ed6001826118b7565b8181106112fc576112fc611a70565b905060200281019061130e9190611a9d565b61131f906080810190606001611ad9565b90505f5f5f5f5f5f5f5b888110156114e55761133c60018a6118b7565b8110801561134b575088600114155b15611426578d8d8281811061136257611362611a70565b90506020028101906113749190611a9d565b611385906080810190606001611ad9565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611426578a81815181106113cc576113cc611a70565b60200260200101516113dd87610b27565b6113e791906118b7565b965073ffffffffffffffffffffffffffffffffffffffff86161561140b575f61140d565b895b93508387111561142657611426868d610269878b6118b7565b8d8d8281811061143857611438611a70565b905060200281019061144a9190611a9d565b61145b906060810190604001611ad9565b945061146685610b27565b925073ffffffffffffffffffffffffffffffffffffffff85161561148a575f61148c565b895b915081831180156114c957508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156114dd576114dd858d61026985876118b7565b600101611329565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661102f575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661102f57633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156115ce576115ce61157d565b60405290565b5f82601f8301126115e3575f5ffd5b813567ffffffffffffffff8111156115fd576115fd61157d565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561164a5761164a61157d565b604052818152838201602001851015611661575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461169e575f5ffd5b50565b80356116ac8161167d565b919050565b803580151581146116ac575f5ffd5b5f61014082840312156116d1575f5ffd5b6116d96115aa565b823581529050602082013567ffffffffffffffff8111156116f8575f5ffd5b611704848285016115d4565b602083015250604082013567ffffffffffffffff811115611723575f5ffd5b61172f848285016115d4565b604083015250611741606083016116a1565b6060820152611752608083016116a1565b608082015261176360a083016116a1565b60a082015260c0828101359082015260e0808301359082015261178961010083016116b1565b61010082015261179c61012083016116b1565b61012082015292915050565b5f604082840312156117b8575f5ffd5b50919050565b5f5f606083850312156117cf575f5ffd5b823567ffffffffffffffff8111156117e5575f5ffd5b6117f1858286016116c0565b92505061180184602085016117a8565b90509250929050565b5f5f5f5f6080858703121561181d575f5ffd5b843567ffffffffffffffff811115611833575f5ffd5b61183f878288016116c0565b945050602085013567ffffffffffffffff81111561185b575f5ffd5b8501601f8101871361186b575f5ffd5b803567ffffffffffffffff811115611881575f5ffd5b8760208260051b8401011115611895575f5ffd5b602091909101935091506118ac86604087016117a8565b905092959194509250565b81810381811115610b6b577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f602082840312156118ff575f5ffd5b815161190a8161167d565b9392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611984610160840182611911565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526119bf8282611911565b91505060608401516119e9608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611a5861012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611acf575f5ffd5b9190910192915050565b5f60208284031215611ae9575f5ffd5b813561190a8161167d565b5f60208284031215611b04575f5ffd5b61190a826116b1565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b40575f5ffd5b83018035915067ffffffffffffffff821115611b5a575f5ffd5b602001915036819003821315611b6e575f5ffd5b9250929050565b5f5f85851115611b83575f5ffd5b83861115611b8f575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611bfb577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611c12575f5ffd5b5051919050565b818382375f910190815291905056fea2646970667358221220caa7528e48964bc6c7079d251aaa191583d8713be8e6c044e9e556b8a4c1a96464736f6c634300081d0033";
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
    static createInterface(): GardenFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GardenFacet;
}
export {};
