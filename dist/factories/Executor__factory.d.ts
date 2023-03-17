import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Executor, ExecutorInterface } from "../Executor";
declare type ExecutorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Executor__factory extends ContractFactory {
    constructor(...args: ExecutorConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _erc20Proxy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Executor>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _erc20Proxy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Executor;
    connect(signer: Signer): Executor__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620026e8380380620026e88339810160408190526200003491620000af565b600080546001600160a01b038085166001600160a01b03199283161783556002805491851691909216811790915560405190917f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a991a25050620000e7565b80516001600160a01b0381168114620000aa57600080fd5b919050565b60008060408385031215620000c357600080fd5b620000ce8362000092565b9150620000de6020840162000092565b90509250929050565b6125f180620000f76000396000f3fe6080604052600436106100b55760003560e01c80637f555b0311610069578063a83cbaa31161004e578063a83cbaa31461021a578063e30c39781461022d578063f2fde38b1461025a57600080fd5b80637f555b031461019b5780638da5cb5b146101ed57600080fd5b80634f91bc2b1161009a5780634f91bc2b146101535780635004a4b7146101665780637200b8291461018657600080fd5b8063150b7a02146100c157806323452b9c1461013c57600080fd5b366100bc57005b600080fd5b3480156100cd57600080fd5b506101066100dc3660046120db565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b34801561014857600080fd5b5061015161027a565b005b6101516101613660046121c6565b610344565b34801561017257600080fd5b5061015161018136600461223a565b6103e5565b34801561019257600080fd5b506101516104a5565b3480156101a757600080fd5b506002546101c89073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610133565b3480156101f957600080fd5b506000546101c89073ffffffffffffffffffffffffffffffffffffffff1681565b610151610228366004612257565b61058b565b34801561023957600080fd5b506001546101c89073ffffffffffffffffffffffffffffffffffffffff1681565b34801561026657600080fd5b5061015161027536600461223a565b610626565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102cb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661031a576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103bf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181600001819055506103da868686868660006001610784565b600090555050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610436576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a990600090a250565b60015473ffffffffffffffffffffffffffffffffffffffff163381146104f7576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610606576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561061a8787878787876000610784565b60009055505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610677576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166106c4576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610713576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b600080808888610795600182612302565b8181106107a4576107a4612315565b90506020028101906107b69190612344565b6107c790608081019060600161223a565b905073ffffffffffffffffffffffffffffffffffffffff8116156107f5576107ee81610a5d565b915061080c565b346107ff82610a5d565b6108099190612302565b91505b73ffffffffffffffffffffffffffffffffffffffff87161561097f5761083187610a5d565b925083156108e2576040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff89169063dd62ed3e90604401602060405180830381865afa1580156108ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d09190612382565b90506108dc8882610b16565b50610996565b6002546040517f15dacbea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015233602483015230604483015260648201889052909116906315dacbea90608401600060405180830381600087803b15801561096257600080fd5b505af1158015610976573d6000803e3d6000fd5b50505050610996565b3461098988610a5d565b6109939190612302565b92505b6109a28a8a8a89610c96565b60006109ad88610a5d565b9050838111156109cb576109cb88886109c68785612302565b610fa8565b60006109d683610a5d565b9050838111156109ef576109ef83896109c68785612302565b6040805173ffffffffffffffffffffffffffffffffffffffff808c1682528a1660208201529081018290524260608201528c907fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a2505050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610b0e576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610ae5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b099190612382565b610b10565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff8216610b6f5780341015610b6b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610ba9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610c16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3a9190612382565b905081811015610c85576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610c9183333085610fd9565b505050565b8282828160018114610ebd576000610cae85856111f3565b905060008585610cbf600186612302565b818110610cce57610cce612315565b9050602002810190610ce09190612344565b610cf190608081019060600161223a565b9050600088815b81811015610dd25760025473ffffffffffffffffffffffffffffffffffffffff168c8c83818110610d2b57610d2b612315565b9050602002810190610d3d9190612344565b610d4b90602081019061223a565b73ffffffffffffffffffffffffffffffffffffffff1603610d98576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368c8c83818110610dab57610dab612315565b9050602002810190610dbd9190612344565b9050610dc98e826112ff565b50600101610cf8565b505060005b610de2600186612302565b811015610eb4576000888883818110610dfd57610dfd612315565b9050602002810190610e0f9190612344565b610e2090608081019060600161223a565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610eab57610e5e81610a5d565b9250848281518110610e7257610e72612315565b6020026020010151831115610eab57610eab8188878581518110610e9857610e98612315565b6020026020010151866109c69190612302565b50600101610dd7565b50505050610f9e565b8560005b81811015610f9b5760025473ffffffffffffffffffffffffffffffffffffffff16898983818110610ef457610ef4612315565b9050602002810190610f069190612344565b610f1490602081019061223a565b73ffffffffffffffffffffffffffffffffffffffff1603610f61576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b36898983818110610f7457610f74612315565b9050602002810190610f869190612344565b9050610f928b826112ff565b50600101610ec1565b50505b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610fcf57610c9183838361162f565b610c918282611764565b73ffffffffffffffffffffffffffffffffffffffff8416611026576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611073576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156110e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111089190612382565b90506111168286868661188e565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611186573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111aa9190612382565b6111b49190612302565b146111eb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60608160008167ffffffffffffffff8111156112115761121161239b565b60405190808252806020026020018201604052801561123a578160200160208202803683370190505b5090506000805b838110156112f45786868281811061125b5761125b612315565b905060200281019061126d9190612344565b61127e90608081019060600161223a565b915061128982610a5d565b83828151811061129b5761129b612315565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166112ec57348382815181106112d4576112d4612315565b602002602001018181516112e89190612302565b9052505b600101611241565b509095945050505050565b61131561130f602083018361223a565b3b151590565b61134b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361138b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006113ba6113a0606085016040860161223a565b73ffffffffffffffffffffffffffffffffffffffff161590565b6113c55760006113cb565b82608001355b905060006113e76113e2606086016040870161223a565b610a5d565b905060006113fe6113e2608087016060880161223a565b9050826000036114355761143561141b606087016040880161223a565b61142b604088016020890161223a565b876080013561196a565b8460800135821015611480576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610c7c565b600080611490602088018861223a565b73ffffffffffffffffffffffffffffffffffffffff16856114b460a08a018a6123ca565b6040516114c292919061242f565b60006040518083038185875af1925050503d80600081146114ff576040519150601f19603f3d011682016040523d82523d6000602084013e611504565b606091505b50915091508161154f57600061151982611aaf565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7c9190612463565b60006115646113e260808a0160608b0161223a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961159560208b018b61223a565b6115a560608c0160408d0161223a565b6115b560808d0160608e0161223a565b8c608001358987116115c757866115d1565b6115d18a88612302565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661167c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156116e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170d9190612382565b905080821115611753576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610c7c565b61175e848484611b2d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166117b1576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156117f4576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610c7c565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461184e576040519150601f19603f3d011682016040523d82523d6000602084013e611853565b606091505b5050905080610c91576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261175e9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b83565b73ffffffffffffffffffffffffffffffffffffffff831661198a57505050565b73ffffffffffffffffffffffffffffffffffffffff82166119d7576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611a4d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a719190612382565b90508181101561175e5761175e8484611aaa847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612302565b611c8f565b6060604482511015611af457505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611b106004808551611b089190612302565b859190611d8d565b905080806020019051810190611b2691906124b4565b9392505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610c919084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016118e8565b6000611be5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611ea79092919063ffffffff16565b805190915015610c915780806020019051810190611c039190612574565b610c91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610c7c565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611d06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d2a9190612382565b611d349190612596565b60405173ffffffffffffffffffffffffffffffffffffffff851660248201526044810182905290915061175e9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016118e8565b606081611d9b81601f612596565b1015611dd3576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611ddd8284612596565b84511015611e17576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611e365760405191506000825260208201604052611e9e565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611e6f578051835260209283019201611e57565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611eb68484600085611ebe565b949350505050565b606082471015611f50576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610c7c565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f7991906125a9565b60006040518083038185875af1925050503d8060008114611fb6576040519150601f19603f3d011682016040523d82523d6000602084013e611fbb565b606091505b5091509150611fcc87838387611fd7565b979650505050505050565b6060831561206d5782516000036120665773ffffffffffffffffffffffffffffffffffffffff85163b612066576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610c7c565b5081611eb6565b611eb683838151156120825781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7c9190612463565b73ffffffffffffffffffffffffffffffffffffffff811681146120d857600080fd5b50565b6000806000806000608086880312156120f357600080fd5b85356120fe816120b6565b9450602086013561210e816120b6565b935060408601359250606086013567ffffffffffffffff8082111561213257600080fd5b818801915088601f83011261214657600080fd5b81358181111561215557600080fd5b89602082850101111561216757600080fd5b9699959850939650602001949392505050565b60008083601f84011261218c57600080fd5b50813567ffffffffffffffff8111156121a457600080fd5b6020830191508360208260051b85010111156121bf57600080fd5b9250929050565b6000806000806000608086880312156121de57600080fd5b85359450602086013567ffffffffffffffff8111156121fc57600080fd5b6122088882890161217a565b909550935050604086013561221c816120b6565b9150606086013561222c816120b6565b809150509295509295909350565b60006020828403121561224c57600080fd5b8135611b26816120b6565b60008060008060008060a0878903121561227057600080fd5b86359550602087013567ffffffffffffffff81111561228e57600080fd5b61229a89828a0161217a565b90965094505060408701356122ae816120b6565b925060608701356122be816120b6565b80925050608087013590509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610b1057610b106122d3565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261237857600080fd5b9190910192915050565b60006020828403121561239457600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126123ff57600080fd5b83018035915067ffffffffffffffff82111561241a57600080fd5b6020019150368190038213156121bf57600080fd5b8183823760009101908152919050565b60005b8381101561245a578181015183820152602001612442565b50506000910152565b602081526000825180602084015261248281604085016020870161243f565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000602082840312156124c657600080fd5b815167ffffffffffffffff808211156124de57600080fd5b818401915084601f8301126124f257600080fd5b8151818111156125045761250461239b565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561254a5761254a61239b565b8160405282815287602084870101111561256357600080fd5b611fcc83602083016020880161243f565b60006020828403121561258657600080fd5b81518015158114611b2657600080fd5b80820180821115610b1057610b106122d3565b6000825161237881846020870161243f56fea2646970667358221220a37ea94ae4f0400dd13aede7053fb779b022542358cd1cd0b4df4e71a1be86ff64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_erc20Proxy";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExecutionFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "required";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCaller";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NewOwnerMustNotBeSelf";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoNullOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoPendingOwnershipTransfer";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapFromZeroBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTransferToNullAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotPendingOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAValidSpender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOverflow";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnAuthorized";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "proxy";
            readonly type: "address";
        }];
        readonly name: "ERC20ProxySet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiGenericSwapCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiSwappedGeneric";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferRecovered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "LiFiTransferStarted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferRequested";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "cancelOwnershipTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "confirmOwnershipTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "erc20Proxy";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20Proxy";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC721Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pendingOwner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_erc20Proxy";
            readonly type: "address";
        }];
        readonly name: "setERC20Proxy";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_transactionId";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "approveTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "fromAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bool";
                readonly name: "requiresDeposit";
                readonly type: "bool";
            }];
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly name: "_swapData";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "_transferredAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "_receiver";
            readonly type: "address";
        }];
        readonly name: "swapAndCompleteBridgeTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_transactionId";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "approveTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "fromAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bool";
                readonly name: "requiresDeposit";
                readonly type: "bool";
            }];
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly name: "_swapData";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "_transferredAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "swapAndExecute";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): ExecutorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Executor;
}
export {};
