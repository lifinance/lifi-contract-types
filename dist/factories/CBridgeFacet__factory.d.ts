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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002acb38038062002acb833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612a23620000a86000396000818160e00152818161095101528181610a500152610a7b0152612a236000f3fe6080604052600436106100345760003560e01c80630d19e51914610039578063482c6a851461005b578063ae0b91e51461006e575b600080fd5b34801561004557600080fd5b50610059610054366004612225565b610081565b005b6100596100693660046124f0565b610298565b61005961007c36600461259c565b6104ca565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100c7576100c76106ee565b8573ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff161461014c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008673ffffffffffffffffffffffffffffffffffffffff1686866040516101759291906125eb565b6000604051808303816000865af19150503d80600081146101b2576040519150601f19603f3d011682016040523d82523d6000602084013e6101b7565b606091505b505080915050806101f4576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff841615610218578361021a565b335b905061022785828561078e565b8073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f9779662e766b5675e69e09303bc2f58ae30397b71b8021ab947defd27747b95f8560405161028691815260200190565b60405180910390a35050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610313576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061032434476125fb565b905086806101000151610363576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103a1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103c48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103fb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610439576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610476576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61048b8a600001518b60c001518b8b336107c4565b60c08b015261049a8a8861090c565b5047915050818111156104bc576104bc6000846104b785856125fb565b61078e565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610545576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061055634476125fb565b90508480610100015115610596576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156105d4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866105f78160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561062e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361066c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036106a9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106bb88608001518960c00151610bd6565b6106c5888861090c565b5047915050818111156106e2576106e26000846104b785856125fb565b50506000909155505050565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff90911615151461078b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b73ffffffffffffffffffffffffffffffffffffffff8316156107ba576107b5838383610d4c565b505050565b6107b58282610ece565b600082808203610800576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561080f6001856125fb565b81811061081e5761081e612635565b90506020028101906108309190612664565b6108419060808101906060016126a2565b9050600061084e82610ff8565b905073ffffffffffffffffffffffffffffffffffffffff82166108785761087534826125fb565b90505b600061088488886110b1565b905061089088886111bd565b61089d8a8989898561122a565b6000826108a985610ff8565b6108b391906125fb565b9050898110156108fe576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610a465760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692633f2e5fc3929091829061098c60408801602089016126c6565b61099960208901896126f0565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9095166004860152602485019390935267ffffffffffffffff918216604485015216606483015263ffffffff16608482015260a4016000604051808303818588803b158015610a2857600080fd5b505af1158015610a3c573d6000803e3d6000fd5b5050505050610b9b565b610a7982608001517f00000000000000000000000000000000000000000000000000000000000000008460c001516115dc565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a5977fbb8360a0015184608001518560c001518660e00151866020016020810190610adc91906126c6565b610ae960208901896126f0565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9687166004820152959094166024860152604485019290925267ffffffffffffffff908116606485015216608483015263ffffffff1660a482015260c401600060405180830381600087803b158015610b8257600080fd5b505af1158015610b96573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610bca9190612784565b60405180910390a15050565b80600003610c10576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c695780341015610c65576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610cd6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cfa9190612897565b905081811015610d40576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016108f5565b6107b58333308561171f565b73ffffffffffffffffffffffffffffffffffffffff8316610d99576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610de6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610e53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e779190612897565b905080821115610ebd576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016108f5565b610ec8848484611939565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f1b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610f5e576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016108f5565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610fb8576040519150601f19603f3d011682016040523d82523d6000602084013e610fbd565b606091505b50509050806107b5576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156110a9576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611080573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a49190612897565b6110ab565b475b92915050565b60608160008167ffffffffffffffff8111156110cf576110cf6122d6565b6040519080825280602002602001820160405280156110f8578160200160208202803683370190505b5090506000805b838110156111b25786868281811061111957611119612635565b905060200281019061112b9190612664565b61113c9060808101906060016126a2565b915061114782610ff8565b83828151811061115957611159612635565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166111aa573483828151811061119257611192612635565b602002602001018181516111a691906125fb565b9052505b6001016110ff565b509095945050505050565b60005b818110156107b557368383838181106111db576111db612635565b90506020028101906111ed9190612664565b90506111ff60e0820160c083016128b0565b156112215761122161121760608301604084016126a2565b8260800135610bd6565b506001016111c0565b8383838382600181146114f757600085856112466001856125fb565b81811061125557611255612635565b90506020028101906112679190612664565b6112789060808101906060016126a2565b9050600089815b8181101561142357368d8d8381811061129a5761129a612635565b90506020028101906112ac9190612664565b90506112db6112c160608301604084016126a2565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061133e575061133e6112f460408301602084016126a2565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561135557506113556112f460208301836126a2565b80156113da57506113da61136c60a08301836128cd565b61137b91600491600091612939565b61138491612963565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611410576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61141a8f82611a0d565b5060010161127f565b505060005b6114336001856125fb565b8110156114ef57600088888381811061144e5761144e612635565b90506020028101906114609190612664565b6114719060808101906060016126a2565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114e6578582815181106114b8576114b8612635565b60200260200101516114c982610ff8565b6114d391906125fb565b925082156114e6576114e681888561078e565b50600101611428565b5050506115d0565b8760005b818110156115cd57368b8b8381811061151657611516612635565b90506020028101906115289190612664565b905061153d6112c160608301604084016126a2565b8061155657506115566112f460408301602084016126a2565b801561156d575061156d6112f460208301836126a2565b8015611584575061158461136c60a08301836128cd565b6115ba576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115c48d82611a0d565b506001016114fb565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166115fc57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611649576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156116be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e29190612897565b10156107b5576116f483836000611ceb565b6107b583837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611ceb565b73ffffffffffffffffffffffffffffffffffffffff841661176c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166117b9576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561182a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061184e9190612897565b905061185c82868686611e6d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156118cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118f09190612897565b6118fa91906125fb565b14611931576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107b59084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611ecb565b611a23611a1d60208301836126a2565b3b151590565b611a59576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611a99576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611aae6112c160608501604086016126a2565b611ab9576000611abf565b82608001355b90506000611adb611ad660608601604087016126a2565b610ff8565b90506000611af2611ad660808701606088016126a2565b905082600003611b2957611b29611b0f60608701604088016126a2565b611b1f60408801602089016126a2565b87608001356115dc565b8460800135821015611b74576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016108f5565b600080611b8460208801886126a2565b73ffffffffffffffffffffffffffffffffffffffff1685611ba860a08a018a6128cd565b604051611bb69291906125eb565b60006040518083038185875af1925050503d8060008114611bf3576040519150601f19603f3d011682016040523d82523d6000602084013e611bf8565b606091505b509150915081611c0b57611c0b81611fda565b6000611c20611ad660808a0160608b016126a2565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611c5160208b018b6126a2565b611c6160608c0160408d016126a2565b611c7160808d0160608e016126a2565b8c60800135898711611c835786611c8d565b611c8d8a886125fb565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611d8b57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611d65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d899190612897565b155b611e17576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016108f5565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107b59084907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161198b565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ec89085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161198b565b6000611f2d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611fe49092919063ffffffff16565b9050805160001480611f4e575080806020019051810190611f4e91906129ab565b6107b5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016108f5565b8051602082018181fd5b6060611ff38484600085611ffb565b949350505050565b60608247101561208d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016108f5565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516120b691906129c8565b60006040518083038185875af1925050503d80600081146120f3576040519150601f19603f3d011682016040523d82523d6000602084013e6120f8565b606091505b509150915061210987838387612114565b979650505050505050565b606083156121aa5782516000036121a35773ffffffffffffffffffffffffffffffffffffffff85163b6121a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016108f5565b5081611ff3565b611ff383838151156121bf5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f591906129da565b73ffffffffffffffffffffffffffffffffffffffff8116811461078b57600080fd5b8035612220816121f3565b919050565b60008060008060008060a0878903121561223e57600080fd5b8635612249816121f3565b9550602087013567ffffffffffffffff8082111561226657600080fd5b818901915089601f83011261227a57600080fd5b81358181111561228957600080fd5b8a602082850101111561229b57600080fd5b60208301975080965050505060408701356122b5816121f3565b92506122c360608801612215565b9150608087013590509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715612329576123296122d6565b60405290565b600082601f83011261234057600080fd5b813567ffffffffffffffff8082111561235b5761235b6122d6565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156123a1576123a16122d6565b816040528381528660208588010111156123ba57600080fd5b836020870160208301376000602085830101528094505050505092915050565b801515811461078b57600080fd5b8035612220816123da565b6000610140828403121561240657600080fd5b61240e612305565b905081358152602082013567ffffffffffffffff8082111561242f57600080fd5b61243b8583860161232f565b6020840152604084013591508082111561245457600080fd5b506124618482850161232f565b60408301525061247360608301612215565b606082015261248460808301612215565b608082015261249560a08301612215565b60a082015260c082013560c082015260e082013560e08201526101006124bc8184016123e8565b908201526101206124ce8382016123e8565b9082015292915050565b6000604082840312156124ea57600080fd5b50919050565b6000806000806080858703121561250657600080fd5b843567ffffffffffffffff8082111561251e57600080fd5b61252a888389016123f3565b9550602087013591508082111561254057600080fd5b818701915087601f83011261255457600080fd5b81358181111561256357600080fd5b8860208260051b850101111561257857600080fd5b60208301955080945050505061259186604087016124d8565b905092959194509250565b600080606083850312156125af57600080fd5b823567ffffffffffffffff8111156125c657600080fd5b6125d2858286016123f3565b9250506125e284602085016124d8565b90509250929050565b8183823760009101908152919050565b818103818111156110ab577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261269857600080fd5b9190910192915050565b6000602082840312156126b457600080fd5b81356126bf816121f3565b9392505050565b6000602082840312156126d857600080fd5b813567ffffffffffffffff811681146126bf57600080fd5b60006020828403121561270257600080fd5b813563ffffffff811681146126bf57600080fd5b60005b83811015612731578181015183820152602001612719565b50506000910152565b60008151808452612752816020860160208601612716565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526127ad61016085018361273a565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526127e8838261273a565b9250506060850151612812608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206128858187018315159052565b90950151151593019290925250919050565b6000602082840312156128a957600080fd5b5051919050565b6000602082840312156128c257600080fd5b81356126bf816123da565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261290257600080fd5b83018035915067ffffffffffffffff82111561291d57600080fd5b60200191503681900382131561293257600080fd5b9250929050565b6000808585111561294957600080fd5b8386111561295657600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156129a35780818660040360031b1b83161692505b505092915050565b6000602082840312156129bd57600080fd5b81516126bf816123da565b60008251612698818460208701612716565b6020815260006126bf602083018461273a56fea2646970667358221220db3901fd46b9cf048876cd1a0aa9b3e5bedb7825992920eb39eaf5c1d54e1d0764736f6c63430008110033";
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
