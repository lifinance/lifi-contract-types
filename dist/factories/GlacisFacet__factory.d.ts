import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GlacisFacet, GlacisFacetInterface } from "../GlacisFacet";
declare type GlacisFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GlacisFacet__factory extends ContractFactory {
    constructor(...args: GlacisFacetConstructorParams);
    deploy(_airlift: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GlacisFacet>;
    getDeployTransaction(_airlift: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GlacisFacet;
    connect(signer: Signer): GlacisFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051611da8380380611da883398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b608051611cf06100b85f395f8181605d015281816106dc01526107070152611cf05ff3fe608060405260043610610033575f3560e01c8063753cbab61461003757806382a3279b1461004c578063e10c04c1146100a8575b5f5ffd5b61004a61004536600461186d565b6100bb565b005b348015610057575f5ffd5b5061007f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004a6100b63660046118b9565b61033b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611966565b90508461016b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610298576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102bb816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102f2576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030489608001518a60c001516105c3565b61030e8989610677565b50479250505081811115610330576103305f8461032b8585611966565b610856565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103c63447611966565b905086806101000151610405576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610443576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104668160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561049d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610517576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8961053a816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610571576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61058a8b5f01518c60c001518c8c338d6020013561088b565b60c08c01526105998b89610677565b504792505050818111156105b6576105b65f8461032b8585611966565b50505f9091555050505050565b805f036105fc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106555780341015610651576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61065173ffffffffffffffffffffffffffffffffffffffff8316333084610a25565b5f610685602083018361199e565b73ffffffffffffffffffffffffffffffffffffffff16036106d2576040517fe2fe272600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61070582608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610a7d565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166398242b3f826020013584608001518560c001518660a0015173ffffffffffffffffffffffffffffffffffffffff165f1b8760e00151875f016020810190610784919061199e565b60405160e088901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945260448401929092526064830152909116608482015260a4015f604051808303818588803b158015610804575f5ffd5b505af1158015610816573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161084a9190611a0a565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166108805761087b8282610aa9565b505050565b61087b838383610b16565b5f838082036108c6576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f86866108d4600185611966565b8181106108e3576108e3611b1d565b90506020028101906108f59190611b4a565b61090690608081019060600161199e565b90505f61091282610b84565b905073ffffffffffffffffffffffffffffffffffffffff821661093c576109393482611966565b90505b5f6109478989610bce565b90506109538989610cd8565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff8916602082015290810187905261098e818b8b85610d44565b5f8361099986610b84565b6109a39190611966565b905073ffffffffffffffffffffffffffffffffffffffff85166109cd576109ca8882611966565b90505b8b811015610a15576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610a7057637939f4245f526004601cfd5b5f60605260405250505050565b61087b8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6110ea565b73ffffffffffffffffffffffffffffffffffffffff8216610af6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61065173ffffffffffffffffffffffffffffffffffffffff831682611217565b73ffffffffffffffffffffffffffffffffffffffff8216610b63576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61087b73ffffffffffffffffffffffffffffffffffffffff84168383611230565b5f73ffffffffffffffffffffffffffffffffffffffff821615610bc657610bc173ffffffffffffffffffffffffffffffffffffffff831630611279565b610bc8565b475b92915050565b6060815f8167ffffffffffffffff811115610beb57610beb611638565b604051908082528060200260200182016040528015610c14578160200160208202803683370190505b5090505f805b83811015610ccd57868682818110610c3457610c34611b1d565b9050602002810190610c469190611b4a565b610c5790608081019060600161199e565b9150610c6282610b84565b838281518110610c7457610c74611b1d565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610cc55734838281518110610cad57610cad611b1d565b60200260200101818151610cc19190611966565b9052505b600101610c1a565b509095945050505050565b5f5b8181101561087b5736838383818110610cf557610cf5611b1d565b9050602002810190610d079190611b4a565b9050610d1960e0820160c08301611b86565b15610d3b57610d3b610d31606083016040840161199e565b82608001356105c3565b50600101610cda565b6020840151604085015184918491849083805f5b81811015610efb57368b8b83818110610d7357610d73611b1d565b9050602002810190610d859190611b4a565b9050610db4610d9a606083016040840161199e565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e165750610e16610dcd604083016020840161199e565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e2d5750610e2d610dcd602083018361199e565b8015610eb05750610eb0610e4460a0830183611b9f565b610e52916004915f91611c07565b610e5b91611c2e565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610ee6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c51610ef290826112ac565b50600101610d58565b505080600114611043575f8686610f13600185611966565b818110610f2257610f22611b1d565b9050602002810190610f349190611b4a565b610f4590608081019060600161199e565b90505f805b610f55600185611966565b81101561103f575f898983818110610f6f57610f6f611b1d565b9050602002810190610f819190611b4a565b610f9290608081019060600161199e565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461103657868281518110610fd957610fd9611b1d565b6020026020010151610fea82610b84565b610ff49190611966565b92505f73ffffffffffffffffffffffffffffffffffffffff821615611019575f61101b565b865b90508084111561103457611034828a61032b8488611966565b505b50600101610f4a565b5050505b5f5b818110156110dd575f87878381811061106057611060611b1d565b90506020028101906110729190611b4a565b61108390606081019060400161199e565b90505f61108f82610b84565b90505f73ffffffffffffffffffffffffffffffffffffffff8316156110b4575f6110b6565b855b9050808211156110cf576110cf838961032b8486611966565b836001019350505050611045565b5050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156112115773ffffffffffffffffffffffffffffffffffffffff8316611153576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156111c6573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111ea9190611c94565b10156112115761121173ffffffffffffffffffffffffffffffffffffffff8516848361151c565b50505050565b5f385f3884865af16106515763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611270576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6112c16112bc602083018361199e565b61159a565b6112f7576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611336576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61134a610d9a606085016040860161199e565b611354575f61135a565b82608001355b90505f611375611370608086016060870161199e565b610b84565b9050815f036113ab576113ab611391606086016040870161199e565b6113a1604087016020880161199e565b8660800135610a7d565b5f806113ba602087018761199e565b73ffffffffffffffffffffffffffffffffffffffff16846113de60a0890189611b9f565b6040516113ec929190611cab565b5f6040518083038185875af1925050503d805f8114611426576040519150601f19603f3d011682016040523d82523d5f602084013e61142b565b606091505b50915091508161143e5761143e8161162e565b5f6114526113706080890160608a0161199e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861148360208a018a61199e565b61149360608b0160408c0161199e565b6114a360808c0160608d0161199e565b8b608001358987116114b557866114bf565b6114bf8a88611966565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611270575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661127057633e3f8f735f526004601cfd5b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161162557506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561168957611689611638565b60405290565b5f82601f83011261169e575f5ffd5b813567ffffffffffffffff8111156116b8576116b8611638565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561170557611705611638565b60405281815283820160200185101561171c575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461175b575f5ffd5b919050565b8035801515811461175b575f5ffd5b5f6101408284031215611780575f5ffd5b611788611665565b823581529050602082013567ffffffffffffffff8111156117a7575f5ffd5b6117b38482850161168f565b602083015250604082013567ffffffffffffffff8111156117d2575f5ffd5b6117de8482850161168f565b6040830152506117f060608301611738565b606082015261180160808301611738565b608082015261181260a08301611738565b60a082015260c0828101359082015260e080830135908201526118386101008301611760565b61010082015261184b6101208301611760565b61012082015292915050565b5f60408284031215611867575f5ffd5b50919050565b5f5f6060838503121561187e575f5ffd5b823567ffffffffffffffff811115611894575f5ffd5b6118a08582860161176f565b9250506118b08460208501611857565b90509250929050565b5f5f5f5f608085870312156118cc575f5ffd5b843567ffffffffffffffff8111156118e2575f5ffd5b6118ee8782880161176f565b945050602085013567ffffffffffffffff81111561190a575f5ffd5b8501601f8101871361191a575f5ffd5b803567ffffffffffffffff811115611930575f5ffd5b8760208260051b8401011115611944575f5ffd5b6020919091019350915061195b8660408701611857565b905092959194509250565b81810381811115610bc8577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f602082840312156119ae575f5ffd5b6119b782611738565b9392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611a316101608401826119be565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611a6c82826119be565b9150506060840151611a96608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611b0561012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611b7c575f5ffd5b9190910192915050565b5f60208284031215611b96575f5ffd5b6119b782611760565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611bd2575f5ffd5b83018035915067ffffffffffffffff821115611bec575f5ffd5b602001915036819003821315611c00575f5ffd5b9250929050565b5f5f85851115611c15575f5ffd5b83861115611c21575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611c8d577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611ca4575f5ffd5b5051919050565b818382375f910190815291905056fea2646970667358221220b0c725f3a2f4c397594e307ab5cd8698e75aa2ca65d384e067e110c4a2c066be64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_airlift";
            readonly type: "address";
            readonly internalType: "contract IGlacisAirlift";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "airlift";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGlacisAirlift";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGlacis";
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
            readonly name: "_glacisData";
            readonly type: "tuple";
            readonly internalType: "struct GlacisFacet.GlacisData";
            readonly components: readonly [{
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGlacis";
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
            readonly name: "_glacisData";
            readonly type: "tuple";
            readonly internalType: "struct GlacisFacet.GlacisData";
            readonly components: readonly [{
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
        readonly name: "InvalidConfig";
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
        readonly name: "InvalidRefundAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetNotSupported";
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
    static createInterface(): GlacisFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GlacisFacet;
}
export {};
