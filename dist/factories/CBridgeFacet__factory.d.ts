import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CBridgeFacet, CBridgeFacetInterface } from "../CBridgeFacet";
declare type CBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CBridgeFacet__factory extends ContractFactory {
    constructor(...args: CBridgeFacetConstructorParams);
    deploy(_cBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CBridgeFacet>;
    getDeployTransaction(_cBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CBridgeFacet;
    connect(signer: Signer): CBridgeFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002aee38038062002aee833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612a46620000a86000396000818160e00152818161095101528181610a500152610a7b0152612a466000f3fe6080604052600436106100345760003560e01c80630d19e51914610039578063482c6a851461005b578063ae0b91e51461006e575b600080fd5b34801561004557600080fd5b50610059610054366004612248565b610081565b005b610059610069366004612513565b610298565b61005961007c3660046125bf565b6104ca565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100c7576100c76106ee565b8573ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff161461014c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008673ffffffffffffffffffffffffffffffffffffffff16868660405161017592919061260e565b6000604051808303816000865af19150503d80600081146101b2576040519150601f19603f3d011682016040523d82523d6000602084013e6101b7565b606091505b505080915050806101f4576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff841615610218578361021a565b335b905061022785828561078e565b8073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f9779662e766b5675e69e09303bc2f58ae30397b71b8021ab947defd27747b95f8560405161028691815260200190565b60405180910390a35050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610313576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610324344761261e565b905086806101000151610363576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103a1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103c48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103fb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610439576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610476576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61048b8a600001518b60c001518b8b336107c4565b60c08b015261049a8a8861090c565b5047915050818111156104bc576104bc6000846104b7858561261e565b61078e565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610545576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610556344761261e565b90508480610100015115610596576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156105d4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866105f78160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561062e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361066c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036106a9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106bb88608001518960c00151610bd6565b6106c5888861090c565b5047915050818111156106e2576106e26000846104b7858561261e565b50506000909155505050565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff90911615151461078b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b73ffffffffffffffffffffffffffffffffffffffff8316156107ba576107b5838383610d4c565b505050565b6107b58282610ece565b600082808203610800576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561080f60018561261e565b81811061081e5761081e612658565b90506020028101906108309190612687565b6108419060808101906060016126c5565b9050600061084e82610ff8565b905073ffffffffffffffffffffffffffffffffffffffff821661087857610875348261261e565b90505b600061088488886110b1565b905061089088886111bd565b61089d8a8989898561122a565b6000826108a985610ff8565b6108b3919061261e565b9050898110156108fe576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610a465760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692633f2e5fc3929091829061098c60408801602089016126e9565b6109996020890189612713565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9095166004860152602485019390935267ffffffffffffffff918216604485015216606483015263ffffffff16608482015260a4016000604051808303818588803b158015610a2857600080fd5b505af1158015610a3c573d6000803e3d6000fd5b5050505050610b9b565b610a7982608001517f00000000000000000000000000000000000000000000000000000000000000008460c001516115dc565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a5977fbb8360a0015184608001518560c001518660e00151866020016020810190610adc91906126e9565b610ae96020890189612713565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9687166004820152959094166024860152604485019290925267ffffffffffffffff908116606485015216608483015263ffffffff1660a482015260c401600060405180830381600087803b158015610b8257600080fd5b505af1158015610b96573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610bca91906127a7565b60405180910390a15050565b80600003610c10576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c695780341015610c65576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610cd6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cfa91906128ba565b905081811015610d40576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016108f5565b6107b583333085611713565b73ffffffffffffffffffffffffffffffffffffffff8316610d99576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610de6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610e53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7791906128ba565b905080821115610ebd576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016108f5565b610ec884848461192d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f1b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610f5e576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016108f5565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610fb8576040519150601f19603f3d011682016040523d82523d6000602084013e610fbd565b606091505b50509050806107b5576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156110a9576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611080573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a491906128ba565b6110ab565b475b92915050565b60608160008167ffffffffffffffff8111156110cf576110cf6122f9565b6040519080825280602002602001820160405280156110f8578160200160208202803683370190505b5090506000805b838110156111b25786868281811061111957611119612658565b905060200281019061112b9190612687565b61113c9060808101906060016126c5565b915061114782610ff8565b83828151811061115957611159612658565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166111aa573483828151811061119257611192612658565b602002602001018181516111a6919061261e565b9052505b6001016110ff565b509095945050505050565b60005b818110156107b557368383838181106111db576111db612658565b90506020028101906111ed9190612687565b90506111ff60e0820160c083016128d3565b156112215761122161121760608301604084016126c5565b8260800135610bd6565b506001016111c0565b8383838382600181146114f7576000858561124660018561261e565b81811061125557611255612658565b90506020028101906112679190612687565b6112789060808101906060016126c5565b9050600089815b8181101561142357368d8d8381811061129a5761129a612658565b90506020028101906112ac9190612687565b90506112db6112c160608301604084016126c5565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061133e575061133e6112f460408301602084016126c5565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561135557506113556112f460208301836126c5565b80156113da57506113da61136c60a08301836128f0565b61137b9160049160009161295c565b61138491612986565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611410576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61141a8f82611a01565b5060010161127f565b505060005b61143360018561261e565b8110156114ef57600088888381811061144e5761144e612658565b90506020028101906114609190612687565b6114719060808101906060016126c5565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114e6578582815181106114b8576114b8612658565b60200260200101516114c982610ff8565b6114d3919061261e565b925082156114e6576114e681888561078e565b50600101611428565b5050506115d0565b8760005b818110156115cd57368b8b8381811061151657611516612658565b90506020028101906115289190612687565b905061153d6112c160608301604084016126c5565b8061155657506115566112f460408301602084016126c5565b801561156d575061156d6112f460208301836126c5565b8015611584575061158461136c60a08301836128f0565b6115ba576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115c48d82611a01565b506001016114fb565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166115fc57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611649576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156116be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e291906128ba565b10156107b5576107b583837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611cdf565b73ffffffffffffffffffffffffffffffffffffffff8416611760576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166117ad576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561181e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061184291906128ba565b905061185082868686611dcf565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156118c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118e491906128ba565b6118ee919061261e565b14611925576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107b59084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611e2d565b611a17611a1160208301836126c5565b3b151590565b611a4d576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611a8d576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611aa26112c160608501604086016126c5565b611aad576000611ab3565b82608001355b90506000611acf611aca60608601604087016126c5565b610ff8565b90506000611ae6611aca60808701606088016126c5565b905082600003611b1d57611b1d611b0360608701604088016126c5565b611b1360408801602089016126c5565b87608001356115dc565b8460800135821015611b68576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016108f5565b600080611b7860208801886126c5565b73ffffffffffffffffffffffffffffffffffffffff1685611b9c60a08a018a6128f0565b604051611baa92919061260e565b60006040518083038185875af1925050503d8060008114611be7576040519150601f19603f3d011682016040523d82523d6000602084013e611bec565b606091505b509150915081611bff57611bff81611f3c565b6000611c14611aca60808a0160608b016126c5565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611c4560208b018b6126c5565b611c5560608c0160408d016126c5565b611c6560808d0160608e016126c5565b8c60800135898711611c775786611c81565b611c818a8861261e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611d6b8482611f46565b610ec85760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611dc59085907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161197f565b610ec88482611e2d565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ec89085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161197f565b6000611e8f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166120079092919063ffffffff16565b9050805160001480611eb0575080806020019051810190611eb091906129ce565b6107b5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016108f5565b8051602082018181fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611f7091906129eb565b6000604051808303816000865af19150503d8060008114611fad576040519150601f19603f3d011682016040523d82523d6000602084013e611fb2565b606091505b5091509150818015611fdc575080511580611fdc575080806020019051810190611fdc91906129ce565b8015611ffe575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b6060612016848460008561201e565b949350505050565b6060824710156120b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016108f5565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516120d991906129eb565b60006040518083038185875af1925050503d8060008114612116576040519150601f19603f3d011682016040523d82523d6000602084013e61211b565b606091505b509150915061212c87838387612137565b979650505050505050565b606083156121cd5782516000036121c65773ffffffffffffffffffffffffffffffffffffffff85163b6121c6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016108f5565b5081612016565b61201683838151156121e25781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f591906129fd565b73ffffffffffffffffffffffffffffffffffffffff8116811461078b57600080fd5b803561224381612216565b919050565b60008060008060008060a0878903121561226157600080fd5b863561226c81612216565b9550602087013567ffffffffffffffff8082111561228957600080fd5b818901915089601f83011261229d57600080fd5b8135818111156122ac57600080fd5b8a60208285010111156122be57600080fd5b60208301975080965050505060408701356122d881612216565b92506122e660608801612238565b9150608087013590509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561234c5761234c6122f9565b60405290565b600082601f83011261236357600080fd5b813567ffffffffffffffff8082111561237e5761237e6122f9565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156123c4576123c46122f9565b816040528381528660208588010111156123dd57600080fd5b836020870160208301376000602085830101528094505050505092915050565b801515811461078b57600080fd5b8035612243816123fd565b6000610140828403121561242957600080fd5b612431612328565b905081358152602082013567ffffffffffffffff8082111561245257600080fd5b61245e85838601612352565b6020840152604084013591508082111561247757600080fd5b5061248484828501612352565b60408301525061249660608301612238565b60608201526124a760808301612238565b60808201526124b860a08301612238565b60a082015260c082013560c082015260e082013560e08201526101006124df81840161240b565b908201526101206124f183820161240b565b9082015292915050565b60006040828403121561250d57600080fd5b50919050565b6000806000806080858703121561252957600080fd5b843567ffffffffffffffff8082111561254157600080fd5b61254d88838901612416565b9550602087013591508082111561256357600080fd5b818701915087601f83011261257757600080fd5b81358181111561258657600080fd5b8860208260051b850101111561259b57600080fd5b6020830195508094505050506125b486604087016124fb565b905092959194509250565b600080606083850312156125d257600080fd5b823567ffffffffffffffff8111156125e957600080fd5b6125f585828601612416565b92505061260584602085016124fb565b90509250929050565b8183823760009101908152919050565b818103818111156110ab577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126126bb57600080fd5b9190910192915050565b6000602082840312156126d757600080fd5b81356126e281612216565b9392505050565b6000602082840312156126fb57600080fd5b813567ffffffffffffffff811681146126e257600080fd5b60006020828403121561272557600080fd5b813563ffffffff811681146126e257600080fd5b60005b8381101561275457818101518382015260200161273c565b50506000910152565b60008151808452612775816020860160208601612739565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526127d061016085018361275d565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261280b838261275d565b9250506060850151612835608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206128a88187018315159052565b90950151151593019290925250919050565b6000602082840312156128cc57600080fd5b5051919050565b6000602082840312156128e557600080fd5b81356126e2816123fd565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261292557600080fd5b83018035915067ffffffffffffffff82111561294057600080fd5b60200191503681900382131561295557600080fd5b9250929050565b6000808585111561296c57600080fd5b8386111561297957600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156129c65780818660040360031b1b83161692505b505092915050565b6000602082840312156129e057600080fd5b81516126e2816123fd565b600082516126bb818460208701612739565b6020815260006126e2602083018461275d56fea26469706673582212204accd69cde2d0ee28f0de9e911adf03ff2dfc77ab16d8efd2724de25f4a5a4d764736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_cBridge";
            readonly type: "address";
            readonly internalType: "contract ICBridge";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCBridge";
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
            readonly name: "_cBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly components: readonly [{
                readonly name: "maxSlippage";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "nonce";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaCBridge";
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
            readonly name: "_cBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly components: readonly [{
                readonly name: "maxSlippage";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "nonce";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "triggerRefund";
        readonly inputs: readonly [{
            readonly name: "_callTo";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "CBridgeRefund";
        readonly inputs: readonly [{
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
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
        readonly name: "ExternalCallFailed";
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
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): CBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CBridgeFacet;
}
export {};
