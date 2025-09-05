import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GnosisBridgeFacet, GnosisBridgeFacetInterface } from "../GnosisBridgeFacet";
type GnosisBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GnosisBridgeFacet__factory extends ContractFactory {
    constructor(...args: GnosisBridgeFacetConstructorParams);
    deploy(_gnosisBridgeRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GnosisBridgeFacet>;
    getDeployTransaction(_gnosisBridgeRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GnosisBridgeFacet;
    connect(signer: Signer): GnosisBridgeFacet__factory;
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051611ce3380380611ce3833981016040819052602b916061565b6001600160a01b0381166051576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b608051611c386100ab5f395f818161082d01526108b70152611c385ff3fe608060405260043610610028575f3560e01c80637bf96e0a1461002c578063f66fe51914610041575b5f5ffd5b61003f61003a3660046117d9565b610060565b005b34801561004c575f5ffd5b5061003f61005b366004611874565b6103fd565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100db576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100eb34476118ae565b90508580610100015161012a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610168576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761018b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101c2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101ff576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361023c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88606467ffffffffffffffff16808260e0015114610286576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808b015173ffffffffffffffffffffffffffffffffffffffff16736b175474e89094c44da98b954eedeac495271d0f148015906102f2575060808b015173ffffffffffffffffffffffffffffffffffffffff1673dc035d45d973e3ec169d2276ddab16f1e407384f14155b80610375575088158015906103755750898961030f6001826118ae565b81811061031e5761031e6118e6565b90506020028101906103309190611913565b61034190608081019060600161194f565b73ffffffffffffffffffffffffffffffffffffffff168b6080015173ffffffffffffffffffffffffffffffffffffffff1614155b156103ac576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103c08b5f01518c60c001518c8c336106e1565b60c08c01526103ce8b610823565b50479350505050818111156103f1576103f15f846103ec85856118ae565b61094a565b50505f90915550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610478576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556101008201518290156104bb576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82806101200151156104f9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8361051c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610553576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610590576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036105cd576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84606467ffffffffffffffff16808260e0015114610617576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608087015173ffffffffffffffffffffffffffffffffffffffff16736b175474e89094c44da98b954eedeac495271d0f148015906106835750608087015173ffffffffffffffffffffffffffffffffffffffff1673dc035d45d973e3ec169d2276ddab16f1e407384f14155b156106ba576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106cc87608001518860c0015161097f565b6106d587610823565b50505f90935550505050565b5f8280820361071c576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561072a6001856118ae565b818110610739576107396118e6565b905060200281019061074b9190611913565b61075c90608081019060600161194f565b90505f61076882610a33565b905073ffffffffffffffffffffffffffffffffffffffff82166107925761078f34826118ae565b90505b5f61079d8888610a7d565b90506107a98888610b87565b6107b68a89898985610bf3565b5f826107c185610a33565b6107cb91906118ae565b905089811015610815576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b61085681608001517f00000000000000000000000000000000000000000000000000000000000000008360c00151610f9e565b608081015160a082015160c08301516040517fad58bdd100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9384166004820152918316602483015260448201527f00000000000000000000000000000000000000000000000000000000000000009091169063ad58bdd1906064015f604051808303815f87803b1580156108fa575f5ffd5b505af115801561090c573d5f5f3e3d5ffd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161093f91906119bb565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff83166109745761096f8282610fca565b505050565b61096f838383611037565b805f036109b8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a115780341015610a0d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610a0d73ffffffffffffffffffffffffffffffffffffffff83163330846110a5565b5f73ffffffffffffffffffffffffffffffffffffffff821615610a7557610a7073ffffffffffffffffffffffffffffffffffffffff8316306110fd565b610a77565b475b92915050565b6060815f8167ffffffffffffffff811115610a9a57610a9a6115ba565b604051908082528060200260200182016040528015610ac3578160200160208202803683370190505b5090505f805b83811015610b7c57868682818110610ae357610ae36118e6565b9050602002810190610af59190611913565b610b0690608081019060600161194f565b9150610b1182610a33565b838281518110610b2357610b236118e6565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b745734838281518110610b5c57610b5c6118e6565b60200260200101818151610b7091906118ae565b9052505b600101610ac9565b509095945050505050565b5f5b8181101561096f5736838383818110610ba457610ba46118e6565b9050602002810190610bb69190611913565b9050610bc860e0820160c08301611ace565b15610bea57610bea610be0606083016040840161194f565b826080013561097f565b50600101610b89565b838383838260018114610eba575f8585610c0e6001856118ae565b818110610c1d57610c1d6118e6565b9050602002810190610c2f9190611913565b610c4090608081019060600161194f565b90505f89815b81811015610de757368d8d83818110610c6157610c616118e6565b9050602002810190610c739190611913565b9050610ca2610c88606083016040840161194f565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d045750610d04610cbb604083016020840161194f565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d1b5750610d1b610cbb602083018361194f565b8015610d9e5750610d9e610d3260a0830183611ae7565b610d40916004915f91611b4f565b610d4991611b76565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610dd4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dde8f82611130565b50600101610c46565b505f90505b610df76001856118ae565b811015610eb2575f888883818110610e1157610e116118e6565b9050602002810190610e239190611913565b610e3490608081019060600161194f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ea957858281518110610e7b57610e7b6118e6565b6020026020010151610e8c82610a33565b610e9691906118ae565b92508215610ea957610ea981888561094a565b50600101610dec565b505050610f92565b875f5b81811015610f8f57368b8b83818110610ed857610ed86118e6565b9050602002810190610eea9190611913565b9050610eff610c88606083016040840161194f565b80610f185750610f18610cbb604083016020840161194f565b8015610f2f5750610f2f610cbb602083018361194f565b8015610f465750610f46610d3260a0830183611ae7565b610f7c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f868d82611130565b50600101610ebd565b50505b50505050505050505050565b61096f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6113a3565b73ffffffffffffffffffffffffffffffffffffffff8216611017576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a0d73ffffffffffffffffffffffffffffffffffffffff8316826114d0565b73ffffffffffffffffffffffffffffffffffffffff8216611084576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61096f73ffffffffffffffffffffffffffffffffffffffff841683836114e9565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166110f057637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b611148611140602083018361194f565b6017903b1190565b61117e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036111bd576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6111d1610c88606085016040860161194f565b6111db575f6111e1565b82608001355b90505f6111fc6111f7608086016060870161194f565b610a33565b9050815f0361123257611232611218606086016040870161194f565b611228604087016020880161194f565b8660800135610f9e565b5f80611241602087018761194f565b73ffffffffffffffffffffffffffffffffffffffff168461126560a0890189611ae7565b604051611273929190611bdc565b5f6040518083038185875af1925050503d805f81146112ad576040519150601f19603f3d011682016040523d82523d5f602084013e6112b2565b606091505b5091509150816112c5576112c581611532565b5f6112d96111f76080890160608a0161194f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861130a60208a018a61194f565b61131a60608b0160408c0161194f565b61132a60808c0160608d0161194f565b8b6080013589871161133c5786611346565b6113468a886118ae565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156114ca5773ffffffffffffffffffffffffffffffffffffffff831661140c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561147f573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114a39190611beb565b10156114ca576114ca73ffffffffffffffffffffffffffffffffffffffff8516848361153c565b50505050565b5f385f3884865af1610a0d5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611529576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611529575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661152957633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561160b5761160b6115ba565b60405290565b5f82601f830112611620575f5ffd5b813567ffffffffffffffff81111561163a5761163a6115ba565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611687576116876115ba565b60405281815283820160200185101561169e575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146116dd575f5ffd5b919050565b803580151581146116dd575f5ffd5b5f6101408284031215611702575f5ffd5b61170a6115e7565b823581529050602082013567ffffffffffffffff811115611729575f5ffd5b61173584828501611611565b602083015250604082013567ffffffffffffffff811115611754575f5ffd5b61176084828501611611565b604083015250611772606083016116ba565b6060820152611783608083016116ba565b608082015261179460a083016116ba565b60a082015260c0828101359082015260e080830135908201526117ba61010083016116e2565b6101008201526117cd61012083016116e2565b61012082015292915050565b5f5f5f604084860312156117eb575f5ffd5b833567ffffffffffffffff811115611801575f5ffd5b61180d868287016116f1565b935050602084013567ffffffffffffffff811115611829575f5ffd5b8401601f81018613611839575f5ffd5b803567ffffffffffffffff81111561184f575f5ffd5b8660208260051b8401011115611863575f5ffd5b939660209190910195509293505050565b5f60208284031215611884575f5ffd5b813567ffffffffffffffff81111561189a575f5ffd5b6118a6848285016116f1565b949350505050565b81810381811115610a77577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611945575f5ffd5b9190910192915050565b5f6020828403121561195f575f5ffd5b611968826116ba565b9392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526119e261016084018261196f565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611a1d828261196f565b9150506060840151611a47608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611ab661012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611ade575f5ffd5b611968826116e2565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b1a575f5ffd5b83018035915067ffffffffffffffff821115611b34575f5ffd5b602001915036819003821315611b48575f5ffd5b9250929050565b5f5f85851115611b5d575f5ffd5b83861115611b69575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611bd5577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611bfb575f5ffd5b505191905056fea2646970667358221220adffbf48a3315a928fed3ef1e50031e604b5890bf9388389dd878aaaab99712764736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gnosisBridgeRouter";
            readonly type: "address";
            readonly internalType: "contract IGnosisBridgeRouter";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGnosisBridge";
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
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGnosisBridge";
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
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidDestinationChain";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSendingToken";
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
    static createInterface(): GnosisBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GnosisBridgeFacet;
}
export {};
