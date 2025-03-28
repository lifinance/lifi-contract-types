import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HyphenFacet, HyphenFacetInterface } from "../HyphenFacet";
declare type HyphenFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HyphenFacet__factory extends ContractFactory {
    constructor(...args: HyphenFacetConstructorParams);
    deploy(_router: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<HyphenFacet>;
    getDeployTransaction(_router: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): HyphenFacet;
    connect(signer: Signer): HyphenFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620026a0380380620026a0833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516125fe620000a260003960008181610652015281816106cc015261078601526125fe6000f3fe6080604052600436106100295760003560e01c80638bf6ef991461002e5780639feb673114610043575b600080fd5b61004161003c366004612071565b610056565b005b6100416100513660046120a6565b61027d565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612140565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024787608001518860c001516104a8565b61025087610628565b5047915050818111156102725761027260008461026d8585612140565b610828565b505060009091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103093447612140565b905085806101000151610348576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610386576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103a98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361041e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047089600001518a60c001518a8a33610859565b60c08a015261047e89610628565b50479150508181111561049b5761049b60008461026d8585612140565b5050600090915550505050565b806000036104e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053b5780341015610537576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cc919061217a565b905081811015610617576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6106238333308561099c565b505050565b608081015173ffffffffffffffffffffffffffffffffffffffff161561073a5761067b81608001517f00000000000000000000000000000000000000000000000000000000000000008360c00151610bb6565b60e0810151608082015160a083015160c08401516040517f55d7359500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016946355d73595946107039491939092600401612193565b600060405180830381600087803b15801561071d57600080fd5b505af1158015610731573d6000803e3d6000fd5b505050506107ee565b60c081015160a082015160e08301516040517fea36842100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169363ea3684219390926107bb9260040161220c565b6000604051808303818588803b1580156107d457600080fd5b505af11580156107e8573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161081d91906122d9565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff83161561084f57610623838383610cf9565b6106238282610e7b565b600082808203610895576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856108a4600185612140565b8181106108b3576108b36123ec565b90506020028101906108c5919061241b565b6108d6906080810190606001612459565b905060006108e382610fa5565b905073ffffffffffffffffffffffffffffffffffffffff821661090d5761090a3482612140565b90505b6000610919888861105e565b9050610925888861116a565b6109328a898989856111d7565b60008261093e85610fa5565b6109489190612140565b90508981101561098e576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161060e565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166109e9576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a36576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610aa7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acb919061217a565b9050610ad982868686611589565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6d919061217a565b610b779190612140565b14610bae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610bd657505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c23576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cbc919061217a565b101561062357610cce83836000611665565b61062383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611665565b73ffffffffffffffffffffffffffffffffffffffff8316610d46576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d93576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610e00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e24919061217a565b905080821115610e6a576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161060e565b610e758484846117e7565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610ec8576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610f0b576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161060e565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f65576040519150601f19603f3d011682016040523d82523d6000602084013e610f6a565b606091505b5050905080610623576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611056576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561102d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611051919061217a565b611058565b475b92915050565b60608160008167ffffffffffffffff81111561107c5761107c611e43565b6040519080825280602002602001820160405280156110a5578160200160208202803683370190505b5090506000805b8381101561115f578686828181106110c6576110c66123ec565b90506020028101906110d8919061241b565b6110e9906080810190606001612459565b91506110f482610fa5565b838281518110611106576111066123ec565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611157573483828151811061113f5761113f6123ec565b602002602001018181516111539190612140565b9052505b6001016110ac565b509095945050505050565b60005b818110156106235736838383818110611188576111886123ec565b905060200281019061119a919061241b565b90506111ac60e0820160c0830161247b565b156111ce576111ce6111c46060830160408401612459565b82608001356104a8565b5060010161116d565b8383838382600181146114a457600085856111f3600185612140565b818110611202576112026123ec565b9050602002810190611214919061241b565b611225906080810190606001612459565b9050600089815b818110156113d057368d8d83818110611247576112476123ec565b9050602002810190611259919061241b565b905061128861126e6060830160408401612459565b73ffffffffffffffffffffffffffffffffffffffff161590565b806112eb57506112eb6112a16040830160208401612459565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561130257506113026112a16020830183612459565b8015611387575061138761131960a0830183612498565b61132891600491600091612504565b6113319161252e565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6113bd576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113c78f8261183d565b5060010161122c565b505060005b6113e0600185612140565b81101561149c5760008888838181106113fb576113fb6123ec565b905060200281019061140d919061241b565b61141e906080810190606001612459565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461149357858281518110611465576114656123ec565b602002602001015161147682610fa5565b6114809190612140565b9250821561149357611493818885610828565b506001016113d5565b50505061157d565b8760005b8181101561157a57368b8b838181106114c3576114c36123ec565b90506020028101906114d5919061241b565b90506114ea61126e6060830160408401612459565b8061150357506115036112a16040830160208401612459565b801561151a575061151a6112a16020830183612459565b8015611531575061153161131960a0830183612498565b611567576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115718d8261183d565b506001016114a8565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610e759085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b1b565b80158061170557506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156116df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611703919061217a565b155b611791576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161060e565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106239084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115e3565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106239084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115e3565b61185361184d6020830183612459565b3b151590565b611889576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036118c9576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118de61126e6060850160408601612459565b6118e95760006118ef565b82608001355b9050600061190b6119066060860160408701612459565b610fa5565b905060006119226119066080870160608801612459565b9050826000036119595761195961193f6060870160408801612459565b61194f6040880160208901612459565b8760800135610bb6565b84608001358210156119a4576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161060e565b6000806119b46020880188612459565b73ffffffffffffffffffffffffffffffffffffffff16856119d860a08a018a612498565b6040516119e6929190612576565b60006040518083038185875af1925050503d8060008114611a23576040519150601f19603f3d011682016040523d82523d6000602084013e611a28565b606091505b509150915081611a3b57611a3b81611c2a565b6000611a5061190660808a0160608b01612459565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a8160208b018b612459565b611a9160608c0160408d01612459565b611aa160808d0160608e01612459565b8c60800135898711611ab35786611abd565b611abd8a88612140565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611b7d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c349092919063ffffffff16565b9050805160001480611b9e575080806020019051810190611b9e9190612586565b610623576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161060e565b8051602082018181fd5b6060611c438484600085611c4b565b949350505050565b606082471015611cdd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161060e565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d0691906125a3565b60006040518083038185875af1925050503d8060008114611d43576040519150601f19603f3d011682016040523d82523d6000602084013e611d48565b606091505b5091509150611d5987838387611d64565b979650505050505050565b60608315611dfa578251600003611df35773ffffffffffffffffffffffffffffffffffffffff85163b611df3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161060e565b5081611c43565b611c438383815115611e0f5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060e91906125b5565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611e9657611e96611e43565b60405290565b600082601f830112611ead57600080fd5b813567ffffffffffffffff80821115611ec857611ec8611e43565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611f0e57611f0e611e43565b81604052838152866020858801011115611f2757600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f6b57600080fd5b919050565b8015158114611f7e57600080fd5b50565b8035611f6b81611f70565b60006101408284031215611f9f57600080fd5b611fa7611e72565b905081358152602082013567ffffffffffffffff80821115611fc857600080fd5b611fd485838601611e9c565b60208401526040840135915080821115611fed57600080fd5b50611ffa84828501611e9c565b60408301525061200c60608301611f47565b606082015261201d60808301611f47565b608082015261202e60a08301611f47565b60a082015260c082013560c082015260e082013560e0820152610100612055818401611f81565b90820152610120612067838201611f81565b9082015292915050565b60006020828403121561208357600080fd5b813567ffffffffffffffff81111561209a57600080fd5b611c4384828501611f8c565b6000806000604084860312156120bb57600080fd5b833567ffffffffffffffff808211156120d357600080fd5b6120df87838801611f8c565b945060208601359150808211156120f557600080fd5b818601915086601f83011261210957600080fd5b81358181111561211857600080fd5b8760208260051b850101111561212d57600080fd5b6020830194508093505050509250925092565b81810381811115611058577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561218c57600080fd5b5051919050565b848152600073ffffffffffffffffffffffffffffffffffffffff808616602084015280851660408401525082606083015260a0608083015261220260a08301600481527f4c49464900000000000000000000000000000000000000000000000000000000602082015260400190565b9695505050505050565b73ffffffffffffffffffffffffffffffffffffffff83168152816020820152606060408201526000611c4360608301600481527f4c49464900000000000000000000000000000000000000000000000000000000602082015260400190565b60005b8381101561228657818101518382015260200161226e565b50506000910152565b600081518084526122a781602086016020860161226b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261230261016085018361228f565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261233d838261228f565b9250506060850151612367608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206123da8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261244f57600080fd5b9190910192915050565b60006020828403121561246b57600080fd5b61247482611f47565b9392505050565b60006020828403121561248d57600080fd5b813561247481611f70565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126124cd57600080fd5b83018035915067ffffffffffffffff8211156124e857600080fd5b6020019150368190038213156124fd57600080fd5b9250929050565b6000808585111561251457600080fd5b8386111561252157600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561256e5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561259857600080fd5b815161247481611f70565b6000825161244f81846020870161226b565b602081526000612474602083018461228f56fea2646970667358221220164219b04043dfc82248fa76d4c111ec8d1a90e561ff43b35499da9e79d6d24b64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_router";
            readonly type: "address";
            readonly internalType: "contract IHyphenRouter";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaHyphen";
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
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaHyphen";
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
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
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
        readonly name: "NativeAssetTransferFailed";
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
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): HyphenFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HyphenFacet;
}
export {};
