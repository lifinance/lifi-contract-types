import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AmarokFacet, AmarokFacetInterface } from "../AmarokFacet";
declare type AmarokFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AmarokFacet__factory extends ContractFactory {
    constructor(...args: AmarokFacetConstructorParams);
    deploy(_connextHandler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AmarokFacet>;
    getDeployTransaction(_connextHandler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AmarokFacet;
    connect(signer: Signer): AmarokFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620029fb380380620029fb833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612959620000a260003960008181610783015281816107d801526108e101526129596000f3fe6080604052600436106100295760003560e01c80631cf7c7a61461002e5780636ba16e2d14610043575b600080fd5b61004161003c3660046120c4565b610056565b005b61004161005136600461235f565b6102c8565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761241e565b90506100ed85612458565b8061010001511561012a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61013386612458565b60a081015173ffffffffffffffffffffffffffffffffffffffff16610184576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101c2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101ff576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61020887612458565b608081015173ffffffffffffffffffffffffffffffffffffffff16610259576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61026b61026589612458565b88610520565b61028861027e60a08a0160808b01612464565b8960c00135610577565b61029a61029489612458565b886106f3565b5047915050818111156102bc576102bc6000846102b7858561241e565b6109fa565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610343576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610354344761241e565b905086806101000151610393576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103b68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103ed576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361042b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610468576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861048b816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156104c2576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104cc8a88610520565b6104e68a600001518b60c001518b8b338c60400135610a2b565b60c08b01526104f58a886106f3565b504791505081811115610512576105126000846102b7858561241e565b505060009091555050505050565b610120820151151560006105376020840184612486565b905011151514610573576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b806000036105b1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106065780341015610573576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610673573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069791906124f2565b9050818110156106e2576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6106ee83333085610bc6565b505050565b816101200151158015610742575061070e6020820182612464565b73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b15610779576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107ac82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610de0565b6107bc60e0820160c0830161250b565b156108ca5773ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166393f18ac561080d60c0840160a08501612528565b61081a6020850185612464565b85608001518560800160208101906108329190612464565b86604001358860c00151610846919061241e565b606088013561085860208a018a612486565b8a604001356040518a63ffffffff1660e01b815260040161088199989796959493929190612597565b6020604051808303816000875af11580156108a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c491906124f2565b506109bf565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016638aac16ba604083013561091b60c0850160a08601612528565b6109286020860186612464565b86608001518660800160208101906109409190612464565b60c0890151606089013561095760208b018b612486565b6040518a63ffffffff1660e01b815260040161097a989796959493929190612609565b60206040518083038185885af1158015610998573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906109bd91906124f2565b505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516109ee91906126df565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610a21576106ee838383610f23565b6106ee82826110a5565b600083808203610a67576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610a7660018561241e565b818110610a8557610a856127f2565b9050602002810190610a979190612821565b610aa8906080810190606001612464565b90506000610ab5826111cf565b905073ffffffffffffffffffffffffffffffffffffffff8216610adf57610adc348261241e565b90505b6000610aeb8989611288565b9050610af78989611394565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610b32818b8b85611401565b600083610b3e866111cf565b610b48919061241e565b905073ffffffffffffffffffffffffffffffffffffffff8516610b7257610b6f888261241e565b90505b8b811015610bb6576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044016106d9565b9c9b505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610c13576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c60576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610cd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf591906124f2565b9050610d03828686866117f2565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610d73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9791906124f2565b610da1919061241e565b14610dd8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610e0057505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e4d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610ec2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee691906124f2565b10156106ee57610ef8838360006118ce565b6106ee83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118ce565b73ffffffffffffffffffffffffffffffffffffffff8316610f70576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610fbd576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561102a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061104e91906124f2565b905080821115611094576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106d9565b61109f848484611a50565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166110f2576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611135576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016106d9565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461118f576040519150601f19603f3d011682016040523d82523d6000602084013e611194565b606091505b50509050806106ee576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611280576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611257573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061127b91906124f2565b611282565b475b92915050565b60608160008167ffffffffffffffff8111156112a6576112a6612131565b6040519080825280602002602001820160405280156112cf578160200160208202803683370190505b5090506000805b83811015611389578686828181106112f0576112f06127f2565b90506020028101906113029190612821565b611313906080810190606001612464565b915061131e826111cf565b838281518110611330576113306127f2565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166113815734838281518110611369576113696127f2565b6020026020010181815161137d919061241e565b9052505b6001016112d6565b509095945050505050565b60005b818110156106ee57368383838181106113b2576113b26127f2565b90506020028101906113c49190612821565b90506113d660e0820160c0830161250b565b156113f8576113f86113ee6060830160408401612464565b8260800135610577565b50600101611397565b60208401516040850151849184918490836001811461170b576000868661142960018561241e565b818110611438576114386127f2565b905060200281019061144a9190612821565b61145b906080810190606001612464565b9050600089815b8181101561160857368d8d8381811061147d5761147d6127f2565b905060200281019061148f9190612821565b90506114be6114a46060830160408401612464565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061152157506115216114d76040830160208401612464565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561153857506115386114d76020830183612464565b80156115bd57506115bd61154f60a0830183612486565b61155e9160049160009161285f565b61156791612889565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6115f3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516115ff9082611aa6565b50600101611462565b505060005b61161860018561241e565b811015611703576000898983818110611633576116336127f2565b90506020028101906116459190612821565b611656906080810190606001612464565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146116fa5786828151811061169d5761169d6127f2565b60200260200101516116ae826111cf565b6116b8919061241e565b9250600073ffffffffffffffffffffffffffffffffffffffff8216156116df5760006116e1565b865b905083156116f8576116f8828a6102b7848861241e565b505b5060010161160d565b5050506117e6565b8760005b818110156117e357368b8b8381811061172a5761172a6127f2565b905060200281019061173c9190612821565b90506117516114a46060830160408401612464565b8061176a575061176a6114d76040830160208401612464565b801561178157506117816114d76020830183612464565b8015611798575061179861154f60a0830183612486565b6117ce576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516117da9082611aa6565b5060010161170f565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261109f9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d84565b80158061196e57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611948573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061196c91906124f2565b155b6119fa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016106d9565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106ee9084907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161184c565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106ee9084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161184c565b611abc611ab66020830183612464565b3b151590565b611af2576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611b32576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611b476114a46060850160408601612464565b611b52576000611b58565b82608001355b90506000611b74611b6f6060860160408701612464565b6111cf565b90506000611b8b611b6f6080870160608801612464565b905082600003611bc257611bc2611ba86060870160408801612464565b611bb86040880160208901612464565b8760800135610de0565b8460800135821015611c0d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016106d9565b600080611c1d6020880188612464565b73ffffffffffffffffffffffffffffffffffffffff1685611c4160a08a018a612486565b604051611c4f9291906128d1565b60006040518083038185875af1925050503d8060008114611c8c576040519150601f19603f3d011682016040523d82523d6000602084013e611c91565b606091505b509150915081611ca457611ca481611e93565b6000611cb9611b6f60808a0160608b01612464565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611cea60208b018b612464565b611cfa60608c0160408d01612464565b611d0a60808d0160608e01612464565b8c60800135898711611d1c5786611d26565b611d268a8861241e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611de6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e9d9092919063ffffffff16565b9050805160001480611e07575080806020019051810190611e0791906128e1565b6106ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106d9565b8051602082018181fd5b6060611eac8484600085611eb4565b949350505050565b606082471015611f46576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106d9565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f6f91906128fe565b60006040518083038185875af1925050503d8060008114611fac576040519150601f19603f3d011682016040523d82523d6000602084013e611fb1565b606091505b5091509150611fc287838387611fcd565b979650505050505050565b6060831561206357825160000361205c5773ffffffffffffffffffffffffffffffffffffffff85163b61205c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106d9565b5081611eac565b611eac83838151156120785781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d99190612910565b600060e082840312156120be57600080fd5b50919050565b600080604083850312156120d757600080fd5b823567ffffffffffffffff808211156120ef57600080fd5b90840190610140828703121561210457600080fd5b9092506020840135908082111561211a57600080fd5b50612127858286016120ac565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561218457612184612131565b60405290565b600082601f83011261219b57600080fd5b813567ffffffffffffffff808211156121b6576121b6612131565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156121fc576121fc612131565b8160405283815286602085880101111561221557600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461225957600080fd5b919050565b801515811461226c57600080fd5b50565b80356122598161225e565b6000610140828403121561228d57600080fd5b612295612160565b905081358152602082013567ffffffffffffffff808211156122b657600080fd5b6122c28583860161218a565b602084015260408401359150808211156122db57600080fd5b506122e88482850161218a565b6040830152506122fa60608301612235565b606082015261230b60808301612235565b608082015261231c60a08301612235565b60a082015260c082013560c082015260e082013560e082015261010061234381840161226f565b9082015261012061235583820161226f565b9082015292915050565b6000806000806060858703121561237557600080fd5b843567ffffffffffffffff8082111561238d57600080fd5b6123998883890161227a565b955060208701359150808211156123af57600080fd5b818701915087601f8301126123c357600080fd5b8135818111156123d257600080fd5b8860208260051b85010111156123e757600080fd5b60208301955080945050604087013591508082111561240557600080fd5b50612412878288016120ac565b91505092959194509250565b81810381811115611282577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611282368361227a565b60006020828403121561247657600080fd5b61247f82612235565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126124bb57600080fd5b83018035915067ffffffffffffffff8211156124d657600080fd5b6020019150368190038213156124eb57600080fd5b9250929050565b60006020828403121561250457600080fd5b5051919050565b60006020828403121561251d57600080fd5b813561247f8161225e565b60006020828403121561253a57600080fd5b813563ffffffff8116811461247f57600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600061010063ffffffff8c16835273ffffffffffffffffffffffffffffffffffffffff808c166020850152808b166040850152808a166060850152508760808401528660a08401528060c08401526125f2818401868861254e565b9150508260e08301529a9950505050505050505050565b63ffffffff89168152600073ffffffffffffffffffffffffffffffffffffffff808a16602084015280891660408401528088166060840152508560808301528460a083015260e060c083015261266360e08301848661254e565b9a9950505050505050505050565b60005b8381101561268c578181015183820152602001612674565b50506000910152565b600081518084526126ad816020860160208601612671565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612708610160850183612695565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526127438382612695565b925050606085015161276d608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127e08187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261285557600080fd5b9190910192915050565b6000808585111561286f57600080fd5b8386111561287c57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128c95780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156128f357600080fd5b815161247f8161225e565b60008251612855818460208701612671565b60208152600061247f602083018461269556fea264697066735822122042504331e5d42e59d7e1f682e7c792325fd1043b72c00faad7404d74d4d9434264736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_connextHandler";
            readonly type: "address";
            readonly internalType: "contract IConnextHandler";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAmarok";
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
            readonly name: "_amarokData";
            readonly type: "tuple";
            readonly internalType: "struct AmarokFacet.AmarokData";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "slippageTol";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "delegate";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "destChainDomainId";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAmarok";
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
            readonly name: "_amarokData";
            readonly type: "tuple";
            readonly internalType: "struct AmarokFacet.AmarokData";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "slippageTol";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "delegate";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "destChainDomainId";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "payFeeWithSendingAsset";
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
    static createInterface(): AmarokFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AmarokFacet;
}
export {};
