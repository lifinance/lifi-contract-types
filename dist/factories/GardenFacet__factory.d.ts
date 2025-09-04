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
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051611dcf380380611dcf833981016040819052602b916061565b6001600160a01b0381166051576040516311a1e69760e01b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b608051611d2b6100a45f395f61064a0152611d2b5ff3fe608060405260043610610028575f3560e01c80639b61eae61461002c578063d60ebc8614610041575b5f5ffd5b61003f61003a36600461188b565b610054565b005b61003f61004f3660046118d7565b610279565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611984565b9050846101048160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610178576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610231576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024388608001518960c001516104a1565b61024d8888610555565b50479150508181111561026e5761026e5f846102698585611984565b61091e565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103043447611984565b905086806101000151610343576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610381576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103a48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103db576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610418576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610455576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104698a5f01518b60c001518b8b33610953565b60c08b01526104788a88610555565b504791505081811115610494576104945f846102698585611984565b50505f9091555050505050565b805f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610533578034101561052f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61052f73ffffffffffffffffffffffffffffffffffffffff8316333084610a95565b5f61056360208301836119bc565b73ffffffffffffffffffffffffffffffffffffffff161480610589575043816020013511155b8061059657506040810135155b156105cd576040517f639a6b5600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6105f0836080015173ffffffffffffffffffffffffffffffffffffffff161590565b6105fe578260800151610600565b5f5b6040517f6ff78d6900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301529192505f917f00000000000000000000000000000000000000000000000000000000000000001690636ff78d6990602401602060405180830381865afa15801561068f573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106b391906119de565b905073ffffffffffffffffffffffffffffffffffffffff8116610702576040517f981a2a2b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080840151819073ffffffffffffffffffffffffffffffffffffffff166107fd5760c085015160a086015173ffffffffffffffffffffffffffffffffffffffff8316916313d4a7879161075860208901896119bc565b60c08a0151604080517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff948516600482015293909216602484015260208a013560448401526064830152880135608482015260a4015f604051808303818588803b1580156107e1575f5ffd5b505af11580156107f3573d5f5f3e3d5ffd5b50505050506108e0565b6108108560800151838760c00151610aed565b60a085015173ffffffffffffffffffffffffffffffffffffffff8216906313d4a7879061084060208801886119bc565b60c0890151604080517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b16815273ffffffffffffffffffffffffffffffffffffffff9485166004820152939092166024840152602089013560448401526064830152870135608482015260a4015f604051808303815f87803b1580156108c9575f5ffd5b505af11580156108db573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18560405161090f9190611a45565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610948576109438282610b19565b505050565b610943838383610b86565b5f8280820361098e576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561099c600185611984565b8181106109ab576109ab611b58565b90506020028101906109bd9190611b85565b6109ce9060808101906060016119bc565b90505f6109da82610bf4565b905073ffffffffffffffffffffffffffffffffffffffff8216610a0457610a013482611984565b90505b5f610a0f8888610c3e565b9050610a1b8888610d48565b610a288a89898985610db4565b5f82610a3385610bf4565b610a3d9190611984565b905089811015610a87576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610ae057637939f4245f526004601cfd5b5f60605260405250505050565b6109438383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610f76565b73ffffffffffffffffffffffffffffffffffffffff8216610b66576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052f73ffffffffffffffffffffffffffffffffffffffff8316826110a3565b73ffffffffffffffffffffffffffffffffffffffff8216610bd3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61094373ffffffffffffffffffffffffffffffffffffffff841683836110bc565b5f73ffffffffffffffffffffffffffffffffffffffff821615610c3657610c3173ffffffffffffffffffffffffffffffffffffffff831630611105565b610c38565b475b92915050565b6060815f8167ffffffffffffffff811115610c5b57610c5b61164a565b604051908082528060200260200182016040528015610c84578160200160208202803683370190505b5090505f5f5b83811015610d3d57868682818110610ca457610ca4611b58565b9050602002810190610cb69190611b85565b610cc79060808101906060016119bc565b9150610cd282610bf4565b838281518110610ce457610ce4611b58565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d355734838281518110610d1d57610d1d611b58565b60200260200101818151610d319190611984565b9052505b600101610c8a565b509095945050505050565b5f5b818110156109435736838383818110610d6557610d65611b58565b9050602002810190610d779190611b85565b9050610d8960e0820160c08301611bc1565b15610dab57610dab610da160608301604084016119bc565b82608001356104a1565b50600101610d4a565b83838383825f5b81811015610f5c57368a8a83818110610dd657610dd6611b58565b9050602002810190610de89190611b85565b9050610e17610dfd60608301604084016119bc565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e795750610e79610e3060408301602084016119bc565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e905750610e90610e3060208301836119bc565b8015610f135750610f13610ea760a0830183611bda565b610eb5916004915f91611c42565b610ebe91611c69565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f49576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f538c82611138565b50600101610dbb565b5050610f6b848484845f6113ab565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84161561109d5773ffffffffffffffffffffffffffffffffffffffff8316610fdf576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611052573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110769190611ccf565b101561109d5761109d73ffffffffffffffffffffffffffffffffffffffff851684836115c2565b50505050565b5f385f3884865af161052f5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166110fc576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61115061114860208301836119bc565b6017903b1190565b611186576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036111c5576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6111d9610dfd60608501604086016119bc565b6111e3575f6111e9565b82608001355b90505f6112046111ff60808601606087016119bc565b610bf4565b9050815f0361123a5761123a61122060608601604087016119bc565b61123060408701602088016119bc565b8660800135610aed565b5f8061124960208701876119bc565b73ffffffffffffffffffffffffffffffffffffffff168461126d60a0890189611bda565b60405161127b929190611ce6565b5f6040518083038185875af1925050503d805f81146112b5576040519150601f19603f3d011682016040523d82523d5f602084013e6112ba565b606091505b5091509150816112cd576112cd81611640565b5f6112e16111ff6080890160608a016119bc565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861131260208a018a6119bc565b61132260608b0160408c016119bc565b61133260808c0160608d016119bc565b8b60800135898711611344578661134e565b61134e8a88611984565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826113ba600182611984565b8181106113c9576113c9611b58565b90506020028101906113db9190611b85565b6113ec9060808101906060016119bc565b90505f5f5f5f5f5f5f5b888110156115b25761140960018a611984565b81108015611418575088600114155b156114f3578d8d8281811061142f5761142f611b58565b90506020028101906114419190611b85565b6114529060808101906060016119bc565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146114f3578a818151811061149957611499611b58565b60200260200101516114aa87610bf4565b6114b49190611984565b965073ffffffffffffffffffffffffffffffffffffffff8616156114d8575f6114da565b895b9350838711156114f3576114f3868d610269878b611984565b8d8d8281811061150557611505611b58565b90506020028101906115179190611b85565b6115289060608101906040016119bc565b945061153385610bf4565b925073ffffffffffffffffffffffffffffffffffffffff851615611557575f611559565b895b9150818311801561159657508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156115aa576115aa858d6102698587611984565b6001016113f6565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166110fc575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166110fc57633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561169b5761169b61164a565b60405290565b5f82601f8301126116b0575f5ffd5b813567ffffffffffffffff8111156116ca576116ca61164a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156117175761171761164a565b60405281815283820160200185101561172e575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461176b575f5ffd5b50565b80356117798161174a565b919050565b80358015158114611779575f5ffd5b5f610140828403121561179e575f5ffd5b6117a6611677565b823581529050602082013567ffffffffffffffff8111156117c5575f5ffd5b6117d1848285016116a1565b602083015250604082013567ffffffffffffffff8111156117f0575f5ffd5b6117fc848285016116a1565b60408301525061180e6060830161176e565b606082015261181f6080830161176e565b608082015261183060a0830161176e565b60a082015260c0828101359082015260e08083013590820152611856610100830161177e565b610100820152611869610120830161177e565b61012082015292915050565b5f60608284031215611885575f5ffd5b50919050565b5f5f6080838503121561189c575f5ffd5b823567ffffffffffffffff8111156118b2575f5ffd5b6118be8582860161178d565b9250506118ce8460208501611875565b90509250929050565b5f5f5f5f60a085870312156118ea575f5ffd5b843567ffffffffffffffff811115611900575f5ffd5b61190c8782880161178d565b945050602085013567ffffffffffffffff811115611928575f5ffd5b8501601f81018713611938575f5ffd5b803567ffffffffffffffff81111561194e575f5ffd5b8760208260051b8401011115611962575f5ffd5b602091909101935091506119798660408701611875565b905092959194509250565b81810381811115610c38577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f602082840312156119cc575f5ffd5b81356119d78161174a565b9392505050565b5f602082840312156119ee575f5ffd5b81516119d78161174a565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611a6c6101608401826119f9565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611aa782826119f9565b9150506060840151611ad1608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611b4061012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611bb7575f5ffd5b9190910192915050565b5f60208284031215611bd1575f5ffd5b6119d78261177e565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611c0d575f5ffd5b83018035915067ffffffffffffffff821115611c27575f5ffd5b602001915036819003821315611c3b575f5ffd5b9250929050565b5f5f85851115611c50575f5ffd5b83861115611c5c575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611cc8577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611cdf575f5ffd5b5051919050565b818382375f910190815291905056fea26469706673582212208ccd9d2e90f140e3a492f65c9b41bcea5da394c992eb5166f2a910d98e773da764736f6c634300081d0033";
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
                readonly name: "redeemer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
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
                readonly name: "redeemer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
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
        readonly name: "InvalidGardenData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidRegistry";
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
