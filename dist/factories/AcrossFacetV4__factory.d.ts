import { Signer, ContractFactory, BytesLike, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetV4, AcrossFacetV4Interface } from "../AcrossFacetV4";
type AcrossFacetV4ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetV4__factory extends ContractFactory {
    constructor(...args: AcrossFacetV4ConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetV4>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetV4;
    connect(signer: Signer): AcrossFacetV4__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b506040516120d83803806120d883398101604081905261002e91610076565b6001600160a01b0382161580610042575080155b15610060576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0390911660805260a0526100ad565b5f5f60408385031215610087575f5ffd5b82516001600160a01b038116811461009d575f5ffd5b6020939093015192949293505050565b60805160a051611ff06100e85f395f81816082015261089801525f818160f40152818161084e0152818161094601526109710152611ff05ff3fe608060405260043610610058575f3560e01c8063df87ec6211610041578063df87ec62146100b7578063e796cd98146100ca578063f6503992146100e3575f5ffd5b8063a629fcbf1461005c578063d999984d14610071575b5f5ffd5b61006f61006a36600461195d565b61013b565b005b34801561007c575f5ffd5b506100a47f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b61006f6100c5366004611a23565b61037f565b3480156100d5575f5ffd5b506100a4651f2abb7bf89b81565b3480156100ee575f5ffd5b506101167f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ae565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101b6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101c63447611ab5565b905086806101000151610205576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102288160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561025f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361029c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102d9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ed895f01518a60c001518a8a33610568565b60c08a01525f6102fc87611afa565b9050670de0b6b3a764000061031760a0890160808a01611bb8565b6fffffffffffffffffffffffffffffffff168b60c001516103389190611bd8565b6103429190611bef565b60608201526103518a826106aa565b504791505081811115610372576103725f8461036d8585611ab5565b610a91565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103fa576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61040a3447611ab5565b90508461042f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610466576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104a3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104e0576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561051e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61053087608001518860c00151610ac6565b6105428761053d88611afa565b6106aa565b504790508181111561055d5761055d5f8461036d8585611ab5565b50505f909155505050565b5f828082036105a3576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856105b1600185611ab5565b8181106105c0576105c0611c27565b90506020028101906105d29190611c54565b6105e3906080810190606001611c90565b90505f6105ef82610b7a565b905073ffffffffffffffffffffffffffffffffffffffff8216610619576106163482611ab5565b90505b5f6106248888610bc4565b90506106308888610cce565b61063d8a89898985610d3a565b5f8261064885610b7a565b6106529190611ab5565b90508981101561069c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b81610120015115155f82610120015151111515146106f4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6107028360e001516110e5565b90507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff16036107c8578151610787576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60e0830151835183516040519081527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a361082d565b8261012001511580156107f65750815160a084015173ffffffffffffffffffffffffffffffffffffffff1614155b1561082d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608083015173ffffffffffffffffffffffffffffffffffffffff1661093c577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5425c68460c001518460200151855f01517f000000000000000000000000000000000000000000000000000000000000000087604001518960c001518960600151898b60a001518c60c001518d60e001518e61010001518f61012001516040518e63ffffffff1660e01b81526004016109099c9b9a99989796959493929190611cf5565b5f604051808303818588803b158015610920575f5ffd5b505af1158015610932573d5f5f3e3d5ffd5b5050505050610a55565b61096f83608001517f00000000000000000000000000000000000000000000000000000000000000008560c0015161110a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5425c68360200151845f01516109d5876080015173ffffffffffffffffffffffffffffffffffffffff1690565b86604001518860c001518860600151888a60a001518b60c001518c60e001518d61010001518e61012001516040518d63ffffffff1660e01b8152600401610a279c9b9a99989796959493929190611cf5565b5f604051808303815f87803b158015610a3e575f5ffd5b505af1158015610a50573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610a849190611d73565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610abb57610ab68282611136565b505050565b610ab68383836111a3565b805f03610aff576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b585780341015610b54576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610b5473ffffffffffffffffffffffffffffffffffffffff8316333084611211565b5f73ffffffffffffffffffffffffffffffffffffffff821615610bbc57610bb773ffffffffffffffffffffffffffffffffffffffff831630611269565b610bbe565b475b92915050565b6060815f8167ffffffffffffffff811115610be157610be1611726565b604051908082528060200260200182016040528015610c0a578160200160208202803683370190505b5090505f805b83811015610cc357868682818110610c2a57610c2a611c27565b9050602002810190610c3c9190611c54565b610c4d906080810190606001611c90565b9150610c5882610b7a565b838281518110610c6a57610c6a611c27565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610cbb5734838281518110610ca357610ca3611c27565b60200260200101818151610cb79190611ab5565b9052505b600101610c10565b509095945050505050565b5f5b81811015610ab65736838383818110610ceb57610ceb611c27565b9050602002810190610cfd9190611c54565b9050610d0f60e0820160c08301611e86565b15610d3157610d31610d276060830160408401611c90565b8260800135610ac6565b50600101610cd0565b838383838260018114611001575f8585610d55600185611ab5565b818110610d6457610d64611c27565b9050602002810190610d769190611c54565b610d87906080810190606001611c90565b90505f89815b81811015610f2e57368d8d83818110610da857610da8611c27565b9050602002810190610dba9190611c54565b9050610de9610dcf6060830160408401611c90565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e4b5750610e4b610e026040830160208401611c90565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e625750610e62610e026020830183611c90565b8015610ee55750610ee5610e7960a0830183611e9f565b610e87916004915f91611f07565b610e9091611f2e565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f1b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f258f8261129c565b50600101610d8d565b505f90505b610f3e600185611ab5565b811015610ff9575f888883818110610f5857610f58611c27565b9050602002810190610f6a9190611c54565b610f7b906080810190606001611c90565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ff057858281518110610fc257610fc2611c27565b6020026020010151610fd382610b7a565b610fdd9190611ab5565b92508215610ff057610ff0818885610a91565b50600101610f33565b5050506110d9565b875f5b818110156110d657368b8b8381811061101f5761101f611c27565b90506020028101906110319190611c54565b9050611046610dcf6060830160408401611c90565b8061105f575061105f610e026040830160208401611c90565b80156110765750611076610e026020830183611c90565b801561108d575061108d610e7960a0830183611e9f565b6110c3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110cd8d8261129c565b50600101611004565b50505b50505050505050505050565b5f660416edef1601be82036111015750651f2abb7bf89b919050565b5090565b919050565b610ab68383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61150f565b73ffffffffffffffffffffffffffffffffffffffff8216611183576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b5473ffffffffffffffffffffffffffffffffffffffff83168261163c565b73ffffffffffffffffffffffffffffffffffffffff82166111f0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ab673ffffffffffffffffffffffffffffffffffffffff84168383611655565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661125c57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6112b46112ac6020830183611c90565b6017903b1190565b6112ea576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611329576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61133d610dcf6060850160408601611c90565b611347575f61134d565b82608001355b90505f6113686113636080860160608701611c90565b610b7a565b9050815f0361139e5761139e6113846060860160408701611c90565b6113946040870160208801611c90565b866080013561110a565b5f806113ad6020870187611c90565b73ffffffffffffffffffffffffffffffffffffffff16846113d160a0890189611e9f565b6040516113df929190611f94565b5f6040518083038185875af1925050503d805f8114611419576040519150601f19603f3d011682016040523d82523d5f602084013e61141e565b606091505b509150915081611431576114318161169e565b5f6114456113636080890160608a01611c90565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861147660208a018a611c90565b61148660608b0160408c01611c90565b61149660808c0160608d01611c90565b8b608001358987116114a857866114b2565b6114b28a88611ab5565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156116365773ffffffffffffffffffffffffffffffffffffffff8316611578576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156115eb573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061160f9190611fa3565b10156116365761163673ffffffffffffffffffffffffffffffffffffffff851684836116a8565b50505050565b5f385f3884865af1610b545763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611695576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611695575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661169557633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561177757611777611726565b60405290565b5f82601f83011261178c575f5ffd5b8135602083015f5f67ffffffffffffffff8411156117ac576117ac611726565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff821117156117f9576117f9611726565b604052838152905080828401871015611810575f5ffd5b838360208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611105575f5ffd5b80358015158114611105575f5ffd5b5f610140828403121561186f575f5ffd5b611877611753565b823581529050602082013567ffffffffffffffff811115611896575f5ffd5b6118a28482850161177d565b602083015250604082013567ffffffffffffffff8111156118c1575f5ffd5b6118cd8482850161177d565b6040830152506118df6060830161182c565b60608201526118f06080830161182c565b608082015261190160a0830161182c565b60a082015260c0828101359082015260e08083013590820152611927610100830161184f565b61010082015261193a610120830161184f565b61012082015292915050565b5f6101408284031215611957575f5ffd5b50919050565b5f5f5f5f60608587031215611970575f5ffd5b843567ffffffffffffffff811115611986575f5ffd5b6119928782880161185e565b945050602085013567ffffffffffffffff8111156119ae575f5ffd5b8501601f810187136119be575f5ffd5b803567ffffffffffffffff8111156119d4575f5ffd5b8760208260051b84010111156119e8575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611a0b575f5ffd5b611a1787828801611946565b91505092959194509250565b5f5f60408385031215611a34575f5ffd5b823567ffffffffffffffff811115611a4a575f5ffd5b611a568582860161185e565b925050602083013567ffffffffffffffff811115611a72575f5ffd5b611a7e85828601611946565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610bbe57610bbe611a88565b80356fffffffffffffffffffffffffffffffff81168114611105575f5ffd5b803563ffffffff81168114611105575f5ffd5b5f6101408236031215611b0b575f5ffd5b611b13611753565b82358152602080840135908201526040808401359082015260608084013590820152611b4160808401611ac8565b608082015260a08381013590820152611b5c60c08401611ae7565b60c0820152611b6d60e08401611ae7565b60e0820152611b7f6101008401611ae7565b61010082015261012083013567ffffffffffffffff811115611b9f575f5ffd5b611bab3682860161177d565b6101208301525092915050565b5f60208284031215611bc8575f5ffd5b611bd182611ac8565b9392505050565b8082028115828204841417610bbe57610bbe611a88565b5f82611c22577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611c86575f5ffd5b9190910192915050565b5f60208284031215611ca0575f5ffd5b611bd18261182c565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b8c81528b60208201528a60408201528960608201528860808201528760a08201528660c08201528560e082015263ffffffff851661010082015263ffffffff841661012082015263ffffffff83166101408201526101806101608201525f611d61610180830184611ca9565b9e9d5050505050505050505050505050565b60208152815160208201525f60208301516101406040840152611d9a610160840182611ca9565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611dd58282611ca9565b9150506060840151611dff608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611e6e61012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611e96575f5ffd5b611bd18261184f565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ed2575f5ffd5b83018035915067ffffffffffffffff821115611eec575f5ffd5b602001915036819003821315611f00575f5ffd5b9250929050565b5f5f85851115611f15575f5ffd5b83861115611f21575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611f8d577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611fb3575f5ffd5b505191905056fea26469706673582212203023d383c1dbd712ce49c3bdfa89f122d0c03d0f35291011c34b89684338e44c64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePoolV4";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "ACROSS_CHAIN_ID_SOLANA";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "SPOKEPOOL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePoolV4";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "WRAPPED_NATIVE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4";
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
            readonly internalType: "struct AcrossFacetV4.AcrossV4Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
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
        readonly name: "swapAndStartBridgeTokensViaAcrossV4";
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
            readonly internalType: "struct AcrossFacetV4.AcrossV4Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
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
        readonly name: "InvalidNonEVMReceiver";
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
    static createInterface(): AcrossFacetV4Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetV4;
}
export {};
