import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OmniBridgeFacet, OmniBridgeFacetInterface } from "../OmniBridgeFacet";
type OmniBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OmniBridgeFacet__factory extends ContractFactory {
    constructor(...args: OmniBridgeFacetConstructorParams);
    deploy(_foreignOmniBridge: PromiseOrValue<string>, _wethOmniBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OmniBridgeFacet>;
    getDeployTransaction(_foreignOmniBridge: PromiseOrValue<string>, _wethOmniBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OmniBridgeFacet;
    connect(signer: Signer): OmniBridgeFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b50604051611c46380380611c4683398101604081905261002e91610060565b6001600160a01b039182166080521660a052610091565b80516001600160a01b038116811461005b575f5ffd5b919050565b5f5f60408385031215610071575f5ffd5b61007a83610045565b915061008860208401610045565b90509250929050565b60805160a051611b8d6100b95f395f6105bf01525f818161062801526106b20152611b8d5ff3fe608060405260043610610028575f3560e01c8063782621d81461002c5780639572678214610041575b5f5ffd5b61003f61003a36600461172e565b610054565b005b61003f61004f366004611768565b610277565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611803565b9050838061010001511561011f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b848061012001511561015d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101808160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610231576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024387608001518860c0015161049d565b61024c87610551565b50479150508181111561026d5761026d5f846102688585611803565b610746565b50505f9091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103023447611803565b905085806101000151610341576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561037f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103a28160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103d9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610416576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610453576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610467895f01518a60c001518a8a3361077b565b60c08a015261047589610551565b504791505081811115610491576104915f846102688585611803565b50505f90915550505050565b805f036104d6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661052f578034101561052b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61052b73ffffffffffffffffffffffffffffffffffffffff83163330846108bd565b608081015173ffffffffffffffffffffffffffffffffffffffff1661061e5760c081015160a08201516040517ff52cbf0e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f00000000000000000000000000000000000000000000000000000000000000009091169163f52cbf0e916024015f604051808303818588803b158015610602575f5ffd5b505af1158015610614573d5f5f3e3d5ffd5b505050505061070c565b61065181608001517f00000000000000000000000000000000000000000000000000000000000000008360c00151610915565b608081015160a082015160c08301516040517fad58bdd100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9384166004820152918316602483015260448201527f00000000000000000000000000000000000000000000000000000000000000009091169063ad58bdd1906064015f604051808303815f87803b1580156106f5575f5ffd5b505af1158015610707573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161073b9190611887565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff83166107705761076b8282610941565b505050565b61076b8383836109ae565b5f828082036107b6576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856107c4600185611803565b8181106107d3576107d361199a565b90506020028101906107e591906119c7565b6107f6906080810190606001611a03565b90505f61080282610a1c565b905073ffffffffffffffffffffffffffffffffffffffff821661082c576108293482611803565b90505b5f6108378888610a66565b90506108438888610b70565b6108508a89898985610bdc565b5f8261085b85610a1c565b6108659190611803565b9050898110156108af576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661090857637939f4245f526004601cfd5b5f60605260405250505050565b61076b8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610e3b565b73ffffffffffffffffffffffffffffffffffffffff821661098e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052b73ffffffffffffffffffffffffffffffffffffffff831682610f68565b73ffffffffffffffffffffffffffffffffffffffff82166109fb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61076b73ffffffffffffffffffffffffffffffffffffffff84168383610f81565b5f73ffffffffffffffffffffffffffffffffffffffff821615610a5e57610a5973ffffffffffffffffffffffffffffffffffffffff831630610fca565b610a60565b475b92915050565b6060815f8167ffffffffffffffff811115610a8357610a8361150f565b604051908082528060200260200182016040528015610aac578160200160208202803683370190505b5090505f5f5b83811015610b6557868682818110610acc57610acc61199a565b9050602002810190610ade91906119c7565b610aef906080810190606001611a03565b9150610afa82610a1c565b838281518110610b0c57610b0c61199a565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b5d5734838281518110610b4557610b4561199a565b60200260200101818151610b599190611803565b9052505b600101610ab2565b509095945050505050565b5f5b8181101561076b5736838383818110610b8d57610b8d61199a565b9050602002810190610b9f91906119c7565b9050610bb160e0820160c08301611a23565b15610bd357610bd3610bc96060830160408401611a03565b826080013561049d565b50600101610b72565b83838383825f5b81811015610e2157368a8a83818110610bfe57610bfe61199a565b9050602002810190610c1091906119c7565b9050610cbf610c226020830183611a03565b610c2f60a0840184611a3c565b610c3d916004915f91611aa4565b610c4691611acb565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580610dd75750610cf3610cd96060830160408401611a03565b73ffffffffffffffffffffffffffffffffffffffff161590565b158015610d475750610d086020820182611a03565b73ffffffffffffffffffffffffffffffffffffffff16610d2e6040830160208401611a03565b73ffffffffffffffffffffffffffffffffffffffff1614155b8015610dd75750610dd5610d616040830160208401611a03565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff1690565b155b15610e0e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e188c82610ffd565b50600101610be3565b5050610e30848484845f611270565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615610f625773ffffffffffffffffffffffffffffffffffffffff8316610ea4576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610f17573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f3b9190611b31565b1015610f6257610f6273ffffffffffffffffffffffffffffffffffffffff85168483611487565b50505050565b5f385f3884865af161052b5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610fc1576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61101561100d6020830183611a03565b6017903b1190565b61104b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361108a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61109e610cd96060850160408601611a03565b6110a8575f6110ae565b82608001355b90505f6110c96110c46080860160608701611a03565b610a1c565b9050815f036110ff576110ff6110e56060860160408701611a03565b6110f56040870160208801611a03565b8660800135610915565b5f8061110e6020870187611a03565b73ffffffffffffffffffffffffffffffffffffffff168461113260a0890189611a3c565b604051611140929190611b48565b5f6040518083038185875af1925050503d805f811461117a576040519150601f19603f3d011682016040523d82523d5f602084013e61117f565b606091505b5091509150816111925761119281611505565b5f6111a66110c46080890160608a01611a03565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886111d760208a018a611a03565b6111e760608b0160408c01611a03565b6111f760808c0160608d01611a03565b8b608001358987116112095786611213565b6112138a88611803565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261127f600182611803565b81811061128e5761128e61199a565b90506020028101906112a091906119c7565b6112b1906080810190606001611a03565b90505f5f5f5f5f5f5f5b88811015611477576112ce60018a611803565b811080156112dd575088600114155b156113b8578d8d828181106112f4576112f461199a565b905060200281019061130691906119c7565b611317906080810190606001611a03565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146113b8578a818151811061135e5761135e61199a565b602002602001015161136f87610a1c565b6113799190611803565b965073ffffffffffffffffffffffffffffffffffffffff86161561139d575f61139f565b895b9350838711156113b8576113b8868d610268878b611803565b8d8d828181106113ca576113ca61199a565b90506020028101906113dc91906119c7565b6113ed906060810190604001611a03565b94506113f885610a1c565b925073ffffffffffffffffffffffffffffffffffffffff85161561141c575f61141e565b895b9150818311801561145b57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561146f5761146f858d6102688587611803565b6001016112bb565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610fc1575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610fc157633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156115605761156061150f565b60405290565b5f82601f830112611575575f5ffd5b813567ffffffffffffffff81111561158f5761158f61150f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156115dc576115dc61150f565b6040528181528382016020018510156115f3575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611632575f5ffd5b919050565b80358015158114611632575f5ffd5b5f6101408284031215611657575f5ffd5b61165f61153c565b823581529050602082013567ffffffffffffffff81111561167e575f5ffd5b61168a84828501611566565b602083015250604082013567ffffffffffffffff8111156116a9575f5ffd5b6116b584828501611566565b6040830152506116c76060830161160f565b60608201526116d86080830161160f565b60808201526116e960a0830161160f565b60a082015260c0828101359082015260e0808301359082015261170f6101008301611637565b6101008201526117226101208301611637565b61012082015292915050565b5f6020828403121561173e575f5ffd5b813567ffffffffffffffff811115611754575f5ffd5b61176084828501611646565b949350505050565b5f5f5f6040848603121561177a575f5ffd5b833567ffffffffffffffff811115611790575f5ffd5b61179c86828701611646565b935050602084013567ffffffffffffffff8111156117b8575f5ffd5b8401601f810186136117c8575f5ffd5b803567ffffffffffffffff8111156117de575f5ffd5b8660208260051b84010111156117f2575f5ffd5b939660209190910195509293505050565b81810381811115610a60577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526118ae61016084018261183b565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526118e9828261183b565b9150506060840151611913608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161198261012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126119f9575f5ffd5b9190910192915050565b5f60208284031215611a13575f5ffd5b611a1c8261160f565b9392505050565b5f60208284031215611a33575f5ffd5b611a1c82611637565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611a6f575f5ffd5b83018035915067ffffffffffffffff821115611a89575f5ffd5b602001915036819003821315611a9d575f5ffd5b9250929050565b5f5f85851115611ab2575f5ffd5b83861115611abe575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611b2a577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611b41575f5ffd5b5051919050565b818382375f910190815291905056fea2646970667358221220be33f172806276773206e7fb45f4354cab9383a4679960777a28a801f7f6e9d364736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_foreignOmniBridge";
            readonly type: "address";
            readonly internalType: "contract IOmniBridge";
        }, {
            readonly name: "_wethOmniBridge";
            readonly type: "address";
            readonly internalType: "contract IOmniBridge";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaOmniBridge";
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
        readonly name: "swapAndStartBridgeTokensViaOmniBridge";
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
    static createInterface(): OmniBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OmniBridgeFacet;
}
export {};
