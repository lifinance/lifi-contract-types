import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GravityFacet, GravityFacetInterface } from "../GravityFacet";
declare type GravityFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GravityFacet__factory extends ContractFactory {
    constructor(...args: GravityFacetConstructorParams);
    deploy(_router: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GravityFacet>;
    getDeployTransaction(_router: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GravityFacet;
    connect(signer: Signer): GravityFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200291d3803806200291d833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516128826200009b60003960008181610717015261078901526128826000f3fe6080604052600436106100295760003560e01c806331191ec31461002e578063eca3735c14610043575b600080fd5b61004161003c366004612227565b610056565b005b61004161005136600461228b565b6102ed565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612379565b90508480610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87610258816080015173ffffffffffffffffffffffffffffffffffffffff161590565b1561028f576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102a189608001518a60c0015161058d565b6102ab898961070d565b5047925060009150508282116102c25760006102cc565b6102cc8383612379565b905080156102e0576102e06000858361082e565b5050600090925550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610368576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103793447612379565b9050868061010001516103b8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103f6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104198160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610450576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361048e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104cb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b896104ee816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610525576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61053a8b600001518c60c001518c8c3361085f565b60c08c01526105498b8961070d565b50479250600091505082821161056057600061056a565b61056a8383612379565b9050801561057e5761057e6000858361082e565b50506000909255505050505050565b73ffffffffffffffffffffffffffffffffffffffff82166105e657803410156105e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610620576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561068d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b1919061238c565b9050818110156106fc576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610708833330856109a2565b505050565b61074082608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610bbc565b6080820151815160c08401516040517f0f21235700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001693630f212357936107c1939192909190600401612413565b600060405180830381600087803b1580156107db57600080fd5b505af11580156107ef573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108229190612452565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561085557610708838383610d07565b6107088282610e36565b60008280820361089b576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856108aa600185612379565b8181106108b9576108b9612565565b90506020028101906108cb9190612594565b6108dc9060808101906060016125d2565b905060006108e982610f60565b905073ffffffffffffffffffffffffffffffffffffffff8216610913576109103482612379565b90505b600061091f8888611019565b905061092b8888611125565b6109388a89898985611186565b60008261094485610f60565b61094e9190612379565b905089811015610994576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044016106f3565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166109ef576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a3c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610aad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad1919061238c565b9050610adf82868686611538565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b73919061238c565b610b7d9190612379565b14610bb4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610bdc57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c29576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610c9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc3919061238c565b905081811015610d0157610d018484610cfc847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612379565b611614565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d54576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610dc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de5919061238c565b905080821115610e2b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106f3565b610d01848484611712565b73ffffffffffffffffffffffffffffffffffffffff8216610e83576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610ec6576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016106f3565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f20576040519150601f19603f3d011682016040523d82523d6000602084013e610f25565b606091505b5050905080610708576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611011576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610fe8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100c919061238c565b611013565b475b92915050565b60608160008167ffffffffffffffff81111561103757611037611f31565b604051908082528060200260200182016040528015611060578160200160208202803683370190505b5090506000805b8381101561111a5786868281811061108157611081612565565b90506020028101906110939190612594565b6110a49060808101906060016125d2565b91506110af82610f60565b8382815181106110c1576110c1612565565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661111257348382815181106110fa576110fa612565565b6020026020010181815161110e9190612379565b9052505b600101611067565b509095945050505050565b60005b8181101561070857600083838381811061114457611144612565565b90506020028101906111569190612594565b61115f906125ed565b90508060c001511561117d5761117d8160400151826080015161058d565b50600101611128565b83838383826001811461145357600085856111a2600185612379565b8181106111b1576111b1612565565b90506020028101906111c39190612594565b6111d49060808101906060016125d2565b9050600089815b8181101561137f57368d8d838181106111f6576111f6612565565b90506020028101906112089190612594565b905061123761121d60608301604084016125d2565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061129a575061129a61125060408301602084016125d2565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112b157506112b161125060208301836125d2565b801561133657506113366112c860a0830183612692565b6112d7916004916000916126fe565b6112e091612728565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61136c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113768f82611768565b506001016111db565b505060005b61138f600185612379565b81101561144b5760008888838181106113aa576113aa612565565b90506020028101906113bc9190612594565b6113cd9060808101906060016125d2565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114425785828151811061141457611414612565565b602002602001015161142582610f60565b61142f9190612379565b925082156114425761144281888561082e565b50600101611384565b50505061152c565b8760005b8181101561152957368b8b8381811061147257611472612565565b90506020028101906114849190612594565b905061149961121d60608301604084016125d2565b806114b257506114b261125060408301602084016125d2565b80156114c957506114c961125060208301836125d2565b80156114e057506114e06112c860a0830183612692565b611516576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115208d82611768565b50600101611457565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610d019085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611a7e565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa15801561168b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116af919061238c565b6116b99190612770565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610d019085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611592565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107089084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611592565b61177e61177860208301836125d2565b3b151590565b6117b4576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036117f4576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061180961121d60608501604086016125d2565b61181457600061181a565b82608001355b9050600061183661183160608601604087016125d2565b610f60565b9050600061184d61183160808701606088016125d2565b9050826000036118845761188461186a60608701604088016125d2565b61187a60408801602089016125d2565b8760800135610bbc565b84608001358210156118cf576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016106f3565b6000806118df60208801886125d2565b73ffffffffffffffffffffffffffffffffffffffff168561190360a08a018a612692565b604051611911929190612783565b60006040518083038185875af1925050503d806000811461194e576040519150601f19603f3d011682016040523d82523d6000602084013e611953565b606091505b50915091508161199e57600061196882611b8a565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f39190612793565b60006119b361183160808a0160608b016125d2565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896119e460208b018b6125d2565b6119f460608c0160408d016125d2565b611a0460808d0160608e016125d2565b8c60800135898711611a165786611a20565b611a208a88612379565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611ae0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c089092919063ffffffff16565b8051909150156107085780806020019051810190611afe91906127a6565b610708576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106f3565b6060604482511015611bcf57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611beb6004808551611be39190612379565b859190611c1f565b905080806020019051810190611c0191906127c3565b9392505050565b6060611c178484600085611d39565b949350505050565b606081611c2d81601f612770565b1015611c65576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611c6f8284612770565b84511015611ca9576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611cc85760405191506000825260208201604052611d30565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611d01578051835260209283019201611ce9565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611dcb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106f3565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611df4919061283a565b60006040518083038185875af1925050503d8060008114611e31576040519150601f19603f3d011682016040523d82523d6000602084013e611e36565b606091505b5091509150611e4787838387611e52565b979650505050505050565b60608315611ee8578251600003611ee15773ffffffffffffffffffffffffffffffffffffffff85163b611ee1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106f3565b5081611c17565b611c178383815115611efd5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f39190612793565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f8457611f84611f31565b60405290565b60405160e0810167ffffffffffffffff81118282101715611f8457611f84611f31565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611ff457611ff4611f31565b604052919050565b600067ffffffffffffffff82111561201657612016611f31565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261205357600080fd5b813561206661206182611ffc565b611fad565b81815284602083860101111561207b57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120bc57600080fd5b919050565b80151581146120cf57600080fd5b50565b80356120bc816120c1565b600061014082840312156120f057600080fd5b6120f8611f60565b905081358152602082013567ffffffffffffffff8082111561211957600080fd5b61212585838601612042565b6020840152604084013591508082111561213e57600080fd5b5061214b84828501612042565b60408301525061215d60608301612098565b606082015261216e60808301612098565b608082015261217f60a08301612098565b60a082015260c082013560c082015260e082013560e08201526101006121a68184016120d2565b908201526101206121b88382016120d2565b9082015292915050565b6000602082840312156121d457600080fd5b6040516020810167ffffffffffffffff82821081831117156121f8576121f8611f31565b81604052829350843591508082111561221057600080fd5b5061221d85828601612042565b8252505092915050565b6000806040838503121561223a57600080fd5b823567ffffffffffffffff8082111561225257600080fd5b61225e868387016120dd565b9350602085013591508082111561227457600080fd5b50612281858286016121c2565b9150509250929050565b600080600080606085870312156122a157600080fd5b843567ffffffffffffffff808211156122b957600080fd5b6122c5888389016120dd565b955060208701359150808211156122db57600080fd5b818701915087601f8301126122ef57600080fd5b8135818111156122fe57600080fd5b8860208260051b850101111561231357600080fd5b60208301955080945050604087013591508082111561233157600080fd5b5061233e878288016121c2565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156110135761101361234a565b60006020828403121561239e57600080fd5b5051919050565b60005b838110156123c05781810151838201526020016123a8565b50506000910152565b600081518084526123e18160208601602086016123a5565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff8416815260606020820152600061244260608301856123c9565b9050826040830152949350505050565b60208152815160208201526000602083015161014080604085015261247b6101608501836123c9565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526124b683826123c9565b92505060608501516124e0608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125538187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126125c857600080fd5b9190910192915050565b6000602082840312156125e457600080fd5b611c0182612098565b600060e082360312156125ff57600080fd5b612607611f8a565b61261083612098565b815261261e60208401612098565b602082015261262f60408401612098565b604082015261264060608401612098565b60608201526080830135608082015260a083013567ffffffffffffffff81111561266957600080fd5b61267536828601612042565b60a08301525061268760c084016120d2565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126126c757600080fd5b83018035915067ffffffffffffffff8211156126e257600080fd5b6020019150368190038213156126f757600080fd5b9250929050565b6000808585111561270e57600080fd5b8386111561271b57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127685780818660040360031b1b83161692505b505092915050565b808201808211156110135761101361234a565b8183823760009101908152919050565b602081526000611c0160208301846123c9565b6000602082840312156127b857600080fd5b8151611c01816120c1565b6000602082840312156127d557600080fd5b815167ffffffffffffffff8111156127ec57600080fd5b8201601f810184136127fd57600080fd5b805161280b61206182611ffc565b81815285602083850101111561282057600080fd5b6128318260208301602086016123a5565b95945050505050565b600082516125c88184602087016123a556fea264697066735822122038ba306d1363a7fe98bb0f82ae778b5ebd6cbaef18da51635a3e91d1795af97b64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IGravityRouter";
            readonly name: "_router";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "CannotBridgeToSameNetwork";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ContractCallNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "receivedAmount";
            readonly type: "uint256";
        }];
        readonly name: "CumulativeSlippageTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InformationMismatch";
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
        readonly name: "InvalidContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetNotSupported";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapDataProvided";
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "destinationAddress";
                readonly type: "string";
            }];
            readonly internalType: "struct GravityFacet.GravityData";
            readonly name: "_gravityData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaGravity";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
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
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "destinationAddress";
                readonly type: "string";
            }];
            readonly internalType: "struct GravityFacet.GravityData";
            readonly name: "_gravityData";
            readonly type: "tuple";
        }];
        readonly name: "swapAndStartBridgeTokensViaGravity";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): GravityFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GravityFacet;
}
export {};
