import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacet, AcrossFacetInterface } from "../AcrossFacet";
declare type AcrossFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b50604051620027e5380380620027e5833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a05161270d620000d8600039600061069c01526000818161067101528181610752015261077d015261270d6000f3fe6080604052600436106100295760003560e01c80631fd8010c1461002e5780633a3f733214610043575b600080fd5b61004161003c366004612116565b610056565b005b61004161005136600461217a565b61027f565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612239565b9050846101078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361017c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610235576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024788608001518960c001516104ac565b610251888861062c565b5047915050818111156102735761027360008461026e8585612239565b610892565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102fa576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061030b3447612239565b90508680610100015161034a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610388576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103ab8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610420576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104728a600001518b60c001518b8b336108c3565b60c08b01526104818a8861062c565b50479150508181111561049e5761049e60008461026e8585612239565b505060009091555050505050565b806000036104e6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053f578034101561053b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d09190612273565b90508181101561061b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61062783333085610a06565b505050565b608082015173ffffffffffffffffffffffffffffffffffffffff166107485760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692631186ec339290917f00000000000000000000000000000000000000000000000000000000000000009083906106cb602089018961228c565b6106db60408a0160208b016122b6565b6106e860408b018b6122dc565b8b606001356040518b63ffffffff1660e01b815260040161071199989796959493929190612348565b6000604051808303818588803b15801561072a57600080fd5b505af115801561073e573d6000803e3d6000fd5b5050505050610857565b61077b82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610c20565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631186ec338360a0015184608001518560c001518660e001518660000160208101906107de919061228c565b6107ee6040890160208a016122b6565b6107fb60408a018a6122dc565b8a606001356040518a63ffffffff1660e01b815260040161082499989796959493929190612348565b600060405180830381600087803b15801561083e57600080fd5b505af1158015610852573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610886919061245b565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108b957610627838383610d57565b6106278282610ed9565b6000828082036108ff576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561090e600185612239565b81811061091d5761091d61256e565b905060200281019061092f919061259d565b6109409060808101906060016125db565b9050600061094d82611003565b905073ffffffffffffffffffffffffffffffffffffffff8216610977576109743482612239565b90505b600061098388886110bc565b905061098f88886111c8565b61099c8a89898985611235565b6000826109a885611003565b6109b29190612239565b9050898110156109f8576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610612565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610a53576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610aa0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610b11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b359190612273565b9050610b43828686866115e7565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610bb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd79190612273565b610be19190612239565b14610c18576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c4057505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c8d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d269190612273565b10156106275761062783837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116c3565b73ffffffffffffffffffffffffffffffffffffffff8316610da4576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610df1576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610e5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e829190612273565b905080821115610ec8576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610612565b610ed38484846117b3565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f26576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610f69576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610612565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610fc3576040519150601f19603f3d011682016040523d82523d6000602084013e610fc8565b606091505b5050905080610627576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156110b4576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561108b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110af9190612273565b6110b6565b475b92915050565b60608160008167ffffffffffffffff8111156110da576110da611ed0565b604051908082528060200260200182016040528015611103578160200160208202803683370190505b5090506000805b838110156111bd578686828181106111245761112461256e565b9050602002810190611136919061259d565b6111479060808101906060016125db565b915061115282611003565b8382815181106111645761116461256e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166111b5573483828151811061119d5761119d61256e565b602002602001018181516111b19190612239565b9052505b60010161110a565b509095945050505050565b60005b8181101561062757368383838181106111e6576111e661256e565b90506020028101906111f8919061259d565b905061120a60e0820160c083016125f6565b1561122c5761122c61122260608301604084016125db565b82608001356104ac565b506001016111cb565b8383838382600181146115025760008585611251600185612239565b8181106112605761126061256e565b9050602002810190611272919061259d565b6112839060808101906060016125db565b9050600089815b8181101561142e57368d8d838181106112a5576112a561256e565b90506020028101906112b7919061259d565b90506112e66112cc60608301604084016125db565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061134957506113496112ff60408301602084016125db565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561136057506113606112ff60208301836125db565b80156113e557506113e561137760a08301836122dc565b61138691600491600091612613565b61138f9161263d565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61141b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114258f82611809565b5060010161128a565b505060005b61143e600185612239565b8110156114fa5760008888838181106114595761145961256e565b905060200281019061146b919061259d565b61147c9060808101906060016125db565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114f1578582815181106114c3576114c361256e565b60200260200101516114d482611003565b6114de9190612239565b925082156114f1576114f1818885610892565b50600101611433565b5050506115db565b8760005b818110156115d857368b8b838181106115215761152161256e565b9050602002810190611533919061259d565b90506115486112cc60608301604084016125db565b8061156157506115616112ff60408301602084016125db565b801561157857506115786112ff60208301836125db565b801561158f575061158f61137760a08301836122dc565b6115c5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115cf8d82611809565b50600101611506565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ed39085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611ae7565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905261174f8482611bf6565b610ed35760405173ffffffffffffffffffffffffffffffffffffffff84166024820152600060448201526117a99085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611641565b610ed38482611ae7565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106279084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611641565b61181f61181960208301836125db565b3b151590565b611855576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611895576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118aa6112cc60608501604086016125db565b6118b55760006118bb565b82608001355b905060006118d76118d260608601604087016125db565b611003565b905060006118ee6118d260808701606088016125db565b9050826000036119255761192561190b60608701604088016125db565b61191b60408801602089016125db565b8760800135610c20565b8460800135821015611970576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610612565b60008061198060208801886125db565b73ffffffffffffffffffffffffffffffffffffffff16856119a460a08a018a6122dc565b6040516119b2929190612685565b60006040518083038185875af1925050503d80600081146119ef576040519150601f19603f3d011682016040523d82523d6000602084013e6119f4565b606091505b509150915081611a0757611a0781611cb7565b6000611a1c6118d260808a0160608b016125db565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a4d60208b018b6125db565b611a5d60608c0160408d016125db565b611a6d60808d0160608e016125db565b8c60800135898711611a7f5786611a89565b611a898a88612239565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611b49826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cc19092919063ffffffff16565b9050805160001480611b6a575080806020019051810190611b6a9190612695565b610627576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610612565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611c2091906126b2565b6000604051808303816000865af19150503d8060008114611c5d576040519150601f19603f3d011682016040523d82523d6000602084013e611c62565b606091505b5091509150818015611c8c575080511580611c8c575080806020019051810190611c8c9190612695565b8015611cae575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611cd08484600085611cd8565b949350505050565b606082471015611d6a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610612565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d9391906126b2565b60006040518083038185875af1925050503d8060008114611dd0576040519150601f19603f3d011682016040523d82523d6000602084013e611dd5565b606091505b5091509150611de687838387611df1565b979650505050505050565b60608315611e87578251600003611e805773ffffffffffffffffffffffffffffffffffffffff85163b611e80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610612565b5081611cd0565b611cd08383815115611e9c5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061291906126c4565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f2357611f23611ed0565b60405290565b600082601f830112611f3a57600080fd5b813567ffffffffffffffff80821115611f5557611f55611ed0565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611f9b57611f9b611ed0565b81604052838152866020858801011115611fb457600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611ff857600080fd5b919050565b801515811461200b57600080fd5b50565b8035611ff881611ffd565b6000610140828403121561202c57600080fd5b612034611eff565b905081358152602082013567ffffffffffffffff8082111561205557600080fd5b61206185838601611f29565b6020840152604084013591508082111561207a57600080fd5b5061208784828501611f29565b60408301525061209960608301611fd4565b60608201526120aa60808301611fd4565b60808201526120bb60a08301611fd4565b60a082015260c082013560c082015260e082013560e08201526101006120e281840161200e565b908201526101206120f483820161200e565b9082015292915050565b60006080828403121561211057600080fd5b50919050565b6000806040838503121561212957600080fd5b823567ffffffffffffffff8082111561214157600080fd5b61214d86838701612019565b9350602085013591508082111561216357600080fd5b50612170858286016120fe565b9150509250929050565b6000806000806060858703121561219057600080fd5b843567ffffffffffffffff808211156121a857600080fd5b6121b488838901612019565b955060208701359150808211156121ca57600080fd5b818701915087601f8301126121de57600080fd5b8135818111156121ed57600080fd5b8860208260051b850101111561220257600080fd5b60208301955080945050604087013591508082111561222057600080fd5b5061222d878288016120fe565b91505092959194509250565b818103818111156110b6577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561228557600080fd5b5051919050565b60006020828403121561229e57600080fd5b81358060070b81146122af57600080fd5b9392505050565b6000602082840312156122c857600080fd5b813563ffffffff811681146122af57600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261231157600080fd5b83018035915067ffffffffffffffff82111561232c57600080fd5b60200191503681900382131561234157600080fd5b9250929050565b600061010073ffffffffffffffffffffffffffffffffffffffff808d168452808c166020850152508960408401528860608401528760070b608084015263ffffffff871660a08401528060c0840152848184015250610120848682850137600083860182015260e083019390935250601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910101979650505050505050565b60005b838110156124085781810151838201526020016123f0565b50506000910152565b600081518084526124298160208601602086016123ed565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612484610160850183612411565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526124bf8382612411565b92505060608501516124e9608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061255c8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126125d157600080fd5b9190910192915050565b6000602082840312156125ed57600080fd5b6122af82611fd4565b60006020828403121561260857600080fd5b81356122af81611ffd565b6000808585111561262357600080fd5b8386111561263057600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561267d5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156126a757600080fd5b81516122af81611ffd565b600082516125d18184602087016123ed565b6020815260006122af602083018461241156fea2646970667358221220f6a3388b113458cd810557aecd7676f3b5ad871ad40a37a19580e6936916072964736f6c63430008110033";
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
    static createInterface(): AcrossFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacet;
}
export {};
