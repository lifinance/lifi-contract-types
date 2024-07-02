import { Signer, ContractFactory, BytesLike, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MakerTeleportFacet, MakerTeleportFacetInterface } from "../MakerTeleportFacet";
declare type MakerTeleportFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MakerTeleportFacet__factory extends ContractFactory {
    constructor(...args: MakerTeleportFacetConstructorParams);
    deploy(_teleportGateway: PromiseOrValue<string>, _dai: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _l1Domain: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MakerTeleportFacet>;
    getDeployTransaction(_teleportGateway: PromiseOrValue<string>, _dai: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _l1Domain: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MakerTeleportFacet;
    connect(signer: Signer): MakerTeleportFacet__factory;
    static readonly bytecode = "0x6101006040523480156200001257600080fd5b506040516200285038038062002850833981016040819052620000359162000070565b60c0919091526001600160a01b03928316608052911660a05260e052620000bd565b6001600160a01b03811681146200006d57600080fd5b50565b600080600080608085870312156200008757600080fd5b8451620000948162000057565b6020860151909450620000a78162000057565b6040860151606090960151949790965092505050565b60805160a05160c05160e0516127366200011a600039600061085201526000818161024401526105500152600081816102a3015281816105af0152818161063c01526107ca0152600081816107eb015261081601526127366000f3fe6080604052600436106100295760003560e01c80632201536d1461002e57806351ba4f7514610043575b600080fd5b61004161003c366004612281565b610063565b005b34801561004f57600080fd5b5061004161005e36600461231b565b610384565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100de576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100ef3447612350565b9050856101148160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561014b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610189576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101c6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101000151610203576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610241576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b887f0000000000000000000000000000000000000000000000000000000000000000808260e00151146102a0576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a7f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff161461032b576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103408d600001518e60c001518e8e3361067d565b60c08e015261034e8d6107c5565b50505050505050600047905081811115610377576103776000846103728585612350565b61095a565b5050600090915550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103ff576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560a0820151829073ffffffffffffffffffffffffffffffffffffffff16610456576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610494576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104d1576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b828061010001511561050f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b838061012001511561054d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b847f0000000000000000000000000000000000000000000000000000000000000000808260e00151146105ac576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b867f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff1614610637576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106657f00000000000000000000000000000000000000000000000000000000000000008a60c00151610990565b61066e896107c5565b50506000909555505050505050565b6000828082036106b9576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856106c8600185612350565b8181106106d7576106d761238a565b90506020028101906106e991906123b9565b6106fa9060808101906060016123f7565b9050600061070782610b06565b905073ffffffffffffffffffffffffffffffffffffffff82166107315761072e3482612350565b90505b600061073d8888610bbf565b90506107498888610ccb565b6107568a89898985610d38565b60008261076285610b06565b61076c9190612350565b9050898110156107b7576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b6108147f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008360c001516110ea565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166389282b877f00000000000000000000000000000000000000000000000000000000000000008360a001516108838560c0015161122d565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152600481019390935273ffffffffffffffffffffffffffffffffffffffff90911660248301526fffffffffffffffffffffffffffffffff166044820152606401600060405180830381600087803b15801561090857600080fd5b505af115801561091c573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161094f9190612487565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff831615610986576109818383836112d3565b505050565b6109818282611455565b806000036109ca576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a235780341015610a1f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610a90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab4919061259a565b905081811015610afa576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016107ae565b6109818333308561157f565b600073ffffffffffffffffffffffffffffffffffffffff821615610bb7576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610b8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb2919061259a565b610bb9565b475b92915050565b60608160008167ffffffffffffffff811115610bdd57610bdd612053565b604051908082528060200260200182016040528015610c06578160200160208202803683370190505b5090506000805b83811015610cc057868682818110610c2757610c2761238a565b9050602002810190610c3991906123b9565b610c4a9060808101906060016123f7565b9150610c5582610b06565b838281518110610c6757610c6761238a565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610cb85734838281518110610ca057610ca061238a565b60200260200101818151610cb49190612350565b9052505b600101610c0d565b509095945050505050565b60005b818110156109815736838383818110610ce957610ce961238a565b9050602002810190610cfb91906123b9565b9050610d0d60e0820160c083016125b3565b15610d2f57610d2f610d2560608301604084016123f7565b8260800135610990565b50600101610cce565b8383838382600181146110055760008585610d54600185612350565b818110610d6357610d6361238a565b9050602002810190610d7591906123b9565b610d869060808101906060016123f7565b9050600089815b81811015610f3157368d8d83818110610da857610da861238a565b9050602002810190610dba91906123b9565b9050610de9610dcf60608301604084016123f7565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e4c5750610e4c610e0260408301602084016123f7565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e635750610e63610e0260208301836123f7565b8015610ee85750610ee8610e7a60a08301836125d0565b610e899160049160009161263c565b610e9291612666565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f1e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f288f82611799565b50600101610d8d565b505060005b610f41600185612350565b811015610ffd576000888883818110610f5c57610f5c61238a565b9050602002810190610f6e91906123b9565b610f7f9060808101906060016123f7565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ff457858281518110610fc657610fc661238a565b6020026020010151610fd782610b06565b610fe19190612350565b92508215610ff457610ff481888561095a565b50600101610f36565b5050506110de565b8760005b818110156110db57368b8b838181106110245761102461238a565b905060200281019061103691906123b9565b905061104b610dcf60608301604084016123f7565b806110645750611064610e0260408301602084016123f7565b801561107b575061107b610e0260208301836123f7565b80156110925750611092610e7a60a08301836125d0565b6110c8576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110d28d82611799565b50600101611009565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661110a57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611157576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156111cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f0919061259a565b10156109815761120283836000611a77565b61098183837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a77565b60006fffffffffffffffffffffffffffffffff8211156112cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160448201527f323820626974730000000000000000000000000000000000000000000000000060648201526084016107ae565b5090565b73ffffffffffffffffffffffffffffffffffffffff8316611320576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661136d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156113da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113fe919061259a565b905080821115611444576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016107ae565b61144f848484611c77565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166114a2576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156114e5576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016107ae565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461153f576040519150601f19603f3d011682016040523d82523d6000602084013e611544565b606091505b5050905080610981576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166115cc576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611619576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561168a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ae919061259a565b90506116bc82868686611ccd565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561172c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611750919061259a565b61175a9190612350565b14611791576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6117af6117a960208301836123f7565b3b151590565b6117e5576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611825576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061183a610dcf60608501604086016123f7565b61184557600061184b565b82608001355b9050600061186761186260608601604087016123f7565b610b06565b9050600061187e61186260808701606088016123f7565b9050826000036118b5576118b561189b60608701604088016123f7565b6118ab60408801602089016123f7565b87608001356110ea565b8460800135821015611900576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016107ae565b60008061191060208801886123f7565b73ffffffffffffffffffffffffffffffffffffffff168561193460a08a018a6125d0565b6040516119429291906126ae565b60006040518083038185875af1925050503d806000811461197f576040519150601f19603f3d011682016040523d82523d6000602084013e611984565b606091505b5091509150816119975761199781611d2b565b60006119ac61186260808a0160608b016123f7565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896119dd60208b018b6123f7565b6119ed60608c0160408d016123f7565b6119fd60808d0160608e016123f7565b8c60800135898711611a0f5786611a19565b611a198a88612350565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611b1757506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611af1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b15919061259a565b155b611ba3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016107ae565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109819084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d35565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109819084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611bf5565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261144f9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611bf5565b8051602082018181fd5b6000611d97826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e449092919063ffffffff16565b9050805160001480611db8575080806020019051810190611db891906126be565b610981576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016107ae565b6060611e538484600085611e5b565b949350505050565b606082471015611eed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016107ae565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f1691906126db565b60006040518083038185875af1925050503d8060008114611f53576040519150601f19603f3d011682016040523d82523d6000602084013e611f58565b606091505b5091509150611f6987838387611f74565b979650505050505050565b6060831561200a5782516000036120035773ffffffffffffffffffffffffffffffffffffffff85163b612003576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016107ae565b5081611e53565b611e53838381511561201f5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ae91906126ed565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120a6576120a6612053565b60405290565b600082601f8301126120bd57600080fd5b813567ffffffffffffffff808211156120d8576120d8612053565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561211e5761211e612053565b8160405283815286602085880101111561213757600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461217b57600080fd5b919050565b801515811461218e57600080fd5b50565b803561217b81612180565b600061014082840312156121af57600080fd5b6121b7612082565b905081358152602082013567ffffffffffffffff808211156121d857600080fd5b6121e4858386016120ac565b602084015260408401359150808211156121fd57600080fd5b5061220a848285016120ac565b60408301525061221c60608301612157565b606082015261222d60808301612157565b608082015261223e60a08301612157565b60a082015260c082013560c082015260e082013560e0820152610100612265818401612191565b90820152610120612277838201612191565b9082015292915050565b60008060006040848603121561229657600080fd5b833567ffffffffffffffff808211156122ae57600080fd5b6122ba8783880161219c565b945060208601359150808211156122d057600080fd5b818601915086601f8301126122e457600080fd5b8135818111156122f357600080fd5b8760208260051b850101111561230857600080fd5b6020830194508093505050509250925092565b60006020828403121561232d57600080fd5b813567ffffffffffffffff81111561234457600080fd5b611e538482850161219c565b81810381811115610bb9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126123ed57600080fd5b9190910192915050565b60006020828403121561240957600080fd5b61241282612157565b9392505050565b60005b8381101561243457818101518382015260200161241c565b50506000910152565b60008151808452612455816020860160208601612419565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124b061016085018361243d565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526124eb838261243d565b9250506060850151612515608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125888187018315159052565b90950151151593019290925250919050565b6000602082840312156125ac57600080fd5b5051919050565b6000602082840312156125c557600080fd5b813561241281612180565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261260557600080fd5b83018035915067ffffffffffffffff82111561262057600080fd5b60200191503681900382131561263557600080fd5b9250929050565b6000808585111561264c57600080fd5b8386111561265957600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126a65780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156126d057600080fd5b815161241281612180565b600082516123ed818460208701612419565b602081526000612412602083018461243d56fea26469706673582212205418f8feac46aa5f5a9d1ef95bb133cef0323e56fa11853f8612bcbc0221becc64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_teleportGateway";
            readonly type: "address";
            readonly internalType: "contract ITeleportGateway";
        }, {
            readonly name: "_dai";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_dstChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_l1Domain";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaMakerTeleport";
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
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaMakerTeleport";
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
        readonly name: "InvalidDestinationChain";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSendingToken";
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
    static createInterface(): MakerTeleportFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MakerTeleportFacet;
}
export {};
