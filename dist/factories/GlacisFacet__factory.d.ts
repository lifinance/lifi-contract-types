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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620027fa380380620027fa83398101604081905262000034916200006e565b6001600160a01b0381166200005c576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052620000a0565b6000602082840312156200008157600080fd5b81516001600160a01b03811681146200009957600080fd5b9392505050565b608051612731620000c9600039600081816060015281816107b501526107e001526127316000f3fe6080604052600436106100345760003560e01c8063753cbab61461003957806382a3279b1461004e578063e10c04c1146100ab575b600080fd5b61004c610047366004612250565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b936600461229f565b610342565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a344761234b565b90508461016f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610221576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561029d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102c0816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102f7576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030989608001518a60c001516105cf565b610313898961074f565b5047925050508181111561033657610336600084610331858561234b565b610935565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103bd576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103ce344761234b565b90508680610100015161040d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561044b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861046e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104a5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104e3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610520576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b89610543816080015173ffffffffffffffffffffffffffffffffffffffff161590565b1561057a576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105948b600001518c60c001518c8c338d60200135610966565b60c08c01526105a38b8961074f565b504792505050818111156105c1576105c1600084610331858561234b565b505060009091555050505050565b80600003610609576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610662578034101561065e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156106cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f39190612385565b90508181101561073e576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61074a83333085610b01565b505050565b600061075e602083018361239e565b73ffffffffffffffffffffffffffffffffffffffff16036107ab576040517fe2fe272600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107de82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610d1b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166398242b3f826020013584608001518560c001518660a0015173ffffffffffffffffffffffffffffffffffffffff1660001b8760e0015187600001602081019061085f919061239e565b60405160e088901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945260448401929092526064830152909116608482015260a4016000604051808303818588803b1580156108e157600080fd5b505af11580156108f5573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610929919061242e565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561095c5761074a838383610e52565b61074a8282610fd4565b6000838082036109a2576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600086866109b160018561234b565b8181106109c0576109c0612541565b90506020028101906109d29190612570565b6109e390608081019060600161239e565b905060006109f0826110fe565b905073ffffffffffffffffffffffffffffffffffffffff8216610a1a57610a17348261234b565b90505b6000610a2689896111b7565b9050610a3289896112c3565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610a6d818b8b85611330565b600083610a79866110fe565b610a83919061234b565b905073ffffffffffffffffffffffffffffffffffffffff8516610aad57610aaa888261234b565b90505b8b811015610af1576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d905260248101829052604401610735565b9c9b505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610b4e576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b9b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610c0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c309190612385565b9050610c3e82868686611721565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610cae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd29190612385565b610cdc919061234b565b14610d13576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d3b57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d88576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610dfd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e219190612385565b101561074a5761074a83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6117fd565b73ffffffffffffffffffffffffffffffffffffffff8316610e9f576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610eec576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610f59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7d9190612385565b905080821115610fc3576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610735565b610fce8484846118ed565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611021576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611064576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610735565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146110be576040519150601f19603f3d011682016040523d82523d6000602084013e6110c3565b606091505b505090508061074a576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156111af576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611186573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111aa9190612385565b6111b1565b475b92915050565b60608160008167ffffffffffffffff8111156111d5576111d561200a565b6040519080825280602002602001820160405280156111fe578160200160208202803683370190505b5090506000805b838110156112b85786868281811061121f5761121f612541565b90506020028101906112319190612570565b61124290608081019060600161239e565b915061124d826110fe565b83828151811061125f5761125f612541565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166112b0573483828151811061129857611298612541565b602002602001018181516112ac919061234b565b9052505b600101611205565b509095945050505050565b60005b8181101561074a57368383838181106112e1576112e1612541565b90506020028101906112f39190612570565b905061130560e0820160c083016125ae565b156113275761132761131d606083016040840161239e565b82608001356105cf565b506001016112c6565b60208401516040850151849184918490836001811461163a576000868661135860018561234b565b81811061136757611367612541565b90506020028101906113799190612570565b61138a90608081019060600161239e565b9050600089815b8181101561153757368d8d838181106113ac576113ac612541565b90506020028101906113be9190612570565b90506113ed6113d3606083016040840161239e565b73ffffffffffffffffffffffffffffffffffffffff161590565b806114505750611450611406604083016020840161239e565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156114675750611467611406602083018361239e565b80156114ec57506114ec61147e60a08301836125cb565b61148d91600491600091612637565b61149691612661565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611522576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e5161152e9082611943565b50600101611391565b505060005b61154760018561234b565b81101561163257600089898381811061156257611562612541565b90506020028101906115749190612570565b61158590608081019060600161239e565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611629578682815181106115cc576115cc612541565b60200260200101516115dd826110fe565b6115e7919061234b565b9250600073ffffffffffffffffffffffffffffffffffffffff82161561160e576000611610565b865b9050831561162757611627828a610331848861234b565b505b5060010161153c565b505050611715565b8760005b8181101561171257368b8b8381811061165957611659612541565b905060200281019061166b9190612570565b90506116806113d3606083016040840161239e565b806116995750611699611406604083016020840161239e565b80156116b057506116b0611406602083018361239e565b80156116c757506116c761147e60a08301836125cb565b6116fd576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516117099082611943565b5060010161163e565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610fce9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c21565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526118898482611d30565b610fce5760405173ffffffffffffffffffffffffffffffffffffffff84166024820152600060448201526118e39085907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161177b565b610fce8482611c21565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261074a9084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161177b565b611959611953602083018361239e565b3b151590565b61198f576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036119cf576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006119e46113d3606085016040860161239e565b6119ef5760006119f5565b82608001355b90506000611a11611a0c606086016040870161239e565b6110fe565b90506000611a28611a0c608087016060880161239e565b905082600003611a5f57611a5f611a45606087016040880161239e565b611a55604088016020890161239e565b8760800135610d1b565b8460800135821015611aaa576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610735565b600080611aba602088018861239e565b73ffffffffffffffffffffffffffffffffffffffff1685611ade60a08a018a6125cb565b604051611aec9291906126a9565b60006040518083038185875af1925050503d8060008114611b29576040519150601f19603f3d011682016040523d82523d6000602084013e611b2e565b606091505b509150915081611b4157611b4181611df1565b6000611b56611a0c60808a0160608b0161239e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611b8760208b018b61239e565b611b9760608c0160408d0161239e565b611ba760808d0160608e0161239e565b8c60800135898711611bb95786611bc3565b611bc38a8861234b565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611c83826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611dfb9092919063ffffffff16565b9050805160001480611ca4575080806020019051810190611ca491906126b9565b61074a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610735565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611d5a91906126d6565b6000604051808303816000865af19150503d8060008114611d97576040519150601f19603f3d011682016040523d82523d6000602084013e611d9c565b606091505b5091509150818015611dc6575080511580611dc6575080806020019051810190611dc691906126b9565b8015611de8575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611e0a8484600085611e12565b949350505050565b606082471015611ea4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610735565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ecd91906126d6565b60006040518083038185875af1925050503d8060008114611f0a576040519150601f19603f3d011682016040523d82523d6000602084013e611f0f565b606091505b5091509150611f2087838387611f2b565b979650505050505050565b60608315611fc1578251600003611fba5773ffffffffffffffffffffffffffffffffffffffff85163b611fba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610735565b5081611e0a565b611e0a8383815115611fd65781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073591906126e8565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561205d5761205d61200a565b60405290565b600082601f83011261207457600080fd5b813567ffffffffffffffff8082111561208f5761208f61200a565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156120d5576120d561200a565b816040528381528660208588010111156120ee57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461213257600080fd5b919050565b801515811461214557600080fd5b50565b803561213281612137565b6000610140828403121561216657600080fd5b61216e612039565b905081358152602082013567ffffffffffffffff8082111561218f57600080fd5b61219b85838601612063565b602084015260408401359150808211156121b457600080fd5b506121c184828501612063565b6040830152506121d36060830161210e565b60608201526121e46080830161210e565b60808201526121f560a0830161210e565b60a082015260c082013560c082015260e082013560e082015261010061221c818401612148565b9082015261012061222e838201612148565b9082015292915050565b60006040828403121561224a57600080fd5b50919050565b6000806060838503121561226357600080fd5b823567ffffffffffffffff81111561227a57600080fd5b61228685828601612153565b9250506122968460208501612238565b90509250929050565b600080600080608085870312156122b557600080fd5b843567ffffffffffffffff808211156122cd57600080fd5b6122d988838901612153565b955060208701359150808211156122ef57600080fd5b818701915087601f83011261230357600080fd5b81358181111561231257600080fd5b8860208260051b850101111561232757600080fd5b6020830195508094505050506123408660408701612238565b905092959194509250565b818103818111156111b1577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561239757600080fd5b5051919050565b6000602082840312156123b057600080fd5b6123b98261210e565b9392505050565b60005b838110156123db5781810151838201526020016123c3565b50506000910152565b600081518084526123fc8160208601602086016123c0565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124576101608501836123e4565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261249283826123e4565b92505060608501516124bc608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061252f8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126125a457600080fd5b9190910192915050565b6000602082840312156125c057600080fd5b81356123b981612137565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261260057600080fd5b83018035915067ffffffffffffffff82111561261b57600080fd5b60200191503681900382131561263057600080fd5b9250929050565b6000808585111561264757600080fd5b8386111561265457600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126a15780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156126cb57600080fd5b81516123b981612137565b600082516125a48184602087016123c0565b6020815260006123b960208301846123e456fea264697066735822122051abc99e9dc13339d843ad34e0a33523cec5fa4c5e01ccb32d944d80f1d9ed6f64736f6c63430008110033";
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
        readonly name: "airlift";
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
