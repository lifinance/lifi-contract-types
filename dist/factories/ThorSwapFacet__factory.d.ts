import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ThorSwapFacet, ThorSwapFacetInterface } from "../ThorSwapFacet";
declare type ThorSwapFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ThorSwapFacet__factory extends ContractFactory {
    constructor(...args: ThorSwapFacetConstructorParams);
    deploy(_thorchainRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ThorSwapFacet>;
    getDeployTransaction(_thorchainRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ThorSwapFacet;
    connect(signer: Signer): ThorSwapFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620026a6380380620026a6833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b60805161260b6200009b600039600081816106c801526106f3015261260b6000f3fe6080604052600436106100295760003560e01c80632541ec571461002e578063ad673d8814610043575b600080fd5b61004161003c36600461207c565b610056565b005b6100416100513660046120e0565b61027f565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761219f565b9050846101078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361017c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610235576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024788608001518960c001516104ac565b610251888861062c565b5047915050818111156102735761027360008461026e858561219f565b6107f8565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102fa576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061030b344761219f565b90508680610100015161034a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610388576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103ab8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610420576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104728a600001518b60c001518b8b33610829565b60c08b01526104818a8861062c565b50479150508181111561049e5761049e60008461026e858561219f565b505060009091555050505050565b806000036104e6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053f578034101561053b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d091906121d9565b90508181101561061b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6106278333308561096c565b505050565b4660011480156106695750608082015173ffffffffffffffffffffffffffffffffffffffff16733155ba85d5f96b2d030a4966af206230e46849cb145b156106a0576040517fa6fbe3b300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff811615806106f1576106f1827f00000000000000000000000000000000000000000000000000000000000000008660c00151610b86565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166344bc937b8261073957600061073f565b8560c001515b61074c60208701876121f2565b608088015160c089015161076360208a018a612214565b8a604001356040518863ffffffff1660e01b815260040161078996959493929190612280565b6000604051808303818588803b1580156107a257600080fd5b505af11580156107b6573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516107ea9190612374565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff83161561081f57610627838383610cbd565b6106278282610e3f565b600082808203610865576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561087460018561219f565b81811061088357610883612487565b905060200281019061089591906124b6565b6108a69060808101906060016121f2565b905060006108b382610f69565b905073ffffffffffffffffffffffffffffffffffffffff82166108dd576108da348261219f565b90505b60006108e98888611022565b90506108f5888861112e565b6109028a8989898561119b565b60008261090e85610f69565b610918919061219f565b90508981101561095e576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610612565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166109b9576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a06576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610a77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9b91906121d9565b9050610aa98286868661154d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3d91906121d9565b610b47919061219f565b14610b7e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ba657505050565b73ffffffffffffffffffffffffffffffffffffffff8216610bf3576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8c91906121d9565b10156106275761062783837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611629565b73ffffffffffffffffffffffffffffffffffffffff8316610d0a576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d57576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610dc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de891906121d9565b905080821115610e2e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610612565b610e39848484611719565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e8c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610ecf576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610612565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f29576040519150601f19603f3d011682016040523d82523d6000602084013e610f2e565b606091505b5050905080610627576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82161561101a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610ff1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101591906121d9565b61101c565b475b92915050565b60608160008167ffffffffffffffff81111561104057611040611e36565b604051908082528060200260200182016040528015611069578160200160208202803683370190505b5090506000805b838110156111235786868281811061108a5761108a612487565b905060200281019061109c91906124b6565b6110ad9060808101906060016121f2565b91506110b882610f69565b8382815181106110ca576110ca612487565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661111b573483828151811061110357611103612487565b60200260200101818151611117919061219f565b9052505b600101611070565b509095945050505050565b60005b81811015610627573683838381811061114c5761114c612487565b905060200281019061115e91906124b6565b905061117060e0820160c083016124f4565b156111925761119261118860608301604084016121f2565b82608001356104ac565b50600101611131565b83838383826001811461146857600085856111b760018561219f565b8181106111c6576111c6612487565b90506020028101906111d891906124b6565b6111e99060808101906060016121f2565b9050600089815b8181101561139457368d8d8381811061120b5761120b612487565b905060200281019061121d91906124b6565b905061124c61123260608301604084016121f2565b73ffffffffffffffffffffffffffffffffffffffff161590565b806112af57506112af61126560408301602084016121f2565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112c657506112c661126560208301836121f2565b801561134b575061134b6112dd60a0830183612214565b6112ec91600491600091612511565b6112f59161253b565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611381576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61138b8f8261176f565b506001016111f0565b505060005b6113a460018561219f565b8110156114605760008888838181106113bf576113bf612487565b90506020028101906113d191906124b6565b6113e29060808101906060016121f2565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114575785828151811061142957611429612487565b602002602001015161143a82610f69565b611444919061219f565b92508215611457576114578188856107f8565b50600101611399565b505050611541565b8760005b8181101561153e57368b8b8381811061148757611487612487565b905060200281019061149991906124b6565b90506114ae61123260608301604084016121f2565b806114c757506114c761126560408301602084016121f2565b80156114de57506114de61126560208301836121f2565b80156114f557506114f56112dd60a0830183612214565b61152b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115358d8261176f565b5060010161146c565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610e399085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611a4d565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526116b58482611b5c565b610e395760405173ffffffffffffffffffffffffffffffffffffffff841660248201526000604482015261170f9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115a7565b610e398482611a4d565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106279084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115a7565b61178561177f60208301836121f2565b3b151590565b6117bb576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036117fb576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061181061123260608501604086016121f2565b61181b576000611821565b82608001355b9050600061183d61183860608601604087016121f2565b610f69565b9050600061185461183860808701606088016121f2565b90508260000361188b5761188b61187160608701604088016121f2565b61188160408801602089016121f2565b8760800135610b86565b84608001358210156118d6576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610612565b6000806118e660208801886121f2565b73ffffffffffffffffffffffffffffffffffffffff168561190a60a08a018a612214565b604051611918929190612583565b60006040518083038185875af1925050503d8060008114611955576040519150601f19603f3d011682016040523d82523d6000602084013e61195a565b606091505b50915091508161196d5761196d81611c1d565b600061198261183860808a0160608b016121f2565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896119b360208b018b6121f2565b6119c360608c0160408d016121f2565b6119d360808d0160608e016121f2565b8c608001358987116119e557866119ef565b6119ef8a8861219f565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611aaf826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c279092919063ffffffff16565b9050805160001480611ad0575080806020019051810190611ad09190612593565b610627576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610612565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611b8691906125b0565b6000604051808303816000865af19150503d8060008114611bc3576040519150601f19603f3d011682016040523d82523d6000602084013e611bc8565b606091505b5091509150818015611bf2575080511580611bf2575080806020019051810190611bf29190612593565b8015611c14575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611c368484600085611c3e565b949350505050565b606082471015611cd0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610612565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611cf991906125b0565b60006040518083038185875af1925050503d8060008114611d36576040519150601f19603f3d011682016040523d82523d6000602084013e611d3b565b606091505b5091509150611d4c87838387611d57565b979650505050505050565b60608315611ded578251600003611de65773ffffffffffffffffffffffffffffffffffffffff85163b611de6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610612565b5081611c36565b611c368383815115611e025781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061291906125c2565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611e8957611e89611e36565b60405290565b600082601f830112611ea057600080fd5b813567ffffffffffffffff80821115611ebb57611ebb611e36565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611f0157611f01611e36565b81604052838152866020858801011115611f1a57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f5e57600080fd5b919050565b8015158114611f7157600080fd5b50565b8035611f5e81611f63565b60006101408284031215611f9257600080fd5b611f9a611e65565b905081358152602082013567ffffffffffffffff80821115611fbb57600080fd5b611fc785838601611e8f565b60208401526040840135915080821115611fe057600080fd5b50611fed84828501611e8f565b604083015250611fff60608301611f3a565b606082015261201060808301611f3a565b608082015261202160a08301611f3a565b60a082015260c082013560c082015260e082013560e0820152610100612048818401611f74565b9082015261012061205a838201611f74565b9082015292915050565b60006060828403121561207657600080fd5b50919050565b6000806040838503121561208f57600080fd5b823567ffffffffffffffff808211156120a757600080fd5b6120b386838701611f7f565b935060208501359150808211156120c957600080fd5b506120d685828601612064565b9150509250929050565b600080600080606085870312156120f657600080fd5b843567ffffffffffffffff8082111561210e57600080fd5b61211a88838901611f7f565b9550602087013591508082111561213057600080fd5b818701915087601f83011261214457600080fd5b81358181111561215357600080fd5b8860208260051b850101111561216857600080fd5b60208301955080945050604087013591508082111561218657600080fd5b5061219387828801612064565b91505092959194509250565b8181038181111561101c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000602082840312156121eb57600080fd5b5051919050565b60006020828403121561220457600080fd5b61220d82611f3a565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261224957600080fd5b83018035915067ffffffffffffffff82111561226457600080fd5b60200191503681900382131561227957600080fd5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015260a060608301528360a0830152838560c0840137600060c0858401015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601168301019050826080830152979650505050505050565b60005b83811015612321578181015183820152602001612309565b50506000910152565b60008151808452612342816020860160208601612306565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261239d61016085018361232a565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526123d8838261232a565b9250506060850151612402608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206124758187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126124ea57600080fd5b9190910192915050565b60006020828403121561250657600080fd5b813561220d81611f63565b6000808585111561252157600080fd5b8386111561252e57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561257b5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156125a557600080fd5b815161220d81611f63565b600082516124ea818460208701612306565b60208152600061220d602083018461232a56fea2646970667358221220a683a0a36f4849a81c0d923e347eeba5a7945c25969ca6508f500815c67d4ab764736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_thorchainRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaThorSwap";
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
            readonly name: "_thorSwapData";
            readonly type: "tuple";
            readonly internalType: "struct ThorSwapFacet.ThorSwapData";
            readonly components: readonly [{
                readonly name: "vault";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "memo";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "expiration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaThorSwap";
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
            readonly name: "_thorSwapData";
            readonly type: "tuple";
            readonly internalType: "struct ThorSwapFacet.ThorSwapData";
            readonly components: readonly [{
                readonly name: "vault";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "memo";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "expiration";
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
        readonly name: "DeprecatedToken";
        readonly inputs: readonly [];
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
    static createInterface(): ThorSwapFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ThorSwapFacet;
}
export {};
