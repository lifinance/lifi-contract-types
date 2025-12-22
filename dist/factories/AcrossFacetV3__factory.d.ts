import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetV3, AcrossFacetV3Interface } from "../AcrossFacetV3";
type AcrossFacetV3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetV3__factory extends ContractFactory {
    constructor(...args: AcrossFacetV3ConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetV3>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetV3;
    connect(signer: Signer): AcrossFacetV3__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b506040516120d73803806120d783398101604081905261002e9161005c565b6001600160a01b039182166080521660a052610094565b6001600160a01b0381168114610059575f5ffd5b50565b5f5f6040838503121561006d575f5ffd5b825161007881610045565b602084015190925061008981610045565b809150509250929050565b60805160a0516120086100cf5f395f818160d7015261079201525f8181607b0152818161074801528181610844015261086f01526120085ff3fe60806040526004361061003e575f3560e01c806328832cbd1461004257806328cc431614610057578063afdac3d61461006a578063eb6d3a11146100c6575b5f5ffd5b6100556100503660046118ed565b6100f9565b005b6100556100653660046119b3565b610335565b348015610075575f5ffd5b5061009d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100d1575f5ffd5b5061009d7f000000000000000000000000000000000000000000000000000000000000000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610174576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101843447611a45565b9050868061010001516101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ab895f01518a60c001518a8a3361051e565b60c08a01525f6102ba87611a82565b9050670de0b6b3a76400006102d560a0890160808a01611b5c565b67ffffffffffffffff168b60c001516102ee9190611b7c565b6102f89190611b93565b60608201526103078a82610660565b504791505081811115610328576103285f846103238585611a45565b610976565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103c03447611a45565b9050846103e58160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561041c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610459576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610496576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156104d4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104e687608001518860c001516109ab565b6104f8876104f388611a82565b610660565b5047905081811115610513576105135f846103238585611a45565b50505f909155505050565b5f82808203610559576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610567600185611a45565b81811061057657610576611bcb565b90506020028101906105889190611bf8565b610599906080810190606001611c34565b90505f6105a582610a5f565b905073ffffffffffffffffffffffffffffffffffffffff82166105cf576105cc3482611a45565b90505b5f6105da8888610aa9565b90506105e68888610bb3565b6105f38a89898985610c1f565b5f826105fe85610a5f565b6106089190611a45565b905089811015610652576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b81610120015115155f82610120015151111515146106aa576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8161012001511580156106f05750805f015173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b15610727576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff1661083a577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b9392328360c001518360200151845f01517f000000000000000000000000000000000000000000000000000000000000000086604001518860c0015188606001518a60e001518a60a001518b60c001518c60e001518d61010001518e61012001516040518e63ffffffff1660e01b81526004016108079c9b9a99989796959493929190611c99565b5f604051808303818588803b15801561081e575f5ffd5b505af1158015610830573d5f5f3e3d5ffd5b505050505061093b565b61086d82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610e7e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b9392328260200151835f0151856080015185604001518760c0015187606001518960e001518960a001518a60c001518b60e001518c61010001518d61012001516040518d63ffffffff1660e01b815260040161090d9c9b9a99989796959493929190611c99565b5f604051808303815f87803b158015610924575f5ffd5b505af1158015610936573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161096a9190611d8b565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166109a05761099b8282610eaa565b505050565b61099b838383610f17565b805f036109e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a3d5780341015610a39576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610a3973ffffffffffffffffffffffffffffffffffffffff8316333084610f85565b5f73ffffffffffffffffffffffffffffffffffffffff821615610aa157610a9c73ffffffffffffffffffffffffffffffffffffffff831630610fdd565b610aa3565b475b92915050565b6060815f8167ffffffffffffffff811115610ac657610ac66116b1565b604051908082528060200260200182016040528015610aef578160200160208202803683370190505b5090505f5f5b83811015610ba857868682818110610b0f57610b0f611bcb565b9050602002810190610b219190611bf8565b610b32906080810190606001611c34565b9150610b3d82610a5f565b838281518110610b4f57610b4f611bcb565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ba05734838281518110610b8857610b88611bcb565b60200260200101818151610b9c9190611a45565b9052505b600101610af5565b509095945050505050565b5f5b8181101561099b5736838383818110610bd057610bd0611bcb565b9050602002810190610be29190611bf8565b9050610bf460e0820160c08301611e9e565b15610c1657610c16610c0c6060830160408401611c34565b82608001356109ab565b50600101610bb5565b83838383825f5b81811015610e6457368a8a83818110610c4157610c41611bcb565b9050602002810190610c539190611bf8565b9050610d02610c656020830183611c34565b610c7260a0840184611eb7565b610c80916004915f91611f1f565b610c8991611f46565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580610e1a5750610d36610d1c6060830160408401611c34565b73ffffffffffffffffffffffffffffffffffffffff161590565b158015610d8a5750610d4b6020820182611c34565b73ffffffffffffffffffffffffffffffffffffffff16610d716040830160208401611c34565b73ffffffffffffffffffffffffffffffffffffffff1614155b8015610e1a5750610e18610da46040830160208401611c34565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff1690565b155b15610e51576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e5b8c82611010565b50600101610c26565b5050610e73848484845f611283565b505050505050505050565b61099b8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61149a565b73ffffffffffffffffffffffffffffffffffffffff8216610ef7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a3973ffffffffffffffffffffffffffffffffffffffff8316826115c7565b73ffffffffffffffffffffffffffffffffffffffff8216610f64576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61099b73ffffffffffffffffffffffffffffffffffffffff841683836115e0565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610fd057637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6110286110206020830183611c34565b6017903b1190565b61105e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361109d576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6110b1610d1c6060850160408601611c34565b6110bb575f6110c1565b82608001355b90505f6110dc6110d76080860160608701611c34565b610a5f565b9050815f03611112576111126110f86060860160408701611c34565b6111086040870160208801611c34565b8660800135610e7e565b5f806111216020870187611c34565b73ffffffffffffffffffffffffffffffffffffffff168461114560a0890189611eb7565b604051611153929190611fac565b5f6040518083038185875af1925050503d805f811461118d576040519150601f19603f3d011682016040523d82523d5f602084013e611192565b606091505b5091509150816111a5576111a581611629565b5f6111b96110d76080890160608a01611c34565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886111ea60208a018a611c34565b6111fa60608b0160408c01611c34565b61120a60808c0160608d01611c34565b8b6080013589871161121c5786611226565b6112268a88611a45565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611292600182611a45565b8181106112a1576112a1611bcb565b90506020028101906112b39190611bf8565b6112c4906080810190606001611c34565b90505f5f5f5f5f5f5f5b8881101561148a576112e160018a611a45565b811080156112f0575088600114155b156113cb578d8d8281811061130757611307611bcb565b90506020028101906113199190611bf8565b61132a906080810190606001611c34565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146113cb578a818151811061137157611371611bcb565b602002602001015161138287610a5f565b61138c9190611a45565b965073ffffffffffffffffffffffffffffffffffffffff8616156113b0575f6113b2565b895b9350838711156113cb576113cb868d610323878b611a45565b8d8d828181106113dd576113dd611bcb565b90506020028101906113ef9190611bf8565b611400906060810190604001611c34565b945061140b85610a5f565b925073ffffffffffffffffffffffffffffffffffffffff85161561142f575f611431565b895b9150818311801561146e57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561148257611482858d6103238587611a45565b6001016112ce565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156115c15773ffffffffffffffffffffffffffffffffffffffff8316611503576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611576573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061159a9190611fbb565b10156115c1576115c173ffffffffffffffffffffffffffffffffffffffff85168483611633565b50505050565b5f385f3884865af1610a395763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611620576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611620575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661162057633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611702576117026116b1565b60405290565b5f82601f830112611717575f5ffd5b8135602083015f5f67ffffffffffffffff841115611737576117376116b1565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff82111715611784576117846116b1565b60405283815290508082840187101561179b575f5ffd5b838360208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146117da575f5ffd5b919050565b803580151581146117da575f5ffd5b5f61014082840312156117ff575f5ffd5b6118076116de565b823581529050602082013567ffffffffffffffff811115611826575f5ffd5b61183284828501611708565b602083015250604082013567ffffffffffffffff811115611851575f5ffd5b61185d84828501611708565b60408301525061186f606083016117b7565b6060820152611880608083016117b7565b608082015261189160a083016117b7565b60a082015260c0828101359082015260e080830135908201526118b761010083016117df565b6101008201526118ca61012083016117df565b61012082015292915050565b5f61014082840312156118e7575f5ffd5b50919050565b5f5f5f5f60608587031215611900575f5ffd5b843567ffffffffffffffff811115611916575f5ffd5b611922878288016117ee565b945050602085013567ffffffffffffffff81111561193e575f5ffd5b8501601f8101871361194e575f5ffd5b803567ffffffffffffffff811115611964575f5ffd5b8760208260051b8401011115611978575f5ffd5b60209190910193509150604085013567ffffffffffffffff81111561199b575f5ffd5b6119a7878288016118d6565b91505092959194509250565b5f5f604083850312156119c4575f5ffd5b823567ffffffffffffffff8111156119da575f5ffd5b6119e6858286016117ee565b925050602083013567ffffffffffffffff811115611a02575f5ffd5b611a0e858286016118d6565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610aa357610aa3611a18565b803567ffffffffffffffff811681146117da575f5ffd5b803563ffffffff811681146117da575f5ffd5b5f6101408236031215611a93575f5ffd5b611a9b6116de565b611aa4836117b7565b8152611ab2602084016117b7565b6020820152611ac3604084016117b7565b604082015260608381013590820152611ade60808401611a58565b6080820152611aef60a084016117b7565b60a0820152611b0060c08401611a6f565b60c0820152611b1160e08401611a6f565b60e0820152611b236101008401611a6f565b61010082015261012083013567ffffffffffffffff811115611b43575f5ffd5b611b4f36828601611708565b6101208301525092915050565b5f60208284031215611b6c575f5ffd5b611b7582611a58565b9392505050565b8082028115828204841417610aa357610aa3611a18565b5f82611bc6577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611c2a575f5ffd5b9190910192915050565b5f60208284031215611c44575f5ffd5b611b75826117b7565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff8d16815273ffffffffffffffffffffffffffffffffffffffff8c16602082015273ffffffffffffffffffffffffffffffffffffffff8b16604082015273ffffffffffffffffffffffffffffffffffffffff8a1660608201528860808201528760a08201528660c0820152611d3a60e082018773ffffffffffffffffffffffffffffffffffffffff169052565b63ffffffff851661010082015263ffffffff841661012082015263ffffffff83166101408201526101806101608201525f611d79610180830184611c4d565b9e9d5050505050505050505050505050565b60208152815160208201525f60208301516101406040840152611db2610160840182611c4d565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611ded8282611c4d565b9150506060840151611e17608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611e8661012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611eae575f5ffd5b611b75826117df565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611eea575f5ffd5b83018035915067ffffffffffffffff821115611f04575f5ffd5b602001915036819003821315611f18575f5ffd5b9250929050565b5f5f85851115611f2d575f5ffd5b83861115611f39575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611fa5577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611fcb575f5ffd5b505191905056fea26469706673582212208e6dc21ccf9891a7d84b84978100772b272c718b7c58b0e0b9964e54d57847b064736f6c634300081d0033";
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
        readonly name: "spokePool";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV3";
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
            readonly internalType: "struct AcrossFacetV3.AcrossV3Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountPercent";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAcrossV3";
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
            readonly internalType: "struct AcrossFacetV3.AcrossV3Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountPercent";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "wrappedNative";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
    static createInterface(): AcrossFacetV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetV3;
}
export {};
