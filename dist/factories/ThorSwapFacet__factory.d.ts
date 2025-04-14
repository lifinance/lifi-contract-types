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
    static readonly bytecode = "0x60a060405234801562000010575f80fd5b506040516200261738038062002617833981016040819052620000339162000045565b6001600160a01b031660805262000074565b5f6020828403121562000056575f80fd5b81516001600160a01b03811681146200006d575f80fd5b9392505050565b608051612583620000945f395f81816106b901526106e401526125835ff3fe608060405260043610610028575f3560e01c80632541ec571461002c578063ad673d8814610041575b5f80fd5b61003f61003a36600461201f565b610054565b005b61003f61004f36600461207f565b610279565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447612135565b9050846101048160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610178576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610231576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024388608001518960c001516104a1565b61024d888861061d565b50479150508181111561026e5761026e5f846102698585612135565b6107e4565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103043447612135565b905086806101000151610343576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610381576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103a48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103db576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610418576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610455576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104698a5f01518b60c001518b8b33610815565b60c08b01526104788a8861061d565b504791505081811115610494576104945f846102698585612135565b50505f9091555050505050565b805f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610533578034101561052f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561059d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105c1919061216d565b90508181101561060c576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61061883333085610953565b505050565b46600114801561065a5750608082015173ffffffffffffffffffffffffffffffffffffffff16733155ba85d5f96b2d030a4966af206230e46849cb145b15610691576040517fa6fbe3b300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff811615806106e2576106e2827f00000000000000000000000000000000000000000000000000000000000000008660c00151610b68565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166344bc937b82610729575f61072f565b8560c001515b61073c6020870187612184565b608088015160c089015161075360208a018a6121a4565b8a604001356040518863ffffffff1660e01b81526004016107799695949392919061220c565b5f604051808303818588803b158015610790575f80fd5b505af11580156107a2573d5f803e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516107d691906122fb565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff83161561080b57610618838383610c9d565b6106188282610e1c565b5f82808203610850576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561085e600185612135565b81811061086d5761086d61240d565b905060200281019061087f919061243a565b610890906080810190606001612184565b90505f61089c82610f42565b905073ffffffffffffffffffffffffffffffffffffffff82166108c6576108c33482612135565b90505b5f6108d18888610ff8565b90506108dd8888611102565b6108ea8a8989898561116e565b5f826108f585610f42565b6108ff9190612135565b905089811015610945576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610603565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166109a0576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109ed576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa158015610a5b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a7f919061216d565b9050610a8d82868686611518565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610afb573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b1f919061216d565b610b299190612135565b14610b60576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b8857505050565b73ffffffffffffffffffffffffffffffffffffffff8216610bd5576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c48573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c6c919061216d565b10156106185761061883837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6115f4565b73ffffffffffffffffffffffffffffffffffffffff8316610cea576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d37576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610da1573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610dc5919061216d565b905080821115610e0b576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610603565b610e168484846116e3565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e69576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610eac576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610603565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610f02576040519150601f19603f3d011682016040523d82523d5f602084013e610f07565b606091505b5050905080610618576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff821615610ff0576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610fc7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610feb919061216d565b610ff2565b475b92915050565b6060815f8167ffffffffffffffff81111561101557611015611de7565b60405190808252806020026020018201604052801561103e578160200160208202803683370190505b5090505f805b838110156110f75786868281811061105e5761105e61240d565b9050602002810190611070919061243a565b611081906080810190606001612184565b915061108c82610f42565b83828151811061109e5761109e61240d565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110ef57348382815181106110d7576110d761240d565b602002602001018181516110eb9190612135565b9052505b600101611044565b509095945050505050565b5f5b81811015610618573683838381811061111f5761111f61240d565b9050602002810190611131919061243a565b905061114360e0820160c08301612476565b156111655761116561115b6060830160408401612184565b82608001356104a1565b50600101611104565b838383838260018114611434575f8585611189600185612135565b8181106111985761119861240d565b90506020028101906111aa919061243a565b6111bb906080810190606001612184565b90505f89815b8181101561136257368d8d838181106111dc576111dc61240d565b90506020028101906111ee919061243a565b905061121d6112036060830160408401612184565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061127f575061127f6112366040830160208401612184565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561129657506112966112366020830183612184565b801561131957506113196112ad60a08301836121a4565b6112bb916004915f91612491565b6112c4916124b8565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61134f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113598f82611739565b506001016111c1565b50505f5b611371600185612135565b81101561142c575f88888381811061138b5761138b61240d565b905060200281019061139d919061243a565b6113ae906080810190606001612184565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611423578582815181106113f5576113f561240d565b602002602001015161140682610f42565b6114109190612135565b92508215611423576114238188856107e4565b50600101611366565b50505061150c565b875f5b8181101561150957368b8b838181106114525761145261240d565b9050602002810190611464919061243a565b90506114796112036060830160408401612184565b8061149257506114926112366040830160208401612184565b80156114a957506114a96112366020830183612184565b80156114c057506114c06112ad60a08301836121a4565b6114f6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115008d82611739565b50600101611437565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610e169085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611a0c565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526116808482611b19565b610e165760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f60448201526116d99085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611572565b610e168482611a0c565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106189084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611572565b61174f6117496020830183612184565b3b151590565b611785576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036117c4576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6117d86112036060850160408601612184565b6117e2575f6117e8565b82608001355b90505f6118036117fe6060860160408701612184565b610f42565b90505f6118196117fe6080870160608801612184565b9050825f0361184f5761184f6118356060870160408801612184565b6118456040880160208901612184565b8760800135610b68565b846080013582101561189a576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610603565b5f806118a96020880188612184565b73ffffffffffffffffffffffffffffffffffffffff16856118cd60a08a018a6121a4565b6040516118db929190612500565b5f6040518083038185875af1925050503d805f8114611915576040519150601f19603f3d011682016040523d82523d5f602084013e61191a565b606091505b50915091508161192d5761192d81611bd4565b5f6119416117fe60808a0160608b01612184565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961197260208b018b612184565b61198260608c0160408d01612184565b61199260808d0160608e01612184565b8c608001358987116119a457866119ae565b6119ae8a88612135565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b5f611a6d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611bde9092919063ffffffff16565b905080515f1480611a8d575080806020019051810190611a8d919061250f565b610618576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610603565b5f805f8473ffffffffffffffffffffffffffffffffffffffff1684604051611b41919061252a565b5f604051808303815f865af19150503d805f8114611b7a576040519150601f19603f3d011682016040523d82523d5f602084013e611b7f565b606091505b5091509150818015611ba9575080511580611ba9575080806020019051810190611ba9919061250f565b8015611bcb575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611bec84845f85611bf4565b949350505050565b606082471015611c86576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610603565b5f808673ffffffffffffffffffffffffffffffffffffffff168587604051611cae919061252a565b5f6040518083038185875af1925050503d805f8114611ce8576040519150601f19603f3d011682016040523d82523d5f602084013e611ced565b606091505b5091509150611cfe87838387611d09565b979650505050505050565b60608315611d9e5782515f03611d975773ffffffffffffffffffffffffffffffffffffffff85163b611d97576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610603565b5081611bec565b611bec8383815115611db35781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610603919061253b565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611e3857611e38611de7565b60405290565b5f82601f830112611e4d575f80fd5b813567ffffffffffffffff80821115611e6857611e68611de7565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611eae57611eae611de7565b81604052838152866020858801011115611ec6575f80fd5b836020870160208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f08575f80fd5b919050565b8015158114611f1a575f80fd5b50565b8035611f0881611f0d565b5f6101408284031215611f39575f80fd5b611f41611e14565b905081358152602082013567ffffffffffffffff80821115611f61575f80fd5b611f6d85838601611e3e565b60208401526040840135915080821115611f85575f80fd5b50611f9284828501611e3e565b604083015250611fa460608301611ee5565b6060820152611fb560808301611ee5565b6080820152611fc660a08301611ee5565b60a082015260c082013560c082015260e082013560e0820152610100611fed818401611f1d565b90820152610120611fff838201611f1d565b9082015292915050565b5f60608284031215612019575f80fd5b50919050565b5f8060408385031215612030575f80fd5b823567ffffffffffffffff80821115612047575f80fd5b61205386838701611f28565b93506020850135915080821115612068575f80fd5b5061207585828601612009565b9150509250929050565b5f805f8060608587031215612092575f80fd5b843567ffffffffffffffff808211156120a9575f80fd5b6120b588838901611f28565b955060208701359150808211156120ca575f80fd5b818701915087601f8301126120dd575f80fd5b8135818111156120eb575f80fd5b8860208260051b85010111156120ff575f80fd5b60208301955080945050604087013591508082111561211c575f80fd5b5061212987828801612009565b91505092959194509250565b81810381811115610ff2577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6020828403121561217d575f80fd5b5051919050565b5f60208284031215612194575f80fd5b61219d82611ee5565b9392505050565b5f8083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126121d7575f80fd5b83018035915067ffffffffffffffff8211156121f1575f80fd5b602001915036819003821315612205575f80fd5b9250929050565b5f73ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015260a060608301528360a0830152838560c08401375f60c0858401015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601168301019050826080830152979650505050505050565b5f5b838110156122aa578181015183820152602001612292565b50505f910152565b5f81518084526122c9816020860160208601612290565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201525f60208301516101408060408501526123236101608501836122b2565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261235e83826122b2565b9250506060850151612388608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206123fb8187018315159052565b90950151151593019290925250919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261246c575f80fd5b9190910192915050565b5f60208284031215612486575f80fd5b813561219d81611f0d565b5f808585111561249f575f80fd5b838611156124ab575f80fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156124f85780818660040360031b1b83161692505b505092915050565b818382375f9101908152919050565b5f6020828403121561251f575f80fd5b815161219d81611f0d565b5f825161246c818460208701612290565b602081525f61219d60208301846122b256fea26469706673582212205973355048dfc2ddfca0ab928bfe3b57cae407dd5d21592c12e158f7ec94973164736f6c63430008160033";
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
