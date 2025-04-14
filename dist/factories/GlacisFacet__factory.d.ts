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
    static readonly bytecode = "0x60a060405234801562000010575f80fd5b506040516200276a3803806200276a83398101604081905262000033916200006d565b6001600160a01b0381166200005b576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b03166080526200009c565b5f602082840312156200007e575f80fd5b81516001600160a01b038116811462000095575f80fd5b9392505050565b6080516126a8620000c25f395f8181605d015281816107a401526107cf01526126a85ff3fe608060405260043610610033575f3560e01c8063753cbab61461003757806382a3279b1461004c578063e10c04c1146100a8575b5f80fd5b61004a6100453660046121ee565b6100bb565b005b348015610057575f80fd5b5061007f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004a6100b636600461223a565b61033b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61014634476122de565b90508461016b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610298576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102bb816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102f2576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030489608001518a60c001516105c3565b61030e898961073f565b50479250505081811115610330576103305f8461032b85856122de565b61091e565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103c634476122de565b905086806101000151610405576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610443576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104668160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561049d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610517576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8961053a816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610571576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61058a8b5f01518c60c001518c8c338d6020013561094f565b60c08c01526105998b8961073f565b504792505050818111156105b6576105b65f8461032b85856122de565b50505f9091555050505050565b805f036105fc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106555780341015610651576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156106bf573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106e39190612316565b90508181101561072e576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61073a83333085610ae5565b505050565b5f61074d602083018361232d565b73ffffffffffffffffffffffffffffffffffffffff160361079a576040517fe2fe272600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107cd82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610cfa565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166398242b3f826020013584608001518560c001518660a0015173ffffffffffffffffffffffffffffffffffffffff165f1b8760e00151875f01602081019061084c919061232d565b60405160e088901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945260448401929092526064830152909116608482015260a4015f604051808303818588803b1580156108cc575f80fd5b505af11580156108de573d5f803e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161091291906123b8565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156109455761073a838383610e2f565b61073a8282610fae565b5f8380820361098a576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f86866109986001856122de565b8181106109a7576109a76124ca565b90506020028101906109b991906124f7565b6109ca90608081019060600161232d565b90505f6109d6826110d4565b905073ffffffffffffffffffffffffffffffffffffffff8216610a00576109fd34826122de565b90505b5f610a0b898961118a565b9050610a178989611294565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610a52818b8b85611300565b5f83610a5d866110d4565b610a6791906122de565b905073ffffffffffffffffffffffffffffffffffffffff8516610a9157610a8e88826122de565b90505b8b811015610ad5576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d905260248101829052604401610725565b9c9b505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610b32576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b7f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa158015610bed573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c119190612316565b9050610c1f828686866116e7565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610c8d573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cb19190612316565b610cbb91906122de565b14610cf2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d1a57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d67576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610dda573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610dfe9190612316565b101561073a5761073a83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6117c3565b73ffffffffffffffffffffffffffffffffffffffff8316610e7c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ec9576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610f33573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f579190612316565b905080821115610f9d576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610725565b610fa88484846118b2565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610ffb576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561103e576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610725565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114611094576040519150601f19603f3d011682016040523d82523d5f602084013e611099565b606091505b505090508061073a576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff821615611182576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611159573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061117d9190612316565b611184565b475b92915050565b6060815f8167ffffffffffffffff8111156111a7576111a7611fb6565b6040519080825280602002602001820160405280156111d0578160200160208202803683370190505b5090505f805b83811015611289578686828181106111f0576111f06124ca565b905060200281019061120291906124f7565b61121390608081019060600161232d565b915061121e826110d4565b838281518110611230576112306124ca565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166112815734838281518110611269576112696124ca565b6020026020010181815161127d91906122de565b9052505b6001016111d6565b509095945050505050565b5f5b8181101561073a57368383838181106112b1576112b16124ca565b90506020028101906112c391906124f7565b90506112d560e0820160c08301612533565b156112f7576112f76112ed606083016040840161232d565b82608001356105c3565b50600101611296565b602084015160408501518491849184908360018114611601575f86866113276001856122de565b818110611336576113366124ca565b905060200281019061134891906124f7565b61135990608081019060600161232d565b90505f89815b8181101561150257368d8d8381811061137a5761137a6124ca565b905060200281019061138c91906124f7565b90506113bb6113a1606083016040840161232d565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061141d575061141d6113d4604083016020840161232d565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561143457506114346113d4602083018361232d565b80156114b757506114b761144b60a083018361254e565b611459916004915f916125b6565b611462916125dd565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6114ed576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516114f99082611908565b5060010161135f565b50505f5b6115116001856122de565b8110156115f9575f89898381811061152b5761152b6124ca565b905060200281019061153d91906124f7565b61154e90608081019060600161232d565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146115f057868281518110611595576115956124ca565b60200260200101516115a6826110d4565b6115b091906122de565b92505f73ffffffffffffffffffffffffffffffffffffffff8216156115d5575f6115d7565b865b905083156115ee576115ee828a61032b84886122de565b505b50600101611506565b5050506116db565b875f5b818110156116d857368b8b8381811061161f5761161f6124ca565b905060200281019061163191906124f7565b90506116466113a1606083016040840161232d565b8061165f575061165f6113d4604083016020840161232d565b801561167657506116766113d4602083018361232d565b801561168d575061168d61144b60a083018361254e565b6116c3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516116cf9082611908565b50600101611604565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610fa89085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611bdb565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905261184f8482611ce8565b610fa85760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f60448201526118a89085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611741565b610fa88482611bdb565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261073a9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611741565b61191e611918602083018361232d565b3b151590565b611954576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611993576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6119a76113a1606085016040860161232d565b6119b1575f6119b7565b82608001355b90505f6119d26119cd606086016040870161232d565b6110d4565b90505f6119e86119cd608087016060880161232d565b9050825f03611a1e57611a1e611a04606087016040880161232d565b611a14604088016020890161232d565b8760800135610cfa565b8460800135821015611a69576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610725565b5f80611a78602088018861232d565b73ffffffffffffffffffffffffffffffffffffffff1685611a9c60a08a018a61254e565b604051611aaa929190612625565b5f6040518083038185875af1925050503d805f8114611ae4576040519150601f19603f3d011682016040523d82523d5f602084013e611ae9565b606091505b509150915081611afc57611afc81611da3565b5f611b106119cd60808a0160608b0161232d565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611b4160208b018b61232d565b611b5160608c0160408d0161232d565b611b6160808d0160608e0161232d565b8c60800135898711611b735786611b7d565b611b7d8a886122de565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b5f611c3c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611dad9092919063ffffffff16565b905080515f1480611c5c575080806020019051810190611c5c9190612634565b61073a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610725565b5f805f8473ffffffffffffffffffffffffffffffffffffffff1684604051611d10919061264f565b5f604051808303815f865af19150503d805f8114611d49576040519150601f19603f3d011682016040523d82523d5f602084013e611d4e565b606091505b5091509150818015611d78575080511580611d78575080806020019051810190611d789190612634565b8015611d9a575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611dbb84845f85611dc3565b949350505050565b606082471015611e55576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610725565b5f808673ffffffffffffffffffffffffffffffffffffffff168587604051611e7d919061264f565b5f6040518083038185875af1925050503d805f8114611eb7576040519150601f19603f3d011682016040523d82523d5f602084013e611ebc565b606091505b5091509150611ecd87838387611ed8565b979650505050505050565b60608315611f6d5782515f03611f665773ffffffffffffffffffffffffffffffffffffffff85163b611f66576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610725565b5081611dbb565b611dbb8383815115611f825781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107259190612660565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561200757612007611fb6565b60405290565b5f82601f83011261201c575f80fd5b813567ffffffffffffffff8082111561203757612037611fb6565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561207d5761207d611fb6565b81604052838152866020858801011115612095575f80fd5b836020870160208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120d7575f80fd5b919050565b80151581146120e9575f80fd5b50565b80356120d7816120dc565b5f6101408284031215612108575f80fd5b612110611fe3565b905081358152602082013567ffffffffffffffff80821115612130575f80fd5b61213c8583860161200d565b60208401526040840135915080821115612154575f80fd5b506121618482850161200d565b604083015250612173606083016120b4565b6060820152612184608083016120b4565b608082015261219560a083016120b4565b60a082015260c082013560c082015260e082013560e08201526101006121bc8184016120ec565b908201526101206121ce8382016120ec565b9082015292915050565b5f604082840312156121e8575f80fd5b50919050565b5f80606083850312156121ff575f80fd5b823567ffffffffffffffff811115612215575f80fd5b612221858286016120f7565b92505061223184602085016121d8565b90509250929050565b5f805f806080858703121561224d575f80fd5b843567ffffffffffffffff80821115612264575f80fd5b612270888389016120f7565b95506020870135915080821115612285575f80fd5b818701915087601f830112612298575f80fd5b8135818111156122a6575f80fd5b8860208260051b85010111156122ba575f80fd5b6020830195508094505050506122d386604087016121d8565b905092959194509250565b81810381811115611184577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215612326575f80fd5b5051919050565b5f6020828403121561233d575f80fd5b612346826120b4565b9392505050565b5f5b8381101561236757818101518382015260200161234f565b50505f910152565b5f815180845261238681602086016020860161234d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201525f60208301516101408060408501526123e061016085018361236f565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261241b838261236f565b9250506060850151612445608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206124b88187018315159052565b90950151151593019290925250919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612529575f80fd5b9190910192915050565b5f60208284031215612543575f80fd5b8135612346816120dc565b5f8083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612581575f80fd5b83018035915067ffffffffffffffff82111561259b575f80fd5b6020019150368190038213156125af575f80fd5b9250929050565b5f80858511156125c4575f80fd5b838611156125d0575f80fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561261d5780818660040360031b1b83161692505b505092915050565b818382375f9101908152919050565b5f60208284031215612644575f80fd5b8151612346816120dc565b5f825161252981846020870161234d565b602081525f612346602083018461236f56fea26469706673582212208ea6d0a0b7990907a05c7b14f3f06c180287cb16d234a1cdccf71123a6c645c064736f6c63430008160033";
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
