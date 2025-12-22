import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacet, AcrossFacetInterface } from "../AcrossFacet";
type AcrossFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacet__factory extends ContractFactory {
    constructor(...args: AcrossFacetConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacet>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacet;
    connect(signer: Signer): AcrossFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b50604051611e23380380611e2383398101604081905261002e9161005c565b6001600160a01b039182166080521660a052610094565b6001600160a01b0381168114610059575f5ffd5b50565b5f5f6040838503121561006d575f5ffd5b825161007881610045565b602084015190925061008981610045565b809150509250929050565b60805160a051611d606100c35f395f6105c501525f818161059a0152818161067701526106a20152611d605ff3fe608060405260043610610028575f3560e01c80631fd8010c1461002c5780633a3f733214610041575b5f5ffd5b61003f61003a3660046117af565b610054565b005b61003f61004f366004611814565b610279565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df34476118da565b9050846101048160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610178576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610231576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024388608001518960c001516104a1565b61024d8888610555565b50479150508181111561026e5761026e5f8461026985856118da565b6107b1565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61030434476118da565b905086806101000151610343576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610381576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103a48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103db576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610418576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610455576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104698a5f01518b60c001518b8b336107e6565b60c08b01526104788a88610555565b504791505081811115610494576104945f8461026985856118da565b50505f9091555050505050565b805f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610533578034101561052f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61052f73ffffffffffffffffffffffffffffffffffffffff8316333084610928565b608082015173ffffffffffffffffffffffffffffffffffffffff1661066d5760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692631186ec339290917f00000000000000000000000000000000000000000000000000000000000000009083906105f46020890189611912565b61060460408a0160208b01611939565b61061160408b018b61195c565b8b606001356040518b63ffffffff1660e01b815260040161063a999897969594939291906119c4565b5f604051808303818588803b158015610651575f5ffd5b505af1158015610663573d5f5f3e3d5ffd5b5050505050610776565b6106a082608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610980565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631186ec338360a0015184608001518560c001518660e00151865f0160208101906107029190611912565b6107126040890160208a01611939565b61071f60408a018a61195c565b8a606001356040518a63ffffffff1660e01b8152600401610748999897969594939291906119c4565b5f604051808303815f87803b15801561075f575f5ffd5b505af1158015610771573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516107a59190611ac9565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166107db576107d682826109ac565b505050565b6107d6838383610a19565b5f82808203610821576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561082f6001856118da565b81811061083e5761083e611bdc565b90506020028101906108509190611c09565b610861906080810190606001611c45565b90505f61086d82610a87565b905073ffffffffffffffffffffffffffffffffffffffff82166108975761089434826118da565b90505b5f6108a28888610ad1565b90506108ae8888610bdb565b6108bb8a89898985610c47565b5f826108c685610a87565b6108d091906118da565b90508981101561091a576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661097357637939f4245f526004601cfd5b5f60605260405250505050565b6107d68383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610ea6565b73ffffffffffffffffffffffffffffffffffffffff82166109f9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61052f73ffffffffffffffffffffffffffffffffffffffff831682610fd3565b73ffffffffffffffffffffffffffffffffffffffff8216610a66576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107d673ffffffffffffffffffffffffffffffffffffffff84168383610fec565b5f73ffffffffffffffffffffffffffffffffffffffff821615610ac957610ac473ffffffffffffffffffffffffffffffffffffffff831630611035565b610acb565b475b92915050565b6060815f8167ffffffffffffffff811115610aee57610aee61157a565b604051908082528060200260200182016040528015610b17578160200160208202803683370190505b5090505f5f5b83811015610bd057868682818110610b3757610b37611bdc565b9050602002810190610b499190611c09565b610b5a906080810190606001611c45565b9150610b6582610a87565b838281518110610b7757610b77611bdc565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610bc85734838281518110610bb057610bb0611bdc565b60200260200101818151610bc491906118da565b9052505b600101610b1d565b509095945050505050565b5f5b818110156107d65736838383818110610bf857610bf8611bdc565b9050602002810190610c0a9190611c09565b9050610c1c60e0820160c08301611c5e565b15610c3e57610c3e610c346060830160408401611c45565b82608001356104a1565b50600101610bdd565b83838383825f5b81811015610e8c57368a8a83818110610c6957610c69611bdc565b9050602002810190610c7b9190611c09565b9050610d2a610c8d6020830183611c45565b610c9a60a084018461195c565b610ca8916004915f91611c77565b610cb191611c9e565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580610e425750610d5e610d446060830160408401611c45565b73ffffffffffffffffffffffffffffffffffffffff161590565b158015610db25750610d736020820182611c45565b73ffffffffffffffffffffffffffffffffffffffff16610d996040830160208401611c45565b73ffffffffffffffffffffffffffffffffffffffff1614155b8015610e425750610e40610dcc6040830160208401611c45565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff1690565b155b15610e79576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e838c82611068565b50600101610c4e565b5050610e9b848484845f6112db565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615610fcd5773ffffffffffffffffffffffffffffffffffffffff8316610f0f576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610f82573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fa69190611d04565b1015610fcd57610fcd73ffffffffffffffffffffffffffffffffffffffff851684836114f2565b50505050565b5f385f3884865af161052f5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661102c576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6110806110786020830183611c45565b6017903b1190565b6110b6576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036110f5576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611109610d446060850160408601611c45565b611113575f611119565b82608001355b90505f61113461112f6080860160608701611c45565b610a87565b9050815f0361116a5761116a6111506060860160408701611c45565b6111606040870160208801611c45565b8660800135610980565b5f806111796020870187611c45565b73ffffffffffffffffffffffffffffffffffffffff168461119d60a089018961195c565b6040516111ab929190611d1b565b5f6040518083038185875af1925050503d805f81146111e5576040519150601f19603f3d011682016040523d82523d5f602084013e6111ea565b606091505b5091509150816111fd576111fd81611570565b5f61121161112f6080890160608a01611c45565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861124260208a018a611c45565b61125260608b0160408c01611c45565b61126260808c0160608d01611c45565b8b60800135898711611274578661127e565b61127e8a886118da565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826112ea6001826118da565b8181106112f9576112f9611bdc565b905060200281019061130b9190611c09565b61131c906080810190606001611c45565b90505f5f5f5f5f5f5f5b888110156114e25761133960018a6118da565b81108015611348575088600114155b15611423578d8d8281811061135f5761135f611bdc565b90506020028101906113719190611c09565b611382906080810190606001611c45565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611423578a81815181106113c9576113c9611bdc565b60200260200101516113da87610a87565b6113e491906118da565b965073ffffffffffffffffffffffffffffffffffffffff861615611408575f61140a565b895b93508387111561142357611423868d610269878b6118da565b8d8d8281811061143557611435611bdc565b90506020028101906114479190611c09565b611458906060810190604001611c45565b945061146385610a87565b925073ffffffffffffffffffffffffffffffffffffffff851615611487575f611489565b895b915081831180156114c657508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156114da576114da858d61026985876118da565b600101611326565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661102c575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661102c57633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156115cb576115cb61157a565b60405290565b5f82601f8301126115e0575f5ffd5b813567ffffffffffffffff8111156115fa576115fa61157a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156116475761164761157a565b60405281815283820160200185101561165e575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461169d575f5ffd5b919050565b8035801515811461169d575f5ffd5b5f61014082840312156116c2575f5ffd5b6116ca6115a7565b823581529050602082013567ffffffffffffffff8111156116e9575f5ffd5b6116f5848285016115d1565b602083015250604082013567ffffffffffffffff811115611714575f5ffd5b611720848285016115d1565b6040830152506117326060830161167a565b60608201526117436080830161167a565b608082015261175460a0830161167a565b60a082015260c0828101359082015260e0808301359082015261177a61010083016116a2565b61010082015261178d61012083016116a2565b61012082015292915050565b5f608082840312156117a9575f5ffd5b50919050565b5f5f604083850312156117c0575f5ffd5b823567ffffffffffffffff8111156117d6575f5ffd5b6117e2858286016116b1565b925050602083013567ffffffffffffffff8111156117fe575f5ffd5b61180a85828601611799565b9150509250929050565b5f5f5f5f60608587031215611827575f5ffd5b843567ffffffffffffffff81111561183d575f5ffd5b611849878288016116b1565b945050602085013567ffffffffffffffff811115611865575f5ffd5b8501601f81018713611875575f5ffd5b803567ffffffffffffffff81111561188b575f5ffd5b8760208260051b840101111561189f575f5ffd5b60209190910193509150604085013567ffffffffffffffff8111156118c2575f5ffd5b6118ce87828801611799565b91505092959194509250565b81810381811115610acb577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215611922575f5ffd5b81358060070b8114611932575f5ffd5b9392505050565b5f60208284031215611949575f5ffd5b813563ffffffff81168114611932575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261198f575f5ffd5b83018035915067ffffffffffffffff8211156119a9575f5ffd5b6020019150368190038213156119bd575f5ffd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff8a16815273ffffffffffffffffffffffffffffffffffffffff891660208201528760408201528660608201528560070b608082015263ffffffff851660a082015261010060c08201528261010082015282846101208301375f61012084830101525f6101207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f86011683010190508260e08301529a9950505050505050505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611af0610160840182611a7d565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611b2b8282611a7d565b9150506060840151611b55608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611bc461012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611c3b575f5ffd5b9190910192915050565b5f60208284031215611c55575f5ffd5b6119328261167a565b5f60208284031215611c6e575f5ffd5b611932826116a2565b5f5f85851115611c85575f5ffd5b83861115611c91575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611cfd577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611d14575f5ffd5b5051919050565b818382375f910190815291905056fea264697066735822122098192a0ba1429c81015bf49470a66f600a44417cee509a49fb85ff0265d34c8b64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcross";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly components: readonly [{
                readonly name: "relayerFeePct";
                readonly type: "int64";
                readonly internalType: "int64";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "maxCount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAcross";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly components: readonly [{
                readonly name: "relayerFeePct";
                readonly type: "int64";
                readonly internalType: "int64";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "maxCount";
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
    static createInterface(): AcrossFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacet;
}
export {};
