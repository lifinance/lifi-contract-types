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
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b506040516200273e3803806200273e833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051612666620000d860003960006106180152600081816105ed015281816106ce01526106f901526126666000f3fe6080604052600436106100295760003560e01c80631fd8010c1461002e5780633a3f733214610043575b600080fd5b61004161003c36600461206f565b610056565b005b6100416100513660046120d3565b6101fb565b3360006100633447612192565b9050836100888160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156100bf576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036100fd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361013a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610100015115610178576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156101b6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101c887608001518860c00151610428565b6101d287876105a8565b5047915050818111156101f4576101f46000846101ef8585612192565b61080e565b5050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610276576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006102873447612192565b9050868061010001516102c6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610304576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103278160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561035e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361039c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103d9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103ee8a600001518b60c001518b8b3361083f565b60c08b01526103fd8a886105a8565b50479150508181111561041a5761041a6000846101ef8585612192565b505060009091555050505050565b80600003610462576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166104bb57803410156104b7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610528573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054c91906121cc565b905081811015610597576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6105a383333085610982565b505050565b608082015173ffffffffffffffffffffffffffffffffffffffff166106c45760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692631186ec339290917f000000000000000000000000000000000000000000000000000000000000000090839061064760208901896121e5565b61065760408a0160208b0161220f565b61066460408b018b612235565b8b606001356040518b63ffffffff1660e01b815260040161068d999897969594939291906122a1565b6000604051808303818588803b1580156106a657600080fd5b505af11580156106ba573d6000803e3d6000fd5b50505050506107d3565b6106f782608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610b9c565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631186ec338360a0015184608001518560c001518660e0015186600001602081019061075a91906121e5565b61076a6040890160208a0161220f565b61077760408a018a612235565b8a606001356040518a63ffffffff1660e01b81526004016107a0999897969594939291906122a1565b600060405180830381600087803b1580156107ba57600080fd5b505af11580156107ce573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161080291906123b4565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610835576105a3838383610cdf565b6105a38282610e61565b60008280820361087b576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561088a600185612192565b818110610899576108996124c7565b90506020028101906108ab91906124f6565b6108bc906080810190606001612534565b905060006108c982610f8b565b905073ffffffffffffffffffffffffffffffffffffffff82166108f3576108f03482612192565b90505b60006108ff8888611044565b905061090b8888611150565b6109188a898989856111bd565b60008261092485610f8b565b61092e9190612192565b905089811015610974576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161058e565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166109cf576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a1c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610a8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab191906121cc565b9050610abf8286868661156f565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5391906121cc565b610b5d9190612192565b14610b94576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610bbc57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c09576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ca291906121cc565b10156105a357610cb48383600061164b565b6105a383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61164b565b73ffffffffffffffffffffffffffffffffffffffff8316610d2c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d79576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610de6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0a91906121cc565b905080821115610e50576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161058e565b610e5b8484846117cd565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610eae576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610ef1576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161058e565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f4b576040519150601f19603f3d011682016040523d82523d6000602084013e610f50565b606091505b50509050806105a3576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82161561103c576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611013573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103791906121cc565b61103e565b475b92915050565b60608160008167ffffffffffffffff81111561106257611062611e29565b60405190808252806020026020018201604052801561108b578160200160208202803683370190505b5090506000805b83811015611145578686828181106110ac576110ac6124c7565b90506020028101906110be91906124f6565b6110cf906080810190606001612534565b91506110da82610f8b565b8382815181106110ec576110ec6124c7565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661113d5734838281518110611125576111256124c7565b602002602001018181516111399190612192565b9052505b600101611092565b509095945050505050565b60005b818110156105a3573683838381811061116e5761116e6124c7565b905060200281019061118091906124f6565b905061119260e0820160c0830161254f565b156111b4576111b46111aa6060830160408401612534565b8260800135610428565b50600101611153565b83838383826001811461148a57600085856111d9600185612192565b8181106111e8576111e86124c7565b90506020028101906111fa91906124f6565b61120b906080810190606001612534565b9050600089815b818110156113b657368d8d8381811061122d5761122d6124c7565b905060200281019061123f91906124f6565b905061126e6112546060830160408401612534565b73ffffffffffffffffffffffffffffffffffffffff161590565b806112d157506112d16112876040830160208401612534565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112e857506112e86112876020830183612534565b801561136d575061136d6112ff60a0830183612235565b61130e9160049160009161256c565b61131791612596565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6113a3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113ad8f82611823565b50600101611212565b505060005b6113c6600185612192565b8110156114825760008888838181106113e1576113e16124c7565b90506020028101906113f391906124f6565b611404906080810190606001612534565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114795785828151811061144b5761144b6124c7565b602002602001015161145c82610f8b565b6114669190612192565b925082156114795761147981888561080e565b506001016113bb565b505050611563565b8760005b8181101561156057368b8b838181106114a9576114a96124c7565b90506020028101906114bb91906124f6565b90506114d06112546060830160408401612534565b806114e957506114e96112876040830160208401612534565b801561150057506115006112876020830183612534565b801561151757506115176112ff60a0830183612235565b61154d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115578d82611823565b5060010161148e565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610e5b9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b01565b8015806116eb57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156116c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e991906121cc565b155b611777576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161058e565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526105a39084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115c9565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526105a39084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115c9565b6118396118336020830183612534565b3b151590565b61186f576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036118af576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118c46112546060850160408601612534565b6118cf5760006118d5565b82608001355b905060006118f16118ec6060860160408701612534565b610f8b565b905060006119086118ec6080870160608801612534565b90508260000361193f5761193f6119256060870160408801612534565b6119356040880160208901612534565b8760800135610b9c565b846080013582101561198a576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161058e565b60008061199a6020880188612534565b73ffffffffffffffffffffffffffffffffffffffff16856119be60a08a018a612235565b6040516119cc9291906125de565b60006040518083038185875af1925050503d8060008114611a09576040519150601f19603f3d011682016040523d82523d6000602084013e611a0e565b606091505b509150915081611a2157611a2181611c10565b6000611a366118ec60808a0160608b01612534565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a6760208b018b612534565b611a7760608c0160408d01612534565b611a8760808d0160608e01612534565b8c60800135898711611a995786611aa3565b611aa38a88612192565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611b63826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c1a9092919063ffffffff16565b9050805160001480611b84575080806020019051810190611b8491906125ee565b6105a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161058e565b8051602082018181fd5b6060611c298484600085611c31565b949350505050565b606082471015611cc3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161058e565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611cec919061260b565b60006040518083038185875af1925050503d8060008114611d29576040519150601f19603f3d011682016040523d82523d6000602084013e611d2e565b606091505b5091509150611d3f87838387611d4a565b979650505050505050565b60608315611de0578251600003611dd95773ffffffffffffffffffffffffffffffffffffffff85163b611dd9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161058e565b5081611c29565b611c298383815115611df55781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058e919061261d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611e7c57611e7c611e29565b60405290565b600082601f830112611e9357600080fd5b813567ffffffffffffffff80821115611eae57611eae611e29565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611ef457611ef4611e29565b81604052838152866020858801011115611f0d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f5157600080fd5b919050565b8015158114611f6457600080fd5b50565b8035611f5181611f56565b60006101408284031215611f8557600080fd5b611f8d611e58565b905081358152602082013567ffffffffffffffff80821115611fae57600080fd5b611fba85838601611e82565b60208401526040840135915080821115611fd357600080fd5b50611fe084828501611e82565b604083015250611ff260608301611f2d565b606082015261200360808301611f2d565b608082015261201460a08301611f2d565b60a082015260c082013560c082015260e082013560e082015261010061203b818401611f67565b9082015261012061204d838201611f67565b9082015292915050565b60006080828403121561206957600080fd5b50919050565b6000806040838503121561208257600080fd5b823567ffffffffffffffff8082111561209a57600080fd5b6120a686838701611f72565b935060208501359150808211156120bc57600080fd5b506120c985828601612057565b9150509250929050565b600080600080606085870312156120e957600080fd5b843567ffffffffffffffff8082111561210157600080fd5b61210d88838901611f72565b9550602087013591508082111561212357600080fd5b818701915087601f83011261213757600080fd5b81358181111561214657600080fd5b8860208260051b850101111561215b57600080fd5b60208301955080945050604087013591508082111561217957600080fd5b5061218687828801612057565b91505092959194509250565b8181038181111561103e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000602082840312156121de57600080fd5b5051919050565b6000602082840312156121f757600080fd5b81358060070b811461220857600080fd5b9392505050565b60006020828403121561222157600080fd5b813563ffffffff8116811461220857600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261226a57600080fd5b83018035915067ffffffffffffffff82111561228557600080fd5b60200191503681900382131561229a57600080fd5b9250929050565b600061010073ffffffffffffffffffffffffffffffffffffffff808d168452808c166020850152508960408401528860608401528760070b608084015263ffffffff871660a08401528060c0840152848184015250610120848682850137600083860182015260e083019390935250601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910101979650505050505050565b60005b83811015612361578181015183820152602001612349565b50506000910152565b60008151808452612382816020860160208601612346565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526123dd61016085018361236a565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612418838261236a565b9250506060850151612442608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206124b58187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261252a57600080fd5b9190910192915050565b60006020828403121561254657600080fd5b61220882611f2d565b60006020828403121561256157600080fd5b813561220881611f56565b6000808585111561257c57600080fd5b8386111561258957600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156125d65780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561260057600080fd5b815161220881611f56565b6000825161252a818460208701612346565b602081526000612208602083018461236a56fea2646970667358221220ba69df258d46b1a634367b6b636a817e491c5a275bdda20d2b9e3d6768aefca264736f6c63430008110033";
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
