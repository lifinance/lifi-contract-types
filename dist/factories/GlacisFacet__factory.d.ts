import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GlacisFacet, GlacisFacetInterface } from "../GlacisFacet";
type GlacisFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051611d59380380611d5983398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b608051611ca16100b85f395f8181605d015281816106dc01526107070152611ca15ff3fe608060405260043610610033575f3560e01c8063753cbab61461003757806382a3279b1461004c578063e10c04c1146100a8575b5f5ffd5b61004a61004536600461181e565b6100bb565b005b348015610057575f5ffd5b5061007f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004a6100b636600461186a565b61033b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611917565b90508461016b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610298576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102bb816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102f2576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030489608001518a60c001516105c3565b61030e8989610677565b50479250505081811115610330576103305f8461032b8585611917565b610856565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103c63447611917565b905086806101000151610405576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610443576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104668160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561049d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610517576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8961053a816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610571576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61058a8b5f01518c60c001518c8c338d6020013561088b565b60c08c01526105998b89610677565b504792505050818111156105b6576105b65f8461032b8585611917565b50505f9091555050505050565b805f036105fc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106555780341015610651576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61065173ffffffffffffffffffffffffffffffffffffffff8316333084610a25565b5f610685602083018361194f565b73ffffffffffffffffffffffffffffffffffffffff16036106d2576040517fe2fe272600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61070582608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610a7d565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166398242b3f826020013584608001518560c001518660a0015173ffffffffffffffffffffffffffffffffffffffff165f1b8760e00151875f016020810190610784919061194f565b60405160e088901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945260448401929092526064830152909116608482015260a4015f604051808303818588803b158015610804575f5ffd5b505af1158015610816573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161084a91906119bb565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166108805761087b8282610aa9565b505050565b61087b838383610b16565b5f838082036108c6576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f86866108d4600185611917565b8181106108e3576108e3611ace565b90506020028101906108f59190611afb565b61090690608081019060600161194f565b90505f61091282610b84565b905073ffffffffffffffffffffffffffffffffffffffff821661093c576109393482611917565b90505b5f6109478989610bce565b90506109538989610cd8565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff8916602082015290810187905261098e818b8b85610d44565b5f8361099986610b84565b6109a39190611917565b905073ffffffffffffffffffffffffffffffffffffffff85166109cd576109ca8882611917565b90505b8b811015610a15576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610a7057637939f4245f526004601cfd5b5f60605260405250505050565b61087b8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61112c565b73ffffffffffffffffffffffffffffffffffffffff8216610af6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61065173ffffffffffffffffffffffffffffffffffffffff831682611259565b73ffffffffffffffffffffffffffffffffffffffff8216610b63576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61087b73ffffffffffffffffffffffffffffffffffffffff84168383611272565b5f73ffffffffffffffffffffffffffffffffffffffff821615610bc657610bc173ffffffffffffffffffffffffffffffffffffffff8316306112bb565b610bc8565b475b92915050565b6060815f8167ffffffffffffffff811115610beb57610beb6115e9565b604051908082528060200260200182016040528015610c14578160200160208202803683370190505b5090505f805b83811015610ccd57868682818110610c3457610c34611ace565b9050602002810190610c469190611afb565b610c5790608081019060600161194f565b9150610c6282610b84565b838281518110610c7457610c74611ace565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610cc55734838281518110610cad57610cad611ace565b60200260200101818151610cc19190611917565b9052505b600101610c1a565b509095945050505050565b5f5b8181101561087b5736838383818110610cf557610cf5611ace565b9050602002810190610d079190611afb565b9050610d1960e0820160c08301611b37565b15610d3b57610d3b610d31606083016040840161194f565b82608001356105c3565b50600101610cda565b602084015160408501518491849184908360018114611046575f8686610d6b600185611917565b818110610d7a57610d7a611ace565b9050602002810190610d8c9190611afb565b610d9d90608081019060600161194f565b90505f89815b81811015610f4657368d8d83818110610dbe57610dbe611ace565b9050602002810190610dd09190611afb565b9050610dff610de5606083016040840161194f565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e615750610e61610e18604083016020840161194f565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e785750610e78610e18602083018361194f565b8015610efb5750610efb610e8f60a0830183611b50565b610e9d916004915f91611bb8565b610ea691611bdf565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f31576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610f3d90826112ee565b50600101610da3565b505f90505b610f56600185611917565b81101561103e575f898983818110610f7057610f70611ace565b9050602002810190610f829190611afb565b610f9390608081019060600161194f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461103557868281518110610fda57610fda611ace565b6020026020010151610feb82610b84565b610ff59190611917565b92505f73ffffffffffffffffffffffffffffffffffffffff82161561101a575f61101c565b865b9050831561103357611033828a61032b8488611917565b505b50600101610f4b565b505050611120565b875f5b8181101561111d57368b8b8381811061106457611064611ace565b90506020028101906110769190611afb565b905061108b610de5606083016040840161194f565b806110a457506110a4610e18604083016020840161194f565b80156110bb57506110bb610e18602083018361194f565b80156110d257506110d2610e8f60a0830183611b50565b611108576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161111490826112ee565b50600101611049565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156112535773ffffffffffffffffffffffffffffffffffffffff8316611195576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611208573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061122c9190611c45565b10156112535761125373ffffffffffffffffffffffffffffffffffffffff85168483611561565b50505050565b5f385f3884865af16106515763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166112b2576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6113066112fe602083018361194f565b6017903b1190565b61133c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361137b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61138f610de5606085016040860161194f565b611399575f61139f565b82608001355b90505f6113ba6113b5608086016060870161194f565b610b84565b9050815f036113f0576113f06113d6606086016040870161194f565b6113e6604087016020880161194f565b8660800135610a7d565b5f806113ff602087018761194f565b73ffffffffffffffffffffffffffffffffffffffff168461142360a0890189611b50565b604051611431929190611c5c565b5f6040518083038185875af1925050503d805f811461146b576040519150601f19603f3d011682016040523d82523d5f602084013e611470565b606091505b50915091508161148357611483816115df565b5f6114976113b56080890160608a0161194f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886114c860208a018a61194f565b6114d860608b0160408c0161194f565b6114e860808c0160608d0161194f565b8b608001358987116114fa5786611504565b6115048a88611917565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166112b2575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166112b257633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561163a5761163a6115e9565b60405290565b5f82601f83011261164f575f5ffd5b813567ffffffffffffffff811115611669576116696115e9565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156116b6576116b66115e9565b6040528181528382016020018510156116cd575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461170c575f5ffd5b919050565b8035801515811461170c575f5ffd5b5f6101408284031215611731575f5ffd5b611739611616565b823581529050602082013567ffffffffffffffff811115611758575f5ffd5b61176484828501611640565b602083015250604082013567ffffffffffffffff811115611783575f5ffd5b61178f84828501611640565b6040830152506117a1606083016116e9565b60608201526117b2608083016116e9565b60808201526117c360a083016116e9565b60a082015260c0828101359082015260e080830135908201526117e96101008301611711565b6101008201526117fc6101208301611711565b61012082015292915050565b5f60408284031215611818575f5ffd5b50919050565b5f5f6060838503121561182f575f5ffd5b823567ffffffffffffffff811115611845575f5ffd5b61185185828601611720565b9250506118618460208501611808565b90509250929050565b5f5f5f5f6080858703121561187d575f5ffd5b843567ffffffffffffffff811115611893575f5ffd5b61189f87828801611720565b945050602085013567ffffffffffffffff8111156118bb575f5ffd5b8501601f810187136118cb575f5ffd5b803567ffffffffffffffff8111156118e1575f5ffd5b8760208260051b84010111156118f5575f5ffd5b6020919091019350915061190c8660408701611808565b905092959194509250565b81810381811115610bc8577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6020828403121561195f575f5ffd5b611968826116e9565b9392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526119e261016084018261196f565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611a1d828261196f565b9150506060840151611a47608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611ab661012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611b2d575f5ffd5b9190910192915050565b5f60208284031215611b47575f5ffd5b61196882611711565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b83575f5ffd5b83018035915067ffffffffffffffff821115611b9d575f5ffd5b602001915036819003821315611bb1575f5ffd5b9250929050565b5f5f85851115611bc6575f5ffd5b83861115611bd2575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611c3e577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611c55575f5ffd5b5051919050565b818382375f910190815291905056fea2646970667358221220448da9d24d870f508f1a537f657603643f7490ca470bc6d1d690e2e469d27d6564736f6c634300081d0033";
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
