import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CelerCircleBridgeFacet, CelerCircleBridgeFacetInterface } from "../CelerCircleBridgeFacet";
declare type CelerCircleBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CelerCircleBridgeFacet__factory extends ContractFactory {
    constructor(...args: CelerCircleBridgeFacetConstructorParams);
    deploy(_circleBridgeProxy: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CelerCircleBridgeFacet>;
    getDeployTransaction(_circleBridgeProxy: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CelerCircleBridgeFacet;
    connect(signer: Signer): CelerCircleBridgeFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b50604051620027d5380380620027d5833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a0516126e8620000ed600039600081816102440152818161050b01528181610598015281816107ee01526108a501526000818161080f01526108cd01526126e86000f3fe6080604052600436106100295760003560e01c80638fab06631461002e578063bab657d814610043575b600080fd5b61004161003c3660046121f6565b610063565b005b34801561004f57600080fd5b5061004161005e366004612290565b610320565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100de576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100ef34476122d3565b90508580610100015161012e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561016c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761018f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101c6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610204576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610241576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b887f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102cc576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102e18b600001518c60c001518c8c336105df565b60c08c01526102ef8b610727565b50479350505050818111156103135761031360008461030e85856122d3565b610975565b5050600090915550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161039b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556103a88261230d565b806101000151156103e5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103ee8361230d565b8061012001511561042b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104348461230d565b60a081015173ffffffffffffffffffffffffffffffffffffffff16610485576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104c3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610500576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105098561230d565b7f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff1614610593576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105c17f00000000000000000000000000000000000000000000000000000000000000008860c001356109ab565b6105d26105cd8861230d565b610727565b5050600090935550505050565b60008280820361061b576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561062a6001856122d3565b81811061063957610639612319565b905060200281019061064b9190612348565b61065c906080810190606001612386565b9050600061066982610b21565b905073ffffffffffffffffffffffffffffffffffffffff82166106935761069034826122d3565b90505b600061069f8888610bda565b90506106ab8888610ce6565b6106b88a89898985610d53565b6000826106c485610b21565b6106ce91906122d3565b905089811015610719576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60e081015167ffffffffffffffff10156107e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604160248201527f5f627269646765446174612e64657374696e6174696f6e436861696e4964207060448201527f617373656420697320746f6f2062696720746f2066697420696e2075696e743660648201527f3400000000000000000000000000000000000000000000000000000000000000608482015260a401610710565b6108387f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008360c00151611105565b60c081015160e082015160a08301516040517f2fbb00ac000000000000000000000000000000000000000000000000000000008152600481019390935267ffffffffffffffff909116602483015273ffffffffffffffffffffffffffffffffffffffff90811660448301527f0000000000000000000000000000000000000000000000000000000000000000811660648301527f00000000000000000000000000000000000000000000000000000000000000001690632fbb00ac906084016020604051808303816000875af1158015610916573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093a91906123a1565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161096a9190612439565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff8316156109a15761099c838383611248565b505050565b61099c82826113ca565b806000036109e5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a3e5780341015610a3a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610aab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acf919061254c565b905081811015610b15576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610710565b61099c833330856114f4565b600073ffffffffffffffffffffffffffffffffffffffff821615610bd2576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610ba9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcd919061254c565b610bd4565b475b92915050565b60608160008167ffffffffffffffff811115610bf857610bf8611fc8565b604051908082528060200260200182016040528015610c21578160200160208202803683370190505b5090506000805b83811015610cdb57868682818110610c4257610c42612319565b9050602002810190610c549190612348565b610c65906080810190606001612386565b9150610c7082610b21565b838281518110610c8257610c82612319565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610cd35734838281518110610cbb57610cbb612319565b60200260200101818151610ccf91906122d3565b9052505b600101610c28565b509095945050505050565b60005b8181101561099c5736838383818110610d0457610d04612319565b9050602002810190610d169190612348565b9050610d2860e0820160c08301612565565b15610d4a57610d4a610d406060830160408401612386565b82608001356109ab565b50600101610ce9565b8383838382600181146110205760008585610d6f6001856122d3565b818110610d7e57610d7e612319565b9050602002810190610d909190612348565b610da1906080810190606001612386565b9050600089815b81811015610f4c57368d8d83818110610dc357610dc3612319565b9050602002810190610dd59190612348565b9050610e04610dea6060830160408401612386565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e675750610e67610e1d6040830160208401612386565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e7e5750610e7e610e1d6020830183612386565b8015610f035750610f03610e9560a0830183612582565b610ea4916004916000916125ee565b610ead91612618565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f39576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f438f8261170e565b50600101610da8565b505060005b610f5c6001856122d3565b811015611018576000888883818110610f7757610f77612319565b9050602002810190610f899190612348565b610f9a906080810190606001612386565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461100f57858281518110610fe157610fe1612319565b6020026020010151610ff282610b21565b610ffc91906122d3565b9250821561100f5761100f818885610975565b50600101610f51565b5050506110f9565b8760005b818110156110f657368b8b8381811061103f5761103f612319565b90506020028101906110519190612348565b9050611066610dea6060830160408401612386565b8061107f575061107f610e1d6040830160208401612386565b80156110965750611096610e1d6020830183612386565b80156110ad57506110ad610e9560a0830183612582565b6110e3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110ed8d8261170e565b50600101611024565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661112557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611172576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156111e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120b919061254c565b101561099c5761121d838360006119ec565b61099c83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119ec565b73ffffffffffffffffffffffffffffffffffffffff8316611295576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166112e2576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561134f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611373919061254c565b9050808211156113b9576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610710565b6113c4848484611bec565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611417576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561145a576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610710565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146114b4576040519150601f19603f3d011682016040523d82523d6000602084013e6114b9565b606091505b505090508061099c576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611541576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661158e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156115ff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611623919061254c565b905061163182868686611c42565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156116a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c5919061254c565b6116cf91906122d3565b14611706576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61172461171e6020830183612386565b3b151590565b61175a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361179a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006117af610dea6060850160408601612386565b6117ba5760006117c0565b82608001355b905060006117dc6117d76060860160408701612386565b610b21565b905060006117f36117d76080870160608801612386565b90508260000361182a5761182a6118106060870160408801612386565b6118206040880160208901612386565b8760800135611105565b8460800135821015611875576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610710565b6000806118856020880188612386565b73ffffffffffffffffffffffffffffffffffffffff16856118a960a08a018a612582565b6040516118b7929190612660565b60006040518083038185875af1925050503d80600081146118f4576040519150601f19603f3d011682016040523d82523d6000602084013e6118f9565b606091505b50915091508161190c5761190c81611ca0565b60006119216117d760808a0160608b01612386565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961195260208b018b612386565b61196260608c0160408d01612386565b61197260808d0160608e01612386565b8c60800135898711611984578661198e565b61198e8a886122d3565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611a8c57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611a66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a8a919061254c565b155b611b18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610710565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261099c9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611caa565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261099c9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611b6a565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113c49085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611b6a565b8051602082018181fd5b6000611d0c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611db99092919063ffffffff16565b9050805160001480611d2d575080806020019051810190611d2d9190612670565b61099c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610710565b6060611dc88484600085611dd0565b949350505050565b606082471015611e62576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610710565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e8b919061268d565b60006040518083038185875af1925050503d8060008114611ec8576040519150601f19603f3d011682016040523d82523d6000602084013e611ecd565b606091505b5091509150611ede87838387611ee9565b979650505050505050565b60608315611f7f578251600003611f785773ffffffffffffffffffffffffffffffffffffffff85163b611f78576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610710565b5081611dc8565b611dc88383815115611f945781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610710919061269f565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561201b5761201b611fc8565b60405290565b600082601f83011261203257600080fd5b813567ffffffffffffffff8082111561204d5761204d611fc8565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561209357612093611fc8565b816040528381528660208588010111156120ac57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120f057600080fd5b919050565b801515811461210357600080fd5b50565b80356120f0816120f5565b6000610140828403121561212457600080fd5b61212c611ff7565b905081358152602082013567ffffffffffffffff8082111561214d57600080fd5b61215985838601612021565b6020840152604084013591508082111561217257600080fd5b5061217f84828501612021565b604083015250612191606083016120cc565b60608201526121a2608083016120cc565b60808201526121b360a083016120cc565b60a082015260c082013560c082015260e082013560e08201526101006121da818401612106565b908201526101206121ec838201612106565b9082015292915050565b60008060006040848603121561220b57600080fd5b833567ffffffffffffffff8082111561222357600080fd5b61222f87838801612111565b9450602086013591508082111561224557600080fd5b818601915086601f83011261225957600080fd5b81358181111561226857600080fd5b8760208260051b850101111561227d57600080fd5b6020830194508093505050509250925092565b6000602082840312156122a257600080fd5b813567ffffffffffffffff8111156122b957600080fd5b820161014081850312156122cc57600080fd5b9392505050565b81810381811115610bd4577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610bd43683612111565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261237c57600080fd5b9190910192915050565b60006020828403121561239857600080fd5b6122cc826120cc565b6000602082840312156123b357600080fd5b815167ffffffffffffffff811681146122cc57600080fd5b60005b838110156123e65781810151838201526020016123ce565b50506000910152565b600081518084526124078160208601602086016123cb565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124626101608501836123ef565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261249d83826123ef565b92505060608501516124c7608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061253a8187018315159052565b90950151151593019290925250919050565b60006020828403121561255e57600080fd5b5051919050565b60006020828403121561257757600080fd5b81356122cc816120f5565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125b757600080fd5b83018035915067ffffffffffffffff8211156125d257600080fd5b6020019150368190038213156125e757600080fd5b9250929050565b600080858511156125fe57600080fd5b8386111561260b57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126585780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561268257600080fd5b81516122cc816120f5565b6000825161237c8184602087016123cb565b6020815260006122cc60208301846123ef56fea26469706673582212209b6804bcf66b07f4351245704d0f96aa06884e9a42ee7d23661697dbef87fe3764736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_circleBridgeProxy";
            readonly type: "address";
            readonly internalType: "contract ICircleBridgeProxy";
        }, {
            readonly name: "_usdc";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCelerCircleBridge";
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
        readonly name: "swapAndStartBridgeTokensViaCelerCircleBridge";
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
    static createInterface(): CelerCircleBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CelerCircleBridgeFacet;
}
export {};
