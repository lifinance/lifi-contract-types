import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CelerCircleBridgeFacet, CelerCircleBridgeFacetInterface } from "../CelerCircleBridgeFacet";
declare type CelerCircleBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CelerCircleBridgeFacet__factory extends ContractFactory {
    constructor(...args: CelerCircleBridgeFacetConstructorParams);
    deploy(_circleBridgeProxy: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CelerCircleBridgeFacet>;
    getDeployTransaction(_circleBridgeProxy: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CelerCircleBridgeFacet;
    connect(signer: Signer): CelerCircleBridgeFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b50604051611dea380380611dea83398101604081905261002e9161005c565b6001600160a01b039182166080521660a052610094565b6001600160a01b0381168114610059575f5ffd5b50565b5f5f6040838503121561006d575f5ffd5b825161007881610045565b602084015190925061008981610045565b809150509250929050565b60805160a051611d126100d85f395f818161023f015281816105020152818161058f015281816107df015261089601525f818161080001526108be0152611d125ff3fe608060405260043610610028575f3560e01c80638fab06631461002c578063bab657d814610041575b5f5ffd5b61003f61003a366004611883565b610060565b005b34801561004c575f5ffd5b5061003f61005b36600461191e565b610318565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100db576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100eb344761195d565b90508580610100015161012a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610168576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761018b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101c2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101ff576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361023c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b887f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102c7576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102db8b5f01518c60c001518c8c336105d5565b60c08c01526102e98b610718565b504793505050508181111561030c5761030c5f84610307858561195d565b610963565b50505f90915550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610393576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556103a082611995565b806101000151156103dd576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103e683611995565b80610120015115610423576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61042c84611995565b60a081015173ffffffffffffffffffffffffffffffffffffffff1661047d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104ba576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104f7576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61050085611995565b7f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff161461058a576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105b87f00000000000000000000000000000000000000000000000000000000000000008860c00135610998565b6105c96105c488611995565b610718565b50505f90935550505050565b5f82808203610610576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561061e60018561195d565b81811061062d5761062d6119a0565b905060200281019061063f91906119cd565b610650906080810190606001611a09565b90505f61065c82610a4c565b905073ffffffffffffffffffffffffffffffffffffffff821661068657610683348261195d565b90505b5f6106918888610a96565b905061069d8888610ba0565b6106aa8a89898985610c0c565b5f826106b585610a4c565b6106bf919061195d565b90508981101561070a576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60e081015167ffffffffffffffff10156107da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604160248201527f5f627269646765446174612e64657374696e6174696f6e436861696e4964207060448201527f617373656420697320746f6f2062696720746f2066697420696e2075696e743660648201527f3400000000000000000000000000000000000000000000000000000000000000608482015260a401610701565b6108297f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008360c00151610fb7565b60c081015160e082015160a08301516040517f2fbb00ac000000000000000000000000000000000000000000000000000000008152600481019390935267ffffffffffffffff909116602483015273ffffffffffffffffffffffffffffffffffffffff90811660448301527f0000000000000000000000000000000000000000000000000000000000000000811660648301527f00000000000000000000000000000000000000000000000000000000000000001690632fbb00ac906084016020604051808303815f875af1158015610904573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109289190611a22565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1816040516109589190611a95565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff831661098d576109888282610fe3565b505050565b610988838383611050565b805f036109d1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a2a5780341015610a26576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610a2673ffffffffffffffffffffffffffffffffffffffff83163330846110be565b5f73ffffffffffffffffffffffffffffffffffffffff821615610a8e57610a8973ffffffffffffffffffffffffffffffffffffffff831630611116565b610a90565b475b92915050565b6060815f8167ffffffffffffffff811115610ab357610ab3611664565b604051908082528060200260200182016040528015610adc578160200160208202803683370190505b5090505f805b83811015610b9557868682818110610afc57610afc6119a0565b9050602002810190610b0e91906119cd565b610b1f906080810190606001611a09565b9150610b2a82610a4c565b838281518110610b3c57610b3c6119a0565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b8d5734838281518110610b7557610b756119a0565b60200260200101818151610b89919061195d565b9052505b600101610ae2565b509095945050505050565b5f5b818110156109885736838383818110610bbd57610bbd6119a0565b9050602002810190610bcf91906119cd565b9050610be160e0820160c08301611ba8565b15610c0357610c03610bf96060830160408401611a09565b8260800135610998565b50600101610ba2565b838383838260018114610ed3575f8585610c2760018561195d565b818110610c3657610c366119a0565b9050602002810190610c4891906119cd565b610c59906080810190606001611a09565b90505f89815b81811015610e0057368d8d83818110610c7a57610c7a6119a0565b9050602002810190610c8c91906119cd565b9050610cbb610ca16060830160408401611a09565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d1d5750610d1d610cd46040830160208401611a09565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d345750610d34610cd46020830183611a09565b8015610db75750610db7610d4b60a0830183611bc1565b610d59916004915f91611c29565b610d6291611c50565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610ded576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610df78f82611149565b50600101610c5f565b505f90505b610e1060018561195d565b811015610ecb575f888883818110610e2a57610e2a6119a0565b9050602002810190610e3c91906119cd565b610e4d906080810190606001611a09565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ec257858281518110610e9457610e946119a0565b6020026020010151610ea582610a4c565b610eaf919061195d565b92508215610ec257610ec2818885610963565b50600101610e05565b505050610fab565b875f5b81811015610fa857368b8b83818110610ef157610ef16119a0565b9050602002810190610f0391906119cd565b9050610f18610ca16060830160408401611a09565b80610f315750610f31610cd46040830160208401611a09565b8015610f485750610f48610cd46020830183611a09565b8015610f5f5750610f5f610d4b60a0830183611bc1565b610f95576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f9f8d82611149565b50600101610ed6565b50505b50505050505050505050565b6109888383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6113b9565b73ffffffffffffffffffffffffffffffffffffffff8216611030576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a2673ffffffffffffffffffffffffffffffffffffffff8316826114e6565b73ffffffffffffffffffffffffffffffffffffffff821661109d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61098873ffffffffffffffffffffffffffffffffffffffff841683836114ff565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661110957637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61115e6111596020830183611a09565b611548565b611194576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036111d3576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6111e7610ca16060850160408601611a09565b6111f1575f6111f7565b82608001355b90505f61121261120d6080860160608701611a09565b610a4c565b9050815f036112485761124861122e6060860160408701611a09565b61123e6040870160208801611a09565b8660800135610fb7565b5f806112576020870187611a09565b73ffffffffffffffffffffffffffffffffffffffff168461127b60a0890189611bc1565b604051611289929190611cb6565b5f6040518083038185875af1925050503d805f81146112c3576040519150601f19603f3d011682016040523d82523d5f602084013e6112c8565b606091505b5091509150816112db576112db816115dc565b5f6112ef61120d6080890160608a01611a09565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861132060208a018a611a09565b61133060608b0160408c01611a09565b61134060808c0160608d01611a09565b8b60800135898711611352578661135c565b61135c8a8861195d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156114e05773ffffffffffffffffffffffffffffffffffffffff8316611422576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611495573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114b99190611cc5565b10156114e0576114e073ffffffffffffffffffffffffffffffffffffffff851684836115e6565b50505050565b5f385f3884865af1610a265763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661153f576390b8ec185f526004601cfd5b5f603452505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff00000000000000000000000000000000000000000000000000000000008216016115d357506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661153f575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661153f57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156116b5576116b5611664565b60405290565b5f82601f8301126116ca575f5ffd5b813567ffffffffffffffff8111156116e4576116e4611664565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561173157611731611664565b604052818152838201602001851015611748575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611787575f5ffd5b919050565b80358015158114611787575f5ffd5b5f61014082840312156117ac575f5ffd5b6117b4611691565b823581529050602082013567ffffffffffffffff8111156117d3575f5ffd5b6117df848285016116bb565b602083015250604082013567ffffffffffffffff8111156117fe575f5ffd5b61180a848285016116bb565b60408301525061181c60608301611764565b606082015261182d60808301611764565b608082015261183e60a08301611764565b60a082015260c0828101359082015260e08083013590820152611864610100830161178c565b610100820152611877610120830161178c565b61012082015292915050565b5f5f5f60408486031215611895575f5ffd5b833567ffffffffffffffff8111156118ab575f5ffd5b6118b78682870161179b565b935050602084013567ffffffffffffffff8111156118d3575f5ffd5b8401601f810186136118e3575f5ffd5b803567ffffffffffffffff8111156118f9575f5ffd5b8660208260051b840101111561190d575f5ffd5b939660209190910195509293505050565b5f6020828403121561192e575f5ffd5b813567ffffffffffffffff811115611944575f5ffd5b82016101408185031215611956575f5ffd5b9392505050565b81810381811115610a90577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610a90368361179b565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126119ff575f5ffd5b9190910192915050565b5f60208284031215611a19575f5ffd5b61195682611764565b5f60208284031215611a32575f5ffd5b815167ffffffffffffffff81168114611956575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611abc610160840182611a49565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611af78282611a49565b9150506060840151611b21608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611b9061012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611bb8575f5ffd5b6119568261178c565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611bf4575f5ffd5b83018035915067ffffffffffffffff821115611c0e575f5ffd5b602001915036819003821315611c22575f5ffd5b9250929050565b5f5f85851115611c37575f5ffd5b83861115611c43575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611caf577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611cd5575f5ffd5b505191905056fea26469706673582212200a1473530cbadded9b5613acd95f5911fb4febdc01ec362036c9815d8a02cc9e64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_circleBridgeProxy";
            readonly type: "address";
            readonly internalType: "contract ICircleBridgeProxy";
        }, {
            readonly name: "_usdc";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCelerCircleBridge";
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
        readonly name: "swapAndStartBridgeTokensViaCelerCircleBridge";
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
    static createInterface(): CelerCircleBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CelerCircleBridgeFacet;
}
export {};
