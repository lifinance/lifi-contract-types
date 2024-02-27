import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MayanBridgeFacet, MayanBridgeFacetInterface } from "../MayanBridgeFacet";
declare type MayanBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MayanBridgeFacet__factory extends ContractFactory {
    constructor(...args: MayanBridgeFacetConstructorParams);
    deploy(_example: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MayanBridgeFacet>;
    getDeployTransaction(_example: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MayanBridgeFacet;
    connect(signer: Signer): MayanBridgeFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620029b3380380620029b3833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612920620000936000396000608b01526129206000f3fe60806040526004361061003f5760003560e01c806302f86ce31461004457806322ee9bf21461006657806354353f2f14610079578063f26bad8a146100d6575b600080fd5b34801561005057600080fd5b5061006461005f36600461212a565b6100e9565b005b61006461007436600461238c565b610153565b34801561008557600080fd5b506100ad7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100646100e43660046123f0565b61037c565b6100f16105a9565b80517f07690ccc7e74f2b23466e2b187f63f3bfec870dfd78e6c136586ddce9e81bbcc906101259082906020850190611fba565b506040517fd76d08ad480ad89ddba6ea944c57b4f2143e5642df07d274bd508c752f8d92cb90600090a15050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101ce576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101df34476124de565b9050846102048160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561023b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610279576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102b6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156102f4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610332576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61034488608001518960c0015161061e565b61034e888861079e565b5047915050818111156103705761037060008461036b85856124de565b6107d9565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103f7576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061040834476124de565b905086806101000151610447576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610485576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104a88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104df576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361051d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361055a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61056f8a600001518b60c001518b8b3361080a565b60c08b015261057e8a8861079e565b50479150508181111561059b5761059b60008461036b85856124de565b505060009091555050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff16331461061c576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b80600003610658576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106b157803410156106ad576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561071e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074291906124f1565b90508181101561078d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6107998333308561094d565b505050565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516107cd9190612578565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561080057610799838383610b67565b6107998282610ce9565b600082808203610846576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856108556001856124de565b8181106108645761086461268b565b905060200281019061087691906126ba565b6108879060808101906060016126f8565b9050600061089482610e13565b905073ffffffffffffffffffffffffffffffffffffffff82166108be576108bb34826124de565b90505b60006108ca8888610ecc565b90506108d68888610fd8565b6108e38a89898985611045565b6000826108ef85610e13565b6108f991906124de565b90508981101561093f576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610784565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841661099a576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109e7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610a58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7c91906124f1565b9050610a8a828686866113f7565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610afa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1e91906124f1565b610b2891906124de565b14610b5f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610bb4576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c01576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610c6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9291906124f1565b905080821115610cd8576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610784565b610ce38484846114d3565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d36576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610d79576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610784565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610dd3576040519150601f19603f3d011682016040523d82523d6000602084013e610dd8565b606091505b5050905080610799576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615610ec4576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610e9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ebf91906124f1565b610ec6565b475b92915050565b60608160008167ffffffffffffffff811115610eea57610eea612059565b604051908082528060200260200182016040528015610f13578160200160208202803683370190505b5090506000805b83811015610fcd57868682818110610f3457610f3461268b565b9050602002810190610f4691906126ba565b610f579060808101906060016126f8565b9150610f6282610e13565b838281518110610f7457610f7461268b565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610fc55734838281518110610fad57610fad61268b565b60200260200101818151610fc191906124de565b9052505b600101610f1a565b509095945050505050565b60005b818110156107995736838383818110610ff657610ff661268b565b905060200281019061100891906126ba565b905061101a60e0820160c08301612713565b1561103c5761103c61103260608301604084016126f8565b826080013561061e565b50600101610fdb565b83838383826001811461131257600085856110616001856124de565b8181106110705761107061268b565b905060200281019061108291906126ba565b6110939060808101906060016126f8565b9050600089815b8181101561123e57368d8d838181106110b5576110b561268b565b90506020028101906110c791906126ba565b90506110f66110dc60608301604084016126f8565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611159575061115961110f60408301602084016126f8565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015611170575061117061110f60208301836126f8565b80156111f557506111f561118760a0830183612730565b6111969160049160009161279c565b61119f916127c6565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61122b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112358f82611529565b5060010161109a565b505060005b61124e6001856124de565b81101561130a5760008888838181106112695761126961268b565b905060200281019061127b91906126ba565b61128c9060808101906060016126f8565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611301578582815181106112d3576112d361268b565b60200260200101516112e482610e13565b6112ee91906124de565b92508215611301576113018188856107d9565b50600101611243565b5050506113eb565b8760005b818110156113e857368b8b838181106113315761133161268b565b905060200281019061134391906126ba565b90506113586110dc60608301604084016126f8565b80611371575061137161110f60408301602084016126f8565b8015611388575061138861110f60208301836126f8565b801561139f575061139f61118760a0830183612730565b6113d5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113df8d82611529565b50600101611316565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ce39085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261183f565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107999084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611451565b61153f61153960208301836126f8565b3b151590565b611575576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036115b5576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006115ca6110dc60608501604086016126f8565b6115d55760006115db565b82608001355b905060006115f76115f260608601604087016126f8565b610e13565b9050600061160e6115f260808701606088016126f8565b9050826000036116455761164561162b60608701604088016126f8565b61163b60408801602089016126f8565b876080013561194e565b8460800135821015611690576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610784565b6000806116a060208801886126f8565b73ffffffffffffffffffffffffffffffffffffffff16856116c460a08a018a612730565b6040516116d292919061280e565b60006040518083038185875af1925050503d806000811461170f576040519150601f19603f3d011682016040523d82523d6000602084013e611714565b606091505b50915091508161175f57600061172982611a91565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610784919061281e565b60006117746115f260808a0160608b016126f8565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896117a560208b018b6126f8565b6117b560608c0160408d016126f8565b6117c560808d0160608e016126f8565b8c608001358987116117d757866117e1565b6117e18a886124de565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60006118a1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611b0f9092919063ffffffff16565b90508051600014806118c25750808060200190518101906118c29190612831565b610799576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610784565b73ffffffffffffffffffffffffffffffffffffffff831661196e57505050565b73ffffffffffffffffffffffffffffffffffffffff82166119bb576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611a30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a5491906124f1565b101561079957611a6683836000611b26565b61079983837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b26565b6060604482511015611ad657505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611af26004808551611aea91906124de565b859190611ca8565b905080806020019051810190611b08919061284e565b9392505050565b6060611b1e8484600085611dc2565b949350505050565b801580611bc657506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611ba0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bc491906124f1565b155b611c52576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610784565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107999084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611451565b606081611cb681601f6128c5565b1015611cee576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611cf882846128c5565b84511015611d32576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611d515760405191506000825260208201604052611db9565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611d8a578051835260209283019201611d72565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611e54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610784565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e7d91906128d8565b60006040518083038185875af1925050503d8060008114611eba576040519150601f19603f3d011682016040523d82523d6000602084013e611ebf565b606091505b5091509150611ed087838387611edb565b979650505050505050565b60608315611f71578251600003611f6a5773ffffffffffffffffffffffffffffffffffffffff85163b611f6a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610784565b5081611b1e565b611b1e8383815115611f865781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610784919061281e565b828054828255906000526020600020908101928215612034579160200282015b8281111561203457825182547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909116178255602090920191600190910190611fda565b50612040929150612044565b5090565b5b808211156120405760008155600101612045565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120ac576120ac612059565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156120f9576120f9612059565b604052919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461212557600080fd5b919050565b6000602080838503121561213d57600080fd5b823567ffffffffffffffff8082111561215557600080fd5b818501915085601f83011261216957600080fd5b81358181111561217b5761217b612059565b8060051b915061218c8483016120b2565b81815291830184019184810190888411156121a657600080fd5b938501935b838510156121cb576121bc85612101565b825293850193908501906121ab565b98975050505050505050565b600067ffffffffffffffff8211156121f1576121f1612059565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261222e57600080fd5b813561224161223c826121d7565b6120b2565b81815284602083860101111561225657600080fd5b816020850160208301376000918101602001919091529392505050565b801515811461228157600080fd5b50565b803561212581612273565b600061014082840312156122a257600080fd5b6122aa612088565b905081358152602082013567ffffffffffffffff808211156122cb57600080fd5b6122d78583860161221d565b602084015260408401359150808211156122f057600080fd5b506122fd8482850161221d565b60408301525061230f60608301612101565b606082015261232060808301612101565b608082015261233160a08301612101565b60a082015260c082013560c082015260e082013560e0820152610100612358818401612284565b9082015261012061236a838201612284565b9082015292915050565b60006020828403121561238657600080fd5b50919050565b6000806040838503121561239f57600080fd5b823567ffffffffffffffff808211156123b757600080fd5b6123c38683870161228f565b935060208501359150808211156123d957600080fd5b506123e685828601612374565b9150509250929050565b6000806000806060858703121561240657600080fd5b843567ffffffffffffffff8082111561241e57600080fd5b61242a8883890161228f565b9550602087013591508082111561244057600080fd5b818701915087601f83011261245457600080fd5b81358181111561246357600080fd5b8860208260051b850101111561247857600080fd5b60208301955080945050604087013591508082111561249657600080fd5b506124a387828801612374565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610ec657610ec66124af565b60006020828403121561250357600080fd5b5051919050565b60005b8381101561252557818101518382015260200161250d565b50506000910152565b6000815180845261254681602086016020860161250a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526125a161016085018361252e565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526125dc838261252e565b9250506060850151612606608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126798187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126126ee57600080fd5b9190910192915050565b60006020828403121561270a57600080fd5b611b0882612101565b60006020828403121561272557600080fd5b8135611b0881612273565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261276557600080fd5b83018035915067ffffffffffffffff82111561278057600080fd5b60200191503681900382131561279557600080fd5b9250929050565b600080858511156127ac57600080fd5b838611156127b957600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128065780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611b08602083018461252e565b60006020828403121561284357600080fd5b8151611b0881612273565b60006020828403121561286057600080fd5b815167ffffffffffffffff81111561287757600080fd5b8201601f8101841361288857600080fd5b805161289661223c826121d7565b8181528560208385010111156128ab57600080fd5b6128bc82602083016020860161250a565b95945050505050565b80820180821115610ec657610ec66124af565b600082516126ee81846020870161250a56fea2646970667358221220e27963e5ebb0fdfe582ce272b59f1ef195cf78d51ca8051ea24a44f00e7980a164736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_example";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "example";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initMayanBridge";
        readonly inputs: readonly [{
            readonly name: "_exampleAllowedTokens";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaMayanBridge";
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
            readonly name: "_mayanBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct MayanBridgeFacet.MayanBridgeData";
            readonly components: readonly [{
                readonly name: "exampleParam";
                readonly type: "string";
                readonly internalType: "string";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaMayanBridge";
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
            readonly name: "_mayanBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct MayanBridgeFacet.MayanBridgeData";
            readonly components: readonly [{
                readonly name: "exampleParam";
                readonly type: "string";
                readonly internalType: "string";
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
        readonly type: "event";
        readonly name: "MayanBridgeInitialized";
        readonly inputs: readonly [];
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
        readonly name: "OnlyContractOwner";
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
    static createInterface(): MayanBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MayanBridgeFacet;
}
export {};
