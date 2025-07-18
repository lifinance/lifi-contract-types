import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PolygonBridgeFacet, PolygonBridgeFacetInterface } from "../PolygonBridgeFacet";
type PolygonBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b50604051611cfa380380611cfa83398101604081905261002e9161005c565b6001600160a01b039182166080521660a052610094565b6001600160a01b0381168114610059575f5ffd5b50565b5f5f6040838503121561006d575f5ffd5b825161007881610045565b602084015190925061008981610045565b809150509250929050565b60805160a051611c376100c35f395f6106e801525f81816105c801528181610671015261079f0152611c375ff3fe608060405260043610610028575f3560e01c8063af62c7d61461002c578063b4f3758114610041575b5f5ffd5b61003f61003a366004611768565b610054565b005b61003f61004f3660046117a2565b610277565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df344761183d565b9050838061010001511561011f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b848061012001511561015d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101808160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610231576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024387608001518860c0015161049d565b61024c87610551565b50479150508181111561026d5761026d5f84610268858561183d565b61083f565b50505f9091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610302344761183d565b905085806101000151610341576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561037f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103a28160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103d9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610416576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610453576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610467895f01518a60c001518a8a33610874565b60c08a015261047589610551565b504791505081811115610491576104915f84610268858561183d565b50505f90915550505050565b805f036104d6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661052f578034101561052b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61052b73ffffffffffffffffffffffffffffffffffffffff83163330846109b6565b5f610574826080015173ffffffffffffffffffffffffffffffffffffffff161590565b156106275760c082015160a08301516040517f4faa8a2600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f000000000000000000000000000000000000000000000000000000000000000090911691634faa8a26916024015f604051808303818588803b15801561060b575f5ffd5b505af115801561061d573d5f5f3e3d5ffd5b5050505050610804565b60808201516040517fea60c7c400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f00000000000000000000000000000000000000000000000000000000000000009091169063ea60c7c490602401602060405180830381865afa1580156106b8573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106dc9190611875565b905061071182608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610a0e565b5f8260c0015160405160200161072991815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905260a085015160808601517fe3dec8fb00000000000000000000000000000000000000000000000000000000845291935073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169263e3dec8fb926107d5929186906004016118e3565b5f604051808303815f87803b1580156107ec575f5ffd5b505af11580156107fe573d5f5f3e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108339190611936565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316610869576108648282610a3a565b505050565b610864838383610aa7565b5f828082036108af576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856108bd60018561183d565b8181106108cc576108cc611a49565b90506020028101906108de9190611a76565b6108ef906080810190606001611ab2565b90505f6108fb82610b15565b905073ffffffffffffffffffffffffffffffffffffffff821661092557610922348261183d565b90505b5f6109308888610b5f565b905061093c8888610c69565b6109498a89898985610cd5565b5f8261095485610b15565b61095e919061183d565b9050898110156109a8576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610a0157637939f4245f526004601cfd5b5f60605260405250505050565b6108648383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611080565b73ffffffffffffffffffffffffffffffffffffffff8216610a87576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052b73ffffffffffffffffffffffffffffffffffffffff8316826111ad565b73ffffffffffffffffffffffffffffffffffffffff8216610af4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61086473ffffffffffffffffffffffffffffffffffffffff841683836111c6565b5f73ffffffffffffffffffffffffffffffffffffffff821615610b5757610b5273ffffffffffffffffffffffffffffffffffffffff83163061120f565b610b59565b475b92915050565b6060815f8167ffffffffffffffff811115610b7c57610b7c61153d565b604051908082528060200260200182016040528015610ba5578160200160208202803683370190505b5090505f805b83811015610c5e57868682818110610bc557610bc5611a49565b9050602002810190610bd79190611a76565b610be8906080810190606001611ab2565b9150610bf382610b15565b838281518110610c0557610c05611a49565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c565734838281518110610c3e57610c3e611a49565b60200260200101818151610c52919061183d565b9052505b600101610bab565b509095945050505050565b5f5b818110156108645736838383818110610c8657610c86611a49565b9050602002810190610c989190611a76565b9050610caa60e0820160c08301611acd565b15610ccc57610ccc610cc26060830160408401611ab2565b826080013561049d565b50600101610c6b565b838383838260018114610f9c575f8585610cf060018561183d565b818110610cff57610cff611a49565b9050602002810190610d119190611a76565b610d22906080810190606001611ab2565b90505f89815b81811015610ec957368d8d83818110610d4357610d43611a49565b9050602002810190610d559190611a76565b9050610d84610d6a6060830160408401611ab2565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610de65750610de6610d9d6040830160208401611ab2565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610dfd5750610dfd610d9d6020830183611ab2565b8015610e805750610e80610e1460a0830183611ae6565b610e22916004915f91611b4e565b610e2b91611b75565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610eb6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ec08f82611242565b50600101610d28565b505f90505b610ed960018561183d565b811015610f94575f888883818110610ef357610ef3611a49565b9050602002810190610f059190611a76565b610f16906080810190606001611ab2565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f8b57858281518110610f5d57610f5d611a49565b6020026020010151610f6e82610b15565b610f78919061183d565b92508215610f8b57610f8b81888561083f565b50600101610ece565b505050611074565b875f5b8181101561107157368b8b83818110610fba57610fba611a49565b9050602002810190610fcc9190611a76565b9050610fe1610d6a6060830160408401611ab2565b80610ffa5750610ffa610d9d6040830160208401611ab2565b80156110115750611011610d9d6020830183611ab2565b80156110285750611028610e1460a0830183611ae6565b61105e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110688d82611242565b50600101610f9f565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156111a75773ffffffffffffffffffffffffffffffffffffffff83166110e9576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561115c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111809190611bdb565b10156111a7576111a773ffffffffffffffffffffffffffffffffffffffff851684836114b5565b50505050565b5f385f3884865af161052b5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611206576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61125a6112526020830183611ab2565b6017903b1190565b611290576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036112cf576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6112e3610d6a6060850160408601611ab2565b6112ed575f6112f3565b82608001355b90505f61130e6113096080860160608701611ab2565b610b15565b9050815f036113445761134461132a6060860160408701611ab2565b61133a6040870160208801611ab2565b8660800135610a0e565b5f806113536020870187611ab2565b73ffffffffffffffffffffffffffffffffffffffff168461137760a0890189611ae6565b604051611385929190611bf2565b5f6040518083038185875af1925050503d805f81146113bf576040519150601f19603f3d011682016040523d82523d5f602084013e6113c4565b606091505b5091509150816113d7576113d781611533565b5f6113eb6113096080890160608a01611ab2565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861141c60208a018a611ab2565b61142c60608b0160408c01611ab2565b61143c60808c0160608d01611ab2565b8b6080013589871161144e5786611458565b6114588a8861183d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611206575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661120657633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561158e5761158e61153d565b60405290565b5f82601f8301126115a3575f5ffd5b813567ffffffffffffffff8111156115bd576115bd61153d565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561160a5761160a61153d565b604052818152838201602001851015611621575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461165e575f5ffd5b50565b803561166c8161163d565b919050565b8035801515811461166c575f5ffd5b5f6101408284031215611691575f5ffd5b61169961156a565b823581529050602082013567ffffffffffffffff8111156116b8575f5ffd5b6116c484828501611594565b602083015250604082013567ffffffffffffffff8111156116e3575f5ffd5b6116ef84828501611594565b60408301525061170160608301611661565b606082015261171260808301611661565b608082015261172360a08301611661565b60a082015260c0828101359082015260e080830135908201526117496101008301611671565b61010082015261175c6101208301611671565b61012082015292915050565b5f60208284031215611778575f5ffd5b813567ffffffffffffffff81111561178e575f5ffd5b61179a84828501611680565b949350505050565b5f5f5f604084860312156117b4575f5ffd5b833567ffffffffffffffff8111156117ca575f5ffd5b6117d686828701611680565b935050602084013567ffffffffffffffff8111156117f2575f5ffd5b8401601f81018613611802575f5ffd5b803567ffffffffffffffff811115611818575f5ffd5b8660208260051b840101111561182c575f5ffd5b939660209190910195509293505050565b81810381811115610b59577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215611885575f5ffd5b81516118908161163d565b9392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff8416815273ffffffffffffffffffffffffffffffffffffffff83166020820152606060408201525f61192d6060830184611897565b95945050505050565b60208152815160208201525f6020830151610140604084015261195d610160840182611897565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526119988282611897565b91505060608401516119c2608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611a3161012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611aa8575f5ffd5b9190910192915050565b5f60208284031215611ac2575f5ffd5b81356118908161163d565b5f60208284031215611add575f5ffd5b61189082611671565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b19575f5ffd5b83018035915067ffffffffffffffff821115611b33575f5ffd5b602001915036819003821315611b47575f5ffd5b9250929050565b5f5f85851115611b5c575f5ffd5b83861115611b68575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611bd4577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611beb575f5ffd5b5051919050565b818382375f910190815291905056fea26469706673582212202728b7b20139c6559ca25290881edabfe112231d7bd4265ff284cd7d3099ef9c64736f6c634300081d0033";
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
