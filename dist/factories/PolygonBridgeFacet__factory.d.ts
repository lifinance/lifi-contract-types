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
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b50604051611d18380380611d1883398101604081905261002e9161005c565b6001600160a01b039182166080521660a052610094565b6001600160a01b0381168114610059575f5ffd5b50565b5f5f6040838503121561006d575f5ffd5b825161007881610045565b602084015190925061008981610045565b809150509250929050565b60805160a051611c556100c35f395f6106e801525f81816105c801528181610671015261079f0152611c555ff3fe608060405260043610610028575f3560e01c8063af62c7d61461002c578063b4f3758114610041575b5f5ffd5b61003f61003a366004611786565b610054565b005b61003f61004f3660046117c0565b610277565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df344761185b565b9050838061010001511561011f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b848061012001511561015d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101808160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610231576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024387608001518860c0015161049d565b61024c87610551565b50479150508181111561026d5761026d5f84610268858561185b565b61083f565b50505f9091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610302344761185b565b905085806101000151610341576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561037f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103a28160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103d9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610416576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610453576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610467895f01518a60c001518a8a33610874565b60c08a015261047589610551565b504791505081811115610491576104915f84610268858561185b565b50505f90915550505050565b805f036104d6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661052f578034101561052b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61052b73ffffffffffffffffffffffffffffffffffffffff83163330846109b6565b5f610574826080015173ffffffffffffffffffffffffffffffffffffffff161590565b156106275760c082015160a08301516040517f4faa8a2600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f000000000000000000000000000000000000000000000000000000000000000090911691634faa8a26916024015f604051808303818588803b15801561060b575f5ffd5b505af115801561061d573d5f5f3e3d5ffd5b5050505050610804565b60808201516040517fea60c7c400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f00000000000000000000000000000000000000000000000000000000000000009091169063ea60c7c490602401602060405180830381865afa1580156106b8573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106dc9190611893565b905061071182608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610a0e565b5f8260c0015160405160200161072991815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905260a085015160808601517fe3dec8fb00000000000000000000000000000000000000000000000000000000845291935073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169263e3dec8fb926107d592918690600401611901565b5f604051808303815f87803b1580156107ec575f5ffd5b505af11580156107fe573d5f5f3e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108339190611954565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316610869576108648282610a3a565b505050565b610864838383610aa7565b5f828082036108af576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856108bd60018561185b565b8181106108cc576108cc611a67565b90506020028101906108de9190611a94565b6108ef906080810190606001611ad0565b90505f6108fb82610b15565b905073ffffffffffffffffffffffffffffffffffffffff821661092557610922348261185b565b90505b5f6109308888610b5f565b905061093c8888610c69565b6109498a89898985610cd5565b5f8261095485610b15565b61095e919061185b565b9050898110156109a8576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610a0157637939f4245f526004601cfd5b5f60605260405250505050565b6108648383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61100d565b73ffffffffffffffffffffffffffffffffffffffff8216610a87576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052b73ffffffffffffffffffffffffffffffffffffffff83168261113a565b73ffffffffffffffffffffffffffffffffffffffff8216610af4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61086473ffffffffffffffffffffffffffffffffffffffff84168383611153565b5f73ffffffffffffffffffffffffffffffffffffffff821615610b5757610b5273ffffffffffffffffffffffffffffffffffffffff83163061119c565b610b59565b475b92915050565b6060815f8167ffffffffffffffff811115610b7c57610b7c61155b565b604051908082528060200260200182016040528015610ba5578160200160208202803683370190505b5090505f805b83811015610c5e57868682818110610bc557610bc5611a67565b9050602002810190610bd79190611a94565b610be8906080810190606001611ad0565b9150610bf382610b15565b838281518110610c0557610c05611a67565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c565734838281518110610c3e57610c3e611a67565b60200260200101818151610c52919061185b565b9052505b600101610bab565b509095945050505050565b5f5b818110156108645736838383818110610c8657610c86611a67565b9050602002810190610c989190611a94565b9050610caa60e0820160c08301611aeb565b15610ccc57610ccc610cc26060830160408401611ad0565b826080013561049d565b50600101610c6b565b8383838382805f5b81811015610e7e57368b8b83818110610cf857610cf8611a67565b9050602002810190610d0a9190611a94565b9050610d39610d1f6060830160408401611ad0565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d9b5750610d9b610d526040830160208401611ad0565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610db25750610db2610d526020830183611ad0565b8015610e355750610e35610dc960a0830183611b04565b610dd7916004915f91611b6c565b610de091611b93565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e6b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e758d826111cf565b50600101610cdd565b505080600114610f97575f8585610e9660018561185b565b818110610ea557610ea5611a67565b9050602002810190610eb79190611a94565b610ec8906080810190606001611ad0565b90505f805b610ed860018561185b565b811015610f93575f888883818110610ef257610ef2611a67565b9050602002810190610f049190611a94565b610f15906080810190606001611ad0565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f8a57858281518110610f5c57610f5c611a67565b6020026020010151610f6d82610b15565b610f77919061185b565b92508215610f8a57610f8a81888561083f565b50600101610ecd565b5050505b5f5b81811015611000575f868683818110610fb457610fb4611a67565b9050602002810190610fc69190611a94565b610fd7906060810190604001611ad0565b90505f610fe382610b15565b90508015610ff657610ff682878361083f565b5050600101610f99565b5050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156111345773ffffffffffffffffffffffffffffffffffffffff8316611076576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156110e9573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061110d9190611bf9565b10156111345761113473ffffffffffffffffffffffffffffffffffffffff8516848361143f565b50505050565b5f385f3884865af161052b5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611193576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6111e46111df6020830183611ad0565b6114bd565b61121a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611259576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61126d610d1f6060850160408601611ad0565b611277575f61127d565b82608001355b90505f6112986112936080860160608701611ad0565b610b15565b9050815f036112ce576112ce6112b46060860160408701611ad0565b6112c46040870160208801611ad0565b8660800135610a0e565b5f806112dd6020870187611ad0565b73ffffffffffffffffffffffffffffffffffffffff168461130160a0890189611b04565b60405161130f929190611c10565b5f6040518083038185875af1925050503d805f8114611349576040519150601f19603f3d011682016040523d82523d5f602084013e61134e565b606091505b5091509150816113615761136181611551565b5f6113756112936080890160608a01611ad0565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886113a660208a018a611ad0565b6113b660608b0160408c01611ad0565b6113c660808c0160608d01611ad0565b8b608001358987116113d857866113e2565b6113e28a8861185b565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611193575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661119357633e3f8f735f526004601cfd5b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161154857506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156115ac576115ac61155b565b60405290565b5f82601f8301126115c1575f5ffd5b813567ffffffffffffffff8111156115db576115db61155b565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156116285761162861155b565b60405281815283820160200185101561163f575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461167c575f5ffd5b50565b803561168a8161165b565b919050565b8035801515811461168a575f5ffd5b5f61014082840312156116af575f5ffd5b6116b7611588565b823581529050602082013567ffffffffffffffff8111156116d6575f5ffd5b6116e2848285016115b2565b602083015250604082013567ffffffffffffffff811115611701575f5ffd5b61170d848285016115b2565b60408301525061171f6060830161167f565b60608201526117306080830161167f565b608082015261174160a0830161167f565b60a082015260c0828101359082015260e08083013590820152611767610100830161168f565b61010082015261177a610120830161168f565b61012082015292915050565b5f60208284031215611796575f5ffd5b813567ffffffffffffffff8111156117ac575f5ffd5b6117b88482850161169e565b949350505050565b5f5f5f604084860312156117d2575f5ffd5b833567ffffffffffffffff8111156117e8575f5ffd5b6117f48682870161169e565b935050602084013567ffffffffffffffff811115611810575f5ffd5b8401601f81018613611820575f5ffd5b803567ffffffffffffffff811115611836575f5ffd5b8660208260051b840101111561184a575f5ffd5b939660209190910195509293505050565b81810381811115610b59577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f602082840312156118a3575f5ffd5b81516118ae8161165b565b9392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff8416815273ffffffffffffffffffffffffffffffffffffffff83166020820152606060408201525f61194b60608301846118b5565b95945050505050565b60208152815160208201525f6020830151610140604084015261197b6101608401826118b5565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526119b682826118b5565b91505060608401516119e0608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611a4f61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611ac6575f5ffd5b9190910192915050565b5f60208284031215611ae0575f5ffd5b81356118ae8161165b565b5f60208284031215611afb575f5ffd5b6118ae8261168f565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b37575f5ffd5b83018035915067ffffffffffffffff821115611b51575f5ffd5b602001915036819003821315611b65575f5ffd5b9250929050565b5f5f85851115611b7a575f5ffd5b83861115611b86575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611bf2577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611c09575f5ffd5b5051919050565b818382375f910190815291905056fea2646970667358221220b3f03cb36fed8e4db25b924a2860b976bad49ea3e32f078c8cfd295f3cb536eb64736f6c634300081d0033";
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
