import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PolygonBridgeFacet, PolygonBridgeFacetInterface } from "../PolygonBridgeFacet";
declare type PolygonBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PolygonBridgeFacet__factory extends ContractFactory {
    constructor(...args: PolygonBridgeFacetConstructorParams);
    deploy(_rootChainManager: PromiseOrValue<string>, _erc20Predicate: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PolygonBridgeFacet>;
    getDeployTransaction(_rootChainManager: PromiseOrValue<string>, _erc20Predicate: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PolygonBridgeFacet;
    connect(signer: Signer): PolygonBridgeFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b50604051611dee380380611dee83398101604081905261002e9161005c565b6001600160a01b039182166080521660a052610094565b6001600160a01b0381168114610059575f5ffd5b50565b5f5f6040838503121561006d575f5ffd5b825161007881610045565b602084015190925061008981610045565b809150509250929050565b60805160a051611d2b6100c35f395f6106e801525f81816105c801528181610671015261079f0152611d2b5ff3fe608060405260043610610028575f3560e01c8063af62c7d61461002c578063b4f3758114610041575b5f5ffd5b61003f61003a36600461185c565b610054565b005b61003f61004f366004611896565b610277565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611931565b9050838061010001511561011f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b848061012001511561015d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101808160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610231576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024387608001518860c0015161049d565b61024c87610551565b50479150508181111561026d5761026d5f846102688585611931565b61083f565b50505f9091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103023447611931565b905085806101000151610341576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561037f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103a28160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103d9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610416576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610453576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610467895f01518a60c001518a8a33610874565b60c08a015261047589610551565b504791505081811115610491576104915f846102688585611931565b50505f90915550505050565b805f036104d6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661052f578034101561052b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61052b73ffffffffffffffffffffffffffffffffffffffff83163330846109b7565b5f610574826080015173ffffffffffffffffffffffffffffffffffffffff161590565b156106275760c082015160a08301516040517f4faa8a2600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f000000000000000000000000000000000000000000000000000000000000000090911691634faa8a26916024015f604051808303818588803b15801561060b575f5ffd5b505af115801561061d573d5f5f3e3d5ffd5b5050505050610804565b60808201516040517fea60c7c400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f00000000000000000000000000000000000000000000000000000000000000009091169063ea60c7c490602401602060405180830381865afa1580156106b8573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106dc9190611969565b905061071182608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610a0f565b5f8260c0015160405160200161072991815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905260a085015160808601517fe3dec8fb00000000000000000000000000000000000000000000000000000000845291935073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169263e3dec8fb926107d5929186906004016119d7565b5f604051808303815f87803b1580156107ec575f5ffd5b505af11580156107fe573d5f5f3e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108339190611a2a565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316610869576108648282610a3b565b505050565b610864838383610aa8565b5f828082036108af576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856108bd600185611931565b8181106108cc576108cc611b3d565b90506020028101906108de9190611b6a565b6108ef906080810190606001611ba6565b90505f6108fb82610b16565b905073ffffffffffffffffffffffffffffffffffffffff8216610925576109223482611931565b90505b5f6109308888610b60565b905061093c8888610c6a565b6109498a89898985610cd6565b5f8261095485610b16565b61095e9190611931565b9050898110156109a9576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610a0257637939f4245f526004601cfd5b5f60605260405250505050565b6108648383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611081565b73ffffffffffffffffffffffffffffffffffffffff8216610a88576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052b73ffffffffffffffffffffffffffffffffffffffff8316826111ae565b73ffffffffffffffffffffffffffffffffffffffff8216610af5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61086473ffffffffffffffffffffffffffffffffffffffff841683836111c7565b5f73ffffffffffffffffffffffffffffffffffffffff821615610b5857610b5373ffffffffffffffffffffffffffffffffffffffff831630611210565b610b5a565b475b92915050565b6060815f8167ffffffffffffffff811115610b7d57610b7d611631565b604051908082528060200260200182016040528015610ba6578160200160208202803683370190505b5090505f805b83811015610c5f57868682818110610bc657610bc6611b3d565b9050602002810190610bd89190611b6a565b610be9906080810190606001611ba6565b9150610bf482610b16565b838281518110610c0657610c06611b3d565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c575734838281518110610c3f57610c3f611b3d565b60200260200101818151610c539190611931565b9052505b600101610bac565b509095945050505050565b5f5b818110156108645736838383818110610c8757610c87611b3d565b9050602002810190610c999190611b6a565b9050610cab60e0820160c08301611bc1565b15610ccd57610ccd610cc36060830160408401611ba6565b826080013561049d565b50600101610c6c565b838383838260018114610f9d575f8585610cf1600185611931565b818110610d0057610d00611b3d565b9050602002810190610d129190611b6a565b610d23906080810190606001611ba6565b90505f89815b81811015610eca57368d8d83818110610d4457610d44611b3d565b9050602002810190610d569190611b6a565b9050610d85610d6b6060830160408401611ba6565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610de75750610de7610d9e6040830160208401611ba6565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea68602052604090205460ff1690565b8015610dfe5750610dfe610d9e6020830183611ba6565b8015610e815750610e81610e1560a0830183611bda565b610e23916004915f91611c42565b610e2c91611c69565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f181a9a063711e148dc95111d1248c4ff7b263939ce1df02b18ac1f5eb936ea69602052604090205460ff1690565b610eb7576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ec18f82611243565b50600101610d29565b505f90505b610eda600185611931565b811015610f95575f888883818110610ef457610ef4611b3d565b9050602002810190610f069190611b6a565b610f17906080810190606001611ba6565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f8c57858281518110610f5e57610f5e611b3d565b6020026020010151610f6f82610b16565b610f799190611931565b92508215610f8c57610f8c81888561083f565b50600101610ecf565b505050611075565b875f5b8181101561107257368b8b83818110610fbb57610fbb611b3d565b9050602002810190610fcd9190611b6a565b9050610fe2610d6b6060830160408401611ba6565b80610ffb5750610ffb610d9e6040830160208401611ba6565b80156110125750611012610d9e6020830183611ba6565b80156110295750611029610e1560a0830183611bda565b61105f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110698d82611243565b50600101610fa0565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156111a85773ffffffffffffffffffffffffffffffffffffffff83166110ea576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561115d573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111819190611ccf565b10156111a8576111a873ffffffffffffffffffffffffffffffffffffffff85168483611515565b50505050565b5f385f3884865af161052b5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611207576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6112586112536020830183611ba6565b611593565b61128e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036112cd576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6112e1610d6b6060850160408601611ba6565b6112eb575f6112f1565b82608001355b90505f61130c6113076060860160408701611ba6565b610b16565b90505f6113226113076080870160608801611ba6565b9050825f036113585761135861133e6060870160408801611ba6565b61134e6040880160208901611ba6565b8760800135610a0f565b84608001358210156113a3576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016109a0565b5f806113b26020880188611ba6565b73ffffffffffffffffffffffffffffffffffffffff16856113d660a08a018a611bda565b6040516113e4929190611ce6565b5f6040518083038185875af1925050503d805f811461141e576040519150601f19603f3d011682016040523d82523d5f602084013e611423565b606091505b5091509150816114365761143681611627565b5f61144a61130760808a0160608b01611ba6565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961147b60208b018b611ba6565b61148b60608c0160408d01611ba6565b61149b60808d0160608e01611ba6565b8c608001358987116114ad57866114b7565b6114b78a88611931565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611207575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661120757633e3f8f735f526004601cfd5b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161161e57506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561168257611682611631565b60405290565b5f82601f830112611697575f5ffd5b813567ffffffffffffffff8111156116b1576116b1611631565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156116fe576116fe611631565b604052818152838201602001851015611715575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611752575f5ffd5b50565b803561176081611731565b919050565b80358015158114611760575f5ffd5b5f6101408284031215611785575f5ffd5b61178d61165e565b823581529050602082013567ffffffffffffffff8111156117ac575f5ffd5b6117b884828501611688565b602083015250604082013567ffffffffffffffff8111156117d7575f5ffd5b6117e384828501611688565b6040830152506117f560608301611755565b606082015261180660808301611755565b608082015261181760a08301611755565b60a082015260c0828101359082015260e0808301359082015261183d6101008301611765565b6101008201526118506101208301611765565b61012082015292915050565b5f6020828403121561186c575f5ffd5b813567ffffffffffffffff811115611882575f5ffd5b61188e84828501611774565b949350505050565b5f5f5f604084860312156118a8575f5ffd5b833567ffffffffffffffff8111156118be575f5ffd5b6118ca86828701611774565b935050602084013567ffffffffffffffff8111156118e6575f5ffd5b8401601f810186136118f6575f5ffd5b803567ffffffffffffffff81111561190c575f5ffd5b8660208260051b8401011115611920575f5ffd5b939660209190910195509293505050565b81810381811115610b5a577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215611979575f5ffd5b815161198481611731565b9392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff8416815273ffffffffffffffffffffffffffffffffffffffff83166020820152606060408201525f611a21606083018461198b565b95945050505050565b60208152815160208201525f60208301516101406040840152611a5161016084018261198b565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611a8c828261198b565b9150506060840151611ab6608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611b2561012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611b9c575f5ffd5b9190910192915050565b5f60208284031215611bb6575f5ffd5b813561198481611731565b5f60208284031215611bd1575f5ffd5b61198482611765565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611c0d575f5ffd5b83018035915067ffffffffffffffff821115611c27575f5ffd5b602001915036819003821315611c3b575f5ffd5b9250929050565b5f5f85851115611c50575f5ffd5b83861115611c5c575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611cc8577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611cdf575f5ffd5b5051919050565b818382375f910190815291905056fea2646970667358221220edaa5d9b667af8f18fe93d2f77432ed731d8517257daf96fc5c5c5b950979d2a64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_rootChainManager";
            readonly type: "address";
            readonly internalType: "contract IRootChainManager";
        }, {
            readonly name: "_erc20Predicate";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaPolygonBridge";
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
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaPolygonBridge";
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
    static createInterface(): PolygonBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PolygonBridgeFacet;
}
export {};
