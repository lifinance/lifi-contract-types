import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LIFuelFacet, LIFuelFacetInterface } from "../LIFuelFacet";
declare type LIFuelFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LIFuelFacet__factory extends ContractFactory {
    constructor(...args: LIFuelFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LIFuelFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LIFuelFacet;
    connect(signer: Signer): LIFuelFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061259d806100206000396000f3fe6080604052600436106100295760003560e01c8063552062161461002e5780639b6ee8e414610043575b600080fd5b61004161003c3660046120e8565b610056565b005b610041610051366004612182565b610286565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476121b7565b905085806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024989600001518a60c001518a8a336104a8565b60c08a0152610257896105f0565b5047915050818111156102795761027960008461027485856121b7565b610844565b5050600090915550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610301576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061031234476121b7565b90508380610100015115610352576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610390576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856103b38160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103ea576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610428576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610465576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047787608001518860c0015161087a565b610480876105f0565b50479150508181111561049d5761049d60008461027485856121b7565b505060009091555050565b6000828082036104e4576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856104f36001856121b7565b818110610502576105026121f1565b90506020028101906105149190612220565b61052590608081019060600161225e565b90506000610532826109f0565b905073ffffffffffffffffffffffffffffffffffffffff821661055c5761055934826121b7565b90505b60006105688888610aa9565b90506105748888610bb5565b6105818a89898985610c22565b60008261058d856109f0565b61059791906121b7565b9050898110156105e2576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60007fddb1a97e204589b19d70796e7a3363c86670116d11313290b7a7eb064a8f3da1604080518082018252601281527f4c694675656c466565436f6c6c6563746f7200000000000000000000000000006020820152905161065291906122a4565b90815260405190819003602001902054608083015173ffffffffffffffffffffffffffffffffffffffff909116915061069f9073ffffffffffffffffffffffffffffffffffffffff161590565b156107485760c082015160e083015160a08401516040517f74ef98d900000000000000000000000000000000000000000000000000000000815260048101849052602481019290925273ffffffffffffffffffffffffffffffffffffffff90811660448301528316916374ef98d9916064016000604051808303818588803b15801561072a57600080fd5b505af115801561073e573d6000803e3d6000fd5b5050505050610809565b61075b8260800151828460c00151610fd4565b608082015160c083015160e084015160a08501516040517f1eacd35f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9485166004820152602481019390935260448301919091528216606482015290821690631eacd35f90608401600060405180830381600087803b1580156107f057600080fd5b505af1158015610804573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108389190612300565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108705761086b83838361110b565b505050565b61086b828261128d565b806000036108b4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661090d5780341015610909576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561097a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099e9190612413565b9050818110156109e4576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105d9565b61086b833330856113b7565b600073ffffffffffffffffffffffffffffffffffffffff821615610aa1576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610a78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9c9190612413565b610aa3565b475b92915050565b60608160008167ffffffffffffffff811115610ac757610ac7611eba565b604051908082528060200260200182016040528015610af0578160200160208202803683370190505b5090506000805b83811015610baa57868682818110610b1157610b116121f1565b9050602002810190610b239190612220565b610b3490608081019060600161225e565b9150610b3f826109f0565b838281518110610b5157610b516121f1565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ba25734838281518110610b8a57610b8a6121f1565b60200260200101818151610b9e91906121b7565b9052505b600101610af7565b509095945050505050565b60005b8181101561086b5736838383818110610bd357610bd36121f1565b9050602002810190610be59190612220565b9050610bf760e0820160c0830161242c565b15610c1957610c19610c0f606083016040840161225e565b826080013561087a565b50600101610bb8565b838383838260018114610eef5760008585610c3e6001856121b7565b818110610c4d57610c4d6121f1565b9050602002810190610c5f9190612220565b610c7090608081019060600161225e565b9050600089815b81811015610e1b57368d8d83818110610c9257610c926121f1565b9050602002810190610ca49190612220565b9050610cd3610cb9606083016040840161225e565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d365750610d36610cec604083016020840161225e565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d4d5750610d4d610cec602083018361225e565b8015610dd25750610dd2610d6460a0830183612449565b610d73916004916000916124b5565b610d7c916124df565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e08576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e128f826115d1565b50600101610c77565b505060005b610e2b6001856121b7565b811015610ee7576000888883818110610e4657610e466121f1565b9050602002810190610e589190612220565b610e6990608081019060600161225e565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ede57858281518110610eb057610eb06121f1565b6020026020010151610ec1826109f0565b610ecb91906121b7565b92508215610ede57610ede818885610844565b50600101610e20565b505050610fc8565b8760005b81811015610fc557368b8b83818110610f0e57610f0e6121f1565b9050602002810190610f209190612220565b9050610f35610cb9606083016040840161225e565b80610f4e5750610f4e610cec604083016020840161225e565b8015610f655750610f65610cec602083018361225e565b8015610f7c5750610f7c610d6460a0830183612449565b610fb2576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fbc8d826115d1565b50600101610ef3565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ff457505050565b73ffffffffffffffffffffffffffffffffffffffff8216611041576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156110b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110da9190612413565b101561086b5761086b83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118af565b73ffffffffffffffffffffffffffffffffffffffff8316611158576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111a5576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611212573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112369190612413565b90508082111561127c576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105d9565b611287848484611a1d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166112da576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561131d576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105d9565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611377576040519150601f19603f3d011682016040523d82523d6000602084013e61137c565b606091505b505090508061086b576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611404576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611451576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156114c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e69190612413565b90506114f482868686611a73565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611564573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115889190612413565b61159291906121b7565b146115c9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6115e76115e1602083018361225e565b3b151590565b61161d576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361165d576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611672610cb9606085016040860161225e565b61167d576000611683565b82608001355b9050600061169f61169a606086016040870161225e565b6109f0565b905060006116b661169a608087016060880161225e565b9050826000036116ed576116ed6116d3606087016040880161225e565b6116e3604088016020890161225e565b8760800135610fd4565b8460800135821015611738576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105d9565b600080611748602088018861225e565b73ffffffffffffffffffffffffffffffffffffffff168561176c60a08a018a612449565b60405161177a929190612527565b60006040518083038185875af1925050503d80600081146117b7576040519150601f19603f3d011682016040523d82523d6000602084013e6117bc565b606091505b5091509150816117cf576117cf81611ad1565b60006117e461169a60808a0160608b0161225e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961181560208b018b61225e565b61182560608c0160408d0161225e565b61183560808d0160608e0161225e565b8c608001358987116118475786611851565b6118518a886121b7565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905261193b8482611adb565b6112875760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611a139085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b9c565b6112878482611b9c565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261086b9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611991565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112879085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611991565b8051602082018181fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611b0591906122a4565b6000604051808303816000865af19150503d8060008114611b42576040519150601f19603f3d011682016040523d82523d6000602084013e611b47565b606091505b5091509150818015611b71575080511580611b71575080806020019051810190611b719190612537565b8015611b93575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b6000611bfe826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cab9092919063ffffffff16565b9050805160001480611c1f575080806020019051810190611c1f9190612537565b61086b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105d9565b6060611cba8484600085611cc2565b949350505050565b606082471015611d54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105d9565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d7d91906122a4565b60006040518083038185875af1925050503d8060008114611dba576040519150601f19603f3d011682016040523d82523d6000602084013e611dbf565b606091505b5091509150611dd087838387611ddb565b979650505050505050565b60608315611e71578251600003611e6a5773ffffffffffffffffffffffffffffffffffffffff85163b611e6a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105d9565b5081611cba565b611cba8383815115611e865781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d99190612554565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f0d57611f0d611eba565b60405290565b600082601f830112611f2457600080fd5b813567ffffffffffffffff80821115611f3f57611f3f611eba565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611f8557611f85611eba565b81604052838152866020858801011115611f9e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611fe257600080fd5b919050565b8015158114611ff557600080fd5b50565b8035611fe281611fe7565b6000610140828403121561201657600080fd5b61201e611ee9565b905081358152602082013567ffffffffffffffff8082111561203f57600080fd5b61204b85838601611f13565b6020840152604084013591508082111561206457600080fd5b5061207184828501611f13565b60408301525061208360608301611fbe565b606082015261209460808301611fbe565b60808201526120a560a08301611fbe565b60a082015260c082013560c082015260e082013560e08201526101006120cc818401611ff8565b908201526101206120de838201611ff8565b9082015292915050565b6000806000604084860312156120fd57600080fd5b833567ffffffffffffffff8082111561211557600080fd5b61212187838801612003565b9450602086013591508082111561213757600080fd5b818601915086601f83011261214b57600080fd5b81358181111561215a57600080fd5b8760208260051b850101111561216f57600080fd5b6020830194508093505050509250925092565b60006020828403121561219457600080fd5b813567ffffffffffffffff8111156121ab57600080fd5b611cba84828501612003565b81810381811115610aa3577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261225457600080fd5b9190910192915050565b60006020828403121561227057600080fd5b61227982611fbe565b9392505050565b60005b8381101561229b578181015183820152602001612283565b50506000910152565b60008251612254818460208701612280565b600081518084526122ce816020860160208601612280565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526123296101608501836122b6565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261236483826122b6565b925050606085015161238e608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206124018187018315159052565b90950151151593019290925250919050565b60006020828403121561242557600080fd5b5051919050565b60006020828403121561243e57600080fd5b813561227981611fe7565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261247e57600080fd5b83018035915067ffffffffffffffff82111561249957600080fd5b6020019150368190038213156124ae57600080fd5b9250929050565b600080858511156124c557600080fd5b838611156124d257600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561251f5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561254957600080fd5b815161227981611fe7565b60208152600061227960208301846122b656fea2646970667358221220a59e5de5b379fe67040bd49cceab12c002c2b201855e3be98be3cd7c83d0ab1764736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "startBridgeTokensViaLIFuel";
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
        readonly name: "swapAndStartBridgeTokensViaLIFuel";
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
    static createInterface(): LIFuelFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LIFuelFacet;
}
export {};
