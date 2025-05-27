import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OmniBridgeFacet, OmniBridgeFacetInterface } from "../OmniBridgeFacet";
declare type OmniBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b50604051611de4380380611de483398101604081905261002e91610060565b6001600160a01b039182166080521660a052610091565b80516001600160a01b038116811461005b575f5ffd5b919050565b5f5f60408385031215610071575f5ffd5b61007a83610045565b915061008860208401610045565b90509250929050565b60805160a051611d2b6100b95f395f6105bf01525f818161062801526106b20152611d2b5ff3fe608060405260043610610028575f3560e01c8063782621d81461002c5780639572678214610041575b5f5ffd5b61003f61003a366004611858565b610054565b005b61003f61004f366004611892565b610277565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df344761192d565b9050838061010001511561011f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b848061012001511561015d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101808160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610231576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024387608001518860c0015161049d565b61024c87610551565b50479150508181111561026d5761026d5f84610268858561192d565b610746565b50505f9091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610302344761192d565b905085806101000151610341576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561037f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103a28160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103d9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610416576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610453576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610467895f01518a60c001518a8a3361077b565b60c08a015261047589610551565b504791505081811115610491576104915f84610268858561192d565b50505f90915550505050565b805f036104d6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661052f578034101561052b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61052b73ffffffffffffffffffffffffffffffffffffffff83163330846108be565b608081015173ffffffffffffffffffffffffffffffffffffffff1661061e5760c081015160a08201516040517ff52cbf0e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f00000000000000000000000000000000000000000000000000000000000000009091169163f52cbf0e916024015f604051808303818588803b158015610602575f5ffd5b505af1158015610614573d5f5f3e3d5ffd5b505050505061070c565b61065181608001517f00000000000000000000000000000000000000000000000000000000000000008360c00151610916565b608081015160a082015160c08301516040517fad58bdd100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9384166004820152918316602483015260448201527f00000000000000000000000000000000000000000000000000000000000000009091169063ad58bdd1906064015f604051808303815f87803b1580156106f5575f5ffd5b505af1158015610707573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161073b91906119b1565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff83166107705761076b8282610942565b505050565b61076b8383836109af565b5f828082036107b6576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856107c460018561192d565b8181106107d3576107d3611ac4565b90506020028101906107e59190611af1565b6107f6906080810190606001611b2d565b90505f61080282610a1d565b905073ffffffffffffffffffffffffffffffffffffffff821661082c57610829348261192d565b90505b5f6108378888610a67565b90506108438888610b71565b6108508a89898985610bdd565b5f8261085b85610a1d565b610865919061192d565b9050898110156108b0576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661090957637939f4245f526004601cfd5b5f60605260405250505050565b61076b8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610f88565b73ffffffffffffffffffffffffffffffffffffffff821661098f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052b73ffffffffffffffffffffffffffffffffffffffff8316826110b5565b73ffffffffffffffffffffffffffffffffffffffff82166109fc576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61076b73ffffffffffffffffffffffffffffffffffffffff841683836110ce565b5f73ffffffffffffffffffffffffffffffffffffffff821615610a5f57610a5a73ffffffffffffffffffffffffffffffffffffffff831630611117565b610a61565b475b92915050565b6060815f8167ffffffffffffffff811115610a8457610a8461162d565b604051908082528060200260200182016040528015610aad578160200160208202803683370190505b5090505f805b83811015610b6657868682818110610acd57610acd611ac4565b9050602002810190610adf9190611af1565b610af0906080810190606001611b2d565b9150610afb82610a1d565b838281518110610b0d57610b0d611ac4565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b5e5734838281518110610b4657610b46611ac4565b60200260200101818151610b5a919061192d565b9052505b600101610ab3565b509095945050505050565b5f5b8181101561076b5736838383818110610b8e57610b8e611ac4565b9050602002810190610ba09190611af1565b9050610bb260e0820160c08301611b4f565b15610bd457610bd4610bca6060830160408401611b2d565b826080013561049d565b50600101610b73565b838383838260018114610ea4575f8585610bf860018561192d565b818110610c0757610c07611ac4565b9050602002810190610c199190611af1565b610c2a906080810190606001611b2d565b90505f89815b81811015610dd157368d8d83818110610c4b57610c4b611ac4565b9050602002810190610c5d9190611af1565b9050610c8c610c726060830160408401611b2d565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610cee5750610cee610ca56040830160208401611b2d565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d055750610d05610ca56020830183611b2d565b8015610d885750610d88610d1c60a0830183611b68565b610d2a916004915f91611bd0565b610d3391611bf7565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610dbe576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dc88f8261114a565b50600101610c30565b505f90505b610de160018561192d565b811015610e9c575f888883818110610dfb57610dfb611ac4565b9050602002810190610e0d9190611af1565b610e1e906080810190606001611b2d565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e9357858281518110610e6557610e65611ac4565b6020026020010151610e7682610a1d565b610e80919061192d565b92508215610e9357610e93818885610746565b50600101610dd6565b505050610f7c565b875f5b81811015610f7957368b8b83818110610ec257610ec2611ac4565b9050602002810190610ed49190611af1565b9050610ee9610c726060830160408401611b2d565b80610f025750610f02610ca56040830160208401611b2d565b8015610f195750610f19610ca56020830183611b2d565b8015610f305750610f30610d1c60a0830183611b68565b610f66576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f708d8261114a565b50600101610ea7565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156110af5773ffffffffffffffffffffffffffffffffffffffff8316610ff1576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611064573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110889190611c5d565b10156110af576110af73ffffffffffffffffffffffffffffffffffffffff8516848361143d565b50505050565b5f385f3884865af161052b5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661110e576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61118061115a6020830183611b2d565b7f91765d13665119d9c89a9e8beb9cfeb4a5a44ca96d7513e297e1357af2479ef06114bb565b6111b6576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036111f5576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611209610c726060850160408601611b2d565b611213575f611219565b82608001355b90505f61123461122f6060860160408701611b2d565b610a1d565b90505f61124a61122f6080870160608801611b2d565b9050825f03611280576112806112666060870160408801611b2d565b6112766040880160208901611b2d565b8760800135610916565b84608001358210156112cb576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016108a7565b5f806112da6020880188611b2d565b73ffffffffffffffffffffffffffffffffffffffff16856112fe60a08a018a611b68565b60405161130c929190611c74565b5f6040518083038185875af1925050503d805f8114611346576040519150601f19603f3d011682016040523d82523d5f602084013e61134b565b606091505b50915091508161135e5761135e81611623565b5f61137261122f60808a0160608b01611b2d565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896113a360208b018b611b2d565b6113b360608c0160408d01611b2d565b6113c360808d0160608e01611b2d565b8c608001358987116113d557866113df565b6113df8a8861192d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661110e575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661110e57633e3f8f735f526004601cfd5b6040805173ffffffffffffffffffffffffffffffffffffffff84811660248084019190915283518084039091018152604490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167ffab46d660000000000000000000000000000000000000000000000000000000017905291515f92839283929186169161154f9190611c83565b5f60405180830381855afa9150503d805f8114611587576040519150601f19603f3d011682016040523d82523d5f602084013e61158c565b606091505b509150915081801561159f575080516040145b15611619575f5f828060200190518101906115ba9190611c99565b90925090507f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000831601611616573b15159350610a6192505050565b50505b505050503b151590565b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561167e5761167e61162d565b60405290565b5f82601f830112611693575f5ffd5b813567ffffffffffffffff8111156116ad576116ad61162d565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156116fa576116fa61162d565b604052818152838201602001851015611711575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461174e575f5ffd5b50565b803561175c8161172d565b919050565b8035801515811461175c575f5ffd5b5f6101408284031215611781575f5ffd5b61178961165a565b823581529050602082013567ffffffffffffffff8111156117a8575f5ffd5b6117b484828501611684565b602083015250604082013567ffffffffffffffff8111156117d3575f5ffd5b6117df84828501611684565b6040830152506117f160608301611751565b606082015261180260808301611751565b608082015261181360a08301611751565b60a082015260c0828101359082015260e080830135908201526118396101008301611761565b61010082015261184c6101208301611761565b61012082015292915050565b5f60208284031215611868575f5ffd5b813567ffffffffffffffff81111561187e575f5ffd5b61188a84828501611770565b949350505050565b5f5f5f604084860312156118a4575f5ffd5b833567ffffffffffffffff8111156118ba575f5ffd5b6118c686828701611770565b935050602084013567ffffffffffffffff8111156118e2575f5ffd5b8401601f810186136118f2575f5ffd5b803567ffffffffffffffff811115611908575f5ffd5b8660208260051b840101111561191c575f5ffd5b939660209190910195509293505050565b81810381811115610a61577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526119d8610160840182611965565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611a138282611965565b9150506060840151611a3d608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611aac61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611b23575f5ffd5b9190910192915050565b5f60208284031215611b3d575f5ffd5b8135611b488161172d565b9392505050565b5f60208284031215611b5f575f5ffd5b611b4882611761565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b9b575f5ffd5b83018035915067ffffffffffffffff821115611bb5575f5ffd5b602001915036819003821315611bc9575f5ffd5b9250929050565b5f5f85851115611bde575f5ffd5b83861115611bea575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611c56577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611c6d575f5ffd5b5051919050565b818382375f9101908152919050565b5f82518060208501845e5f920191825250919050565b5f5f60408385031215611caa575f5ffd5b82517fffffff000000000000000000000000000000000000000000000000000000000081168114611cd9575f5ffd5b6020840151909250611cea8161172d565b80915050925092905056fea26469706673582212204cb6a2671ae7502a9dc47124ae3e3ad2550e17c15ca2248ab9f4005d3c10dc4064736f6c634300081d0033";
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
    static createInterface(): OmniBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OmniBridgeFacet;
}
export {};
