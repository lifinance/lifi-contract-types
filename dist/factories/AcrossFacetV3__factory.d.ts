import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetV3, AcrossFacetV3Interface } from "../AcrossFacetV3";
declare type AcrossFacetV3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b506040516120cb3803806120cb83398101604081905261002e9161005c565b6001600160a01b039182166080521660a052610094565b6001600160a01b0381168114610059575f5ffd5b50565b5f5f6040838503121561006d575f5ffd5b825161007881610045565b602084015190925061008981610045565b809150509250929050565b60805160a051611ffc6100cf5f395f818160d7015261079201525f8181607b0152818161074801528181610844015261086f0152611ffc5ff3fe60806040526004361061003e575f3560e01c806328832cbd1461004257806328cc431614610057578063afdac3d61461006a578063eb6d3a11146100c6575b5f5ffd5b6100556100503660046118e1565b6100f9565b005b6100556100653660046119a7565b610335565b348015610075575f5ffd5b5061009d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100d1575f5ffd5b5061009d7f000000000000000000000000000000000000000000000000000000000000000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610174576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101843447611a39565b9050868061010001516101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ab895f01518a60c001518a8a3361051e565b60c08a01525f6102ba87611a76565b9050670de0b6b3a76400006102d560a0890160808a01611b50565b67ffffffffffffffff168b60c001516102ee9190611b70565b6102f89190611b87565b60608201526103078a82610660565b504791505081811115610328576103285f846103238585611a39565b610976565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103c03447611a39565b9050846103e58160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561041c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610459576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610496576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156104d4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104e687608001518860c001516109ab565b6104f8876104f388611a76565b610660565b5047905081811115610513576105135f846103238585611a39565b50505f909155505050565b5f82808203610559576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610567600185611a39565b81811061057657610576611bbf565b90506020028101906105889190611bec565b610599906080810190606001611c28565b90505f6105a582610a5f565b905073ffffffffffffffffffffffffffffffffffffffff82166105cf576105cc3482611a39565b90505b5f6105da8888610aa9565b90506105e68888610bb3565b6105f38a89898985610c1f565b5f826105fe85610a5f565b6106089190611a39565b905089811015610652576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b81610120015115155f82610120015151111515146106aa576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8161012001511580156106f05750805f015173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b15610727576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff1661083a577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b9392328360c001518360200151845f01517f000000000000000000000000000000000000000000000000000000000000000086604001518860c0015188606001518a60e001518a60a001518b60c001518c60e001518d61010001518e61012001516040518e63ffffffff1660e01b81526004016108079c9b9a99989796959493929190611c8d565b5f604051808303818588803b15801561081e575f5ffd5b505af1158015610830573d5f5f3e3d5ffd5b505050505061093b565b61086d82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610de1565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b9392328260200151835f0151856080015185604001518760c0015187606001518960e001518960a001518a60c001518b60e001518c61010001518d61012001516040518d63ffffffff1660e01b815260040161090d9c9b9a99989796959493929190611c8d565b5f604051808303815f87803b158015610924575f5ffd5b505af1158015610936573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161096a9190611d7f565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166109a05761099b8282610e0d565b505050565b61099b838383610e7a565b805f036109e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a3d5780341015610a39576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610a3973ffffffffffffffffffffffffffffffffffffffff8316333084610ee8565b5f73ffffffffffffffffffffffffffffffffffffffff821615610aa157610a9c73ffffffffffffffffffffffffffffffffffffffff831630610f40565b610aa3565b475b92915050565b6060815f8167ffffffffffffffff811115610ac657610ac66116a5565b604051908082528060200260200182016040528015610aef578160200160208202803683370190505b5090505f5f5b83811015610ba857868682818110610b0f57610b0f611bbf565b9050602002810190610b219190611bec565b610b32906080810190606001611c28565b9150610b3d82610a5f565b838281518110610b4f57610b4f611bbf565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ba05734838281518110610b8857610b88611bbf565b60200260200101818151610b9c9190611a39565b9052505b600101610af5565b509095945050505050565b5f5b8181101561099b5736838383818110610bd057610bd0611bbf565b9050602002810190610be29190611bec565b9050610bf460e0820160c08301611e92565b15610c1657610c16610c0c6060830160408401611c28565b82608001356109ab565b50600101610bb5565b83838383825f5b81811015610dc757368a8a83818110610c4157610c41611bbf565b9050602002810190610c539190611bec565b9050610c82610c686060830160408401611c28565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610ce45750610ce4610c9b6040830160208401611c28565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610cfb5750610cfb610c9b6020830183611c28565b8015610d7e5750610d7e610d1260a0830183611eab565b610d20916004915f91611f13565b610d2991611f3a565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610db4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dbe8c82610f73565b50600101610c26565b5050610dd6848484845f6111e3565b505050505050505050565b61099b8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6113fa565b73ffffffffffffffffffffffffffffffffffffffff8216610e5a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a3973ffffffffffffffffffffffffffffffffffffffff831682611527565b73ffffffffffffffffffffffffffffffffffffffff8216610ec7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61099b73ffffffffffffffffffffffffffffffffffffffff84168383611540565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610f3357637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b610f88610f836020830183611c28565b611589565b610fbe576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610ffd576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611011610c686060850160408601611c28565b61101b575f611021565b82608001355b90505f61103c6110376080860160608701611c28565b610a5f565b9050815f03611072576110726110586060860160408701611c28565b6110686040870160208801611c28565b8660800135610de1565b5f806110816020870187611c28565b73ffffffffffffffffffffffffffffffffffffffff16846110a560a0890189611eab565b6040516110b3929190611fa0565b5f6040518083038185875af1925050503d805f81146110ed576040519150601f19603f3d011682016040523d82523d5f602084013e6110f2565b606091505b509150915081611105576111058161161d565b5f6111196110376080890160608a01611c28565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861114a60208a018a611c28565b61115a60608b0160408c01611c28565b61116a60808c0160608d01611c28565b8b6080013589871161117c5786611186565b6111868a88611a39565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826111f2600182611a39565b81811061120157611201611bbf565b90506020028101906112139190611bec565b611224906080810190606001611c28565b90505f5f5f5f5f5f5f5b888110156113ea5761124160018a611a39565b81108015611250575088600114155b1561132b578d8d8281811061126757611267611bbf565b90506020028101906112799190611bec565b61128a906080810190606001611c28565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461132b578a81815181106112d1576112d1611bbf565b60200260200101516112e287610a5f565b6112ec9190611a39565b965073ffffffffffffffffffffffffffffffffffffffff861615611310575f611312565b895b93508387111561132b5761132b868d610323878b611a39565b8d8d8281811061133d5761133d611bbf565b905060200281019061134f9190611bec565b611360906060810190604001611c28565b945061136b85610a5f565b925073ffffffffffffffffffffffffffffffffffffffff85161561138f575f611391565b895b915081831180156113ce57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156113e2576113e2858d6103238587611a39565b60010161122e565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156115215773ffffffffffffffffffffffffffffffffffffffff8316611463576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156114d6573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114fa9190611faf565b10156115215761152173ffffffffffffffffffffffffffffffffffffffff85168483611627565b50505050565b5f385f3884865af1610a395763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611580576390b8ec185f526004601cfd5b5f603452505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161161457506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611580575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661158057633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156116f6576116f66116a5565b60405290565b5f82601f83011261170b575f5ffd5b8135602083015f5f67ffffffffffffffff84111561172b5761172b6116a5565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff82111715611778576117786116a5565b60405283815290508082840187101561178f575f5ffd5b838360208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146117ce575f5ffd5b919050565b803580151581146117ce575f5ffd5b5f61014082840312156117f3575f5ffd5b6117fb6116d2565b823581529050602082013567ffffffffffffffff81111561181a575f5ffd5b611826848285016116fc565b602083015250604082013567ffffffffffffffff811115611845575f5ffd5b611851848285016116fc565b604083015250611863606083016117ab565b6060820152611874608083016117ab565b608082015261188560a083016117ab565b60a082015260c0828101359082015260e080830135908201526118ab61010083016117d3565b6101008201526118be61012083016117d3565b61012082015292915050565b5f61014082840312156118db575f5ffd5b50919050565b5f5f5f5f606085870312156118f4575f5ffd5b843567ffffffffffffffff81111561190a575f5ffd5b611916878288016117e2565b945050602085013567ffffffffffffffff811115611932575f5ffd5b8501601f81018713611942575f5ffd5b803567ffffffffffffffff811115611958575f5ffd5b8760208260051b840101111561196c575f5ffd5b60209190910193509150604085013567ffffffffffffffff81111561198f575f5ffd5b61199b878288016118ca565b91505092959194509250565b5f5f604083850312156119b8575f5ffd5b823567ffffffffffffffff8111156119ce575f5ffd5b6119da858286016117e2565b925050602083013567ffffffffffffffff8111156119f6575f5ffd5b611a02858286016118ca565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610aa357610aa3611a0c565b803567ffffffffffffffff811681146117ce575f5ffd5b803563ffffffff811681146117ce575f5ffd5b5f6101408236031215611a87575f5ffd5b611a8f6116d2565b611a98836117ab565b8152611aa6602084016117ab565b6020820152611ab7604084016117ab565b604082015260608381013590820152611ad260808401611a4c565b6080820152611ae360a084016117ab565b60a0820152611af460c08401611a63565b60c0820152611b0560e08401611a63565b60e0820152611b176101008401611a63565b61010082015261012083013567ffffffffffffffff811115611b37575f5ffd5b611b43368286016116fc565b6101208301525092915050565b5f60208284031215611b60575f5ffd5b611b6982611a4c565b9392505050565b8082028115828204841417610aa357610aa3611a0c565b5f82611bba577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611c1e575f5ffd5b9190910192915050565b5f60208284031215611c38575f5ffd5b611b69826117ab565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff8d16815273ffffffffffffffffffffffffffffffffffffffff8c16602082015273ffffffffffffffffffffffffffffffffffffffff8b16604082015273ffffffffffffffffffffffffffffffffffffffff8a1660608201528860808201528760a08201528660c0820152611d2e60e082018773ffffffffffffffffffffffffffffffffffffffff169052565b63ffffffff851661010082015263ffffffff841661012082015263ffffffff83166101408201526101806101608201525f611d6d610180830184611c41565b9e9d5050505050505050505050505050565b60208152815160208201525f60208301516101406040840152611da6610160840182611c41565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611de18282611c41565b9150506060840151611e0b608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611e7a61012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611ea2575f5ffd5b611b69826117d3565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ede575f5ffd5b83018035915067ffffffffffffffff821115611ef8575f5ffd5b602001915036819003821315611f0c575f5ffd5b9250929050565b5f5f85851115611f21575f5ffd5b83861115611f2d575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611f99577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611fbf575f5ffd5b505191905056fea2646970667358221220fa9eac2caa8a2501a10f297e0a9ec60985635945221f96e5fbcb0e4eb672b51064736f6c634300081d0033";
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
