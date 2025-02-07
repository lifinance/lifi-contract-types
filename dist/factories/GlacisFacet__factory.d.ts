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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620026c0380380620026c0833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b60805161261f620000a1600039600081816060015281816106a301526106ce015261261f6000f3fe6080604052600436106100345760003560e01c8063753cbab61461003957806382a3279b1461004e578063e10c04c1146100ab575b600080fd5b61004c61004736600461213e565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b936600461218d565b6102e7565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447612239565b90508461016f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610221576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561029d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102af88608001518960c00151610519565b6102b98888610699565b5047915050818111156102db576102db6000846102d68585612239565b610823565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610362576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103733447612239565b9050868061010001516103b2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103f0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104138160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561044a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610488576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104c5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104df8a600001518b60c001518b8b338c60200135610854565b60c08b01526104ee8a88610699565b50479150508181111561050b5761050b6000846102d68585612239565b505060009091555050505050565b80600003610553576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105ac57803410156105a8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610619573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063d9190612273565b905081811015610688576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610694833330856109ef565b505050565b6106cc82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610c09565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166398242b3f826020013584608001518560c001518660a0015173ffffffffffffffffffffffffffffffffffffffff1660001b8760e0015187600001602081019061074d919061228c565b60405160e088901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945260448401929092526064830152909116608482015260a4016000604051808303818588803b1580156107cf57600080fd5b505af11580156107e3573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610817919061231c565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561084a57610694838383610d40565b6106948282610ec2565b600083808203610890576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000868661089f600185612239565b8181106108ae576108ae61242f565b90506020028101906108c0919061245e565b6108d190608081019060600161228c565b905060006108de82610fec565b905073ffffffffffffffffffffffffffffffffffffffff8216610908576109053482612239565b90505b600061091489896110a5565b905061092089896111b1565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff8916602082015290810187905261095b818b8b8561121e565b60008361096786610fec565b6109719190612239565b905073ffffffffffffffffffffffffffffffffffffffff851661099b576109988882612239565b90505b8b8110156109df576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440161067f565b9c9b505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610a3c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a89576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610afa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1e9190612273565b9050610b2c8286868661160f565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc09190612273565b610bca9190612239565b14610c01576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c2957505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c76576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610ceb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0f9190612273565b10156106945761069483837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116eb565b73ffffffffffffffffffffffffffffffffffffffff8316610d8d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610dda576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610e47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6b9190612273565b905080821115610eb1576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161067f565b610ebc8484846117db565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f0f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610f52576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161067f565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610fac576040519150601f19603f3d011682016040523d82523d6000602084013e610fb1565b606091505b5050905080610694576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82161561109d576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611074573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110989190612273565b61109f565b475b92915050565b60608160008167ffffffffffffffff8111156110c3576110c3611ef8565b6040519080825280602002602001820160405280156110ec578160200160208202803683370190505b5090506000805b838110156111a65786868281811061110d5761110d61242f565b905060200281019061111f919061245e565b61113090608081019060600161228c565b915061113b82610fec565b83828151811061114d5761114d61242f565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661119e57348382815181106111865761118661242f565b6020026020010181815161119a9190612239565b9052505b6001016110f3565b509095945050505050565b60005b8181101561069457368383838181106111cf576111cf61242f565b90506020028101906111e1919061245e565b90506111f360e0820160c0830161249c565b156112155761121561120b606083016040840161228c565b8260800135610519565b506001016111b4565b6020840151604085015184918491849083600181146115285760008686611246600185612239565b8181106112555761125561242f565b9050602002810190611267919061245e565b61127890608081019060600161228c565b9050600089815b8181101561142557368d8d8381811061129a5761129a61242f565b90506020028101906112ac919061245e565b90506112db6112c1606083016040840161228c565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061133e575061133e6112f4604083016020840161228c565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561135557506113556112f4602083018361228c565b80156113da57506113da61136c60a08301836124b9565b61137b91600491600091612525565b6113849161254f565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611410576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e5161141c9082611831565b5060010161127f565b505060005b611435600185612239565b8110156115205760008989838181106114505761145061242f565b9050602002810190611462919061245e565b61147390608081019060600161228c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611517578682815181106114ba576114ba61242f565b60200260200101516114cb82610fec565b6114d59190612239565b9250600073ffffffffffffffffffffffffffffffffffffffff8216156114fc5760006114fe565b865b9050831561151557611515828a6102d68488612239565b505b5060010161142a565b505050611603565b8760005b8181101561160057368b8b838181106115475761154761242f565b9050602002810190611559919061245e565b905061156e6112c1606083016040840161228c565b8061158757506115876112f4604083016020840161228c565b801561159e575061159e6112f4602083018361228c565b80156115b557506115b561136c60a08301836124b9565b6115eb576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516115f79082611831565b5060010161152c565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ebc9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b0f565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526117778482611c1e565b610ebc5760405173ffffffffffffffffffffffffffffffffffffffff84166024820152600060448201526117d19085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611669565b610ebc8482611b0f565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106949084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611669565b611847611841602083018361228c565b3b151590565b61187d576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036118bd576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118d26112c1606085016040860161228c565b6118dd5760006118e3565b82608001355b905060006118ff6118fa606086016040870161228c565b610fec565b905060006119166118fa608087016060880161228c565b90508260000361194d5761194d611933606087016040880161228c565b611943604088016020890161228c565b8760800135610c09565b8460800135821015611998576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161067f565b6000806119a8602088018861228c565b73ffffffffffffffffffffffffffffffffffffffff16856119cc60a08a018a6124b9565b6040516119da929190612597565b60006040518083038185875af1925050503d8060008114611a17576040519150601f19603f3d011682016040523d82523d6000602084013e611a1c565b606091505b509150915081611a2f57611a2f81611cdf565b6000611a446118fa60808a0160608b0161228c565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a7560208b018b61228c565b611a8560608c0160408d0161228c565b611a9560808d0160608e0161228c565b8c60800135898711611aa75786611ab1565b611ab18a88612239565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611b71826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611ce99092919063ffffffff16565b9050805160001480611b92575080806020019051810190611b9291906125a7565b610694576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161067f565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611c4891906125c4565b6000604051808303816000865af19150503d8060008114611c85576040519150601f19603f3d011682016040523d82523d6000602084013e611c8a565b606091505b5091509150818015611cb4575080511580611cb4575080806020019051810190611cb491906125a7565b8015611cd6575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611cf88484600085611d00565b949350505050565b606082471015611d92576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161067f565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611dbb91906125c4565b60006040518083038185875af1925050503d8060008114611df8576040519150601f19603f3d011682016040523d82523d6000602084013e611dfd565b606091505b5091509150611e0e87838387611e19565b979650505050505050565b60608315611eaf578251600003611ea85773ffffffffffffffffffffffffffffffffffffffff85163b611ea8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161067f565b5081611cf8565b611cf88383815115611ec45781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067f91906125d6565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f4b57611f4b611ef8565b60405290565b600082601f830112611f6257600080fd5b813567ffffffffffffffff80821115611f7d57611f7d611ef8565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611fc357611fc3611ef8565b81604052838152866020858801011115611fdc57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461202057600080fd5b919050565b801515811461203357600080fd5b50565b803561202081612025565b6000610140828403121561205457600080fd5b61205c611f27565b905081358152602082013567ffffffffffffffff8082111561207d57600080fd5b61208985838601611f51565b602084015260408401359150808211156120a257600080fd5b506120af84828501611f51565b6040830152506120c160608301611ffc565b60608201526120d260808301611ffc565b60808201526120e360a08301611ffc565b60a082015260c082013560c082015260e082013560e082015261010061210a818401612036565b9082015261012061211c838201612036565b9082015292915050565b60006040828403121561213857600080fd5b50919050565b6000806060838503121561215157600080fd5b823567ffffffffffffffff81111561216857600080fd5b61217485828601612041565b9250506121848460208501612126565b90509250929050565b600080600080608085870312156121a357600080fd5b843567ffffffffffffffff808211156121bb57600080fd5b6121c788838901612041565b955060208701359150808211156121dd57600080fd5b818701915087601f8301126121f157600080fd5b81358181111561220057600080fd5b8860208260051b850101111561221557600080fd5b60208301955080945050505061222e8660408701612126565b905092959194509250565b8181038181111561109f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561228557600080fd5b5051919050565b60006020828403121561229e57600080fd5b6122a782611ffc565b9392505050565b60005b838110156122c95781810151838201526020016122b1565b50506000910152565b600081518084526122ea8160208601602086016122ae565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526123456101608501836122d2565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261238083826122d2565b92505060608501516123aa608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061241d8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261249257600080fd5b9190910192915050565b6000602082840312156124ae57600080fd5b81356122a781612025565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126124ee57600080fd5b83018035915067ffffffffffffffff82111561250957600080fd5b60200191503681900382131561251e57600080fd5b9250929050565b6000808585111561253557600080fd5b8386111561254257600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561258f5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156125b957600080fd5b81516122a781612025565b600082516124928184602087016122ae565b6020815260006122a760208301846122d256fea2646970667358221220d853ac0edef246185febcea41e3daf2d2e36a83deb6a05c14e3212a57f0f72ee64736f6c63430008110033";
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
    static createInterface(): GlacisFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GlacisFacet;
}
export {};
