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
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161213138038061213183398101604081905261002e91610044565b6001600160a01b0390911660805260a05261007b565b5f5f60408385031215610055575f5ffd5b82516001600160a01b038116811461006b575f5ffd5b6020939093015192949293505050565b60805160a05161207b6100b65f395f818160df015261092a01525f8181606d015281816108e0015281816109d80152610a03015261207b5ff3fe608060405260043610610058575f3560e01c8063d999984d11610041578063d999984d146100ce578063df87ec621461010f578063e796cd9814610122575f5ffd5b80638021fef71461005c578063a629fcbf146100b9575b5f5ffd5b348015610067575f5ffd5b5061008f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100cc6100c73660046119e8565b610138565b005b3480156100d9575f5ffd5b506101017f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016100b0565b6100cc61011d366004611aae565b610381565b34801561012d575f5ffd5b50610101620186a081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101b3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101c33447611b40565b905086806101000151610202576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102258160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561025c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610299576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102d6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ea895f01518a60c001518a8a3361056a565b60c08a01525f6102f987611b85565b90506c0c9f2c9cd04674edea4000000061031960a0890160808a01611c43565b6fffffffffffffffffffffffffffffffff168b60c0015161033a9190611c63565b6103449190611c7a565b60608201526103538a826106ac565b504791505081811115610374576103745f8461036f8585611b40565b610b1f565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103fc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61040c3447611b40565b9050846104318160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610468576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104a5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104e2576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610520576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61053287608001518860c00151610b54565b6105448761053f88611b85565b6106ac565b504790508181111561055f5761055f5f8461036f8585611b40565b50505f909155505050565b5f828082036105a5576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856105b3600185611b40565b8181106105c2576105c2611cb2565b90506020028101906105d49190611cdf565b6105e5906080810190606001611d1b565b90505f6105f182610c08565b905073ffffffffffffffffffffffffffffffffffffffff821661061b576106183482611b40565b90505b5f6106268888610c52565b90506106328888610d5c565b61063f8a89898985610dc8565b5f8261064a85610c08565b6106549190611b40565b90508981101561069e576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b81610120015115155f82610120015151111515146106f6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6107048360e00151611173565b90507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff16036107c8578151610789576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b825182516040519081528291907f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a3610820565b815160a084015173ffffffffffffffffffffffffffffffffffffffff908116911614610820576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b826101200151158015610861575060a083015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114155b80156108885750815160a084015173ffffffffffffffffffffffffffffffffffffffff1614155b156108bf576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608083015173ffffffffffffffffffffffffffffffffffffffff166109ce577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5425c68460c001518460200151855f01517f000000000000000000000000000000000000000000000000000000000000000087604001518960c001518960600151898b60a001518c60c001518d60e001518e61010001518f61012001516040518e63ffffffff1660e01b815260040161099b9c9b9a99989796959493929190611d80565b5f604051808303818588803b1580156109b2575f5ffd5b505af11580156109c4573d5f5f3e3d5ffd5b5050505050610ae3565b610a0183608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151611195565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5425c68360200151845f0151866080015173ffffffffffffffffffffffffffffffffffffffff165f1b86604001518860c001518860600151888a60a001518b60c001518c60e001518d61010001518e61012001516040518d63ffffffff1660e01b8152600401610ab59c9b9a99989796959493929190611d80565b5f604051808303815f87803b158015610acc575f5ffd5b505af1158015610ade573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610b129190611dfe565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b4957610b4482826111c1565b505050565b610b4483838361122e565b805f03610b8d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610be65780341015610be2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610be273ffffffffffffffffffffffffffffffffffffffff831633308461129c565b5f73ffffffffffffffffffffffffffffffffffffffff821615610c4a57610c4573ffffffffffffffffffffffffffffffffffffffff8316306112f4565b610c4c565b475b92915050565b6060815f8167ffffffffffffffff811115610c6f57610c6f6117b1565b604051908082528060200260200182016040528015610c98578160200160208202803683370190505b5090505f805b83811015610d5157868682818110610cb857610cb8611cb2565b9050602002810190610cca9190611cdf565b610cdb906080810190606001611d1b565b9150610ce682610c08565b838281518110610cf857610cf8611cb2565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d495734838281518110610d3157610d31611cb2565b60200260200101818151610d459190611b40565b9052505b600101610c9e565b509095945050505050565b5f5b81811015610b445736838383818110610d7957610d79611cb2565b9050602002810190610d8b9190611cdf565b9050610d9d60e0820160c08301611f11565b15610dbf57610dbf610db56060830160408401611d1b565b8260800135610b54565b50600101610d5e565b83838383826001811461108f575f8585610de3600185611b40565b818110610df257610df2611cb2565b9050602002810190610e049190611cdf565b610e15906080810190606001611d1b565b90505f89815b81811015610fbc57368d8d83818110610e3657610e36611cb2565b9050602002810190610e489190611cdf565b9050610e77610e5d6060830160408401611d1b565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610ed95750610ed9610e906040830160208401611d1b565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610ef05750610ef0610e906020830183611d1b565b8015610f735750610f73610f0760a0830183611f2a565b610f15916004915f91611f92565b610f1e91611fb9565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610fa9576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fb38f82611327565b50600101610e1b565b505f90505b610fcc600185611b40565b811015611087575f888883818110610fe657610fe6611cb2565b9050602002810190610ff89190611cdf565b611009906080810190606001611d1b565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461107e5785828151811061105057611050611cb2565b602002602001015161106182610c08565b61106b9190611b40565b9250821561107e5761107e818885610b1f565b50600101610fc1565b505050611167565b875f5b8181101561116457368b8b838181106110ad576110ad611cb2565b90506020028101906110bf9190611cdf565b90506110d4610e5d6060830160408401611d1b565b806110ed57506110ed610e906040830160208401611d1b565b80156111045750611104610e906020830183611d1b565b801561111b575061111b610f0760a0830183611f2a565b611151576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61115b8d82611327565b50600101611092565b50505b50505050505050505050565b5f660416edef1601be820361118c5750620186a0919050565b5090565b919050565b610b448383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61159a565b73ffffffffffffffffffffffffffffffffffffffff821661120e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610be273ffffffffffffffffffffffffffffffffffffffff8316826116c7565b73ffffffffffffffffffffffffffffffffffffffff821661127b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b4473ffffffffffffffffffffffffffffffffffffffff841683836116e0565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166112e757637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61133f6113376020830183611d1b565b6017903b1190565b611375576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036113b4576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6113c8610e5d6060850160408601611d1b565b6113d2575f6113d8565b82608001355b90505f6113f36113ee6080860160608701611d1b565b610c08565b9050815f036114295761142961140f6060860160408701611d1b565b61141f6040870160208801611d1b565b8660800135611195565b5f806114386020870187611d1b565b73ffffffffffffffffffffffffffffffffffffffff168461145c60a0890189611f2a565b60405161146a92919061201f565b5f6040518083038185875af1925050503d805f81146114a4576040519150601f19603f3d011682016040523d82523d5f602084013e6114a9565b606091505b5091509150816114bc576114bc81611729565b5f6114d06113ee6080890160608a01611d1b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861150160208a018a611d1b565b61151160608b0160408c01611d1b565b61152160808c0160608d01611d1b565b8b60800135898711611533578661153d565b61153d8a88611b40565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156116c15773ffffffffffffffffffffffffffffffffffffffff8316611603576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611676573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061169a919061202e565b10156116c1576116c173ffffffffffffffffffffffffffffffffffffffff85168483611733565b50505050565b5f385f3884865af1610be25763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611720576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611720575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661172057633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611802576118026117b1565b60405290565b5f82601f830112611817575f5ffd5b8135602083015f5f67ffffffffffffffff841115611837576118376117b1565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff82111715611884576118846117b1565b60405283815290508082840187101561189b575f5ffd5b838360208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611190575f5ffd5b80358015158114611190575f5ffd5b5f61014082840312156118fa575f5ffd5b6119026117de565b823581529050602082013567ffffffffffffffff811115611921575f5ffd5b61192d84828501611808565b602083015250604082013567ffffffffffffffff81111561194c575f5ffd5b61195884828501611808565b60408301525061196a606083016118b7565b606082015261197b608083016118b7565b608082015261198c60a083016118b7565b60a082015260c0828101359082015260e080830135908201526119b261010083016118da565b6101008201526119c561012083016118da565b61012082015292915050565b5f61014082840312156119e2575f5ffd5b50919050565b5f5f5f5f606085870312156119fb575f5ffd5b843567ffffffffffffffff811115611a11575f5ffd5b611a1d878288016118e9565b945050602085013567ffffffffffffffff811115611a39575f5ffd5b8501601f81018713611a49575f5ffd5b803567ffffffffffffffff811115611a5f575f5ffd5b8760208260051b8401011115611a73575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611a96575f5ffd5b611aa2878288016119d1565b91505092959194509250565b5f5f60408385031215611abf575f5ffd5b823567ffffffffffffffff811115611ad5575f5ffd5b611ae1858286016118e9565b925050602083013567ffffffffffffffff811115611afd575f5ffd5b611b09858286016119d1565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610c4c57610c4c611b13565b80356fffffffffffffffffffffffffffffffff81168114611190575f5ffd5b803563ffffffff81168114611190575f5ffd5b5f6101408236031215611b96575f5ffd5b611b9e6117de565b82358152602080840135908201526040808401359082015260608084013590820152611bcc60808401611b53565b608082015260a08381013590820152611be760c08401611b72565b60c0820152611bf860e08401611b72565b60e0820152611c0a6101008401611b72565b61010082015261012083013567ffffffffffffffff811115611c2a575f5ffd5b611c3636828601611808565b6101208301525092915050565b5f60208284031215611c53575f5ffd5b611c5c82611b53565b9392505050565b8082028115828204841417610c4c57610c4c611b13565b5f82611cad577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611d11575f5ffd5b9190910192915050565b5f60208284031215611d2b575f5ffd5b611c5c826118b7565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b8c81528b60208201528a60408201528960608201528860808201528760a08201528660c08201528560e082015263ffffffff851661010082015263ffffffff841661012082015263ffffffff83166101408201526101806101608201525f611dec610180830184611d34565b9e9d5050505050505050505050505050565b60208152815160208201525f60208301516101406040840152611e25610160840182611d34565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611e608282611d34565b9150506060840151611e8a608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611ef961012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611f21575f5ffd5b611c5c826118da565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611f5d575f5ffd5b83018035915067ffffffffffffffff821115611f77575f5ffd5b602001915036819003821315611f8b575f5ffd5b9250929050565b5f5f85851115611fa0575f5ffd5b83861115611fac575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612018577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f6020828403121561203e575f5ffd5b505191905056fea2646970667358221220b23ea14703bb352d72e4c269b9b69cdedc9bd56bfb1241548a1558d6261b62ae64736f6c634300081d0033";
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
        readonly name: "SPOKE_POOL";
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
