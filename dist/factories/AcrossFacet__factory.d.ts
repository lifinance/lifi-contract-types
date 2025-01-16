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
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b50604051620027fc380380620027fc833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051612724620000d860003960006106b301526000818161068801528181610769015261079401526127246000f3fe6080604052600436106100345760003560e01c80631fd8010c146100395780633a3f73321461004e578063f07494a014610061575b600080fd5b61004c61004736600461212d565b61006d565b005b61004c61005c366004612191565b610296565b34801561004c57600080fd5b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100e8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100f93447612250565b90508461011e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610155576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610193576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101d0576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561020e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561024c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61025e88608001518960c001516104c3565b6102688888610643565b50479150508181111561028a5761028a6000846102858585612250565b6108a9565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610311576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103223447612250565b905086806101000151610361576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561039f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103c28160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103f9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610437576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610474576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104898a600001518b60c001518b8b336108da565b60c08b01526104988a88610643565b5047915050818111156104b5576104b56000846102858585612250565b505060009091555050505050565b806000036104fd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105565780341015610552576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e7919061228a565b905081811015610632576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61063e83333085610a1d565b505050565b608082015173ffffffffffffffffffffffffffffffffffffffff1661075f5760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692631186ec339290917f00000000000000000000000000000000000000000000000000000000000000009083906106e260208901896122a3565b6106f260408a0160208b016122cd565b6106ff60408b018b6122f3565b8b606001356040518b63ffffffff1660e01b81526004016107289998979695949392919061235f565b6000604051808303818588803b15801561074157600080fd5b505af1158015610755573d6000803e3d6000fd5b505050505061086e565b61079282608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610c37565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631186ec338360a0015184608001518560c001518660e001518660000160208101906107f591906122a3565b6108056040890160208a016122cd565b61081260408a018a6122f3565b8a606001356040518a63ffffffff1660e01b815260040161083b9998979695949392919061235f565b600060405180830381600087803b15801561085557600080fd5b505af1158015610869573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161089d9190612472565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108d05761063e838383610d6e565b61063e8282610ef0565b600082808203610916576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610925600185612250565b81811061093457610934612585565b905060200281019061094691906125b4565b6109579060808101906060016125f2565b905060006109648261101a565b905073ffffffffffffffffffffffffffffffffffffffff821661098e5761098b3482612250565b90505b600061099a88886110d3565b90506109a688886111df565b6109b38a8989898561124c565b6000826109bf8561101a565b6109c99190612250565b905089811015610a0f576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610629565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610a6a576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ab7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610b28573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4c919061228a565b9050610b5a828686866115fe565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610bca573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bee919061228a565b610bf89190612250565b14610c2f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c5757505050565b73ffffffffffffffffffffffffffffffffffffffff8216610ca4576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3d919061228a565b101561063e5761063e83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116da565b73ffffffffffffffffffffffffffffffffffffffff8316610dbb576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e08576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610e75573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e99919061228a565b905080821115610edf576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610629565b610eea8484846117ca565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f3d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610f80576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610629565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610fda576040519150601f19603f3d011682016040523d82523d6000602084013e610fdf565b606091505b505090508061063e576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156110cb576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156110a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110c6919061228a565b6110cd565b475b92915050565b60608160008167ffffffffffffffff8111156110f1576110f1611ee7565b60405190808252806020026020018201604052801561111a578160200160208202803683370190505b5090506000805b838110156111d45786868281811061113b5761113b612585565b905060200281019061114d91906125b4565b61115e9060808101906060016125f2565b91506111698261101a565b83828151811061117b5761117b612585565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166111cc57348382815181106111b4576111b4612585565b602002602001018181516111c89190612250565b9052505b600101611121565b509095945050505050565b60005b8181101561063e57368383838181106111fd576111fd612585565b905060200281019061120f91906125b4565b905061122160e0820160c0830161260d565b156112435761124361123960608301604084016125f2565b82608001356104c3565b506001016111e2565b8383838382600181146115195760008585611268600185612250565b81811061127757611277612585565b905060200281019061128991906125b4565b61129a9060808101906060016125f2565b9050600089815b8181101561144557368d8d838181106112bc576112bc612585565b90506020028101906112ce91906125b4565b90506112fd6112e360608301604084016125f2565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611360575061136061131660408301602084016125f2565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015611377575061137761131660208301836125f2565b80156113fc57506113fc61138e60a08301836122f3565b61139d9160049160009161262a565b6113a691612654565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611432576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61143c8f82611820565b506001016112a1565b505060005b611455600185612250565b81101561151157600088888381811061147057611470612585565b905060200281019061148291906125b4565b6114939060808101906060016125f2565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611508578582815181106114da576114da612585565b60200260200101516114eb8261101a565b6114f59190612250565b92508215611508576115088188856108a9565b5060010161144a565b5050506115f2565b8760005b818110156115ef57368b8b8381811061153857611538612585565b905060200281019061154a91906125b4565b905061155f6112e360608301604084016125f2565b80611578575061157861131660408301602084016125f2565b801561158f575061158f61131660208301836125f2565b80156115a657506115a661138e60a08301836122f3565b6115dc576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115e68d82611820565b5060010161151d565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610eea9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611afe565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526117668482611c0d565b610eea5760405173ffffffffffffffffffffffffffffffffffffffff84166024820152600060448201526117c09085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611658565b610eea8482611afe565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261063e9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611658565b61183661183060208301836125f2565b3b151590565b61186c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036118ac576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118c16112e360608501604086016125f2565b6118cc5760006118d2565b82608001355b905060006118ee6118e960608601604087016125f2565b61101a565b905060006119056118e960808701606088016125f2565b90508260000361193c5761193c61192260608701604088016125f2565b61193260408801602089016125f2565b8760800135610c37565b8460800135821015611987576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610629565b60008061199760208801886125f2565b73ffffffffffffffffffffffffffffffffffffffff16856119bb60a08a018a6122f3565b6040516119c992919061269c565b60006040518083038185875af1925050503d8060008114611a06576040519150601f19603f3d011682016040523d82523d6000602084013e611a0b565b606091505b509150915081611a1e57611a1e81611cce565b6000611a336118e960808a0160608b016125f2565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a6460208b018b6125f2565b611a7460608c0160408d016125f2565b611a8460808d0160608e016125f2565b8c60800135898711611a965786611aa0565b611aa08a88612250565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611b60826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cd89092919063ffffffff16565b9050805160001480611b81575080806020019051810190611b8191906126ac565b61063e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610629565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611c3791906126c9565b6000604051808303816000865af19150503d8060008114611c74576040519150601f19603f3d011682016040523d82523d6000602084013e611c79565b606091505b5091509150818015611ca3575080511580611ca3575080806020019051810190611ca391906126ac565b8015611cc5575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611ce78484600085611cef565b949350505050565b606082471015611d81576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610629565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611daa91906126c9565b60006040518083038185875af1925050503d8060008114611de7576040519150601f19603f3d011682016040523d82523d6000602084013e611dec565b606091505b5091509150611dfd87838387611e08565b979650505050505050565b60608315611e9e578251600003611e975773ffffffffffffffffffffffffffffffffffffffff85163b611e97576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610629565b5081611ce7565b611ce78383815115611eb35781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062991906126db565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f3a57611f3a611ee7565b60405290565b600082601f830112611f5157600080fd5b813567ffffffffffffffff80821115611f6c57611f6c611ee7565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611fb257611fb2611ee7565b81604052838152866020858801011115611fcb57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461200f57600080fd5b919050565b801515811461202257600080fd5b50565b803561200f81612014565b6000610140828403121561204357600080fd5b61204b611f16565b905081358152602082013567ffffffffffffffff8082111561206c57600080fd5b61207885838601611f40565b6020840152604084013591508082111561209157600080fd5b5061209e84828501611f40565b6040830152506120b060608301611feb565b60608201526120c160808301611feb565b60808201526120d260a08301611feb565b60a082015260c082013560c082015260e082013560e08201526101006120f9818401612025565b9082015261012061210b838201612025565b9082015292915050565b60006080828403121561212757600080fd5b50919050565b6000806040838503121561214057600080fd5b823567ffffffffffffffff8082111561215857600080fd5b61216486838701612030565b9350602085013591508082111561217a57600080fd5b5061218785828601612115565b9150509250929050565b600080600080606085870312156121a757600080fd5b843567ffffffffffffffff808211156121bf57600080fd5b6121cb88838901612030565b955060208701359150808211156121e157600080fd5b818701915087601f8301126121f557600080fd5b81358181111561220457600080fd5b8860208260051b850101111561221957600080fd5b60208301955080945050604087013591508082111561223757600080fd5b5061224487828801612115565b91505092959194509250565b818103818111156110cd577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561229c57600080fd5b5051919050565b6000602082840312156122b557600080fd5b81358060070b81146122c657600080fd5b9392505050565b6000602082840312156122df57600080fd5b813563ffffffff811681146122c657600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261232857600080fd5b83018035915067ffffffffffffffff82111561234357600080fd5b60200191503681900382131561235857600080fd5b9250929050565b600061010073ffffffffffffffffffffffffffffffffffffffff808d168452808c166020850152508960408401528860608401528760070b608084015263ffffffff871660a08401528060c0840152848184015250610120848682850137600083860182015260e083019390935250601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910101979650505050505050565b60005b8381101561241f578181015183820152602001612407565b50506000910152565b60008151808452612440816020860160208601612404565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261249b610160850183612428565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526124d68382612428565b9250506060850151612500608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125738187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126125e857600080fd5b9190910192915050565b60006020828403121561260457600080fd5b6122c682611feb565b60006020828403121561261f57600080fd5b81356122c681612014565b6000808585111561263a57600080fd5b8386111561264757600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126945780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156126be57600080fd5b81516122c681612014565b600082516125e8818460208701612404565b6020815260006122c6602083018461242856fea2646970667358221220e86a3d23451ca6eef6dac9944a896cf4ae22aa00fbb2fb94adbb43162593bfec64736f6c63430008110033";
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
        readonly name: "bla";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
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
