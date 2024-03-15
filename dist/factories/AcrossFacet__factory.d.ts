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
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002a6338038062002a63833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a05161298b620000d8600039600061069c01526000818161067101528181610752015261077d015261298b6000f3fe6080604052600436106100295760003560e01c80631fd8010c1461002e5780633a3f733214610043575b600080fd5b61004161003c366004612309565b610056565b005b61004161005136600461236d565b61027f565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761245b565b9050846101078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361017c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610235576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024788608001518960c001516104ac565b610251888861062c565b5047915050818111156102735761027360008461026e858561245b565b610892565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102fa576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061030b344761245b565b90508680610100015161034a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610388576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103ab8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610420576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104728a600001518b60c001518b8b336108c3565b60c08b01526104818a8861062c565b50479150508181111561049e5761049e60008461026e858561245b565b505060009091555050505050565b806000036104e6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053f578034101561053b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d0919061246e565b90508181101561061b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61062783333085610a06565b505050565b608082015173ffffffffffffffffffffffffffffffffffffffff166107485760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692631186ec339290917f00000000000000000000000000000000000000000000000000000000000000009083906106cb6020890189612487565b6106db60408a0160208b016124aa565b6106e860408b018b6124d0565b8b606001356040518b63ffffffff1660e01b81526004016107119998979695949392919061253c565b6000604051808303818588803b15801561072a57600080fd5b505af115801561073e573d6000803e3d6000fd5b5050505050610857565b61077b82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610c30565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631186ec338360a0015184608001518560c001518660e001518660000160208101906107de9190612487565b6107ee6040890160208a016124aa565b6107fb60408a018a6124d0565b8a606001356040518a63ffffffff1660e01b81526004016108249998979695949392919061253c565b600060405180830381600087803b15801561083e57600080fd5b505af1158015610852573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610886919061264f565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108b957610627838383610d73565b6106278282610ef5565b6000828082036108ff576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561090e60018561245b565b81811061091d5761091d612762565b905060200281019061092f9190612791565b6109409060808101906060016127cf565b9050600061094d8261101f565b905073ffffffffffffffffffffffffffffffffffffffff821661097757610974348261245b565b90505b600061098388886110d8565b905061098f88886111e4565b61099c8a89898985611251565b6000826109a88561101f565b6109b2919061245b565b9050898110156109f8576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610612565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610a53576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610aa0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610b11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b35919061246e565b9050610b4382868686611603565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015260009183918516906370a0823190602401602060405180830381865afa158015610bb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd8919061246e565b610be2919061245b565b905083610bf08260016127ea565b11610c27576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c5057505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c9d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d36919061246e565b101561062757610d48838360006116df565b61062783837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116df565b73ffffffffffffffffffffffffffffffffffffffff8316610dc0576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e0d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610e7a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9e919061246e565b905080821115610ee4576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610612565b610eef848484611861565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f42576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610f85576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610612565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610fdf576040519150601f19603f3d011682016040523d82523d6000602084013e610fe4565b606091505b5050905080610627576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156110d0576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156110a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110cb919061246e565b6110d2565b475b92915050565b60608160008167ffffffffffffffff8111156110f6576110f6612083565b60405190808252806020026020018201604052801561111f578160200160208202803683370190505b5090506000805b838110156111d95786868281811061114057611140612762565b90506020028101906111529190612791565b6111639060808101906060016127cf565b915061116e8261101f565b83828151811061118057611180612762565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166111d157348382815181106111b9576111b9612762565b602002602001018181516111cd919061245b565b9052505b600101611126565b509095945050505050565b60005b81811015610627573683838381811061120257611202612762565b90506020028101906112149190612791565b905061122660e0820160c083016127fd565b156112485761124861123e60608301604084016127cf565b82608001356104ac565b506001016111e7565b83838383826001811461151e576000858561126d60018561245b565b81811061127c5761127c612762565b905060200281019061128e9190612791565b61129f9060808101906060016127cf565b9050600089815b8181101561144a57368d8d838181106112c1576112c1612762565b90506020028101906112d39190612791565b90506113026112e860608301604084016127cf565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611365575061136561131b60408301602084016127cf565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561137c575061137c61131b60208301836127cf565b8015611401575061140161139360a08301836124d0565b6113a29160049160009161281a565b6113ab91612844565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611437576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114418f826118b7565b506001016112a6565b505060005b61145a60018561245b565b81101561151657600088888381811061147557611475612762565b90506020028101906114879190612791565b6114989060808101906060016127cf565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461150d578582815181106114df576114df612762565b60200260200101516114f08261101f565b6114fa919061245b565b9250821561150d5761150d818885610892565b5060010161144f565b5050506115f7565b8760005b818110156115f457368b8b8381811061153d5761153d612762565b905060200281019061154f9190612791565b90506115646112e860608301604084016127cf565b8061157d575061157d61131b60408301602084016127cf565b8015611594575061159461131b60208301836127cf565b80156115ab57506115ab61139360a08301836124d0565b6115e1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115eb8d826118b7565b50600101611522565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610eef9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611bcd565b80158061177f57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611759573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061177d919061246e565b155b61180b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610612565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106279084907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161165d565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106279084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161165d565b6118cd6118c760208301836127cf565b3b151590565b611903576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611943576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006119586112e860608501604086016127cf565b611963576000611969565b82608001355b9050600061198561198060608601604087016127cf565b61101f565b9050600061199c61198060808701606088016127cf565b9050826000036119d3576119d36119b960608701604088016127cf565b6119c960408801602089016127cf565b8760800135610c30565b8460800135821015611a1e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610612565b600080611a2e60208801886127cf565b73ffffffffffffffffffffffffffffffffffffffff1685611a5260a08a018a6124d0565b604051611a6092919061288c565b60006040518083038185875af1925050503d8060008114611a9d576040519150601f19603f3d011682016040523d82523d6000602084013e611aa2565b606091505b509150915081611aed576000611ab782611cdc565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610612919061289c565b6000611b0261198060808a0160608b016127cf565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611b3360208b018b6127cf565b611b4360608c0160408d016127cf565b611b5360808d0160608e016127cf565b8c60800135898711611b655786611b6f565b611b6f8a8861245b565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611c2f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d5a9092919063ffffffff16565b9050805160001480611c50575080806020019051810190611c5091906128af565b610627576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610612565b6060604482511015611d2157505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611d3d6004808551611d35919061245b565b859190611d71565b905080806020019051810190611d5391906128cc565b9392505050565b6060611d698484600085611e8b565b949350505050565b606081611d7f81601f6127ea565b1015611db7576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611dc182846127ea565b84511015611dfb576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611e1a5760405191506000825260208201604052611e82565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611e53578051835260209283019201611e3b565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611f1d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610612565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f469190612943565b60006040518083038185875af1925050503d8060008114611f83576040519150601f19603f3d011682016040523d82523d6000602084013e611f88565b606091505b5091509150611f9987838387611fa4565b979650505050505050565b6060831561203a5782516000036120335773ffffffffffffffffffffffffffffffffffffffff85163b612033576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610612565b5081611d69565b611d69838381511561204f5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610612919061289c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120d6576120d6612083565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561212357612123612083565b604052919050565b600067ffffffffffffffff82111561214557612145612083565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261218257600080fd5b81356121956121908261212b565b6120dc565b8181528460208386010111156121aa57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146121eb57600080fd5b919050565b80151581146121fe57600080fd5b50565b80356121eb816121f0565b6000610140828403121561221f57600080fd5b6122276120b2565b905081358152602082013567ffffffffffffffff8082111561224857600080fd5b61225485838601612171565b6020840152604084013591508082111561226d57600080fd5b5061227a84828501612171565b60408301525061228c606083016121c7565b606082015261229d608083016121c7565b60808201526122ae60a083016121c7565b60a082015260c082013560c082015260e082013560e08201526101006122d5818401612201565b908201526101206122e7838201612201565b9082015292915050565b60006080828403121561230357600080fd5b50919050565b6000806040838503121561231c57600080fd5b823567ffffffffffffffff8082111561233457600080fd5b6123408683870161220c565b9350602085013591508082111561235657600080fd5b50612363858286016122f1565b9150509250929050565b6000806000806060858703121561238357600080fd5b843567ffffffffffffffff8082111561239b57600080fd5b6123a78883890161220c565b955060208701359150808211156123bd57600080fd5b818701915087601f8301126123d157600080fd5b8135818111156123e057600080fd5b8860208260051b85010111156123f557600080fd5b60208301955080945050604087013591508082111561241357600080fd5b50612420878288016122f1565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156110d2576110d261242c565b60006020828403121561248057600080fd5b5051919050565b60006020828403121561249957600080fd5b81358060070b8114611d5357600080fd5b6000602082840312156124bc57600080fd5b813563ffffffff81168114611d5357600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261250557600080fd5b83018035915067ffffffffffffffff82111561252057600080fd5b60200191503681900382131561253557600080fd5b9250929050565b600061010073ffffffffffffffffffffffffffffffffffffffff808d168452808c166020850152508960408401528860608401528760070b608084015263ffffffff871660a08401528060c0840152848184015250610120848682850137600083860182015260e083019390935250601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910101979650505050505050565b60005b838110156125fc5781810151838201526020016125e4565b50506000910152565b6000815180845261261d8160208601602086016125e1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612678610160850183612605565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526126b38382612605565b92505060608501516126dd608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127508187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126127c557600080fd5b9190910192915050565b6000602082840312156127e157600080fd5b611d53826121c7565b808201808211156110d2576110d261242c565b60006020828403121561280f57600080fd5b8135611d53816121f0565b6000808585111561282a57600080fd5b8386111561283757600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128845780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611d536020830184612605565b6000602082840312156128c157600080fd5b8151611d53816121f0565b6000602082840312156128de57600080fd5b815167ffffffffffffffff8111156128f557600080fd5b8201601f8101841361290657600080fd5b80516129146121908261212b565b81815285602083850101111561292957600080fd5b61293a8260208301602086016125e1565b95945050505050565b600082516127c58184602087016125e156fea264697066735822122068508d8bea055564b9d57d4710f347e271bb067046d91134d384dcc08717d74a64736f6c63430008110033";
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
    }, {
        readonly type: "error";
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): AcrossFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacet;
}
export {};
