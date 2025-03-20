import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GlacisFacet, GlacisFacetInterface } from "../GlacisFacet";
declare type GlacisFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GlacisFacet__factory extends ContractFactory {
    constructor(...args: GlacisFacetConstructorParams);
    deploy(_airlift: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GlacisFacet>;
    getDeployTransaction(_airlift: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GlacisFacet;
    connect(signer: Signer): GlacisFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620027f7380380620027f783398101604081905262000034916200006e565b6001600160a01b0381166200005c576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052620000a0565b6000602082840312156200008157600080fd5b81516001600160a01b03811681146200009957600080fd5b9392505050565b60805161272e620000c9600039600081816060015281816107b501526107e0015261272e6000f3fe6080604052600436106100345760003560e01c8063753cbab614610039578063bbbf77d51461004e578063e10c04c1146100ab575b600080fd5b61004c61004736600461224d565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b936600461229c565b610342565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447612348565b90508461016f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610221576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561029d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102c0816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102f7576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030989608001518a60c001516105cf565b610313898961074f565b50479250505081811115610336576103366000846103318585612348565b610932565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103bd576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103ce3447612348565b90508680610100015161040d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561044b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861046e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104a5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104e3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610520576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b89610543816080015173ffffffffffffffffffffffffffffffffffffffff161590565b1561057a576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105948b600001518c60c001518c8c338d60200135610963565b60c08c01526105a38b8961074f565b504792505050818111156105c1576105c16000846103318585612348565b505060009091555050505050565b80600003610609576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610662578034101561065e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156106cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f39190612382565b90508181101561073e576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61074a83333085610afe565b505050565b600061075e602083018361239b565b73ffffffffffffffffffffffffffffffffffffffff16036107ab576040517fe2fe272600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107de82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610d18565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166398242b3f826020013584608001518560c0015161084a8760a0015173ffffffffffffffffffffffffffffffffffffffff1690565b60e088015161085c602089018961239b565b60405160e088901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945260448401929092526064830152909116608482015260a4016000604051808303818588803b1580156108de57600080fd5b505af11580156108f2573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610926919061242b565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156109595761074a838383610e4f565b61074a8282610fd1565b60008380820361099f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600086866109ae600185612348565b8181106109bd576109bd61253e565b90506020028101906109cf919061256d565b6109e090608081019060600161239b565b905060006109ed826110fb565b905073ffffffffffffffffffffffffffffffffffffffff8216610a1757610a143482612348565b90505b6000610a2389896111b4565b9050610a2f89896112c0565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610a6a818b8b8561132d565b600083610a76866110fb565b610a809190612348565b905073ffffffffffffffffffffffffffffffffffffffff8516610aaa57610aa78882612348565b90505b8b811015610aee576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d905260248101829052604401610735565b9c9b505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610b4b576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b98576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610c09573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2d9190612382565b9050610c3b8286868661171e565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610cab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ccf9190612382565b610cd99190612348565b14610d10576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d3857505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d85576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610dfa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1e9190612382565b101561074a5761074a83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6117fa565b73ffffffffffffffffffffffffffffffffffffffff8316610e9c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ee9576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610f56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7a9190612382565b905080821115610fc0576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610735565b610fcb8484846118ea565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661101e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611061576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610735565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146110bb576040519150601f19603f3d011682016040523d82523d6000602084013e6110c0565b606091505b505090508061074a576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156111ac576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611183573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a79190612382565b6111ae565b475b92915050565b60608160008167ffffffffffffffff8111156111d2576111d2612007565b6040519080825280602002602001820160405280156111fb578160200160208202803683370190505b5090506000805b838110156112b55786868281811061121c5761121c61253e565b905060200281019061122e919061256d565b61123f90608081019060600161239b565b915061124a826110fb565b83828151811061125c5761125c61253e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166112ad57348382815181106112955761129561253e565b602002602001018181516112a99190612348565b9052505b600101611202565b509095945050505050565b60005b8181101561074a57368383838181106112de576112de61253e565b90506020028101906112f0919061256d565b905061130260e0820160c083016125ab565b156113245761132461131a606083016040840161239b565b82608001356105cf565b506001016112c3565b6020840151604085015184918491849083600181146116375760008686611355600185612348565b8181106113645761136461253e565b9050602002810190611376919061256d565b61138790608081019060600161239b565b9050600089815b8181101561153457368d8d838181106113a9576113a961253e565b90506020028101906113bb919061256d565b90506113ea6113d0606083016040840161239b565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061144d575061144d611403604083016020840161239b565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156114645750611464611403602083018361239b565b80156114e957506114e961147b60a08301836125c8565b61148a91600491600091612634565b6114939161265e565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61151f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e5161152b9082611940565b5060010161138e565b505060005b611544600185612348565b81101561162f57600089898381811061155f5761155f61253e565b9050602002810190611571919061256d565b61158290608081019060600161239b565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611626578682815181106115c9576115c961253e565b60200260200101516115da826110fb565b6115e49190612348565b9250600073ffffffffffffffffffffffffffffffffffffffff82161561160b57600061160d565b865b9050831561162457611624828a6103318488612348565b505b50600101611539565b505050611712565b8760005b8181101561170f57368b8b838181106116565761165661253e565b9050602002810190611668919061256d565b905061167d6113d0606083016040840161239b565b806116965750611696611403604083016020840161239b565b80156116ad57506116ad611403602083018361239b565b80156116c457506116c461147b60a08301836125c8565b6116fa576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516117069082611940565b5060010161163b565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610fcb9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c1e565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526118868482611d2d565b610fcb5760405173ffffffffffffffffffffffffffffffffffffffff84166024820152600060448201526118e09085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611778565b610fcb8482611c1e565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261074a9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611778565b611956611950602083018361239b565b3b151590565b61198c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036119cc576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006119e16113d0606085016040860161239b565b6119ec5760006119f2565b82608001355b90506000611a0e611a09606086016040870161239b565b6110fb565b90506000611a25611a09608087016060880161239b565b905082600003611a5c57611a5c611a42606087016040880161239b565b611a52604088016020890161239b565b8760800135610d18565b8460800135821015611aa7576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610735565b600080611ab7602088018861239b565b73ffffffffffffffffffffffffffffffffffffffff1685611adb60a08a018a6125c8565b604051611ae99291906126a6565b60006040518083038185875af1925050503d8060008114611b26576040519150601f19603f3d011682016040523d82523d6000602084013e611b2b565b606091505b509150915081611b3e57611b3e81611dee565b6000611b53611a0960808a0160608b0161239b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611b8460208b018b61239b565b611b9460608c0160408d0161239b565b611ba460808d0160608e0161239b565b8c60800135898711611bb65786611bc0565b611bc08a88612348565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611c80826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611df89092919063ffffffff16565b9050805160001480611ca1575080806020019051810190611ca191906126b6565b61074a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610735565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611d5791906126d3565b6000604051808303816000865af19150503d8060008114611d94576040519150601f19603f3d011682016040523d82523d6000602084013e611d99565b606091505b5091509150818015611dc3575080511580611dc3575080806020019051810190611dc391906126b6565b8015611de5575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611e078484600085611e0f565b949350505050565b606082471015611ea1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610735565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611eca91906126d3565b60006040518083038185875af1925050503d8060008114611f07576040519150601f19603f3d011682016040523d82523d6000602084013e611f0c565b606091505b5091509150611f1d87838387611f28565b979650505050505050565b60608315611fbe578251600003611fb75773ffffffffffffffffffffffffffffffffffffffff85163b611fb7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610735565b5081611e07565b611e078383815115611fd35781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073591906126e5565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561205a5761205a612007565b60405290565b600082601f83011261207157600080fd5b813567ffffffffffffffff8082111561208c5761208c612007565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156120d2576120d2612007565b816040528381528660208588010111156120eb57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461212f57600080fd5b919050565b801515811461214257600080fd5b50565b803561212f81612134565b6000610140828403121561216357600080fd5b61216b612036565b905081358152602082013567ffffffffffffffff8082111561218c57600080fd5b61219885838601612060565b602084015260408401359150808211156121b157600080fd5b506121be84828501612060565b6040830152506121d06060830161210b565b60608201526121e16080830161210b565b60808201526121f260a0830161210b565b60a082015260c082013560c082015260e082013560e0820152610100612219818401612145565b9082015261012061222b838201612145565b9082015292915050565b60006040828403121561224757600080fd5b50919050565b6000806060838503121561226057600080fd5b823567ffffffffffffffff81111561227757600080fd5b61228385828601612150565b9250506122938460208501612235565b90509250929050565b600080600080608085870312156122b257600080fd5b843567ffffffffffffffff808211156122ca57600080fd5b6122d688838901612150565b955060208701359150808211156122ec57600080fd5b818701915087601f83011261230057600080fd5b81358181111561230f57600080fd5b8860208260051b850101111561232457600080fd5b60208301955080945050505061233d8660408701612235565b905092959194509250565b818103818111156111ae577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561239457600080fd5b5051919050565b6000602082840312156123ad57600080fd5b6123b68261210b565b9392505050565b60005b838110156123d85781810151838201526020016123c0565b50506000910152565b600081518084526123f98160208601602086016123bd565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124546101608501836123e1565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261248f83826123e1565b92505060608501516124b9608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061252c8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126125a157600080fd5b9190910192915050565b6000602082840312156125bd57600080fd5b81356123b681612134565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125fd57600080fd5b83018035915067ffffffffffffffff82111561261857600080fd5b60200191503681900382131561262d57600080fd5b9250929050565b6000808585111561264457600080fd5b8386111561265157600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561269e5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156126c857600080fd5b81516123b681612134565b600082516125a18184602087016123bd565b6020815260006123b660208301846123e156fea26469706673582212209582d01a77669fa5656ce0d351c51645df5f5c36fac10298e4759ee0741191b464736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_airlift";
            readonly type: "address";
            readonly internalType: "contract IGlacisAirlift";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "AIRLIFT";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGlacisAirlift";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGlacis";
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
            readonly name: "_glacisData";
            readonly type: "tuple";
            readonly internalType: "struct GlacisFacet.GlacisData";
            readonly components: readonly [{
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGlacis";
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
            readonly name: "_glacisData";
            readonly type: "tuple";
            readonly internalType: "struct GlacisFacet.GlacisData";
            readonly components: readonly [{
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nativeFee";
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
        readonly name: "InvalidConfig";
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
        readonly name: "InvalidRefundAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetNotSupported";
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
    static createInterface(): GlacisFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GlacisFacet;
}
export {};
