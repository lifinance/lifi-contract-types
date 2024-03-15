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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620028b0380380620028b0833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516128156200009b60003960008181610654015261067f01526128156000f3fe6080604052600436106100295760003560e01c80632541ec571461002e578063ad673d8814610043575b600080fd5b61004161003c3660046121fb565b610056565b005b61004161005136600461225f565b61027f565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761234d565b9050846101078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361017c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610235576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024788608001518960c001516104ac565b610251888861062c565b5047915050818111156102735761027360008461026e858561234d565b610784565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102fa576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061030b344761234d565b90508680610100015161034a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610388576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103ab8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610420576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104728a600001518b60c001518b8b336107b5565b60c08b01526104818a8861062c565b50479150508181111561049e5761049e60008461026e858561234d565b505060009091555050505050565b806000036104e6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053f578034101561053b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d09190612360565b90508181101561061b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610627833330856108f8565b505050565b608082015173ffffffffffffffffffffffffffffffffffffffff8116158061067d5761067d827f00000000000000000000000000000000000000000000000000000000000000008660c00151610b22565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166344bc937b826106c55760006106cb565b8560c001515b6106d86020870187612379565b608088015160c08901516106ef60208a018a612394565b8a604001356040518863ffffffff1660e01b815260040161071596959493929190612400565b6000604051808303818588803b15801561072e57600080fd5b505af1158015610742573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161077691906124f4565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8316156107ab57610627838383610c65565b6106278282610de7565b6000828082036107f1576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561080060018561234d565b81811061080f5761080f612607565b90506020028101906108219190612636565b610832906080810190606001612379565b9050600061083f82610f11565b905073ffffffffffffffffffffffffffffffffffffffff821661086957610866348261234d565b90505b60006108758888610fca565b905061088188886110d6565b61088e8a89898985611143565b60008261089a85610f11565b6108a4919061234d565b9050898110156108ea576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610612565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610945576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610992576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610a03573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a279190612360565b9050610a35828686866114f5565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015260009183918516906370a0823190602401602060405180830381865afa158015610aa6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aca9190612360565b610ad4919061234d565b905083610ae2826001612674565b11610b19576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b4257505050565b73ffffffffffffffffffffffffffffffffffffffff8216610b8f576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c289190612360565b101561062757610c3a838360006115d1565b61062783837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6115d1565b73ffffffffffffffffffffffffffffffffffffffff8316610cb2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610cff576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610d6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d909190612360565b905080821115610dd6576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610612565b610de1848484611753565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e34576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610e77576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610612565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610ed1576040519150601f19603f3d011682016040523d82523d6000602084013e610ed6565b606091505b5050905080610627576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615610fc2576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610f99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbd9190612360565b610fc4565b475b92915050565b60608160008167ffffffffffffffff811115610fe857610fe8611f75565b604051908082528060200260200182016040528015611011578160200160208202803683370190505b5090506000805b838110156110cb5786868281811061103257611032612607565b90506020028101906110449190612636565b611055906080810190606001612379565b915061106082610f11565b83828151811061107257611072612607565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110c357348382815181106110ab576110ab612607565b602002602001018181516110bf919061234d565b9052505b600101611018565b509095945050505050565b60005b8181101561062757368383838181106110f4576110f4612607565b90506020028101906111069190612636565b905061111860e0820160c08301612687565b1561113a5761113a6111306060830160408401612379565b82608001356104ac565b506001016110d9565b838383838260018114611410576000858561115f60018561234d565b81811061116e5761116e612607565b90506020028101906111809190612636565b611191906080810190606001612379565b9050600089815b8181101561133c57368d8d838181106111b3576111b3612607565b90506020028101906111c59190612636565b90506111f46111da6060830160408401612379565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611257575061125761120d6040830160208401612379565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561126e575061126e61120d6020830183612379565b80156112f357506112f361128560a0830183612394565b611294916004916000916126a4565b61129d916126ce565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611329576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113338f826117a9565b50600101611198565b505060005b61134c60018561234d565b81101561140857600088888381811061136757611367612607565b90506020028101906113799190612636565b61138a906080810190606001612379565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146113ff578582815181106113d1576113d1612607565b60200260200101516113e282610f11565b6113ec919061234d565b925082156113ff576113ff818885610784565b50600101611341565b5050506114e9565b8760005b818110156114e657368b8b8381811061142f5761142f612607565b90506020028101906114419190612636565b90506114566111da6060830160408401612379565b8061146f575061146f61120d6040830160208401612379565b8015611486575061148661120d6020830183612379565b801561149d575061149d61128560a0830183612394565b6114d3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114dd8d826117a9565b50600101611414565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610de19085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611abf565b80158061167157506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561164b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061166f9190612360565b155b6116fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610612565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106279084907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161154f565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106279084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161154f565b6117bf6117b96020830183612379565b3b151590565b6117f5576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611835576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061184a6111da6060850160408601612379565b61185557600061185b565b82608001355b905060006118776118726060860160408701612379565b610f11565b9050600061188e6118726080870160608801612379565b9050826000036118c5576118c56118ab6060870160408801612379565b6118bb6040880160208901612379565b8760800135610b22565b8460800135821015611910576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610612565b6000806119206020880188612379565b73ffffffffffffffffffffffffffffffffffffffff168561194460a08a018a612394565b604051611952929190612716565b60006040518083038185875af1925050503d806000811461198f576040519150601f19603f3d011682016040523d82523d6000602084013e611994565b606091505b5091509150816119df5760006119a982611bce565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106129190612726565b60006119f461187260808a0160608b01612379565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a2560208b018b612379565b611a3560608c0160408d01612379565b611a4560808d0160608e01612379565b8c60800135898711611a575786611a61565b611a618a8861234d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611b21826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c4c9092919063ffffffff16565b9050805160001480611b42575080806020019051810190611b429190612739565b610627576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610612565b6060604482511015611c1357505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611c2f6004808551611c27919061234d565b859190611c63565b905080806020019051810190611c459190612756565b9392505050565b6060611c5b8484600085611d7d565b949350505050565b606081611c7181601f612674565b1015611ca9576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611cb38284612674565b84511015611ced576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611d0c5760405191506000825260208201604052611d74565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611d45578051835260209283019201611d2d565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611e0f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610612565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e3891906127cd565b60006040518083038185875af1925050503d8060008114611e75576040519150601f19603f3d011682016040523d82523d6000602084013e611e7a565b606091505b5091509150611e8b87838387611e96565b979650505050505050565b60608315611f2c578251600003611f255773ffffffffffffffffffffffffffffffffffffffff85163b611f25576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610612565b5081611c5b565b611c5b8383815115611f415781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106129190612726565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611fc857611fc8611f75565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561201557612015611f75565b604052919050565b600067ffffffffffffffff82111561203757612037611f75565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261207457600080fd5b81356120876120828261201d565b611fce565b81815284602083860101111561209c57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120dd57600080fd5b919050565b80151581146120f057600080fd5b50565b80356120dd816120e2565b6000610140828403121561211157600080fd5b612119611fa4565b905081358152602082013567ffffffffffffffff8082111561213a57600080fd5b61214685838601612063565b6020840152604084013591508082111561215f57600080fd5b5061216c84828501612063565b60408301525061217e606083016120b9565b606082015261218f608083016120b9565b60808201526121a060a083016120b9565b60a082015260c082013560c082015260e082013560e08201526101006121c78184016120f3565b908201526101206121d98382016120f3565b9082015292915050565b6000606082840312156121f557600080fd5b50919050565b6000806040838503121561220e57600080fd5b823567ffffffffffffffff8082111561222657600080fd5b612232868387016120fe565b9350602085013591508082111561224857600080fd5b50612255858286016121e3565b9150509250929050565b6000806000806060858703121561227557600080fd5b843567ffffffffffffffff8082111561228d57600080fd5b612299888389016120fe565b955060208701359150808211156122af57600080fd5b818701915087601f8301126122c357600080fd5b8135818111156122d257600080fd5b8860208260051b85010111156122e757600080fd5b60208301955080945050604087013591508082111561230557600080fd5b50612312878288016121e3565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610fc457610fc461231e565b60006020828403121561237257600080fd5b5051919050565b60006020828403121561238b57600080fd5b611c45826120b9565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126123c957600080fd5b83018035915067ffffffffffffffff8211156123e457600080fd5b6020019150368190038213156123f957600080fd5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015260a060608301528360a0830152838560c0840137600060c0858401015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601168301019050826080830152979650505050505050565b60005b838110156124a1578181015183820152602001612489565b50506000910152565b600081518084526124c2816020860160208601612486565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261251d6101608501836124aa565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261255883826124aa565b9250506060850151612582608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125f58187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261266a57600080fd5b9190910192915050565b80820180821115610fc457610fc461231e565b60006020828403121561269957600080fd5b8135611c45816120e2565b600080858511156126b457600080fd5b838611156126c157600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561270e5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611c4560208301846124aa565b60006020828403121561274b57600080fd5b8151611c45816120e2565b60006020828403121561276857600080fd5b815167ffffffffffffffff81111561277f57600080fd5b8201601f8101841361279057600080fd5b805161279e6120828261201d565b8181528560208385010111156127b357600080fd5b6127c4826020830160208601612486565b95945050505050565b6000825161266a81846020870161248656fea26469706673582212209460be27505610710839a3b567c8c644c82910f8580726588fa04e006ffd62a964736f6c63430008110033";
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
    static createInterface(): ThorSwapFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ThorSwapFacet;
}
export {};
